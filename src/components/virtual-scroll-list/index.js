/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 虚拟滚动列表，用于长列表滚动，提升滚动性能
 * Created: 2018-12-17 11:44
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-12-17 02:31
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import Events from '../../utils/events'
import {
  isElement, throwError, mixins, isString, isArray, isPlainObject
} from '../../utils/utils'
import { qsa, getStyle, bind, reqAnimationFrame, addClass, getScrollParent, getOffsetByParent, unbind, removeNode } from '../../utils/dom'

// ui class name
const UI_NAME = 'nv-virtual-scroll'

// default config
const defaults = {
  // [ string | HTMLElement ] rows容器
  content: '.content',
  // [ number ] 每行对的高度，必须固定高度，包括内外边距
  rowHeight: 40,
  // [ number ] 偏移数，默认实际可见个数，实际渲染数 = visibleNum + offset
  offset: 'auto',
  // [ string ] 每行数据的唯一标识字段, 用于删除数据或者更新数据时查找
  key: 'id',
  // [ number ] 滚动到顶或者滚动到底的阈值
  threshold: 100
}


/**
 * 更新content的位移
 * @param {*} el 
 * @param {*} value 
 */
function updateTranslateValue(el, value) {
  el.style.webkitTransform = `translate3d(0, ${value}px, 0)`
  el.style.transform = `translate3d(0, ${value}px, 0)`
}


/**
 * 更新visible状态
 * @private
 */
function updateVisibleStates() {
  const { props, states } = this
  // 缓存原始margin
  const contentStyles = getStyle(states.$content)
  states.originMarginTop = parseFloat(contentStyles.marginTop, 10)
  states.originMarginBottom = parseFloat(contentStyles.marginBottom, 10)
  if (getScrollParent(states.$content) !== states.$scroller) {
    states.$content.style.overflow = 'auto'
  }

  let scrollHeight
  if (states.$scroller === document.body) {
    let offsetTop = getOffsetByParent(states.$wrap, document.body).top
    scrollHeight = window.innerHeight - offsetTop
  } else {
    scrollHeight = parseFloat(getStyle(states.$scroller, 'maxHeight'), 10) || states.$scroller.clientHeight
  }

  states.scrollHeight = scrollHeight

  // 可见元素个数
  let visibleNum = Math.ceil((scrollHeight - states.originMarginTop - states.originMarginBottom) / props.rowHeight)
  let { offset } = props
  if (offset === 'auto' || isNaN(+offset)) {
    offset = visibleNum
  }
  // visible + offset = 实际渲染的DOM元素
  states.visibleNum = visibleNum
}


/**
 * 更新Scroll状态
 * @private
 */
function setScrollStates() {
  const { states } = this
  updateVisibleStates.call(this)
  const { visibleNum, offset } = states
  states.offset = 0
  states.start = 0
  states.end = visibleNum + offset - 1
  states.rolling = false
  states.scrollTimer = null
  states.resizeTimer = null
}


/**
 * bind dom events
 * @private
 */
function bindEvents() {
  const { props, states } = this
  const handles = states.handles = Object.create(null)
  const self = this
  handles.scroll = function (event) {
    reqAnimationFrame(function () {
      if (!states.rolling) {
        states.rolling = true
        states.$content.style.pointerEvents = 'none'
        clearTimeout(states.scrollTimer)
        states.scrollTimer = setTimeout(() => {
          states.rolling = false
          states.$content.style.pointerEvents = null
        }, 60)
      }
      let scrollTop = states.$scroller.scrollTop
      let scrollHeight = states.$scroller.scrollHeight
      render.call(self)
      if (scrollTop + props.threshold + states.scrollHeight >= scrollHeight) {
        // 触底，加载新数据等
        self.emit('onBottom', event)
      } else if (scrollTop - props.threshold <= 0) {
        // 触顶
        self.emit('onTop', event)
      }
    }.bind(self, event))
  }

  handles.resize = function () {
    clearTimeout(states.resizeTimer)
    states.resizeTimer = setTimeout(() => {
      updateVisibleStates.call(self)
      self.refresh()
    }, 60)
  }

  bind(states.$scroller, 'scroll', handles.scroll)
  bind(window, 'resize', handles.resize)
}


/**
 * unbind dom events
 * @private
 */
function unbindEvents() {
  const { states } = this
  const handles = states.handles
  unbind(states.$scroller, 'scroll', handles.scroll)
  unbind(window, 'resize', handles.resize)
}


/**
 * render
 * @param {*} force 
 * @private
 */
