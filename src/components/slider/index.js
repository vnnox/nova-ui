/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Slider Component
 * Created: 2018-11-16 10:17
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-16 11:08
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { Events } from '../../utils/events'
import { template } from '../../utils/template'
import { addClass, insertAfter, qsa, bind, unbind, removeNode } from '../../utils/dom'
import { isElement, mixins, isFunction, throwError } from '../../utils/utils'
import { correctProps } from '../input-number/utils'
import { CLASS_STATUS_DISABLED } from '../../utils/constant'
import { skeletonTpl } from './template'

// ui name
const UI_NAME = 'nv-slider'

// 选择器
const Selectors = {
  runway: '.nv-slider__runway',
  progress: '.nv-slider__progress',
  thumb: '.nv-slider__thumb',
  tooltip: '.nv-slider__tooltip'
}

// input 原生属性
const NATIVE_PROPERTIES = ['value', 'disabled', 'min', 'max', 'step']

// default config
const defaults = {
  // 当前值
  value: 0,
  // min value
  min: 0,
  // max value
  max: 100,
  // step
  step: 1,
  // 精度
  precision: null,
  // 禁用
  disabled: false,
  // tooltip
  tooltip: true,
  // 垂直
  vertical: false,
  // vertical 时必须指定高度
  height: '200px',
  // 自定义样式
  customClass: null,
  // 格式化
  tipFormatter: null
}


/**
 * render
 * @private
 */
function render() {
  const { props, states } = this
  const { $container } = states
  const $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)
  props.disabled && addClass($el, CLASS_STATUS_DISABLED)
  props.vertical && addClass($el, 'nv-slider--vertical')

  $el.innerHTML = template(skeletonTpl, {
    tooltip: props.tooltip,
    disabled: props.disabled
  })

  // 无障碍属性
  $el.setAttribute('role', 'slider')
  $el.setAttribute('aria-valuemin', props.min)
  $el.setAttribute('aria-valuemax', props.max)
  $el.setAttribute('aria-orientation', props.vertical ? 'vertical' : 'horizontal')
  $el.setAttribute('aria-disabled', props.disabled)

  if (states.isInput) {
    insertAfter($container, $el)
  } else {
    $container.appendChild($el)
  }

  // cached dom
  states.$el = $el
  states.$runway = qsa(Selectors.runway, $el)[0]
  states.$progress = qsa(Selectors.progress, $el)[0]
  states.$thumb = qsa(Selectors.thumb, $el)[0]
  states.$tooltip = qsa(Selectors.tooltip, $el)[0]

  // fixed height
  if (props.vertical) {
    let height = props.height
    if (/\d+/g.test(height)) {
      height = Math.abs(parseFloat(height)) + 'px'
    }
    states.$runway.style.height = height
  }

  bindEvents.call(this)
}


/**
 * bind events
 * @private
 */
function bindEvents() {
  const { states } = this
  const { handles } = states
  handles.dragStart = handleDragStart.bind(this)
  handles.dragMove = handleDragMove.bind(this)
  handles.dragEnd = handleDragEnd.bind(this)
  handles.runwayClick = handleRunwayClick.bind(this)
  handles.keydown = handleKeydown.bind(this)

  bind(states.$runway, 'click', handles.runwayClick)
  bind(states.$thumb, 'mousedown', handles.dragStart)
  bind(states.$thumb, 'touchstart', handles.dragStart)
  bind(states.$thumb, 'keydown', handles.keydown)
}


/**
 * unbind events
 * @private
 */
function unbindEvents() {
  const { states } = this
  const { handles } = states
  unbind(states.$runway, 'click', handles.runwayClick)
  unbind(states.$thumb, 'mousedown', handles.dragStart)
  unbind(states.$thumb, 'touchstart', handles.dragStart)
}


/**
 * 获取一个兼容移动端的event
 * @method
 * @param {*} event 
 */
function getEvent(event) {
  if (event.type.indexOf('touch') > -1) {
    event.clientY = event.touches[0].clientY
    event.clientX = event.touches[0].clientX
  }
  return event
}


