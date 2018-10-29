
/*
 * File: utils.js
 * Project: @vnnox/novaui
 * Description: InputNumber/Slider辅助函数
 * Created: 2018-10-29 11:56
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 11:57
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */


/**
 * 获取精度
 * @param {*} precision 
 * @param {*} step 
 * @returns {Number}
 */
export const getPrecision = (precision, step) => {
  let value = 0
  if (precision && precision > 0) {
    precision = +precision
    if (!isNaN(precision)) {
      value = precision
    }
  } else if (step) {
    const stepStr = step.toString()
    const dotPosition = stepStr.indexOf('.')
    if (dotPosition !== -1) {
      value = stepStr.length - dotPosition - 1
    }
  }
  return value
}


/**
 * 校正参数
 * @param {*} props 
 * @returns {Object}
 */
export const correctProps = props => {
  let { min, max, step } = props
  min = parseFloat(min, 10)
  max = parseFloat(max, 10)
  step = parseFloat(step, 10)
  min = isNaN(min) ? -Infinity : min
  max = isNaN(max) ? Infinity : max
  step = isNaN(step) ? 1 : step
  if (min > max) {
    let t = max
    max = min
    min = t
  }
  props.min = min
  props.max = max
  props.step = step
  props.precision = getPrecision(props.precision, step)
  return props
}

export default {
  getPrecision,
  correctProps
}