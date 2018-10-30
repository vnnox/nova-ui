(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nova.ui"],{

/***/ "./src/components/input-number/index.js":
/*!**********************************************!*\
  !*** ./src/components/input-number/index.js ***!
  \**********************************************/
/*! exports provided: InputNumber, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumber", function() { return InputNumber; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/components/input-number/utils.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/components/input-number/template.js");
/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-10-29 11:32
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 11:32
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */





 // 选择器

const Selectors = {
  input: '.nv-input',
  increase: '.nv-input-number__increase',
  decrease: '.nv-input-number__decrease' // 默认配置

};
const defaults = {
  // 当前值
  value: null,
  // min value
  min: -Infinity,
  // max value
  max: Infinity,
  // step
  step: 1,
  // 精度
  precision: null,
  // 禁用
  disabled: false,
  // 输入框是否可输入，只允许控制按钮
  editable: true,
  // 输入框placeholder
  placeholder: null,
  // 输入框name属性
  name: null,
  // 宽度
  width: '130px',
  // 输入框尺寸
  size: 'default',
  // 自定义样式
  customClass: null,
  // 格式化
  formatter: null
  /**
   * render
   * @private
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   */

};

function render() {
  const {
    states,
    props
  } = this;

  if (states.$el) {
    return;
  }

  const $el = document.createElement('label');
  $el.className = 'nv-input-number';
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["addClass"])($el, props.customClass);
  let size;

  if (['large', 'small'].indexOf(props.size) > -1) {
    size = props.size;
  }

  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_5__["skeletonTpl"], {
    name: props.name,
    disabled: props.disabled,
    editable: props.editable,
    min: props.min,
    max: props.max,
    placeholder: props.placeholder,
    size
  });
  let width = props.width;

  if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isNumberString"])(width)) {
    width += 'px';
  }

  if (isNaN(parseFloat(width))) {
    width = defaults.width;
  }

  $el.style.width = width;
  states.$container.appendChild($el);
  states.$el = $el;
  states.$input = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.input, $el)[0];
  states.$increase = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.increase, $el)[0];
  states.$decrease = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.decrease, $el)[0];
  bindEvents.call(this);
}
/**
 * input change
 * @private
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 * @param {*} e
 */


function handleInputChange(e) {
  if (this.props.disabled) {
    return;
  }

  this.setValue(e.target.value);
}
/**
 * input keydown
 * @private
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 * @param {*} e
 */


function handleInputKeydown(e) {
  let code = e.keyCode;

  if (code === 38 || code === 39) {
    this.increase();
  } else if (code === 37 || code === 40) {
    this.decrease();
  }
}
/**
 * 绑定DOM事件
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 */


function bindEvents() {
  const {
    states
  } = this;
  const handles = states.handles;
  handles.increase = this.increase.bind(this);
  handles.decrease = this.decrease.bind(this);
  handles.inputChange = handleInputChange.bind(this);
  handles.inputKeydown = handleInputKeydown.bind(this);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["bind"])(states.$increase, 'click', handles.increase);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["bind"])(states.$decrease, 'click', handles.decrease);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["bind"])(states.$input, 'change', handles.inputChange);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["bind"])(states.$input, 'keydown', handles.inputKeydown);
}
/**
 * 解绑DOM事件
 * @private
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 */


function unbindEvents() {
  const {
    states
  } = this;
  const handles = states.handles;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$increase, 'click', handles.increase);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$decrease, 'click', handles.decrease);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$input, 'change', handles.inputChange);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$input, 'keydown', handles.inputKeydown);
}
/**
 * 递增
 * @private
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 * @param {*} val
 * @returns
 */


function increase(val) {
  const {
    props,
    states
  } = this;
  const {
    step,
    precision
  } = props;
  const {
    value
  } = states;

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(val) && val !== void 0) {
    return value;
  }

  const precisionFactor = Math.pow(10, precision);
  return toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor, precision);
}
/**
 * 递减
 * @private
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 * @param {*} val
 * @returns
 */


