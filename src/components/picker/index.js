/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 底层： Popover/Select/DatePicker/TimePicker...
 * Created: 2018-11-13 02:14
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-13 02:27
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { Events } from '../../utils/events'
import { mixins, isElement, throwError, isNumber, isNumberString } from '../../utils/utils'
import { bind, unbind, qsa, addClass, removeNode, getScrollParent } from '../../utils/dom'
import { template } from '../../utils/template'
import { Popup } from '../../utils/popup'
import { getPlacement } from './placements'
import { skeletonTpl } from './template'

// ui class name
const UI_NAME = 'nv-picker'

// selectors
const Selectors = {
  arrow: '.nv-picker__arrow',
  body: '.nv-picker__body'
}

// 默认配置
export const defaults = {
  // 触发方式 click|focus|hover
  trigger: 'click',
  // 内容，string | HTMLElement
  content: null,
  // 相对target位置
  placement: 'bottom',
  // 相对target距离
  margin: 12,
  // 自定义样式
  customClass: null,
  // 是否禁用
  disabled: false,
  // 是否显示箭头
  showArrow: true,
  // 自动校正位置
  autoCorrect: true,
  // 关闭时是隐藏还是销毁
  closeType: 'hide', // hide | destroy
  // 层级, 如果是null，会未设置，将自动填充
  zIndex: null,
}


/**
 * target click
 * @param {*} event
 * @private 
 */
const handleToggle = function () {
  const { states } = this
  if (!states) {
    return
  }
  const display = states.$picker && states.$picker.style.display
  if (display === 'none' || !states.visible) {
    this.open()
  } else {
    this.close()
  }
}


/**
 * 区域外点击
 * @param {*} event
 * @private 
 */
const handleDocumentClick = function (event) {
  const target = event.target
  const { $target, states } = this
  const { $picker } = states
  if (
    (target !== $picker) &&
    (target !== $target) &&
    ($target && !$target.contains(target)) &&
    ($picker && !$picker.contains(target))
  ) {
    this.close()
  }
}


/**
 * 设置位置
 * @private
 */
const setPosition = function () {
  const { states, $target, props } = this
  const { $picker } = states
  if ($picker && states.visible) {
    let placement = getPlacement($target, $picker, props.placement, props.margin, props.autoCorrect)
    $picker.style.cssText += `top:${placement.top}px;left:${placement.left}px;`
    $picker.setAttribute('x-placement', placement.placement)
  }
}


/**
 * mouseenter event
 * @private
 */
function handleMouseenter () {
  this.states.hoverTimer && clearTimeout(this.states.hoverTimer)
  this.open()
}


/**
 * mouseleave event
 * @private
 */
function handleMouseleave () {
  this.states.hoverTimer = setTimeout(() => {
    this.close()
    this.states.hoverTimer = null
  }, 200)
}


/**
 * picker mouseenter event
 * 200ms 内如果鼠标重新划过target或者picker，则清除定时器
 * @private
 */
function handlePickerMouseenter () {
  this.states.hoverTimer && clearTimeout(this.states.hoverTimer)
}


/**
 * 绑定事件
 * @private
 */
const bindEvents = function () {
  const { states, props, $target } = this
  const { handles } = states
  handles.targetClick = handleToggle.bind(this)
  handles.documentClick = handleDocumentClick.bind(this)
  handles.open = this.open.bind(this)
  handles.close = this.close.bind(this)
  handles.resize = setPosition.bind(this)
  handles.targetMouseenter = handleMouseenter.bind(this)
  handles.mouseleave = handleMouseleave.bind(this)
  handles.pickerMouseenter = handlePickerMouseenter.bind(this)

  switch (props.trigger) {
    case 'focus':
      bind($target, 'focusin', handles.targetClick)
      bind($target, 'focusout', handles.close)
      break
    case 'hover':
      bind($target, 'mouseenter', handles.targetMouseenter)
      bind($target, 'mouseleave', handles.mouseleave)
      break
    case 'click':
    default:
      bind($target, 'click', handles.targetClick)
      bind(document, 'click', handles.documentClick)
      break
  }

  window.addEventListener('resize', handles.resize)
  window.addEventListener('scroll', handles.resize)
  states.$scrollParent.addEventListener('scroll', handles.resize)
}


/**
 * 解绑事件
 * @private
 */
const unbindEvents = function () {
  const { states, props, $target } = this
  const { handles } = states
  switch (props.trigger) {
    case 'focus':
      unbind($target, 'focusin', handles.open)
      unbind($target, 'focusout', handles.close)
      break
    case 'hover':
      unbind($target, 'mouseenter', handles.open)
      unbind($target, 'mouseleave', handles.close)
      break
    case 'click':
    default:
      unbind($target, 'click', handles.targetClick)
      unbind(document, 'click', handles.documentClick)
      break
  }

  states.$picker && unbind(states.$picker, 'click', handles.pickerClick)
  window.removeEventListener('resize', handles.resize)
  window.removeEventListener('scroll', handles.resize)
  states.$scrollParent.removeEventListener('scroll', handles.resize)
}


