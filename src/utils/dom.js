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

import { isString, toArray, isArray, isNumberString, isElement } from './utils'


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
  let hasScroll = document.body.scrollHeight > window.innerHeight
  if (getScrollbarWidth.value !== void 0 && getScrollbarWidth.value !== 0) {
    return getScrollbarWidth.value
  }
  // 当页面有滚动条的时候才计算
  if (hasScroll) {
    const scrollDiv = document.createElement('div')
    scrollDiv.style.cssText += 'width:100px;position:absolute;top:-9999rem;z-index:-1;visibility:hidden;'
    document.body.appendChild(scrollDiv)
    scrollDiv.style.overflow = 'scroll'
    const width = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
    scrollDiv.parentNode.removeChild(scrollDiv)
    getScrollbarWidth.value = width
  } else {
    getScrollbarWidth.value = 0
  }
  return getScrollbarWidth.value
}


/**
 * 安全的移除元素
 * @param {*} el 
 */
export const removeNode = el => el && el.parentNode && el.parentNode.removeChild(el)


/**
 * 将元素滚动到指定位置
 * @param {*} element 
 * @param {*} to 
 * @param {*} duration 
 */
export const scrollTo = (element, to, duration) => {
  const requestAnimationFrame = window.requestAnimationFrame ||
    function requestAnimationFrameTimeout() {
      return setTimeout(arguments[0], 10)
    }
  if (duration <= 0) {
    element.scrollTop = to
    return
  }
  const difference = to - element.scrollTop
  const perTick = difference / duration * 10

  requestAnimationFrame(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  })
}


/**
 * 获取元素距离指定相对父级的位置
 * @param {*} element 
 * @param {*} parent 必须具有相对/绝对定位的属性
 * @returns {Object}
 */
export const getOffsetByParent = (element, parent) => {
  let top = element.offsetTop
  let left = element.offsetLeft
  let offsetParent = element
  while ((offsetParent = offsetParent.offsetParent)) {
    if (offsetParent === parent) {
      break
    }
    top += offsetParent.offsetTop
    left += offsetParent.offsetLeft
  }
  return {
    top,
    left
  }
}


/**
 * 获取元素的滚动父级
 * @param {*} element 
 */
export const getScrollParent = element => {
  if (!element) {
    return document.body
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body
    case '#document':
      return element.body
  }
  const { overflow, overflowX, overflowY } = getStyle(element)
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element
  }
  return getScrollParent(element.parentNode)
}


/**
 * 获取一个有效的尺寸值
 * @param {*} size 
 */
export const getSize = size => {
  if (isNumberString(size)) {
    size += 'px'
  }
  if (size && !isNaN(parseFloat(size, 10))) {
    return size 
  }
  return 0
}


/**
 * 获取DOM元素的Index
 * @param {*} el 
 * @param {*} els 
 */
export const getIndex = (el, els) => {
  if (!els) {
    let parentNode = el.parentNode
    if (isElement(el)) {
      els = parentNode.children()
    } else if (isString(el)) {
      els = qsa(el, parentNode)
    } else {
      return -1
    }
  }

  let i = -1
  let len = els.length 
  while (++i < len) {
    if (els[i] === el) {
      return i 
    }
  }
  return -1
}


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
  removeNode,
  scrollTo,
  getOffsetByParent,
  getScrollParent,
  getSize,
  getIndex
}