function decrease(val) {
  const {
    props,
    states
  } = this;
  const {
    step,
    precision
  } = props;
  const {
    value
  } = states;

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(val) && val !== void 0) {
    return value;
  }

  const precisionFactor = Math.pow(10, precision);
  return toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor, precision);
}
/**
 * 设置increase/decrease按钮禁用状态
 * @private
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 */


function toggleBtnDisabled() {
  let {
    states,
    props
  } = this;
  let {
    min,
    max
  } = props;
  let value = states.value || 0;
  let minDisabled = props.disabled || decrease.call(this, value || 0) < min;
  let maxDisabled = props.disabled || increase.call(this, value || 0) > max;
  let minMethod = minDisabled ? 'add' : 'remove';
  let maxMethod = maxDisabled ? 'add' : 'remove';
  states.$decrease.classList[minMethod]('nv-disabled');
  states.$increase.classList[maxMethod]('nv-disabled');
  states.$increase.setAttribute('aria-disabled', maxDisabled);
  states.$decrease.setAttribute('aria-disabled', minDisabled);
}
/**
 * 精确化值
 * @private
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 * @param {*} value
 * @param {*} precision
 * @returns
 */


function toPrecision(value, precision) {
  return parseFloat(parseFloat(Number(value).toFixed(precision)));
}
/**
 * 数字输入框
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 * @export
 * @class InputNumber
 * @extends {Events}
 */


class InputNumber extends _utils_events__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Creates an instance of InputNumber.
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @param {*} container
   * @param {*} options
   * @memberof InputNumber
   */
  constructor(container, options) {
    super();

    if (!(this instanceof InputNumber)) {
      return new InputNumber(container, options);
    }

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(container)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'container\' 必须是一个DOM容器', 'type');
    }

    this.states = Object.create(null);
    this.states.$container = container;
    this.states.handles = Object.create(null);
    this.initialize(options);
  }
  /**
   * 初始化
   * 当配置文件改变时调用
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @param {*} options
   * @memberof InputNumber
   */


  initialize(options) {
    this.props = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["correctProps"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {}));
    const {
      states
    } = this;
    render.call(this);
    states.value = '';
    states.oldValue = '';
    this.setValue(this.props.value);
  }
  /**
   * 设置值
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @param {*} newValue
   * @memberof InputNumber
   */


  setValue(newValue) {
    const {
      props,
      states
    } = this;
    let {
      oldValue
    } = states;
    const {
      precision,
      min,
      max
    } = props;
    newValue = parseFloat(newValue, 10);

    if (isNaN(newValue)) {
      newValue = oldValue;
    } // oldValue === ''


    let valueStr = '';

    if (newValue !== '') {
      newValue = toPrecision(newValue, precision);

      if (newValue >= max) {
        newValue = max;
      }

      if (newValue <= min) {
        newValue = min;
      }

      valueStr = newValue.toFixed(precision);
    }

    let formatValue = props.formatter && props.formatter(valueStr);
    states.$input.value = formatValue || valueStr;

    if (oldValue !== newValue) {
      states.value = newValue;
      states.oldValue = newValue;
      this.emit('change', newValue, oldValue);
    }

    states.$input.setAttribute('aria-valuenow', formatValue || newValue); // toggle btn disabled

    toggleBtnDisabled.call(this);
  }
  /**
   * 获取值
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @returns
   * @memberof InputNumber
   */


  getValue() {
    return this.states.value;
  }
  /**
   * 递增
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @memberof InputNumber
   */


  increase() {
    const {
      states,
      props
    } = this;
    let newValue = increase.call(this, states.value || 0);

    if (props.disable || newValue > props.max) {
      return;
    }

    this.setValue(newValue);
  }
  /**
   * 递减
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @memberof InputNumber
   */


  decrease() {
    const {
      states,
      props
    } = this;
    let newValue = decrease.call(this, states.value || 0);

    if (props.disable || newValue < props.min) {
      return;
    }

    this.setValue(newValue);
  }
  /**
   * 禁用
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @memberof InputNumber
   */


  disable() {
    this.props.disabled = true;
    const {
      states
    } = this;
    states.$el.classList.add('nv-disabled');
    states.$input.setAttribute('disabled', true);
    states.$input.setAttribute('aria-disabled', true);
    toggleBtnDisabled.call(this);
  }
  /**
   * 启用
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @memberof InputNumber
   */


  enable() {
    this.props.disabled = false;
    const {
      states
    } = this;
    states.$el.classList.remove('nv-disabled');
    states.$input.removeAttribute('disabled');
    states.$input.setAttribute('aria-disabled', false);
    toggleBtnDisabled.call(this);
  }
  /**
   * 销毁
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @memberof InputNumber
   */


  destroy() {
    unbindEvents.call(this);
    this.states.$el && this.states.$el.parentNode && this.states.$el.parentNode.removeChild(this.states.$el);
    this.states = null;
    this._events = null;
  }

}
/* harmony default export */ __webpack_exports__["default"] = (InputNumber);

