/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Used for ...
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

import { addClass, insertAfter, qsa, bind, scrollTo, removeNode, getElScrollbarWidth, proxy, getIndex } from '../../utils/dom'
import Picker from '../picker'
import { isElement, throwError, mixins } from '../../utils/utils'
import { skeletonTpl, optionsTpl } from './template'
import { pad, parseDate, compareTwoTime, formatDate } from '../date-picker/utils'
import { CLASS_STATES_ACTIVED, CLASS_STATUS_DISABLED } from '../../utils/constant'
import { getPlacementByAlign } from '../picker/placements';

const UI_NAME = 'nv-time-picker'

const defaults = {
  value: '',
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
}

const Selectors = {
  hour: '.hour-select',
  minute: '.minute-select',
  second: '.second-select',
  select: '.nv-time-picker__select',
  option: '.nv-time-picker__option'
}

// config of every part of time
const TIME_MAP = [
  {
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


function render() {
  const { props, states } = this
  const $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)
  let scrollWidth = getElScrollbarWidth()
  $el.innerHTML = template(skeletonTpl, {
    scrollWidth
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
      removeNode(states[`$${item.name}`])
      delete states[`$${item.name}`]
    }
  })

  

  states.$el = $el
  bindEvents.call(this)
  setTimeMap.call(this)
  initPickerInstance.call(this)
}


function initPickerInstance () {
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
      states.pickeOpened = true
      this.setValue(states.bindValue)
      this.emit('open', states.pickerInstance)
    })
    .on('close', () => {
      states.pickeOpened = false
      this.emit('close', states.pickerInstance)
    })
}



function handleWrapScroll(type) {
  const $scroller = this.states[`$${type}`]
  const scrollTop = $scroller.scrollTop
  let value = Math.min(Math.floor(scrollTop / 32), type === 'hour' ? 23 : 59)
  if (isDisabledItem.call(this, type, value)) {
    return
  }
  this.states.map[type] = value
  this.setValue(getValueByMap.call(this), false)
}


function handleAdjustScroll(type) {
  const $scroller = this.states[`$${type}`]
  const scrollTop = $scroller.scrollTop
  let value = Math.min(Math.floor(scrollTop / 32), type === 'hour' ? 23 : 59)
  if (isDisabledItem.call(this, type, value)) {
    return
  }
  scrollTo($scroller, value * 32, 60)
}


function handleMouseenter(type) {
  const { props, states } = this
  states.focusPanelType = type
  if (states.isInput) {
    setSelectionRange.call(this, type)
  }
}


function bindEvents() {
  const { props, states } = this
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

  handles.optionClick = proxy(states.$el, Selectors.option, function (e) {
    let $parent = this.parentNode.parentNode
    let type = $parent === states.$hour ? 'hour' : ($parent === states.$minute ? 'minute' : 'second')
    let index = getIndex(this, states[`$${type}Options`])
    if (isDisabledItem.call(self, type, index)) {
      return
    }
    states.map[type] = index
    self.setValue(getValueByMap.call(self)) 
  })



  bind(states.$hour, 'scroll', handles.hourWrapScroll)
  bind(states.$hour, 'mouseenter', handles.hourAdjustScroll)
  bind(states.$hour, 'mouseleave', handles.hourAdjustScroll)
  bind(states.$hour, 'mouseenter', handles.hourMouseenter)

  bind(states.$minute, 'scroll', handles.minuteWrapScroll)
  bind(states.$minute, 'mouseenter', handles.minuteAdjustScroll)
  bind(states.$minute, 'mouseleave', handles.minuteAdjustScroll)
  bind(states.$minute, 'mouseenter', handles.minuteMouseenter)

  bind(states.$second, 'scroll', handles.secondWrapScroll)
  bind(states.$second, 'mouseenter', handles.secondAdjustScroll)
  bind(states.$second, 'mouseleave', handles.secondAdjustScroll)
  bind(states.$second, 'mouseenter', handles.secondMouseenter)

  bind(states.$el, 'click', handles.optionClick)


}



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
  const { states } = this
  const map = Object.create(null)
  let value = states.value
  if (!value) {
    value = getEffectiveValue.call(this, new Date())
  }
  map.hour = value.getHours()
  map.minute = value.getMinutes()
  map.second = value.getSeconds()
  states.map = map
  setItemsStatus.call(this)
}


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




function autoScroll() {
  const { states } = this
  states.useHour && scrollTo(states.$hour, states.map.hour * 32, 0)
  states.useMinute && scrollTo(states.$minute, states.map.minute * 32, 0)
  states.useSecond && scrollTo(states.$second, states.map.second * 32, 0)
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


export class TimePicker extends Events {
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

    // 校验格式
    checkFormat.call(this)

    props.minTime = parseDate(props.minTime, props.format)
    props.maxTime = parseDate(props.maxTime, props.format)

    setRangeMap.call(this)

    let value = getEffectiveValue.call(this, props.value)
    states.bindValue = states.value = value
    // 当前激活的Panel
    states.focusPanelType = null



    render.call(this)
  }

  setValue(value, scroll = true) {
    const { states, props } = this
    if (props.disabled) {
      return
    }
    let oldValue = states.value
    let newValue
    if (value === null) {
      newValue = ''
    } else {
      value = getEffectiveValue.call(this, value)
      if (!value) {
        value = oldValue
      }
      newValue = value
    }

    newValue = parseDate(newValue, props.format)
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

    setTimeMap.call(this)
    scroll && autoScroll.call(this)
  }

  getValue(isFormat) {
    return isFormat ? formatDate(this.states.value, this.props.format) : this.states.value
  }
}

export default TimePicker