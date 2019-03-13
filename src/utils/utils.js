/*
 * File: utils.js
 * Project: @vnnox/novaui
 * Description: 工具函数类
 * Created: 2018-10-29 10:31
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 10:36
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */


const SLICE = Array.prototype.slice
const TOSTRING = Object.prototype.toString
const HASOWN = Object.prototype.hasOwnProperty
const PRIMITIVE_VALUES = ['string', 'number', 'boolean', 'symbol', 'undefined']
const NUMBER_REG = /^-?\d*\.?\d+$/

/**
 * 校验传入值是否是字符串
 * @param {*} value
 * @returns {Boolean} 
 */
export const isString = value => typeof value === 'string'


/**
 * 校验传入值是否是对象
 * @param {*} value 
 * @returns {Boolean} 
 */
export const isObject = value => value !== null && typeof value === 'object'


/**
 * 校验传入值是否是纯对象
 * @param {*} value 
 * @example
 * isPlainObject({}) // true
 * isPlainObject(null) // false
 * isPlainObject([]) // false
 * @returns {Boolean} 
 */
export const isPlainObject = value => isObject(value) && TOSTRING.call(value) === '[object Object]'


/**
 * 校验传入值是否是数组
 * @returns {Boolean}
 */
export const isArray = Array.isArray


/**
 * 校验传入值是否是函数
 * @param {*} value 
 * @returns {Boolean}
 */
export const isFunction = value => typeof value === 'function'


/**
 * 校验传入值是否是基本类型值
 * @param {*} value 
 * @returns {Boolean}
 */
export const isPrimitive = value => !!~PRIMITIVE_VALUES.indexOf(typeof value)


/**
 * 校验传入值是否是布尔类型
 * @param {*} value 
 * @returns {Boolean}
 */
export const isBoolean = value => typeof value === 'boolean'


/**
 * 校验传入值是否是数字
 * @param {*} value 
 * @returns {Boolean}
 */
export const isNumber = value => !isNaN(value) && typeof value === 'number'


/**
 * 校验传入值是否是数字字符串
 * @param {*} value
 * @returns {Boolean} 
 */
export const isNumberString = value => NUMBER_REG.test(value)


/**
 * 校验传入值是否是整数
 * @param {*} value 
 * @returns {Boolean}
 */
export const isInteger = value => isNumber(value) && (value % 1 === 0)


/**
 * 校验传入值是否是浮点数
 * @param {*} value 
 * @returns {Boolean}
 */
export const isFloat = value => isNumber(value) && (value !== value | 0)


/**
 * 校验传入值是否是一个DOM元素
 * @param {*} value 
 * @returns {Boolean}
 */
export const isElement = value => isObject(value) && value.nodeType === 1 && !isPlainObject(value)


/**
 * 校验传入值是否是一个日期对象
 * @param {*} value 
 * @returns {Boolean}
 */
export const isDate = value => TOSTRING.call(value) === '[object Date]' && !isNaN(value.getTime())


/**
 * 校验传入值是否为空
 * @param {*} value 
 * @example
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty('') // true
 * isEmpty('  ') // true
 * isEmpty(false) // false
 * isEmpty(0) // false
 * @returns {Boolean}
 */
export const isEmpty = value => {
  if (value === null || value === void 0) {
    return true
  }
  if (isString(value) && !value.trim()) {
    return true
  }
  return false
}


/**
 * 判断对象自身是否含有指定的key
 * @param {*} key 
 * @param {*} object 
 * @returns {Boolean}
 */
export const hasKey = (key, object) => HASOWN.call(object, key)


/**
 * 将类数组转换为数组
 * @param {*} arrayLike
 * @returns {Array} 
 */
export const toArray = arrayLike => SLICE.call(arrayLike)


/**
 * 对象混合
 * arg1 :
 *  Boolean: 是否深拷贝
 *  Object: targe
 * arg2, arg2, ..., argn: source
 * @returns {Object}
 */
export function mixins() {
  let target = arguments[0] || {}
  let i = 0
  let deep = false
  let len = arguments.length
  if (isBoolean(target)) {
    deep = target
    target = arguments[1] || {}
    i = 1
  }
  if (!isObject(target) && !isFunction(target)) {
    target = {}
  }
  while (i++ < len) {
    let source = arguments[i]
    if (source) {
      for (let k in source) {
        let src = target[k]
        let copy = source[k]
        // 防止引用自身，造成死循环
        if (copy === target) {
          continue
        }
        let _isArray = isArray(copy)
        if (deep && (_isArray || isPlainObject(copy))) {
          let clone
          if (_isArray) {
            clone = src && isArray(src) ? src : []
          } else {
            clone = src && isPlainObject(src) ? src : {}
          }
          target[k] = mixins(deep, clone, copy)
        } else if (copy !== void 0) {
          target[k] = copy
        }
      }
    }
  }

  return target
}


/**
 * 纯对象克隆
 * @param {*} object
 * @returns {Object} 
 */
export const objectClone = object => JSON.parse(JSON.stringify(object))


const hyphenateRE = /\B([A-Z])/g


/**
 * 驼峰转连接符
 * @param {*} str
 * @example
 * hyphenate('fadeIn') // fade-in
 * hyphenate('easeInOut') // ease-in-out
 * @returns {String} 
 */
export const hyphenate = str => str.replace(hyphenateRE, '-$1').toLowerCase()


/**
 * 对传入regExp的字符串转义
 * 搜索框中进行模糊匹配的时候
 * 需要对敲入的特殊字符进行转义
 * @param {*} value 
 * @returns {RegExp}
 */
export const escapeRegExp = value => value.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&')


/**
 * 根据路径从一个对象中获取其值
 * 内置了容错机制，防止层级太深时报错
 * @param {*} path 
 * @param {*} object 
 * @example
 * getObjectValue(p1.p1, obj) // obj.p1.p2
 * @returns {*}
 */
export const getObjectValue = (path, object) => {
  if (isEmpty(path)) {
    return void 0
  }
  let paths = path.trim().split('.')
  while (paths.length) {
    let k = paths.shift()
    object = object[k]
    if (!isPlainObject(object) && !isArray(object)) {
      break
    }
  }
  return object
}


let uid = 0

/**
 * gen uuid
 * @returns {Number}
 */
export const uuid = () => ++uid


/**
 * 抛出异常
 * @param {*} message 
 * @param {*} type 
 */
export const throwError = (message, type) => {
  message = `[NOVA.UI.ERROR] ${message.toString()}`
  let method
  switch (type) {
    case 'type':
      method = TypeError
      break
    case 'range':
      method = RangeError
      break
    default:
      method = Error
  }
  throw new method(message)
}


/**
 * 比较两个JSON
 * @param {*} v1 
 * @param {*} v2 
 */
export const compareJson = (v1, v2) => v1 && v2 && JSON.stringify(v1) === JSON.stringify(v2)



/**
 * html转实体
 * @param {*} html 
 */
export const encodeHtml = html => {
  if (!html) return html
  return html.replace(/[<>&"]/g, function (char) {
    return {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;'
    }[char]
  })
}


export default {
  isString,
  isObject,
  isPlainObject,
  isArray,
  isFunction,
  isPrimitive,
  isBoolean,
  isNumber,
  isInteger,
  isFloat,
  isElement,
  isDate,
  isEmpty,
  hasKey,
  toArray,
  mixins,
  objectClone,
  hyphenate,
  escapeRegExp,
  getObjectValue,
  uuid,
  throwError,
  compareJson,
  encodeHtml,
}

