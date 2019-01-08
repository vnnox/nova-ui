/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 分页器
 * Created: 2018-11-08 11:13
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-08 11:29
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { Events } from '../../utils/events'
import { isElement, mixins, isEmpty, isArray, hasKey, throwError } from '../../utils/utils'
import { template } from '../../utils/template'
import { addClass, qsa, proxy, bind, unbind, removeNode } from '../../utils/dom'
import { i18n } from '../../utils/i18n'
import { getLocales } from '../../utils/locale'
import Select from '../select'
import { CLASS_STATUS_DISABLED } from '../../utils/constant'
import { totalTpl, prevTpl, pagerTpl, nextTpl, sizesTpl, jumperTpl, pagerItemsTpl } from './template'

// ui className
const UI_NAME = 'nv-pagination'

// 最小可见页码数量值
const VISIBLE_MIN = 5

// 最大可见页码数量值
const VISIBLE_MAX = 21

// 可用layout元件
const LAYOUTS = ['total', 'prev', 'pager', 'next', 'sizes', 'jumper']

// layout元件与模板对应字典
const LAYOUT_TPL_MAP = {
  total: totalTpl,
  prev: prevTpl,
  pager: pagerTpl,
  next: nextTpl,
  sizes: sizesTpl,
  jumper: jumperTpl
}

// 内部选择器
const Selectors = {
  total: '.nv-pagination__total',
  prev: '.nv-pagination__prev',
  pagers: '.nv-pagination__pagers',
  next: '.nv-pagination__next',
  sizes: '.nv-pagination__sizes',
  jumper: '.nv-pagination__jumper',
  jumperInput: '.pagination-jumper__input',
  pager: '.nv-pager',
}

// default config
const defaults = {
  // [ string ] 当前语言
  lang: '',
  // [ number ] 总条目数
  total: null,
  // [ number ] 每页显示条数
  limit: 10,
  // [ number ] 当前页码
  index: 1,
  /**
   * [ number ] 可见页码数量
   * 当总页数超过该值时其他页码会隐藏
   * 大于等于5小于等于21的奇数
   */
  visible: 5,
  /**
   * [ Boolean ] 是否显示截断点
   * 当总页码超过visible数时，其他页码会被显示为...
   */
  ellipsis: true,
  /**
   * [ string | array ] 元件布局
   * 可选元件：'total', 'prev', 'pager', 'next', 'sizes', 'jumper'
   * total: 共 {total} 条
   * prev: 上一页
   * pager: 数字分页，不包括上/下页按钮
   * next: 下一页
   * sizes: limit选择器
   * jumper: 跳转到page页
   * 多个元件使用数组或者逗号分隔，元件顺序就是布局顺序
   */
  layout: 'prev, pager, next',
  /**
   * [ string ] 上一页按钮显示文本
   * default时将会显示为箭头
   */
  prevText: 'default',
  /**
   * [ string ] 下一页按钮显示文本
   * default时将会显示为箭头
   */
  nextText: 'default',
  /**
   * [ Array ] limit数选择器
   * 可选的每页显示条目数
   */
  sizes: [10, 20, 50, 100],
  // [ string ] 自定义样式
  customClass: null,
}


/**
 * 渲染
 * @private
 */
