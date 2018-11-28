/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 日期选择器
 * Created: 2018-11-27 09:12
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-28 11:43
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { Events } from '../../utils/events'
import { mixins, isElement, isFunction, throwError } from '../../utils/utils'
import Locales from '../../locale'
import template from '../../utils/template'
import { parseDate, formatDate, isSameDay, toDate, isSameDate, pad, getDaysInMonth, getFirstDayInMonth } from './utils'
import { insertAfter, addClass, qsa, bind, unbind, getIndex, proxy, removeNode } from '../../utils/dom'
import Picker from '../picker'
import { CLASS_STATUS_DISABLED, CLASS_STATES_ACTIVED, CLASS_STATES_HIDE } from '../../utils/constant'
import { getPlacementByAlign } from '../picker/placements'
import { panelTpl, yearMonthTpl, weekTpl, datesTpl } from './template'

// ui class name
const UI_NAME = 'nv-date-picker'
const UI_WRAP_NAME = 'panel-wrap'

// modes
const MODES = ['date', 'year', 'month']

// min date
const MIN_DATE = new Date(1000, 0, 1, 0, 0, 0)

// max dae
const MAX_DATE = new Date(9999, 11, 31, 0, 0, 0)

// default config
const defaults = {
  // [ string ] 国际化
  lang: 'zh-CN',
  // [ string, Date ] 绑定值
  value: '',
  // [ string ] 模式
  mode: 'date',
  // [ string ] 格式化
  format: 'YYYY-MM-DD',
  // [ number ] 一周的起始日 [0 - 6]
  weekStart: 0,
  // [ function | array ] 返回禁用的日期
  disabledDate: null,
  // [ string | date ] 可选的最小日期
  min: null,
  // [ string | date ] 可选的最大日期
  max: null,
  // [ boolean ] 是否禁用
  disabled: false,
  // [ boolean ]  直接插入到指定容器
  inline: false,
  // [ string ] 自定义样式
  customClass: '',
  // [ string ] 与target的对齐方式
  align: 'left',
  // [ boolean ] 显示今天按钮
  today: false,
  // [ boolean ] 显示确定按钮
  confirm: false
}

// selectors
const Selectors = {
  yearPrev: '.year-prev',
  yearNext: '.year-next',
  monthPrev: '.month-prev',
  monthNext: '.month-next',
  currentYear: '.year-current',
  currentMonth: '.month-current',
  body: '.nv-date__body',
  foot: '.nv-date__foot',
  item: '.nv-date__item',
  today: '.nv-date__btn_today',
  confirm: '.nv-date__btn_confirm',
}


/**
 * render
 * @private
 */
function render() {
  const { props, states } = this
  const { locales } = states
  const $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)
  props.inline && addClass($el, UI_NAME + '--inline')

  $el.innerHTML = template(panelTpl, {
    today: !props.inline && props.today ? locales.today : false,
    confirm: !props.inline && props.confirm ? locales.confirm : false
  })
  states.$el = $el
  states.$yearPrev = qsa(Selectors.yearPrev, $el)[0]
  states.$yearNext = qsa(Selectors.yearNext, $el)[0]
  states.$monthPrev = qsa(Selectors.monthPrev, $el)[0]
  states.$monthNext = qsa(Selectors.monthNext, $el)[0]
  states.$currentYear = qsa(Selectors.currentYear, $el)[0]
  states.$currentMonth = qsa(Selectors.currentMonth, $el)[0]
  states.$body = qsa(Selectors.body, $el)[0]
  states.$today = qsa(Selectors.today, $el)[0]
  states.$confirm = qsa(Selectors.confirm, $el)[0]
  states.$foot = qsa(Selectors.foot, $el)[0]
  if (!states.$today && !states.$confirm) {
    removeNode(states.$foot)
  }
  if (props.inline) {
    states.isInput ? insertAfter(states.$target, $el) : states.$target.appendChild($el)
  } else {
    initPickerInstance.call(this)
  }
  this.toggleView()
  bindEvents.call(this)
}


