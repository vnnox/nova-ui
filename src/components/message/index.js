/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 主动操作后的反馈提示，如操作成功等
 * Created: 2018-11-19 05:01
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-26 02:04
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { mixins, isPlainObject, isFunction, uuid } from '../../utils/utils'
import { qsa, addClass, bind, unbind } from '../../utils/dom'
import { template } from '../../utils/template'
import { Popup } from '../../utils/popup'
import { skeletonTpl } from './template'

// empty function
const noop = Function.prototype

// ui class name
const UI_NAME = 'nv-message'

// 选择器
const Selectors = {
  content: '.nv-alert__content',
  close: '.nv-alert__close'
}

// 内置类型
const TYPES = ['success', 'info', 'error', 'warning']

// default config
const defaults = {
  // 类型
  type: 'info',
  // 图标类名，
  icon: '',
  // 内容文本
  content: '',
  // 自动关闭时间，单位毫秒，
  // 当设置为0时，将不不会自动关闭
  duration: 3000,
  // 默认情况下，为防止XSS等攻击，
  // 对传入的content做纯文本输出，
  // 当作为HTML字符串输出时，必须开启asHtml选项
  asHtml: false,
  // 显示关闭按钮
  closeable: true,
  // 自定义样式
  customClass: null,
  // 关闭时回调
  onClose: noop,
}

// default custom config
const customDefault = {
  closeable: true,
  duration: 3000
}

// global custom config
let customConfig = {}

// 用于保存已生成的Message实例
const instances = Object.create(null)


/**
 * render
 * @private
 * @memberof MessageBox
 */
function render() {
  const { props, states } = this
  let $wrap = qsa('.nv-message-wrap', document)[0]
  if (!$wrap) {
    $wrap = document.createElement('div')
    $wrap.className = 'nv-message-wrap'
    document.body.appendChild($wrap)
  }
  $wrap.style.zIndex = Popup.nextZIndex()
  
  const $el = document.createElement('div')
  $el.className = UI_NAME
  const $alert = document.createElement('div')
  $alert.setAttribute('role', 'alert')
  $alert.className = 'nv-alert'
  if (TYPES.indexOf(props.type) > -1) {
    $alert.classList.add(`nv-alert--${props.type}`)
  }
  let content = (props.content || '').toString()
  $alert.innerHTML = template(skeletonTpl, {
    closeable: props.closeable,
    icon: props.icon
  })
  $el.appendChild($alert)
  addClass($el, props.customClass)
  const $content = qsa(Selectors.content, $el)[0]
  if (props.asHtml) {
    $content.innerHTML = content
  } else {
    $content.textContent = content
  }
  $wrap.appendChild($el)
  $el.classList.add('nv-animated--alert-in')
  states.$el = $el
  states.$close = qsa(Selectors.close, $el)[0]
  bindEvents.call(this)
}


/**
 * bind dom events
 * @private
 * @memberof MessageBox
 */
function bindEvents() {
  const { props, states } = this
  states.handleClose = this.close.bind(this)
  states.$close && bind(states.$close, 'click', states.handleClose)
  let { duration } = props
  duration = +duration

  if (duration > 0 && !isNaN(duration)) {
    states.timer = setTimeout(() => {
      this.close()
    }, duration)
  }
}


/**
 * Message基类
 * 用于生产Message实例
 * @class MessageBox
 */
class MessageBox {

  /**
   * Creates an instance of MessageBox.
   * @param {*} options
   * @memberof MessageBox
   */
  constructor(options) {
    if (!(this instanceof MessageBox)) {
      return new MessageBox(options)
    }
    this.props = mixins({}, defaults, customConfig, options || {})
    this.states = Object.create(null)
    this.states.id = '__message__' + uuid()
    render.call(this)
    instances[this.states.id] = this
  }


  /**
   * close
   * @public
   * @memberof MessageBox
   */
  close() {
    isFunction(this.props.onClose) && this.props.onClose()
    this.destroy()
  }


  /**
   * destroy
   * @public
   * @memberof MessageBox
   */
  destroy() {
    const { states } = this
    if (states) {
      delete instances[states.id]
      states.$close && unbind(states.$close, 'click', states.handleClose)
      let $el = states.$el
      if ($el) {
        $el.classList.add('nv-animated--alert-out')
        setTimeout(() => {
          $el && $el.parentNode.removeChild($el)
          $el = null
        }, 200)
      }
      states.timer && clearTimeout(states.timer)
      this.states = null
    }
  }

}


/**
 *
 * 生成MessageBox的实例
 * @param {*} type
 * @param {*} content
 * @param {*} options
 * @returns
 */
function GenerateMessageInstance(type, content, options) {
  let config = {}
  let icon
  switch (type) {
    case 'info':
      icon = 'nv-icon-circle-info'
      break
    case 'success':
      icon = 'nv-icon-circle-check'
      break
    case 'error':
      icon = 'nv-icon-circle-close'
      break
    case 'warning':
      icon = 'nv-icon-circle-warning'
      break
  }
  if (isFunction(options)) {
    config.onClose = options
  } else if (isPlainObject(options)) {
    config = options
  }
  config.type = type
  config.content = content
  if (config.icon === void 0) {
    config.icon = icon
  }
  return new MessageBox(config)
}


/**
 *
 * Message静态类
 * @export
 * @class Message
 */
export class Message {


  /**
   *
   * 用于操作成功时提示
   * @static
   * @param {*} content
   * @param {*} options
   * @returns
   * @memberof Message
   */
  static success(content, options) {
    return GenerateMessageInstance('success', content, options)
  }


  /**
   *
   * 用于失败时提示
   * @static
   * @param {*} content
   * @param {*} options
   * @returns
   * @memberof Message
   */
  static error(content, options) {
    return GenerateMessageInstance('error', content, options)
  }


  /**
   *
   * 用于警告时提示
   * @static
   * @param {*} content
   * @param {*} options
   * @returns
   * @memberof Message
   */
  static warning(content, options) {
    return GenerateMessageInstance('warning', content, options)
  }


  /**
   *
   * 用于消息提示
   * @static
   * @param {*} content
   * @param {*} options
   * @returns
   * @memberof Message
   */
  static info(content, options) {
    return GenerateMessageInstance('info', content, options)
  }


  /**
   * 用于配置全局的Message
   * 具体方法中的options优先于全局配置
   * @static
   * @param {*} config
   * @memberof Message
   */
  static config(config) {
    if (config === null || isPlainObject(config)) {
      customConfig = mixins({}, customDefault, config || {})
    }
  }


  /**
   * 销毁所有的Message实例
   * 如页面切换时，销毁页面中所有的Message实例
   * @static
   * @memberof Message
   */
  static destroy() {
    for (let id in instances) {
      instances[id].destroy()
      delete instances[id]
    }
    let $wrap = qsa('.nv-message-wrap', document)[0]
    $wrap && $wrap.parentNode.removeChild($wrap)
    $wrap = null
  }
}

export default Message