function render() {
  const { props, states } = this
  const { $container } = states
  let layouts = []
  // fixed layout list
  if (!isEmpty(props.layout)) {
    let _layouts = isArray(props.layout) ? props.layout : props.layout.split(',')
    _layouts.forEach(item => {
      item = item.trim()
      if (LAYOUTS.indexOf(item) > -1) {
        layouts.push(item)
      }
    })
  } else {
    layouts = ['prev', 'pager', 'next']
  }

  const $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)

  let html = ''

  // 根据layout顺序渲染模板
  layouts.forEach(element => {
    if (hasKey(element, LAYOUT_TPL_MAP)) {
      let tpl = template(LAYOUT_TPL_MAP[element], {
        prevText: props.prevText === 'default' ?
          '<i class="nv-icon-arrow-left"></i>' : props.prevText,
        nextText: props.nextText === 'default' ?
          '<i class="nv-icon-arrow-right"></i>' : props.nextText,
        jumper: states.jumper,
      })
      html += i18n(tpl, states.locales, {})
    }
  })

  $el.innerHTML = html

  // 缓存DOM
  states.$el = $el
  states.$total = qsa(Selectors.total, $el)[0]
  states.$prev = qsa(Selectors.prev, $el)[0]
  states.$next = qsa(Selectors.next, $el)[0]
  states.$pagers = qsa(Selectors.pagers, $el)[0]
  states.$sizes = qsa(Selectors.sizes, $el)[0]
  states.$jumper = qsa(Selectors.jumper, $el)[0]
  states.$jumperInput = states.$jumper && qsa(Selectors.jumperInput, states.$jumper)[0]

  // 设置limit选择器
  if (states.$sizes && states.sizes.length) {
    let options = getLimitOptions.call(this)
    let limitSelectIns = new Select(qsa('input', states.$sizes)[0], {
      options,
      value: states.limit,
      selectClass: 'pagination-sizes-select',
      align: 'left'
    })
    states.limitSelectIns = limitSelectIns
    limitSelectIns.on('change', value => {
      if (states.limit === value) {
        return
      }
      this.setLimit(value)
    })
  }

  $container.appendChild($el)
  updateDom.call(this)
  bindEvents.call(this)
}


/**
 * 渲染页码
 * @private
 */
function renderPagers() {
  const { states } = this
  let data = getPagers.call(this)
  states.$pagers.innerHTML = template(pagerItemsTpl, {
    data
  })
}


/**
 * 绑定DOM事件
 * @private
 */
function bindEvents() {
  const self = this
  const { states } = this
  const { handles } = states
  if (states.$pagers) {
    // 页码点击事件
    handles.pagerClick = proxy(states.$pagers, Selectors.pager, function () {
      let classList = this.classList
      if (classList.contains('nv-actived') || classList.contains('nv-pager--ellipsis')) {
        return
      }
      let value = this.getAttribute('data-value')
      value = +value
      if (value) {
        self.setIndex(value)
      }
    })
    bind(states.$pagers, 'click', handles.pagerClick)
  }

  // prevBtn 点击事件
  handles.prevClick = function () {
    if (states.index > 1) {
      self.setIndex(states.index - 1)
    }
  }

  // nextBtn 点击事件
  handles.nextClick = function () {
    if (states.index < states.pages) {
      self.setIndex(states.index + 1)
    }
  }

  // jumperInput Change事件
  handles.jumperChange = function (e) {
    let value = e.target.value.trim()
    value = value === '' ? void 0 : +value
    if (isNaN(value)) {
      value = states.jumper
    } else {
      value = Math.round(Math.abs(value))
      value = Math.min(Math.max(1, value), states.pages)
    }
    self.setIndex(value)
  }

  states.$prev && bind(states.$prev, 'click', handles.prevClick)
  states.$next && bind(states.$next, 'click', handles.nextClick)
  states.$jumperInput && bind(states.$jumperInput, 'change', handles.jumperChange)
}


/**
 * 解绑DOM事件
 * @private
 */
function unbindEvents() {
  const { states } = this
  const { handles } = states
  states.$pagers && unbind(states.$pagers, 'click', handles.pagerClick)
  states.$prev && unbind(states.$prev, 'click', handles.prevClick)
  states.$next && unbind(states.$next, 'click', handles.nextClick)
  states.$jumperInput && unbind(states.$jumperInput, 'change', handles.jumperChange)
}


/**
 * 获取limit选择器选项
 * @private
 */
function getLimitOptions() {
  const { states } = this
  const { sizes } = states
  let options = []
  sizes && sizes.forEach(size => {
    options.push({
      value: size,
      label: size + ''
    })
  })
  return options
}


/**
 * 生成页码
 * @private
 * @param {*} value
 * @param {*} index
 * @param {*} pages
 * @returns
 */
function genPager(value, index, pages) {
  let item = Object.create(null)
  item.value = value
  item.active = value === index
  item.first = value === 1
  item.last = value === pages
  return item
}


/**
 * 验证prevBtn是否禁用
 * @private
 */