/***/ }),

/***/ "./src/components/input-number/template.js":
/*!*************************************************!*\
  !*** ./src/components/input-number/template.js ***!
  \*************************************************/
/*! exports provided: skeletonTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
const skeletonTpl = `
<input type="text" class="nv-input<% if(size) {%> nv-input--<%=size%><% }%>" placeholder="<%= placeholder%>" name="<%= name%>" role="spinbutton" autocomplete="off" aria-valuemin="<%= min%>" aria-valuemax="<%= max%>" aria-valuenow="" aria-disabled="<%= disabled%>"<% if (!editable) {%> readonly<% }%><% if (disabled) {%> disabled<% }%>/>
<a class="nv-input-number__increase" role="button" aria-label="Increase Value" aria-disabled="<%=disabled%>"></a>
<a class="nv-input-number__decrease" role="button" aria-label="Decrease Value" aria-disabled="<%=disabled%>"></a>
`;
/* harmony default export */ __webpack_exports__["default"] = (skeletonTpl);

/***/ }),

/***/ "./src/components/input-number/utils.js":
/*!**********************************************!*\
  !*** ./src/components/input-number/utils.js ***!
  \**********************************************/
/*! exports provided: getPrecision, correctProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrecision", function() { return getPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctProps", function() { return correctProps; });
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
const getPrecision = (precision, step) => {
  let value = 0;

  if (precision && precision > 0) {
    precision = +precision;

    if (!isNaN(precision)) {
      value = precision;
    }
  } else if (step) {
    const stepStr = step.toString();
    const dotPosition = stepStr.indexOf('.');

    if (dotPosition !== -1) {
      value = stepStr.length - dotPosition - 1;
    }
  }

  return value;
};
/**
 * 校正参数
 * @param {*} props 
 * @returns {Object}
 */

const correctProps = props => {
  let {
    min,
    max,
    step
  } = props;
  min = parseFloat(min, 10);
  max = parseFloat(max, 10);
  step = parseFloat(step, 10);
  min = isNaN(min) ? -Infinity : min;
  max = isNaN(max) ? Infinity : max;
  step = isNaN(step) ? 1 : step;

  if (min > max) {
    let t = max;
    max = min;
    min = t;
  }

  props.min = min;
  props.max = max;
  props.step = step;
  props.precision = getPrecision(props.precision, step);
  return props;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getPrecision,
  correctProps
});

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: bind, unbind, once, qsa, proxy, getOffset, getStyle, insertAfter, addClass, getScrollbarWidth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return unbind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qsa", function() { return qsa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return getOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");
/*
 * File: dom.js
 * Project: @vnnox/novaui
 * Description: DOM 操作类
 * Created: 2018-10-29 10:57
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 10:58
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */
 // selector

const SELECTOR_REGS = {
  id: /^#([\w-]+)$/,
  className: /^\.([\w-]+)$/,
  tagName: /^[\w-]+$/
  /**
   * 绑定DOM事件
   * @param {*} el 
   * @param {*} name 
   * @param {*} handle 
   */

};
const bind = (el, name, handle) => el.addEventListener(name, handle, false);
/**
 * 解绑DOM事件
 * @param {*} el 
 * @param {*} name 
 * @param {*} handle 
 */

