/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-11-08 11:28
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-08 11:28
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

import { Events } from '../../utils/events'
import { template } from '../../utils/template'
import { mixins, isArray, isPlainObject, uuid, isFunction, throwError } from '../../utils/utils'
import { bind, unbind, proxy, qsa } from '../../utils/dom'
import Node from './node'
import { skeletonTpl } from './template'

const UI_NAME = 'nv-tree'

const CLASS_EXPANDED = 'tree-node--expanded'

const CLASS_SELECTED = 'tree-node--selected'

const defaults = {
  // [ array ] tree数据
  data: [],
  // [ boolean ] 禁用tree
  disabled: false,
  // [ function ] 渲染器
  labelRender: null,
  // [ number ] 缩进
  indent: 16,
  // [ boolean ] 是否可选择
  checkable: false,
  // [ boolean ] 是否单选, 默认复选
  radio: false,
  // [ string ] 选择框的name值
  checkName: '',
  // [ boolean ] checkable状态下节点选择完全受控（父子节点选中状态不再关联）
  checkStrictly: false,
  // [ boolean ] 是否展开所有节点
  expandAll: false,
  // [ boolean ] 高亮当前节点的label
  highlight: false,
  // [ function ] 用于搜索时过滤node节点，返回true时表示该节点被匹配
  nodeFilter: null,
  // [ array ] 默认选中的节点ids
  defaultCheckedKeys: null,
  // [ array ] 默认展开的节点ids
  defaultExpandedKeys: null,
}

const Selectors = {
  node: '.nv-tree__node',
  input: '.tree-node__value',
  check: '.tree-node__check',
  children: '.tree-node__children',
  inner: '.tree-node__inner'
}


function deepToNode(data, parent, options) {
  let i = -1
  let len = data.length
  let expandAll = false
  let defaultExpandedKeys = []
  let defaultCheckedKeys = []
  if (options) {
    expandAll = !!options.expandAll
    defaultExpandedKeys = options.defaultExpandedKeys
    defaultCheckedKeys = options.defaultCheckedKeys
  }
  while (++i < len) {
    data[i].expanded = data[i].expanded || expandAll || 
    defaultExpandedKeys.indexOf(data[i].id) > -1
    data[i].checked = data[i].checked || defaultCheckedKeys.indexOf(data[i].id) > -1
    let node = new Node(data[i])
    if (parent) {
      parent.insertChild(node)
    }
    if (isArray(data[i].children) && data[i].children.length) {
      deepToNode(data[i].children, node, options)
    }
  }
  return parent
}

function nodesToMap(nodes, map) {
  map = map || Object.create(null)
  let i = -1
  let len = nodes.length
  let node
  while (++i < len) {
    node = nodes[i]
    map[node.id] = node
    if (node.children && node.children.length) {
      nodesToMap(node.children, map)
    }
  }
  return map
}




function renderItems(nodes) {
  const {props} = this 
  const self = this 
  let i = -1
  let len = nodes.length
  let tpl = ''
  const options = {
    indent: props.indent,
    checkable: props.checkable,
    chooseType: props.radio ? 'radio' : 'checkbox',
    checkName: props.checkName || `${UI_NAME}-${uuid()}`,
    expandAll: props.expandAll,
    disabled: props.disabled,
    labelRender: isFunction(props.labelRender) ? props.labelRender : null
  }
  while (++i < len) {
    const node = nodes[i]
    let label = options.labelRender && options.labelRender(node)
    node.content = label || node.label
    tpl += template(skeletonTpl, {
      node,
      ...options,
      callback(children) {
        return renderItems.call(self, children)
      }
    })
  }
  return tpl
}


function findNodeDomById(id, $nodes) {
  id = String(id)
  let $el
  $nodes.some($node => {
    if ($node.getAttribute('data-node') === id) {
      $el = $node
      return true
    }
  })
  return $el
}

function toggleAllChildrenChecked(node) {
  const { states } = this
  let children = node.children
  let i = -1
  let len = children.length
  let child
  while (++i < len) {
    child = children[i]
    if (!child.disabled) {
      child.updateStates('checked', node.checked)
      let $node = findNodeDomById(child.id, states.$nodes)
      $node && ($node.querySelector(Selectors.input).checked = child.checked)
    }
    if (child.children && child.children.length) {
      toggleAllChildrenChecked.call(this, child)
    }
  }
}



function toggleAllChecked(node) {
  toggleAllChildrenChecked.call(this, node)
  let parent = node.parent
  while (parent) {
    if (!parent.disabled) {
      let isChecked = true
      if (parent.children && parent.children.some(child => !child.checked)) {
        isChecked = false
      }
      parent.updateStates('checked', isChecked)
      let $node = findNodeDomById(parent.id, this.states.$nodes)
      $node && ($node.querySelector(Selectors.input).checked = parent.checked)
    }
    parent = parent.parent
  }
}


function filterNode(keyword, nodes) {
  const { nodeFilter } = this.props
  let visibleCount = 0
  const filter = node => {
    let children = node.children
    node.visible = nodeFilter(node, keyword)
    if (node.visible) {
      visibleCount++
    }
    children.forEach(child => {
      child.visible = nodeFilter(node, keyword)
      filter(child)
    })
    if (!node.visible && children.length) {
      let allHidden = true
      children.some(child => {
        if (child.visible) {
          allHidden = false
          return true
        }
      })
      node.visible = allHidden === false
    }
    // 自动展开所有父级
    if (keyword && node.visible) {
      let parent = node.parent
      while (parent) {
        parent.expanded = true
        parent = parent.parent
      }
    }
  }
  nodes.forEach(node => filter(node))
  return visibleCount
}