function isDisabledPrev() {
  const { states } = this
  return states.index === 1
}


/**
 * 验证nextBtn是否禁用
 * @private
 */
function isDisabledNext() {
  const { states } = this
  return states.index === states.pages
}


/**
 * 获取数字页码列表
 * @private
 */
function getPagers() {
  const { states, props } = this
  const { index, pages } = states
  const { visible, ellipsis } = props
  const data = []

  // 不显示截断点
  if (!ellipsis) {
    for (let i = 1; i <= pages; i++) {
      data.push(genPager(i, index, pages))
    }
    return data
  }

  // 显示截断
  const _offset = (visible - 1) / 2
  const offset = {
    start: index - _offset,
    end: index + _offset,
  }
  if (offset.start < 1) {
    offset.end = offset.end + (1 - offset.start)
    offset.start = 1
  }
  if (offset.end > pages) {
    offset.start = offset.start - (offset.end - pages)
    offset.end = pages
  }
  if (offset.start < 1) { offset.start = 1 }

  let prevEllipsis = (offset.start > 1)
  let nextEllipsis = (offset.end < pages)

  if (prevEllipsis) {
    data.push(genPager(1, index, pages)) // 1
    data.push(genPager(-1, index, pages)) // ...
  }
  for (let i = offset.start; i <= offset.end; i++) {
    data.push(genPager(i, index, pages))
  }
  if (nextEllipsis) {
    data.push(genPager(-1, index, pages)) // ...
    data.push(genPager(pages, index, pages)) // pages
  }

  return data
}


/**
 * 更新States
 * 主要是对传入的limit,index,total等值进行校验
 * 确保参数的可用性
 * @param {*} states
 * @private
 */