function render(force) {
  const { states, props } = this
  const { start: lastStart, end: lastEnd, size, virtualList, visibleNum, offset } = states
  let scrollTop = states.$scroller.scrollTop
  let start = Math.max(0, Math.floor(scrollTop / props.rowHeight) - offset)
  let end = Math.min(start + visibleNum + offset, size)

  if (force || lastStart !== start || lastEnd !== end) {
    states.start = start
    states.end = end
    const rows = virtualList.slice(start, end)
    props.render && props.render.call(this, rows)
    updateTranslateValue(states.$content, start * props.rowHeight)
  }
}


/**
 * 虚拟滚动列表
 * @date 2018-12-17
 * @export
 * @class VirtualScrollList
 * @extends {Events}
 */
export class VirtualScrollList extends Events {


  /**
   * Creates an instance of VirtualScrollList.
   * @date 2018-12-17
   * @param {*} scroller
   * @param {*} options
   * @memberof VirtualScrollList
   */
  constructor(scroller, options) {
    super()
    if (!(this instanceof VirtualScrollList)) {
      return new VirtualScrollList(scroller, options)
    }
    if (!isElement(scroller)) {
      throwError('\'scroller\' 必须是一个DOM元素')
    }

    const props = this.props = mixins({}, defaults, options || {})
    const states = this.states = Object.create(null)
    states.$scroller = scroller
    addClass(scroller, UI_NAME)
    let $content = props.content
    if (isString(props.content)) {
      $content = qsa(props.content, scroller)[0]
    }
    if (!isElement($content)) {
      throwError('\'props.content\' 必须是一个DOM元素或者DOM选择器')
    }
    states.$content = $content
    // 在content外面在包裹一层元素
    const $wrap = document.createElement('div')
    $wrap.className = UI_NAME + '__wrap'
    $content.parentNode.insertBefore($wrap, $content)
    $wrap.appendChild($content)
    states.$wrap = $wrap
    setScrollStates.call(this)
    // 虚拟列表
    this.reset([])
    bindEvents.call(this)
  }


  /**
   * reset list
   * @date 2018-12-17
   * @param {*} newList
   * @memberof VirtualScrollList
   */
  reset(newList) {
    const { states } = this
    if (newList && !isArray(newList)) {
      newList = [newList]
    }
    states.virtualList = []
    states.size = 0
    states.virtualMap = Object.create(null)
    // 
    states.$scroller.scrollTop = 0
    this.push(newList)
    updateTranslateValue(states.$content, 0)
    this.refresh()
  }


  /**
   * refresh dom list
   * @date 2018-12-17
   * @param {*} force
   * @memberof VirtualScrollList
   */
  refresh(force) {
    const { states, props } = this
    states.$wrap.style.height = states.size * props.rowHeight + 'px'
    setTimeout(() => render.call(this, force))
  }


  /**
   * push list to caches
   * @date 2018-12-17
   * @param {*} list
   * @memberof VirtualScrollList
   */
  push(list) {
    const { props, states } = this
    const { size, virtualList, virtualMap } = states
    let count = size
    if (list !== void 0 && !isArray(list)) {
      list = [list]
    }
    if (isArray(list)) {
      let i = -1
      let len = list.length
      while (++i < len) {
        let index = size + i
        let item = list[i]
        virtualList[index] = item
        props.getRowHeight && props.getRowHeight(item)
        count++
        if (isPlainObject(item) && item[props.key]) {
          // 记录这条数据在虚拟列表中的位置
          virtualMap[item[props.key]] = index
        }
      }
    }
    this.states.size = count
  }


  /**
   * remove item from caches
   * @date 2018-12-17
   * @param {*} key
   * @memberof VirtualScrollList
   */
  remove(key) {
    if (!key) {
      return
    }
    const { states } = this
    const { size, virtualList, virtualMap } = states
    let index = virtualMap[key]
    delete virtualMap[key]
    if (index > -1 && index < size) {
      virtualList.splice(index, 1)
    }
    states.size = size - 1
    // todo update visibileList
  }


  /**
   * update item
   * @date 2018-12-17
   * @param {*} key
   * @param {*} data
   * @memberof VirtualScrollList
   */
  update(key, data) {
    if (!key) {
      return
    }
    const { states } = this
    const { size, virtualList, virtualMap } = states
    let index = virtualMap[key]
    if (index > -1 && index < size) {
      virtualList.splice(index, 1, data)
    }
    // todo update visibileList
  }


  /**
   * destroy
   * @date 2018-12-17
   * @memberof VirtualScrollList
   */
  destroy() {
    const { states } = this
    unbindEvents.call(this)
    clearTimeout(states.resizeTimer)
    clearTimeout(states.scrollTimer)
    states.$wrap.parentNode.appendChild(states.$content)
    states.$scroller.classList.remove(UI_NAME)
    removeNode(states.$wrap)
    this.states = null
    this.props = null
    this._events = null
  }

}

export default VirtualScrollList