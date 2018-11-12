/*
 * File: dom.js
 * Project: @vnnox/novaui
 * Description: DOM 操作类
 * Created: 2018-10-29 10:57
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 10:58
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { isString, toArray, isArray } from './utils'


// selector
const SELECTOR_REGS = {
  id: /^#([\w-]+)$/,
  className: /^\.([\w-]+)$/,
  tagName: /^[\w-]+$/,
}


/**
 * 绑定DOM事件
 * @param {*} el 
 * @param {*} name 
 * @param {*} handle 
 */
export const bind = (el, name, handle) => el.addEventListener(name, handle, false)


/**
 * 解绑DOM事件
 * @param {*} el 
 * @param {*} name 
 * @param {*} handle 
 */
export const unbind = (el, name, handle) => el.removeEventListener(name, handle, false)


/**
 * 绑定一次性事件
 * @param {*} el 
 * @param {*} name 
 * @param {*} handle 
 */
export const once = (el, name, handle) => {
  // 中间事件
  const listener = function () {
    handle && handle.apply(this, arguments)
    // 解绑中间事件
    unbind(el, name, listener)
  }
  // 绑定中间事件
  bind(el, name, listener)
}


/**
 * DOM 选择器
 * 统一API，返回一个DOM集合
 * @param {*} selector 选择器
 * @param {*} context 父级上下文
 * @example 
 * qsa('#id')
 * qsa('.className')
 * qsa('input[type="radio"]', qsa('#id')[0])
 * @returns {Array} 
 */
export const qsa = (selector, context) => {
  context = context || document
  if (isString(selector)) {
    selector = selector.trim()
    let dom
    if (SELECTOR_REGS.id.test(selector)) {
      dom = document.getElementById(RegExp.$1)
      dom = dom ? [dom] : []
    } else if (SELECTOR_REGS.className.test(selector)) {
      dom = context.getElementsByClassName(RegExp.$1)
    } else if (SELECTOR_REGS.tagName.test(selector)) {
      dom = context.getElementsByTagName(selector)
    } else {
      dom = context.querySelectorAll(selector)
    }
    return dom ? toArray(dom) : []
  }
  return []
}


/**
 * 生成一个代理事件执行函数
 * @param {*} element 
 * @param {*} selector 
 * @param {*} callback
 * @example
 * const $ul = qsa('ul')[0]
 * let proxyHandle = proxy($ul, 'li', function() { })
 * bind($ul, 'click', proxyHandle) 
 * @returns {Function}
 */
export const proxy = function (element, selector, callback) {
  return function (event) {
    const nodes = qsa(selector, element)
    let matched
    const target = event.target
    for (let i = 0, len = nodes.length; i < len; i++) {
      const node = nodes[i]
      if (node === target || node.contains(target)) {
        matched = node
        break
      }
    }
    if (matched) {
      callback.apply(matched, toArray(arguments))
    }
  }
}


/**
 * 获取元素的位置信息
 * @param {*} element
 * @returns {Object} 
 */
export const getOffset = element => {
  let rect = element.getBoundingClientRect()
  let win = element.ownerDocument.defaultView
  let top = rect.top + win.pageYOffset
  let left = rect.left + win.pageXOffset
  return {
    top,
    left,
    rect,
  }
}


/**
 * 获取元素计算后的样式
 * @param {HTMLElement} element 
 * @param {String} style
 * @returns {String | Object} 
 */
export const getStyle = (element, style) => {
  let styles = element.ownerDocument.defaultView.getComputedStyle(element, null)
  return style ? styles[style] : styles
}


/**
 * 插入到目标元素之后
 * @param {*} target 目标元素 
 * @param {*} node 新元素
 * @returns {*}
 */
export const insertAfter = (target, node) => {
  const $parent = target.parentNode
  if ($parent.lastChild === target) {
    $parent.appendChild(node)
  } else {
    $parent.insertBefore(node, target.nextSibling)
  }
  return node
}


/**
 * 添加样式
 * @param {*} el 
 * @param {string|array} className 
 */
export const addClass = (el, className) => {
  let classList = []
  if (className) {
    if (isString(className)) {
      classList = className.split(/,|\s+/)
    } else if (isArray(className)) {
      classList = className
    }
  }
  classList.forEach(name => isString(name) && name.trim() && el.classList.add(name.trim()))
}


/**
 * 获取滚动条的宽度
 * @returns {Number} 
 */
export const getScrollbarWidth = () => {
  if (getScrollbarWidth.value !== void 0) {
    return getScrollbarWidth.value
  }
  const scrollDiv = document.createElement('div')
  scrollDiv.style.cssText += 'width:100px;position:absolute;top:-9999rem;z-index:-1;visibility:hidden;'
  document.body.appendChild(scrollDiv)
  scrollDiv.style.overflow = 'scroll'
  const width = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
  scrollDiv.parentNode.removeChild(scrollDiv)
  getScrollbarWidth.value = width
  return getScrollbarWidth.value
}


/**
 * 安全的移除元素
 * @param {*} el 
 */
export const removeNode = el => el && el.parentNode && el.parentNode.removeChild(el)


export default {
  bind,
  unbind,
  once,
  getOffset,
  getStyle,
  insertAfter,
  qsa,
  proxy,
  addClass,
  getScrollbarWidth,
  removeNode
}