/**
 * 初始化Picker
 * @private
 */
function initPickerInstance() {
  const { props, states } = this
  states.pickerInstance = new Picker(states.$target, {
    content: states.$el,
    trigger: 'click',
    placement: getPlacementByAlign(props.align),
    showArrow: false,
    margin: 2,
    disabled: props.disabled
  })
  states.pickerInstance
    .on('open', () => {
      states.pickeOpened = true
      setValueState.call(this, states.bindValue)
      states.view = props.mode
      this.toggleView()
      this.emit('open', states.pickerInstance)
    })
    .on('close', () => {
      states.pickeOpened = false
      this.emit('close', states.pickerInstance)
    })
}


/**
 * 点击当前年
 * @event
 * @private
 */
function handleCurrentYearClick() {
  if (this.states.view === 'date' || this.states.view === 'month') {
    this.toggleView('year')
  }
}


/**
 * 点击当前月
 * @event
 * @private
 */
function handleCurrentMonthClick() {
  this.toggleView('month')
}


/**
 * 点击today按钮
 * @date 2018-11-28
 * @param {*} e
 */
function handleTodayClick(e) {
  e.stopPropagation()
  this.setValue(new Date(), true)
}


/**
 * 点击confirm按钮
 * @date 2018-11-28
 * @param {*} e
 */
function handleConfirmClick(e) {
  e.stopPropagation()
  if (!this.states.value) {
    return
  }
  this.setValue(this.states.value, true)
}


/**
 * bind dom events
 * @date 2018-11-28
 * @private
 */
function bindEvents() {
  const { states, props } = this
  const self = this
  const handles = states.handles = Object.create(null)
  handles.currentYearClick = handleCurrentYearClick.bind(this)
  handles.currentMonthClick = handleCurrentMonthClick.bind(this)
  handles.dateClick = proxy(states.$body, Selectors.item, function (e) {
    e.stopPropagation()
    const { dates, $dates, view } = states
    let index = getIndex(this, $dates)
    if (index === -1) {
      return
    }
    let data = dates[index]
    if (data.disabled) {
      return
    }
    let value = data.date
    let set = false
    switch (view) {
      case 'year':
        if (props.mode === 'year') {
          set = true
        } else {
          states.year = data.value
          self.toggleView('month')
        }
        break
      case 'month':
        if (props.mode === 'month') {
          set = true
        } else {
          states.month = data.value
          self.toggleView('date')
        }
        break
      case 'date':
      default:
        set = true
        break
    }
    if (set) {
      self.setValue(value)
    }
  })

  handles.prevYear = this.prevYear.bind(this)
  handles.nextYear = this.nextYear.bind(this)
  handles.prevMonth = this.prevMonth.bind(this)
  handles.nextMonth = this.nextMonth.bind(this)
  handles.today = handleTodayClick.bind(this)
  handles.confirm = handleConfirmClick.bind(this)


  bind(states.$currentYear, 'click', handles.currentYearClick)
  bind(states.$currentMonth, 'click', handles.currentMonthClick)
  bind(states.$body, 'click', handles.dateClick)
  bind(states.$yearPrev, 'click', handles.prevYear)
  bind(states.$yearNext, 'click', handles.nextYear)
  bind(states.$monthPrev, 'click', handles.prevMonth)
  bind(states.$monthNext, 'click', handles.nextMonth)
  states.$today && bind(states.$today, 'click', handles.today)
  states.$confirm && bind(states.$confirm, 'click', handles.confirm)
}


/**
 * unbind dom events
 * @date 2018-11-28
 * @private
 */
