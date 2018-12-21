/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Choose Time
 * Created: 2018-12-04 10:18
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-12-04 10:18
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { Events } from '../../utils/events'
import template from '../../utils/template'
import { addClass, qsa, bind, scrollTo, getElScrollbarWidth, proxy, getIndex, reqAnimationFrame, unbind, getSize } from '../../utils/dom'
import Picker from '../picker'
import { isElement, throwError, mixins } from '../../utils/utils'
import { pad, parseDate, compareTwoTime, formatDate } from '../date-picker/utils'
import { CLASS_STATES_ACTIVED, CLASS_STATUS_DISABLED } from '../../utils/constant'
import { getPlacementByAlign } from '../picker/placements'
import { getLocales } from '../../utils/locale'
import { skeletonTpl, optionsTpl } from './template'

// ui class name
const UI_NAME = 'nv-time-picker'

// default config
const defaults = {
  // [ string ] 国际化
  lang: '',
  // [ string | date ] 绑定值
  value: '',
  // [ string | date ] 默认值
  defaultValue: null,
  // [ string ] 格式化
  format: 'HH:mm:ss',
  // [ string ] 自定义样式
  customClass: '',
  // [ string ] 与target的对齐方式
  align: 'left',
  // [ string | date ] 最小时间
  minTime: null,
  // [ string | date ] 最大时间
  maxTime: null,
  // [ boolean ] 是否禁用
  disabled: false,
  // [ boolean ] 显示取消按钮
  cancel: false,
  // [ boolean ] 显示确定按钮
  confirm: false,
  // Picker宽度
  width: 160,
  // 行高
  itemHeight: 32
}

// selectors
const Selectors = {
  hour: '.hour-select',
  minute: '.minute-select',
  second: '.second-select',
  select: '.nv-time-picker__select',
  option: '.nv-time-picker__option',
  cancel: '.nv-btn__cancel',
  confirm: '.nv-btn__confirm'
}

// config of every part of time
const TIME_MAP = [{
  name: 'hour',
  key: 'H',
  size: 24,
  useKey: 'useHour'
},
{
  name: 'minute',
  key: 'm',
  size: 60,
  useKey: 'useMinute'
},
{
  name: 'second',
  key: 's',
  size: 60,
  useKey: 'useSecond'
}
]


/**
 * 获取时分秒在value字符串中所处的位置
 * @private
 * @param {*} type 
 * @param {*} format 
 */
function getPartFormatIndexRange(type, format) {
  let start
  let len
  switch (type) {
    case 'hour':
      len = /HH/.test(format) ? 2 : 1
      start = format.indexOf(len === 2 ? 'HH' : 'H')
      break
    case 'minute':
      len = /mm/.test(format) ? 2 : 1
      start = format.indexOf(len === 2 ? 'mm' : 'm')
      break
    case 'second':
      len = /ss/.test(format) ? 2 : 1
      start = format.indexOf(len === 2 ? 'ss' : 's')
      break
  }
  return [start, start + len]
}


/**
 * 获取下拉列表
 * @param {*} max 
 */
function genOptions(max) {
  let i = -1
  let options = []
  while (++i < max) {
    options.push({
      value: i,
      label: pad(i)
    })
  }
  return options
}


/**
 * render
 * @private
 */
function render() {
  const { props, states } = this
  const $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)

  // 为了隐藏滚动条, scroll中有个 -20px的margin值
  let scrollBarWidth = getElScrollbarWidth()
  let padding = scrollBarWidth ? 0 : 20

  $el.innerHTML = template(skeletonTpl, {
    cancel: props.cancel ? states.locales.cancel : false,
    confirm: props.confirm ? states.locales.confirm : false,
    padding,
    useHour: states.useHour,
    useMinute: states.useMinute,
    useSecond: states.useSecond
  })

  states.$hour = qsa(Selectors.hour, $el)[0]
  states.$minute = qsa(Selectors.minute, $el)[0]
  states.$second = qsa(Selectors.second, $el)[0]

  TIME_MAP.forEach(item => {
    if (states[item.useKey]) {
      let $wrap = states[`$${item.name}`]
      qsa(Selectors.select, $wrap)[0].innerHTML = template(optionsTpl, {
        options: genOptions(item.size)
      })
      // 缓存DOM
      states[`$${item.name}Options`] = qsa(Selectors.option, $wrap)
    } else {
      delete states[`$${item.name}`]
    }
  })

  states.$el = $el
  states.$confirm = qsa(Selectors.confirm, $el)[0]
  states.$cancel = qsa(Selectors.cancel, $el)[0]
  bindEvents.call(this)
  initPickerInstance.call(this)

  if (states.isInput) {
    states.$target.value = this.getValue(true)
  }
}


