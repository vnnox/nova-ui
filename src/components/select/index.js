/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Select Picker
 * Created: 2018-11-13 02:32
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-15 09:07
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { Events } from '../../utils/events'
import { mixins, isElement, isArray, isPlainObject, isFunction, isString, isPrimitive, escapeRegExp, throwError, encodeHtml } from '../../utils/utils'
import { template } from '../../utils/template'
import { insertAfter, qsa, proxy, bind, unbind, addClass, scrollTo, getOffsetByParent, removeNode } from '../../utils/dom'
import { debounce } from '../../utils/debounce'
import { CLASS_STATES_ACTIVED, CLASS_STATUS_DISABLED, CLASS_STATES_HOVER, CLASS_STATES_FOCUS } from '../../utils/constant'
import { Picker } from '../picker'
import { getPlacementByAlign } from '../picker/placements'
import { skeletonTpl, optionGroupsTpl, optionsTpl, pickerSkeletonTpl } from './template'


// ui className
const UI_NAME = 'nv-select'
const UI_PICKER_NAME = 'nv-select-picker'

// 输入框可选尺寸
const INPUT_SIZE = ['small', 'large']

// 分组的属性名称
const ATTRIBUTE_GROUP = 'data-group'
// 索引的属性名称
const ATTRIBUTE_INDEX = 'data-index'

// selectors
const Selectors = {
  input: '.nv-select__value',
  clean: '.nv-select__clean',
  search: '.select-picker__search',
  optionsWrap: '.select-options__wrap',
  option: '.nv-select__option',
  openClass: 'nv-select--open'
}

// default config
const defaults = {
  // [ string | number | boolean | array ] 初始值
  value: null,
  // [ string ] 显示在输入框中的取值key 
  valueKey: 'label', // option.label
  // [ boolean ] 多选
  multiple: false,
  // [ string ] 多选时，选中值在输入框中的展现模板
  multipleValueTpl: '{label}等{count}项',
  // [ array ] 选项
  options: [],
  // [ string ] 输入框占位符
  placeholder: '请选择',
  // [ boolean ] 分组
  groupable: false,
  // [ boolean ] 是否禁用
  disabled: false,
  // [ boolean ] 是否可以清除
  clearable: false,
  // [ boolean ] 是否可搜索
  searchable: false,
  // [ function ] 过滤器
  filter: null,
  // [ boolean ] 异步获取数据
  loadByAsync: false,
  // [ boolean ] 异步搜索数据
  searchByAsync: false,
  // [ string ] select name属性,
  name: null,
  // [ string ] // 输入框尺寸 [ 可选值 ] [ small | default | large ]
  inputSize: 'default',
  // [ string ] select自定义样式
  selectClass: null,
  // [ string ] picker自定义样式
  pickerClass: null,
  // [ string ] 加载中文案
  loadingText: '加载中...',
  // [ string ] 无选项文案
  noDataText: '无数据',
  // [ string ] 无匹配数据
  noMatchDataText: '无匹配数据',
  // [ function ] option渲染器
  render: null,
  // [ string ] 与target的对齐方式
  align: 'left',
}


/**
 * 渲染select
 * @private
 */
function render() {
  const { states, props } = this
  const { $target, isInput } = states
  const $select = document.createElement('div')
  $select.className = UI_NAME
  addClass($select, props.selectClass)
  if (props.disabled) {
    $select.classList.add(CLASS_STATUS_DISABLED)
  }
  if (props.multiple) {
    addClass($select, 'nv-select--multiple')
  }

  // 输入框尺寸样式
  const inputSizeClassName = props.inputSize !== 'default' && INPUT_SIZE.indexOf(props.inputSize) > -1 ? `nv-input--${props.inputSize}` : ''

  $select.innerHTML = template(skeletonTpl, {
    disabled: props.disabled,
    clearable: props.clearable,
    placeholder: props.placeholder,
    name: props.name,
    inputSizeClassName
  })

  $select.setAttribute('role', 'combobox')

  // 插入元素
  isInput ? insertAfter($target, $select) : $target.appendChild($select)

  states.$select = $select
  states.$input = qsa(Selectors.input, $select)[0]
  states.$clean = qsa(Selectors.clean, $select)[0]
  const $selectPicker = document.createElement('div')
  $selectPicker.className = UI_PICKER_NAME
  addClass($selectPicker, props.pickerClass)

  props.multiple && addClass($selectPicker, 'select-picker--multiple')

  $selectPicker.innerHTML = template(pickerSkeletonTpl, {
    searchable: props.searchable,
    placeholder: props.searchPlaceholder || ''
  })

  states.$selectPicker = $selectPicker
  states.$optionsWrap = qsa(Selectors.optionsWrap, $selectPicker)[0]

  // 实例化picker
  initPicker.call(this)
  // 绑定dom事件
  bindEvents.call(this)
}