function unbindEvents() {
  const { states } = this
  const handles = states.handles
  unbind(states.$currentYear, 'click', handles.currentYearClick)
  unbind(states.$currentMonth, 'click', handles.currentMonthClick)
  unbind(states.$body, 'click', handles.dateClick)
  unbind(states.$yearPrev, 'click', handles.prevYear)
  unbind(states.$yearNext, 'click', handles.nextYear)
  unbind(states.$monthPrev, 'click', handles.prevMonth)
  unbind(states.$monthNext, 'click', handles.nextMonth)
  states.$today && unbind(states.$today, 'click', handles.today)
  states.$confirm && unbind(states.$confirm, 'click', handles.confirm)
}


/**
 * 生成一个面板容器
 * @param {*} view
 * @method 
 */
function genWrap(view) {
  const $view = document.createElement('div')
  $view.className = UI_WRAP_NAME
  addClass($view, UI_WRAP_NAME + '--' + view)
  return $view
}


/**
 * 渲染年面板
 * @date 2018-11-28
 * @private
 */
function renderYearPanel() {
  const { states } = this
  let $view = states.$year
  if (!$view) {
    $view = states.$year = genWrap('year')
    states.$body.appendChild($view)
  }
  let years = getYears.call(this)
  $view.innerHTML = template(yearMonthTpl, {
    dates: years,
  })
  states.dates = years
  states.$dates = qsa(Selectors.item, $view)
  afterViewChange.call(this)
}


/**
 * 渲染月面板
 * @date 2018-11-28
 * @private
 */
function renderMonthPanel() {
  const { states } = this
  let $view = states.$month
  const { locales } = states
  const { year } = states
  let months = []
  let i = 0
  while (i++ < 12) {
    months.push({
      value: i,
      label: locales.months[i - 1],
      date: new Date(year, i, 0) // 当月最后一天
    })
  }
  if (!$view) {
    $view = states.$month = genWrap('month')
    $view.innerHTML = template(yearMonthTpl, {
      dates: months
    })
    states.$body.appendChild($view)
  }
  states.dates = months
  states.$dates = qsa(Selectors.item, $view)
  afterViewChange.call(this)
}


/**
 * 渲染日期面板
 * @date 2018-11-28
 * @private
 */
function renderDatePanel() {
  const { states } = this
  let { weekStart, locales } = states
  let start = weekStart % 7
  let weeks = locales.weeks
  weeks = weeks.slice(start).concat(weeks.slice(0, start))
  let dates = getDates.call(this)
  let $view = states.$date
  if (!$view) {
    $view = states.$date = genWrap('date')
    states.$body.appendChild($view)
  }
  let html = template(weekTpl, {
    weeks
  })

  html += template(datesTpl, {
    dates
  })

  $view.innerHTML = html

  states.dates = dates
  states.$dates = qsa(Selectors.item, $view)
  afterViewChange.call(this)
}


/**
 * 获取当前面板上的日期列表
 * @private
 * @returns {array}
 */
function getDates() {
  const { states, props } = this
  let dates = []
  let { year, month, weekStart } = states
  let length
  let i
  let firstDay = getFirstDayInMonth(year, month)
  let now = new Date()
  // 本月从第几格开始，上月占几格
  let offset = firstDay - (weekStart & 7)
  if (offset <= 0) {
    offset += 7
  }

  // prev
  let prevYear = year
  let prevMonth = month
  if (month === 1) {
    prevYear -= 1
    prevMonth = 12
  } else {
    prevMonth -= 1
  }
  length = getDaysInMonth(prevYear, prevMonth)
  for (i = length - (offset - 1); i <= length; i++) {
    let date = getADateStr(prevYear, prevMonth, i)
    let today = isSameDay(date, now)
    dates.push({
      value: date,
      label: i,
      date: parseDate(date, props.format),
      today,
      placeholder: true
    })
  }

  // 当月
  length = getDaysInMonth(year, month)
  for (i = 1; i <= length; i++) {
    let date = getADateStr(year, month, i)
    let today = isSameDay(date, now)
    dates.push({
      value: date,
      label: i,
      date: parseDate(date, props.format),
      today,
    })
  }

  // 下月
  let nextYear = year
  let nextMonth = month
  if (month === 12) {
    nextYear += 1
    nextMonth = 1
  } else {
    nextMonth += 1
  }

  length = 42 - dates.length
  for (i = 1; i <= length; i++) {
    let date = getADateStr(nextYear, nextMonth, i)
    let today = isSameDay(date, now)
    dates.push({
      value: date,
      label: i,
      date: parseDate(date, props.format),
      today,
      placeholder: true,
    })
  }

  return dates
}