function render(nodes) {
  const { props, states } = this
  let $el = states.$el
  let isInit = false
  if (!$el) {
    $el = document.createElement('ul')
    $el.className = UI_NAME
    $el.setAttribute('role', 'tree')
    states.$container.appendChild($el)
    // 缓存DOM
    states.$el = $el
    isInit = true
  }

  nodes = nodes && isArray(nodes) ? nodes : states.nodes
  $el.innerHTML = renderItems.call(this, nodes)

  states.$nodes = qsa(Selectors.node, $el)
  // 只有在初始化的时候才绑定事件
  isInit && bindEvents.call(this)
}


function bindEvents() {
  const { props, states } = this
  const handles = states.handles
  const self = this
  handles.nodeClick = proxy(states.$el, Selectors.inner, function (event) {
    if (event.target.closest(Selectors.check) || event.target.closest('.nv-event-stop')) {
      return
    }
    let $parent = this.parentNode
    let id = $parent.getAttribute('data-node')
    let node = states.nodesMap[id]
    if (node.children && node.children.length) {
      $parent.classList[node.expanded ? 'remove' : 'add'](CLASS_EXPANDED)
      node.updateStates('expanded', !node.expanded)
      self.emit('expend', node.expanded, node, $parent)
    }
    if (!node.disabled) {
      self.emit('selected', node, $parent, event)
      if (props.highlight) {
        $parent.classList.add(CLASS_SELECTED)
        states.$nodes.map($node => {
          if ($node !== $parent) {
            $node.classList.remove(CLASS_SELECTED)
          }
        })
      }
    }
  })


  handles.onCheckChange = proxy(states.$el, Selectors.input, function (e) {
    e.stopPropagation()
    let node = states.nodesMap[this.value]
    if (node.disabled) {
      return
    }
    let checked = this.checked
    node.updateStates('checked', checked)
    if (!props.checkStrictly && !props.radio) {
      toggleAllChecked.call(self, node)
    }
  })

  bind(states.$el, 'click', handles.nodeClick)
  if (props.checkable) {
    bind(states.$el, 'change', handles.onCheckChange)
  }
}




export class Tree extends Events {
  constructor(container, options) {
    super()
    if (!(this instanceof Tree)) {
      return new Tree(container, options)
    }
    const props = this.props = mixins({}, defaults, options)
    let { defaultCheckedKeys, defaultExpandedKeys } = props
    props.defaultCheckedKeys = isArray(defaultCheckedKeys) ? defaultCheckedKeys : []
    props.defaultExpandedKeys = isArray(defaultExpandedKeys) ? defaultExpandedKeys : []

    const states = this.states = Object.create(null)
    states.nodes = []
    states.nodesMap = Object.create(null)
    states.$container = container
    states.handles = Object.create(null)
    this.setNodesTree(this.props.data)
    delete this.props.data
  }

  setNodesTree(data) {
    this.states.nodes = this.arrayToNodes(data)
    this.states.nodesMap = nodesToMap(this.states.nodes)
    render.call(this)
  }

  arrayToNodes(data) {
    if (!data) {
      return null
    }
    if (!isArray(data)) {
      data = [data]
    }
    let i = -1
    let len = data.length
    let nodes = []
    let node
    while (++i < len) {
      node = this.objectToTree(data[i])
      node && nodes.push(node)
    }
    return nodes
  }

  objectToTree(object) {
    if (!isPlainObject(object)) {
      return null
    }
    // 拷贝一份数据
    object = JSON.parse(JSON.stringify(object))
    let { defaultCheckedKeys, defaultExpandedKeys } = this.props
    object.expanded = object.expanded || this.props.expandAll || defaultExpandedKeys.indexOf(object.id) > -1
    object.checked = object.checked || defaultCheckedKeys.indexOf(object.id) > -1
    let node = new Node(object)
    if (isArray(object.children) && object.children.length) {
      return deepToNode(object.children, node, {
        expandAll: this.props.expandAll,
        defaultCheckedKeys,
        defaultExpandedKeys
      })
    }
    return node
  }

  filter(keyword) {
    if (!this.props.nodeFilter || !isFunction(this.props.nodeFilter)) {
      throwError('The \'nodeFilter\' method must be provided.')
    }
    keyword = (keyword || '').toString().trim()
    let count = filterNode.call(this, keyword, this.states.nodes)
    render.call(this)
    return count
  }

  getNode (node) {
    if (node instanceof Node) {
      return node 
    }
    return this.states.nodesMap[node]
  }

  appendNode (parent, node) {
    let parentNode = this.getNode(parent)
    if (parentNode) {
      node = parentNode.insertChild(node)
      parentNode.expanded = true
      this.states.nodesMap[node.id] = node
      render.call(this)
    }
  }

  removeNode (node, deep = true) {
    node = this.getNode(node)
    if (node.parent) {
      node.remove(deep)  
    } else {
      // 如果是根节点
      let index = this.states.nodes.indexOf(node)
      this.states.nodes.splice(index, 1) 
    }
    this.states.nodesMap = nodesToMap(this.states.nodes)
    render.call(this)
  }

}

export default Tree