/**
 * 初始化picker组件
 * @private
 */
function initPicker() {
  const { states, props } = this
  const { $select, $selectPicker } = states
  // 实例化picker
  states.pickerInstance = new Picker($select, {
    content: $selectPicker,
    placement: getPlacementByAlign(props.align),
    trigger: 'click',
    disabled: props.disabled,
    showArrow: false,
    margin: 2
  })

  // picker open
  states.pickerInstance.on('open', () => {
    // 设置picker的最小宽度为input的宽度
    $selectPicker.style.minWidth = states.$input.offsetWidth + 'px'
    // 如果是可搜索，则在picker打开时设置输入框可输入
    states.pickerOpened = true
    if (props.searchable) {
      states.$input.removeAttribute('readonly')
      states.$input.value = ''
      // 将placeholder设置为当前value
      states.label && states.$input.setAttribute('placeholder', states.label)
    }
    let index = -1
    states.$options && states.$options.forEach(($option, idx) => {
      if (index === -1 && $option.classList.contains(CLASS_STATES_ACTIVED)) {
        $option.classList.add(CLASS_STATES_HOVER)
        index = idx
      } else {
        $option.classList.remove(CLASS_STATES_HOVER)
      }
    })
    states.keydownIndex = index
    this.emit('open')
    $select.classList.add(Selectors.openClass)
  })

  // picker close
  states.pickerInstance.on('close', () => {
    // 回复input的属性和value
    states.pickerOpened = false
    states.keydownIndex = -1
    states.$input.setAttribute('readonly', true)
    states.$input.value = states.label
    states.$input.setAttribute('placeholder', props.placeholder || '')
    $select.classList.remove(Selectors.openClass)
    scrollTo(states.$optionsWrap, 0, 0)
    // 清空搜索
    if (states.keyword) {
      states.keyword = ''
      renderOptions.call(this)
    }
    this.emit('close')
  })

  // picker click
  states.pickerInstance.on('click', () => states.$input.focus())
}


/**
 * 渲染options list
 * @param {*} items
 * @private 
 */
function renderOptions(items) {
  const { props, states } = this
  const { options, $optionsWrap } = states
  items = items || options
  states.$options = null
  if (items.length) {
    $optionsWrap.innerHTML = template(props.groupable ? optionGroupsTpl : optionsTpl, {
      options: items,
      disabled: props.disabled,
      render(option, index, groupId) {
        let html
        if (isFunction(props.render)) {
          html = props.render(option, index, groupId)
        } else {
          html = option.label
        }
        return isString(html) ? html : index
      }
    })
    states.$options = qsa(Selectors.option, $optionsWrap)
    toggleOptionsActived.call(this, items)
  } else {
    $optionsWrap.innerHTML = `<div class="nv-select__empty">${states.keyword ? props.noMatchDataText : props.noDataText}</div>`
  }
  states.pickerInstance && states.pickerInstance.updatePlacement()
}


/**
 * 显示加载中
 * @private
 */
function renderLoading() {
  const { props, states } = this
  const { $optionsWrap } = states
  states.$options = null
  $optionsWrap.innerHTML = `<div class="nv-select__loading">${props.loadingText}</div>`
  states.pickerInstance && states.pickerInstance.updatePlacement()
}


