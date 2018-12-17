/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 无限滚动加载数据
 * Created: 2018-12-15 15:14
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-12-15 15:14
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */


import Events from '../../utils/events'
import { isElement, throwError, mixins, isString, isEmpty } from '../../utils/utils'
import { qsa, getStyle, bind, reqAnimationFrame, addClass, insertAfter } from '../../utils/dom'
import debounce from '../../utils/debounce';

const noop = Function.prototype

const defaults = {
  // [ string | HTMLElement] 内容容器/选择器
  content: '.content',
  // [ string ] 当前语言
  lang: '',
  // [ number ] 总条目数
  total: null,
  // [ number ] 每页显示条数
  limit: 10,
  // [ number ] 当前页码
  index: 1,

  threshold: 100,

  rowHeight: 40,

  rowTagName: 'div',

  render: noop
}


function updatePageStates(values) {
  let isUpdate = false
  for (let k in values) {
    if (['total', 'limit', 'index'].indexOf(k) > -1) {
      let value = isEmpty(values[k]) ? void 0 : +values[k]
      if (k === 'index') {
        let index = value
        this.states[k] = (!isNaN(index) && index > 0) ? Math.round(index) : 1
      } else if (k === 'limit') {
        let limit = value
        this.states[k] = (!isNaN(limit) && limit > 0) ? Math.round(limit) : 10
      } else {
        let total = value
        this.states[k] = (!isNaN(total) && total >= 0) ? Math.ceil(total) : 0
      }
      isUpdate = true
    }
  }

  const { total, limit, index } = this.states
  // total pages
  let pages = Math.ceil(total / limit)
  this.states.pages = pages
  if (index > pages) {
    this.states.index = pages
  }
}


function handleScroll(e) {
  const {states, props} = this 
  // //console.log(states.loading)
  // let canLoad = !states.loading && 
  // states.index < states.pages && 
  // (states.$wrapper.scrollTop + states.wrapperHeight + props.threshold) > states.$wrapper.scrollHeight
  // //console.log(canLoad)

  // if (canLoad) {
  //   states.index++
  //   states.loading = true
  //   // this.emit('canLoad', states.index)
  // } else {
  //   renderInViewItems.call(this)
  // }

  // let {visibleStart, visibleEnd, listSize} = states
  console.log(1)
  updateScrollStates.call(this, states.$wrapper.scrollTop)
  // console.log(visibleStart, visibleEnd, states.visibleStart, states.visibleEnd, states.displayStart, states.displayEnd)

  // let shouldUpdate = !(
  //   visibleStart >= states.displayStart &&
  //   visibleEnd <= states.displayEnd
  // ) || (listSize !== states.listSize)
  // console.log(shouldUpdate)
}



function bindEvents() {
  const { props, states } = this
  const handles = states.handles = Object.create(null)
  handles.scroll = () => reqAnimationFrame(handleScroll.bind(this))
  // debounce(handleScroll.bind(this), 200)
  // reqAnimationFrame(handleScroll.bind(this))

  //debounce(handleScroll.bind(this), 200)


  bind(states.$wrapper, 'scroll', handles.scroll)

  this.on('afterLoad', list => {
    let len = states.listSize
    let size = list.length
    let i = -1
    while (++i < size) {
      states.listCaches[len + i] = list[i]
    }
    updateScrollStates.call(this, states.$wrapper.scrollTop)
  })
}


