/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: time select
 * Created: 2018-12-04 10:18
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2019-03-26 02:09
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2019, NovaStar Tech Co., Ltd
 */


import Events from '../../utils/events'
import template from '../../utils/template'
import { getLocales } from '../../utils/locale'
import { isElement, throwError, mixins } from '../../utils/utils'
import {qsa, proxy, bind, addClass, getSize, unbind } from '../../utils/dom'
import { formatDate, parseDate, pad } from '../date-picker/utils'
import Picker from '../picker'
import { getPlacementByAlign } from '../picker/placements'

import { skeletonTpl, optionsTpl } from './template'

// ui class name
const UI_NAME = 'nv-time-picker'

// time keys map
const KEY_MAP = {
  hour: {
    min: 0,
    max: 23,
    pad: 2,
  },
  minute: {
    min: 0,
    max: 59,
    pad: 2
  },
  second: {
    min: 0,
    max: 59,
    pad: 2
  },
  ms: {
    min: 0,
    max: 999,
    pad: 3
  },
}

// config
const defaults = {
  // [ string ] 国际化
  lang: '',
  // [ string | date ] 绑定值
  value: '',
  // [ string | date ] value为空时的取值，默认为 00:00:00
  defaultValue: '',
  // [ string ] 格式化
  format: 'HH:mm:ss',
  // [ string ] 自定义样式
  customClass: '',
  // [ string ] 与target的对齐方式
  align: 'left',
  // [ boolean ] 显示此刻按钮
  now: false,
  // [ boolean ] 显示确定按钮
  confirm: false,
  // [ boolean ] 是否禁用
  disabled: false,
  // [ boolean ] 显示微调控件
  spinner: true, 
}


// selectors
const Selectors = {
  input: '.nv-input',
  hourInput: '.js-hour',
  minuteInput: '.js-minute',
  secondInput: '.js-second',
  msInput: '.js-ms',
  spinner: '.time-spinner',
  hourSpinner: '.js-spinner-hour',
  minuteSpinner: '.js-spinner-minute',
  secondSpinner: '.js-spinner-second',
  msSpinner: '.js-spinner-ms',
  spinnerCtrl: '.js-spinner-ctrl',
  now: '.js-btn-now',
  confirm: '.js-btn-confirm',
}


/**
 * render
 * @private
 * @date 2019-03-26
 */
function render() {
  const { props, states } = this

  const $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)

  $el.innerHTML = template(skeletonTpl, {
    useHour: states.useHour,
    useMinute: states.useMinute,
    useSecond: states.useSecond,
    useMs: states.useMs,
    now: props.now ? states.locales.now : false,
    confirm: props.confirm ? states.locales.confirm : false,
    spinner: props.spinner
  })

  if (states.useCount === 2) {
    addClass($el, 'is-simple')
  }

  states.$el = $el
  states.$hourInput = qsa(Selectors.hourInput, $el)[0]
  states.$minuteInput = qsa(Selectors.minuteInput, $el)[0]
  states.$secondInput = qsa(Selectors.secondInput, $el)[0]
  states.$msInput = qsa(Selectors.msInput, $el)[0]
  states.$hourSpinner = qsa(Selectors.hourSpinner, $el)[0]
  states.$minuteSpinner = qsa(Selectors.minuteSpinner, $el)[0]
  states.$secondSpinner = qsa(Selectors.secondSpinner, $el)[0]
  states.$msSpinner = qsa(Selectors.msSpinner, $el)[0]
  states.$now = qsa(Selectors.now, $el)[0]
  states.$confirm = qsa(Selectors.confirm, $el)[0]
  states.$inputs = qsa(Selectors.input, $el)
  updateDom.call(this)
  bindEvents.call(this)

  states.isInput && (states.$target.value = this.getValue(true))
  initPickerInstance.call(this)
}


/**
 * 初始化Picker
 * @private
 * @date 2019-03-26
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
      width = Math.max(168, width)
      states.$el.style.width = width + 'px'
      states.pickeOpened = true
      // 打开时重新设定当前值
      states.value = states.bindValue
      setTimeMap.call(this)
      updateDom.call(this)
      this.emit('open', states.pickerInstance)
      // 第一个输入框聚焦
      states.$inputs.length && states.$inputs[0].focus()
    })
    .on('close', () => {
      states.pickeOpened = false
      if (props.confirm) {
        this.setValue(states.bindValue)
      }
      this.emit('close', states.pickerInstance)
    })
}


/**
 * 绑定滚轮事件
 * @private
 * @date 2019-03-26
 * @param {*} event
 * @param {*} instance
 */
function handleMousewheel(event, instance) {
  event.preventDefault()
  const key = this.getAttribute('data-key')
  const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail))
  updateMapBySpinner.call(instance, key, delta < 0 ? 'next' : 'prev')
}


