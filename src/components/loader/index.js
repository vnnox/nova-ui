/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 页面初始化，加载数据时显示动效
 * Created: 2018-11-26 02:03
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-26 02:10
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { isElement, throwError, mixins, uuid } from '../../utils/utils'
import { template } from '../../utils/template'
import { addClass, getStyle, removeNode } from '../../utils/dom'
import { skeletonTpl } from './template'
import Popup from '../../utils/popup'

// ui class name
const UI_NAME = 'nv-loader'

// 收集已创建的loader实例
const instances = []

// default config
const defaults = {
  // [string] 遮罩背景色
  background: 'rgba(255,255,255,.8)',
  // [boolean] 锁屏
  lock: false,
  // [string] 加载文案
  label: '',
  // [string] 自定义样式
  customClass: '',
  // [boolean] 文案和图标垂直居中，默认水平显示
  vertical: false,
}


/**
 * render
 * @private
 */
function render() {
  const { props, states } = this
  let $el = document.createElement('div')
  $el.className = UI_NAME
  addClass($el, props.customClass)
  if (props.vertical) {
    addClass($el, UI_NAME + '--vertical')
  }
  $el.innerHTML = template(skeletonTpl, {
    background: (props.background || 'transparent').toString(),
    label: props.label
  })
  states.$container.appendChild($el)
  states.$el = $el
  if (states.isBody) {
    addClass($el, UI_NAME + '--fullscreen')
    Popup.open(
      {
        id: states.id,
        backdrop: false,
        backdropBackground: null,
        scrollLock: props.lock,
        zIndex: Popup.nextZIndex(),
        escClose: false
      }
    )
    $el.style.zIndex = Popup.nextZIndex()
  } else {
    if (props.lock) {
      states.$container.classList.add('nv-locked')
    }
  }
}



/**
 * Loader Component
 * @date 2018-11-26
 * @export
 * @class Loader
 */
export class Loader {


  /**
   * Creates an instance of Loader.
   * @date 2018-11-26
   * @param {*} container
   * @param {*} options
   * @memberof Loader
   */
  constructor(container, options) {
    if (!(this instanceof Loader)) {
      return new Loader(container, options)
    }
    if (!isElement(container)) {
      throwError('\'container\' 必须是一个DOM容器', 'type')
    }
    this.props = mixins({}, defaults, options)
    const states = this.states = Object.create(null)
    states.isBody = container === document.body
    // 页面级Loader只允许有一个
    if (states.isBody) {
      instances.forEach(ins => {
        if (ins.states.isBody) {
          ins.close()
        }
      })
      instances.push(this)
    } else {
      let position = getStyle(container, 'position')
      if (!position || position === 'static') {
        container.style.position = 'relative'
      }
    }
    states.$container = container
    states.id = UI_NAME + '_' + uuid()
    render.call(this)
  }


  /**
   * close
   * @date 2018-11-26
   * @memberof Loader
   */
  close() {
    const { states } = this
    let index = instances.indexOf(this)
    if (index > -1) {
      instances.splice(index, 1)
    }
    if (!this.states) {
      return
    }
    removeNode(states.$el)
    if (states.isBody) {
      Popup.close(states.id)
    } else if (this.props.lock) {
      states.$container.classList.remove('nv-locked')
    }
    this.states = null
    this.props = null
  }
}


/**
 * 销毁所有的Loader实例
 * @date 2018-11-26
 * @static
 * @memberof Loader
 */
Loader.destroy = function () {
  instances.forEach(ins => ins.close())
  instances.length = 0
}

export default Loader