/**
 * 设置指定option元素选中
 * @param {array} options 选项列表
 * @private
 */
function toggleOptionsActived(options) {
  const { states, props } = this
  const { value, $options } = states
  if (!$options || (value === void 0 || value === null) || !options.length) {
    return
  }
  let thisValue = isArray(value) ? value : [value]
  $options.forEach(($el, idx) => {
    let group = +$el.getAttribute(ATTRIBUTE_GROUP)
    let index = +$el.getAttribute(ATTRIBUTE_INDEX)
    let currentValue
    if (props.groupable) {
      currentValue = options[group].options[index].value
    } else {
      currentValue = options[index].value
    }
    if (thisValue.indexOf(currentValue) > -1) {
      $el.classList.add(CLASS_STATES_ACTIVED)
      if (states.keydownIndex === -1) {
        states.keydownIndex = idx
      }
    } else {
      $el.classList.remove(CLASS_STATES_ACTIVED)
    }
  })
}


/**
 * select获得焦点
 * @private
 * @param {*} event 
 */
function handleSelectFocus(event) {
  const { states, props } = this
  if (props.disabled) {
    return
  }
  states.focusTimer && clearTimeout(states.focusTimer)
  // 如果之前已经获取焦点，为防止重复触发事件
  if (!states.focusin) {
    this.emit('focus', event)
  }
  states.focusin = true
  states.$input.classList.add(CLASS_STATES_FOCUS)
}


/**
 * select 失去焦点
 * @private
 * @param {*} event 
 */
function handleSelectBlur(event) {
  const { states, props } = this
  if (props.disabled) {
    return
  }
  states.focusTimer && clearTimeout(states.focusTimer)
  // 在picker上面点击使select获取焦点，实际上是先失去焦点，再获取的。
  // 这里定时器保持其状态不变
  states.focusTimer = setTimeout(() => {
    states.focusin = false
    states.$input.classList.remove(CLASS_STATES_FOCUS)
    states.focusTimer = null
    this.emit('blur', event)
  }, 200)
}


/**
 * 清空按钮点击
 * @private
 * @param {*} event
 */
function handleCleanClick(event) {
  const { states, props } = this
  if (props.clearable && states.$select.classList.contains('show-clean')) {
    event.stopPropagation()
    states.pickerInstance.close()
    this.clean()
  }
}


/**
 * 键盘事件
 * @private
 * @param {*} event 
 */
function handleInputKeydown(event) {
  if (!this.states.pickerOpened) {
    return
  }

  let code = event.keyCode
  if (code === 13 || code === 27 || code === 38 || code === 40) {
    event.preventDefault()
    switch (code) {
      case 38:
        toggleOptionSelectedByKeydown.call(this, 'prev')
        break
      case 40:
        toggleOptionSelectedByKeydown.call(this, 'next')
        break
      case 27:
        this.states.pickerInstance.close()
        break
      case 13:
        toggleSelectedOptionByEnter.call(this)
        break
    }
  }
}


/**
 *
 * 通过上下键来获取当前切换到的选项的索引
 * @private
 * @param {*} index
 * @param {*} type
 * @param {*} $options
 * @returns
 */
function getIndex(index, type, $options) {
  let len = $options.length - 1
  if (type === 'prev') {
    index--
  } else {
    index++
  }
  if (index < 0) {
    index = len
  }
  if (index > len) {
    index = 0
  }
  if ($options[index].classList.contains(CLASS_STATUS_DISABLED)) {
    return getIndex(type === 'prev' ? --index : ++index, type, $options)
  }
  return index
}


/**
 * 通过键盘来切换选项
 * @private
 * @param {*} type 
 */
function toggleOptionSelectedByKeydown(type) {
  const { states } = this
  const { $options } = states
  let index = states.keydownIndex
  index = getIndex(index, type, $options)
  states.keydownIndex = index
  $options.forEach(($option, idx) => {
    if (idx === index) {
      $option.classList.add(CLASS_STATES_HOVER)
    } else {
      $option.classList.remove(CLASS_STATES_HOVER)
    }
  })
  let offset = getOffsetByParent($options[index], states.$optionsWrap)
  scrollTo(states.$optionsWrap, offset.top, 0)
}