/**
 * 事件绑定
 * @private
 * @date 2019-03-26
 */
function bindEvents() {
  const { states } = this
  const handles = states.handles = Object.create(null)
  const _ = this
  handles.spinnerCtrl = proxy(states.$el, Selectors.spinnerCtrl, function () {
    const key = this.getAttribute('data-key')
    const action = this.getAttribute('data-action')
    if (key && action) {
      updateMapBySpinner.call(_, key, action)
    }
  })

  // input focus
  handles.inputFocus = proxy(states.$el, Selectors.input, function () {
    this.select()
  })

  // input change
  handles.inputChange = proxy(states.$el, Selectors.input, function () {
    const key = this.getAttribute('data-key')
    let value = this.value.trim()
    if (value === '') {
      value = void 0
    }
    value = +value
    if (isNaN(value)) {
      value = states.map[key]
    }
    const { min, max } = KEY_MAP[key]
    if (value < min) {
      value = min
    }
    if (value > max) {
      value = max
    }
    states.map[key] = value
    updateMapBySpinner.call(_, key, 'current')
  })


  // 键盘事件
  handles.inputKeydown = proxy(states.$el, Selectors.input, function (event) {
    let code = event.keyCode
    // 38 37 prev
    // 39 40 next
    const key = this.getAttribute('data-key')
    if (code >= 37 && code <= 40) {
      event.preventDefault()
      const action = code === 37 || code === 38 ? 'prev' : 'next'
      updateMapBySpinner.call(_, key, action)
      return
    }
  })


  // 滚轮
  handles.inputMouseWheel = proxy(states.$el, Selectors.input, function (event) {
    handleMousewheel.call(this, event, _)
  })

  handles.spinnerMouseWheel = proxy(states.$el, Selectors.spinner, function (event) {
    handleMousewheel.call(this, event, _)
  })

  // 鼠标滑过时对应输入框聚焦
  handles.spinnerMouseover = proxy(states.$el, Selectors.spinner, function () {
    const key = this.getAttribute('data-key')
    const $input = states[`$${key}Input`]
    $input && $input.focus()
  })

  handles.nowClick = function () {
    states.value = states.bindValue = new Date()
    setTimeMap.call(_)
    updateDom.call(_)
    setValue.call(_, states.value, true, true)
    _.close()
  }

  handles.confirm = function () {
    setValue.call(_, states.value, true, true)
    _.close()
  }

  bind(states.$el, 'click', handles.spinnerCtrl)
  bind(states.$el, 'focusin', handles.inputFocus)
  bind(states.$el, 'change', handles.inputChange)
  bind(states.$el, 'keydown', handles.inputKeydown)
  bind(states.$el, 'mousewheel', handles.inputMouseWheel)
  bind(states.$el, 'mousewheel', handles.spinnerMouseWheel)
  bind(states.$el, 'DOMMouseScroll', handles.inputMouseWheel)
  bind(states.$el, 'DOMMouseScroll', handles.spinnerMouseWheel)
  bind(states.$el, 'mouseover', handles.spinnerMouseover)
  states.$now && bind(states.$now, 'click', handles.nowClick)
  states.$confirm && bind(states.$confirm, 'click', handles.confirm)
}


/**
 * 事件解绑
 * @private
 * @date 2019-03-26
 */
function unbindEvents () {
  const {states} = this
  const {handles} = states
  unbind(states.$el, 'click', handles.spinnerCtrl)
  unbind(states.$el, 'focusin', handles.inputFocus)
  unbind(states.$el, 'change', handles.inputChange)
  unbind(states.$el, 'keydown', handles.inputKeydown)
  unbind(states.$el, 'mousewheel', handles.inputMouseWheel)
  unbind(states.$el, 'mousewheel', handles.spinnerMouseWheel)
  unbind(states.$el, 'DOMMouseScroll', handles.inputMouseWheel)
  unbind(states.$el, 'DOMMouseScroll', handles.spinnerMouseWheel)
  unbind(states.$el, 'mouseover', handles.spinnerMouseover)
  states.$now && unbind(states.$now, 'click', handles.nowClick)
  states.$confirm && unbind(states.$confirm, 'click', handles.confirm)
}


/**
 * 更新 SpinnerItems
 * @date 2019-03-26
 * @param {*} $el
 * @param {*} value
 * @param {*} min
 * @param {*} max
 * @param {number} [padLen=2]
 */
