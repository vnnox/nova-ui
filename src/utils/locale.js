/* global Nova */

import Locales from '../locale'
import { mixins } from './utils'

let localesObject = Locales
let langKey = 'zh-CN'

if (typeof Nova === 'object' && typeof Nova.config === 'object') {
  localesObject = Nova.config.locales
  langKey = Nova.config.lang
}


/**
 * 设置多语言
 * @param {*} lang 
 */
export const setLocales = locales => localesObject = mixins({}, localesObject, locales || {})


/**
 * 设置当前语言
 * @param {*} lang 
 */
export const setLang = lang => langKey = lang || langKey


/**
 * 获取多语言
 * @param {*} lang 
 */
export const getLocales = lang => localesObject[lang || langKey] || localesObject


export default {
  getLocales,
  setLocales,
  setLang
}