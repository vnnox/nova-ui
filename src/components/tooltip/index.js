import Events from '../../utils/events'
import { mixins, isElement, throwError, isString, isFunction } from '../../utils/utils'
import { bind, proxy } from '../../utils/dom'


const UI_NAME = 'nv-tooltip'


const defaults = {
  // [ HTMLElement ] 容器
  container: document.documentElement,
  // [ string ] 选择器
  selector: '.tooltip',
  // [ attribute ] 如果content为空，则从DOM节点上直接取值
  attribute: 'title',
  // [ string | function ] 优先的取值属性，可以是字符串，也可以是函数 
  content: '',
  // [ string ] 位置
  placement: 'top',
  // [ boolean ] 跟随鼠标
  track: true,
  // [ string ] 自定义样式
  customClass: '',
  // [ number ] zIndex
  zIndex: 2000,
}



function bindEvents() {
  const { props, states } = this
  const { $container } = states
  const _ = this
  const handles = states.handles = Object.create(null)
  handles.mouseover = proxy($container, props.selector, function () {
    render.call(_, this)
  })

  bind($container, 'mouseover',  handles.mouseover)
}



function render ($target) {
  const { props, states } = this
  const _render = getRender.call(this, $target)
  const $el = document.createElement('div')
  $el.className = UI_NAME
  $el.innerHTML = `<div class="${UI_NAME}__body">${_render()}</div>`

  console.log($el.innerHTML)


}



function getRender ($target) {
  const {props} = this
  let render
  if (props.content) {
    if (!isFunction(props.content)) {
      render = function () {
        return props.content.toString()
      }
    } else {
      render = props.content.bind($target)
    }
  } else if (props.attribute) {
    render = function () {
      return $target.getAttribute(props.attribute) || ''
    }
  }
  return render || Function.prototype
}



export class Tooltip extends Events {
  constructor(options) {
    super()
    if (!(this instanceof Tooltip)) {
      return new Tooltip(options)
    }
    this.props = mixins({}, defaults, options)
    if (!this.props.container || !isElement(this.props.container)) {
      throwError('\'container\' 必须是一个DOM容器', 'type')
    }
    if (!isString(this.props.selector) || !this.props.selector.trim()) {
      throwError('\'selector\' 必须是选择器字符串', 'type')
    }


    this.states = Object.create(null)
    this.states.$container = this.props.container
    bindEvents.call(this)
  }
}

export default Tooltip