/**
 * 通过鼠标位置计算当前值
 * @private
 * @param {*} event 
 */
function getValueByEvent(event) {
  const { props, states } = this
  const { rect } = states
  event = getEvent(event)
  const pos = props.vertical ? event.clientY : event.clientX

  const offset = props.vertical ? (rect.top + rect.height) - pos : (pos - rect.left)
  let value = getValueByOffset.call(this, offset) + props.min
  return value
}


/**
 * 通过位移计算值
 * @private
 * @param {*} offset 
 */
function getValueByOffset(offset) {
  const { props, states } = this
  const { rect, segmentation } = states
  const { step, vertical } = props
  let value = 0
  if (isNaN(offset)) {
    return value
  }
  value = Math.round(offset / ((vertical ? rect.height : rect.width) / segmentation)) * step
  return value
}


/**
 * mousedown | touchstart
 * @private
 * @param {*} event 
 */
function handleDragStart(event) {
  const { props, states } = this
  if (props.disabled) {
    return
  }
  const { handles } = states
  event = getEvent(event)
  // 记录初始位置
  states.pos = props.vertical ? event.clientY : event.clientX
  // 设置flag
  states.dragging = true
  states.$el.classList.add('nv-slider--dragging')
  states.$thumb.classList.add('nv-slider--dragging')
  // 每次拖动前记录下轨道的长度，
  // 之所以不在渲染完成后记录，是防止浏览器缩放后轨道长度变化
  updateRect.call(this)

  // 阻止事件传播到轨道上
  event.preventDefault()
  bind(document, 'mousemove', handles.dragMove)
  bind(document, 'mouseup', handles.dragEnd)
  bind(window, 'touchmove', handles.dragMove)
  bind(document, 'touchend', handles.dragEnd)
  bind(document, 'contextmenu', handles.dragEnd)
}


/**
 * mousemove | touchmove
 * @private
 * @param {*} event 
 */
function handleDragMove(event) {
  const { props, states } = this
  if (props.disabled || !states.dragging) {
    return
  }
  const value = getValueByEvent.call(this, event)
  this.setValue(value, true)
}


/**
 * mouseup | touchend
 * @param {*} event 
 */
function handleDragEnd() {
  const { states } = this
  if (!states.dragging) {
    return
  }
  const { handles } = states
  unbind(document, 'mousemove', handles.dragMove)
  unbind(document, 'mouseup', handles.dragEnd)
  unbind(document, 'touchmove', handles.dragMove)
  unbind(document, 'touchend', handles.dragEnd)
  unbind(document, 'contextmenu', handles.dragEnd)
  setTimeout(() => {
    states.dragging = false
    states.$el.classList.remove('nv-slider--draging')
    states.$thumb.classList.remove('nv-slider--dragging')
  }, 0)
}


/**
 * click runway
 * @private
 * @param {*} event 
 */
function handleRunwayClick(event) {
  const { states, props } = this
  if (props.disabled || states.dragging) {
    return
  }
  updateRect.call(this)
  const value = getValueByEvent.call(this, event)
  this.setValue(value, true)
}


/**
 * keydown event
 * @private
 * @param {*} event
 */
function handleKeydown(event) {
  const { props, states } = this
  if (props.disabled) {
    return
  }
  let code = event.keyCode
  if (code === 38 || code === 39) {
    this.setValue(states.value + props.step, true)
  } else if (code === 37 || code === 40) {
    this.setValue(states.value - props.step, true)
  }
}

/**
 * 由于浏览器缩放导致runway宽度变化
 * 因此在每次拖动前重新计算runway的位置信息
 * @private
 */
function updateRect() {
  const { states } = this
  const rect = states.$runway.getBoundingClientRect()
  states.rect = {
    top: rect.top,
    left: rect.left,
    width: states.$runway.offsetWidth,
    height: states.$runway.offsetHeight
  }
}