function updateStates(states) {
  let isUpdate = false
  for (let k in states) {
    if (['total', 'limit', 'index'].indexOf(k) > -1) {
      let value = isEmpty(states[k]) ? void 0 : +states[k]
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

  if (!isUpdate) {
    return
  }

  const { total, limit, index } = this.states

  // total pages
  let pages = Math.ceil(total / limit)
  this.states.pages = pages
  if (index > pages) {
    this.states.index = pages
  }

  this.states.jumper = this.states.index
}


/**
 * 更新每页显示条数的列表
 * 如果列表中不包含传入的limit
 * 则添加limit到该列表
 * 并且对limit列表进行排序操作
 * @private
 */
function updateSizes() {
  const { props, states } = this
  let sizes = props.sizes
  if (!isArray(sizes)) {
    sizes = [states.limit]
  }
  if (isArray(sizes)) {
    let newSizes = []
    sizes.map(size => {
      size = +size
      if (!isNaN(size) && size > 0) {
        size = Math.floor(size)
        if (newSizes.indexOf(size) === -1) {
          newSizes.push(size)
        }
      }
    })
    sizes = newSizes
  }
  if (sizes.indexOf(states.limit) === -1) {
    sizes.push(states.limit)
  }
  sizes.sort((a, b) => a - b)
  states.sizes = sizes
}


/**
 * 更新DOM相关
 * @private
 */
function updateDom() {
  const { states } = this
  const { total, index, limit, pages } = states

  // 如果记录数为0,则不显示分页
  if (total === 0 || pages === 0) {
    states.$el.classList.add('nv-hide')
    return
  }

  states.$el.classList.remove('nv-hide')

  // 更新总记录数
  if (states.$total) {
    states.$total.innerHTML = i18n._(states.locales.total, {
      total,
      index,
      limit,
      pages
    })
  }

  // 更新数字分页
  if (states.$pagers) {
    renderPagers.call(this)
  }

  // 切换上一页按钮的禁用状态
  if (states.$prev) {
    let isDisabled = isDisabledPrev.call(this)
    states.$prev.classList[isDisabled ? 'add' : 'remove'](CLASS_STATUS_DISABLED)
    isDisabled ? states.$prev.setAttribute('disabled', 'disabled') : states.$prev.removeAttribute('disabled')
  }

  // 切换下一页按钮的禁用状态
  if (states.$next) {
    let isDisabled = isDisabledNext.call(this)
    states.$next.classList[isDisabled ? 'add' : 'remove'](CLASS_STATUS_DISABLED)
    isDisabled ? states.$next.setAttribute('disabled', 'disabled') : states.$next.removeAttribute('disabled')
  }

  // 重设jumper的值,
  if (states.$jumperInput) {
    states.jumper = states.index
    states.$jumperInput.value = states.jumper
  }
}



/**
 * Pagination Component
 * @date 2018-11-15
 * @export
 * @class Pagination
 * @extends {Events}
 */
export class Pagination extends Events {

  /**
   * Creates an instance of Pagination.
   * @date 2018-11-15
   * @param {*} container
   * @param {*} options
   * @memberof Pagination
   */
  constructor(container, options) {
    super()
    if (!(this instanceof Pagination)) {
      return new Pagination(container, options)
    }
    if (!isElement(container)) {
      throwError('\'container\' 必须是一个DOM容器', 'type')
    }

    const props = this.props = mixins({}, defaults, options || {})
    const states = this.states = Object.create(null)
    states.handles = Object.create(null)
    states.pages = 0
    states.$container = container

    // 初始化语言包
    states.locales = getLocales(props.lang).pagination

    // 处理visible num
    let { visible } = props
    visible = +visible
    if (!isNaN(visible)) {
      // 必须是奇数
      if (visible % 2 === 0) {
        visible++
      }
      visible = Math.max(visible, VISIBLE_MIN)
      visible = Math.min(visible, VISIBLE_MAX)
    } else {
      visible = VISIBLE_MIN
    }
    props.visible = visible

    // 处理 total, index, limit
    updateStates.call(this, props)
    updateSizes.call(this)
    render.call(this)
  }


  /**
   * 设置总记录数
   * 如异步获取某个列表时，同时会返回相应的总记录条数
   * 此时调用该方法可以更新组件
   * @param {Number} total
   * @public
   * @memberof Pagination
   */
  setTotal(total) {
    updateStates.call(this, {
      total
    })
    // total改变的话需要重新设置页码
    // this.states.index = this.states.jumper = 1
    updateDom.call(this)
  }


  /**
   * 设置当前页码
   * 用来从外部更新当前页码
   * 内部会自动校验页码的有效性
   * @param {Number} index
   * @public
   * @memberof Pagination
   */
  setIndex(index, emit = true) {
    let oldIndex = this.states.index
    updateStates.call(this, {
      index
    })
    updateDom.call(this)
    if (emit && oldIndex !== this.states.index) {
      this.emit('change', this.states.index, this.states.limit, this.states.pages)
    }
  }


  /**
   * 设置每页显示条数
   * 如果每页显示条数列表（下拉列表）中不包含
   * 该值，会自动加入
   * @param {*} limit
   * @public
   * @memberof Pagination
   */
  setLimit(limit, emit = true) {
    const { states } = this
    let oldLimit = states.limit
    updateStates.call(this, {
      limit
    })
    // 已经更新后的limit
    limit = states.limit
    // 没有变化的化，不做任何操作
    if (limit === oldLimit) {
      return
    }
    // 重置当前页码
    // states.index = states.jumper = 1
    updateDom.call(this)
    if (states.limitSelectIns) {
      let sizes = states.sizes
      // 如果原有的sizeList里面不包含当前的limit,则插入进去
      if (sizes.indexOf(limit) === -1) {
        sizes.push(limit)
        sizes.sort((a, b) => a - b)
        states.sizes = sizes
        // 更新limitSelect组件
        states.limitSelectIns.setOptions(getLimitOptions.call(this))
      }
      states.limitSelectIns.setValue(limit)
    }
    
    if (emit) {
      this.emit('change', this.states.index, this.states.limit, this.states.pages)
    }
  }


  /**
   * 销毁当前组件
   * @public
   * @memberof Pagination
   */
  destroy() {
    const { states } = this
    unbindEvents.call(this)
    // 移除当前DOM
    removeNode(states.$el)
    // 销毁limit选择器组件
    states.limitSelectIns && states.limitSelectIns.destroy()
    this.states = null
    this.props = null
    this._events = null
  }

}

export default Pagination