/**
 * 初始化Picker
 * @private
 */
function initPickerInstance() {
  const { props, states } = this
  states.pickerInstance = new Picker(states.$target, {
    content: states.$el,
    trigger: 'click',
    placement: getPlacementByAlign(props.align),
    showArrow: false,
    margin: 2,
    disabled: props.disabled
  })
  states.pickerInstance
    .on('open', () => {
      let targetWidth = states.$target.offsetWidth
      let width
      if (props.width === 'auto') {
        width = targetWidth
      } else if (props.width) {
        width = getSize(props.width)
      }
      width = Math.max(150, width)
      states.$el.style.width = width + 'px'

      states.pickeOpened = true
      // 打开时重新设定当前值
      states.value = states.bindValue
      setTimeMap.call(this)
      autoScroll.call(this)
      // 在scroll之后绑定Scroll事件，防止Scroll事件触发setValue
      setTimeout(() => bindScrollEvents.call(this), 0)
      this.emit('open', states.pickerInstance)
    })
    .on('close', () => {
      states.pickeOpened = false
      unbindScrollEvents.call(this)
      if (states.$confirm && +states.value !== +states.bindValue) {
        this.setValue(states.bindValue)
      }
      this.emit('close', states.pickerInstance)
    })
}


/**
 * 容器滚动事件
 * @event
 * @param {*} type 
 */
function handleWrapScroll(type) {
  const { props } = this
  const $scroller = this.states[`$${type}`]
  let ticking = $scroller.ticking
  const self = this
  if (!ticking) {
    reqAnimationFrame(function () {
      $scroller.ticking = false
      const scrollTop = $scroller.scrollTop
      let value = Math.min(Math.floor(scrollTop / props.itemHeight), type === 'hour' ? 23 : 59)
      if (isDisabledItem.call(self, type, value)) {
        return
      }
      self.states.map[type] = value
      setPanelValue.call(self, '', false)
    })
    $scroller.ticking = true
  }
}


/**
 * 滚动后自动调整滚动条位置事件
 * @event
 * @param {*} type 
 */
function handleAdjustScroll(type) {
  const { props } = this
  const $scroller = this.states[`$${type}`]
  const scrollTop = $scroller.scrollTop
  let value = Math.min(Math.floor(scrollTop / props.itemHeight), type === 'hour' ? 23 : 59)
  scrollTo($scroller, value * props.itemHeight, 60)
}


/**
 * 鼠标进入事件
 * @event
 * @param {*} type 
 */
function handleMouseenter(type) {
  const { states } = this
  states.focusPanelType = type
  if (states.isInput) {
    setSelectionRange.call(this, type)
  }
}


/**
 * 确定按钮事件
 * @event
 */
function handleConfirm() {
  const { states } = this
  let oldValue = states.oldValue
  let value = states.value || getValueByMap.call(this)
  states.bindValue = states.value = value
  this.emit('done', this.getValue(true), value, oldValue)
  this.close()
}


/**
 * 取消按钮被点击事件
 * @private
 */
function handleCancel() {
  // const { states } = this
  // 关闭时重新设定值，取消事件不会更新bindValue
  // states.value = states.bindValue
  // setTimeMap.call(this)
  // if (states.isInput) {
  //   states.$target.value = this.getValue(true)
  // }
  this.close()
}


/**
 * 绑定滚动事件
 * @private
 */
