/*
 * File: index.js 暂时不用了
 * Project: @vnnox/novaui
 * Description: Color Select
 * Created: 2018-11-23 10:11
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-23 05:50
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import Events from '../../utils/events'
import { isArray, isElement, throwError, mixins } from '../../utils/utils'
import template from '../../utils/template'
import { addClass, qsa, bind, unbind, removeNode, proxy } from '../../utils/dom'
import Locales from '../../locale'
import { Picker } from '../picker'
import { getPlacementByAlign } from '../picker/placements'
const colorjoe = require('./colorjoe.min')
import { skeletonTpl, lumpTpl } from './template'

// 16进制颜色规则
const REG_HEX = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

// rgb颜色规则
const REG_RGB = /^rgb?\((\d+\,)(\d+\,)(\d+)\)$/i

// ui name
const UI_NAME = 'nv-color-picker'

// default config
const defaults = {
  // [ string ] 多语言
  lang: 'zh-CN',
  // [ boolean ] 是否直接插入页面
  inline: false,
  // [ string ] 当前绑定值，有效的颜色值
  value: '',
  // [ array ] 快捷色块
  lumps: [
    'd81e06', 'f4ea2a', '1afa29', '1296db', '13227a', 'd4237a', 'ffffff', 'e6e6e6', 'dbdbdb', 'cdcdcd', 'bfbfbf', '8a8a8a', '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 'bd8cbb', 'be8dbd', 'e89abe', 'e8989a', 'e16632', 'e98f36', 'efb336', 'f6ef37', 'afcd51', '7cba59', '36ab60', '1baba8', '17ace3', '3f81c1', '4f68b0', '594d9c', '82529d', 'a4579d', 'db649b', 'dd6572', 'd81e06', 'e0620d', 'ea9518', 'f4ea2a', '8cbb1a', '2ba515', '0e932e', '0c9890', '1295db', '0061b2', '0061b0', '004198', '122179', '88147f', 'd3227b', 'd6204b'
  ],
  // [ boolean ] 显示清空按钮
  clearable: false,
  // [ boolean ] 显示输入框
  showInput: true,
  // [ string ] picker相对target的位置
  align: 'left',
  // [ string ] 自定义样式
  customClass: '',
  // [ boolean ] 禁用Picker
  disabled: false,
}

// selectors
const Selectors = {
  lumps: '.nv-color-picker__lumps',
  lumpItem: '.color-lump',
  panel: '.nv-color-picker__panel',
  input: '.nv-color-picker__value',
  colorLump: '.current-lump',
  clear: '.nv-color-picker__clear',
  confirm: '.nv-color-picker__confirm'
}


/**
 * render
 * @private
 * @date 2018-11-23
 */
function render() {
  const { props, states } = this
  const $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)
  let hasLumps = isArray(props.lumps) && props.lumps.length
  $el.innerHTML = template(skeletonTpl, {
    value: states.value || '',
    lumps: hasLumps,
    clear: props.clearable && states.locale.clear,
    showInput: props.showInput,
    confirm: !props.inline && states.locale.confirm
  })
  states.$lumps = qsa(Selectors.lumps, $el)[0]
  states.$panel = qsa(Selectors.panel, $el)[0]
  states.$input = qsa(Selectors.input, $el)[0]
  states.$colorLump = qsa(Selectors.colorLump, $el)[0]
  states.$clear = qsa(Selectors.clear, $el)[0]
  states.$confirm = qsa(Selectors.confirm, $el)[0]
  states.$el = $el
  if (props.inline) {
    states.$target.appendChild($el)
  } else {
    initPickerInstance.call(this)
  }
  initColorPanel.call(this)
  hasLumps && initColorLumps.call(this)
  bindEvents.call(this)
}


/**
 * init pikcer Instance
 * @private
 * @date 2018-11-23
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
      this.emit('open', states.pickerInstance)
    })
    .on('close', () => {
      states.pickeOpened = false
      states.joeIns.set(states.initValue)
      states.value = states.oldValue = states.initValue
      afterValueChange.call(this)
      this.emit('close', states.pickerInstance)
    })
}


/**
 * init color panel
 * @private
 * @date 2018-11-23
 */
function initColorPanel() {
  const { states } = this
  states.joeIns = colorjoe.rgb(qsa('.panel-main', states.$panel)[0], states.value || '')
  states.joeIns.on('change', color => {
    let value = color.hex()
    if (value !== states.value) {
      this.setValue(value)
    }
  })
}


/**
 * render color lumps
 * @private
 * @date 2018-11-23
 */
function initColorLumps() {
  const { props, states } = this
  if (props.lumps && isArray(props.lumps) && props.lumps.length) {
    let html = ''
    props.lumps.forEach(color => {
      color = color.charAt(0) === '#' ? color : ('#' + color)
      html += template(lumpTpl, {
        color
      })
    })
    states.$lumps.innerHTML = html
  }
}


/**
 * input value change
 * @private
 * @date 2018-11-23
 * @param {*} e
 */
function handleInputChange(e) {
  this.setValue(e.target.value)
}


