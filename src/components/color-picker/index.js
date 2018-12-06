
/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 颜色选择器
 * Created: 2018-11-23 10:11
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-29 05:00
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import Events from '../../utils/events'
import { isElement, throwError, mixins,isArray } from '../../utils/utils'
import { getLocales } from '../../utils/locale'
import template from '../../utils/template'
import { addClass, qsa, proxy, bind, unbind, removeNode } from '../../utils/dom'
import Picker from '../picker'
import { getPlacementByAlign } from '../picker/placements'
import { CLASS_STATES_ACTIVED, CLASS_STATES_HIDE } from '../../utils/constant'
import { skeletonTpl, lumpTpl, moreBtnTpl } from './template'

// ui class name
const UI_NAME = 'nv-color-picker'

// 16进制颜色规则
const REG_HEX = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

// rgb颜色规则
const REG_RGB = /^rgb?\((\d+\,)(\d+\,)(\d+)\)$/i

// default confirg
const defaults = {
  // [ string ] 多语言
  lang: '',
  // [ string ] 绑定值
  value: '',
  // [ array ] 色块
  lumps: ['44a2f8', '6ae3cf', '81d452', 'f7e159', 'ed6e57', 'de6aa5', '595e91', '4aa59d', '54ad32', 'efbb40', 'db3b26', 'bb3b79', '1c4d7c', '347975', '306e1d', 'f19737', 'a72a17', '8d285c', '10345f', '245958', '1f4c14', 'c96527', '751b0e', '5c1945', 'ffffff', 'a9a9a9', '6c6c6c', '434343', '000000'],
  // [ array ] 最近使用的色块
  recentlyColors: [],
  // [ number ] 最近使用的颜色数组的最大长度
  maxRecentlyCount: 6,
  // [ boolean ] 显示调色器
  palette: true,
  // [ string ] 自定义样式
  customClass: '',
  // [ boolean ] 是否禁用
  disabled: false,
  align: 'left'
}

// selectors
const Selectors = {
  recommend: '.recommend-colors',
  recently: '.recently-colors',
  recentlyWrap: '.color-panel__recently',
  chooseInput: '.choose-color',
  colorLump: '.color-lump',
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
  $el.innerHTML = template(skeletonTpl, {
    recently: locales.recently
  })

  states.$recommend = qsa(Selectors.recommend, $el)[0]
  states.$recently = qsa(Selectors.recently, $el)[0]
  states.$recommend.innerHTML = renderLumps(props.lumps)
  if (props.palette) {
    states.$recommend.innerHTML += template(moreBtnTpl, {
      more: locales.more
    })
  }
  states.$el = $el
  states.$recentlyWrap = qsa(Selectors.recentlyWrap, $el)[0]
  states.$chooseInput = qsa(Selectors.chooseInput, $el)[0]
  states.$lumps = qsa(Selectors.colorLump, states.$recommend)
  initPickerInstance.call(this)
  bindEvents.call(this)
}


/**
 * 渲染色块
 * @param {*} lumps 
 */
function renderLumps(lumps) {
  let html = ''
  if (isArray(lumps) && lumps.length) {
    lumps.forEach(color => html += getLumpTpl(color))
  }
  return html
}


/**
 * 获取色块模板
 * @param {*} color 
 */
function getLumpTpl(color) {
  color = color.charAt(0) === '#' ? color : ('#' + color)
  return template(lumpTpl, {
    color
  })
}


/**
 * 设置色块的选中状态
 * @private
 */
function setLumpActived() {
  const { states, props } = this
  let value = (states.value || '').replace(/^#/, '')
  props.lumps.forEach((color, index) => {
    color = color.replace(/^#/, '')
    if (color === value) {
      states.$lumps[index].classList.add(CLASS_STATES_ACTIVED)
    } else {
      states.$lumps[index].classList.remove(CLASS_STATES_ACTIVED)
    }
  })
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
      setLumpActived.call(this)
      this.emit('open', states.pickerInstance)
    })
    .on('close', () => {
      states.pickeOpened = false
      this.emit('close', states.pickerInstance)
    })
}


/**
 * 调色器改变时
 * @param {*} e 
 */
function handleChooseInputChange(e) {
  let value = e.target.value
  this.emit('paletteChange', value, e)
  this.setValue(value)
}


/**
 * bind dom events
 * @private
 */
function bindEvents() {
  const { states } = this
  const handles = states.handles = Object.create(null)
  const self = this
  handles.colorLumpClick = proxy(states.$el, Selectors.colorLump, function () {
    let value = this.getAttribute('data-value')
    if (value) {
      self.setValue(value)
      self.close()
    }
  })
  handles.chooseInputChange = handleChooseInputChange.bind(this)
  bind(states.$el, 'click', handles.colorLumpClick)
  bind(states.$chooseInput, 'change', handles.chooseInputChange)
}


/**
 * unbind dom events
 * @private
 */
