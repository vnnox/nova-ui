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
class Router {
  constructor(onchange) {
    this.routers = Object.create(null);
    this.url = '';
    this.onchange = onchange;
  }

  static getPath(url) {
    url = url || window.location.hash;
    url = url.replace(/^#/, '').replace(/^\/*|\/*$/g, '').trim();
    return url;
  }

  set(url, cb) {
    url = Router.getPath(url);
    this.routers[url] = cb && typeof cb === 'function' ? cb : function () {};
    return this;
  }

  refresh() {
    let oldPath = this.url;
    this.url = Router.getPath();
    let callback = this.routers[this.url];

    if (!callback) {
      window.location.hash = '#/';
      return;
    }

    this.onchange && this.onchange.call(this, this.url, oldPath);
    setTimeout(() => {
      callback && callback.call(this, this.url, oldPath);
    }, 0);
    return this;
  }

  init() {
    this.url = Router.getPath();
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
  }

}
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


const Button = __webpack_require__(/*! ../docs/components/button.md */ "./examples/docs/components/button.md");

const Input = __webpack_require__(/*! ../docs/components/input.md */ "./examples/docs/components/input.md");

const Checkbox = __webpack_require__(/*! ../docs/components/checkbox.md */ "./examples/docs/components/checkbox.md");

const Modal = __webpack_require__(/*! ../docs/components/modal.md */ "./examples/docs/components/modal.md");

const $contianer = document.getElementById('container');

function setPage(page, title, cb) {
  return function () {
    $contianer.innerHTML = page;
    document.title = `${title} | Nova UI Components`;
    setTimeout(() => {
      cb && typeof cb === 'function' && cb();
    });
  };
}

function runScript() {
  let $code = document.querySelectorAll('.code-view');
  Array.prototype.slice.call($code).forEach(el => {
    let code = JSON.parse(el.getAttribute('data-eval'));

    if (code.script) {
      var source = new Function(code.script);
      source();
    }
  });
}

function routerChange(newPath, oldPath) {
  if (oldPath === newPath) {
    return;
  }

  window.instances.forEach(instance => {
    instance.destroy && instance.destroy();
  });
  window.instances.length = 0;
  window.scrollTo(0, 0);
}

const router = new _assets_router__WEBPACK_IMPORTED_MODULE_0__["default"](routerChange);
router.set('/').set('/button', setPage(Button, 'Button')).set('/input', setPage(Input, 'Input')).set('/checkbox', setPage(Checkbox, 'Checkbox')).set('/modal', setPage(Modal, 'Modal', runScript)).init(); // events 

document.addEventListener('click', function (e) {
  var target = e.target;
  var nodes = Array.prototype.slice.call(document.querySelectorAll('.code-view__ctrl'));
  var matched;

  for (let i = 0, len = nodes.length; i < len; i++) {
    const node = nodes[i];

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

module.exports = "<div class=\"app-head__inner\">\n  <a class=\"app-logo\">NOVA UI</a>\n  <nav class=\"app-nav\">\n    <ul>\n      <li>\n        <a href=\"/\">首页</a>\n      </li>\n      <li>\n        <a class=\"app-nav--components\" href=\"/components/#/button\">组件</a>\n      </li>\n      <li>\n        <a class=\"app-nav--docs\" href=\"/docs/\">开发文档</a>\n      </li>\n      <li>\n        <a href=\"http://ux.vnnox.net/\" target=\"_blank\">设计规范</a>\n      </li>\n    </ul>\n  </nav>\n</div>";

/***/ })

/******/ });
//# sourceMappingURL=docs.js.map