/*
 * File: utils.js
 * Project: @vnnox/novaui
 * Description: 日期操作
 * Created: 2018-11-27 09:12
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-28 11:44
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { isNumber, isString, isDate } from '../../utils/utils'
import fecha from './fecha'

/**
 *  补零
 * @param {*} value 
 * @param {*} len 
 */
export const pad = (value, len) => {
  let val = value + ''
  len = len || 2
  while (val.length < len) {
    val = '0' + val
  }
  return val
}


/**
 * 获取某月第一天是周几
 * @param year 
 * @param month 
 */
export const getFirstDayInMonth = (year, month) => new Date(year, month - 1, 1).getDay()


/**
 * 获取某一月有多少天
 * @param year 
 * @param month 
 */
export const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate()


/**
 * 是否是闰年
 * @param year 
 */
export const isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)


/**
 * 获取指定年的天数
 * @param {*} year 
 */
export const getDaysInYear = year => isLeapYear(year) ? 366 : 365


/**
 * 返回一个有效日期对象
 * @param date 
 */
export const toDate = date => {
  if (date === '' || date === null || date === void 0) {
    return null
  }
  if (date instanceof Date) {
    return date
  }
  if (!isNaN(+date) || isNumber(date)) {
    date = new Date(parseInt(date, 10))
  } else if (isString(date)) {
    date = (date || '').trim()
    date = date.replace(/\.\d+/, '')
      .replace(/-/, '/').replace(/-/, '/')
      .replace(/T/, ' ').replace(/Z/, ' UTC')
      .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2')
    date = new Date(date)
  }
  return isDate(date) ? date : null
}


/**
 * 格式化日期
 * @param date 
 * @param format 
 */
export const formatDate = (date, format, i18n) => {
  date = toDate(date)
  if (!date) {
    return ''
  }
  return fecha.format(date, format || 'YYYY-MM-DD', i18n)
}


/**
 * 转换日期
 * @param date 
 * @param format 
 */
export const parseDate = (date, format, i18n) => {
  if (date === '' || date === null || date === void 0) {
    return null
  }
  return isDate(date) ? date : fecha.parse(date || '', format, i18n)
}


/**
 * 获取每一天0点的时间戳
 * @param date 
 */
export const getDayTimestamps = date => {
  date = toDate(date)
  return date ? (new Date(date.getFullYear(), date.getMonth() - 1, date.getDate(), 0, 0, 0)).getTime() : 0
}


/**
 * 校验两个日期是否相同
 * @param {*} date1 
 * @param {*} date2 
 * @param {*} type 
 */
export const isSameDate = (date1, date2, type = 'date') => {
  if (!date1 || !date2) {
    return false
  }
  date1 = toDate(date1)
  date2 = toDate(date2)
  let same = date1 && date2 && date1.getFullYear() === date2.getFullYear()
  if (!same || type === 'year') {
    return same
  }

  same = same && date1.getMonth() === date2.getMonth()
  if (type === 'month') {
    return same
  }

  return same && date1.getDate() === date2.getDate()
}


/**
 * 判断两个日期是否是同一天
 * @param day1 
 * @param day2 
 */
export const isSameDay = (day1, day2) => isSameDate(day1, day2, 'date')


/**
 * 校验日期是否在范围内
 * @param {*} value 
 * @param {*} start 
 * @param {*} end 
 */
export const dateInRange = (value, start, end) => {
  start = +toDate(start)
  value = +toDate(value)
  end = +toDate(end)
  return value >= start && value <= end
}


/**
 * 获取某一年的每一天
 * @param year 
 */
export const getDatesOfYear = year => {
  const days = getDaysInYear(year)
  const dates = []
  for (let i = 0; i < days; i++) {
    let start = new Date(year, 0, 1)
    start.setDate(start.getDate() + i)
    dates.push(new Date(start.getFullYear(), start.getMonth(), start.getDate()))
  }
  return dates
}


/**
 * 获取某年某月的每一天
 * @param year 
 * @param month 
 */
export const getDatesOfMonth = (year, month) => {
  const days = getDaysInMonth(year, month)
  const dates = []
  for (let i = 0; i < days; i++) {
    let start = new Date(year, month - 1, 1)
    start.setDate(start.getDate() + i)
    dates.push(new Date(start.getFullYear(), start.getMonth(), start.getDate()))
  }
  return dates
}


/**
 * 比较两个时间的大小
 * 将它们转换为同一天再比较
 * @param {*} time1 
 * @param {*} time2 
 * @returns {Boolean}
 */
export const compareTwoTime = (time1, time2) => {
  let t1 = new Date(1970, 0, 1, time1.getHours(), time1.getMinutes(), time1.getSeconds())
  let t2 = new Date(1970, 0, 1, time2.getHours(), time2.getMinutes(), time2.getSeconds())
  t1 = +t1
  t2 = +t2
  if (t1 === t2) {
    return 0
  }
  if (t1 > t2) {
    return 1
  }
  return -1
}


export default {
  pad,
  getFirstDayInMonth,
  getDaysInMonth,
  isLeapYear,
  getDaysInYear,
  toDate,
  formatDate,
  parseDate,
  getDayTimestamps,
  isSameDay,
  isSameDate,
  dateInRange,
  getDatesOfYear,
  getDatesOfMonth,
  compareTwoTime
}