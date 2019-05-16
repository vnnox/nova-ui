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
import { bind, unbind, proxy, qsa, removeNode } from '../../utils/dom'
import Node from './node'
import { skeletonTpl, noDataTpl, noMatchDataTpl } from './template'

const UI_NAME = 'nv-tree'
const CLASS_EXPANDED = 'tree-node--expanded'
const CLASS_SELECTED = 'tree-node--selected'

// default config
const defaults = {
  // [ array ] tree数据
  data: [],
  // [ boolean ] 禁用tree
  disabled: false,
  // [ function ] 渲染器
  labelRender: null,
  // [ number ] 缩进
  indent: 20,
  // [ boolean ] 是否可选择
  checkable: false,
  // [ boolean ] 是否单选, 默认复选
  radio: false,
  // [ string ] 选择框的name值
  checkName: '',
  // [ boolean ] checkable状态下节点选择完全受控（父子节点选中状态不再关联）
  checkStrictly: false,
  // [ boolean ] // 是否在点击节点的时候选中节点
  nodeClickCheck: true,
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
  // [ string ] 节点为空时显示的文本
  noDataText: '',
  // [ string ] 无匹配节点时显示的文本
  noMatchDataText: ''
}

// selectors
const Selectors = {
  node: '.nv-tree__node',
  fold: '.tree-node__fold',
  input: '.tree-node__value',
  check: '.tree-node__check',
  label: '.tree-node__label',
  children: '.tree-node__children',
  inner: '.tree-node__inner',
  noMatch: '.no-match'
}


/**
 * 递归转换Node节点
 * @date 2018-11-13
 * @method
 * @param {*} data
 * @param {*} parent
 * @param {*} options
 * @returns
 */
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


/**
 * 将Nodes节点转换为Map映射
 * @date 2018-11-13
 * @method
 * @param {*} nodes
 * @param {*} map
 * @returns
 */
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


/**
 * 渲染条目
 * @date 2018-11-13
 * @method
 * @param {*} nodes
 * @param {*} options
 * @returns
 */
function renderItems(nodes, options) {
  let i = -1
  let len = nodes.length
  let tpl = ''
  while (++i < len) {
    const node = nodes[i]
    let label = options.labelRender && options.labelRender(node)
    node.content = label || node.label
    tpl += template(skeletonTpl, {
      node,
      ...options,
      callback(children) {
        return renderItems(children, options)
      }
    })
  }
  return tpl
}


/**
 * 通过ID查找Node节点
 * @date 2018-11-13
 * @method
 * @param {*} id
 * @param {*} $nodes
 * @returns
 */
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


/**
 * 设置节点的check状态
 * @date 2018-11-13
 * @private
 * @param {*} node
 */
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


/**
 * 设置当前节点的父节点和子节点的关联选中
 * @date 2018-11-13
 * @private
 * @param {*} node
 */
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


/**
 * 通过关键词过滤节点
 * @date 2018-11-13
 * @private
 * @param {*} keyword
 * @param {*} nodes
 * @returns
 */
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


/**
 * render dom
 * @date 2018-11-13
 * @private
 * @param {*} nodes
 */
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

  const options = {
    indent: props.indent,
    checkable: props.checkable,
    chooseType: props.radio ? 'radio' : 'checkbox',
    checkName: props.checkName || `${UI_NAME}-${states.treeId}`,
    expandAll: props.expandAll,
    disabled: props.disabled,
    nodeClickCheck: props.nodeClickCheck,
    labelRender: isFunction(props.labelRender) ? props.labelRender : null,
  }

  nodes = nodes && isArray(nodes) ? nodes : states.nodes
  if (nodes.length) {
    $el.innerHTML = renderItems(nodes, options)
  } else {
    $el.innerHTML = template(noDataTpl, {
      noDataText: props.noDataText
    })
  }
  states.$nodes = qsa(Selectors.node, $el)
  // 只有在初始化的时候才绑定事件
  isInit && bindEvents.call(this)
}


/**
 * bind dom evens
 * @date 2018-11-13
 * @private
 */
