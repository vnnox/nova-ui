/*
 * File: i18n.js
 * Project: @vnnox/novaui
 * Description: 用于渲染模板中的语言变量
 * Created: 2018-11-14 05:45
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-14 05:45
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { isEmpty, isString, isPlainObject, getObjectValue } from './utils'

/* { word } */
const I18N_VALUE_REG = /\{\s*(\w+)\s*\}/gm
/* { i18n: word }*/
const I18N_KEY_REG = /\{\s*i18n:\s*(\w+)\s*\}/gm


export const i18n = (string, lang, data) => {
  if (!isString(string) || isEmpty(string) || !isPlainObject(lang)) {
    return string
  }
  string = string.replace(I18N_KEY_REG, (match, key) => {
    let value
    if (key) {
      value = getObjectValue(key, lang)
    }
    return value && isString(value) ? value : ''
  })

  if (!isPlainObject(data)) {
    return string
  }

  return i18n._(string, data)
}

/**
 * 解析语段中的变量
 * @param string
 * @param data
 */
i18n._ = function(string, data) {
  return string.replace(I18N_VALUE_REG, (match, key) => {
    let value
    if (key) {
      value = getObjectValue(key, data)
    }
    return value || ''
  })
}


export default i18n