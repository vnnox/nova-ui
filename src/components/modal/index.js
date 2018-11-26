/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 页面对话框
 * Created: 2018-11-19 10:32
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-19 10:32
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { Events } from '../../utils/events'
import { mixins, isElement, isArray, isPlainObject, isFunction, uuid, throwError } from '../../utils/utils'
import { template } from '../../utils/template'
import { addClass, qsa, bind, unbind, removeNode } from '../../utils/dom'
import { Popup } from '../../utils/popup'
import { skeletonTpl } from './template'

// ui className
const UI_NAME = 'nv-modal'

// 是否是纯数字
const NUMBER_REG = /^\d+$/

// selectors
const Selectors = {
  dialog: '.nv-modal-dialog',
  title: '.nv-modal__title',
  closeBtn: '.nv-modal__close',
  body: '.nv-modal__body',
  footSlot: '.nv-modal__foot_slot',
  btns: '.nv-modal__foot_btns'
}

// default config
const defaults = {
  // [boolean] 默认是否打开
  visible: false,
  // [string | boolean] 标题
  title: '',
  // [string | htmlelement] 内容
  content: '',
  // [boolean] 显示关闭按钮
  closeBtn: true,
  // [HTMLElement] 插入到的父级元素
  appendTo: document.body,
  // [boolean] 显示遮罩层
  backdrop: true,
  // [string] 遮罩层背景色
  backdropBackground: 'rgba(0,0,0,.5)',
  // [boolean] 点击遮罩层关闭
  backdropClose: true,
  // [boolean] 按esc键关闭
  escClose: true,
  // [ number| string | null ] 模态框宽度
  width: null,
  // [ number | string ] 距离顶部高度
  top: '10%',
  // [ string | null] 自定义样式
  customClass: null,
  /**
   * [array | null | boolean]
   * button: {
   *   text: [string] 按钮文本
   *   css: [string] 按钮样式
   *   hanlde: [function] 按钮事件
   * }
   */
  btns: null,
  // [string | HTMLElement] btns同级插槽
  footSlot: null,
  // [boolean] 是否锁屏
  scrollLock: true
}

/**
 *
 * 生成底部按钮
 * @private
 * @param {*} btn
 * @returns
 */
function createBtn(btn) {
  const $el = document.createElement('button')
  $el.type = 'button'
  $el.textContent = btn.text
  let handle = btn.handle
  if (!isFunction(handle)) {
    handle = this.close
  }
  $el.__handle = handle.bind(this)
  $el.className = 'nv-btn nv-dialog__btn'
  addClass($el, btn.css)
  return $el
}


/**
 * render
 * @private
 */
function render() {
  const { props, states } = this
  const $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)
  
  let $btns = null

  // fixed 底部按钮参数
  const btns = []
  if (props.btns) {
    if (isArray(props.btns)) {
      props.btns.forEach(btn => {
        if (isPlainObject(btn)) {
          btn.handle = isFunction(btn.handle) ? btn.handle : null
          btn.text = btn.text && btn.text.toString() || ''
          btn.css = btn.css && btn.css.toString() || ''
          btns.push(btn)
        }
      })
    } 
    // 直接当做插槽传入，为了兼容VUE
    else if (isElement(props.btns)) {
      $btns = props.btns
    }
  }

  $el.innerHTML = template(skeletonTpl, {
    title: (props.title || '').toString(),
    closeBtn: !!props.closeBtn,
    footSlot: !!props.footSlot,
    btns: $btns || (btns && btns.length)
  })

  $el.style.display = 'none'

  props.appendTo.appendChild($el)
  $el.setAttribute('role', 'dialog')
  states.$el = $el
  states.$dialog = qsa(Selectors.dialog, $el)[0]
  states.$title = qsa(Selectors.title, $el)[0]
  states.$closeBtn = qsa(Selectors.closeBtn, $el)[0]
  states.$body = qsa(Selectors.body, $el)[0]
  states.$footSlot = qsa(Selectors.footSlot, $el)[0]
  states.$btnsWrap = qsa(Selectors.btns, $el)[0]
  
  if (props.top) {
    let top
    if (NUMBER_REG.test(props.top)) {
      top = props.top + 'px'
    } else if (!isNaN(parseFloat(props.top))) {
      top = props.top 
    }
    top && (states.$dialog.style.top = top)
  }

  if (props.width) {
    let width
    if (NUMBER_REG.test(props.width)) {
      width = props.width + 'px'
    } else if (!isNaN(parseFloat(props.width))) {
      width = props.width 
    }
    width && (states.$dialog.style.width = width)
  }

  // render content
  if (props.content) {
    isElement(props.content) ? states.$body.appendChild(props.content) :
      states.$body.innerHTML = props.content.toString()
  }
  // render footSlot
  if (props.footSlot && states.$footSlot) {
    isElement(props.footSlot) ? states.$footSlot.appendChild(props.footSlot) : states.$footSlot.innerHTML = props.footSlot.toString()
  }
  // render btns
  if (states.$btnsWrap) {
    if (btns && btns.length) {
      states.$btns = []
      btns.forEach(btn => {
        const $btn = createBtn.call(this, btn)
        states.$btnsWrap.appendChild($btn)
        states.$btns.push($btn)
      })
    } else if ($btns) {
      states.isNativeBtn = true
      states.$btnsWrap.appendChild($btns)
    }
  }

  bindEvents.call(this)

  if (props.visible) {
    this.open()
  }
}