/**
 * 获取当前面板上的年份列表
 * @private
 * @returns {array}
 */
function getYears() {
  const { states } = this
  let { year, locales } = states
  let yearStr = year + ''
  let value = yearStr.charAt(yearStr.length - 1)
  let left = Math.abs(0 - (+value))
  let right = 9 - (+value)
  let years = []

  // 遍历当前年的每一天，直到disabledDate 返回true 或者循环结束
  // left
  while (left) {
    let val = year - left
    years.push({
      value: val,
      label: val + locales.year,
      date: new Date(val, 11, 31)
    })
    left--
  }

  // now
  years.push({
    value: year,
    label: year + locales.year,
    date: new Date(year, 11, 31)
  })

  // right
  for (let i = 1; i <= right; i++) {
    let val = year + i
    years.push({
      value: val,
      label: val + locales.year,
      date: new Date(val, 11, 31)
    })
  }

  let firstYear = years[0].value - 1
  years.unshift({
    value: firstYear,
    label: firstYear + locales.year,
    placeholder: true,
    date: new Date(firstYear, 11, 31)
  })
  let lastYear = years[years.length - 1].value + 1
  years.push({
    value: lastYear,
    label: lastYear + locales.year,
    placeholder: true,
    date: new Date(lastYear, 11, 31)
  })

  return years
}


/**
 * 获取年月日字符串
 * @method
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 */
function getADateStr(year, month, day) {
  return [year, pad(month, 2), pad(day, 2)].join('-')
}


/**
 * 当面板改变后改变面板上的状态
 * @private
 */
function afterViewChange() {
  const { states } = this
  const { locales } = states
  const { $currentYear, $currentMonth, $monthPrev, $monthNext, year, month, view, dates, $dates } = states

  toggleBtnState.call(this)

  switch (view) {
    case 'date':
      $monthPrev.classList.remove(CLASS_STATES_HIDE)
      $monthNext.classList.remove(CLASS_STATES_HIDE)
      $currentMonth.classList.remove(CLASS_STATES_HIDE)
      $currentYear.textContent = year + locales.year
      $currentMonth.textContent = locales.shortMonths[month - 1]
      break
    case 'year':
    case 'month':
      $currentMonth.classList.add(CLASS_STATES_HIDE)
      $monthPrev.classList.add(CLASS_STATES_HIDE)
      $monthNext.classList.add(CLASS_STATES_HIDE)
      if (view === 'year') {
        states.$currentYear.textContent = dates[1].label + ' - ' + dates[dates.length - 2].label
      } else {
        states.$currentYear.textContent = year + locales.year
      }
      break
  }

  dates.forEach((date, index) => {
    let actived = isSameDate(states.value, date.date, view)
    let disabled = this.isDisabled(date.date)
    date.disabled = disabled
    $dates[index].classList[disabled ? 'add' : 'remove'](CLASS_STATUS_DISABLED)
    $dates[index].classList[actived ? 'add' : 'remove'](CLASS_STATES_ACTIVED)
  })

  this.emit('viewChange', {
    view,
    dates,
    $dates,
    year,
    month
  })
}


/**
 * 切换按钮状态
 * @private
 */
function toggleBtnState() {
  isDisabledPrevYear.call(this)
  isDisabledPrevMonth.call(this)
  isDisabledNextYear.call(this)
  isDisabledNextMonth.call(this)
}


