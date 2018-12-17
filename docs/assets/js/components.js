/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"components": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./examples/entries/components.js","nova.ui","template"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/assets/router.js":
/*!***********************************!*\
  !*** ./examples/assets/router.js ***!
  \***********************************/
/*! exports provided: Router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Router =
/*#__PURE__*/
function () {
  function Router(onchange) {
    _classCallCheck(this, Router);

    this.routers = Object.create(null);
    this.url = '';
    this.onchange = onchange;
  }

  _createClass(Router, [{
    key: "set",
    value: function set(url, cb) {
      url = Router.getPath(url);
      this.routers[url] = cb && typeof cb === 'function' ? cb : function () {};
      return this;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this = this;

      var oldPath = this.url;
      this.url = Router.getPath();
      var callback = this.routers[this.url];

      if (!callback) {
        window.location.hash = '#/';
        return;
      }

      this.onchange && this.onchange.call(this, this.url, oldPath);
      setTimeout(function () {
        callback && callback.call(_this, _this.url, oldPath);
      }, 0);
      return this;
    }
  }, {
    key: "init",
    value: function init() {
      this.url = Router.getPath();
      window.addEventListener('load', this.refresh.bind(this), false);
      window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
  }], [{
    key: "getPath",
    value: function getPath(url) {
      url = url || window.location.hash;
      url = url.replace(/^#/, '').replace(/^\/*|\/*$/g, '').trim();
      return url;
    }
  }]);

  return Router;
}();
/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./examples/assets/scss/index.scss":
/*!*****************************************!*\
  !*** ./examples/assets/scss/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./examples/entries/components.js":
/*!****************************************!*\
  !*** ./examples/entries/components.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index.js */ "./src/index.js");
__webpack_require__(/*! ../../src/scss/index.scss */ "./src/scss/index.scss");

__webpack_require__(/*! ../assets/scss/index.scss */ "./examples/assets/scss/index.scss");

document.getElementById('head').innerHTML = __webpack_require__(/*! html-loader?interpolate!./header.html */ "./node_modules/html-loader/index.js?interpolate!./examples/entries/header.html");

__webpack_require__(/*! ./router.components */ "./examples/entries/router.components.js");


window.Nova = _src_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./examples/entries/router.components.js":
/*!***********************************************!*\
  !*** ./examples/entries/router.components.js ***!
  \***********************************************/
/*! exports provided: router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _assets_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/router */ "./examples/assets/router.js");
 // Native

var Button = __webpack_require__(/*! ../docs/components/button.md */ "./examples/docs/components/button.md");

var Icon = __webpack_require__(/*! ../docs/components/icon.md */ "./examples/docs/components/icon.md");

var Input = __webpack_require__(/*! ../docs/components/input.md */ "./examples/docs/components/input.md");

var Checkbox = __webpack_require__(/*! ../docs/components/checkbox.md */ "./examples/docs/components/checkbox.md");

var Radio = __webpack_require__(/*! ../docs/components/radio.md */ "./examples/docs/components/radio.md");

var Switch = __webpack_require__(/*! ../docs/components/switch.md */ "./examples/docs/components/switch.md");

var Modal = __webpack_require__(/*! ../docs/components/modal.md */ "./examples/docs/components/modal.md");

var Breadcrumb = __webpack_require__(/*! ../docs/components/breadcrumb.md */ "./examples/docs/components/breadcrumb.md");

var Badge = __webpack_require__(/*! ../docs/components/badge.md */ "./examples/docs/components/badge.md");

var InputNumber = __webpack_require__(/*! ../docs/components/input-number.md */ "./examples/docs/components/input-number.md");

var Table = __webpack_require__(/*! ../docs/components/table.md */ "./examples/docs/components/table.md");

var Tree = __webpack_require__(/*! ../docs/components/tree.md */ "./examples/docs/components/tree.md");

var Select = __webpack_require__(/*! ../docs/components/select.md */ "./examples/docs/components/select.md");

var Pagination = __webpack_require__(/*! ../docs/components/pagination.md */ "./examples/docs/components/pagination.md");

