const UI_NAME = 'nv-progress'
import { mixins, isElement, throwError } from '../../utils/utils'
import { addClass, qsa, removeNode } from '../../utils/dom'
import template from '../../utils/template'
import {skeletonTpl} from './template'

const STATUS = ['running', 'success', 'fail']

const STATUS_CLASS_REG = /progress-status--(running|success|fail)/

// default config
const defaults = {
  // [number] 值 0 - 100
  value: 0,
  // [string] 类型
  type: 'line', // 预留
  // [number] 线条宽度
  thickness: 8,
  // [string] 状态 running | success | fail
  status: 'running',
  // [boolean] 是否显示文本
  showLabel: true,
  // [boolean] 是否在进度条内显示文本
  labelInside: false,
  // [string] 自定义样式
  customClass: ''
}

// selectors
const Selectors = {
  track: '.nv-progress__track',
  progress: '.nv-progress__running',
  label: '.nv-progress__label'
}


// render
function render () {
  const {states, props} = this
  const $el = document.createElement('div')
  $el.className = UI_NAME
  const customClass = (props.customClass || '') + `, ${UI_NAME}--${props.type}`
  addClass($el, customClass)
  if (props.showLabel) {
    addClass($el, props.labelInside ? 'has-inside-label': 'has-outside-label')
  }
  $el.setAttribute('role', 'progressbar')

  $el.innerHTML = template(skeletonTpl, {
    showLabel: props.showLabel,
    labelInside: props.labelInside
  })

  states.$track = qsa(Selectors.track, $el)[0]
  states.$progress = qsa(Selectors.progress, $el)[0]
  states.$label = qsa(Selectors.label, $el)[0]

  if (props.type === 'line') {
    states.$track.style.height = props.thickness + 'px'
    states.$track.style.borderRadius = props.thickness / 2 + 'px'
  }

  states.$el = $el
  states.$wrapper.appendChild($el)

  this.setValue(props.value)
  this.setStatus(props.status)
}


/**
 * Progress Component
 * @date 2019-01-07
 * @export
 * @class Progress
 */
export class Progress {

  /**
   * Creates an instance of Progress.
   * @date 2019-01-07
   * @param {*} wrapper
   * @param {*} options
   * @memberof Progress
   */
  constructor (wrapper, options) {
    if (!(this instanceof Progress)) {
      return new Progress(wrapper, options)
    }
    this.props = mixins({}, defaults, options || {})
    if (!isElement(wrapper)) {
      throwError('\'wrapper\' 必须是一个DOM元素')
    }
    this.states = Object.create(null)
    this.states.$wrapper = wrapper
    render.call(this)
  }

  /**
   * 设置进度
   * @date 2019-01-07
   * @param {*} value
   * @memberof Progress
   */
  setValue (value) {
    const {states, props} = this
    value = +value
    if (isNaN(value)) {
      value = 0
    }
    value = Math.max(0, value)
    value = Math.min(value, 100)
    const progress = value + '%'

    states.$progress.style.width = progress
    if (props.labelInside && states.$label) {
      states.$label.style.width = progress
    }
    states.$label && (states.$label.textContent =progress)
  }

  /**
   * 设置状态
   * @date 2019-01-07
   * @param {*} status
   * @memberof Progress
   */
  setStatus(status) {
    const {states} = this
    if (STATUS.indexOf(status) === -1) {
      status = STATUS[0]
    }
    states.$el.className = states.$el.className.replace(STATUS_CLASS_REG, '')
    addClass(states.$el, 'progress-status--' + status)
  }

  /**
   * destroy
   * @date 2019-01-07
   * @memberof Progress
   */
  destroy () {
    removeNode(this.states.$el)
    this.states = null
    this.props = null
  }
}

export default Progress