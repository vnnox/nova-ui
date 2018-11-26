
/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: alert / confirm
 * Created: 2018-11-20 02:39
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-21 02:56
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { mixins, isFunction } from '../../utils/utils'
import { template } from '../../utils/template'
import { skeletonTpl } from './template'
import Modal from '../modal'
import { qsa } from '../../utils/dom'

// ui class name
const UI_NAME = 'nv-message-box'

// empty function
const noop = function () {}

// selectors
const Selectors = {
  message: '.nv-message-box__message',
  describe: '.nv-message-box__describe'
}

// default config
const defaults = {
  message: '',
  title: '',
  describe: '',
  asHtml: false,
  type: 'info',
  showIcon: true,
  icon: '',
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  confirmButtonCss: 'nv-btn--primary',
  cancelButtonCss: '',
  confirm: null,
  cancel: null,
  // modal
  closeBtn: true,
  backdrop: true,
  backdropBackground: null,
  escClose: true,
  scrollLock: true,
  top: null,
  width: null
}


const instances = []


/**
 * 创建一个MessageModal实例
 * @param {*} options 
 * @param {*} btns 
 */
function genMessageBox(options, btns) {
  options.message = (options.message || '').toString()
  options.title = (options.title || '').toString()
  let icon = false
  if (options.showIcon) {
    icon = options.icon
    // 如果没有自定义icon，则根据类型自动匹配icon
    if (!icon) {
      switch (options.type) {
        case 'success':
          icon = 'nv-icon-circle-check'
          break
        case 'error':
          icon = 'nv-icon-circle-close'
          break
        case 'warning':
          icon = 'nv-icon-circle-warning'
          break
        case 'info':
        default:
          icon = 'nv-icon-circle-info'
          break
      }
    }
  }
  const $el = document.createElement('div')
  $el.className = UI_NAME
  $el.innerHTML = template(skeletonTpl, {
    icon,
    describe: options.describe
  })
  let $message = qsa(Selectors.message, $el)[0]
  let $describe = qsa(Selectors.describe, $el)[0]
  if (options.asHtml) {
    $message.innerHTML = options.message
    $describe && ($describe.innerHTML = options.describe)
  } else {
    $message.textContent = options.message
    $describe && ($describe.textContent = options.describe)
  }

  let instance = new Modal({
    title: options.title,
    content: $el,
    closeBtn: options.closeBtn,
    backdrop: options.backdrop,
    backdropBackground: options.backdropBackground,
    escClose: options.escClose,
    scrollLock: options.scrollLock,
    top: options.top,
    width: options.width,
    btns,
    customClass: 'dialog-message-box'
  })

  instances.push(instance)
  instance.open()
  instance.on('close', () => {
    let index = instances.indexOf(instance)
    if (index > -1) {
      instances.splice(index, 1)
    }
    instance.destroy()
  })
  return instance
}


/**
 * 重新组装按钮的事件回调
 * @param {*} handle 
 */
function genCallback (handle) {
  let _handle = isFunction(handle) ? handle : noop
  return function() {
    // this === Modal instance
    if (_handle() === false) {
      return
    }
    this.close()
  }
}


/**
 * MessageBox Component
 * @date 2018-11-21
 * @export
 * @class MessageBox
 */
export class MessageBox {


  /**
   * 警告窗
   * @date 2018-11-21
   * @static
   * @param {*} message
   * @param {*} title
   * @param {*} options
   * @returns
   * @memberof MessageBox
   */
  static alert(message, title, options) {
    options = mixins({}, defaults, options || {})
    options.message = message
    options.title = title
    const btns = [
      {
        type: 'confirm',
        text: options.confirmButtonText,
        css: options.confirmButtonCss,
        handle: genCallback(options.confirm)
      }
    ]
    return genMessageBox(options, btns)
  }


  /**
   * 确认窗
   * @date 2018-11-21
   * @static
   * @param {*} message
   * @param {*} title
   * @param {*} options
   * @returns
   * @memberof MessageBox
   */
  static confirm(message, title, options) {
    options = mixins({}, defaults, options || {})
    options.message = message
    options.title = title
    const btns = [
      {
        type: 'confirm',
        text: options.confirmButtonText,
        css: options.confirmButtonCss,
        handle: genCallback(options.confirm)
      },
      {
        type: 'cancel',
        text: options.cancelButtonText,
        css: options.cancelButtonCss,
        handle: genCallback(options.cancel)
      }
    ]
    return genMessageBox(options, btns)
  }


  /**
   * 销毁所有弹框
   * @date 2018-11-21
   * @static
   * @memberof MessageBox
   */
  static destroy() {
    instances.forEach(ins => ins.destroy())
    instances.length = 0
  }
}


export default MessageBox