var Slider = __webpack_require__(/*! ../docs/components/slider.md */ "./examples/docs/components/slider.md");

var Alert = __webpack_require__(/*! ../docs/components/alert.md */ "./examples/docs/components/alert.md");

var Message = __webpack_require__(/*! ../docs/components/message.md */ "./examples/docs/components/message.md");

var MessageBox = __webpack_require__(/*! ../docs/components/message-box.md */ "./examples/docs/components/message-box.md");

var Popover = __webpack_require__(/*! ../docs/components/popover.md */ "./examples/docs/components/popover.md");

var Tag = __webpack_require__(/*! ../docs/components/tag.md */ "./examples/docs/components/tag.md");

var Loader = __webpack_require__(/*! ../docs/components/loader.md */ "./examples/docs/components/loader.md");

var ColorPicker = __webpack_require__(/*! ../docs/components/color-picker.md */ "./examples/docs/components/color-picker.md");

var DatePicker = __webpack_require__(/*! ../docs/components/date-picker.md */ "./examples/docs/components/date-picker.md");

<<<<<<< HEAD
var TimePicker = __webpack_require__(/*! ../docs/components/time-picker.md */ "./examples/docs/components/time-picker.md"); // Vue
=======
var TimePicker = __webpack_require__(/*! ../docs/components/time-picker.md */ "./examples/docs/components/time-picker.md");

var ScrollLoad = __webpack_require__(/*! ../docs/components/scroll-load.md */ "./examples/docs/components/scroll-load.md"); // Vue
>>>>>>> 084085f4a60362c717d3e812e65d2ec59bfa1cef


var RadioVue = __webpack_require__(/*! ../docs/components/vue/radio.md */ "./examples/docs/components/vue/radio.md");

var CheckboxVue = __webpack_require__(/*! ../docs/components/vue/checkbox.md */ "./examples/docs/components/vue/checkbox.md");

var SwitchVue = __webpack_require__(/*! ../docs/components/vue/switch.md */ "./examples/docs/components/vue/switch.md");

var InputNumberVue = __webpack_require__(/*! ../docs/components/vue/input-number.md */ "./examples/docs/components/vue/input-number.md");

var TreeVue = __webpack_require__(/*! ../docs/components/vue/tree.md */ "./examples/docs/components/vue/tree.md");

var SelectVue = __webpack_require__(/*! ../docs/components/vue/select.md */ "./examples/docs/components/vue/select.md");

var PaginationVue = __webpack_require__(/*! ../docs/components/vue/pagination.md */ "./examples/docs/components/vue/pagination.md");

var SliderVue = __webpack_require__(/*! ../docs/components/vue/slider.md */ "./examples/docs/components/vue/slider.md");

var ModalVue = __webpack_require__(/*! ../docs/components/vue/modal.md */ "./examples/docs/components/vue/modal.md");

var AlertVue = __webpack_require__(/*! ../docs/components/vue/alert.md */ "./examples/docs/components/vue/alert.md");

var MessageVue = __webpack_require__(/*! ../docs/components/vue/message.md */ "./examples/docs/components/vue/message.md");

var MessageBoxVue = __webpack_require__(/*! ../docs/components/vue/message-box.md */ "./examples/docs/components/vue/message-box.md");

var PopoverVue = __webpack_require__(/*! ../docs/components/vue/popover.md */ "./examples/docs/components/vue/popover.md");

var TagVue = __webpack_require__(/*! ../docs/components/vue/tag.md */ "./examples/docs/components/vue/tag.md");

var LoaderVue = __webpack_require__(/*! ../docs/components/vue/loader.md */ "./examples/docs/components/vue/loader.md");

var ColorPickerVue = __webpack_require__(/*! ../docs/components/vue/color-picker.md */ "./examples/docs/components/vue/color-picker.md");

var DatePickerVue = __webpack_require__(/*! ../docs/components/vue/date-picker.md */ "./examples/docs/components/vue/date-picker.md");