/**
 * 上一（十）年按钮是否禁用
 * @private
 * @returns {boolean}
 */
function isDisabledPrevYear() {
  const { props, states } = this
  let { year, view } = states
  let minYear = props.min.getFullYear()
  let step = view === 'year' ? 10 : 1
  let disabled = (year - step) < minYear
  if (disabled) {
    states.$yearPrev.setAttribute('disabled', '')
    states.$yearPrev.classList.add(CLASS_STATUS_DISABLED)
  } else {
    states.$yearPrev.removeAttribute('disabled')
    states.$yearPrev.classList.remove(CLASS_STATUS_DISABLED)
  }
  return disabled
}


/**
 * 下一（十）年按钮是否禁用
 * @private
 * @returns {boolean}
 */
function isDisabledNextYear() {
  const { props, states } = this
  let { year, view } = states
  let maxYear = props.max.getFullYear()
  let step = view === 'year' ? 10 : 1
  let disabled = (year + step) > maxYear
  if (disabled) {
    states.$yearNext.setAttribute('disabled', '')
    states.$yearNext.classList.add(CLASS_STATUS_DISABLED)
  } else {
    states.$yearNext.removeAttribute('disabled')
    states.$yearNext.classList.remove(CLASS_STATUS_DISABLED)
  }
  return disabled
}


/**
 * 上一月按钮是否禁用
 * @private
 * @returns {boolean}
 */
function isDisabledPrevMonth() {
  const { props, states } = this
  let { year, month } = states
  month = month - 1
  let minDate = props.min
  // 上月31日小于最小日期
  let value = new Date(year, month, 0)
  let disabled = value * 1 <= minDate * 1
  if (disabled) {
    states.$monthPrev.setAttribute('disabled', '')
    states.$monthPrev.classList.add(CLASS_STATUS_DISABLED)
  } else {
    states.$monthPrev.removeAttribute('disabled')
    states.$monthPrev.classList.remove(CLASS_STATUS_DISABLED)
  }
  return disabled
}


/**
 * 下一月按钮是否禁用
 * @private
 * @returns {boolean}
 */
function isDisabledNextMonth() {
  const { props, states } = this
  let { year, month } = states
  month = month - 1
  let maxDate = props.max
  // 下月31日大于最大日期
  let value = new Date(year, month + 1, 0, 0)
  let disabled = value * 1 >= maxDate * 1
  if (disabled) {
    states.$monthNext.setAttribute('disabled', 'disabled')
    states.$monthNext.classList.add(CLASS_STATUS_DISABLED)
  } else {
    states.$monthNext.removeAttribute('disabled')
    states.$monthNext.classList.remove(CLASS_STATUS_DISABLED)
  }
  return disabled
}


/**
 * 设置值得状态
 * @date 2018-11-28
 * @param {*} value
 */
function setValueState(value) {
  const { props, states } = this
  value = parseDate(value, props.format)
  value = value ? toDate(value) : null
  let date = value || new Date()
  states.year = date.getFullYear()
  states.month = date.getMonth() + 1
  if (value) {
    if (props.mode === 'year') {
      value.setMonth(0)
      value.setDate(1)
    }
    if (props.mode === 'month') {
      value.setDate(1)
    }
  }
  states.value = value
}


/**
 * 设置最小最大值
 * @date 2018-11-28
 * @param {*} min
 * @param {*} max
 */
function setMinMaxDate(min, max) {
  const { props } = this
  min = min || props.min
  max = max || props.max
  let minDate = parseDate(min, props.format) || MIN_DATE
  let maxDate = parseDate(max, props.format) || MAX_DATE
  minDate = Math.max(minDate * 1, MIN_DATE * 1)
  maxDate = Math.min(maxDate * 1, MAX_DATE * 1)
  props.min = toDate(minDate)
  props.max = toDate(maxDate)
}