const unbind = (el, name, handle) => el.removeEventListener(name, handle, false);
/**
 * 绑定一次性事件
 * @param {*} el 
 * @param {*} name 
 * @param {*} handle 
 */

const once = (el, name, handle) => {
  // 中间事件
  const listener = function () {
    handle && handle.apply(this, arguments); // 解绑中间事件

    unbind(el, name, listener);
  }; // 绑定中间事件


  bind(el, name, listener);
};
/**
 * DOM 选择器
 * 统一API，返回一个DOM集合
 * @param {*} selector 选择器
 * @param {*} context 父级上下文
 * @example 
 * qsa('#id')
 * qsa('.className')
 * qsa('input[type="radio"]', qsa('#id')[0])
 * @returns {Array} 
 */

const qsa = (selector, context) => {
  context = context || document;

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(selector)) {
    selector = selector.trim();
    let dom;

    if (SELECTOR_REGS.id.test(selector)) {
      dom = document.getElementById(RegExp.$1);
      dom = dom ? [dom] : [];
    } else if (SELECTOR_REGS.className.test(selector)) {
      dom = context.getElementsByClassName(RegExp.$1);
    } else if (SELECTOR_REGS.tagName.test(selector)) {
      dom = context.getElementsByTagName(selector);
    } else {
      dom = context.querySelectorAll(selector);
    }

    return dom ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["toArray"])(dom) : [];
  }

  return [];
};
/**
 * 生成一个代理事件执行函数
 * @param {*} element 
 * @param {*} selector 
 * @param {*} callback
 * @example
 * const $ul = qsa('ul')[0]
 * let proxyHandle = proxy($ul, 'li', function() { })
 * bind($ul, 'click', proxyHandle) 
 * @returns {Function}
 */

const proxy = function (element, selector, callback) {
  return function (event) {
    const nodes = qsa(selector, element);
    let matched;
    const target = event.target;

    for (let i = 0, len = nodes.length; i < len; i++) {
      const node = nodes[i];

      if (node === target || node.contains(target)) {
        matched = node;
        break;
      }
    }

    if (matched) {
      callback.apply(matched, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["toArray"])(arguments));
    }
  };
};
/**
 * 获取元素的位置信息
 * @param {*} element
 * @returns {Object} 
 */

const getOffset = element => {
  let rect = element.getBoundingClientRect();
  let win = element.ownerDocument.defaultView;
  let top = rect.top + win.pageYOffset;
  let left = rect.left + win.pageXOffset;
  return {
    top,
    left,
    rect
  };
};
/**
 * 获取元素计算后的样式
 * @param {HTMLElement} element 
 * @param {String} style
 * @returns {String | Object} 
 */

const getStyle = (element, style) => {
  let styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
  return style ? styles[style] : styles;
};
/**
 * 插入到目标元素之后
 * @param {*} target 目标元素 
 * @param {*} node 新元素
 * @returns {*}
 */

const insertAfter = (target, node) => {
  const $parent = target.parentNode;

  if ($parent.lastChild === target) {
    $parent.appendChild(node);
  } else {
    $parent.insertBefore(node, target.nextSibling);
  }

  return node;
};
/**
 * 添加样式
 * @param {*} el 
 * @param {string|array} className 
 */

const addClass = (el, className) => {
  let classList = [];

  if (className) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(className)) {
      classList = className.split(/,|\s+/);
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(className)) {
      classList = className;
    }
  }

  classList.forEach(name => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(name) && name.trim() && el.classList.add(name.trim()));
};
/**
 * 获取滚动条的宽度
 * @returns {Number} 
 */

const getScrollbarWidth = () => {
  if (getScrollbarWidth.value !== void 0) {
    return getScrollbarWidth.value;
  }

  const scrollDiv = document.createElement('div');
  scrollDiv.style.cssText += 'width:100px;position:absolute;top:-9999rem;z-index:-1;visibility:hidden;';
  document.body.appendChild(scrollDiv);
  scrollDiv.style.overflow = 'scroll';
  const width = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  scrollDiv.parentNode.removeChild(scrollDiv);
  getScrollbarWidth.value = width;
  return getScrollbarWidth.value;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  bind,
  unbind,
  once,
  getOffset,
  getStyle,
  insertAfter,
  qsa,
  proxy,
  addClass,
  getScrollbarWidth
});

