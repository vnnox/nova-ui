
/*
* File: node.js
* Project: @vnnox/novaui
* Description: Used for ...
* Created: 2018-11-12 09:04
* Author: smohan (mengxw@novastar.tech)
* -----
* Last Modified: 2018-11-12 09:04
* Modified By: smohan (mengxw@novastar.tech>)
* -----
* Copyright 2018, NovaStar Tech Co., Ltd
*/

import { uuid, isPlainObject, hasKey, throwError, encodeHtml } from '../../utils/utils'

// 节点状态
const STATES = ['checked', 'disabled', 'expanded', 'visible']


/**
 * 递归查找子节点
 * 返回子节点或者子节点的ID与target匹配的节点
 * @private
 * @param {*} node
 * @param {*} target
 * @param {*} deep
 * @returns {Node | void}
 */
function findChild(node, target, deep) {
  const children = node.children
  let i = -1
  let len = children.length
  let child
  while (++i < len && !child) {
    if (children[i] === target || (children[i].id === target)) {
      child = children[i]
      break
    }
    if (deep) {
      child = findChild(children[i], target, deep)
    }
  }
  return child
}


/**
 * 递归更新子节点的parent和level
 * @private
 * @param {*} node
 * @param {*} parent
 */
function updateChildenLevel(node, parent) {
  const children = node.children || []
  let i = -1
  let len = children.length
  let child
  while (++i < len) {
    child = children[i]
    if (parent) {
      parent.insertChild(child)
    } else {
      child.parent = null
      child.level = 0
    }
    updateChildenLevel(child, child)
  }
}


/**
 * Node 
 * @date 2018-11-12
 * @export
 * @class Node
 */
export class Node {

  /**
   * Creates an instance of Node.
   * @date 2018-11-12
   * @param {*} data
   * @memberof Node
   */
  constructor(data) {
    this.id = uuid()
    this.label = ''
    this.checked = false
    this.disabled = false
    this.expanded = false
    this.visible = true
    this.parent = null
    // 覆盖属性
    if (data && isPlainObject(data)) {
      for (let k in data) {
        if (hasKey(k, data)) {
          this[k] = data[k]
        }
      }
    }
    this.label = encodeHtml(this.label || '')
    this.level = 0
    this.children = []
    if (this.parent) {
      // 当前的层级等于parentNode的层级+1
      this.level = this.parent.level + 1
    }
  }


  /**
   * 获取子元素的索引
   * @public
   * @param {*} child
   * @returns
   * @memberof Node
   */
  getChildIndex(child) {
    if (child instanceof Node) {
      return this.children.indexOf(child)
    }
    let index = -1
    let i = -1
    let len = this.children.length
    while (++i < len) {
      if (this.children[i].id === child) {
        index = i
        break
      }
    }
    return index
  }


  /**
   * 插入子节点
   * @public
   * @param {Object | Node} child
   * @param {Number} index 插入位置
   * @memberof Node
   */
  insertChild(child, index) {
    if (!child) {
      throwError('child is required.')
    }
    // 如果待插入的子节点不是一个Node
    if (!(child instanceof Node)) {
      child = new Node(child)
    }
    
    child.parent = this
    child.level = this.level + 1
    if (typeof index === void 0 || index < 0 || isNaN(+index)) {
      this.children.push(child)
    } else {
      this.children.splice(+index, 0, child)
    }
    return child
  }


  /**
   * 移除指定的子节点
   * 当deep为true时，将会移除节点及其节点的子节点
   * 当deep为fasle时，只会移除指定节点，节点的子节点将会移动到它的上一级
   * @param {*} child
   * @param {boolean} [deep=true]
   * @memberof Node
   */
  removeChild(child, deep = true) {
    let index = this.getChildIndex(child)
    if (index > -1) {
      if (!deep) {
        // 更新待删除子元素的子元素的parent和level
        // 将其子元素的parent更新为所在的上一级
        updateChildenLevel(child, this)
      }
      child.parent = null
      this.children.splice(index, 1)
    }
  }


  /**
   * 在目标子元素之前插入子元素
   * @public
   * @param {*} node
   * @param {*} target
   * @memberof Node
   */
  insertBefore(node, target) {
    let index = this.getChildIndex(target)
    this.insertChild(node, index)
  }


  /**
   * 在目标子元素之后插入子元素
   * @public
   * @param {*} node
   * @param {*} target
   * @memberof Node
   */
  insertAfter(node, target) {
    let index = this.getChildIndex(target)
    if (index > -1) {
      index++
    }
    this.insertChild(node, index)
  }


  /**
   * 移除当前节点
   * @param {boolean} [deep=true]
   * @memberof Node
   */
  remove(deep = true) {
    const parent = this.parent
    if (parent) {
      parent.removeChild(this, deep)
    }
  }


  /**
   * 查找父节点
   * 如果指定了ID，将会查找匹配到的parent
   * 否则，返回当前node的第一级parent
   * @param {*} id
   * @returns {Node | null}
   * @memberof Node
   */
  findParent(id) {
    if (id) {
      let parent = this.parent
      while (parent) {
        if (parent.id === id) {
          return parent
        }
        parent = parent.parent
      }
      return null
    }
    return this.parent
  }


  /**
   * 是否包含某个特定的子节点`target`
   * 或者某个子节点的ID === target
   * @public
   * @param {*} target
   * @param {boolean} [deep=true]
   * @returns {boolean}
   * @memberof Node
   */
  contains(target, deep = true) {
    return !!findChild(this, target, deep)
  }


  /**
   * 返回上一个兄弟节点
   * @public
   * @returns
   * @memberof Node
   */
  nextSibling() {
    const parent = this.parent
    // 如果存在父级节点
    if (parent) {
      let currentIndex = parent.children.indexOf(this)
      // 存在且不是第一个节点
      if (currentIndex > 0) {
        return parent.children[currentIndex - 1]
      }
    }
    return null
  }


  /**
   * 返回下一个兄弟节点
   * @public
   * @returns
   * @memberof Node
   */
  previousSibling() {
    const parent = this.parent
    // 如果存在父级节点
    if (parent) {
      let currentIndex = parent.children.indexOf(this)
      // 存在且不是最后一个节点
      if (currentIndex > -1 && currentIndex < parent.children.length - 1) {
        return parent.children[currentIndex + 1]
      }
    }
    return null
  }


  /**
   * 更新节点的部分状态
   * @date 2018-11-12
   * @param {*} key
   * @param {*} value
   * @memberof Node
   */
  updateStates(key, value) {
    let args = arguments
    let states = Object.create(null)
    if (args.length === 1 && isPlainObject(key)) {
      states = key
    } else if (args.length === 2) {
      states[key] = value
    }
    for (let k in states) {
      if (STATES.indexOf(k) > -1) {
        this[k] = states[k]
      }
    }
  }

}

export default Node