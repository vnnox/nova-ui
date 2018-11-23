import Events from '../../utils/events'
import { isElement, throwError, mixins, isNumber, isNumberString } from '../../utils/utils'
import template from '../../utils/template'
import { addClass, qsa, bind, unbind, removeNode } from '../../utils/dom'
import { skeletonTpl, lumpTpl } from './template'
import { isArray } from 'util';
const colorjoe = require('./colorjoe.min')

const UI_NAME = 'nv-color-picker'

const defaults = {
  inline: true,
  lumps: [
    'd81e06', 'f4ea2a', '1afa29', '1296db', '13227a', 'd4237a', 'ffffff', 'e6e6e6', 'dbdbdb', 'cdcdcd', 'bfbfbf', '8a8a8a', '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 'bd8cbb', 'be8dbd', 'e89abe', 'e8989a', 'e16632', 'e98f36', 'efb336', 'f6ef37', 'afcd51', '7cba59', '36ab60', '1baba8', '17ace3', '3f81c1', '4f68b0', '594d9c', '82529d', 'a4579d', 'db649b', 'dd6572', 'd81e06', 'e0620d', 'ea9518', 'f4ea2a', '8cbb1a', '2ba515', '0e932e', '0c9890', '1295db', '0061b2', '0061b0', '004198', '122179', '88147f', 'd3227b', 'd6204b'
  ],
}
const Selectors = {
  lumps: '.nv-color-picker__lumps',
  panel: '.nv-color-picker__panel'
}

function render() {
  const { props, states } = this
  const $el = document.createElement('div')
  $el.className = UI_NAME
  $el.innerHTML = template(skeletonTpl, {

  })
  states.$lumps = qsa(Selectors.lumps, $el)[0]
  states.$panel = qsa(Selectors.panel, $el)[0]
  states.$el = $el

  if (props.inline) {
    states.$target.appendChild($el)
  }
  initColorPanel.call(this)
  initColorLumps.call(this)
}

function initColorPanel() {
  const { props, states } = this
  states.joeIns = colorjoe.rgb(qsa('.panel-main', states.$panel)[0])
}


function initColorLumps() {
  const { props, states } = this
  if (props.lumps && isArray(props.lumps) && props.lumps.length) {
    let html = ''
    props.lumps.forEach(color => {
      color = color.charAt(0) === '#' ? color : ('#'+color)
      html += template(lumpTpl, {
        color
      })
    })
    states.$lumps.innerHTML = html
  }
}


export class ColorPicker extends Events {
  constructor(target, options) {
    super()
    if (!(this instanceof ColorPicker)) {
      return new ColorPicker(target, options)
    }
    if (!isElement(target)) {
      throwError('\'target\' 必须是一个DOM容器', 'type')
    }

    this.props = mixins({}, defaults, options || {})
    this.states = Object.create(null)
    this.states.$target = target
    render.call(this)
  }
}


export default ColorPicker