/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 标准数字输入器
 * Created: 2018-10-29 11:32
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 11:32
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import Events from '../../utils/events'
import { isElement, throwError, mixins, isNumber, isNumberString } from '../../utils/utils'
import { correctProps } from './utils'
import template from '../../utils/template'
import { addClass, qsa, bind, unbind, removeNode } from '../../utils/dom'
import { skeletonTpl } from './template'

// 选择器
const Selectors = {
  input: '.nv-input',
  increase: '.nv-input-number__increase',
  decrease: '.nv-input-number__decrease'
}

// 默认配置
const defaults = {
  // 当前值
  value: null,
  // min value
  min: -Infinity,
  // max value
  max: Infinity,
  // step
  step: 1,
  // 精度
  precision: null,
  // 禁用
  disabled: false,
  // 输入框是否可输入，只允许控制按钮
  editable: true,
  // 输入框placeholder
  placeholder: null,
  // 输入框name属性
  name: null,
  // 宽度
  width: '130px',
  // 输入框尺寸
  size: 'default',
  // 自定义样式
  customClass: null,
  // 格式化
  formatter: null
}


/**
 * render
 * @private
 */
function render() {
  const { states, props } = this
  if (states.$el) {
    return
  }
  const $el = document.createElement('label')
  $el.className = 'nv-input-number'
  addClass($el, props.customClass)
  let size 
  if (['large', 'small'].indexOf(props.size) > -1) {
    size = props.size
  }
  $el.innerHTML = template(skeletonTpl, {
    name: props.name,
    disabled: props.disabled,
    editable: props.editable,
    min: props.min,
    max: props.max,
    placeholder: props.placeholder,
    size
  })
  
  let width = props.width
  if (isNumberString(width)) {
    width += 'px'
  }
  if (isNaN(parseFloat(width))) {
    width = defaults.width
  }
  $el.style.width = width
  states.$container.appendChild($el)
  states.$el = $el
  states.$input = qsa(Selectors.input, $el)[0]
  states.$increase = qsa(Selectors.increase, $el)[0]
  states.$decrease = qsa(Selectors.decrease, $el)[0]
  bindEvents.call(this)
}


/**
 * input change 
 * @private
 * @param {*} e 
 */
function handleInputChange(e) {
  if (this.props.disabled) {
    return
  }
  this.setValue(e.target.value)
}


/**
 * input keydown
 * @param {*} e 
 */
function handleInputKeydown(e) {
  let code = e.keyCode
  if (code === 38 || code === 39) {
    this.increase()
  } else if (code === 37 || code === 40) {
    this.decrease()
  }
}


/**
 * input mousewheel
 * @private
 * @param {*} e 
 */
function handleInputMousewheel (e) {
  if (this.props.disabled || !this.states.focusin) {
    return
  }
  e.preventDefault()
  const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
  delta < 0 ? this.increase() : this.decrease()
}


/**
 * 获得焦点时触发
 * @private
 */
function handleInputFocus () {
  this.states.focusin = true
}


/**
 * 失去焦点时触发
 * @private
 */
function handleInputBlur () {
  this.states.focusin = false
}


/**
 * 绑定DOM事件
 * @private
 */
function bindEvents() {
  const { states } = this
  const handles = states.handles
  handles.increase = this.increase.bind(this)
  handles.decrease = this.decrease.bind(this)
  handles.inputChange = handleInputChange.bind(this)
  handles.inputKeydown = handleInputKeydown.bind(this)
  handles.inputMousewheel = handleInputMousewheel.bind(this)
  handles.inputFocus = handleInputFocus.bind(this)
  handles.inputBlur = handleInputBlur.bind(this)

  bind(states.$increase, 'click', handles.increase)
  bind(states.$decrease, 'click', handles.decrease)
  bind(states.$input, 'change', handles.inputChange)
  bind(states.$input, 'keydown', handles.inputKeydown)
  bind(states.$input, 'mousewheel', handles.inputMousewheel)
  bind(states.$input, 'DOMMouseScroll', handles.inputMousewheel)
  bind(states.$input, 'focusin', handles.inputFocus)
  bind(states.$input, 'focusout', handles.inputBlur)
}


/**
 * 解绑DOM事件
 * @private
 */
function unbindEvents() {
  const { states } = this
  const handles = states.handles
  unbind(states.$increase, 'click', handles.increase)
  unbind(states.$decrease, 'click', handles.decrease)
  unbind(states.$input, 'change', handles.inputChange)
  unbind(states.$input, 'keydown', handles.inputKeydown)
  unbind(states.$input, 'mousewheel', handles.inputMousewheel)
  unbind(states.$input, 'DOMMouseScroll', handles.inputMousewheel)
  unbind(states.$input, 'focusin', handles.inputFocus)
  unbind(states.$input, 'focusout', handles.inputBlur)
}


/**
 * 递增
 * @private
 * @param {*} val 
 */
function increase(val) {
  const { props, states } = this
  const { step, precision } = props
  const { value } = states
  if (!isNumber(val) && val !== void 0) {
    return value
  }
  const precisionFactor = Math.pow(10, precision)
  return toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor, precision)
}


/**
 * 递减
 * @private
 * @param {*} val 
 */
