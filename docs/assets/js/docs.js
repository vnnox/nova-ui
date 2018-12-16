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
/******/ 		"docs": 0
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
/******/ 	deferredModules.push(["./examples/entries/docs.js","nova.ui","template"]);
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

/***/ "./examples/entries/docs.js":
/*!**********************************!*\
  !*** ./examples/entries/docs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../src/scss/index.scss */ "./src/scss/index.scss");

__webpack_require__(/*! ../assets/scss/index.scss */ "./examples/assets/scss/index.scss");

document.getElementById('head').innerHTML = __webpack_require__(/*! html-loader?interpolate!./header.html */ "./node_modules/html-loader/index.js?interpolate!./examples/entries/header.html");

__webpack_require__(/*! ./router.docs */ "./examples/entries/router.docs.js");

/***/ }),

/***/ "./examples/entries/router.docs.js":
/*!*****************************************!*\
  !*** ./examples/entries/router.docs.js ***!
  \*****************************************/
/*! exports provided: router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _assets_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/router */ "./examples/assets/router.js");


var Install = __webpack_require__(/*! ../docs/documents/install.md */ "./examples/docs/documents/install.md");

var Usage = __webpack_require__(/*! ../docs/documents/usage.md */ "./examples/docs/documents/usage.md");

var I18n = __webpack_require__(/*! ../docs/documents/i18n.md */ "./examples/docs/documents/i18n.md");

var CssRule = __webpack_require__(/*! ../docs/documents/css-rules.md */ "./examples/docs/documents/css-rules.md");

var JsRule = __webpack_require__(/*! ../docs/documents/js-rules.md */ "./examples/docs/documents/js-rules.md");

var ApiCssUtils = __webpack_require__(/*! ../docs/documents/api-css-utils.md */ "./examples/docs/documents/api-css-utils.md");

var ApiJsUtils = __webpack_require__(/*! ../docs/documents/api-js-utils.md */ "./examples/docs/documents/api-js-utils.md");

var ApiJsDom = __webpack_require__(/*! ../docs/documents/api-js-dom.md */ "./examples/docs/documents/api-js-dom.md");

var ApiJsEvents = __webpack_require__(/*! ../docs/documents/api-js-events.md */ "./examples/docs/documents/api-js-events.md");

var ApiJsTemplate = __webpack_require__(/*! ../docs/documents/api-js-template.md */ "./examples/docs/documents/api-js-template.md");

var ApiJsPicker = __webpack_require__(/*! ../docs/documents/api-js-picker.md */ "./examples/docs/documents/api-js-picker.md");

var $contianer = document.getElementById('container');
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

function setPage(page, title, cb) {
  return function () {
    $contianer.innerHTML = page;
    document.title = "".concat(title, " | Nova UI Documents");
    toggleNavClass();
    setTimeout(function () {
      cb && typeof cb === 'function' && cb();
    });
  };
}

function routerChange(newPath, oldPath) {
  if (oldPath === newPath) {
    return;
  }

  window.scrollTo(0, 0);
}

var router = new _assets_router__WEBPACK_IMPORTED_MODULE_0__["default"](routerChange);
router.set('/').set('/install', setPage(Install, 'Install')).set('/usage', setPage(Usage, 'Usage')).set('/i18n', setPage(I18n, 'I18n')).set('/css-rules', setPage(CssRule, 'Css Rules')).set('/js-rules', setPage(JsRule, 'Javascript Rules')).set('/api-css-utils', setPage(ApiCssUtils, 'Api')).set('/api-js-utils', setPage(ApiJsUtils, 'Api')).set('/api-js-dom', setPage(ApiJsDom, 'Api')).set('/api-js-events', setPage(ApiJsEvents, 'Api')).set('/api-js-template', setPage(ApiJsTemplate, 'Api')).set('/api-js-picker', setPage(ApiJsPicker, 'Api')).init(); // events 

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
//# sourceMappingURL=docs.js.map