var TimePickerVue = __webpack_require__(/*! ../docs/components/vue/time-picker.md */ "./examples/docs/components/vue/time-picker.md");

<<<<<<< HEAD
=======
var ScrollLoadVue = __webpack_require__(/*! ../docs/components/vue/scroll-load.md */ "./examples/docs/components/vue/scroll-load.md");

>>>>>>> 084085f4a60362c717d3e812e65d2ec59bfa1cef
var $contianerNative = document.getElementById('container-native');
var $contianerVue = document.getElementById('container-vue');
var $tabWrap = document.getElementById('doc-tabs');
var $navItems = document.querySelectorAll('.app-aside__nav .nav-group__item > a'); // 高亮选中菜单

function toggleNavClass() {
  var hash = window.location.hash.slice(1);
  $navItems.forEach(function ($nav) {
    var href = $nav.href;
    var actived = false;

    if (href.indexOf(hash) > -1) {
      actived = true;
    }

    $nav.parentNode.classList[actived ? 'add' : 'remove']('actived');
  });
}
/**
 * set page
 * @param {*} pages 
 * @param {*} title 
 * @param {*} cb 
 */


function setPage(pages, title, cb) {
  return function () {
    var len = Object.keys(pages).length;

    if (len === 1) {
      $tabWrap.style.display = 'none';
    } else {
      $tabWrap.style.display = null;
    }

    $contianerNative.innerHTML = pages.native;
    $contianerVue.innerHTML = pages.vue || '同原生用法';
    document.title = "".concat(title, " | Nova UI Components");
    window.scrollTo(0, 0);
    toggleNavClass();
    setTimeout(function () {
      cb && typeof cb === 'function' && cb();
    });
  };
} // run code


function runScript() {
  var $code = document.querySelectorAll('.code-view');
  Array.prototype.slice.call($code).forEach(function (el) {
    var codeNative = el.getAttribute('data-eval');
    var codeVue = el.getAttribute('data-vue-eval');

    if (codeNative) {
      codeNative = JSON.parse(codeNative);

      if (codeNative.script) {
        var source = new Function(codeNative.script);
        source();
      }
    }

    if (codeVue) {
      codeVue = JSON.parse(codeVue);

      var _source = Object.create(null);

      if (codeVue.code) {
        var code = "\n            var exports = Object.create(null);\n            ".concat(codeVue.code, "\n            return exports;\n          ");
        var res = new Function(code)();
        _source = res.default;
      }

      if (codeVue.template) {
        _source.template = codeVue.template;
      } // let scripts = codeVue.script
      // let source = scripts || Object.create(null)


      var $container = el.querySelector('.code-view__view');
      var vm = new window.Vue(_source).$mount();
      $container.appendChild(vm.$el); // console.log(vm)

      window.instances.push(vm);
    }
  });
}

var $tabs = document.querySelectorAll('.doc-tabs__item');
var $tabPanels = document.querySelectorAll('.doc-panel');
/**
 * after router change
 * @param {*} newPath 
 * @param {*} oldPath 
 */

function routerChange(newPath, oldPath) {
  if (oldPath === newPath) {
    return;
  }

  $tabs.forEach(function ($tab, idx) {
    $tab.classList[idx === 0 ? 'add' : 'remove']('doc-tabs--actived');
  });
  $tabPanels.forEach(function ($panel, idx) {
    $panel.classList[idx === 0 ? 'add' : 'remove']('doc-panel--actived');
  }); // 将收集到的实例全部销毁，防止内存累积

  window.instances.forEach(function (instance) {
    // 销毁native实例
    instance.destroy && instance.destroy(); // 销毁vue实例

    instance.$destroy && instance.$destroy();
  });
  window.instances.length = 0;
  window.scrollTo(0, 0);
}