function updateSpinnerItems($el, value, min, max, padLen = 2) {
  let prev = value - 1
  let next = value + 1
  const options = [
    {
      value: prev,
      label: pad(prev, padLen)
    },
    {
      value: value,
      label: pad(value, padLen),
      actived: true
    },
    {
      value: next,
      label: pad(next, padLen)
    },
  ]

  if (prev < min) {
    prev = max
    options[0].value = prev
    options[0].label = pad(prev, padLen)
    options[0].placeholder = true
  }
  if (next > max) {
    next = min
    options[2].value = next
    options[2].label = pad(next, padLen)
    options[2].placeholder = true
  }

  $el.innerHTML = template(optionsTpl, {
    options
  })

}


/**
 * 更新DOM节点
 * @private
 * @date 2019-03-26
 */
function updateDom() {
  Object.keys(KEY_MAP).forEach(key => {
    updateMapBySpinner.call(this, key, 'current', false)
  })
}


/**
 * 通过微调空间改变值
 * @date 2019-03-26
 * @param {*} key
 * @param {*} action
 * @param {boolean} [isUpdate=true]
 */
function updateMapBySpinner(key, action, isUpdate = true) {
  const { props, states } = this
  let value = states.map[key]
  let { min, max, pad: padLen } = KEY_MAP[key]

  if (action === 'prev') {
    value = value - 1
    if (value < min) {
      value = max
    }
  } else if (action === 'next') {
    value = value + 1
    if (value > max) {
      value = min
    }
  }
  states.map[key] = value
  const $el = states[`$${key}Spinner`]
  const $input = states[`$${key}Input`]
  $el && updateSpinnerItems($el, value, min, max, padLen)
  if ($input) {
    $input.value = pad(value, padLen)
  }

  // todo setValue
  if (isUpdate) {
    $input && $input.focus()
    const date = new Date()
    date.setHours(states.map.hour)
    date.setMinutes(states.map.minute)
    date.setSeconds(states.map.second)
    date.setMilliseconds(states.map.ms)
    setValue.call(this, date, !props.confirm, !props.confirm)
  }
}


/**
 * 校验格式
 * @private
 * @date 2019-03-26
 */
function checkFormat() {
  const { props, states } = this
  const format = props.format
  let count = 0
  if (/H/.test(format)) {
    count++
    states.useHour = true
  }
  if (/m/.test(format)) {
    count++
    states.useMinute = true
  }
  if (/s/.test(format)) {
    count++
    states.useSecond = true
  }
  if (/S/.test(format)) {
    count++
    states.useMs = true
  }
  states.useCount = count
  if (!count) {
    throwError('无效的格式')
  }
}


/**
 * 获取有效值
 * @private
 * @date 2019-03-26
 * @param {*} value
 * @returns
 */
function getEffectiveValue(value) {
  const { props } = this
  value = parseDate(value, props.format)
  return value
}


/**
 * 设置keyMap
 * @private
 * @date 2019-03-26
 */
function setTimeMap() {
  const { props, states } = this
  const map = Object.create(null)
  let value = states.value
  if (!value) {
    value = getEffectiveValue.call(this, props.defaultValue)
  }
  value = parseDate(value, props.format)
  if (value) {
    map.hour = value.getHours()
    map.minute = value.getMinutes()
    map.second = value.getSeconds()
    map.ms = value.getMilliseconds()
  } else {
    map.hour = map.minute = map.second = map.ms = 0
    const date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    states.value = date
  }
  states.map = map
}


/**
 * 设置绑定值
 * @private
 * @date 2019-03-26
 * @param {*} value
 * @param {*} change
 * @param {*} emit
 */
function setValue (value, change, emit) {
  const {states, props} = this
  states.value = value
  states.isInput && (states.$target.value = formatDate(value, props.format))
  if (change) {
    states.bindValue = value
  }
  if (emit) {
    this.emit('change', this.getValue(true), value)
  }
}


/**
 * TimePicker Component
 * @date 2019-03-26
 * @export
 * @class TimePicker
 * @extends {Events}
 */
export class TimePicker extends Events {


  /**
   * Creates an instance of TimePicker.
   * @date 2019-03-26
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

    checkFormat.call(this)
    // 获取有效值
    states.value = states.bindValue = getEffectiveValue.call(this, props.value)
    // 设置timeStates
    setTimeMap.call(this)
    render.call(this)
  }


  /**
   * 设置值
   * @date 2019-03-26
   * @param {*} value
   * @memberof TimePicker
   */
  setValue(value) {
    value = getEffectiveValue.call(this, value)
    setTimeMap.call(this)
    updateDom.call(this)
    setValue.call(this, value, true, false)
  }


  /**
   * 获取值
   * @date 2019-03-26
   * @param {*} format
   * @returns
   * @memberof TimePicker
   */
  getValue(format) {
    const { states, props } = this
    return format ? formatDate(states.bindValue, props.format) : states.bindValue
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