/**
 * 绑定DOM事件
 * @private
 */
function bindEvents() {
  const { props, states } = this
  const { handles } = states
  const self = this

  // closeBtn 或者没有事件的按钮点击
  handles.closeBtnClick = this.close.bind(this, 'closeBtn')

  // wrap click
  handles.wrapClick = function (event) {
    const target = event.target
    if (target === states.$dialog || states.$dialog.contains(target)) {
      return
    }
    self.close('backdrop')
  }

  // close btn
  states.$closeBtn && bind(states.$closeBtn, 'click', handles.closeBtnClick)

  // foot btns
  if (!states.isNativeBtn) {
    states.$btns && states.$btns.forEach($btn => {
      let handle = $btn.__handle || handles.closeBtnClick
      bind($btn, 'click', handle)
    })
  }

  // wrapClick
  props.backdrop && props.backdropClose && bind(states.$el, 'click', handles.wrapClick)
}


/**
 * 解除DOM事件绑定
 * @private
 */
function unbindEvents() {
  const { props, states } = this
  const { handles } = states

  // close btn
  states.$closeBtn && unbind(states.$closeBtn, 'click', handles.closeBtnClick)

  // foot btns
  states.$btns && states.$btns.forEach($btn => {
    let handle = $btn.__handle || handles.closeBtnClick
    unbind($btn, 'click', handle)
  })

  // wrapClick
  props.backdrop && props.backdropClose && unbind(states.$el, 'click', handles.wrapClick)
}


/**
 *
 * 模态框组件
 * @export
 * @class Modal
 * @extends {Events}
 */
export class Modal extends Events {


  /**
   * Creates an instance of Modal.
   * @param {*} options
   * @memberof Modal
   */
  constructor(options) {
    super()
    if (!(this instanceof Modal)) {
      return new Modal(options)
    }
    this.props = mixins({}, defaults, options || {})
    if (!isElement(this.props.appendTo)) {
      throwError('\'appendTo\' 必须是一个DOM容器')
    }
    this.states = Object.create(null)
    this.states.handles = Object.create(null)
    this.states.id = UI_NAME + '_' + uuid()
    render.call(this)
  }


  /**
   * open
   * @public
   * @memberof Modal
   */
  open() {
    const { states, props } = this
    const { visible, $el } = states
    if (visible) {
      return
    }
    const self = this
    Popup.open({
      id: states.id,
      backdrop: props.backdrop,
      backdropBackground: props.backdropBackground,
      scrollLock: props.scrollLock,
      zIndex: Popup.nextZIndex(),
      escClose: props.escClose,
      closeHandle(type) {
        self.close(type)
      }
    })
    $el.classList.add('nv-animated--fade-in')
    $el.style.display = 'block'
    $el.style.zIndex = Popup.nextZIndex()
    $el.setAttribute('tabindex', 1)
    states.visible = true
    this.emit('open', $el)
  }


  /**
   * close
   * @public
   * @param {*} type
   * @memberof Modal
   */
  close(type) {
    const { states } = this
    if (!states || !states.visible) {
      return
    }
    Popup.close(states.id)
    states.$el.style.display = 'none'
    states.$el.setAttribute('tabindex', -1)
    states.$el.classList.remove('nv-animated--fade-in')
    if (type !== 'destroy') {
      this.emit('close', type, states.$el)
    }
    states.visible = false
  }


  /**
   * destroy
   * @public
   * @memberof Modal
   */
  destroy() {
    const { states } = this
    this.close('destroy')
    unbindEvents.call(this)
    removeNode(states.$el)
    this.states = null
    this.props = null
    this._events = null
  }
}

export default Modal