function bindScrollEvents() {
  const { states } = this
  const handles = states.handles

  // 先解绑
  unbindScrollEvents.call(this)

  states.useHour && bind(states.$hour, 'scroll', handles.hourWrapScroll)
  states.useMinute && bind(states.$minute, 'scroll', handles.minuteWrapScroll)
  states.useSecond && bind(states.$second, 'scroll', handles.secondWrapScroll)
}


/**
 * 解绑滚动事件
 * @private
 */
function unbindScrollEvents() {
  const { states } = this
  const handles = states.handles
  states.useHour && unbind(states.$hour, 'scroll', handles.hourWrapScroll)
  states.useMinute && unbind(states.$minute, 'scroll', handles.minuteWrapScroll)
  states.useSecond && unbind(states.$second, 'scroll', handles.secondWrapScroll)
}


/**
 * target value change event
 * @event
 * @param {*} event 
 */
function handleInputChange(event) {
  let value = event.target.value
  this.setValue(value)
  this.states.bindValue = this.getValue()
}


/**
 * target keydown event
 * @event
 * @param {*} event 
 */
function handleKeydown(event) {
  const { states, props } = this
  if (props.disabled || !states.pickeOpened) {
    return
  }
  let code = event.keyCode
  if (code === 27) {
    event.preventDefault()
    states.pickerInstance.close()
    return
  }

  if (code === 38 || code === 40 && states.focusPanelType) {
    event.preventDefault()
    setMapByKeydownEvent.call(this, code === 38 ? 'prev' : 'next')
    return
  }
}


/**
 * 快捷键选择值
 * @private
 * @param {*} type 
 * @param {*} value 
 */
function setMapByKeydownEvent(type, value) {
  const { states, props } = this
  let part = states.focusPanelType
  let map = states.map
  value = value === void 0 ? map[part] : value
  let max = part === 'hour' ? 23 : 59
  value = type === 'prev' ? --value : ++value
  if (value < 0) {
    value = max
  }
  if (value > max) {
    value = 0
  }
  if (isDisabledItem.call(this, part, value)) {
    return setMapByKeydownEvent.call(this, type, value)
  }
  map[part] = value

  scrollTo(states[`$${part}`], value * props.itemHeight, 0)
}


/**
 * bind dom events
 * @private
 */
function bindEvents() {
  const { states } = this
  const handles = states.handles = Object.create(null)
  const self = this

  handles.hourWrapScroll = handleWrapScroll.bind(this, 'hour')
  handles.minuteWrapScroll = handleWrapScroll.bind(this, 'minute')
  handles.secondWrapScroll = handleWrapScroll.bind(this, 'second')
  handles.hourAdjustScroll = handleAdjustScroll.bind(this, 'hour')
  handles.minuteAdjustScroll = handleAdjustScroll.bind(this, 'minute')
  handles.secondAdjustScroll = handleAdjustScroll.bind(this, 'second')
  handles.hourMouseenter = handleMouseenter.bind(this, 'hour')
  handles.minuteMouseenter = handleMouseenter.bind(this, 'minute')
  handles.secondMouseenter = handleMouseenter.bind(this, 'second')
  handles.inputChange = handleInputChange.bind(this)
  handles.keydown = handleKeydown.bind(this)

  handles.optionClick = proxy(states.$el, Selectors.option, function () {
    let $parent = this.parentNode.parentNode
    let type = $parent === states.$hour ? 'hour' : ($parent === states.$minute ? 'minute' : 'second')
    let index = getIndex(this, states[`$${type}Options`])
    if (isDisabledItem.call(self, type, index)) {
      return
    }
    states.map[type] = index
    setPanelValue.call(self)
  })

  handles.confirm = handleConfirm.bind(this)
  handles.cancel = handleCancel.bind(this)

  if (states.useHour) {
    bind(states.$hour, 'mouseleave', handles.hourAdjustScroll)
    bind(states.$hour, 'mouseenter', handles.hourMouseenter)
  }

  if (states.useMinute) {
    bind(states.$minute, 'mouseleave', handles.minuteAdjustScroll)
    bind(states.$minute, 'mouseenter', handles.minuteMouseenter)
  }

  if (states.useSecond) {
    bind(states.$second, 'mouseleave', handles.secondAdjustScroll)
    bind(states.$second, 'mouseenter', handles.secondMouseenter)
  }

  bind(states.$el, 'click', handles.optionClick)
  states.$confirm && bind(states.$confirm, 'click', handles.confirm)
  states.$cancel && bind(states.$cancel, 'click', handles.cancel)

  if (states.isInput) {
    bind(states.$target, 'change', handles.inputChange)
    bind(states.$target, 'keydown', handles.keydown)
  }
}