/**
 * 更新DOM UI
 * @private
 */
function updatePosition() {
  const { props, states } = this
  const { value } = states
  const percentage = (value - props.min) / (props.max - props.min)
  states.$progress.style[props.vertical ? 'height' : 'width'] = percentage * 100 + '%'
  states.$thumb.style[props.vertical ? 'bottom' : 'left'] = percentage * 100 + '%'
}



/**
 * Slider Component
 * @date 2018-11-16
 * @export
 * @class Slider
 * @extends {Events}
 */
export class Slider extends Events {
  
  /**
   * Creates an instance of Slider.
   * @date 2018-11-16
   * @param {*} container
   * @param {*} options
   * @memberof Slider
   */
  constructor(container, options) {
    super()
    if (!container || !isElement(container)) {
      throwError('\'container\' 必须是一个DOM容器', 'type')
    }
    if (!(this instanceof Slider)) {
      return new Slider(container, options)
    }

    let isInput = false
    // 如果target是input，取其原生属性作为备选配置
    const nativeProperties = Object.create(null)
    if (container.nodeName === 'INPUT') {
      NATIVE_PROPERTIES.forEach(property => nativeProperties[property] = container[property])
      container.setAttribute('hidden', true)
      isInput = true
    }
    this.props = mixins({}, defaults, nativeProperties, options || {})
    // correct min/max/step
    this.props = correctProps(this.props)
    let { max, min, step, value } = this.props
    min = min === -Infinity ? 0 : min
    max = max === Infinity ? 100 : max
    max = Math.floor((max - min) / step) * step + min

    this.props.min = min
    this.props.max = max

    this.states = Object.create(null)
    this.states.handles = Object.create(null)
    this.states.value = value
    this.states.rect = Object.create(null)
    this.states.isInput = isInput
    this.states.$container = container
    // 分段数
    this.states.segmentation = (max - min) / step
    render.call(this)
    this.setValue(this.props.value, false)
  }


  /**
   * set value
   * @public
   * @param {*} value
   * @param {*} isChanged
   * @memberof Slider
   */
  setValue(value, isChanged) {
    const { props, states } = this
    value = parseFloat(value)
    if (isNaN(value) || value < props.min) {
      value = props.min
    } else if (value > props.max) {
      value = props.max
    }
    value = parseFloat(value.toFixed(props.precision))
    states.value = value
    updatePosition.call(this)
    isChanged && this.emit('change', value)
    states.$el.setAttribute('aria-valuenow', value)
    if (states.$tooltip) {
      let tipValue = props.tipFormatter && isFunction(props.tipFormatter) && props.tipFormatter(value)
      if (tipValue === void 0 || tipValue === '' || tipValue === null) {
        tipValue = value
      }
      states.$tooltip.textContent = tipValue
    }
  }


  /**
   * get current value
   * @public
   * @returns
   * @memberof Slider
   */
  getValue() {
    return this.states.value
  }


  /**
   * 禁用
   * @public
   * @memberof Slider
   */
  disable() {
    const { props, states } = this
    if (props.disabled) {
      return
    }
    props.disabled = true
    states.$el.classList.add(CLASS_STATUS_DISABLED)
    states.$el.setAttribute('aria-disabled', true)
    states.$el.thumb.setAttribute('tabindex', -1)
  }


  /**
   * 启用
   * @public
   * @memberof Slider
   */
  enable() {
    const { props, states } = this
    if (!props.disabled) {
      return
    }
    props.disabled = false
    states.$el.classList.remove(CLASS_STATUS_DISABLED)
    states.$el.setAttribute('aria-disabled', false)
    states.$el.thumb.setAttribute('tabindex', 0)
  }


  /**
   * destroy
   * @public
   * @memberof Slider
   */
  destroy() {
    unbindEvents.call(this)
    const { states } = this
    if (states.isInput) {
      states.$container.removeAttribute('hidden')
    }
    removeNode(states.$el)
    this.states = null
    this.props = null
    this._events = null
  }
}

export default Slider