/**
 * Date Picker Component
 * @date 2018-11-28
 * @export
 * @class DatePicker
 * @extends {Events}
 */
export class DatePicker extends Events {

  /**
   * Creates an instance of DatePicker.
   * @date 2018-11-28
   * @param {*} target
   * @param {*} options
   * @memberof DatePicker
   */
  constructor(target, options) {
    super()
    if (!(this instanceof DatePicker)) {
      return new DatePicker(target, options)
    }
    if (!isElement(target)) {
      throwError('\'target\' 必须是一个DOM元素.')
    }
    const props = this.props = mixins({}, defaults, options || {})
    props.isDisabedDate = isFunction(props.isDisabedDate) ? props.isDisabedDate : null
    const states = this.states = Object.create(null)
    const isInput = target.nodeName === 'INPUT'
    states.isInput = isInput
    states.$target = target
    states.locales = (Locales[props.lang] || Locales.en).datePicker
    if (MODES.indexOf(props.mode) === -1) {
      props.mode === 'date'
    }
    states.view = props.mode === 'week' ? 'date' : props.mode

    let value = props.value
    // get value from target
    if (isInput && !value) {
      value = target.value
    }
    setMinMaxDate.call(this)
    setValueState.call(this, value)
    states.bindValue = states.value
    render.call(this)
    if (states.isInput) {
      states.$target.value =  this.getValue(true)
    }
  }


  /**
   * 验证一个日期是否被禁用
   * @date 2018-11-28
   * @param {*} date
   * @returns
   * @memberof DatePicker
   */
  isDisabled(date) {
    const { props, states } = this
    // 如果组件禁用，则直接禁用
    if (props.disabled) {
      return true
    }
    date = toDate(date)
    const { min, max } = props
    if (!date || (!min && !max)) {
      return false
    }
    let disabled = false
    if (props.disabledDate) {
      // 只有返回true的情况下才认为禁用
      disabled = props.disabledDate(date) === true
    }
    if (disabled) {
      return true
    }
    
    if (states.view === 'year' || states.view === 'month') {
      let year = date.getFullYear()
      let {minYear, maxYear, minDate, maxDate} = {}
      if (min) {
        minYear = min.getFullYear()
        minDate = min.setDate(1)
      }
      if (max) {
        maxYear = max.getFullYear()
        maxDate = max.setDate(1)
      }
      let disableYear = (minYear && year < minYear) || (maxYear && maxYear < year)

      if (states.view === 'year' || disableYear) {
        return disableYear
      }

      let curDate = date.setDate(1)
      curDate = +curDate

      disabled = (minDate && curDate < +minDate) || (maxDate && +maxDate < curDate)
    } else {
      disabled = (min && +date < +min) || (max && +date > +max)
    }
    
    return disabled
  }


  /**
   * 设置当前value
   * @date 2018-11-28
   * @param {*} value
   * @param {*} updateBind 是否同时更新绑定值
   * @memberof DatePicker
   */
  setValue(value, updateBind) {
    const { states, props } = this
    if (value === null) {
      // todo
    } else {
      value = parseDate(value, props.format)
      if (!value || this.isDisabled(value)) {
        value = props.bindValue
      }
    }
    let oldValue = states.value
    setValueState.call(this, value)
    let formatValue = this.getValue(true)
    if (+value !== +oldValue) {
      this.emit('change', formatValue, states.value)
    }
    if ((!props.inline && !states.$confirm) || updateBind) {
      states.bindValue = states.value
      this.close()
      this.emit('done', formatValue, states.value)
      if (states.isInput) {
        states.$target.value = formatValue
        states.$target.focus()
      }
      return
    }

    // picker 模式在关闭时toggleView
    this.toggleView()
  }


  /**
   * 获取当前值
   * @date 2018-11-28
   * @param {*} format
   * @returns
   * @memberof DatePicker
   */
  getValue(format) {
    if (this.states.value) {
      return format ? formatDate(this.states.value, this.props.format) : this.states.value
    }
    return null
  }