function decrease(val) {
  const { props, states } = this
  const { step, precision } = props
  const { value } = states
  if (!isNumber(val) && val !== void 0) {
    return value
  }
  const precisionFactor = Math.pow(10, precision)
  return toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor, precision)
}


/**
 * 设置increase/decrease按钮禁用状态
 * @private
 */
function toggleBtnDisabled() {
  let { states, props } = this
  let { min, max } = props
  let value = states.value || 0
  let minDisabled = props.disabled || decrease.call(this, value || 0) < min
  let maxDisabled = props.disabled || increase.call(this, value || 0) > max
  let minMethod = minDisabled ? 'add' : 'remove'
  let maxMethod = maxDisabled ? 'add' : 'remove'
  states.$decrease.classList[minMethod]('nv-disabled')
  states.$increase.classList[maxMethod]('nv-disabled')
  states.$increase.setAttribute('aria-disabled', maxDisabled)
  states.$decrease.setAttribute('aria-disabled', minDisabled)
}


/**
 * 精确化值
 * @private
 * @param {*} value 
 * @param {*} precision 
 */
function toPrecision(value, precision) {
  return parseFloat(parseFloat(Number(value).toFixed(precision)))
}


/**
 * 计数器组件
 * @date 2018-11-08
 * @export
 * @class InputNumber
 * @extends {Events}
 */
export class InputNumber extends Events {

  /**
   * Creates an instance of InputNumber.
   * @date 2018-11-08
   * @param {*} container
   * @param {*} options
   * @memberof InputNumber
   */
  constructor(container, options) {
    super()
    if (!(this instanceof InputNumber)) {
      return new InputNumber(container, options)
    }
    if (!isElement(container)) {
      throwError('\'container\' 必须是一个DOM容器', 'type')
    }
    this.states = Object.create(null)
    this.states.$container = container
    this.states.handles = Object.create(null)
    this.states.focusin = false
    this.initialize(options)
  }


  /**
   * 初始化
   * 当配置文件改变时调用
   * @date 2018-11-08
   * @param {*} options
   * @memberof InputNumber
   */
  initialize(options) {
    this.props = correctProps(mixins({}, defaults, options || {}))
    const { states } = this
    render.call(this)
    states.value = ''
    states.oldValue = ''
    this.setValue(this.props.value)
  }


  /**
   * 设置值
   * @date 2018-11-08
   * @param {*} newValue
   * @memberof InputNumber
   */
  setValue(newValue) {
    const { props, states } = this
    let { oldValue } = states
    const { precision, min, max } = props
    newValue = parseFloat(newValue, 10)
    if (isNaN(newValue)) {
      newValue = oldValue
    }

    // oldValue === ''
    let valueStr = ''
    if (newValue !== '') {
      newValue = toPrecision(newValue, precision)
      if (newValue >= max) {
        newValue = max
      }
      if (newValue <= min) {
        newValue = min
      }
      valueStr = newValue.toFixed(precision)
    }
    
    let formatValue = props.formatter && props.formatter(valueStr)
    states.$input.value = formatValue || valueStr
    if (oldValue !== newValue) {
      states.value = newValue
      states.oldValue = newValue
      this.emit('change', newValue, oldValue)
    }

    states.$input.setAttribute('aria-valuenow', formatValue || newValue)
    // toggle btn disabled
    toggleBtnDisabled.call(this)
  }


  /**
   * 获取值
   * @date 2018-11-08
   * @returns
   * @memberof InputNumber
   */
  getValue() {
    return this.states.value
  }


  /**
   * 递增
   * @date 2018-11-08
   * @memberof InputNumber
   */
  increase() {
    const { states, props } = this
    let newValue = increase.call(this, states.value || 0)
    if (props.disable || newValue > props.max) {
      return
    }
    this.setValue(newValue)
  }


  /**
   * 递减
   * @date 2018-11-08
   * @memberof InputNumber
   */
  decrease() {
    const { states, props } = this
    let newValue = decrease.call(this, states.value || 0)
    if (props.disable || newValue < props.min) {
      return
    }
    this.setValue(newValue)
  }

  
  /**
   * 禁用
   * @date 2018-11-08
   * @memberof InputNumber
   */
  disable() {
    this.props.disabled = true
    const { states } = this
    states.$el.classList.add('nv-disabled')
    states.$input.setAttribute('disabled', true)
    states.$input.setAttribute('aria-disabled', true)
    toggleBtnDisabled.call(this)
  }


  /**
   * 启用
   * @date 2018-11-08
   * @memberof InputNumber
   */
  enable() {
    this.props.disabled = false
    const { states } = this
    states.$el.classList.remove('nv-disabled')
    states.$input.removeAttribute('disabled')
    states.$input.setAttribute('aria-disabled', false)
    toggleBtnDisabled.call(this)
  }


  /**
   * 设置属性
   * @date 2019-03-26
   * @param {*} options 
   */
  setOptions (options) {
    this.props = correctProps(mixins({}, defaults, this.props, options || {}))
    toggleBtnDisabled.call(this)
  }


  /**
   * 销毁
   * @date 2018-11-08
   * @memberof InputNumber
   */
  destroy() {
    unbindEvents.call(this)
    removeNode(this.states.$el)
    this.states = null
    this.props = null
    this._events = null
  }
}

export default InputNumber