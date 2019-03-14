/*
 * File: popup.js
 * Project: @vnnox/novaui
 * Description: 模态框管理，统一管理模态框遮罩层，层级
 * Created: 2018-11-19 10:30
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-19 10:30
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { getScrollbarWidth } from './dom'
import { isFunction } from './utils'

const defaults = {
  backdrop: true,
  backdropBackground: 'rgba(0,0,0,.5)',
  backdropClose: true,
  scrollLock: true,
  escClose: true
}

// start zIndex
let zIndex = 1990

// 当前实例列表
let instances = []

// 当前backdrop
let backdrop = null

// 是否已经显示了backdrop
let isBackdropShow = false

// 当前屏幕是否已经锁定
let isScrollLocked = false


/**
 * 获取backdrop element
 */
function getBackdrop () {
  if (backdrop) {
    return backdrop
  }
  backdrop = document.createElement('div')
  backdrop.setAttribute('tabindex', '-1')
  backdrop.setAttribute('role', 'button')
  backdrop.className = 'nv-backdrop'
  backdrop.classList.remove('nv-animated--fade-in')
  backdrop.style.display = 'none'
  backdrop.style.zIndex = '19900206'
  document.body.appendChild(backdrop)
  return backdrop
}

/**
 * 获取顶层实例
 * @private
 * @returns
 */
function getTopInstance () {
  return instances[instances.length - 1]
}


/**
 * ESC按键事件
 * @private
 * @param {*} e
 */
function keydownHandle (e) {
  if (e.keyCode === 27) {
    const topInstance = getTopInstance()
    if (topInstance && topInstance.escClose && isFunction(topInstance.closeHandle)) {
      topInstance.closeHandle('esc')
    }
  }
}


/**
 * 模态框管理器
 * 用于模态框, 页面级loading等
 * 1. 保证多个模态框打开时只开启一个遮罩层
 * 2. 管理各个模态框的zIndex
 * @export
 * @class Popup
 */
export class Popup {

  /**
   *
   * 获取一个最新的zIndex
   * @static
   * @returns
   * @memberof Popup
   */
  static nextZIndex() {
    if (zIndex < Number.MAX_SAFE_INTEGER) {
      ++zIndex
    } else {
      zIndex = 19900206
    }
    return zIndex
  }


  /**
   * 获取当前z-Index
   */
  static getCurrentZindex () {
    return zIndex
  }

  
  /**
   *
   * 模态框Open时
   * 1. 管理遮罩层
   * 2. 锁屏
   * 3. 重置层级
   * @static
   * @param {*} options
   * @memberof Popup
   */
  static open(options) {
    if (!options || !options.id) {
      return
    }
    options.zIndex = options.zIndex || Popup.nextZIndex()
    for (let k in defaults) {
      if (options[k] === void 0) {
        options[k] = defaults[k]
      }
    }
    let len = instances.length
    // 如果实例中已经包含了该实例，则不执行
    while (len--) {
      if (instances[len].id === options.id) {
        return
      }
    }
    // 显示遮罩
    if (options.backdrop) {
      getBackdrop()
      backdrop.style.zIndex = options.zIndex
      if (options.backdropBackground) {
        backdrop.style.backgroundColor = options.backdropBackground
      }
      if (!isBackdropShow) {
        backdrop.classList.add('nv-animated--fade-in')
        backdrop.style.display = 'block'
      }
      isBackdropShow = true
    }

    // 是否锁屏
    if (options.scrollLock && !isScrollLocked) {
      const _sbWidth = getScrollbarWidth()
      const $body = document.body
      $body.classList.add('nv-locked')
      $body.style.marginRight = _sbWidth + 'px'
      isScrollLocked = true
    }
    instances.push(options)

    window.addEventListener('keydown', keydownHandle)
  }


  /**
   *
   * 模态框关闭时
   * @static
   * @param {*} id
   * @memberof Popup
   */
  static close(id) {
    if (!id || !instances.length) {
      return
    }
    let $body = document.body
    if (instances.length > 0) {
      let topInstance = getTopInstance()
      // 如果被关闭的正好是顶层的实例
      if (topInstance.id === id) {
        // 移除当前实例
        instances.pop()
        if (instances.length > 0 && topInstance.backdrop) {
          // 将遮罩层的层级设置为下一个实例的层级
          backdrop.style.zIndex = getTopInstance().zIndex
        }
      } else {
        let len = instances.length
        while (len--) {
          // 找到当前实例并移除
          if (instances[len].id === id) {
            instances.splice(len, 1)
            break
          }
        }
      }
    }
    let hasbackdrop = false
    let hasLocked = false
    let i = instances.length - 1
    let instance
    for (i; i >= 0; i--) {
      instance = instances[i]
      if (instance.scrollLock) {
        hasLocked = true
      }
      if (instance.backdrop) {
        hasbackdrop = true
      }
    }
    let length = instances.length
    if (length === 0 || !hasbackdrop) {
      isBackdropShow = false
      if (backdrop) {
        $body.removeChild(backdrop)
        backdrop = null
      }
    }
    if (length === 0 || !hasLocked) {
      isScrollLocked = false
      $body.classList.remove('nv-locked')
      $body.style.marginRight = null
      // 如果没有实例了，就移除keydown事件
      if (length === 0) {
        window.removeEventListener('keydown', keydownHandle)
      }
    }
  }
}

export default Popup