/**
 * 通过enter键来切换选项的选中状态
 * @private
 */
function toggleSelectedOptionByEnter() {
  const { states, props } = this
  const { $options } = states
  let { value } = states
  let $option = $options[states.keydownIndex]
  let group = $option.getAttribute(ATTRIBUTE_GROUP)
  let index = $option.getAttribute(ATTRIBUTE_INDEX)
  let option
  if (props.groupable) {
    option = states.options[group].options[index]
  } else {
    option = states.options[index]
  }
  if (!option || option.disabled) {
    return
  }
  if (!props.multiple) {
    this.setValue(option.value, true)
    states.pickerInstance.close()
  } else {
    let findIndex = value.indexOf(option.value)
    if (findIndex > -1) {
      value.splice(findIndex, 1)
    } else {
      value.push(option.value)
    }
    this.setValue(value, true)
  }
}


/**
 * bind events
 * @private
 */
function bindEvents() {
  const { props, states } = this
  const handles = states.handles
  const self = this

  /**
   * 代理事件
   * 选项点击事件
   */
  handles.optionClick = proxy(states.$optionsWrap, Selectors.option, function () {
    const options = states.options
    let currentValue = states.value || []
    currentValue = isArray(currentValue) ? currentValue : [currentValue]

    let groupIndex = this.getAttribute(ATTRIBUTE_GROUP)
    let index = this.getAttribute(ATTRIBUTE_INDEX)
    let option
    if (props.groupable) {
      option = options[groupIndex] && options[groupIndex].options && options[groupIndex].options[index]
    } else {
      option = options[index]
    }
    let selectedIndex = currentValue.indexOf(option.value)
    if (option && !option.disabled) {
      // 如果是多选
      // 如果已经选中，则需要取消选择
      if (props.multiple) {
        selectedIndex > -1 ?
          currentValue.splice(selectedIndex, 1) :
          currentValue.push(option.value)
      } else {
        // 单选的话就直接使用当前值
        currentValue = option.value
        states.pickerInstance.close()
      }
      self.setValue(currentValue, true)
    }
  })

  // select focus and blur
  handles.selectFocus = handleSelectFocus.bind(this)
  handles.selectBlur = handleSelectBlur.bind(this)
  handles.selectClick = function () {
    if (!props.disabled) {
      states.$input.focus()
    }
  }
  // clean btn click
  handles.cleanClick = handleCleanClick.bind(this)

  // input keyup
  handles.searchOption = debounce(function () {
    if (!props.searchable) {
      return
    }
    let value = states.$input.value
    value = value && value.trim()
    states.keyword = value
    searchOptions.call(self)
  }, props.searchByAsync ? 300 : 100)

  handles.inputKeydown = handleInputKeydown.bind(this)

  bind(states.$optionsWrap, 'click', handles.optionClick)
  bind(states.$input, 'focusin', handles.selectFocus)
  bind(states.$input, 'focusout', handles.selectBlur)
  bind(states.$select, 'click', handles.selectClick)
  states.$clean && bind(states.$clean, 'click', handles.cleanClick)
  bind(states.$input, 'keyup', handles.searchOption)
  bind(states.$input, 'keydown', handles.inputKeydown)
}


/**
 * 解绑事件
 * @private
 */
function unbindEvents() {
  const { states } = this
  const { handles } = states
  states.$optionsWrap && unbind(states.$optionsWrap, 'click', handles.optionClick)
  unbind(states.$input, 'focusin', handles.selectFocus)
  unbind(states.$input, 'focusout', handles.selectBlur)
  unbind(states.$select, 'click', handles.selectClick)
  states.$clean && unbind(states.$clean, 'click', handles.cleanClick)
  unbind(states.$input, 'keyup', handles.searchOption)
  unbind(states.$input, 'keydown', handles.inputKeydown)
}


/**
 * 搜索选项
 * @private
 */
