# Javascript DOM操作函数库

```javascript
import Dom '@vnnox/novaui/src/utils/dom'
```

## bind
> 绑定DOM事件

``` javascript
/**
 * @param {*} element 
 * @param {*} name 
 * @param {*} handle 
 */
Dom.bind(element, 'name', handle) // 语法

const clickHandle = event => {}
Dom.bind(document.body, 'click', clickHandle)
```

## unbind
> 解绑DOM事件

``` javascript
/**
 * @param {*} element 
 * @param {*} name 
 * @param {*} handle 
 */
Dom.unbind(element, 'name', handle) // 语法

const clickHandle = event => {}
Dom.unbind(document.body, 'click', clickHandle)
```

## once
> 绑定一次性事件，事件只执行一次

``` javascript
/**
 * @param {*} element 
 * @param {*} name 
 * @param {*} handle 
 */
Dom.once(element, 'name', handle) // 语法

const clickHandle = event => {}
Dom.once(document.body, 'click', clickHandle)
// 第一次点击 执行
// 后面的点击都不执行
```

## qsa
> DOM 选择器。统一API，返回一个DOM集合

``` javascript
/**
 * @param {*} selector 选择器
 * @param {*} context 父级上下文
 * @example 
 * @returns {Array} 
 */
Dom.qsa(selector, context) // 语法

Dom.qsa('#id') // [element]
Dom.qsa('.className') // [element]
Dom.qsa('input[type="radio"]', Dom.qsa('#id')[0]) // [element]
```

## proxy
> 生成一个代理事件执行函数。将子元素的事件绑定到父元素上，通过父元素去代理执行

``` javascript
/**
 * @param {*} element 
 * @param {*} selector 
 * @param {*} callback
 * @returns {Function}
 */
Dom.proxy(element, selector, callback) // 返回一个执行函数

const $ul = Dom.qsa('ul')[0]
const proxyHandle = Dom.proxy($ul, 'li', function() { })
Dom.bind($ul, 'click', proxyHandle) 
```

## getOffset
> 获取元素的位置信息

``` javascript
/**
 * @param {*} element 
 * @returns {Object}
 */
Dom.getOffset(element) // 返回 {top, left, rect}
```

## getStyle
> 获取元素计算后的样式

``` javascript
/**
 * @param {HTMLElement} element 
 * @param {String} style
 * @returns {String | Object} 
 */
Dom.getStyle(element, style) // 指定Style名称时，返回具体Style，不指定，返回全部Styles
```

## scrollTo
> 将元素滚动到指定位置

``` javascript
/**
 * @param {Element} element 具体元素
 * @param {Number} to 滚动位置
 * @param {Number} duration 滚动时长
 */
Dom.scrollTo(element, to, duration) 
```