function unbindEvents () {
  const { states } = this
  const handles = states.handles
  unbind(states.$el, 'click', handles.colorLumpClick)
  unbind(states.$chooseInput, 'change', handles.chooseInputChange)
}


/**
 * rgb色转16进制
 * @date 2018-11-23
 * @method
 * @param {*} color
 * @returns
 */
function componentToHex(color) {
  let hex = color.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}


/**
 * 获取有效的颜色值
 * @method
 * @date 2018-11-23
 * @param {*} value
 * @returns
 */
export function getEffectiveValue(value) {
  if (!value || !value.trim()) {
    return ''
  }
  let hex = ''
  if (REG_HEX.test(value)) {
    value = value.replace(/#/, '').split('')
    if (value.length === 3) {
      for (let i = 0; i < 3; i += 1) {
        hex += (value[i] + value[i])
      }
    } else {
      hex = value.join('')
    }
    return '#' + hex
  } else {
    let value = (value || '').replace(/\s/g, '')
    if (value && REG_RGB.test(value)) {
      value = value.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
      value.forEach(val => hex += componentToHex(val))
      if (hex.length === 6) {
        return '#' + hex
      }
    }
  }
  return ''
}


/**
 * Color Picker Component
 * @date 2018-11-29
 * @export
 * @class ColorPicker
 * @extends {Events}
 */
export class ColorPicker extends Events {

  /**
   * Creates an instance of ColorPicker.
   * @date 2018-11-29
   * @param {*} target
   * @param {*} options
   * @memberof ColorPicker
   */
  constructor(target, options) {
    super()
    if (!(this instanceof ColorPicker)) {
      return new ColorPicker(target, options)
    }
    if (!isElement(target)) {
      throwError('\'target\' 必须是一个DOM容器', 'type')
    }

    const props = this.props = mixins({}, defaults, options || {})
    const states = this.states = Object.create(null)
    states.locales = getLocales(props.lang).colorPicker
    states.$target = target
    states.isInput = target.nodeName === 'INPUT'
    let targetValue = states.isInput ? target.value : ''
    let value = getEffectiveValue(props.value || targetValue)
    states.bindValue = states.value = value
    states.isInput && (states.$target.value = value)
    render.call(this)
    states.recentlyColors = []
    let recentlyColors = props.recentlyColors || []
    recentlyColors = recentlyColors.reverse()
    this.addRecentlyColor(recentlyColors)
    setLumpActived.call(this)
  }


  /**
   * 向最近使用面板中添加颜色
   * @date 2018-11-29
   * @param {*} colors
   * @memberof ColorPicker
   */
  addRecentlyColor(colors) {
    const { props, states } = this
    const { recentlyColors } = states
    if (!isArray(colors)) {
      colors = [colors]
    }
    if (isArray(colors)) {
      colors.forEach(color => {
        color = getEffectiveValue(color)
        let index = recentlyColors.indexOf(color)
        if (index > -1) {
          recentlyColors.splice(index, 1)
        }
        recentlyColors.unshift(color)
      })
    }
    if (recentlyColors.length > props.maxRecentlyCount) {
      recentlyColors.length = props.maxRecentlyCount
    }
    if (recentlyColors.length) {
      states.$recentlyWrap.classList.remove(CLASS_STATES_HIDE)
      states.$recently.innerHTML = renderLumps(recentlyColors)
    } else {
      states.$recentlyWrap.classList.add(CLASS_STATES_HIDE)
    }
  }


  /**
   * set value
   * @date 2018-11-29
   * @param {*} value
   * @memberof ColorPicker
   */
  setValue(value) {
    const { states } = this
    let oldValue = states.value
    if (value === null) {
      // todo
    } else {
      value = getEffectiveValue(value)
      if (!value) {
        value = states.value
      }
    }
    if (oldValue !== value) {
      this.emit('change', value, oldValue)
    }
    states.bindValue = states.value = value
    setLumpActived.call(this)
    states.isInput && (states.$target.value = value)
  }


  /**
   * get current value
   * @date 2018-11-29
   * @returns
   * @memberof ColorPicker
   */
  getValue () {
    return this.states.value
  }


  /**
   * open picker
   * @date 2018-11-23
   * @memberof ColorPicker
   */
  open() {
    if (this.states.pickerInstance && !this.states.pickeOpened) {
      this.states.pickerInstance.open()
    }
  }


  /**
   * close picker
   * @date 2018-11-23
   * @memberof ColorPicker
   */
  close() {
    if (this.states.pickerInstance && this.states.pickeOpened) {
      this.states.pickerInstance.close()
    }
  }


  /**
   * disable the component
   * @date 2018-11-15
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
   * destroy
   * @date 2018-11-29
   * @memberof ColorPicker
   */
  destroy () {
    const { states } = this
    unbindEvents.call(this)
    this.states.pickerInstance.destroy()
    removeNode(states.$el)
    this.states = null
    this.props = null
    this._events = null
  }
}

export default ColorPicker