/**
 * 面板上的输入框点击时阻止其事件传播
 * @param {*} e 
 */
function handleInputClick (e) {
  e.stopPropagation()
}


/**
 * clear value
 * @private
 * @date 2018-11-23
 */
function handleClear() {
  if (this.states.value) {
    this.clear()
  }
}


/**
 * confirm button click
 * @private
 * @date 2018-11-23
 */
function handleConfirm() {
  const { states } = this
  if (!states.pickerInstance) {
    return
  }
  let value = this.getValue()
  let oldValue = states.initValue
  states.initValue = value
  if (states.isInput) {
    states.$target.value = value
  }
  this.emit('done', value, oldValue)
  states.pickerInstance.close()
}



/**
 * 点击picker面板
 * @private
 * @param {*} e 
 */
function handlePickerClick (e) {
  this.emit('picker-click', e)
}


/**
 * bind dom events
 * @private
 * @date 2018-11-23
 */
function bindEvents() {
  const { states } = this
  const handles = states.handles = Object.create(null)
  const self = this
  handles.lumpClick = proxy(states.$el, Selectors.lumpItem, function (e) {
    self.emit('lump-click', this, e)
    self.setValue(this.getAttribute('data-value'))
  })
  handles.inputChange = handleInputChange.bind(this)
  handles.inputClick = handleInputClick.bind(this)
  handles.clear = handleClear.bind(this)
  handles.confirm = handleConfirm.bind(this)
  handles.pickerClick = handlePickerClick.bind(this)

  states.$lumps && bind(states.$el, 'click', handles.lumpClick)
  states.$input && bind(states.$input, 'change', handles.inputChange)
  states.$input && bind(states.$input, 'click', handles.inputClick)
  states.$clear && bind(states.$clear, 'click', handles.clear)
  states.$confirm && bind(states.$confirm, 'click', handles.confirm)
  bind(states.$el, 'click', handles.pickerClick)
}


/**
 * unbind dom events
 * @private
 * @date 2018-11-23
 */
function unbindEvents() {
  const { states } = this
  const handles = states.handles
  states.$lumps && unbind(states.$el, 'click', handles.lumpClick)
  states.$input && unbind(states.$input, 'change', handles.inputChange)
  states.$input && unbind(states.$input, 'click', handles.inputClick)
  states.$clear && unbind(states.$clear, 'click', handles.clear)
  states.$confirm && unbind(states.$confirm, 'click', handles.confirm)
  unbind(states.$el, 'click', handles.pickerClick)
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
 * 当值改变时切换一些DOM状态
 * @private
 * @date 2018-11-23
 */
function afterValueChange() {
  const { states } = this
  let value = states.value
  states.$colorLump && (states.$colorLump.style.backgroundColor = value || '#fff')
  states.$input && (states.$input.value = value || '')
  if (states.$clear) {
    if (value) {
      states.$clear.removeAttribute('disabled')
    } else {
      states.$clear.setAttribute('disabled', 'disabled')
    }
  }
}



/**
 * ColorPicker Component
 * @date 2018-11-23
 * @export
 * @class ColorPicker
 * @extends {Events}
 */
export class ColorPicker extends Events {


  /**
   * Creates an instance of ColorPicker.
   * @date 2018-11-23
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
    states.locale = (Locales[props.lang] || Locales['en']).colorPicker
    states.$target = target
    states.isInput = target.nodeName === 'INPUT'
    let targetValue = states.isInput ? target.value : ''
    let value = getEffectiveValue(props.value || targetValue)
    states.initValue = states.value = states.oldValue = value
    render.call(this)
    afterValueChange.call(this)
  }

  
  /**
   * 设置初始值
   * @date 2018-11-23
   * @param {*} value
   * @memberof ColorPicker
   */
  setInitValue (value) {
    this.states.initValue = value
    this.setValue(value)
  }

  /**
   * set value
   * @date 2018-11-23
   * @param {*} value
   * @memberof ColorPicker
   */
  setValue(value) {
    const { states } = this
    if (value) {
      value = getEffectiveValue(value)
      if (!value) {
        value = states.oldValue
      }
    }
    states.value = value
    afterValueChange.call(this)
    if (value !== states.oldValue) {
      this.emit('change', value, states.oldValue, states.initValue)
      states.oldValue = value
      if (value) {
        states.joeIns.set(value)
      }
    }
  }


  /**
   * clear value
   * @date 2018-11-23
   * @memberof ColorPicker
   */
  clear() {
    if (!this.states.value) {
      return
    }
    this.setValue('')
  }


  /**
   * get value
   * @date 2018-11-23
   * @returns
   * @memberof ColorPicker
   */
  getValue() {
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
   * enable the component
   * @date 2018-11-15
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
   * destroy instance
   * @date 2018-11-23
   * @memberof ColorPicker
   */
  destroy() {
    const { states } = this
    unbindEvents.call(this)
    states.joeIns && states.joeIns.removeAllListeners()
    states.pickerInstance && states.pickerInstance.destroy()
    removeNode(states.$el)
    this.states = null
    this.props = null
    this._events = null
  }
}


export default ColorPicker