/**
 * render dom
 * @private
 */
const render = function () {
  const { states, props } = this
  const $picker = document.createElement('div')
  $picker.className = UI_NAME
  addClass($picker, props.customClass)
  // render
  $picker.innerHTML = template(skeletonTpl, {
    showArrow: props.showArrow
  })

  // insert content
  let $body = qsa(Selectors.body, $picker)[0]
  if (isElement(props.content)) {
    $body.appendChild(props.content)
  } else {
    $body.innerHTML = (props.content || '').toString()
  }

  let zIndex = props.zIndex
  if (isNumber(zIndex) || isNumberString(zIndex)) {
    zIndex = +zIndex
  } else {
    zIndex = Popup.nextZIndex()
  }

  $picker.style.display = 'none'
  $picker.style.zIndex = zIndex
  document.body.appendChild($picker)
  states.$picker = $picker
  states.visible = false
  states.zIndex = zIndex

  if (!states.handles.pickerClick) {
    const self = this
    states.handles.pickerClick = function (event) {
      self.emit('click', event)
    }
  }

  unbind($picker, 'click', states.handles.pickerClick)
  bind($picker, 'click', states.handles.pickerClick)

  if (props.trigger === 'hover') {
    unbind($picker, 'mouseenter', states.handles.pickerMouseenter)
    bind($picker, 'mouseenter', states.handles.pickerMouseenter)
    unbind($picker, 'mouseleave', states.handles.mouseleave)
    bind($picker, 'mouseleave', states.handles.mouseleave)
  }
}



/**
 * Picker Component
 * @date 2018-11-13
 * @export
 * @class Picker
 * @extends {Events}
 */
export class Picker extends Events {


  /**
   * Creates an instance of Picker.
   * @date 2018-11-13
   * @param {*} target
   * @param {*} options
   * @memberof Picker
   */
  constructor(target, options) {
    super()
    if (!target || !isElement(target)) {
      throwError('\'target\' 必须是一个DOM容器', 'type')
    }
    if (!(this instanceof Picker)) {
      return new Picker(target, options)
    }
    this.props = mixins({}, defaults, options || {})
    this.$target = target
    let margin = +this.props.margin
    if (isNaN(margin)) {
      margin = 0
    }
    this.props.margin = margin
    const states = this.states = Object.create(null)
    states.visible = false
    states.handles = Object.create(null)
    states.$scrollParent = getScrollParent(target)
    states.hoverTimer = null
    // events bind
    bindEvents.call(this)
  }


  /**
   * Open
   * @date 2018-11-13
   * @memberof Picker
   */
  open() {
    const { states, props } = this
    if (props.disabled) {
      return
    }
    if (!states.$picker) {
      states.visible = false
      render.call(this)
      this.emit('created', states.$picker)
    }
    const { $picker } = states
    // 容错
    if (states.visible) {
      return
    }

    let zIndex = states.zIndex
    if (zIndex < Popup.getCurrentZindex()) {
      zIndex = Popup.nextZIndex()
      states.zIndex = zIndex
      $picker.style.zIndex = zIndex
    }

    $picker.style.visibility = 'hidden'
    $picker.style.position = 'fixed'
    $picker.style.display = 'block'
    states.visible = true
    setPosition.call(this)
    $picker.style.visibility = null
    $picker.style.position = null
    this.emit('open', $picker)
  }


  /**
   * Close
   * @date 2018-11-13
   * @memberof Picker
   */
  close() {
    const { states, props } = this
    const { $picker } = states
    if (props.disabled || !states.visible || !$picker) {
      return
    }

    if (props.closeType === 'destroy') {
      $picker && $picker.parentNode.removeChild($picker)
      states.$picker = null
    } else {
      $picker.style.display = 'none'
    }

    this.emit('close', $picker)
    states.visible = false
  }


  /**
   * update placement
   * @date 2018-11-13
   * @memberof Picker
   */
  updatePlacement() {
    if (this.props.disabled) {
      return
    }
    setPosition.call(this)
  }


  /**
   * disable
   * @date 2018-11-13
   * @memberof Picker
   */
  disable() {
    this.props.disabled = true
  }


  /**
   * enable
   * @date 2018-11-13
   * @memberof Picker
   */
  enable() {
    this.props.disabled = false
  }


  /**
   * destroy
   * @date 2018-11-13
   * @memberof Picker
   */
  destroy() {
    unbindEvents.call(this)
    const { states } = this
    removeNode(states.$picker)
    this.states = null
    this.$target = null
    this._events = null
  }
}

export default Picker