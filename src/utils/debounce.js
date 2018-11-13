/*
 * File: debounce.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-11-13 02:15
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-13 02:15
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { toArray } from './utils'

export const debounce = (func, wait, immediate) => {
  let timeout
  const _later = (context, args) => {
    timeout = null
    if (args) {
      func.apply(context, args)
    }
  }
  const _debounce = function () {
    timeout && clearTimeout(timeout)
    let context = this
    let args = toArray(arguments)
    if (immediate) {
      let callNow = timeout
      timeout = setTimeout(_later, wait)
      if (callNow) {
        func.apply(context, args)
      }
    } else {
      timeout = setTimeout(_later, wait, context, args)
    }
  }

  _debounce.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return _debounce
}

export default debounce