function renderInViewItems() {
  const { props, states } = this
  const {displayStart, displayEnd, listSize} = states
  
  
  const rows = states.listCaches.slice(displayStart, displayEnd)
  props.render.call(this, rows)
  states.$content.style.marginTop = displayStart * props.rowHeight + 'px'
  states.$content.style.marginBottom = (listSize - (displayEnd + 1)) * props.rowHeight + 'px'


  // const scrollTop = states.$wrapper.scrollTop
  // const listLen = states.listCaches.length
  // // 每屏可见的条目数
  // const visibleRowsCount = Math.ceil(states.wrapperHeight / props.rowHeight)
  // const start = Math.round(Math.max(0, scrollTop / props.rowHeight - 2))
  // const end = Math.round(Math.min(start + visibleRowsCount + 2, listLen - 1))
  // console.log(start, end)
  // const rows = states.listCaches.slice(start, end)
  // if (states.lastStart === start) {
  //   return
  // }
  // states.lastStart = start
  // this.emit('render', rows)
  // let beforeMargin = states.originalMarginTop + Math.max(0, start - 1) * props.rowHeight
  // let afterMargin = states.originalMarginBottom + Math.max(0, (listLen - end - 1) * props.rowHeight)
  // states.$content.style.marginTop = beforeMargin + 'px'
  // states.$content.style.marginBottom = afterMargin + 'px'

  // // states.$content.style.height = listLen * props.rowHeight + 'px'
  // // states.$content.style.webkitTransform = `translate3d(0, ${ start * props.rowHeight }px, 0)`
  // // states.$content.style.transform = `translate3d(0, ${ start * props.rowHeight }px, 0)`
}

function updateWrapperStates() {
  const { states, props } = this
  states.wrapperHeight = states.$wrapper.clientHeight
  states.visibleRowsCount = Math.ceil(states.wrapperHeight / props.rowHeight)
  states.visibleStart = 0
  states.visibleEnd = states.visibleRowsCount
  states.displayStart = 0
  states.displayEnd = states.visibleRowsCount * 2
}


function updateScrollStates(scroll) {
  const { states, props } = this
  const {displayStart: lastDisplayStart, displayEnd: lastDisplayEnd, listSize: oldSize} = states
  states.listSize = states.listCaches.length
  

  const visibleStart = Math.floor(scroll / props.rowHeight)
  const visibleEnd = Math.min(visibleStart + states.visibleRowsCount, states.listSize - 1)

  const displayStart = Math.max(0, Math.floor(scroll / props.rowHeight) - states.visibleRowsCount * 1.5)
  const displayEnd = Math.min(displayStart + 4 * states.visibleRowsCount, states.listSize - 1)
  
  let shouldUpdate = !(
    visibleStart >= lastDisplayStart &&
    visibleEnd <= lastDisplayEnd
    ) || (states.listSize !== oldSize)
  
  if (shouldUpdate) {
    states.visibleStart = visibleStart
    states.visibleEnd = visibleEnd
    states.displayStart = displayStart
    states.displayEnd = displayEnd
    renderInViewItems.call(this)
  }

  // renderInViewItems.call(this)
}


export class ScrollLoad extends Events {
  constructor(wrapper, options) {
    super()
    if (!(this instanceof ScrollLoad)) {
      return new ScrollLoad(wrapper, options)
    }
    if (!isElement(wrapper)) {
      throwError('\'wrapper\' 必须是一个DOM元素')
    }
    const props = this.props = mixins({}, defaults, options || {})
    const states = this.states = Object.create(null)
    states.$wrapper = wrapper
    states.listCaches = []
    states.listSize = 0
    let $content = props.content
    if (isString(props.content)) {
      $content = qsa(props.content, wrapper)[0]
    }
    if (!isElement($content)) {
      throwError('\'props.content\' 必须是一个DOM元素或者DOM选择器')
    }
    states.$content = $content
    states.index = defaults.index
    states.total = defaults.total
    states.limit = defaults.limit
    updateWrapperStates.call(this)
    const $before = document.createElement(props.rowTagName)
    addClass($before, 'nv-scroll-placeholder__before')
    const $after = document.createElement(props.rowTagName)
    addClass($after, 'nv-scroll-placeholder__after')

    $content.parentNode.insertBefore($before, $content)
    insertAfter($content, $after)
    states.$before = $before
    states.$after = $after

    updatePageStates.call(this, {
      index: props.index,
      total: props.total,
      limit: props.limit
    })
    states.loading = false
    states.start = 0
    states.end = 0

    // 第一次加载
    setTimeout(() => {
      this.emit('canLoad', states.index)
    }, 0)

    bindEvents.call(this)
  }



  setIndex() {

  }

  setTotal(total) {
    status.total = total
  }

  setLimit() {

  }





}

export default ScrollLoad