  /**
   * 切换面板
   * @date 2018-11-28
   * @param {*} view
   * @memberof DatePicker
   */
  toggleView(view) {
    const { states, props } = this
    view = view || states.view
    if (MODES.indexOf(view) === -1) {
      view === 'date'
    }
    if (props.mode === 'year') {
      view = 'year'
    }
    if (props.mode === 'month' && view === 'date') {
      view = 'month'
    }
    states.view = view === 'week' ? 'date' : view
    states.$el.setAttribute('data-view', view)
    switch (view) {
      case 'year':
        renderYearPanel.call(this)
        break
      case 'month':
        renderMonthPanel.call(this)
        break
      case 'date':
        renderDatePanel.call(this)
        break
    }

    if (states.$confirm) {
      if (states.value) {
        states.$confirm.removeAttribute('disabled')
      } else {
        states.$confirm.setAttribute('disabled', '')
      }
    }

    if (states.$foot) {
      states.$foot.classList[props.mode === 'date' && states.view !== 'date' ? 'add' : 'remove'](CLASS_STATES_HIDE)
    }

  }


  /**
   * 上一/十年
   * @date 2018-11-28
   * @memberof DatePicker
   */
  prevYear() {
    const { states } = this
    let { year, view } = states
    const step = view === 'year' ? 10 : 1
    year -= step
    states.year = year
    this.toggleView()
  }


  /**
   * 下一/十年
   * @date 2018-11-28
   * @memberof DatePicker
   */
  nextYear() {
    const { states } = this
    let { year, view } = states
    const step = view === 'year' ? 10 : 1
    year += step
    states.year = year
    this.toggleView()
  }


  /**
   * 上一月
   * @date 2018-11-28
   * @memberof DatePicker
   */
  prevMonth() {
    const { states, props } = this
    let { year, month } = states
    if (month === 1) {
      let minYear = props.min.getFullYear()
      if (year <= minYear) {
        year = minYear + 1
      }
      year--
      month = 12
    } else {
      month--
    }

    states.year = year
    states.month = month
    this.toggleView()
  }


  /**
   * 下一月
   * @date 2018-11-28
   * @memberof DatePicker
   */
  nextMonth() {
    const { states, props } = this
    let { year, month } = states
    if (month === 12) {
      let maxYear = props.max.getFullYear()
      if (year >= maxYear) {
        year = maxYear - 1
      }
      year++
      month = 1
    } else {
      month++
    }

    states.year = year
    states.month = month
    this.toggleView()
  }


  /**
   * open picker
   * @date 2018-11-28
   * @memberof ColorPicker
   */
  open() {
    if (this.states.pickerInstance && !this.states.pickeOpened) {
      this.states.pickerInstance.open()
    }
  }


  /**
   * close picker
   * @date 2018-11-28
   * @memberof ColorPicker
   */
  close() {
    if (this.states.pickerInstance && this.states.pickeOpened) {
      this.states.pickerInstance.close()
    }
  }


  /**
   * disable the component
   * @date 2018-11-28
   * @memberof Select
   */
  disable() {
    const { props, states } = this
    props.disabled = true
    if (states.pickerInstance) {
      states.pickerInstance.close()
      states.pickerInstance.disable()
    }
  }


  /**
   * enable the component
   * @date 2018-11-28
   * @memberof Select
   */
  enable() {
    const { props, states } = this
    props.disabled = false
    if (states.pickerInstance) {
      states.pickerInstance && states.pickerInstance.enable()
    }
  }


  /**
   * destroy
   * @date 2018-11-28
   * @memberof DatePicker
   */
  destroy() {
    const { states, props } = this
    unbindEvents.call(this)
    if (props.inline) {
      removeNode(states.$el)
    } else {
      states.pickerInstance.destroy()
    }
    this.states = null
    this.props = null
    this._events = null
  }
}

export default DatePicker