/***/ }),

/***/ "./src/utils/events.js":
/*!*****************************!*\
  !*** ./src/utils/events.js ***!
  \*****************************/
/*! exports provided: Events, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");
/*
 * File: events.js
 * Project: @vnnox/novaui
 * Description: 发布订阅器类
 * Created: 2018-10-29 11:27
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 11:27
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

/**
 * 发布订阅器类
 * @author smohan(mengxw@novastar.tech)
 * @date 2018-10-29
 * @export
 * @class Events
 */

class Events {
  /**
   * Creates an instance of Events.
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @memberof Events
   */
  constructor() {
    this._events = Object.create(null);
  }
  /**
   * 注册事件
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @param {*} name
   * @param {*} handle
   * @param {*} context
   * @returns
   * @memberof Events
   */


  on(name, handle, context) {
    if (!name || !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handle)) {
      return this;
    }

    const _events = this._events[name] || (this._events[name] = []);

    const event = Object.create(null);
    event.id = _events.length;
    event.handle = handle;
    event.context = context;

    _events.push(event);

    return this;
  }
  /**
   * 解绑事件
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @param {*} name
   * @param {*} handle
   * @param {*} context
   * @returns
   * @memberof Events
   */


  off(name, handle, context) {
    if (!name || !this._events[name]) {
      return this;
    } // 如果指定了handle


    if (handle && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handle)) {
      let _events = this._events[name];

      _events.forEach(event => {
        // 匹配相同引用的handle
        if (event && handle === (event.handle || event.handle._handle) && (!context || event.context === context)) {
          // 删除索引为event.id的事件  
          delete _events[event.id];
        }
      }); // 如果当前队列已空，则移除该名称事件


      if (!_events.length) {
        delete this._events[name];
      }
    } // 解绑所有同名事件
    else if (handle === null) {
        delete this._events[name];
      }

    return this;
  }
  /**
   * 一次性事件绑定
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @param {*} name
   * @param {*} handle
   * @param {*} context
   * @returns
   * @memberof Events
   */


  one(name, handle, context) {
    if (!name || !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handle)) {
      return this;
    }

    const self = this;

    const once = function () {
      self.off(name, once, context);
      return handle.apply(context || self, arguments);
    };

    once._handle = handle;
    this.on(name, once, context);
    return this;
  }
  /**
   * 触发事件
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @param {*} name
   * @param {*} args
   * @returns
   * @memberof Events
   */


  emit(name, ...args) {
    if (!name || !this._events[name]) {
      return this;
    }

    let len = this._events[name].length;
    let i = -1; // 依次执行事件队列

    while (++i < len) {
      let event = this._events[name][i];
      event.handle.apply(event.context || this, args);
    }

    return this;
  }
  /**
   * 销毁
   * @author smohan(mengxw@novastar.tech)
   * @date 2018-10-29
   * @memberof Events
   */


  destroy() {
    this._events = null;
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/utils/template.js":
/*!*******************************!*\
  !*** ./src/utils/template.js ***!
  \*******************************/
/*! exports provided: template, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/*
 * File: template.js
 * Project: @vnnox/novaui
 * Description: 模板编译类
 * Created: 2018-10-29 03:39
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 03:41
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */
// 变量规则
const VARIABLE_REG = /<%=([\s\S]+?)%>/g; // 语法规则

const SYNTAX_REG = /<%([\s\S]+?)%>/g;
/**
 * 编译模板
 * @param {*} tpl 
 * @param {*} data
 * @example
 * <% if(something) {%>
 * <div><%= something%></div>
 * <% }%> 
 * @returns {String}
 */

const template = (tpl, data) => {
  // 不包含变量的话直接返回tpl
  if (!tpl || !~tpl.indexOf('<%')) {
    return tpl;
  }

  let source = 'var __p=[];' + 'with(obj||{}){__p.push(\'' + tpl.replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(VARIABLE_REG, (m, code) => {
    return '\',' + code.replace(/\\'/, '\'') + ',\'';
  }).replace(SYNTAX_REG, (m, code) => {
    return '\');' + code.replace(/\\'/, '\'').replace(/[\r\n\t]/g, ' ') + '__p.push(\'';
  }).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + '\');}return __p.join("");';

  try {
    let render = new Function('obj', source);
    return render.call(null, data || Object.create(null));
  } catch (error) {
    // todo
    return tpl;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: isString, isObject, isPlainObject, isArray, isFunction, isPrimitive, isBoolean, isNumber, isNumberString, isInteger, isFloat, isElement, isDate, isEmpty, hasKey, toArray, mixins, objectClone, hyphenate, escapeRegExp, getObjectValue, uuid, throwError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberString", function() { return isNumberString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFloat", function() { return isFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasKey", function() { return hasKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return mixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectClone", function() { return objectClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectValue", function() { return getObjectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/*
 * File: utils.js
 * Project: @vnnox/novaui
 * Description: 工具函数类
 * Created: 2018-10-29 10:31
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-10-29 10:36
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */
const SLICE = Array.prototype.slice;
const TOSTRING = Object.prototype.toString;
const HASOWN = Object.prototype.hasOwnProperty;
const PRIMITIVE_VALUES = ['string', 'number', 'boolean', 'symbol', 'undefined'];
const NUMBER_REG = /^-?\d*\.?\d+$/;
/**
 * 校验传入值是否是字符串
 * @param {*} value
 * @returns {Boolean} 
 */

const isString = value => typeof value === 'string';
/**
 * 校验传入值是否是对象
 * @param {*} value 
 * @returns {Boolean} 
 */

const isObject = value => value !== null && typeof value === 'object';
/**
 * 校验传入值是否是纯对象
 * @param {*} value 
 * @example
 * isPlainObject({}) // true
 * isPlainObject(null) // false
 * isPlainObject([]) // false
 * @returns {Boolean} 
 */

const isPlainObject = value => isObject(value) && TOSTRING.call(value) === '[object Object]';
/**
 * 校验传入值是否是数组
 * @returns {Boolean}
 */

const isArray = Array.isArray;
/**
 * 校验传入值是否是函数
 * @param {*} value 
 * @returns {Boolean}
 */

const isFunction = value => typeof value === 'function';
/**
 * 校验传入值是否是基本类型值
 * @param {*} value 
 * @returns {Boolean}
 */

const isPrimitive = value => !!~PRIMITIVE_VALUES.indexOf(typeof value);
/**
 * 校验传入值是否是布尔类型
 * @param {*} value 
 * @returns {Boolean}
 */

const isBoolean = value => typeof value === 'boolean';
/**
 * 校验传入值是否是数字
 * @param {*} value 
 * @returns {Boolean}
 */

const isNumber = value => !isNaN(value) && typeof value === 'number';
/**
 * 校验传入值是否是数字字符串
 * @param {*} value
 * @returns {Boolean} 
 */

const isNumberString = value => NUMBER_REG.test(value);
/**
 * 校验传入值是否是整数
 * @param {*} value 
 * @returns {Boolean}
 */

const isInteger = value => isNumber(value) && value % 1 === 0;
/**
 * 校验传入值是否是浮点数
 * @param {*} value 
 * @returns {Boolean}
 */

const isFloat = value => isNumber(value) && value !== value | 0;
/**
 * 校验传入值是否是一个DOM元素
 * @param {*} value 
 * @returns {Boolean}
 */

const isElement = value => isObject(value) && value.nodeType === 1 && !isPlainObject(value);
/**
 * 校验传入值是否是一个日期对象
 * @param {*} value 
 * @returns {Boolean}
 */

const isDate = value => TOSTRING.call(value) === '[object Date]' && !isNaN(value.getTime());
/**
 * 校验传入值是否为空
 * @param {*} value 
 * @example
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty('') // true
 * isEmpty('  ') // true
 * isEmpty(false) // false
 * isEmpty(0) // false
 * @returns {Boolean}
 */

const isEmpty = value => {
  if (value === null || value === void 0) {
    return true;
  }

  if (isString(value) && !value.trim()) {
    return true;
  }

  return false;
};
/**
 * 判断对象自身是否含有指定的key
 * @param {*} key 
 * @param {*} object 
 * @returns {Boolean}
 */

const hasKey = (key, object) => HASOWN.call(object, key);
/**
 * 将类数组转换为数组
 * @param {*} arrayLike
 * @returns {Array} 
 */

const toArray = arrayLike => SLICE.call(arrayLike);
/**
 * 对象混合
 * arg1 :
 *  Boolean: 是否深拷贝
 *  Object: targe
 * arg2, arg2, ..., argn: source
 * @returns {Object}
 */

function mixins() {
  let target = arguments[0] || {};
  let i = 0;
  let deep = false;
  let len = arguments.length;

  if (isBoolean(target)) {
    deep = target;
    target = arguments[1] || {};
    i = 1;
  }

  if (!isObject(target) && !isFunction(target)) {
    target = {};
  }

  while (i++ < len) {
    let source = arguments[i];

    if (source) {
      for (let k in source) {
        let src = target[k];
        let copy = source[k]; // 防止引用自身，造成死循环

        if (copy === target) {
          continue;
        }

        let _isArray = isArray(copy);

        if (deep && (_isArray || isPlainObject(copy))) {
          let clone;

          if (_isArray) {
            clone = src && isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          target[k] = mixins(deep, clone, copy);
        } else if (copy !== void 0) {
          target[k] = copy;
        }
      }
    }
  }

  return target;
}
/**
 * 纯对象克隆
 * @param {*} object
 * @returns {Object} 
 */

const objectClone = object => JSON.parse(JSON.stringify(object));
const hyphenateRE = /\B([A-Z])/g;
/**
 * 驼峰转连接符
 * @param {*} str
 * @example
 * hyphenate('fadeIn') // fade-in
 * hyphenate('easeInOut') // ease-in-out
 * @returns {String} 
 */

const hyphenate = str => str.replace(hyphenateRE, '-$1').toLowerCase();
/**
 * 对传入regExp的字符串转义
 * 搜索框中进行模糊匹配的时候
 * 需要对敲入的特殊字符进行转义
 * @param {*} value 
 * @returns {RegExp}
 */

const escapeRegExp = value => value.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&');
/**
 * 根据路径从一个对象中获取其值
 * 内置了容错机制，防止层级太深时报错
 * @param {*} path 
 * @param {*} object 
 * @example
 * getObjectValue(p1.p1, obj) // obj.p1.p2
 * @returns {*}
 */

const getObjectValue = (path, object) => {
  if (isEmpty(path)) {
    return void 0;
  }

  let paths = path.trim().split('.');

  while (paths.length) {
    let k = paths.shift();
    object = object[k];

    if (!isPlainObject(object) && !isArray(object)) {
      break;
    }
  }

  return object;
};
let uid = 0;
/**
 * gen uuid
 * @returns {Number}
 */

const uuid = () => ++uid;
/**
 * 抛出异常
 * @param {*} message 
 * @param {*} type 
 */

const throwError = (message, type) => {
  message = `[NOVA.UI.ERROR] ${message.toString()}`;
  let method;

  switch (type) {
    case 'type':
      method = TypeError;
      break;

    case 'range':
      method = RangeError;
      break;

    default:
      method = Error;
  }

  throw new method(message);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  isString,
  isObject,
  isPlainObject,
  isArray,
  isFunction,
  isPrimitive,
  isBoolean,
  isNumber,
  isInteger,
  isFloat,
  isElement,
  isDate,
  isEmpty,
  hasKey,
  toArray,
  mixins,
  objectClone,
  hyphenate,
  escapeRegExp,
  getObjectValue,
  uuid,
  throwError
});

/***/ })

}]);
//# sourceMappingURL=nova.ui.js.map