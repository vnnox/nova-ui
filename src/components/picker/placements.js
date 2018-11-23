/*
 * File: placements.js
 * Project: @vnnox/novaui
 * Description: 自动获取Picker相对target的位置
 * Created: 2018-11-13 02:13
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-13 02:14
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { getOffset } from '../../utils/dom'

export const PLACEMENTS = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']

/**
 * 获取picker的placement
 * @param {Element} target 目标元素
 * @param {Element} picker picker元素
 * @param {string} placement one of PLACEMENTS
 * @param {number} margin 
 * @param {boolean} auto 自动调整位置
 * @returns {object}
 */
export const getPlacement = (target, picker, placement, margin, auto) => {
  placement = PLACEMENTS.indexOf(placement) > -1 ? placement : 'bottom'
  margin = margin || 0
  let top
  let left
  let tarRect = getOffset(target)
  let width = picker.offsetWidth
  let height = picker.offsetHeight
  let { top: tT, left: tL } = tarRect
  let tW = target.offsetWidth
  let tH = target.offsetHeight

  if (auto) {
    let CW = window.innerWidth
    let CH = window.innerHeight
    let rect = target.getBoundingClientRect()
    // target 距离底部的距离
    let rectBottom = rect.top + tH
    // target 距离右部的距离
    let rectRight = rect.left + tW
    // 上面放不下
    const aboveOverflow = (height + margin) > rect.top
    // 下面放不下
    const belowOverflow = (CH - rectBottom) < (height + margin)
    // 左边放不下
    const leftOverflow = (width + margin) > rect.left
    // 右边放不下
    const rightOverflow = (CW - rectRight) < (width + margin)

    // 如果上面放不下，则放在下面
    if (!!~placement.indexOf('top') && aboveOverflow) {
      placement = placement.replace('top', 'bottom')
    } 
    // 如果下面放不下，且上面放的下，则放在上面
    else if (!!~placement.indexOf('bottom') && belowOverflow && !aboveOverflow) {
      placement = placement.replace('bottom', 'top')
    }

    // 如果左边放不下，则放在右边
    if (!!~placement.indexOf('left') && leftOverflow) {
      placement = placement.replace('left', 'right')
    } 
    // 如果右边放不下并且左边放得下，则放在左边
    else if (!!~placement.indexOf('right') && rightOverflow && !leftOverflow) {
      placement = placement.replace('right', 'left')
    }
  }

  switch (placement) {
    case 'top':
      top = tT - height - margin
      left = tL + tW / 2 - width / 2
      break
    case 'top-start':
      top = tT - height - margin
      left = tL
      break
    case 'top-end':
      top = tT - height - margin
      left = tL + tW - width
      break
    case 'bottom':
    default:
      top = tT + tH + margin
      left = tL + tW / 2 - width / 2
      break
    case 'bottom-start':
      top = tT + tH + margin
      left = tL
      break
    case 'bottom-end':
      top = tT + tH + margin
      left = tL + tW - width
      break
    case 'left':
      top = tT + tH / 2 - height / 2
      left = tL - width - margin
      break
    case 'left-start':
      top = tT
      left = tL - width - margin
      break
    case 'left-end':
      top = tT + tH - height
      left = tL - width - margin
      break
    case 'right':
      top = tT + tH / 2 - height / 2
      left = tL + tW + margin
      break
    case 'right-start':
      top = tT
      left = tL + tW + margin
      break
    case 'right-end':
      top = tT + tH - height
      left = tL + tW + margin
      break
  }
  return {
    top,
    left,
    placement
  }
}


/**
 * 通过align获取placement
 * @param {*} align 
 */
export const getPlacementByAlign = align => {
  let placement
  switch (align) {
    case 'center':
      placement = 'bottom'
      break
    case 'right':
      placement = 'bottom-end'
      break
    case 'left':
    default:
      placement = 'bottom-start'
      break
  }
  return placement
}

export default {
  PLACEMENTS,
  getPlacement,
  getPlacementByAlign
}