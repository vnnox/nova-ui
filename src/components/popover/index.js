/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 轻量级模态框
 * Created: 2018-11-22 09:14
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-22 09:15
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { defaults as PickerDefaults, Picker } from '../picker'
import { mixins, isElement, isFunction, hasKey, throwError } from '../../utils/utils'
import Events from '../../utils/events'
import template from '../../utils/template'
import { skeletonTpl } from './template'
import { qsa, getSize, bind, unbind } from '../../utils/dom'

// ui name
const UI_NAME = 'nv-popover'

// empty function
const noop = function () { }

// popover default config
const popoverDefaults = {
  title: '',
  width: '200px',
  asHtml: false,
  showConfirm: false,
  showCancel: false,
  confirmText: '是',
  cancelText: '否',
  confirmCss: 'nv-btn--primary',
  cancelCss: 'nv-btn--link',
  onConfirm: null,
  onCancel: null,
  customClass: '',
  closeType: 'destroy'
}

// mixins picker default config
const defaults = mixins({}, PickerDefaults, popoverDefaults)

// selectors
const Selectors = {
  content: '.nv-popover__content',
  confirm: '.nv-popover__confirm',
  cancel: '.nv-popover__cancel'
}


/**
 * 创建按钮
 * @param {*} text 
 * @param {*} css 
 * @param {*} handle 
 */
function genBtn(text, css, handle) {
  const btn = Object.create(null)
  handle = isFunction(handle) ? handle : noop
  const self = this
  btn.text = text
  btn.css = css
  btn.handle = function () {
    if (handle() === false) {
      return
    }
    self.close()
  }
  return btn
}


/**
 * render
 * @private
 */
function render() {
  const { props, states } = this
  const $el = document.createElement('div')
  $el.className = UI_NAME
  let width = getSize(props.width)
  if (width) {
    $el.style.width = width
  }
  let { confirm, cancel } = {}
  if (props.showConfirm) {
    confirm = genBtn.call(this, props.confirmText, props.confirmCss, props.onConfirm)
    states.confirm = confirm.handle
  }
  if (props.showCancel) {
    cancel = genBtn.call(this, props.cancelText, props.cancelCss, props.onCancel)
    states.cancel = cancel.handle
  }
  $el.innerHTML = template(skeletonTpl, {
    title: (props.title || '').toString().trim(),
    confirm,
    cancel
  })

  states.$el = $el
  states.$content = qsa(Selectors.content, $el)[0]
  states.$confirm = qsa(Selectors.confirm, $el)[0]
  states.$cancel = qsa(Selectors.cancel, $el)[0]

  states.$content[props.asHtml ? 'innerHTML' : 'textContent'] = (props.content || '').toString()

  initPickerInstance.call(this)
  bindEvents.call(this)
}


/**
 * bind dom events
 * @private
 */
function bindEvents() {
  const { states } = this
  states.confirm && bind(states.$confirm, 'click', states.confirm)
  states.cancel && bind(states.$cancel, 'click', states.cancel)
}


/**
 * unbind dom events
 * @private
 */
function unbindEvents() {
  const { states } = this
  states.confirm && unbind(states.$confirm, 'click', states.confirm)
  states.cancel && unbind(states.$cancel, 'click', states.cancel)
}


/**
 * init picker instance
 * @private
 */
function initPickerInstance() {
  const { states, props } = this
  const options = mixins({}, props)
  for (let k in popoverDefaults) {
    if (hasKey(k, options)) {
      delete options[k]
    }
  }
  options.content = states.$el
  options.customClass = (props.customClass || '') + ',nv-picker--popover'
  options.closeType = props.closeType || 'destroy'
  
  states.pickerInstance = new Picker(states.$target, options)
  states.pickerInstance
    .on('open', () => {
      states.pickerOpened = true
      this.emit('open', states.pickerInstance)
    })
    .on('close', () => {
      states.pickerOpened = false
      this.emit('close', states.pickerInstance)
    })
}


/**
 * Popover Component
 * @export
 * @class Popover
 * @extends {Events}
 */
export class Popover extends Events {


  /**
   * Creates an instance of Popover.
   * @param {*} target
   * @param {*} options
   * @memberof Popover
   */
  constructor(target, options) {
    super()
    if (!(this instanceof Popover)) {
      return new Popover(target, options)
    }
    this.props = mixins({}, defaults, options || {})
    if (!isElement(target)) {
      throwError('\'target\' 必须是一个DOM元素')
    }
    this.states = Object.create(null)
    this.states.$target = target
    this.states.pickerOpened = false
    render.call(this)
  }


  /**
   * open
   * @public
   * @memberof Popover
   */
  open() {
    if (!this.states.pickerOpened) {
      this.states.pickerInstance.open()
    }
  }


  /**
   * close
   * @public
   * @memberof Popover
   */
  close() {
    if (this.states.pickerOpened) {
      this.states.pickerInstance.close()
    }
  }


  /**
   * destroy
   * @public
   * @memberof Popover
   */
  destroy() {
    unbindEvents.call(this)
    this.states.pickerInstance.destroy()
    this.states = null
    this.props = null
    this._events = null
  }
}

export default Popover