var router = new _assets_router__WEBPACK_IMPORTED_MODULE_0__["default"](routerChange);
router.set('/').set('/icon', setPage({
  native: Icon
}, 'Icon', runScript)).set('/button', setPage({
  native: Button
}, 'Button')).set('/input', setPage({
  native: Input
}, 'Input', runScript)).set('/checkbox', setPage({
  native: Checkbox,
  vue: CheckboxVue
}, 'Checkbox', runScript)).set('/radio', setPage({
  native: Radio,
  vue: RadioVue
}, 'Radio', runScript)).set('/switch', setPage({
  native: Switch,
  vue: SwitchVue
}, 'Switch', runScript)).set('/breadcrumb', setPage({
  native: Breadcrumb
}, 'Breadcrumb', runScript)).set('/badge', setPage({
  native: Badge
}, 'Badge')).set('/color-picker', setPage({
  native: ColorPicker,
  vue: ColorPickerVue
}, 'ColorPicker', runScript)).set('/date-picker', setPage({
  native: DatePicker,
  vue: DatePickerVue
}, 'DatePicker', runScript)).set('/time-picker', setPage({
  native: TimePicker,
  vue: TimePickerVue
}, 'TimePicker', runScript)).set('/modal', setPage({
  native: Modal,
  vue: ModalVue
}, 'Modal', runScript)).set('/alert', setPage({
  native: Alert,
  vue: AlertVue
}, 'Alert', runScript)).set('/message', setPage({
  native: Message,
  vue: MessageVue
}, 'Message', runScript)).set('/message-box', setPage({
  native: MessageBox,
  vue: MessageBoxVue
}, 'MessageBox', runScript)).set('/popover', setPage({
  native: Popover,
  vue: PopoverVue
}, 'Popover', runScript)).set('/loader', setPage({
  native: Loader,
  vue: LoaderVue
}, 'Loader', runScript)).set('/input-number', setPage({
  native: InputNumber,
  vue: InputNumberVue
}, 'InputNumber', runScript)).set('/table', setPage({
  native: Table
}, 'Table', runScript)).set('/tree', setPage({
  native: Tree,
  vue: TreeVue
}, 'Tree', runScript)).set('/select', setPage({
  native: Select,
  vue: SelectVue
}, 'Select', runScript)).set('/pagination', setPage({
  native: Pagination,
  vue: PaginationVue
<<<<<<< HEAD
}, 'Pagination', runScript)).set('/slider', setPage({
=======
}, 'Pagination', runScript)).set('/scroll-load', setPage({
  native: ScrollLoad,
  vue: ScrollLoadVue
}, 'ScrollLoadVue', runScript)).set('/slider', setPage({
>>>>>>> 084085f4a60362c717d3e812e65d2ec59bfa1cef
  native: Slider,
  vue: SliderVue
}, 'Slider', runScript)).set('/tag', setPage({
  native: Tag,
  vue: TagVue
}, 'Tag', runScript)).init(); // events 

document.addEventListener('click', function (e) {
  var target = e.target;
  var nodes = Array.prototype.slice.call(document.querySelectorAll('.code-view__ctrl'));
  var matched;

  for (var i = 0, len = nodes.length; i < len; i++) {
    var node = nodes[i];

    if (node === target || node.contains(target)) {
      matched = node;
      break;
    }
  }

  if (matched) {
    var $panel = matched.parentNode;
    $panel.classList.toggle('source-opened');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./node_modules/html-loader/index.js?interpolate!./examples/entries/header.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./examples/entries/header.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-head__inner\">\n  <a class=\"app-logo\">NOVA UI</a>\n  <nav class=\"app-nav\">\n    <ul>\n      <li>\n        <a href=\"/\">首页</a>\n      </li>\n      <li>\n        <a class=\"app-nav--components\" href=\"/components/#/button\">组件</a>\n      </li>\n      <li>\n        <a class=\"app-nav--docs\" href=\"/docs/#/install\">文档</a>\n      </li>\n      <li>\n        <a href=\"http://ux.vnnox.net/\" target=\"_blank\">设计规范</a>\n      </li>\n      <li>\n        <a href=\"https://github.com/vnnox/nova-ui\" target=\"_blank\">Github</a>\n      </li>\n    </ul>\n  </nav>\n</div>";

/***/ })

/******/ });
//# sourceMappingURL=components.js.map