/**
 * unbind dom events
 * @private
 */
function unbindEvents() {
  const { states } = this
  const handles = states.handles
  unbindScrollEvents.call(this)

  if (states.useHour) {
    unbind(states.$hour, 'mouseleave', handles.hourAdjustScroll)
    unbind(states.$hour, 'mouseenter', handles.hourMouseenter)
  }

  if (states.useMinute) {
    unbind(states.$minute, 'mouseleave', handles.minuteAdjustScroll)
    unbind(states.$minute, 'mouseenter', handles.minuteMouseenter)
  }

  if (states.useSecond) {
    unbind(states.$second, 'mouseleave', handles.secondAdjustScroll)
    unbind(states.$second, 'mouseenter', handles.secondMouseenter)
  }

  unbind(states.$el, 'click', handles.optionClick)

  states.$confirm && unbind(states.$confirm, 'click', handles.confirm)
  states.$cancel && unbind(states.$cancel, 'click', handles.cancel)

  if (states.isInput) {
    unbind(states.$target, 'change', handles.inputChange)
    unbind(states.$target, 'keydown', handles.keydown)
  }
}


/**
 * 校验格式
 * @private
 */
function checkFormat() {
  const { props, states } = this
  let count = 0
  TIME_MAP.forEach(item => {
    states[item.useKey] = props.format.indexOf(item.key) > -1
    states[item.useKey] && count++
  })
  if (!count) {
    throwError('无效的格式')
  }
  states.hourIndexs = getPartFormatIndexRange('hour', props.format)
  states.minuteIndexs = getPartFormatIndexRange('minute', props.format)
  states.secondIndexs = getPartFormatIndexRange('second', props.format)
}


/**
 * 设置最小最大值Map
 * @private
 */
function setRangeMap() {
  const { props, states } = this
  let minHour = -1
  let minMinute = -1
  let minSecond = -1
  let maxHour = 24
  let maxMinute = 60
  let maxSecond = 60
  if (props.minTime) {
    minHour = props.minTime.getHours()
    minMinute = props.minTime.getMinutes()
    minSecond = props.minTime.getSeconds()
  }
  if (props.maxTime) {
    maxHour = props.maxTime.getHours()
    maxMinute = props.maxTime.getMinutes()
    maxSecond = props.maxTime.getSeconds()
  }
  states.minMap = [minHour, minMinute, minSecond]
  states.maxMap = [maxHour, maxMinute, maxSecond]
}


/**
 * 设置target选取
 * @private
 * @param {*} type 
 */
function setSelectionRange(type) {
  const { states } = this
  let range = states[`${type}Indexs`]
  states.$target.setSelectionRange(range[0], range[1])
}


/**
 * 将时间转换为字典对象
 * 当该对象改变的时候，将会重置时间选项的选中，禁用状态等
 * 该对象仅供Picker的初始状态使用
 * 字典中对象的hour等值不一定是真实value的值
 * 其值可能是：
 * 1. value
 * 2. defaultValue
 * 3. now (new Date())
 * 4. minTime
 * 5. maxTime
 * @private
 */
function setTimeMap() {
  const { props, states } = this
  const map = Object.create(null)
  let value = states.value
  if (!value) {
    value = getEffectiveValue.call(this, props.defaultValue || props.minTime)
  }
  if (value) {
    map.hour = value.getHours()
    map.minute = value.getMinutes()
    map.second = value.getSeconds()
  } else {
    map.hour = map.minute = map.second = 0
  }
  states.map = map
  setItemsStatus.call(this)
}


/**
 * 通过map获取value
 * @private
 */
function getValueByMap() {
  const { states } = this
  const map = states.map
  let values = []
  states.useHour && values.push(map.hour)
  states.useMinute && values.push(map.minute)
  states.useSecond && values.push(map.second)
  return values.join(':')
}