function searchOptions() {
  const { states, props } = this
  // 显示loading
  renderLoading.call(this)
  this.emit('search', states.keyword, states.options)
  // 如果是远程搜索，直接结束，等待请求后调用setOptions
  // 远程搜索的话需要重置options
  if (props.searchByAsync) {
    states.options.length = 0
    states.$option = null
    return
  }
  // 本地搜索
  renderOptions.call(this, filterOptions.call(this))
}


/**
 * 过滤选项
 * @private
 */
function filterOptions() {
  const { states, props } = this
  const { options } = states
  if (!options || !options.length) {
    return []
  }
  let keyword = states.keyword
  if (keyword) {
    // 如果自定义了过滤器
    if (props.filter && isFunction(props.filter)) {
      let items = props.filter(keyword, options)
      return isArray(items) ? items : options
    }
    // 否则匹配关键字
    let items = []
    let reg = new RegExp(escapeRegExp(keyword), 'i')
    options.map(item => {
      if (props.groupable) {
        let child = item.options.filter(option => {
          return reg.test(option.label || option.value) || reg.test(option.value)
        })
        if (child.length) {
          items.push({
            label: item.label,
            options: child
          })
        }
      } else {
        if (reg.test(item.label || item.value) || reg.test(item.value)) {
          items.push(item)
        }
      }
    })
    return items
  } else {
    return options
  }
}


/**
 * 通过value查找option
 * @private
 * @param {*} value 
 * @returns {object | void 0}
 */
function findOptionByValue(value) {
  let { props, states } = this
  let { options } = states
  let size = options.length
  let option
  if (props.groupable) {
    let g = -1
    while (++g < size) {
      let group = options[g].options
      for (let i = 0, len = group.length; i < len; i++) {
        if (!group[i].disabled && group[i].value === value) {
          option = group[i]
          break
        }
      }
    }
  } else {
    let i = -1
    while (++i < size) {
      if (!options[i].disabled && options[i].value === value) {
        option = options[i]
        break
      }
    }
  }
  return option
}



/**
 * Select Component
 * @date 2018-11-15
 * @export
 * @class Select
 * @extends {Events}
 */
export class Select extends Events {


  /**
   * Creates an instance of Select.
   * @date 2018-11-15
   * @param {*} target
   * @param {*} options
   * @memberof Select
   */
  constructor(target, options) {
    super()
    if (!(this instanceof Select)) {
      return new Select(target, options)
    }
    if (!isElement(target)) {
      throwError('\'target\' 必须是一个DOM容器', 'type')
    }
    let isInput = target.nodeName === 'INPUT'
    if (isInput) {
      target.setAttribute('hidden', true)
    }
    this.props = mixins({}, defaults, options)
    this.states = Object.create(null)
    this.states.$target = target
    this.states.isInput = isInput
    // 选项列表
    this.states.options = []
    // 当前值
    this.states.value = null
    // 当前输入框中的值
    this.states.label = ''
    this.states.keyword = ''
    this.states.focusin = false
    this.states.handles = Object.create(null)
    this.states.pickerOpened = false
    // 通过keydown选中的元素索引
    this.states.keydownIndex = -1

    ;['label', 'value'].indexOf(this.props.valueKey) === -1 && (this.props.valueKey = 'label')

    render.call(this)

    if (!this.props.loadByAsync) {
      this.setOptions(this.props.options)
    } else {
      // 显示加载中，直到options加载完成，调用setOptions方法
      renderLoading.call(this)
    }
    this.setValue(this.props.value, false)
  }


