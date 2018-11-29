
/*
 * File: store.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-11-29 02:43
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-29 02:45
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

export const Store = (...args) => {
  let [isSession, name, value, prefix] = [false]
  if (typeof args[0] === 'boolean') {
    isSession = args[0]
    args.shift()
  }
  name = args[0]
  value = args[1]
  prefix = args[2] === void 0 ? '__nova_cache__' : args[2]

  const Storage = isSession ? window.sessionStorage : window.localStorage

  if (!name || !(typeof name === 'string')) {
    throw new Error('缓存名称必须是一个字符串')
  }

  const CACHE_KEY = prefix && typeof prefix === 'string' ? (prefix + name) : name

  // delete
  if (value === null) {
    return Storage.removeItem(CACHE_KEY)
  }

  // set
  if (value !== void 0) {
    return Storage.setItem(CACHE_KEY, JSON.stringify(value))
  }

  // get
  let _value = void 0
  try {
    _value = JSON.parse(Storage.getItem(CACHE_KEY))
  } catch (e) {
    // todo 
  }

  return _value
}

export default Store