/**
 * 设置所有选项的状态
 * @private
 */
function setItemsStatus() {
  const { states } = this
  states.useHour && toggleItemsStatus.call(this, 'hour')
  states.useMinute && toggleItemsStatus.call(this, 'minute')
  states.useSecond && toggleItemsStatus.call(this, 'second')
}


/**
 * 设置指定类型的选项的状态
 * @param {string} type 
 * @private
 */
function toggleItemsStatus(type) {
  const { states } = this
  let $options = states[`$${type}Options`]
  const value = states.map[type]
  $options.forEach(($item, index) => {
    let isDisabled = isDisabledItem.call(this, type, index)
    let isActived = index === value
    $item.classList[isActived ? 'add' : 'remove'](CLASS_STATES_ACTIVED)
    $item.classList[isDisabled ? 'add' : 'remove'](CLASS_STATUS_DISABLED)
  })
}


/**
 * 自动滚动
 * @private
 */
function autoScroll() {
  const { states, props } = this
  states.useHour && scrollTo(states.$hour, states.map.hour * props.itemHeight, 0)
  states.useMinute && scrollTo(states.$minute, states.map.minute * props.itemHeight, 0)
  states.useSecond && scrollTo(states.$second, states.map.second * props.itemHeight, 0)
}


/**
 * 获取一个有效日期
 * @param {*} value 
 * @private
 * @returns {null | Date}
 */
function getEffectiveValue(value) {
  const { props } = this
  value = parseDate(value, props.format)
  let { minTime, maxTime } = props
  if (!value || (!minTime && !maxTime)) {
    return value
  }
  if (minTime || maxTime) {
    if (minTime && compareTwoTime(value, minTime) === -1) {
      value = minTime
    }
    if (maxTime && compareTwoTime(value, maxTime) === 1) {
      value = maxTime
    }
  }
  return value
}


/**
 *
 * 校验传入值是否被禁用
 * @private
 * @param {*} type
 * @param {*} value
 * @returns {Boolean}
 */
function isDisabledItem(type, value) {
  const { states, props } = this
  if (props.disabled) {
    return true
  }
  const [minHour, minMinute] = states.minMap
  const [maxHour, maxMinute] = states.maxMap

  if (type === 'hour') {
    return value < minHour || value > maxHour
  }

  const { map } = states
  if (type === 'minute') {
    return (
      map.hour < minHour ||
      map.hour > maxHour ||
      (map.hour === minHour && (value < minMinute)) ||
      (map.hour === maxHour && (value > maxMinute))
    )
  }

  if (type === 'second') {
    let time = new Date(1970, 0, 1, map.hour, map.minute, value)
    let res = false
    if (props.minTime) {
      // time < minTime
      res = compareTwoTime(props.minTime, time) === 1
    }
    if (!res && props.maxTime) {
      // time > maxTime
      res = compareTwoTime(props.maxTime, time) === -1
    }
    return res
  }
  return false
}


/**
 * set value
 * 设置的不是bindValue
 * @param {*} value 
 * @param {*} scroll 
 */
function setPanelValue(value, scroll = true) {
  const { states, props } = this
  if (props.disabled) {
    return
  }
  let oldValue = states.value
  value = getEffectiveValue.call(this, value || getValueByMap.call(this))
  if (!value) {
    value = oldValue
  }
  let newValue = value
  states.value = newValue
  let formatValue = this.getValue(true)
  // 设置target的value
  if (states.isInput) {
    states.$target.value = formatValue
    states.$target.focus()
  }
  if (+newValue !== +oldValue) {
    this.emit('change', formatValue, newValue, oldValue)
  }
  if (!states.$confirm) {
    let bindValue = states.bindValue
    if (+bindValue !== +newValue) {
      states.bindValue = newValue
      this.emit('done', formatValue, newValue, bindValue)
    }
  }

  setTimeMap.call(this)
  scroll && autoScroll.call(this)
}



/**
 * TimePicker Component
 * @date 2018-12-05
 * @export
 * @class TimePicker
 * @extends {Events}
 */
export class TimePicker extends Events {