  /**
   * set options
   * @date 2018-11-15
   * @param {*} options
   * @memberof Select
   */
  setOptions(options) {
    let items = []
    const { props, states } = this
    if (options && isArray(options) && options.length) {
      options.forEach(option => {
        if (isPlainObject(option)) {
          // 如果是分组
          let item = Object.create(null)
          if (props.groupable) {
            item.label = encodeHtml(option.label)
            item.options = []
            if (option.options && isArray(option.options)) {
              option.options.forEach(child => {
                if (child.value !== void 0) {
                  item.options.push({
                    label: encodeHtml(child.label || child.value),
                    value: child.value,
                    disabled: child.disabled
                  })
                }
              })
            }
          } else {
            if (option.value !== void 0) {
              item = {
                label: encodeHtml(option.label || option.value),
                value: option.value,
                disabled: option.disabled
              }
            }
          }
          items.push(item)
        }
      })
    }
    states.options = items
    renderOptions.call(this)

    // 防止options是异步加载来的
    this.setValue(this.states.value || this.props.value, false)
  }


  /**
   * set value
   * @date 2018-11-15
   * @param {*} value
   * @param {*} isChange
   * @memberof Select
   */
  setValue(value, isChange) {
    const { props, states } = this
    if (props.disabled) {
      return
    }

    let _value = []
    let selectedOptions = []

    if (value !== void 0 && value !== null) {
      if (isPrimitive(value)) {
        _value.push(value)
      } else if (isArray(value)) {
        _value = _value.concat(value)
      }
    }

    _value.forEach(item => {
      let option = findOptionByValue.call(this, item)
      if (option) {
        selectedOptions.push(option)
      }
    })

    let label
    let thisValue
    let selectedLen = selectedOptions.length
    if (selectedLen) {
      if (!props.multiple) {
        selectedOptions = selectedOptions[0]
        label = selectedOptions[props.valueKey]
        thisValue = selectedOptions.value
      } else {
        thisValue = []
        if (selectedLen === 1) {
          label = selectedOptions[0][props.valueKey]
        } else {
          // 多选的时候显示为 XXX等n项
          label = props.multipleValueTpl
            .replace(/{label}/, selectedOptions[0][props.valueKey])
            .replace(/{count}/, selectedOptions.length)
        }
        selectedOptions.forEach(option => thisValue.push(option.value))
      }
    } else {
      thisValue = props.multiple ? [] : null
    }

    this.states.value = thisValue || null
    // 切换选中值样式
    toggleOptionsActived.call(this, states.options)
    // 设置输入框的显示值
    states.label = label || ''
    states.$input.value = states.label
    // display cleanbtn
    let hasValue = props.multiple ? thisValue.length : thisValue
    if (hasValue && props.clearable) {
      states.$select.classList.add('show-clean')
    } else {
      states.$select.classList.remove('show-clean')
    }
    if (isChange) {
      this.emit('change', thisValue, selectedOptions)
    }
  }


  /**
   * get value
   * @date 2018-11-15
   * @returns
   * @memberof Select
   */
  getValue() {
    return this.states.value
  }


  /**
   * clean value
   * @date 2018-11-15
   * @memberof Select
   */
  clean() {
    if (this.props.disabled) {
      return
    }
    this.setValue(null, true)
  }


  /**
   * disable the component
   * @date 2018-11-15
   * @memberof Select
   */
  disable() {
    const { props, states } = this
    const { $select, $input } = states
    addClass($select, CLASS_STATUS_DISABLED)
    $input.setAttribute('disabled', true)
    props.disabled = true
    if (states.pickerInstance) {
      states.pickerInstance.close()
      states.pickerInstance.disable()
    }
  }


  /**
   * enable the component
   * @date 2018-11-15
   * @memberof Select
   */
  enable() {
    const { props, states } = this
    const { $select, $input } = states
    $select.classList.remove(CLASS_STATUS_DISABLED)
    $input.removeAttribute('disabled')
    props.disabled = false
    renderOptions.call(this, states.options)
    states.pickerInstance && states.pickerInstance.enable()
  }


  /**
   * destroy
   * @date 2018-11-15
   * @memberof Select
   */
  destroy() {
    const { states } = this
    const { $target } = states
    states.focusTimer && clearTimeout(states.focusTimer)
    states.pickerInstance && states.pickerInstance.destroy()
    unbindEvents.call(this)
    $target && $target.removeAttribute('hidden')
    removeNode(states.$select)
    this.states = null
    this.$target = null
    this._events = null
  }
}

export default Select