function bindEvents() {
  const { props, states } = this
  const handles = states.handles
  const self = this

  // 点击折叠按钮 toggle expanded
  handles.foldClick = proxy(states.$el, Selectors.fold, function () {
    const $parent = this.parentNode.parentNode
    const id = $parent.getAttribute('data-node')
    const node = states.nodesMap[id]
    
    if (node.children && node.children.length) {
      $parent.classList[node.expanded ? 'remove' : 'add'](CLASS_EXPANDED)
      node.updateStates('expanded', !node.expanded)
      self.emit('expend', node.expanded, node, $parent)
    }
  })


  // 点击label文本
  handles.labelClick = proxy(states.$el, Selectors.label, function (event) {
    // 如果设置了阻止冒泡，则return
    if (event.target.closest('.nv-event-stop')) {
      return
    }

    const $parent = this.parentNode.parentNode
    const id = $parent.getAttribute('data-node')
    const node = states.nodesMap[id]
    
    // 如果关联了选中节点
    if (props.nodeClickCheck && props.checkable && !props.disabled && !node.disabled) {
      const $check = $parent.querySelector(Selectors.input)
      $check.checked = !$check.checked
      const checked = $check.checked
      node.updateStates('checked', checked)
      if (!props.checkStrictly && !props.radio) {
        toggleAllChecked.call(self, node)
      }
      self.emit('check', checked, node, findNodeDomById(node.id, states.$nodes))
    }

    self.emit('click', node, $parent)
    // 选中高亮
    if (!props.disabled && !node.disabled) {
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


  // 点击Node节点
  // handles.nodeClick = proxy(states.$el, Selectors.inner, function (event) {
  //   if (event.target.closest(Selectors.check) || event.target.closest('.nv-event-stop')) {
  //     return
  //   }
  //   const $parent = this.parentNode
  //   const id = $parent.getAttribute('data-node')
  //   const node = states.nodesMap[id]
  //   self.emit('click', node, $parent)
  //   if (!props.disabled && !node.disabled) {
  //     self.emit('selected', node, $parent, event)
  //     if (props.highlight) {
  //       $parent.classList.add(CLASS_SELECTED)
  //       states.$nodes.map($node => {
  //         if ($node !== $parent) {
  //           $node.classList.remove(CLASS_SELECTED)
  //         }
  //       })
  //     }
  //   }
  // })

  // 选中/取消选中
  handles.onCheckChange = proxy(states.$el, Selectors.input, function (e) {
    e.stopPropagation()
    let node = states.nodesMap[this.value]
    if (props.disabled || node.disabled) {
      return
    }
    let checked = this.checked
    node.updateStates('checked', checked)
    if (!props.checkStrictly && !props.radio) {
      toggleAllChecked.call(self, node)
    }
    self.emit('check', checked, node, findNodeDomById(node.id, states.$nodes))
  })

  // bind(states.$el, 'click', handles.nodeClick)
  bind(states.$el, 'click', handles.foldClick)
  bind(states.$el, 'click', handles.labelClick)

  if (props.checkable) {
    bind(states.$el, 'change', handles.onCheckChange)
  }
}


/**
 * unbind dom events
 * @date 2018-11-13
 * @private
 */
function unbindEvents() {
  const { props, states } = this
  const handles = states.handles
  // unbind(states.$el, 'click', handles.nodeClick)
  unbind(states.$el, 'click', handles.foldClick)
  unbind(states.$el, 'click', handles.labelClick)
  if (props.checkable) {
    unbind(states.$el, 'change', handles.onCheckChange)
  }
}


/**
 * Tree Component
 * @date 2018-11-13
 * @export
 * @class Tree
 * @extends {Events}
 */
export class Tree extends Events {

  /**
   * Creates an instance of Tree.
   * @date 2018-11-13
   * @param {*} container
   * @param {*} options
   * @memberof Tree
   */
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
    states.treeId = uuid()
    states.nodes = []
    states.nodesMap = Object.create(null)
    states.$container = container
    states.handles = Object.create(null)
    this.setNodesTree(this.props.data)
    delete this.props.data
  }


  /**
   * 将节点数组转换为tree
   * @date 2018-11-13
   * @param {*} data
   * @memberof Tree
   */
  setNodesTree(data) {
    this.states.nodes = this.arrayToNodes(data)
    this.states.nodesMap = nodesToMap(this.states.nodes)
    render.call(this)
  }


  /**
   * 将数组转换为节点组
   * @date 2018-11-13
   * @param {*} data
   * @returns
   * @memberof Tree
   */
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


  /**
   * 将对象转换为树结构
   * @date 2018-11-13
   * @param {*} object
   * @returns
   * @memberof Tree
   */
  objectToTree(object) {
    if (!isPlainObject(object)) {
      return null
    }
    // 拷贝一份数据
    object = JSON.parse(JSON.stringify(object))
    let { defaultCheckedKeys, defaultExpandedKeys } = this.props
    object.expanded = this.props.expandAll || object.expanded || defaultExpandedKeys.indexOf(object.id) > -1
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


  /**
   * 过滤树结构
   * 并且返回匹配的结果总数
   * @date 2018-11-13
   * @param {*} keyword
   * @returns
   * @memberof Tree
   * @returns {Number}
   */
  filter(keyword) {
    if (!this.props.nodeFilter || !isFunction(this.props.nodeFilter)) {
      throwError('The \'nodeFilter\' method must be provided.')
    }
    keyword = (keyword || '').toString().trim()
    let count = filterNode.call(this, keyword, this.states.nodes)
    render.call(this)
    if (!count && this.states.nodes) {
      this.states.$el.innerHTML += template(noMatchDataTpl, {
        noMatchDataText: this.props.noMatchDataText
      })
    }
    return count
  }


  /**
   * 获取Node节点
   * @date 2018-11-13
   * @param {*} node
   * @returns
   * @memberof Tree
   */
  getNode(node) {
    if (node instanceof Node) {
      return node
    }
    return this.states.nodesMap[node]
  }


  /**
   * 插入子节点
   * @date 2018-11-13
   * @param {*} parent
   * @param {*} node
   * @memberof Tree
   */
  appendNode(parent, node, index = void 0) {
    const parentNode = this.getNode(parent)
    if (parentNode) {
      node = parentNode.insertChild(node, index)
      parentNode.expanded = true
      this.states.nodesMap[node.id] = node
      render.call(this)
    }
  }


  /**
   * 在目标元素前插入节点
   * @date 2019-05-13
   * @param {*} newNode
   * @param {*} target
   * @memberof Tree
   */
  insertBeforeNode (newNode, target) {
    const targetNode = this.getNode(target)
    if (targetNode) {
      newNode = targetNode.insertBefore(newNode, targetNode)
      this.states.nodesMap[newNode.id] = newNode
      render.call(this)
    }
  }


  /**
   * 移除节点
   * @date 2018-11-13
   * @param {*} node
   * @param {boolean} [deep=true]
   * @memberof Tree
   */
  removeNode(node, deep = true) {
    // 这地方根节点有点问题，暂时强制deep = true
    deep = true
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


  /**
   * 更新节点的非parent和children属性
   * @param {*} id 
   * @param {*} newNode 
   */
  updateNode (id, newNode) {
    const node = this.getNode(id)
    if (node && newNode) {
      for (let k in newNode) {
        if (k !== 'parent' && k !== 'children') {
          node[k] = newNode[k]
        }
      }

      this.states.nodesMap[node.id] = node
      render.call(this)
    }
  }


  /**
   * 获取选中的节点
   * @date 2018-11-13
   * @param {boolean} [useDisabled=false]
   * @returns {Array}
   * @memberof Tree
   */
  getCheckedNodes(useDisabled = false) {
    const isRadio = this.props.radio
    const nodes = []
    const finder = node => {
      if (isRadio && nodes.length) {
        return
      }
      if (node.checked) {
        if (!node.disabled || useDisabled) {
          nodes.push(node)
        }
      }
      if (node.children && node.children.length) {
        node.children.forEach(child => finder(child))
      }
    }
    this.states.nodes.forEach(node => finder(node))

    return nodes
  }


  /**
   * destroy
   * @date 2018-11-13
   * @memberof Tree
   */
  destroy() {
    unbindEvents.call(this)
    removeNode(this.states.$el)
    this.states = null
    this.props = null
    this._events = null
  }
}

export default Tree