  /**
   * Creates an instance of TimePicker.
   * @date 2018-12-05
   * @param {*} target
   * @param {*} options
   * @memberof TimePicker
   */
  constructor(target, options) {
    super()
    if (!(this instanceof TimePicker)) {
      return new TimePicker(target, options)
    }

    if (!isElement(target)) {
      throwError('\'target\' 必须是一个DOM元素.')
    }

    const props = this.props = mixins({}, defaults, options || {})
    const states = this.states = Object.create(null)
    states.$target = target
    states.isInput = target.nodeName === 'INPUT'
    states.locales = getLocales(props.lang).datePicker

    // 校验格式
    checkFormat.call(this)

    // 最小最大值
    props.minTime = parseDate(props.minTime, props.format)
    props.maxTime = parseDate(props.maxTime, props.format)
    setRangeMap.call(this)

    // get value
    let value = props.value
    if (!value && states.isInput) {
      value = target.value
    }
    value = getEffectiveValue.call(this, value)
    states.bindValue = states.value = value

    // 当前激活的Panel
    states.focusPanelType = null

    render.call(this)
  }


  /**
   * set value
   * 会同时设定value和bindValue
   * @date 2018-12-05
   * @param {*} value
   * @memberof TimePicker
   */
  setValue(value) {
    setPanelValue.call(this, value)
    let bindValue = this.states.bindValue
    if (+bindValue !== +this.states.value) {
      this.states.bindValue = this.states.value
      this.emit('done', this.getValue(true), this.states.value, bindValue)
    }
  }


  /**
   * clear value
   * @public
   * @memberof TimePicker
   */
  clear() {
    const { states } = this
    let oldValue = states.value
    let oldBindValue = states.bindValue
    states.value = states.bindValue = null
    this.close()
    if (states.isInput) {
      states.$target.value = ''
      states.$target.focus()
    }
    if (+oldValue !== 0) {
      this.emit('change', '', null, oldValue)
    }
    if (+oldBindValue !== 0) {
      this.emit('done', '', null, oldBindValue)
    }
  }


  /**
   * get current value
   * @date 2018-12-05
   * @param {*} isFormat
   * @returns
   * @memberof TimePicker
   */
  getValue(isFormat) {
    return isFormat ? formatDate(this.states.value, this.props.format) : this.states.value
  }


  /**
   * 设置最小时间
   * @public
   * @param {*} value
   * @memberof TimePicker
   */
  setMinTime(value) {
    this.props.minTime = value
    setRangeMap.call(this)
    this.states.pickeOpened && setTimeMap.call(this)
  }


  /**
   * 设置最大时间
   * @public
   * @param {*} value
   * @memberof TimePicker
   */
  setMaxTime(value) {
    this.props.maxTime = value
    setRangeMap.call(this)
    this.states.pickeOpened && setTimeMap.call(this)
  }


  /**
   * open picker
   * @date 2018-11-28
   * @memberof ColorPicker
   */
  open() {
    if (this.states.pickerInstance && !this.states.pickeOpened) {
      this.states.pickerInstance.open()
    }
  }


  /**
   * close picker
   * @date 2018-11-28
   * @memberof ColorPicker
   */
  close() {
    if (this.states.pickerInstance && this.states.pickeOpened) {
      this.states.pickerInstance.close()
    }
  }


  /**
   * disable the component
   * @date 2018-11-28
   * @memberof Select
   */
  disable() {
    const { props, states } = this
    props.disabled = true
    if (states.pickerInstance) {
      states.pickerInstance.close()
      states.pickerInstance.disable()
    }
  }


  /**
   * enable the component
   * @date 2018-11-28
   * @memberof Select
   */
  enable() {
    const { props, states } = this
    props.disabled = false
    if (states.pickerInstance) {
      states.pickerInstance && states.pickerInstance.enable()
    }
  }


  /**
   * destroy
   * @date 2018-12-05
   * @memberof TimePicker
   */
  destroy() {
    unbindEvents.call(this)
    const { states } = this
    states.pickerInstance && states.pickerInstance.destroy()
    this.states = null
    this.props = null
    this._events = null
  }
}

export default TimePicker