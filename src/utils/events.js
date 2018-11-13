/*
 * File: events.js
 * Project: @vnnox/novaui
 * Description: 发布订阅器类
 * Created: 2018-10-29 11:27
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 11:27
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */


import { isFunction } from './utils'


/**
 * 发布订阅器类
 * 事件基类
 * @date 2018-11-08
 * @export
 * @class Events
 */
export class Events {

  /**
   * Creates an instance of Events.
   * @date 2018-11-08
   * @memberof Events
   */
  constructor() {
    this._events = Object.create(null)
  }


  /**
   * 注册事件
   * @date 2018-11-08
   * @param {*} name
   * @param {*} handle
   * @param {*} context
   * @returns
   * @memberof Events
   */
  on(name, handle, context) {
    if (!name || !isFunction(handle)) {
      return this
    }
    const _events = this._events[name] || (this._events[name] = [])
    const event = Object.create(null)
    event.id = _events.length
    event.handle = handle
    event.context = context
    _events.push(event)
    return this
  }


  /**
   * 解绑事件
   * @date 2018-11-08
   * @param {*} name
   * @param {*} handle
   * @param {*} context
   * @returns
   * @memberof Events
   */
  off(name, handle, context) {
    if (!name || !this._events[name]) {
      return this
    }
    // 如果指定了handle
    if (handle && isFunction(handle)) {
      let _events = this._events[name]
      _events.forEach(event => {
        // 匹配相同引用的handle
        if (
          event &&
          (handle === (event.handle || event.handle._handle)) &&
          (!context || event.context === context)
        ) {
          // 删除索引为event.id的事件  
          delete _events[event.id]
        }
      })
      // 如果当前队列已空，则移除该名称事件
      if (!_events.length) {
        delete this._events[name]
      }
    }
    // 解绑所有同名事件
    else if (handle === null) {
      delete this._events[name]
    }
    return this
  }


  /**
   * 一次性事件绑定
   * @date 2018-11-08
   * @param {*} name
   * @param {*} handle
   * @param {*} context
   * @returns
   * @memberof Events
   */
  one(name, handle, context) {
    if (!name || !isFunction(handle)) {
      return this
    }
    const self = this
    const once = function () {
      self.off(name, once, context)
      return handle.apply(context || self, arguments)
    }
    once._handle = handle
    this.on(name, once, context)
    return this
  }


  /**
   * 触发事件
   * @date 2018-11-08
   * @param {*} name
   * @param {*} args
   * @returns
   * @memberof Events
   */
  emit(name, ...args) {
    if (!name || !this._events[name]) {
      return this
    }
    let len = this._events[name].length
    let i = -1
    // 依次执行事件队列
    while (++i < len) {
      let event = this._events[name][i]
      event.handle.apply(event.context || this, args)
    }
    return this
  }

  
  /**
   * 销毁
   * @date 2018-11-08
   * @memberof Events
   */
  destroy() {
    this._events = null
  }
}

export default Events 