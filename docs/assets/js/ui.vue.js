/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vue/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/alert/main.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/alert/main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-alert',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: function validator(value) {
        return ['info', 'success', 'error', 'warning'].indexOf(value) > -1;
      }
    },
    content: String,
    closable: {
      type: Boolean,
      default: true
    },
    customIcon: String,
    showIcon: {
      type: Boolean,
      default: true
    },
    closeLabel: String
  },
  data: function data() {
    return {
      visible: true
    };
  },
  computed: {
    className: function className() {
      var className = this.type !== 'info' ? ["nv-alert--".concat(this.type)] : [];

      if (this.closable) {
        className.push('has-close');
      }

      return className;
    },
    icon: function icon() {
      if (!this.showIcon) {
        return '';
      }

      if (this.customIcon) {
        return this.customIcon;
      }

      var icon;

      switch (this.type) {
        case 'success':
          icon = 'nv-icon-circle-check';
          break;

        case 'error':
          icon = 'nv-icon-circle-close';
          break;

        case 'warning':
          icon = 'nv-icon-circle-warning';
          break;

        case 'info':
        default:
          icon = 'nv-icon-circle-info';
          break;
      }

      return icon;
    }
  },
  methods: {
    close: function close() {
      this.visible = false;
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox-group/group.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/checkbox-group/group.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-checkbox-group',
  props: {
    value: {},
    name: String,
    size: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default'].indexOf(value) > -1;
      }
    },
    type: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['primary', 'default'].indexOf(value) > -1;
      }
    }
  },
  computed: {
    className: function className() {
      var className = [];

      if (this.size !== 'default') {
        className.push("nv-check--".concat(this.size));
      }

      if (this.type !== 'default') {
        className.push("nv-check--".concat(this.type));
      }

      return className;
    }
  },
  methods: {
    change: function change(value) {
      this.$emit('change', value);
    }
  },
  watch: {
    value: function value() {// todo
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox-group/item.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/checkbox-group/item.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-checkbox-item',
  props: {
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    disabled: Boolean
  },
  computed: {
    _checkboxGroup: function _checkboxGroup() {
      var parent = this.$parent;

      while (parent) {
        var componentName = parent.$options.componentName || parent.$options.name;

        if (componentName !== 'nv-checkbox-group') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }

      return false;
    },
    name: function name() {
      return this._checkboxGroup.name;
    },
    value: {
      get: function get() {
        return this._checkboxGroup.value;
      },
      set: function set(value) {
        this._checkboxGroup.$emit('input', value);

        this._checkboxGroup.change(value);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox/main.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/checkbox/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-checkbox',
  props: {
    value: {},
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    name: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      val: this.value
    };
  },
  methods: {
    change: function change() {
      this.$emit('input', this.val);
      this.$emit('change', this.val);
    }
  },
  watch: {
    value: function value() {
      this.val = this.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/input-number/main.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/input-number/main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_input_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/input-number */ "./src/components/input-number/index.js");
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-input-number',
  props: {
    value: [String, Number],
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    precision: Number,
    disabled: Boolean,
    editable: {
      type: Boolean,
      default: true
    },
    placeholder: String,
    name: String,
    width: [Number, String],
    size: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default', 'large'].indexOf(value) > -1;
      }
    },
    customClass: String,
    formatter: Function
  },
  data: function data() {
    return {
      instance: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.instance = new _components_input_number__WEBPACK_IMPORTED_MODULE_0__["default"](this.$el, this.$props);
    this.instance.on('change', function (newVal, oldVal) {
      _this.$emit('input', newVal);

      _this.$emit('change', newVal, oldVal);
    });
  },
  watch: {
    value: function value(val, old) {
      if (val !== old && this.instance) {
        this.instance.setValue(val);
      }
    },
    disabled: function disabled(val, old) {
      if (val !== old && this.instance) {
        val ? this.instance.disable() : this.instance.enable();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    this.instance && this.instance.destroy();
    this.$nextTick(function () {
      return _this2.instance = null;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/modal/main.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/modal/main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal */ "./src/components/modal/index.js");
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-modal',
  props: {
    value: Boolean,
    title: String,
    closeBtn: {
      type: Boolean,
      default: true
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    backdropBackground: String,
    backdropClose: {
      type: Boolean,
      default: true
    },
    escClose: {
      type: Boolean,
      default: true
    },
    width: [Number, String],
    top: [Number, String],
    customClass: String,
    scrollLock: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      instance: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var props = this.$props;
    props.visible = !!props.value;
    props.content = this.$refs['content'] || '';
    props.footSlot = this.$refs['foot'] || null;
    props.btns = this.$refs['btns'] || null;
    this.$el.parentNode.removeChild(this.$el);
    this.instance = new _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"](props);
    this.instance.on('open', function ($el) {
      _this.$emit('open', $el);

      _this.$emit('input', true);
    }).on('close', function (type, $el) {
      _this.$emit('close', type, $el);

      _this.$emit('input', false);
    });
  },
  watch: {
    value: function value(val) {
      if (val && this.instance) {
        this.instance.open();
      } else {
        this.instance.close();
      }
    }
  },
  methods: {
    open: function open() {
      this.instance && this.instance.open();
    },
    close: function close(type) {
      this.instance && this.instance.close(type);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    this.instance && this.instance.destroy();
    this.$nextTick(function () {
      return _this2.instance = null;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/option/main.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/option/main.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-option',
  props: {
    value: {},
    label: {},
    disabled: Boolean
  },
  mounted: function mounted() {
    if (this.$parent && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(this.$parent.addOption)) {
      this.$parent.addOption({
        value: this.value,
        label: this.label || this.$el.innerHTML || this.value,
        disabled: this.disabled
      });
    }

    this.$el.parentNode.removeChild(this.$el);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/pagination/main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/pagination/main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/pagination */ "./src/components/pagination/index.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-pagination',
  props: {
    lang: String,
    total: Number,
    limit: {
      type: Number,
      default: 20
    },
    index: {
      type: Number,
      default: 1
    },
    visible: Number,
    ellipsis: {
      type: Boolean,
      default: true
    },
    layout: String,
    prevText: String,
    nextText: String,
    sizes: Array,
    customClass: String
  },
  data: function data() {
    return {
      instance: null
    };
  },
  watch: {
    total: function total(val, oldVal) {
      if (val !== oldVal) {
        this.instance.setTotal(val);
      }
    },
    index: function index(val, oldVal) {
      if (val !== oldVal) {
        this.instance.setIndex(val);
      }
    },
    limit: function limit(val, oldVal) {
      if (val !== oldVal) {
        this.instance.setLimit(val);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.instance = new _components_pagination__WEBPACK_IMPORTED_MODULE_0__["default"](this.$el, this.$props);
    this.instance.on('change', function (index, limit, pages) {
      return _this.$emit('change', index, limit, pages);
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    this.instance && this.instance.destroy();
    this.$nextTick(function () {
      return _this2.instance = null;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/radio-group/group.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/radio-group/group.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-radio-group',
  props: {
    value: [String, Number, Boolean],
    name: {
      type: String,
      default: '',
      required: true
    },
    size: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default'].indexOf(value) > -1;
      }
    },
    type: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['primary', 'default'].indexOf(value) > -1;
      }
    }
  },
  computed: {
    className: function className() {
      var className = [];

      if (this.size !== 'default') {
        className.push("nv-check--".concat(this.size));
      }

      if (this.type !== 'default') {
        className.push("nv-check--".concat(this.type));
      }

      return className;
    }
  },
  methods: {
    change: function change(value) {
      this.$emit('change', value);
    }
  },
  watch: {
    value: function value() {// todo
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/radio-group/item.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/radio-group/item.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-radio-item',
  props: {
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    disabled: Boolean
  },
  computed: {
    _radioGroup: function _radioGroup() {
      var parent = this.$parent;

      while (parent) {
        var componentName = parent.$options.componentName || parent.$options.name;

        if (componentName !== 'nv-radio-group') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }

      return false;
    },
    name: function name() {
      return this._radioGroup.name;
    },
    value: {
      get: function get() {
        return this._radioGroup.value;
      },
      set: function set(value) {
        this._radioGroup.$emit('input', value);

        this._radioGroup.change(value);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/radio/main.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/radio/main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-radio',
  props: {
    value: [String, Number, Boolean],
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    disabled: Boolean
  },
  data: function data() {
    return {
      val: this.value
    };
  },
  methods: {
    change: function change() {
      this.$emit('input', this.val);
      this.$emit('change', this.val);
    }
  },
  watch: {
    value: function value() {
      this.val = this.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/select/main.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/select/main.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/select */ "./src/components/select/index.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-select',
  props: {
    value: {},
    disabled: Boolean,
    valueKey: String,
    multiple: Boolean,
    multipleValueTpl: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: String,
    groupable: Boolean,
    clearable: Boolean,
    searchable: Boolean,
    filter: Function,
    loadByAsync: Boolean,
    searchByAsync: Boolean,
    name: String,
    inputSize: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default', 'large'].indexOf(value) > -1;
      }
    },
    selectClass: String,
    pickerClass: String,
    loadingText: String,
    noDataText: String,
    noMatchDataText: String,
    render: Function
  },
  data: function data() {
    return {
      data: this.options,
      instance: null
    };
  },
  methods: {
    addOption: function addOption(option) {
      this.data.push(option);
      this.instance && this.instance.setOptions(this.data);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var props = this.$props;
    props.options = this.data;
    this.instance = new _components_select__WEBPACK_IMPORTED_MODULE_0__["default"](this.$el, props);
    this.instance.on('open', function () {
      return _this.$emit('open');
    }).on('close', function () {
      return _this.$emit('close');
    }).on('focus', function (event) {
      return _this.$emit('focus', event);
    }).on('blur', function (event) {
      return _this.$emit('blur', event);
    }).on('change', function (value, options) {
      return _this.$emit('change', value, options);
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    this.instance && this.instance.destroy();
    this.$nextTick(function () {
      return _this2.instance = null;
    });
  },
  watch: {
    disabled: function disabled() {
      this.disabled ? this.instance.disable() : this.instance.enable();
    },
    value: function value() {
      this.instance.setValue(this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/slider/main.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/slider/main.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slider */ "./src/components/slider/index.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-slider',
  props: {
    value: Number,
    min: Number,
    max: Number,
    step: Number,
    precision: Number,
    disabled: Boolean,
    tooltip: {
      type: Boolean,
      default: true
    },
    vertical: Boolean,
    height: String,
    customClass: String,
    tipFormatter: Function
  },
  watch: {
    value: function value(val, old) {
      if (val !== old && this.instance) {
        this.instance.setValue(val, true);
      }
    },
    disabled: function disabled(val, old) {
      if (val !== old && this.instance) {
        val ? this.instance.disable() : this.instance.enable();
      }
    }
  },
  data: function data() {
    return {
      instance: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.instance = new _components_slider__WEBPACK_IMPORTED_MODULE_0__["default"](this.$refs.slider, this.$props);
    this.instance.on('change', function (value) {
      _this.$emit('input', value);

      _this.$emit('change', value);
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    this.instance && this.instance.destroy();
    this.$nextTick(function () {
      return _this2.instance = null;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/switch/main.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/switch/main.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-switch',
  props: {
    value: {},
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    name: String,
    disabled: Boolean
  },
  computed: {
    val: {
      get: function get() {
        return this.value === this.label;
      },
      set: function set(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/tag/main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/tag/main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-tag',
  props: {
    removeable: Boolean,
    label: String,
    size: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default', 'tiny'].indexOf(value) > -1;
      }
    },
    type: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['default', 'error'].indexOf(value) > -1;
      }
    }
  },
  computed: {
    className: function className() {
      var className = [];

      if (this.size !== 'default') {
        className.push("nv-tag--".concat(this.size));
      }

      if (this.type !== 'default') {
        className.push("nv-tag--".concat(this.type));
      }

      return className;
    }
  },
  data: function data() {
    return {
      visible: true
    };
  },
  methods: {
    remove: function remove() {
      this.visible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/tree/main.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/tree/main.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/tree */ "./src/components/tree/index.js");
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-tree',
  props: {
    data: {
      type: [Array, Object],
      default: []
    },
    disabled: Boolean,
    indent: {
      type: Number,
      default: 16
    },
    labelRender: Function,
    checkable: Boolean,
    radio: Boolean,
    checkName: String,
    checkStrictly: Boolean,
    expandAll: Boolean,
    highlight: Boolean,
    nodeFilter: Function,
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    noDataText: String,
    noMatchDataText: String
  },
  data: function data() {
    return {
      instance: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.instance = new _components_tree__WEBPACK_IMPORTED_MODULE_0__["default"](this.$el, this.$props);
    this.instance.on('click', function (node, $node) {
      return _this.$emit('click', node, $node);
    }).on('expend', function (status, node, $node) {
      return _this.$emit('expend', status, node, $node);
    }).on('check', function (status, node, $node) {
      return _this.$emit('check', status, node, $node);
    });
  },
  methods: {
    filter: function filter(value) {
      this.instance.filter(value);
    },
    appendNode: function appendNode(parent, newNode) {
      this.instance.appendNode(parent, newNode);
    },
    removeNode: function removeNode(node) {
      this.instance.removeNode(node);
    },
    getCheckedNodes: function getCheckedNodes(useDisabled) {
      this.instance.getCheckedNodes(useDisabled);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    this.instance && this.instance.destroy();
    this.$nextTick(function () {
      return _this2.instance = null;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/alert/main.vue?vue&type=template&id=3f65bf64&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/alert/main.vue?vue&type=template&id=3f65bf64& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "nv-alert",
        class: _vm.className,
        attrs: { role: "alert" }
      },
      [
        _c("div", { staticClass: "nv-alert__inner" }, [
          _vm.showIcon
            ? _c("span", { staticClass: "nv-alert__icon" }, [
                _c("i", { class: _vm.icon })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "nv-alert__content" },
            [_vm._t("default", [_vm._v(_vm._s(_vm.content))])],
            2
          ),
          _vm._v(" "),
          _vm.closable
            ? _c(
                "button",
                {
                  staticClass: "nv-alert__close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "alert",
                    "aria-label": "Close"
                  },
                  on: { click: _vm.close }
                },
                [
                  _vm.closeLabel
                    ? _c("span", [_vm._v(_vm._s(_vm.closeLabel))])
                    : _c("i", { staticClass: "nv-icon-close" })
                ]
              )
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox-group/group.vue?vue&type=template&id=53ffd0a7&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/checkbox-group/group.vue?vue&type=template&id=53ffd0a7& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "nv-check-group",
      class: _vm.className,
      attrs: { role: "checkboxgroup" }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox-group/item.vue?vue&type=template&id=6474cb1b&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/checkbox-group/item.vue?vue&type=template&id=6474cb1b& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "nv-check-item",
      attrs: { role: "checkbox", tabindex: _vm.disabled ? -1 : 0 }
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.value,
            expression: "value"
          }
        ],
        attrs: { type: "checkbox", name: _vm.name, disabled: _vm.disabled },
        domProps: {
          value: _vm.label,
          checked: Array.isArray(_vm.value)
            ? _vm._i(_vm.value, _vm.label) > -1
            : _vm.value
        },
        on: {
          change: function($event) {
            var $$a = _vm.value,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = _vm.label,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.value = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.value = $$c
            }
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "nv-check__btn" }, [_vm._t("default")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox/main.vue?vue&type=template&id=7764a19a&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/checkbox/main.vue?vue&type=template&id=7764a19a& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "nv-checkbox",
      attrs: { role: "checkbox", tabindex: _vm.disabled ? -1 : 0 }
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.val,
            expression: "val"
          }
        ],
        attrs: { type: "checkbox", name: _vm.name, disabled: _vm.disabled },
        domProps: {
          value: _vm.label,
          checked: Array.isArray(_vm.val)
            ? _vm._i(_vm.val, _vm.label) > -1
            : _vm.val
        },
        on: {
          change: [
            function($event) {
              var $$a = _vm.val,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = _vm.label,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.val = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.val = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.val = $$c
              }
            },
            _vm.change
          ]
        }
      }),
      _vm._v(" "),
      _vm.$slots.before
        ? _c(
            "span",
            { staticClass: "nv-checkbox__label" },
            [_vm._t("before")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("i", { staticClass: "nv-checkbox__icon" }),
      _vm._v(" "),
      _vm.$slots.default
        ? _c(
            "span",
            { staticClass: "nv-checkbox__label" },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/input-number/main.vue?vue&type=template&id=01ff4f6a&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/input-number/main.vue?vue&type=template&id=01ff4f6a& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "nv-input-number--wrap" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/modal/main.vue?vue&type=template&id=95e2cbc6&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/modal/main.vue?vue&type=template&id=95e2cbc6& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "nv-modal--wrap", attrs: { hidden: "" } }, [
    _vm.$slots.default
      ? _c(
          "div",
          { ref: "content", attrs: { "data-slot": "content" } },
          [_vm._t("default")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$slots.foot
      ? _c(
          "div",
          { ref: "foot", attrs: { "data-slot": "foot" } },
          [_vm._t("foot")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.$slots.btns
      ? _c(
          "div",
          { ref: "btns", attrs: { "data-slot": "btns" } },
          [_vm._t("btns")],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/option/main.vue?vue&type=template&id=6303cf7e&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/option/main.vue?vue&type=template&id=6303cf7e& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { attrs: { hidden: "" } }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/pagination/main.vue?vue&type=template&id=5e28b088&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/pagination/main.vue?vue&type=template&id=5e28b088& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "nv-pagination--wrap" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/radio-group/group.vue?vue&type=template&id=7cc667cb&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/radio-group/group.vue?vue&type=template&id=7cc667cb& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "nv-check-group",
      class: _vm.className,
      attrs: { role: "radiogroup" }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/radio-group/item.vue?vue&type=template&id=02acbf77&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/radio-group/item.vue?vue&type=template&id=02acbf77& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "nv-check-item",
      attrs: { role: "radio", tabindex: _vm.disabled ? -1 : 0 }
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.value,
            expression: "value"
          }
        ],
        attrs: { type: "radio", name: _vm.name, disabled: _vm.disabled },
        domProps: { value: _vm.label, checked: _vm._q(_vm.value, _vm.label) },
        on: {
          change: function($event) {
            _vm.value = _vm.label
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "nv-check__btn" }, [_vm._t("default")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/radio/main.vue?vue&type=template&id=d189cee2&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/radio/main.vue?vue&type=template&id=d189cee2& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "nv-radio",
      attrs: { role: "radio", tabindex: _vm.disabled ? -1 : 0 }
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.val,
            expression: "val"
          }
        ],
        attrs: { type: "radio", name: _vm.name, disabled: _vm.disabled },
        domProps: { value: _vm.label, checked: _vm._q(_vm.val, _vm.label) },
        on: {
          change: [
            function($event) {
              _vm.val = _vm.label
            },
            _vm.change
          ]
        }
      }),
      _vm._v(" "),
      _vm.$slots.before
        ? _c("span", { staticClass: "nv-radio__label" }, [_vm._t("before")], 2)
        : _vm._e(),
      _vm._v(" "),
      _c("i", { staticClass: "nv-radio__icon" }),
      _vm._v(" "),
      _vm.$slots.default
        ? _c("span", { staticClass: "nv-radio__label" }, [_vm._t("default")], 2)
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/select/main.vue?vue&type=template&id=a4f4d8cc&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/select/main.vue?vue&type=template&id=a4f4d8cc& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "nv-select--wrap" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/slider/main.vue?vue&type=template&id=4891e155&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/slider/main.vue?vue&type=template&id=4891e155& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "nv-slider--wrap",
      class: { "nv-slider--vertical-wrap": _vm.vertical }
    },
    [
      _c("div", { ref: "slider", staticClass: "nv-slider__bar" }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/switch/main.vue?vue&type=template&id=78e7df3c&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/switch/main.vue?vue&type=template&id=78e7df3c& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "nv-switch",
      attrs: { role: "checkbox", tabindex: _vm.disabled ? -1 : 0 }
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.val,
            expression: "val"
          }
        ],
        attrs: { type: "checkbox", name: _vm.name, disabled: _vm.disabled },
        domProps: {
          value: _vm.label,
          checked: Array.isArray(_vm.val)
            ? _vm._i(_vm.val, _vm.label) > -1
            : _vm.val
        },
        on: {
          change: function($event) {
            var $$a = _vm.val,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = _vm.label,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.val = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.val = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.val = $$c
            }
          }
        }
      }),
      _vm._v(" "),
      _vm.$slots.before
        ? _c("span", { staticClass: "nv-switch__label" }, [_vm._t("before")], 2)
        : _vm._e(),
      _vm._v(" "),
      _c("i", { staticClass: "nv-switch__icon" }),
      _vm._v(" "),
      _vm.$slots.default
        ? _c(
            "span",
            { staticClass: "nv-switch__label" },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/tag/main.vue?vue&type=template&id=65e05250&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/tag/main.vue?vue&type=template&id=65e05250& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _vm.visible
      ? _c("span", { staticClass: "nv-tag", class: _vm.className }, [
          _c(
            "span",
            { staticClass: "nv-tag__label", attrs: { title: _vm.label } },
            [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
            2
          ),
          _vm._v(" "),
          _vm.removeable
            ? _c("a", {
                staticClass: "nv-tag__close nv-icon-close",
                on: { click: _vm.remove }
              })
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/tree/main.vue?vue&type=template&id=ff5e8e90&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/tree/main.vue?vue&type=template&id=ff5e8e90& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "nv-tree--wrap" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

var Selectors = {
  input: '.nv-input',
  increase: '.nv-input-number__increase',
  decrease: '.nv-input-number__decrease' // 默认配置

};
var defaults = {
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
   */

};

function render() {
  var states = this.states,
      props = this.props;

  if (states.$el) {
    return;
  }

  var $el = document.createElement('label');
  $el.className = 'nv-input-number';
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["addClass"])($el, props.customClass);
  var size;

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
    size: size
  });
  var width = props.width;

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
 * @param {*} e 
 */


function handleInputKeydown(e) {
  var code = e.keyCode;

  if (code === 38 || code === 39) {
    this.increase();
  } else if (code === 37 || code === 40) {
    this.decrease();
  }
}
/**
 * 绑定DOM事件
 * @private
 */


function bindEvents() {
  var states = this.states;
  var handles = states.handles;
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
 */


function unbindEvents() {
  var states = this.states;
  var handles = states.handles;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$increase, 'click', handles.increase);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$decrease, 'click', handles.decrease);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$input, 'change', handles.inputChange);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$input, 'keydown', handles.inputKeydown);
}
/**
 * 递增
 * @private
 * @param {*} val 
 */


function _increase(val) {
  var props = this.props,
      states = this.states;
  var step = props.step,
      precision = props.precision;
  var value = states.value;

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(val) && val !== void 0) {
    return value;
  }

  var precisionFactor = Math.pow(10, precision);
  return toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor, precision);
}
/**
 * 递减
 * @private
 * @param {*} val 
 */


function _decrease(val) {
  var props = this.props,
      states = this.states;
  var step = props.step,
      precision = props.precision;
  var value = states.value;

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(val) && val !== void 0) {
    return value;
  }

  var precisionFactor = Math.pow(10, precision);
  return toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor, precision);
}
/**
 * 设置increase/decrease按钮禁用状态
 * @private
 */


function toggleBtnDisabled() {
  var states = this.states,
      props = this.props;
  var min = props.min,
      max = props.max;
  var value = states.value || 0;
  var minDisabled = props.disabled || _decrease.call(this, value || 0) < min;
  var maxDisabled = props.disabled || _increase.call(this, value || 0) > max;
  var minMethod = minDisabled ? 'add' : 'remove';
  var maxMethod = maxDisabled ? 'add' : 'remove';
  states.$decrease.classList[minMethod]('nv-disabled');
  states.$increase.classList[maxMethod]('nv-disabled');
  states.$increase.setAttribute('aria-disabled', maxDisabled);
  states.$decrease.setAttribute('aria-disabled', minDisabled);
}
/**
 * 精确化值
 * @private
 * @param {*} value 
 * @param {*} precision 
 */


function toPrecision(value, precision) {
  return parseFloat(parseFloat(Number(value).toFixed(precision)));
}
/**
 * 计数器组件
 * @date 2018-11-08
 * @export
 * @class InputNumber
 * @extends {Events}
 */


var InputNumber =
/*#__PURE__*/
function (_Events) {
  _inherits(InputNumber, _Events);

  /**
   * Creates an instance of InputNumber.
   * @date 2018-11-08
   * @param {*} container
   * @param {*} options
   * @memberof InputNumber
   */
  function InputNumber(container, options) {
    var _this;

    _classCallCheck(this, InputNumber);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputNumber).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this)) instanceof InputNumber)) {
      return _possibleConstructorReturn(_this, new InputNumber(container, options));
    }

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(container)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'container\' 必须是一个DOM容器', 'type');
    }

    _this.states = Object.create(null);
    _this.states.$container = container;
    _this.states.handles = Object.create(null);

    _this.initialize(options);

    return _this;
  }
  /**
   * 初始化
   * 当配置文件改变时调用
   * @date 2018-11-08
   * @param {*} options
   * @memberof InputNumber
   */


  _createClass(InputNumber, [{
    key: "initialize",
    value: function initialize(options) {
      this.props = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["correctProps"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {}));
      var states = this.states;
      render.call(this);
      states.value = '';
      states.oldValue = '';
      this.setValue(this.props.value);
    }
    /**
     * 设置值
     * @date 2018-11-08
     * @param {*} newValue
     * @memberof InputNumber
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      var props = this.props,
          states = this.states;
      var oldValue = states.oldValue;
      var precision = props.precision,
          min = props.min,
          max = props.max;
      newValue = parseFloat(newValue, 10);

      if (isNaN(newValue)) {
        newValue = oldValue;
      } // oldValue === ''


      var valueStr = '';

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

      var formatValue = props.formatter && props.formatter(valueStr);
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
     * @date 2018-11-08
     * @returns
     * @memberof InputNumber
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.states.value;
    }
    /**
     * 递增
     * @date 2018-11-08
     * @memberof InputNumber
     */

  }, {
    key: "increase",
    value: function increase() {
      var states = this.states,
          props = this.props;

      var newValue = _increase.call(this, states.value || 0);

      if (props.disable || newValue > props.max) {
        return;
      }

      this.setValue(newValue);
    }
    /**
     * 递减
     * @date 2018-11-08
     * @memberof InputNumber
     */

  }, {
    key: "decrease",
    value: function decrease() {
      var states = this.states,
          props = this.props;

      var newValue = _decrease.call(this, states.value || 0);

      if (props.disable || newValue < props.min) {
        return;
      }

      this.setValue(newValue);
    }
    /**
     * 禁用
     * @date 2018-11-08
     * @memberof InputNumber
     */

  }, {
    key: "disable",
    value: function disable() {
      this.props.disabled = true;
      var states = this.states;
      states.$el.classList.add('nv-disabled');
      states.$input.setAttribute('disabled', true);
      states.$input.setAttribute('aria-disabled', true);
      toggleBtnDisabled.call(this);
    }
    /**
     * 启用
     * @date 2018-11-08
     * @memberof InputNumber
     */

  }, {
    key: "enable",
    value: function enable() {
      this.props.disabled = false;
      var states = this.states;
      states.$el.classList.remove('nv-disabled');
      states.$input.removeAttribute('disabled');
      states.$input.setAttribute('aria-disabled', false);
      toggleBtnDisabled.call(this);
    }
    /**
     * 销毁
     * @date 2018-11-08
     * @memberof InputNumber
     */

  }, {
    key: "destroy",
    value: function destroy() {
      unbindEvents.call(this);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["removeNode"])(this.states.$el);
      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return InputNumber;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
// 骨架
var skeletonTpl = "\n<input type=\"text\" class=\"nv-input<% if(size) {%> nv-input--<%=size%><% }%>\" placeholder=\"<%= placeholder%>\" name=\"<%= name%>\" role=\"spinbutton\" autocomplete=\"off\" aria-valuemin=\"<%= min%>\" aria-valuemax=\"<%= max%>\" aria-valuenow=\"\" aria-disabled=\"<%= disabled%>\"<% if (!editable) {%> readonly<% }%><% if (disabled) {%> disabled<% }%>/>\n<a class=\"nv-input-number__increase\" role=\"button\" aria-label=\"Increase Value\" aria-disabled=\"<%=disabled%>\"></a>\n<a class=\"nv-input-number__decrease\" role=\"button\" aria-label=\"Decrease Value\" aria-disabled=\"<%=disabled%>\"></a>\n";
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
var getPrecision = function getPrecision(precision, step) {
  var value = 0;

  if (precision && precision > 0) {
    precision = +precision;

    if (!isNaN(precision)) {
      value = precision;
    }
  } else if (step) {
    var stepStr = step.toString();
    var dotPosition = stepStr.indexOf('.');

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

var correctProps = function correctProps(props) {
  var min = props.min,
      max = props.max,
      step = props.step;
  min = parseFloat(min, 10);
  max = parseFloat(max, 10);
  step = parseFloat(step, 10);
  min = isNaN(min) ? -Infinity : min;
  max = isNaN(max) ? Infinity : max;
  step = isNaN(step) ? 1 : step;

  if (min > max) {
    var t = max;
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
  getPrecision: getPrecision,
  correctProps: correctProps
});

/***/ }),

/***/ "./src/components/message-box/index.js":
/*!*********************************************!*\
  !*** ./src/components/message-box/index.js ***!
  \*********************************************/
/*! exports provided: MessageBox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBox", function() { return MessageBox; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ "./src/components/message-box/template.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal */ "./src/components/modal/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-11-20 02:39
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-21 02:56
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */




 // ui class name

var UI_NAME = 'nv-message-box'; // empty function

var noop = function noop() {}; // selectors


var Selectors = {
  message: '.nv-message-box__message',
  describe: '.nv-message-box__describe' // default config

};
var defaults = {
  message: '',
  title: '',
  describe: '',
  asHtml: false,
  type: 'info',
  showIcon: true,
  icon: '',
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  confirmButtonCss: 'nv-btn--primary',
  cancelButtonCss: '',
  confirm: null,
  cancel: null,
  // modal
  closeBtn: true,
  backdrop: true,
  backdropBackground: null,
  escClose: true,
  scrollLock: true,
  top: null,
  width: null
};
var instances = [];
/**
 * 创建一个MessageModal实例
 * @param {*} options 
 * @param {*} btns 
 */

function genMessageBox(options, btns) {
  options.message = (options.message || '').toString();
  options.title = (options.title || '').toString();
  var icon = false;

  if (options.showIcon) {
    icon = options.icon; // 如果没有自定义icon，则根据类型自动匹配icon

    if (!icon) {
      switch (options.type) {
        case 'success':
          icon = 'nv-icon-circle-check';
          break;

        case 'error':
          icon = 'nv-icon-circle-close';
          break;

        case 'warning':
          icon = 'nv-icon-circle-warning';
          break;

        case 'info':
        default:
          icon = 'nv-icon-circle-info';
          break;
      }
    }
  }

  var $el = document.createElement('div');
  $el.className = UI_NAME;
  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_1__["template"])(_template__WEBPACK_IMPORTED_MODULE_2__["skeletonTpl"], {
    icon: icon,
    describe: options.describe
  });
  var $message = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.message, $el)[0];
  var $describe = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.describe, $el)[0];

  if (options.asHtml) {
    $message.innerHTML = options.message;
    $describe && ($describe.innerHTML = options.describe);
  } else {
    $message.textContent = options.message;
    $describe && ($describe.textContent = options.describe);
  }

  var instance = new _modal__WEBPACK_IMPORTED_MODULE_3__["default"]({
    title: options.title,
    content: $el,
    closeBtn: options.closeBtn,
    backdrop: options.backdrop,
    backdropBackground: options.backdropBackground,
    escClose: options.escClose,
    scrollLock: options.scrollLock,
    top: options.top,
    width: options.width,
    btns: btns,
    customClass: 'dialog-message-box'
  });
  instances.push(instance);
  instance.open();
  instance.on('close', function () {
    var index = instances.indexOf(instance);

    if (index > -1) {
      instances.splice(index, 1);
    }

    instance.destroy();
  });
  return instance;
}
/**
 * 重新组装按钮的事件回调
 * @param {*} handle 
 */


function genCallback(handle) {
  var _handle = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handle) ? handle : noop;

  return function () {
    // this === Modal instance
    if (_handle() === false) {
      return;
    }

    this.close();
  };
}
/**
 * MessageBox Component
 * @date 2018-11-21
 * @export
 * @class MessageBox
 */


var MessageBox =
/*#__PURE__*/
function () {
  function MessageBox() {
    _classCallCheck(this, MessageBox);
  }

  _createClass(MessageBox, null, [{
    key: "alert",

    /**
     * 警告窗
     * @date 2018-11-21
     * @static
     * @param {*} message
     * @param {*} title
     * @param {*} options
     * @returns
     * @memberof MessageBox
     */
    value: function alert(message, title, options) {
      options = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["mixins"])({}, defaults, options || {});
      options.message = message;
      options.title = title;
      var btns = [{
        type: 'confirm',
        text: options.confirmButtonText,
        css: options.confirmButtonCss,
        handle: genCallback(options.confirm)
      }];
      return genMessageBox(options, btns);
    }
    /**
     * 确认窗
     * @date 2018-11-21
     * @static
     * @param {*} message
     * @param {*} title
     * @param {*} options
     * @returns
     * @memberof MessageBox
     */

  }, {
    key: "confirm",
    value: function confirm(message, title, options) {
      options = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["mixins"])({}, defaults, options || {});
      options.message = message;
      options.title = title;
      var btns = [{
        type: 'confirm',
        text: options.confirmButtonText,
        css: options.confirmButtonCss,
        handle: genCallback(options.confirm)
      }, {
        type: 'cancel',
        text: options.cancelButtonText,
        css: options.cancelButtonCss,
        handle: genCallback(options.cancel)
      }];
      return genMessageBox(options, btns);
    }
    /**
     * 销毁所有弹框
     * @date 2018-11-21
     * @static
     * @memberof MessageBox
     */

  }, {
    key: "destroy",
    value: function destroy() {
      instances.forEach(function (ins) {
        return ins.destroy();
      });
      instances.length = 0;
    }
  }]);

  return MessageBox;
}();
/* harmony default export */ __webpack_exports__["default"] = (MessageBox);

/***/ }),

/***/ "./src/components/message-box/template.js":
/*!************************************************!*\
  !*** ./src/components/message-box/template.js ***!
  \************************************************/
/*! exports provided: skeletonTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
var skeletonTpl = "\n<% if (icon) { %>\n<span class=\"nv-message-box__icon\">\n  <i class=\"<%= icon %>\"></i>\n</span>\n<% } %>\n<div class=\"nv-message-box__content\">\n  <div class=\"nv-message-box__message\"></div>\n  <% if (describe) { %>\n  <div class=\"nv-message-box__describe\"></div>\n  <% } %>\n</div>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl
});

/***/ }),

/***/ "./src/components/message/index.js":
/*!*****************************************!*\
  !*** ./src/components/message/index.js ***!
  \*****************************************/
/*! exports provided: Message, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/popup */ "./src/utils/popup.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template */ "./src/components/message/template.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





 // empty function

var noop = Function.prototype; // ui class name

var UI_NAME = 'nv-message'; // 选择器

var Selectors = {
  content: '.nv-alert__content',
  close: '.nv-alert__close' // 内置类型

};
var TYPES = ['success', 'info', 'error', 'warning']; // default config

var defaults = {
  // 类型
  type: 'info',
  // 图标类名，
  icon: '',
  // 内容文本
  content: '',
  // 自动关闭时间，单位毫秒，
  // 当设置为0时，将不不会自动关闭
  duration: 3000,
  // 默认情况下，为防止XSS等攻击，
  // 对传入的content做纯文本输出，
  // 当作为HTML字符串输出时，必须开启asHtml选项
  asHtml: false,
  // 显示关闭按钮
  closeable: true,
  // 自定义样式
  customClass: null,
  // 关闭时回调
  onClose: noop // default custom config

};
var customDefault = {
  closeable: true,
  duration: 3000 // global custom config

};
var customConfig = {}; // 用于保存已生成的Message实例

var instances = Object.create(null);
/**
 * render
 * @private
 * @memberof MessageBox
 */

function render() {
  var props = this.props,
      states = this.states;
  var $wrap = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["qsa"])('.nv-message-wrap', document)[0];

  if (!$wrap) {
    $wrap = document.createElement('div');
    $wrap.className = 'nv-message-wrap';
    document.body.appendChild($wrap);
  }

  $wrap.style.zIndex = _utils_popup__WEBPACK_IMPORTED_MODULE_3__["Popup"].nextZIndex();
  var $el = document.createElement('div');
  $el.className = UI_NAME;
  var $alert = document.createElement('div');
  $alert.setAttribute('role', 'alert');
  $alert.className = 'nv-alert';

  if (TYPES.indexOf(props.type) > -1) {
    $alert.classList.add("nv-alert--".concat(props.type));
  }

  var content = (props.content || '').toString();
  $alert.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(_template__WEBPACK_IMPORTED_MODULE_4__["skeletonTpl"], {
    closeable: props.closeable,
    icon: props.icon
  });
  $el.appendChild($alert);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["addClass"])($el, props.customClass);
  var $content = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["qsa"])(Selectors.content, $el)[0];

  if (props.asHtml) {
    $content.innerHTML = content;
  } else {
    $content.textContent = content;
  }

  $wrap.appendChild($el);
  $el.classList.add('nv-animated--alert-in');
  states.$el = $el;
  states.$close = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["qsa"])(Selectors.close, $el)[0];
  bindEvents.call(this);
}
/**
 * bind dom events
 * @private
 * @memberof MessageBox
 */


function bindEvents() {
  var _this = this;

  var props = this.props,
      states = this.states;
  states.handleClose = this.close.bind(this);
  states.$close && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["bind"])(states.$close, 'click', states.handleClose);
  var duration = props.duration;
  duration = +duration;

  if (duration > 0 && !isNaN(duration)) {
    states.timer = setTimeout(function () {
      _this.close();
    }, duration);
  }
}
/**
 * Message基类
 * 用于生产Message实例
 * @class MessageBox
 */


var MessageBox =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of MessageBox.
   * @param {*} options
   * @memberof MessageBox
   */
  function MessageBox(options) {
    _classCallCheck(this, MessageBox);

    if (!(this instanceof MessageBox)) {
      return new MessageBox(options);
    }

    this.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["mixins"])({}, defaults, customConfig, options || {});
    this.states = Object.create(null);
    this.states.id = '__message__' + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])();
    render.call(this);
    instances[this.states.id] = this;
  }
  /**
   * close
   * @public
   * @memberof MessageBox
   */


  _createClass(MessageBox, [{
    key: "close",
    value: function close() {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(this.props.onClose) && this.props.onClose();
      this.destroy();
    }
    /**
     * destroy
     * @public
     * @memberof MessageBox
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var states = this.states;

      if (states) {
        delete instances[states.id];
        states.$close && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["unbind"])(states.$close, 'click', states.handleClose);
        var $el = states.$el;

        if ($el) {
          $el.classList.add('nv-animated--alert-out');
          setTimeout(function () {
            $el && $el.parentNode.removeChild($el);
            $el = null;
          }, 200);
        }

        states.timer && clearTimeout(states.timer);
        this.states = null;
      }
    }
  }]);

  return MessageBox;
}();
/**
 *
 * 生成MessageBox的实例
 * @param {*} type
 * @param {*} content
 * @param {*} options
 * @returns
 */


function GenerateMessageInstance(type, content, options) {
  var config = {};
  var icon;

  switch (type) {
    case 'info':
      icon = 'nv-icon-circle-info';
      break;

    case 'success':
      icon = 'nv-icon-circle-check';
      break;

    case 'error':
      icon = 'nv-icon-circle-close';
      break;

    case 'warning':
      icon = 'nv-icon-circle-warning';
      break;
  }

  if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(options)) {
    config.onClose = options;
  } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(options)) {
    config = options;
  }

  config.type = type;
  config.content = content;

  if (config.icon === void 0) {
    config.icon = icon;
  }

  return new MessageBox(config);
}
/**
 *
 * Message静态类
 * @export
 * @class Message
 */


var Message =
/*#__PURE__*/
function () {
  function Message() {
    _classCallCheck(this, Message);
  }

  _createClass(Message, null, [{
    key: "success",

    /**
     *
     * 用于操作成功时提示
     * @static
     * @param {*} content
     * @param {*} options
     * @returns
     * @memberof Message
     */
    value: function success(content, options) {
      return GenerateMessageInstance('success', content, options);
    }
    /**
     *
     * 用于失败时提示
     * @static
     * @param {*} content
     * @param {*} options
     * @returns
     * @memberof Message
     */

  }, {
    key: "error",
    value: function error(content, options) {
      return GenerateMessageInstance('error', content, options);
    }
    /**
     *
     * 用于警告时提示
     * @static
     * @param {*} content
     * @param {*} options
     * @returns
     * @memberof Message
     */

  }, {
    key: "warning",
    value: function warning(content, options) {
      return GenerateMessageInstance('warning', content, options);
    }
    /**
     *
     * 用于消息提示
     * @static
     * @param {*} content
     * @param {*} options
     * @returns
     * @memberof Message
     */

  }, {
    key: "info",
    value: function info(content, options) {
      return GenerateMessageInstance('info', content, options);
    }
    /**
     * 用于配置全局的Message
     * 具体方法中的options优先于全局配置
     * @static
     * @param {*} config
     * @memberof Message
     */

  }, {
    key: "config",
    value: function config(_config) {
      if (_config === null || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(_config)) {
        customConfig = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["mixins"])({}, customDefault, _config || {});
      }
    }
    /**
     * 销毁所有的Message实例
     * 如页面切换时，销毁页面中所有的Message实例
     * @static
     * @memberof Message
     */

  }, {
    key: "destroy",
    value: function destroy() {
      for (var id in instances) {
        instances[id].destroy();
        delete instances[id];
      }

      var $wrap = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["qsa"])('.nv-message-wrap', document)[0];
      $wrap && $wrap.parentNode.removeChild($wrap);
      $wrap = null;
    }
  }]);

  return Message;
}();
/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./src/components/message/template.js":
/*!********************************************!*\
  !*** ./src/components/message/template.js ***!
  \********************************************/
/*! exports provided: skeletonTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
var skeletonTpl = "\n<div class=\"nv-alert__inner\">\n  <% if (icon) {%>\n  <span class=\"nv-alert__icon\"><i class=\"<%=icon%>\"></i></span>\n  <% }%>\n  <div class=\"nv-alert__content\"></div>\n  <% if(closeable) {%>\n  <button type=\"button\" class=\"nv-alert__close\" aria-label=\"Close\">\n    <i class=\"nv-icon-close\"></i>\n  </button>\n  <% }%>\n</div>\n";
/* harmony default export */ __webpack_exports__["default"] = (skeletonTpl);

/***/ }),

/***/ "./src/components/modal/index.js":
/*!***************************************!*\
  !*** ./src/components/modal/index.js ***!
  \***************************************/
/*! exports provided: Modal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/popup */ "./src/utils/popup.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/components/modal/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-11-19 10:32
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-19 10:32
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */





 // ui className

var UI_NAME = 'nv-modal'; // 是否是纯数字

var NUMBER_REG = /^\d+$/; // selectors

var Selectors = {
  dialog: '.nv-modal-dialog',
  title: '.nv-modal__title',
  closeBtn: '.nv-modal__close',
  body: '.nv-modal__body',
  footSlot: '.nv-modal__foot_slot',
  btns: '.nv-modal__foot_btns' // default config

};
var defaults = {
  // [Boolean] 默认是否打开
  visible: false,
  // [String | Boolean] 标题
  title: '',
  // [String | HTMLElement] 内容
  content: '',
  // [Boolean] 显示关闭按钮
  closeBtn: true,
  // [HTMLElement] 插入到的父级元素
  appendTo: document.body,
  // [Boolean] 显示遮罩层
  backdrop: true,
  // [String] 遮罩层背景色
  backdropBackground: 'rgba(0,0,0,.5)',
  // [Boolean] 点击遮罩层关闭
  backdropClose: true,
  // [Boolean] 按Esc键关闭
  escClose: true,
  // [ Number| String | null ] 模态框宽度
  width: null,
  // [ Number | String ] 距离顶部高度
  top: '10%',
  // [ String | null] 自定义样式
  customClass: null,

  /**
   * [Array | null | Boolean]
   * button: {
   *   text: [String] 按钮文本
   *   css: [String] 按钮样式
   *   hanlde: [Function] 按钮事件
   * }
   */
  btns: null,
  // [String | HTMLElement] btns同级插槽
  footSlot: null,
  // [Boolean] 是否锁屏
  scrollLock: true
  /**
   *
   * 生成底部按钮
   * @private
   * @param {*} btn
   * @returns
   */

};

function createBtn(btn) {
  var $el = document.createElement('button');
  $el.type = 'button';
  $el.textContent = btn.text;
  var handle = btn.handle;

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(handle)) {
    handle = this.close;
  }

  $el.__handle = handle.bind(this);
  $el.className = 'nv-btn nv-dialog__btn';
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])($el, btn.css);
  return $el;
}
/**
 * render
 * @private
 */


function render() {
  var _this = this;

  var props = this.props,
      states = this.states;
  var $el = document.createElement('div');
  $el.className = UI_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])($el, props.customClass);
  var $btns = null; // fixed 底部按钮参数

  var btns = [];

  if (props.btns) {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(props.btns)) {
      props.btns.forEach(function (btn) {
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(btn)) {
          btn.handle = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(btn.handle) ? btn.handle : null;
          btn.text = btn.text && btn.text.toString() || '';
          btn.css = btn.css && btn.css.toString() || '';
          btns.push(btn);
        }
      });
    } // 直接当做插槽传入，为了兼容VUE
    else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(props.btns)) {
        $btns = props.btns;
      }
  }

  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(_template__WEBPACK_IMPORTED_MODULE_5__["skeletonTpl"], {
    title: (props.title || '').toString(),
    closeBtn: !!props.closeBtn,
    footSlot: !!props.footSlot,
    btns: $btns || btns && btns.length
  });
  $el.style.display = 'none';
  props.appendTo.appendChild($el);
  $el.setAttribute('role', 'dialog');
  states.$el = $el;
  states.$dialog = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.dialog, $el)[0];
  states.$title = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.title, $el)[0];
  states.$closeBtn = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.closeBtn, $el)[0];
  states.$body = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.body, $el)[0];
  states.$footSlot = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.footSlot, $el)[0];
  states.$btnsWrap = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.btns, $el)[0];

  if (props.top) {
    var top;

    if (NUMBER_REG.test(props.top)) {
      top = props.top + 'px';
    } else if (!isNaN(parseFloat(props.top))) {
      top = props.top;
    }

    top && (states.$dialog.style.top = top);
  }

  if (props.width) {
    var width;

    if (NUMBER_REG.test(props.width)) {
      width = props.width + 'px';
    } else if (!isNaN(parseFloat(props.width))) {
      width = props.width;
    }

    width && (states.$dialog.style.width = width);
  } // render content


  if (props.content) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(props.content) ? states.$body.appendChild(props.content) : states.$body.innerHTML = props.content.toString();
  } // render footSlot


  if (props.footSlot && states.$footSlot) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(props.footSlot) ? states.$footSlot.appendChild(props.footSlot) : states.$footSlot.innerHTML = props.footSlot.toString();
  } // render btns


  if (states.$btnsWrap) {
    if (btns && btns.length) {
      states.$btns = [];
      btns.forEach(function (btn) {
        var $btn = createBtn.call(_this, btn);
        states.$btnsWrap.appendChild($btn);
        states.$btns.push($btn);
      });
    } else if ($btns) {
      states.isNativeBtn = true;
      states.$btnsWrap.appendChild($btns);
    }
  }

  bindEvents.call(this);

  if (props.visible) {
    this.open();
  }
}
/**
 * 绑定DOM事件
 * @private
 */


function bindEvents() {
  var props = this.props,
      states = this.states;
  var handles = states.handles;
  var self = this; // closeBtn 或者没有事件的按钮点击

  handles.closeBtnClick = this.close.bind(this, 'closeBtn'); // wrap click

  handles.wrapClick = function (event) {
    var target = event.target;

    if (target === states.$dialog || states.$dialog.contains(target)) {
      return;
    }

    self.close('backdrop');
  }; // close btn


  states.$closeBtn && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$closeBtn, 'click', handles.closeBtnClick); // foot btns

  if (!states.isNativeBtn) {
    states.$btns && states.$btns.forEach(function ($btn) {
      var handle = $btn.__handle || handles.closeBtnClick;
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])($btn, 'click', handle);
    });
  } // wrapClick


  props.backdrop && props.backdropClose && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$el, 'click', handles.wrapClick);
}
/**
 * 解除DOM事件绑定
 * @private
 */


function unbindEvents() {
  var props = this.props,
      states = this.states;
  var handles = states.handles; // close btn

  states.$closeBtn && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$closeBtn, 'click', handles.closeBtnClick); // foot btns

  states.$btns && states.$btns.forEach(function ($btn) {
    var handle = $btn.__handle || handles.closeBtnClick;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])($btn, 'click', handle);
  }); // wrapClick

  props.backdrop && props.backdropClose && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$el, 'click', handles.wrapClick);
}
/**
 *
 * 模态框组件
 * @export
 * @class Modal
 * @extends {Events}
 */


var Modal =
/*#__PURE__*/
function (_Events) {
  _inherits(Modal, _Events);

  /**
   * Creates an instance of Modal.
   * @param {*} options
   * @memberof Modal
   */
  function Modal(options) {
    var _this2;

    _classCallCheck(this, Modal);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this2)) instanceof Modal)) {
      return _possibleConstructorReturn(_this2, new Modal(options));
    }

    _this2.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {});

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(_this2.props.appendTo)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'appendTo\' 必须是一个DOM容器');
    }

    _this2.states = Object.create(null);
    _this2.states.handles = Object.create(null);
    _this2.states.id = UI_NAME + '_' + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["uuid"])();
    render.call(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }
  /**
   * open
   * @public
   * @memberof Modal
   */


  _createClass(Modal, [{
    key: "open",
    value: function open() {
      var states = this.states,
          props = this.props;
      var visible = states.visible,
          $el = states.$el;

      if (visible) {
        return;
      }

      var self = this;
      _utils_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"].open({
        id: states.id,
        backdrop: props.backdrop,
        backdropBackground: props.backdropBackground,
        scrollLock: props.scrollLock,
        zIndex: _utils_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"].nextZIndex(),
        escClose: props.escClose,
        closeHandle: function closeHandle(type) {
          self.close(type);
        }
      });
      $el.classList.add('nv-animated--fade-in');
      $el.style.display = 'block';
      $el.style.zIndex = _utils_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"].nextZIndex();
      $el.setAttribute('tabindex', 1);
      states.visible = true;
      this.emit('open', $el);
    }
    /**
     * close
     * @public
     * @param {*} type
     * @memberof Modal
     */

  }, {
    key: "close",
    value: function close(type) {
      var states = this.states;

      if (!states || !states.visible) {
        return;
      }

      _utils_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"].close(states.id);
      states.$el.style.display = 'none';
      states.$el.setAttribute('tabindex', -1);
      states.$el.classList.remove('nv-animated--fade-in');

      if (type !== 'destroy') {
        this.emit('close', type, states.$el);
      }

      states.visible = false;
    }
    /**
     * destroy
     * @public
     * @memberof Modal
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var states = this.states;
      this.close('destroy');
      unbindEvents.call(this);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["removeNode"])(states.$el);
      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return Modal;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["Events"]);
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/modal/template.js":
/*!******************************************!*\
  !*** ./src/components/modal/template.js ***!
  \******************************************/
/*! exports provided: skeletonTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
var skeletonTpl = "\n<div class=\"nv-modal-dialog\" role=\"document\">\n  <% if (title || closeBtn) { %>\n  <div class=\"nv-modal__head<% if(closeBtn) {%> has-close<% }%><% if(title) {%> has-title<% }%>\">\n    <h3 class=\"nv-modal__title\"><%=title%></h3>\n    <% if(closeBtn) {%>\n    <button type=\"button\" class=\"nv-modal__close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <i class=\"nv-icon-close\"></i>\n    </button>\n    <% }%>\n  </div>\n  <% }%>\n  <div class=\"nv-modal__body\">\n  </div>\n  <% if(footSlot || btns) {%>\n  <div class=\"nv-modal__foot\">\n    <% if(footSlot) {%>\n    <div class=\"nv-modal__foot_slot\"></div>\n    <% } %> \n    <% if(btns) {%>\n    <div class=\"nv-modal__foot_btns\"></div>\n    <% }%>\n  </div>\n  <% } %>\n</div>  \n";
/* harmony default export */ __webpack_exports__["default"] = (skeletonTpl);

/***/ }),

/***/ "./src/components/pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/pagination/index.js ***!
  \********************************************/
/*! exports provided: Pagination, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/i18n */ "./src/utils/i18n.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../locale */ "./src/locale/index.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../select */ "./src/components/select/index.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template */ "./src/components/pagination/template.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 分页器
 * Created: 2018-11-08 11:13
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-08 11:29
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */








 // ui className

var UI_NAME = 'nv-pagination'; // 最小可见页码数量值

var VISIBLE_MIN = 5; // 最大可见页码数量值

var VISIBLE_MAX = 21; // 可用layout元件

var LAYOUTS = ['total', 'prev', 'pager', 'next', 'sizes', 'jumper']; // layout元件与模板对应字典

var LAYOUT_TPL_MAP = {
  total: _template__WEBPACK_IMPORTED_MODULE_7__["totalTpl"],
  prev: _template__WEBPACK_IMPORTED_MODULE_7__["prevTpl"],
  pager: _template__WEBPACK_IMPORTED_MODULE_7__["pagerTpl"],
  next: _template__WEBPACK_IMPORTED_MODULE_7__["nextTpl"],
  sizes: _template__WEBPACK_IMPORTED_MODULE_7__["sizesTpl"],
  jumper: _template__WEBPACK_IMPORTED_MODULE_7__["jumperTpl"] // 内部选择器

};
var Selectors = {
  total: '.nv-pagination__total',
  prev: '.nv-pagination__prev',
  pagers: '.nv-pagination__pagers',
  next: '.nv-pagination__next',
  sizes: '.nv-pagination__sizes',
  jumper: '.nv-pagination__jumper',
  jumperInput: '.pagination-jumper__input',
  pager: '.nv-pager' // default config

};
var defaults = {
  // [ string ] 当前语言
  lang: 'zh-CN',
  // [ number ] 总条目数
  total: null,
  // [ number ] 每页显示条数
  limit: 10,
  // [ number ] 当前页码
  index: 1,

  /**
   * [ number ] 可见页码数量
   * 当总页数超过该值时其他页码会隐藏
   * 大于等于5小于等于21的奇数
   */
  visible: 5,

  /**
   * [ Boolean ] 是否显示截断点
   * 当总页码超过visible数时，其他页码会被显示为...
   */
  ellipsis: true,

  /**
   * [ string | array ] 元件布局
   * 可选元件：'total', 'prev', 'pager', 'next', 'sizes', 'jumper'
   * total: 共 {total} 条
   * prev: 上一页
   * pager: 数字分页，包括上/下页按钮
   * next: 下一页
   * sizes: limit选择器
   * jumper: 跳转到page页
   * 多个元件使用数组或者逗号分隔，元件顺序就是布局顺序
   */
  layout: 'prev, pager, next',

  /**
   * [ string ] 上一页按钮显示文本
   * default时将会显示为箭头
   */
  prevText: 'default',

  /**
   * [ string ] 下一页按钮显示文本
   * default时将会显示为箭头
   */
  nextText: 'default',

  /**
   * [ Array ] limit数选择器
   * 可选的每页显示条目数
   */
  sizes: [10, 20, 50, 100],
  // [ string ] 自定义样式
  customClass: null
  /**
   * 渲染
   * @private
   */

};

function render() {
  var _this = this;

  var props = this.props,
      states = this.states,
      $container = this.$container;
  var layouts = []; // fixed layout list

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(props.layout)) {
    var _layouts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(props.layout) ? props.layout : props.layout.split(',');

    _layouts.forEach(function (item) {
      item = item.trim();

      if (LAYOUTS.indexOf(item) > -1) {
        layouts.push(item);
      }
    });
  } else {
    layouts = ['prev', 'pager', 'next'];
  }

  var $el = document.createElement('div');
  $el.className = UI_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])($el, props.customClass);
  var html = ''; // 根据layout顺序渲染模板

  layouts.forEach(function (element) {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["hasKey"])(element, LAYOUT_TPL_MAP)) {
      var tpl = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(LAYOUT_TPL_MAP[element], {
        prevText: props.prevText === 'default' ? '<i class="nv-icon-arrow-left"></i>' : props.prevText,
        nextText: props.nextText === 'default' ? '<i class="nv-icon-arrow-right"></i>' : props.nextText,
        jumper: states.jumper
      });
      html += Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"])(tpl, states.locale, {});
    }
  });
  $el.innerHTML = html; // 缓存DOM

  states.$el = $el;
  states.$total = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.total, $el)[0];
  states.$prev = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.prev, $el)[0];
  states.$next = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.next, $el)[0];
  states.$pagers = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.pagers, $el)[0];
  states.$sizes = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.sizes, $el)[0];
  states.$jumper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.jumper, $el)[0];
  states.$jumperInput = states.$jumper && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.jumperInput, states.$jumper)[0]; // 设置limit选择器

  if (states.$sizes && states.sizes.length) {
    var options = getLimitOptions.call(this);
    var limitSelectIns = new _select__WEBPACK_IMPORTED_MODULE_6__["default"](Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])('input', states.$sizes)[0], {
      options: options,
      value: states.limit,
      selectClass: 'pagination-sizes-select'
    });
    states.limitSelectIns = limitSelectIns;
    limitSelectIns.on('change', function (value) {
      if (states.limit === value) {
        return;
      }

      _this.setLimit(value);
    });
  }

  $container.appendChild($el);
  updateDom.call(this);
  bindEvents.call(this);
}
/**
 * 渲染页码
 * @private
 */


function renderPagers() {
  var states = this.states;
  var data = getPagers.call(this);
  states.$pagers.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(_template__WEBPACK_IMPORTED_MODULE_7__["pagerItemsTpl"], {
    data: data
  });
}
/**
 * 绑定DOM事件
 * @private
 */


function bindEvents() {
  var self = this;
  var states = this.states;
  var handles = states.handles;

  if (states.$pagers) {
    // 页码点击事件
    handles.pagerClick = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["proxy"])(states.$pagers, Selectors.pager, function () {
      var classList = this.classList;

      if (classList.contains('nv-actived') || classList.contains('nv-pager--ellipsis')) {
        return;
      }

      var value = this.getAttribute('data-value');
      value = +value;

      if (value) {
        self.setIndex(value);
      }
    });
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$pagers, 'click', handles.pagerClick);
  } // prevBtn 点击事件


  handles.prevClick = function () {
    if (states.index > 1) {
      self.setIndex(states.index - 1);
    }
  }; // nextBtn 点击事件


  handles.nextClick = function () {
    if (states.index < states.pages) {
      self.setIndex(states.index + 1);
    }
  }; // jumperInput Change事件


  handles.jumperChange = function (e) {
    var value = e.target.value.trim();
    value = value === '' ? void 0 : +value;

    if (isNaN(value)) {
      value = states.jumper;
    } else {
      value = Math.round(Math.abs(value));
      value = Math.min(Math.max(1, value), states.pages);
    }

    self.setIndex(value);
  };

  states.$prev && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$prev, 'click', handles.prevClick);
  states.$next && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$next, 'click', handles.nextClick);
  states.$jumperInput && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$jumperInput, 'change', handles.jumperChange);
}
/**
 * 解绑DOM事件
 * @private
 */


function unbindEvents() {
  var states = this.states;
  var handles = states.handles;
  states.$pagers && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$pagers, 'click', handles.pagerClick);
  states.$prev && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$prev, 'click', handles.prevClick);
  states.$next && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$next, 'click', handles.nextClick);
  states.$jumperInput && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$jumperInput, 'change', handles.jumperChange);
}
/**
 * 获取limit选择器选项
 * @private
 */


function getLimitOptions() {
  var states = this.states;
  var sizes = states.sizes;
  var options = [];
  sizes && sizes.forEach(function (size) {
    options.push({
      value: size,
      label: size + ''
    });
  });
  return options;
}
/**
 * 生成页码
 * @private
 * @param {*} value
 * @param {*} index
 * @param {*} pages
 * @returns
 */


function genPager(value, index, pages) {
  var item = Object.create(null);
  item.value = value;
  item.active = value === index;
  item.first = value === 1;
  item.last = value === pages;
  return item;
}
/**
 * 验证prevBtn是否禁用
 * @private
 */


function isDisabledPrev() {
  var states = this.states;
  return states.index === 1;
}
/**
 * 验证nextBtn是否禁用
 * @private
 */


function isDisabledNext() {
  var states = this.states;
  return states.index === states.pages;
}
/**
 * 获取数字页码列表
 * @private
 */


function getPagers() {
  var states = this.states,
      props = this.props;
  var index = states.index,
      pages = states.pages;
  var visible = props.visible,
      ellipsis = props.ellipsis;
  var data = []; // 不显示截断点

  if (!ellipsis) {
    for (var i = 1; i <= pages; i++) {
      data.push(genPager(i, index, pages));
    }

    return data;
  } // 显示截断


  var _offset = (visible - 1) / 2;

  var offset = {
    start: index - _offset,
    end: index + _offset
  };

  if (offset.start < 1) {
    offset.end = offset.end + (1 - offset.start);
    offset.start = 1;
  }

  if (offset.end > pages) {
    offset.start = offset.start - (offset.end - pages);
    offset.end = pages;
  }

  if (offset.start < 1) {
    offset.start = 1;
  }

  var prevEllipsis = offset.start > 1;
  var nextEllipsis = offset.end < pages;

  if (prevEllipsis) {
    data.push(genPager(1, index, pages)); // 1

    data.push(genPager(-1, index, pages)); // ...
  }

  for (var _i = offset.start; _i <= offset.end; _i++) {
    data.push(genPager(_i, index, pages));
  }

  if (nextEllipsis) {
    data.push(genPager(-1, index, pages)); // ...

    data.push(genPager(pages, index, pages)); // pages
  }

  return data;
}
/**
 * 更新States
 * 主要是对传入的limit,index,total等值进行校验
 * 确保参数的可用性
 * @param {*} states
 * @private
 */


function updateStates(states) {
  var isUpdate = false;

  for (var k in states) {
    if (['total', 'limit', 'index'].indexOf(k) > -1) {
      var value = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(states[k]) ? void 0 : +states[k];

      if (k === 'index') {
        var _index = value;
        this.states[k] = !isNaN(_index) && _index > 0 ? Math.round(_index) : 1;
      } else if (k === 'limit') {
        var _limit = value;
        this.states[k] = !isNaN(_limit) && _limit > 0 ? Math.round(_limit) : 10;
      } else {
        var _total = value;
        this.states[k] = !isNaN(_total) && _total >= 0 ? Math.ceil(_total) : 0;
      }

      isUpdate = true;
    }
  }

  if (!isUpdate) {
    return;
  }

  var _this$states = this.states,
      total = _this$states.total,
      limit = _this$states.limit,
      index = _this$states.index; // total pages

  var pages = Math.ceil(total / limit);
  this.states.pages = pages;

  if (index > pages) {
    this.states.index = pages;
  }

  this.states.jumper = this.states.index;
}
/**
 * 更新每页显示条数的列表
 * 如果列表中不包含传入的limit
 * 则添加limit到该列表
 * 并且对limit列表进行排序操作
 * @private
 */


function updateSizes() {
  var props = this.props,
      states = this.states;
  var sizes = props.sizes;

  if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sizes)) {
    sizes = [states.limit];
  }

  if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sizes)) {
    var newSizes = [];
    sizes.map(function (size) {
      size = +size;

      if (!isNaN(size) && size > 0) {
        size = Math.floor(size);

        if (newSizes.indexOf(size) === -1) {
          newSizes.push(size);
        }
      }
    });
    sizes = newSizes;
  }

  if (sizes.indexOf(states.limit) === -1) {
    sizes.push(states.limit);
  }

  sizes.sort(function (a, b) {
    return a - b;
  });
  states.sizes = sizes;
}
/**
 * 更新DOM相关
 * @private
 */


function updateDom() {
  var states = this.states;
  var total = states.total,
      index = states.index,
      limit = states.limit,
      pages = states.pages; // 如果记录数为0,则不显示分页

  if (total === 0 || pages === 0) {
    states.$el.classList.add('nv-hide');
    return;
  }

  states.$el.classList.remove('nv-hide'); // 更新总记录数

  if (states.$total) {
    states.$total.innerHTML = _utils_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"]._(states.locale.total, {
      total: total,
      index: index,
      limit: limit,
      pages: pages
    });
  } // 更新数字分页


  if (states.$pagers) {
    renderPagers.call(this);
  } // 切换上一页按钮的禁用状态


  if (states.$prev) {
    var isDisabled = isDisabledPrev.call(this);
    states.$prev.classList[isDisabled ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_8__["CLASS_STATUS_DISABLED"]);
    isDisabled ? states.$prev.setAttribute('disabled', 'disabled') : states.$prev.removeAttribute('disabled');
  } // 切换下一页按钮的禁用状态


  if (states.$next) {
    var _isDisabled = isDisabledNext.call(this);

    states.$next.classList[_isDisabled ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_8__["CLASS_STATUS_DISABLED"]);
    _isDisabled ? states.$next.setAttribute('disabled', 'disabled') : states.$next.removeAttribute('disabled');
  } // 重设jumper的值,


  if (states.$jumperInput) {
    states.jumper = states.index;
    states.$jumperInput.value = states.jumper;
  }
}
/**
 * Pagination Component
 * @date 2018-11-15
 * @export
 * @class Pagination
 * @extends {Events}
 */


var Pagination =
/*#__PURE__*/
function (_Events) {
  _inherits(Pagination, _Events);

  /**
   * Creates an instance of Pagination.
   * @date 2018-11-15
   * @param {*} container
   * @param {*} options
   * @memberof Pagination
   */
  function Pagination(container, options) {
    var _this2;

    _classCallCheck(this, Pagination);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this2)) instanceof Pagination)) {
      return _possibleConstructorReturn(_this2, new Pagination(container, options));
    }

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(container)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'container\' 必须是一个DOM容器', 'type');
    }

    _this2.$container = container;
    _this2.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {});
    _this2.states = Object.create(null);
    _this2.states.handles = Object.create(null);
    _this2.states.pages = 0; // 初始化语言包

    var locales = _locale__WEBPACK_IMPORTED_MODULE_5__["default"][_this2.props.lang] || _locale__WEBPACK_IMPORTED_MODULE_5__["default"]['en'];
    _this2.states.locale = locales['pagination'] || Object.create(null); // 处理visible num

    var visible = _this2.props.visible;
    visible = +visible;

    if (!isNaN(visible)) {
      // 必须是奇数
      if (visible % 2 === 0) {
        visible++;
      }

      visible = Math.max(visible, VISIBLE_MIN);
      visible = Math.min(visible, VISIBLE_MAX);
    } else {
      visible = VISIBLE_MIN;
    }

    _this2.props.visible = visible; // 处理 total, index, limit

    updateStates.call(_assertThisInitialized(_assertThisInitialized(_this2)), _this2.props);
    updateSizes.call(_assertThisInitialized(_assertThisInitialized(_this2)));
    render.call(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }
  /**
   * 设置总记录数
   * 如异步获取某个列表时，同时会返回相应的总记录条数
   * 此时调用该方法可以更新组件
   * @param {Number} total
   * @public
   * @memberof Pagination
   */


  _createClass(Pagination, [{
    key: "setTotal",
    value: function setTotal(total) {
      updateStates.call(this, {
        total: total
      }); // total改变的话需要重新设置页码

      this.states.index = this.states.jumper = 1;
      updateDom.call(this);
    }
    /**
     * 设置当前页码
     * 用来从外部更新当前页码
     * 内部会自动校验页码的有效性
     * @param {Number} index
     * @public
     * @memberof Pagination
     */

  }, {
    key: "setIndex",
    value: function setIndex(index) {
      var oldIndex = this.states.index;
      updateStates.call(this, {
        index: index
      });
      updateDom.call(this);

      if (oldIndex !== this.states.index) {
        this.emit('change', this.states.index, this.states.limit, this.states.pages);
      }
    }
    /**
     * 设置每页显示条数
     * 如果每页显示条数列表（下拉列表）中不包含
     * 该值，会自动加入
     * @param {*} limit
     * @public
     * @memberof Pagination
     */

  }, {
    key: "setLimit",
    value: function setLimit(limit) {
      var states = this.states;
      var oldLimit = states.limit;
      updateStates.call(this, {
        limit: limit
      }); // 已经更新后的limit

      limit = states.limit; // 没有变化的化，不做任何操作

      if (limit === oldLimit) {
        return;
      } // 重置当前页码


      states.index = states.jumper = 1;
      updateDom.call(this);

      if (states.limitSelectIns) {
        var sizes = states.sizes; // 如果原有的sizeList里面不包含当前的limit,则插入进去

        if (sizes.indexOf(limit) === -1) {
          sizes.push(limit);
          sizes.sort(function (a, b) {
            return a - b;
          });
          states.sizes = sizes; // 更新limitSelect组件

          states.limitSelectIns.setOptions(getLimitOptions.call(this));
          states.limitSelectIns.setValue(limit);
        }
      }

      this.emit('change', this.states.index, this.states.limit, this.states.pages);
    }
    /**
     * 销毁当前组件
     * @public
     * @memberof Pagination
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var states = this.states;
      unbindEvents.call(this); // 移除当前DOM

      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["removeNode"])(states.$el); // 销毁limit选择器组件

      states.limitSelectIns && states.limitSelectIns.destroy();
      this.$container = null;
      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return Pagination;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["Events"]);
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/components/pagination/template.js":
/*!***********************************************!*\
  !*** ./src/components/pagination/template.js ***!
  \***********************************************/
/*! exports provided: totalTpl, prevTpl, nextTpl, pagerTpl, sizesTpl, jumperTpl, pagerItemsTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalTpl", function() { return totalTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevTpl", function() { return prevTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTpl", function() { return nextTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagerTpl", function() { return pagerTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizesTpl", function() { return sizesTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jumperTpl", function() { return jumperTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagerItemsTpl", function() { return pagerItemsTpl; });
// total record 
var totalTpl = "\n<span class=\"nv-pagination__cell nv-pagination__label nv-pagination__total\">{i18n:total}</span>\n"; // prev btn

var prevTpl = "\n<button type=\"button\" class=\"nv-pagination__cell nv-pagination__prev\">\n  <%= prevText %>\n</button>\n"; // next btn

var nextTpl = "\n<button type=\"button\" class=\"nv-pagination__cell nv-pagination__next\">\n  <%= nextText %>\n</button>\n"; // pagers wrap

var pagerTpl = "\n<ul class=\"nv-pagination__cell nv-pagination__pagers\">\n</ul>\n";
var sizesTpl = "\n<div class=\"nv-pagination__cell nv-pagination__sizes\">\n  <input type=\"text\">\n  <span class=\"nv-pagination__label\">{i18n:eachPage}</span>\n</div>\n";
var jumperTpl = "\n<div class=\"nv-pagination__cell nv-pagination__jumper\">\n  <span class=\"nv-pagination__label\">{i18n:jumper}</span>\n  <input type=\"text\" class=\"nv-input pagination-jumper__input\" value=\"<%= jumper%>\">\n  <span class=\"nv-pagination__label\">{i18n:unit}</span>\n</div>\n";
var pagerItemsTpl = "\n<% for(var i = 0, len = data.length; i < len; i++) {\n  var pager = data[i];\n%>\n  <% if(pager.value === -1) {%>\n    <li class=\"nv-pager nv-pager--ellipsis\"></li>\n  <% } else { %>\n    <li class=\"nv-pager<% if(pager.active){ %> nv-actived<% }%>\" data-value=\"<%= pager.value%>\"><%= pager.value %></li>\n  <% }%>\n<% }%>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  totalTpl: totalTpl,
  prevTpl: prevTpl,
  pagerTpl: pagerTpl,
  nextTpl: nextTpl,
  sizesTpl: sizesTpl,
  jumperTpl: jumperTpl,
  pagerItemsTpl: pagerItemsTpl
});

/***/ }),

/***/ "./src/components/picker/index.js":
/*!****************************************!*\
  !*** ./src/components/picker/index.js ***!
  \****************************************/
/*! exports provided: defaults, Picker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return Picker; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/popup */ "./src/utils/popup.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placements */ "./src/components/picker/placements.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template */ "./src/components/picker/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Popover/Select/DatePicker/TimePicker...
 * Created: 2018-11-13 02:14
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-13 02:27
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */






 // ui class name

var UI_NAME = 'nv-picker'; // selectors

var Selectors = {
  arrow: '.nv-picker__arrow',
  body: '.nv-picker__body' // 默认配置

};
var defaults = {
  // 触发方式 click|focus|hover
  trigger: 'click',
  // 内容，string | HTMLElement
  content: null,
  // 相对target位置
  placement: 'bottom',
  // 相对target距离
  margin: 12,
  // 自定义样式
  customClass: null,
  // 是否禁用
  disabled: false,
  // 是否显示箭头
  showArrow: true,
  // 自动校正位置
  autoCorrect: true,
  // 关闭时是隐藏还是销毁
  closeType: 'hide' // hide | destroy

  /**
   * target click
   * @param {*} event
   * @private 
   */

};

var handleToggle = function handleToggle() {
  var states = this.states;
  var display = states.$picker && states.$picker.style.display;

  if (display === 'none' || !states.visible) {
    this.open();
  } else {
    this.close();
  }
};
/**
 * 区域外点击
 * @param {*} event
 * @private 
 */


var handleDocumentClick = function handleDocumentClick(event) {
  var target = event.target;
  var $target = this.$target,
      states = this.states;
  var $picker = states.$picker;

  if (target !== $picker && target !== $target && $target && !$target.contains(target) && $picker && !$picker.contains(target)) {
    this.close();
  }
};
/**
 * 设置位置
 * @private
 */


var setPosition = function setPosition() {
  var states = this.states,
      $target = this.$target,
      props = this.props;
  var $picker = states.$picker;

  if ($picker && states.visible) {
    var placement = Object(_placements__WEBPACK_IMPORTED_MODULE_5__["getPlacement"])($target, $picker, props.placement, props.margin, props.autoCorrect);
    $picker.style.cssText += "top:".concat(placement.top, "px;left:").concat(placement.left, "px;");
    $picker.setAttribute('x-placement', placement.placement);
  }
};
/**
 * mouseenter event
 * @private
 */


function handleMouseenter() {
  this.states.hoverTimer && clearTimeout(this.states.hoverTimer);
  this.open();
}
/**
 * mouseleave event
 * @private
 */


function handleMouseleave() {
  var _this = this;

  this.states.hoverTimer = setTimeout(function () {
    _this.close();

    _this.states.hoverTimer = null;
  }, 200);
}
/**
 * picker mouseenter event
 * 200ms 内如果鼠标重新划过target或者picker，则清除定时器
 * @private
 */


function handlePickerMouseenter() {
  this.states.hoverTimer && clearTimeout(this.states.hoverTimer);
}
/**
 * 绑定事件
 * @private
 */


var bindEvents = function bindEvents() {
  var states = this.states,
      props = this.props,
      $target = this.$target;
  var handles = states.handles;
  handles.targetClick = handleToggle.bind(this);
  handles.documentClick = handleDocumentClick.bind(this);
  handles.open = this.open.bind(this);
  handles.close = this.close.bind(this);
  handles.resize = setPosition.bind(this);
  handles.targetMouseenter = handleMouseenter.bind(this);
  handles.mouseleave = handleMouseleave.bind(this);
  handles.pickerMouseenter = handlePickerMouseenter.bind(this);

  switch (props.trigger) {
    case 'focus':
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])($target, 'focusin', handles.targetClick);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])($target, 'focusout', handles.close);
      break;

    case 'hover':
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])($target, 'mouseenter', handles.targetMouseenter);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])($target, 'mouseleave', handles.mouseleave);
      break;

    case 'click':
    default:
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])($target, 'click', handles.targetClick);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(document, 'click', handles.documentClick);
      break;
  }

  window.addEventListener('resize', handles.resize);
  window.addEventListener('scroll', handles.resize);
  states.$scrollParent.addEventListener('scroll', handles.resize);
};
/**
 * 解绑事件
 * @private
 */


var unbindEvents = function unbindEvents() {
  var states = this.states,
      props = this.props,
      $target = this.$target;
  var handles = states.handles;

  switch (props.trigger) {
    case 'focus':
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])($target, 'focusin', handles.open);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])($target, 'focusout', handles.close);
      break;

    case 'hover':
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])($target, 'mouseenter', handles.open);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])($target, 'mouseleave', handles.close);
      break;

    case 'click':
    default:
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])($target, 'click', handles.targetClick);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(document, 'click', handles.documentClick);
      break;
  }

  states.$picker && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$picker, 'click', handles.pickerClick);
  window.removeEventListener('resize', handles.resize);
  window.removeEventListener('scroll', handles.resize);
  states.$scrollParent.removeEventListener('scroll', handles.resize);
};
/**
 * render dom
 * @private
 */


var render = function render() {
  var states = this.states,
      props = this.props;
  var $picker = document.createElement('div');
  $picker.className = UI_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])($picker, props.customClass); // render

  $picker.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["template"])(_template__WEBPACK_IMPORTED_MODULE_6__["skeletonTpl"], {
    showArrow: props.showArrow
  }); // insert content

  var $body = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.body, $picker)[0];

  if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(props.content)) {
    $body.appendChild(props.content);
  } else {
    $body.innerHTML = (props.content || '').toString();
  }

  $picker.style.display = 'none';
  document.body.appendChild($picker);
  states.$picker = $picker;
  states.visible = false;

  if (!states.handles.pickerClick) {
    var self = this;

    states.handles.pickerClick = function (event) {
      self.emit('click', event);
    };
  }

  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])($picker, 'click', states.handles.pickerClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])($picker, 'click', states.handles.pickerClick);

  if (props.trigger === 'hover') {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])($picker, 'mouseenter', states.handles.pickerMouseenter);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])($picker, 'mouseenter', states.handles.pickerMouseenter);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])($picker, 'mouseleave', states.handles.mouseleave);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])($picker, 'mouseleave', states.handles.mouseleave);
  }
};
/**
 * Picker Component
 * @date 2018-11-13
 * @export
 * @class Picker
 * @extends {Events}
 */


var Picker =
/*#__PURE__*/
function (_Events) {
  _inherits(Picker, _Events);

  /**
   * Creates an instance of Picker.
   * @date 2018-11-13
   * @param {*} target
   * @param {*} options
   * @memberof Picker
   */
  function Picker(target, options) {
    var _this2;

    _classCallCheck(this, Picker);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this));

    if (!target || !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(target)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'target\' 必须是一个DOM容器', 'type');
    }

    if (!(_assertThisInitialized(_assertThisInitialized(_this2)) instanceof Picker)) {
      return _possibleConstructorReturn(_this2, new Picker(target, options));
    }

    _this2.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {});
    _this2.$target = target;
    var margin = +_this2.props.margin;

    if (isNaN(margin)) {
      margin = 0;
    }

    _this2.props.margin = margin;
    var states = _this2.states = Object.create(null);
    states.visible = false;
    states.handles = Object.create(null);
    states.$scrollParent = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["getScrollParent"])(target);
    states.hoverTimer = null; // events bind

    bindEvents.call(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }
  /**
   * Open
   * @date 2018-11-13
   * @memberof Picker
   */


  _createClass(Picker, [{
    key: "open",
    value: function open() {
      var states = this.states,
          props = this.props;

      if (props.disabled) {
        return;
      }

      if (!states.$picker) {
        states.visible = false;
        render.call(this);
        this.emit('created', states.$picker);
      }

      var $picker = states.$picker; // 容错

      if (states.visible) {
        return;
      }

      $picker.style.zIndex = _utils_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"].nextZIndex();
      $picker.style.visibility = 'hidden';
      $picker.style.display = 'block';
      states.visible = true;
      setPosition.call(this);
      $picker.style.visibility = null;
      this.emit('open', $picker);
    }
    /**
     * Close
     * @date 2018-11-13
     * @memberof Picker
     */

  }, {
    key: "close",
    value: function close() {
      var states = this.states,
          props = this.props;
      var $picker = states.$picker;

      if (props.disabled || !states.visible || !$picker) {
        return;
      }

      if (props.closeType === 'destroy') {
        $picker && $picker.parentNode.removeChild($picker);
        states.$picker = null;
      } else {
        $picker.style.display = 'none';
      }

      this.emit('close', $picker);
      states.visible = false;
    }
    /**
     * update placement
     * @date 2018-11-13
     * @memberof Picker
     */

  }, {
    key: "updatePlacement",
    value: function updatePlacement() {
      if (this.props.disabled) {
        return;
      }

      setPosition.call(this);
    }
    /**
     * disable
     * @date 2018-11-13
     * @memberof Picker
     */

  }, {
    key: "disable",
    value: function disable() {
      this.props.disabled = true;
    }
    /**
     * enable
     * @date 2018-11-13
     * @memberof Picker
     */

  }, {
    key: "enable",
    value: function enable() {
      this.props.disabled = false;
    }
    /**
     * destroy
     * @date 2018-11-13
     * @memberof Picker
     */

  }, {
    key: "destroy",
    value: function destroy() {
      unbindEvents.call(this);
      var states = this.states;
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["removeNode"])(states.$picker);
      this.states = null;
      this.$target = null;
      this._events = null;
    }
  }]);

  return Picker;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["Events"]);
/* harmony default export */ __webpack_exports__["default"] = (Picker);

/***/ }),

/***/ "./src/components/picker/placements.js":
/*!*********************************************!*\
  !*** ./src/components/picker/placements.js ***!
  \*********************************************/
/*! exports provided: PLACEMENTS, getPlacement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEMENTS", function() { return PLACEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlacement", function() { return getPlacement; });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/*
 * File: placements.js
 * Project: @vnnox/novaui
 * Description: 自动获取Picker相对target的位置
 * Created: 2018-11-13 02:13
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-13 02:14
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

var PLACEMENTS = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'];
/**
 * 获取picker的placement
 * @param {Element} target 目标元素
 * @param {Element} picker picker元素
 * @param {string} placement one of PLACEMENTS
 * @param {number} margin 
 * @param {boolean} auto 自动调整位置
 * @returns {object}
 */

var getPlacement = function getPlacement(target, picker, placement, margin, auto) {
  placement = PLACEMENTS.indexOf(placement) > -1 ? placement : 'bottom';
  margin = margin || 0;
  var top;
  var left;
  var tarRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["getOffset"])(target);
  var width = picker.offsetWidth;
  var height = picker.offsetHeight;
  var tT = tarRect.top,
      tL = tarRect.left;
  var tW = target.offsetWidth;
  var tH = target.offsetHeight;

  if (auto) {
    var CW = window.innerWidth;
    var CH = window.innerHeight;
    var rect = target.getBoundingClientRect(); // target 距离底部的距离

    var rectBottom = rect.top + tH; // target 距离右部的距离

    var rectRight = rect.left + tW; // 上面放不下

    var aboveOverflow = height + margin > rect.top; // 下面放不下

    var belowOverflow = CH - rectBottom < height + margin; // 左边放不下

    var leftOverflow = width + margin > rect.left; // 右边放不下

    var rightOverflow = CW - rectRight < width + margin; // 如果上面放不下，则放在下面

    if (!!~placement.indexOf('top') && aboveOverflow) {
      placement = placement.replace('top', 'bottom');
    } // 如果下面放不下，且上面放的下，则放在上面
    else if (!!~placement.indexOf('bottom') && belowOverflow && !aboveOverflow) {
        placement = placement.replace('bottom', 'top');
      } // 如果左边放不下，则放在右边


    if (!!~placement.indexOf('left') && leftOverflow) {
      placement = placement.replace('left', 'right');
    } // 如果右边放不下并且左边放得下，则放在左边
    else if (!!~placement.indexOf('right') && rightOverflow && !leftOverflow) {
        placement = placement.replace('right', 'left');
      }
  }

  switch (placement) {
    case 'top':
      top = tT - height - margin;
      left = tL + tW / 2 - width / 2;
      break;

    case 'top-start':
      top = tT - height - margin;
      left = tL;
      break;

    case 'top-end':
      top = tT - height - margin;
      left = tL + tW - width;
      break;

    case 'bottom':
    default:
      top = tT + tH + margin;
      left = tL + tW / 2 - width / 2;
      break;

    case 'bottom-start':
      top = tT + tH + margin;
      left = tL;
      break;

    case 'bottom-end':
      top = tT + tH + margin;
      left = tL + tW - width;
      break;

    case 'left':
      top = tT + tH / 2 - height / 2;
      left = tL - width - margin;
      break;

    case 'left-start':
      top = tT;
      left = tL - width - margin;
      break;

    case 'left-end':
      top = tT + tH - height;
      left = tL - width - margin;
      break;

    case 'right':
      top = tT + tH / 2 - height / 2;
      left = tL + tW + margin;
      break;

    case 'right-start':
      top = tT;
      left = tL + tW + margin;
      break;

    case 'right-end':
      top = tT + tH - height;
      left = tL + tW + margin;
      break;
  }

  return {
    top: top,
    left: left,
    placement: placement
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  PLACEMENTS: PLACEMENTS,
  getPlacement: getPlacement
});

/***/ }),

/***/ "./src/components/picker/template.js":
/*!*******************************************!*\
  !*** ./src/components/picker/template.js ***!
  \*******************************************/
/*! exports provided: skeletonTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
var skeletonTpl = "\n<% if(showArrow) { %>\n<span class=\"nv-picker__arrow\"></span>\n<% }%>\n<div class=\"nv-picker__body\"></div>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl
});

/***/ }),

/***/ "./src/components/popover/index.js":
/*!*****************************************!*\
  !*** ./src/components/popover/index.js ***!
  \*****************************************/
/*! exports provided: Popover, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../picker */ "./src/components/picker/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template */ "./src/components/popover/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-11-22 09:14
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-22 09:15
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */





 // ui name

var UI_NAME = 'nv-popover'; // empty function

var noop = function noop() {}; // popover default config


var popoverDefaults = {
  title: '',
  width: '200px',
  asHtml: false,
  showConfirm: false,
  showCancel: false,
  confirmText: '是',
  cancelText: '否',
  confirmCss: 'nv-btn--primary',
  cancelCss: 'nv-btn--link',
  onConfirm: null,
  onCancel: null,
  customClass: '',
  closeType: 'destroy' // mixins picker default config

};
var defaults = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, _picker__WEBPACK_IMPORTED_MODULE_0__["defaults"], popoverDefaults); // selectors

var Selectors = {
  content: '.nv-popover__content',
  confirm: '.nv-popover__confirm',
  cancel: '.nv-popover__cancel'
  /**
   * 创建按钮
   * @param {*} text 
   * @param {*} css 
   * @param {*} handle 
   */

};

function genBtn(text, css, handle) {
  var btn = Object.create(null);
  handle = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(handle) ? handle : noop;
  var self = this;
  btn.text = text;
  btn.css = css;

  btn.handle = function () {
    if (handle() === false) {
      return;
    }

    self.close();
  };

  return btn;
}
/**
 * render
 * @private
 */


function render() {
  var props = this.props,
      states = this.states;
  var $el = document.createElement('div');
  $el.className = UI_NAME;
  var width = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getSize"])(props.width);

  if (width) {
    $el.style.width = width;
  }

  var _ref = {},
      confirm = _ref.confirm,
      cancel = _ref.cancel;

  if (props.showConfirm) {
    confirm = genBtn.call(this, props.confirmText, props.confirmCss, props.onConfirm);
    states.confirm = confirm.handle;
  }

  if (props.showCancel) {
    cancel = genBtn.call(this, props.cancelText, props.cancelCss, props.onCancel);
    states.cancel = cancel.handle;
  }

  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_4__["skeletonTpl"], {
    title: (props.title || '').toString().trim(),
    confirm: confirm,
    cancel: cancel
  });
  states.$el = $el;
  states.$content = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.content, $el)[0];
  states.$confirm = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.confirm, $el)[0];
  states.$cancel = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.cancel, $el)[0];
  states.$content[props.asHtml ? 'innerHTML' : 'textContent'] = (props.content || '').toString();
  initPickerInstance.call(this);
  bindEvents.call(this);
}
/**
 * bind dom events
 * @private
 */


function bindEvents() {
  var states = this.states;
  states.confirm && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$confirm, 'click', states.confirm);
  states.cancel && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$cancel, 'click', states.cancel);
}
/**
 * unbind dom events
 * @private
 */


function unbindEvents() {
  var states = this.states;
  states.confirm && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$confirm, 'click', states.confirm);
  states.cancel && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$cancel, 'click', states.cancel);
}
/**
 * init picker instance
 * @private
 */


function initPickerInstance() {
  var _this = this;

  var states = this.states,
      props = this.props;
  var options = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, props);

  for (var k in popoverDefaults) {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["hasKey"])(k, options)) {
      delete options[k];
    }
  }

  options.content = states.$el;
  options.customClass = (props.customClass || '') + ',nv-picker--popover';
  options.closeType = props.closeType || 'destroy';
  states.pickerInstance = new _picker__WEBPACK_IMPORTED_MODULE_0__["Picker"](states.$target, options);
  states.pickerInstance.on('open', function () {
    states.pickerOpened = true;

    _this.emit('open', states.pickerInstance);
  }).on('close', function () {
    states.pickerOpened = false;

    _this.emit('close', states.pickerInstance);
  });
}
/**
 * Popover Component
 * @export
 * @class Popover
 * @extends {Events}
 */


var Popover =
/*#__PURE__*/
function (_Events) {
  _inherits(Popover, _Events);

  /**
   * Creates an instance of Popover.
   * @param {*} target
   * @param {*} options
   * @memberof Popover
   */
  function Popover(target, options) {
    var _this2;

    _classCallCheck(this, Popover);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this2)) instanceof Popover)) {
      return _possibleConstructorReturn(_this2, new Popover(target, options));
    }

    _this2.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {});

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(target)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'target\' 必须是一个DOM元素');
    }

    _this2.states = Object.create(null);
    _this2.states.$target = target;
    _this2.states.pickerOpened = false;
    render.call(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }
  /**
   * open
   * @public
   * @memberof Popover
   */


  _createClass(Popover, [{
    key: "open",
    value: function open() {
      if (!this.states.pickerOpened) {
        this.states.pickerInstance.open();
      }
    }
    /**
     * close
     * @public
     * @memberof Popover
     */

  }, {
    key: "close",
    value: function close() {
      if (this.states.pickerOpened) {
        this.states.pickerInstance.close();
      }
    }
    /**
     * destroy
     * @public
     * @memberof Popover
     */

  }, {
    key: "destroy",
    value: function destroy() {
      unbindEvents.call(this);
      this.states.pickerInstance.destroy();
      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return Popover;
}(_utils_events__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./src/components/popover/template.js":
/*!********************************************!*\
  !*** ./src/components/popover/template.js ***!
  \********************************************/
/*! exports provided: skeletonTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
var skeletonTpl = "\n<%if (title) {%>\n  <h3 class=\"nv-popover__title\"><%= title%></h3>\n<% }%>  \n<div class=\"nv-popover__content\"></div>\n<% if (cancel || confirm) { %>\n<div class=\"nv-popover__btns\">\n  <% if(cancel) {%>\n  <button type=\"button\" class=\"nv-btn nv-btn--small nv-popover__cancel <%=cancel.css%>\"><%=cancel.text%></button>  \n  <% } if (confirm) {%>\n  <button type=\"button\" class=\"nv-btn nv-btn--small nv-popover__confirm <%=confirm.css%>\"><%=confirm.text%></button>\n  <% }%>    \n</div>\n<% }%>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl
});

/***/ }),

/***/ "./src/components/select/index.js":
/*!****************************************!*\
  !*** ./src/components/select/index.js ***!
  \****************************************/
/*! exports provided: Select, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/debounce */ "./src/utils/debounce.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../picker */ "./src/components/picker/index.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template */ "./src/components/select/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Select Picker
 * Created: 2018-11-13 02:32
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-15 09:07
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */







 // ui className

var UI_NAME = 'nv-select';
var UI_PICKER_NAME = 'nv-select-picker'; // 输入框可选尺寸

var INPUT_SIZE = ['small', 'large']; // 分组的属性名称

var ATTRIBUTE_GROUP = 'data-group'; // 索引的属性名称

var ATTRIBUTE_INDEX = 'data-index'; // selectors

var Selectors = {
  input: '.nv-select__value',
  clean: '.nv-select__clean',
  search: '.select-picker__search',
  optionsWrap: '.select-options__wrap',
  option: '.nv-select__option',
  openClass: 'nv-select--open' // default config

};
var defaults = {
  // [ string | number | boolean | array ] 初始值
  value: null,
  // [ string ] 显示在输入框中的取值key 
  valueKey: 'label',
  // option.label
  // [ boolean ] 多选
  multiple: false,
  // [ string ] 多选时，选中值在输入框中的展现模板
  multipleValueTpl: '{label}等{count}项',
  // [ array ] 选项
  options: [],
  // [ string ] 输入框占位符
  placeholder: '请选择',
  // [ boolean ] 分组
  groupable: false,
  // [ boolean ] 是否禁用
  disabled: false,
  // [ boolean ] 是否可以清除
  clearable: false,
  // [ boolean ] 是否可搜索
  searchable: false,
  // [ function ] 过滤器
  filter: null,
  // [ boolean ] 异步获取数据
  loadByAsync: false,
  // [ boolean ] 异步搜索数据
  searchByAsync: false,
  // [ string ] select name属性,
  name: null,
  // [ string ] // 输入框尺寸 [ 可选值 ] [ small | default | large ]
  inputSize: 'default',
  // [ string ] select自定义样式
  selectClass: null,
  // [ string ] picker自定义样式
  pickerClass: null,
  // [ string ] 加载中文案
  loadingText: '加载中...',
  // [ string ] 无选项文案
  noDataText: '无数据',
  // [ string ] 无匹配数据
  noMatchDataText: '无匹配数据',
  // [ function ] option渲染器
  render: null
  /**
   * 渲染select
   * @private
   */

};

function render() {
  var states = this.states,
      props = this.props;
  var $target = states.$target,
      isInput = states.isInput;
  var $select = document.createElement('div');
  $select.className = UI_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])($select, props.selectClass);

  if (props.disabled) {
    $select.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATUS_DISABLED"]);
  }

  if (props.multiple) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])($select, 'nv-select--multiple');
  } // 输入框尺寸样式


  var inputSizeClassName = props.inputSize !== 'default' && INPUT_SIZE.indexOf(props.inputSize) > -1 ? "nv-input--".concat(props.inputSize) : '';
  $select.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(_template__WEBPACK_IMPORTED_MODULE_7__["skeletonTpl"], {
    disabled: props.disabled,
    clearable: props.clearable,
    placeholder: props.placeholder,
    name: props.name,
    inputSizeClassName: inputSizeClassName
  });
  $select.setAttribute('role', 'combobox'); // 插入元素

  isInput ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["insertAfter"])($target, $select) : $target.appendChild($select);
  states.$select = $select;
  states.$input = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.input, $select)[0];
  states.$clean = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.clean, $select)[0];
  var $selectPicker = document.createElement('div');
  $selectPicker.className = UI_PICKER_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])($selectPicker, props.pickerClass);
  props.multiple && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])($selectPicker, 'select-picker--multiple');
  $selectPicker.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(_template__WEBPACK_IMPORTED_MODULE_7__["pickerSkeletonTpl"], {
    searchable: props.searchable,
    placeholder: props.searchPlaceholder || ''
  });
  states.$selectPicker = $selectPicker;
  states.$optionsWrap = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.optionsWrap, $selectPicker)[0]; // 实例化picker

  initPicker.call(this); // 绑定dom事件

  bindEvents.call(this);
}
/**
 * 初始化picker组件
 * @private
 */


function initPicker() {
  var _this = this;

  var states = this.states,
      props = this.props;
  var $select = states.$select,
      $selectPicker = states.$selectPicker; // 实例化picker

  states.pickerInstance = new _picker__WEBPACK_IMPORTED_MODULE_6__["Picker"]($select, {
    content: $selectPicker,
    placement: 'bottom-start',
    trigger: 'click',
    disabled: props.disabled,
    showArrow: false,
    margin: 2
  }); // picker open

  states.pickerInstance.on('open', function () {
    // 设置picker的最小宽度为input的宽度
    $selectPicker.style.minWidth = states.$input.offsetWidth + 'px'; // 如果是可搜索，则在picker打开时设置输入框可输入

    states.pickerOpened = true;

    if (props.searchable) {
      states.$input.removeAttribute('readonly');
      states.$input.value = ''; // 将placeholder设置为当前value

      states.label && states.$input.setAttribute('placeholder', states.label);
    }

    var index = -1;
    states.$options && states.$options.forEach(function ($option, idx) {
      if (index === -1 && $option.classList.contains(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_ACTIVED"])) {
        $option.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_HOVER"]);
        index = idx;
      } else {
        $option.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_HOVER"]);
      }
    });
    states.keydownIndex = index;

    _this.emit('open');

    $select.classList.add(Selectors.openClass);
  }); // picker close

  states.pickerInstance.on('close', function () {
    // 回复input的属性和value
    states.pickerOpened = false;
    states.keydownIndex = -1;
    states.$input.setAttribute('readonly', true);
    states.$input.value = states.label;
    states.$input.setAttribute('placeholder', props.placeholder || '');
    $select.classList.remove(Selectors.openClass);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["scrollTo"])(states.$optionsWrap, 0, 0); // 清空搜索

    if (states.keyword) {
      states.keyword = '';
      renderOptions.call(_this);
    }

    _this.emit('close');
  }); // picker click

  states.pickerInstance.on('click', function () {
    return states.$input.focus();
  });
}
/**
 * 渲染options list
 * @param {*} items
 * @private 
 */


function renderOptions(items) {
  var props = this.props,
      states = this.states;
  var options = states.options,
      $optionsWrap = states.$optionsWrap;
  items = items || options;
  states.$options = null;

  if (items.length) {
    $optionsWrap.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(props.groupable ? _template__WEBPACK_IMPORTED_MODULE_7__["optionGroupsTpl"] : _template__WEBPACK_IMPORTED_MODULE_7__["optionsTpl"], {
      options: items,
      disabled: props.disabled,
      render: function render(option, index, groupId) {
        var html;

        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(props.render)) {
          html = props.render(option, index, groupId);
        } else {
          html = option.label;
        }

        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(html) ? html : index;
      }
    });
    states.$options = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.option, $optionsWrap);
    toggleOptionsActived.call(this, items);
  } else {
    $optionsWrap.innerHTML = "<div class=\"nv-select__empty\">".concat(states.keyword ? props.noMatchDataText : props.noDataText, "</div>");
  }

  states.pickerInstance && states.pickerInstance.updatePlacement();
}
/**
 * 显示加载中
 * @private
 */


function renderLoading() {
  var props = this.props,
      states = this.states;
  var $optionsWrap = states.$optionsWrap;
  states.$options = null;
  $optionsWrap.innerHTML = "<div class=\"nv-select__loading\">".concat(props.loadingText, "</div>");
  states.pickerInstance && states.pickerInstance.updatePlacement();
}
/**
 * 设置指定option元素选中
 * @param {array} options 选项列表
 * @private
 */


function toggleOptionsActived(options) {
  var states = this.states,
      props = this.props;
  var value = states.value,
      $options = states.$options;

  if (!$options || value === void 0 || value === null || !options.length) {
    return;
  }

  var thisValue = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value) ? value : [value];
  $options.forEach(function ($el, idx) {
    var group = +$el.getAttribute(ATTRIBUTE_GROUP);
    var index = +$el.getAttribute(ATTRIBUTE_INDEX);
    var currentValue;

    if (props.groupable) {
      currentValue = options[group].options[index].value;
    } else {
      currentValue = options[index].value;
    }

    if (thisValue.indexOf(currentValue) > -1) {
      $el.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_ACTIVED"]);

      if (states.keydownIndex === -1) {
        states.keydownIndex = idx;
      }
    } else {
      $el.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_ACTIVED"]);
    }
  });
}
/**
 * select获得焦点
 * @private
 * @param {*} event 
 */


function handleSelectFocus(event) {
  var states = this.states,
      props = this.props;

  if (props.disabled) {
    return;
  }

  states.focusTimer && clearTimeout(states.focusTimer); // 如果之前已经获取焦点，为防止重复触发事件

  if (!states.focusin) {
    this.emit('focus', event);
  }

  states.focusin = true;
  states.$input.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_FOCUS"]);
}
/**
 * select 失去焦点
 * @private
 * @param {*} event 
 */


function handleSelectBlur(event) {
  var _this2 = this;

  var states = this.states,
      props = this.props;

  if (props.disabled) {
    return;
  }

  states.focusTimer && clearTimeout(states.focusTimer); // 在picker上面点击使select获取焦点，实际上是先失去焦点，再获取的。
  // 这里定时器保持其状态不变

  states.focusTimer = setTimeout(function () {
    states.focusin = false;
    states.$input.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_FOCUS"]);
    states.focusTimer = null;

    _this2.emit('blur', event);
  }, 200);
}
/**
 * 清空按钮点击
 * @private
 * @param {*} event
 */


function handleCleanClick(event) {
  var states = this.states,
      props = this.props;

  if (props.clearable && states.$select.classList.contains('show-clean')) {
    event.stopPropagation();
    states.pickerInstance.close();
    this.clean();
  }
}
/**
 * 键盘事件
 * @private
 * @param {*} event 
 */


function handleInputKeydown(event) {
  if (!this.states.pickerOpened) {
    return;
  }

  var code = event.keyCode;

  if (code === 13 || code === 27 || code === 38 || code === 40) {
    event.preventDefault();

    switch (code) {
      case 38:
        toggleOptionSelectedByKeydown.call(this, 'prev');
        break;

      case 40:
        toggleOptionSelectedByKeydown.call(this, 'next');
        break;

      case 27:
        this.states.pickerInstance.close();
        break;

      case 13:
        toggleSelectedOptionByEnter.call(this);
        break;
    }
  }
}
/**
 *
 * 通过上下键来获取当前切换到的选项的索引
 * @private
 * @param {*} index
 * @param {*} type
 * @param {*} $options
 * @returns
 */


function getIndex(index, type, $options) {
  var len = $options.length - 1;

  if (type === 'prev') {
    index--;
  } else {
    index++;
  }

  if (index < 0) {
    index = len;
  }

  if (index > len) {
    index = 0;
  }

  if ($options[index].classList.contains(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATUS_DISABLED"])) {
    return getIndex(type === 'prev' ? --index : ++index, type, $options);
  }

  return index;
}
/**
 * 通过键盘来切换选项
 * @private
 * @param {*} type 
 */


function toggleOptionSelectedByKeydown(type) {
  var states = this.states;
  var $options = states.$options;
  var index = states.keydownIndex;
  index = getIndex(index, type, $options);
  states.keydownIndex = index;
  $options.forEach(function ($option, idx) {
    if (idx === index) {
      $option.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_HOVER"]);
    } else {
      $option.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATES_HOVER"]);
    }
  });
  var offset = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getOffsetByParent"])($options[index], states.$optionsWrap);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["scrollTo"])(states.$optionsWrap, offset.top, 0);
}
/**
 * 通过enter键来切换选项的选中状态
 * @private
 */


function toggleSelectedOptionByEnter() {
  var states = this.states,
      props = this.props;
  var $options = states.$options;
  var value = states.value;
  var $option = $options[states.keydownIndex];
  var group = $option.getAttribute(ATTRIBUTE_GROUP);
  var index = $option.getAttribute(ATTRIBUTE_INDEX);
  var option;

  if (props.groupable) {
    option = states.options[group].options[index];
  } else {
    option = states.options[index];
  }

  if (!option || option.disabled) {
    return;
  }

  if (!props.multiple) {
    this.setValue(option.value, true);
    states.pickerInstance.close();
  } else {
    var findIndex = value.indexOf(option.value);

    if (findIndex > -1) {
      value.splice(findIndex, 1);
    } else {
      value.push(option.value);
    }

    this.setValue(value, true);
  }
}
/**
 * bind events
 * @private
 */


function bindEvents() {
  var props = this.props,
      states = this.states;
  var handles = states.handles;
  var self = this;
  /**
   * 代理事件
   * 选项点击事件
   */

  handles.optionClick = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["proxy"])(states.$optionsWrap, Selectors.option, function () {
    var options = states.options;
    var currentValue = states.value || [];
    currentValue = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(currentValue) ? currentValue : [currentValue];
    var groupIndex = this.getAttribute(ATTRIBUTE_GROUP);
    var index = this.getAttribute(ATTRIBUTE_INDEX);
    var option;

    if (props.groupable) {
      option = options[groupIndex] && options[groupIndex].options && options[groupIndex].options[index];
    } else {
      option = options[index];
    }

    var selectedIndex = currentValue.indexOf(option.value);

    if (option && !option.disabled) {
      // 如果是多选
      // 如果已经选中，则需要取消选择
      if (props.multiple) {
        selectedIndex > -1 ? currentValue.splice(selectedIndex, 1) : currentValue.push(option.value);
      } else {
        // 单选的话就直接使用当前值
        currentValue = option.value;
        states.pickerInstance.close();
      }

      self.setValue(currentValue, true);
    }
  }); // select focus and blur

  handles.selectFocus = handleSelectFocus.bind(this);
  handles.selectBlur = handleSelectBlur.bind(this);

  handles.selectClick = function () {
    if (!props.disabled) {
      states.$input.focus();
    }
  }; // clean btn click


  handles.cleanClick = handleCleanClick.bind(this); // input keyup

  handles.searchOption = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["debounce"])(function () {
    if (!props.searchable) {
      return;
    }

    var value = states.$input.value;
    value = value && value.trim();
    states.keyword = value;
    searchOptions.call(self);
  }, props.searchByAsync ? 300 : 100);
  handles.inputKeydown = handleInputKeydown.bind(this);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$optionsWrap, 'click', handles.optionClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$input, 'focusin', handles.selectFocus);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$input, 'focusout', handles.selectBlur);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$select, 'click', handles.selectClick);
  states.$clean && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$clean, 'click', handles.cleanClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$input, 'keyup', handles.searchOption);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$input, 'keydown', handles.inputKeydown);
}
/**
 * 解绑事件
 * @private
 */


function unbindEvents() {
  var states = this.states;
  var handles = states.handles;
  states.$optionsWrap && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$optionsWrap, 'click', handles.optionClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$input, 'focusin', handles.selectFocus);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$input, 'focusout', handles.selectBlur);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$select, 'click', handles.selectClick);
  states.$clean && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$clean, 'click', handles.cleanClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$input, 'keyup', handles.searchOption);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$input, 'keydown', handles.inputKeydown);
}
/**
 * 搜索选项
 * @private
 */


function searchOptions() {
  var states = this.states,
      props = this.props; // 显示loading

  renderLoading.call(this);
  this.emit('search', states.keyword, states.options); // 如果是远程搜索，直接结束，等待请求后调用setOptions
  // 远程搜索的话需要重置options

  if (props.searchByAsync) {
    states.options.length = 0;
    states.$option = null;
    return;
  } // 本地搜索


  renderOptions.call(this, filterOptions.call(this));
}
/**
 * 过滤选项
 * @private
 */


function filterOptions() {
  var states = this.states,
      props = this.props;
  var options = states.options;

  if (!options || !options.length) {
    return [];
  }

  var keyword = states.keyword;

  if (keyword) {
    // 如果自定义了过滤器
    if (props.filter && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(props.filter)) {
      var _items = props.filter(keyword, options);

      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(_items) ? _items : options;
    } // 否则匹配关键字


    var items = [];
    var reg = new RegExp(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(keyword), 'i');
    options.map(function (item) {
      if (props.groupable) {
        var child = item.options.filter(function (option) {
          return reg.test(option.label || option.value) || reg.test(option.value);
        });

        if (child.length) {
          items.push({
            label: item.label,
            options: child
          });
        }
      } else {
        if (reg.test(item.label || item.value) || reg.test(item.value)) {
          items.push(item);
        }
      }
    });
    return items;
  } else {
    return options;
  }
}
/**
 * 通过value查找option
 * @private
 * @param {*} value 
 * @returns {object | void 0}
 */


function findOptionByValue(value) {
  var props = this.props,
      states = this.states;
  var options = states.options;
  var size = options.length;
  var option;

  if (props.groupable) {
    var g = -1;

    while (++g < size) {
      var group = options[g].options;

      for (var i = 0, len = group.length; i < len; i++) {
        if (!group[i].disabled && group[i].value === value) {
          option = group[i];
          break;
        }
      }
    }
  } else {
    var _i = -1;

    while (++_i < size) {
      if (!options[_i].disabled && options[_i].value === value) {
        option = options[_i];
        break;
      }
    }
  }

  return option;
}
/**
 * Select Component
 * @date 2018-11-15
 * @export
 * @class Select
 * @extends {Events}
 */


var Select =
/*#__PURE__*/
function (_Events) {
  _inherits(Select, _Events);

  /**
   * Creates an instance of Select.
   * @date 2018-11-15
   * @param {*} target
   * @param {*} options
   * @memberof Select
   */
  function Select(target, options) {
    var _this3;

    _classCallCheck(this, Select);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this3)) instanceof Select)) {
      return _possibleConstructorReturn(_this3, new Select(target, options));
    }

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(target)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'target\' 必须是一个DOM容器', 'type');
    }

    var isInput = target.nodeName === 'INPUT';

    if (isInput) {
      target.setAttribute('hidden', true);
    }

    _this3.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options);
    _this3.states = Object.create(null);
    _this3.states.$target = target;
    _this3.states.isInput = isInput; // 选项列表

    _this3.states.options = []; // 当前值

    _this3.states.value = null; // 当前输入框中的值

    _this3.states.label = '';
    _this3.states.keyword = '';
    _this3.states.focusin = false;
    _this3.states.handles = Object.create(null);
    _this3.states.pickerOpened = false; // 通过keydown选中的元素索引

    _this3.states.keydownIndex = -1;
    ['label', 'value'].indexOf(_this3.props.valueKey) === -1 && (_this3.props.valueKey = 'label');
    render.call(_assertThisInitialized(_assertThisInitialized(_this3)));

    if (!_this3.props.loadByAsync) {
      _this3.setOptions(_this3.props.options);
    } else {
      // 显示加载中，直到options加载完成，调用setOptions方法
      renderLoading.call(_assertThisInitialized(_assertThisInitialized(_this3)));
    }

    _this3.setValue(_this3.props.value, false);

    return _this3;
  }
  /**
   * set options
   * @date 2018-11-15
   * @param {*} options
   * @memberof Select
   */


  _createClass(Select, [{
    key: "setOptions",
    value: function setOptions(options) {
      var items = [];
      var props = this.props,
          states = this.states;

      if (options && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(options) && options.length) {
        options.forEach(function (option) {
          if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(option)) {
            // 如果是分组
            var item = Object.create(null);

            if (props.groupable) {
              item.label = option.label;
              item.options = [];

              if (option.options && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(option.options)) {
                option.options.forEach(function (child) {
                  if (child.value !== void 0) {
                    item.options.push({
                      label: child.label || child.value,
                      value: child.value,
                      disabled: child.disabled
                    });
                  }
                });
              }
            } else {
              if (option.value !== void 0) {
                item = {
                  label: option.label || option.value,
                  value: option.value,
                  disabled: option.disabled
                };
              }
            }

            items.push(item);
          }
        });
      }

      states.options = items;
      renderOptions.call(this);
    }
    /**
     * set value
     * @date 2018-11-15
     * @param {*} value
     * @param {*} isChange
     * @memberof Select
     */

  }, {
    key: "setValue",
    value: function setValue(value, isChange) {
      var _this4 = this;

      var props = this.props,
          states = this.states;

      if (props.disabled) {
        return;
      }

      var _value = [];
      var selectedOptions = [];

      if (value !== void 0 && value !== null) {
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(value)) {
          _value.push(value);
        } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
          _value = _value.concat(value);
        }
      }

      _value.forEach(function (item) {
        var option = findOptionByValue.call(_this4, item);

        if (option) {
          selectedOptions.push(option);
        }
      });

      var label;
      var thisValue;
      var selectedLen = selectedOptions.length;

      if (selectedLen) {
        if (!props.multiple) {
          selectedOptions = selectedOptions[0];
          label = selectedOptions[props.valueKey];
          thisValue = selectedOptions.value;
        } else {
          thisValue = [];

          if (selectedLen === 1) {
            label = selectedOptions[0][props.valueKey];
          } else {
            // 多选的时候显示为 XXX等n项
            label = props.multipleValueTpl.replace(/{label}/, selectedOptions[0][props.valueKey]).replace(/{count}/, selectedOptions.length);
          }

          selectedOptions.forEach(function (option) {
            return thisValue.push(option.value);
          });
        }
      } else {
        thisValue = props.multiple ? [] : null;
      }

      this.states.value = thisValue || null; // 切换选中值样式

      toggleOptionsActived.call(this, states.options); // 设置输入框的显示值

      states.label = label || '';
      states.$input.value = states.label; // display cleanbtn

      var hasValue = props.multiple ? thisValue.length : thisValue;

      if (hasValue && props.clearable) {
        states.$select.classList.add('show-clean');
      } else {
        states.$select.classList.remove('show-clean');
      }

      if (isChange) {
        this.emit('change', thisValue, selectedOptions);
      }
    }
    /**
     * get value
     * @date 2018-11-15
     * @returns
     * @memberof Select
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.states.value;
    }
    /**
     * clean value
     * @date 2018-11-15
     * @memberof Select
     */

  }, {
    key: "clean",
    value: function clean() {
      if (this.props.disabled) {
        return;
      }

      this.setValue(null, true);
    }
    /**
     * disable the component
     * @date 2018-11-15
     * @memberof Select
     */

  }, {
    key: "disable",
    value: function disable() {
      var props = this.props,
          states = this.states;
      var $select = states.$select,
          $input = states.$input;
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["addClass"])($select, _utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATUS_DISABLED"]);
      $input.setAttribute('disabled', true);
      props.disabled = true;

      if (states.pickerInstance) {
        states.pickerInstance.close();
        states.pickerInstance.disable();
      }
    }
    /**
     * enable the component
     * @date 2018-11-15
     * @memberof Select
     */

  }, {
    key: "enable",
    value: function enable() {
      var props = this.props,
          states = this.states;
      var $select = states.$select,
          $input = states.$input;
      $select.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATUS_DISABLED"]);
      $input.removeAttribute('disabled');
      props.disabled = false;
      renderOptions.call(this, states.options);
      states.pickerInstance && states.pickerInstance.enable();
    }
    /**
     * destroy
     * @date 2018-11-15
     * @memberof Select
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var states = this.states;
      var $target = states.$target;
      states.focusTimer && clearTimeout(states.focusTimer);
      states.pickerInstance && states.pickerInstance.destroy();
      unbindEvents.call(this);
      $target && $target.removeAttribute('hidden');
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["removeNode"])(states.$select);
      this.states = null;
      this.$target = null;
      this._events = null;
    }
  }]);

  return Select;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["Events"]);
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./src/components/select/template.js":
/*!*******************************************!*\
  !*** ./src/components/select/template.js ***!
  \*******************************************/
/*! exports provided: skeletonTpl, pickerSkeletonTpl, optionGroupsTpl, optionsTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerSkeletonTpl", function() { return pickerSkeletonTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionGroupsTpl", function() { return optionGroupsTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTpl", function() { return optionsTpl; });
// 骨架
var skeletonTpl = "\n<input type=\"text\" class=\"nv-input nv-select__value\" name=\"<%=name%>\" readonly autocomplete=\"off\"<%if (disabled) {%> disabled<% } if (placeholder) {%> placeholder=\"<%=placeholder%>\"<%}%> />\n<% if (clearable) { %>\n<a class=\"nv-select__clean\"><i class=\"nv-icon-close\"></i></a>\n<% } %> \n"; // picker骨架

var pickerSkeletonTpl = "\n<div class=\"select-options__wrap\"></div>\n"; // options group

var optionGroupsTpl = "\n<% for(var i = 0, len = options.length; i < len; i++) { \n  var group = options[i];\n%>\n<div class=\"nv-select__group\">\n  <h5 class=\"nv-select__title\"><%= group.label%></h5>\n  <ul class=\"nv-select__options\">\n    <% for(var j = 0, size = group.options.length; j < size; j++) { \n      var option = group.options[j];\n    %>\n    <li class=\"nv-select__option<% if (disabled || option.disabled) {%> nv-disabled<% }%>\" data-group=\"<%= i%>\" data-index=\"<%= j%>\"><%= render(option, j, i)%></li>\n    <% }%>\n  </ul>\n</div>\n<% }%>\n"; // options

var optionsTpl = "\n<ul class=\"nv-select__options\">\n  <% for(var j = 0, size = options.length; j < size; j++) { \n    var option = options[j];\n  %>\n  <li class=\"nv-select__option<% if (disabled || option.disabled) {%> nv-disabled<% }%>\" data-group=\"0\" data-index=\"<%= j%>\"><%= render(option, j, 0)%></li>\n  <% }%>\n</ul>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl,
  pickerSkeletonTpl: pickerSkeletonTpl,
  optionGroupsTpl: optionGroupsTpl,
  optionsTpl: optionsTpl
});

/***/ }),

/***/ "./src/components/slider/index.js":
/*!****************************************!*\
  !*** ./src/components/slider/index.js ***!
  \****************************************/
/*! exports provided: Slider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _input_number_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-number/utils */ "./src/components/input-number/utils.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template */ "./src/components/slider/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Slider Component
 * Created: 2018-11-16 10:17
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-16 11:08
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */






 // ui name

var UI_NAME = 'nv-slider'; // 选择器

var Selectors = {
  runway: '.nv-slider__runway',
  progress: '.nv-slider__progress',
  thumb: '.nv-slider__thumb',
  tooltip: '.nv-slider__tooltip' // input 原生属性

};
var NATIVE_PROPERTIES = ['value', 'disabled', 'min', 'max', 'step']; // default config

var defaults = {
  // 当前值
  value: 0,
  // min value
  min: 0,
  // max value
  max: 100,
  // step
  step: 1,
  // 精度
  precision: null,
  // 禁用
  disabled: false,
  // tooltip
  tooltip: true,
  // 垂直
  vertical: false,
  // vertical 时必须指定高度
  height: '200px',
  // 自定义样式
  customClass: null,
  // 格式化
  tipFormatter: null
  /**
   * render
   * @private
   */

};

function render() {
  var props = this.props,
      states = this.states;
  var $container = states.$container;
  var $el = document.createElement('div');
  $el.className = UI_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])($el, props.customClass);
  props.disabled && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])($el, _utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATUS_DISABLED"]);
  props.vertical && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])($el, 'nv-slider--vertical');
  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_1__["template"])(_template__WEBPACK_IMPORTED_MODULE_6__["skeletonTpl"], {
    tooltip: props.tooltip,
    disabled: props.disabled
  }); // 无障碍属性

  $el.setAttribute('role', 'slider');
  $el.setAttribute('aria-valuemin', props.min);
  $el.setAttribute('aria-valuemax', props.max);
  $el.setAttribute('aria-orientation', props.vertical ? 'vertical' : 'horizontal');
  $el.setAttribute('aria-disabled', props.disabled);

  if (states.isInput) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["insertAfter"])($container, $el);
  } else {
    $container.appendChild($el);
  } // cached dom


  states.$el = $el;
  states.$runway = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.runway, $el)[0];
  states.$progress = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.progress, $el)[0];
  states.$thumb = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.thumb, $el)[0];
  states.$tooltip = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.tooltip, $el)[0]; // fixed height

  if (props.vertical) {
    var height = props.height;

    if (/\d+/g.test(height)) {
      height = Math.abs(parseFloat(height)) + 'px';
    }

    states.$runway.style.height = height;
  }

  bindEvents.call(this);
}
/**
 * bind events
 * @private
 */


function bindEvents() {
  var states = this.states;
  var handles = states.handles;
  handles.dragStart = handleDragStart.bind(this);
  handles.dragMove = handleDragMove.bind(this);
  handles.dragEnd = handleDragEnd.bind(this);
  handles.runwayClick = handleRunwayClick.bind(this);
  handles.keydown = handleKeydown.bind(this);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$runway, 'click', handles.runwayClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$thumb, 'mousedown', handles.dragStart);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$thumb, 'touchstart', handles.dragStart);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$thumb, 'keydown', handles.keydown);
}
/**
 * unbind events
 * @private
 */


function unbindEvents() {
  var states = this.states;
  var handles = states.handles;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$runway, 'click', handles.runwayClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$thumb, 'mousedown', handles.dragStart);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$thumb, 'touchstart', handles.dragStart);
}
/**
 * 获取一个兼容移动端的event
 * @method
 * @param {*} event 
 */


function getEvent(event) {
  if (event.type.indexOf('touch') > -1) {
    event.clientY = event.touches[0].clientY;
    event.clientX = event.touches[0].clientX;
  }

  return event;
}
/**
 * 通过鼠标位置计算当前值
 * @private
 * @param {*} event 
 */


function getValueByEvent(event) {
  var props = this.props,
      states = this.states;
  var rect = states.rect;
  event = getEvent(event);
  var pos = props.vertical ? event.clientY : event.clientX;
  var offset = props.vertical ? rect.top + rect.height - pos : pos - rect.left;
  var value = getValueByOffset.call(this, offset) + props.min;
  return value;
}
/**
 * 通过位移计算值
 * @private
 * @param {*} offset 
 */


function getValueByOffset(offset) {
  var props = this.props,
      states = this.states;
  var rect = states.rect,
      segmentation = states.segmentation;
  var step = props.step,
      vertical = props.vertical;
  var value = 0;

  if (isNaN(offset)) {
    return value;
  }

  value = Math.round(offset / ((vertical ? rect.height : rect.width) / segmentation)) * step;
  return value;
}
/**
 * mousedown | touchstart
 * @private
 * @param {*} event 
 */


function handleDragStart(event) {
  var props = this.props,
      states = this.states;

  if (props.disabled) {
    return;
  }

  var handles = states.handles;
  event = getEvent(event); // 记录初始位置

  states.pos = props.vertical ? event.clientY : event.clientX; // 设置flag

  states.dragging = true;
  states.$el.classList.add('nv-slider--dragging');
  states.$thumb.classList.add('nv-slider--dragging'); // 每次拖动前记录下轨道的长度，
  // 之所以不在渲染完成后记录，是防止浏览器缩放后轨道长度变化

  updateRect.call(this); // 阻止事件传播到轨道上

  event.preventDefault();
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(document, 'mousemove', handles.dragMove);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(document, 'mouseup', handles.dragEnd);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(window, 'touchmove', handles.dragMove);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(document, 'touchend', handles.dragEnd);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(document, 'contextmenu', handles.dragEnd);
}
/**
 * mousemove | touchmove
 * @private
 * @param {*} event 
 */


function handleDragMove(event) {
  var props = this.props,
      states = this.states;

  if (props.disabled || !states.dragging) {
    return;
  }

  var value = getValueByEvent.call(this, event);
  this.setValue(value, true);
}
/**
 * mouseup | touchend
 * @param {*} event 
 */


function handleDragEnd() {
  var states = this.states;

  if (!states.dragging) {
    return;
  }

  var handles = states.handles;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(document, 'mousemove', handles.dragMove);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(document, 'mouseup', handles.dragEnd);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(document, 'touchmove', handles.dragMove);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(document, 'touchend', handles.dragEnd);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(document, 'contextmenu', handles.dragEnd);
  setTimeout(function () {
    states.dragging = false;
    states.$el.classList.remove('nv-slider--draging');
    states.$thumb.classList.remove('nv-slider--dragging');
  }, 0);
}
/**
 * click runway
 * @private
 * @param {*} event 
 */


function handleRunwayClick(event) {
  var states = this.states,
      props = this.props;

  if (props.disabled || states.dragging) {
    return;
  }

  updateRect.call(this);
  var value = getValueByEvent.call(this, event);
  this.setValue(value, true);
}
/**
 * keydown event
 * @private
 * @param {*} event
 */


function handleKeydown(event) {
  var props = this.props,
      states = this.states;

  if (props.disabled) {
    return;
  }

  var code = event.keyCode;

  if (code === 38 || code === 39) {
    this.setValue(states.value + props.step, true);
  } else if (code === 37 || code === 40) {
    this.setValue(states.value - props.step, true);
  }
}
/**
 * 由于浏览器缩放导致runway宽度变化
 * 因此在每次拖动前重新计算runway的位置信息
 * @private
 */


function updateRect() {
  var states = this.states;
  var rect = states.$runway.getBoundingClientRect();
  states.rect = {
    top: rect.top,
    left: rect.left,
    width: states.$runway.offsetWidth,
    height: states.$runway.offsetHeight
  };
}
/**
 * 更新DOM UI
 * @private
 */


function updatePosition() {
  var props = this.props,
      states = this.states;
  var value = states.value;
  var percentage = (value - props.min) / (props.max - props.min);
  states.$progress.style[props.vertical ? 'height' : 'width'] = percentage * 100 + '%';
  states.$thumb.style[props.vertical ? 'bottom' : 'left'] = percentage * 100 + '%';
}
/**
 * Slider Component
 * @date 2018-11-16
 * @export
 * @class Slider
 * @extends {Events}
 */


var Slider =
/*#__PURE__*/
function (_Events) {
  _inherits(Slider, _Events);

  /**
   * Creates an instance of Slider.
   * @date 2018-11-16
   * @param {*} container
   * @param {*} options
   * @memberof Slider
   */
  function Slider(container, options) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this));

    if (!container || !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["isElement"])(container)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["throwError"])('\'container\' 必须是一个DOM容器', 'type');
    }

    if (!(_assertThisInitialized(_assertThisInitialized(_this)) instanceof Slider)) {
      return _possibleConstructorReturn(_this, new Slider(container, options));
    }

    var isInput = false; // 如果target是input，取其原生属性作为备选配置

    var nativeProperties = Object.create(null);

    if (container.nodeName === 'INPUT') {
      NATIVE_PROPERTIES.forEach(function (property) {
        return nativeProperties[property] = container[property];
      });
      container.setAttribute('hidden', true);
      isInput = true;
    }

    _this.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["mixins"])({}, defaults, nativeProperties, options || {}); // correct min/max/step

    _this.props = Object(_input_number_utils__WEBPACK_IMPORTED_MODULE_4__["correctProps"])(_this.props);
    var _this$props = _this.props,
        max = _this$props.max,
        min = _this$props.min,
        step = _this$props.step,
        value = _this$props.value;
    min = min === -Infinity ? 0 : min;
    max = max === Infinity ? 100 : max;
    max = Math.floor((max - min) / step) * step + min;
    _this.props.min = min;
    _this.props.max = max;
    _this.states = Object.create(null);
    _this.states.handles = Object.create(null);
    _this.states.value = value;
    _this.states.rect = Object.create(null);
    _this.states.isInput = isInput;
    _this.states.$container = container; // 分段数

    _this.states.segmentation = (max - min) / step;
    render.call(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.setValue(_this.props.value, false);

    return _this;
  }
  /**
   * set value
   * @public
   * @param {*} value
   * @param {*} isChanged
   * @memberof Slider
   */


  _createClass(Slider, [{
    key: "setValue",
    value: function setValue(value, isChanged) {
      var props = this.props,
          states = this.states;
      value = parseFloat(value);

      if (isNaN(value) || value < props.min) {
        value = props.min;
      } else if (value > props.max) {
        value = props.max;
      }

      value = parseFloat(value.toFixed(props.precision));
      states.value = value;
      updatePosition.call(this);
      isChanged && this.emit('change', value);
      states.$el.setAttribute('aria-valuenow', value);

      if (states.$tooltip) {
        var tipValue = props.tipFormatter && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(props.tipFormatter) && props.tipFormatter(value);

        if (tipValue === void 0 || tipValue === '' || tipValue === null) {
          tipValue = value;
        }

        states.$tooltip.textContent = tipValue;
      }
    }
    /**
     * get current value
     * @public
     * @returns
     * @memberof Slider
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.states.value;
    }
    /**
     * 禁用
     * @public
     * @memberof Slider
     */

  }, {
    key: "disable",
    value: function disable() {
      var props = this.props,
          states = this.states;

      if (props.disabled) {
        return;
      }

      props.disabled = true;
      states.$el.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATUS_DISABLED"]);
      states.$el.setAttribute('aria-disabled', true);
      states.$el.thumb.setAttribute('tabindex', -1);
    }
    /**
     * 启用
     * @public
     * @memberof Slider
     */

  }, {
    key: "enable",
    value: function enable() {
      var props = this.props,
          states = this.states;

      if (!props.disabled) {
        return;
      }

      props.disabled = false;
      states.$el.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_STATUS_DISABLED"]);
      states.$el.setAttribute('aria-disabled', false);
      states.$el.thumb.setAttribute('tabindex', 0);
    }
    /**
     * destroy
     * @public
     * @memberof Slider
     */

  }, {
    key: "destroy",
    value: function destroy() {
      unbindEvents.call(this);
      var states = this.states;

      if (states.isInput) {
        states.$container.removeAttribute('hidden');
      }

      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["removeNode"])(states.$el);
      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return Slider;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["Events"]);
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/components/slider/template.js":
/*!*******************************************!*\
  !*** ./src/components/slider/template.js ***!
  \*******************************************/
/*! exports provided: skeletonTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
var skeletonTpl = "\n<div class=\"nv-slider__runway\">\n  <div class=\"nv-slider__progress\"></div>\n  <div class=\"nv-slider__thumb\" tabindex=\"<%if (disabled) {%>-1<% }else{ %>0<% }%>\">\n    <% if(tooltip) { %>\n      <span class=\"nv-slider__tooltip\"></span>\n    <% } %>  \n  </div> \n</div>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl
});

/***/ }),

/***/ "./src/components/tree/index.js":
/*!**************************************!*\
  !*** ./src/components/tree/index.js ***!
  \**************************************/
/*! exports provided: Tree, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node */ "./src/components/tree/node.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/components/tree/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






var UI_NAME = 'nv-tree';
var CLASS_EXPANDED = 'tree-node--expanded';
var CLASS_SELECTED = 'tree-node--selected'; // default config

var defaults = {
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
  // [ string ] 节点为空时显示的文本
  noDataText: '',
  // [ string ] 无匹配节点时显示的文本
  noMatchDataText: '' // selectors

};
var Selectors = {
  node: '.nv-tree__node',
  input: '.tree-node__value',
  check: '.tree-node__check',
  children: '.tree-node__children',
  inner: '.tree-node__inner',
  noMatch: '.no-match'
  /**
   * 递归转换Node节点
   * @date 2018-11-13
   * @method
   * @param {*} data
   * @param {*} parent
   * @param {*} options
   * @returns
   */

};

function deepToNode(data, parent, options) {
  var i = -1;
  var len = data.length;
  var expandAll = false;
  var defaultExpandedKeys = [];
  var defaultCheckedKeys = [];

  if (options) {
    expandAll = !!options.expandAll;
    defaultExpandedKeys = options.defaultExpandedKeys;
    defaultCheckedKeys = options.defaultCheckedKeys;
  }

  while (++i < len) {
    data[i].expanded = data[i].expanded || expandAll || defaultExpandedKeys.indexOf(data[i].id) > -1;
    data[i].checked = data[i].checked || defaultCheckedKeys.indexOf(data[i].id) > -1;
    var node = new _node__WEBPACK_IMPORTED_MODULE_4__["default"](data[i]);

    if (parent) {
      parent.insertChild(node);
    }

    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(data[i].children) && data[i].children.length) {
      deepToNode(data[i].children, node, options);
    }
  }

  return parent;
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
  map = map || Object.create(null);
  var i = -1;
  var len = nodes.length;
  var node;

  while (++i < len) {
    node = nodes[i];
    map[node.id] = node;

    if (node.children && node.children.length) {
      nodesToMap(node.children, map);
    }
  }

  return map;
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
  var i = -1;
  var len = nodes.length;
  var tpl = '';

  while (++i < len) {
    var node = nodes[i];
    var label = options.labelRender && options.labelRender(node);
    node.content = label || node.label;
    tpl += Object(_utils_template__WEBPACK_IMPORTED_MODULE_1__["template"])(_template__WEBPACK_IMPORTED_MODULE_5__["skeletonTpl"], _objectSpread({
      node: node
    }, options, {
      callback: function callback(children) {
        return renderItems(children, options);
      }
    }));
  }

  return tpl;
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
  id = String(id);
  var $el;
  $nodes.some(function ($node) {
    if ($node.getAttribute('data-node') === id) {
      $el = $node;
      return true;
    }
  });
  return $el;
}
/**
 * 设置节点的check状态
 * @date 2018-11-13
 * @private
 * @param {*} node
 */


function toggleAllChildrenChecked(node) {
  var states = this.states;
  var children = node.children;
  var i = -1;
  var len = children.length;
  var child;

  while (++i < len) {
    child = children[i];

    if (!child.disabled) {
      child.updateStates('checked', node.checked);
      var $node = findNodeDomById(child.id, states.$nodes);
      $node && ($node.querySelector(Selectors.input).checked = child.checked);
    }

    if (child.children && child.children.length) {
      toggleAllChildrenChecked.call(this, child);
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
  toggleAllChildrenChecked.call(this, node);
  var parent = node.parent;

  while (parent) {
    if (!parent.disabled) {
      var isChecked = true;

      if (parent.children && parent.children.some(function (child) {
        return !child.checked;
      })) {
        isChecked = false;
      }

      parent.updateStates('checked', isChecked);
      var $node = findNodeDomById(parent.id, this.states.$nodes);
      $node && ($node.querySelector(Selectors.input).checked = parent.checked);
    }

    parent = parent.parent;
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
  var nodeFilter = this.props.nodeFilter;
  var visibleCount = 0;

  var filter = function filter(node) {
    var children = node.children;
    node.visible = nodeFilter(node, keyword);

    if (node.visible) {
      visibleCount++;
    }

    children.forEach(function (child) {
      child.visible = nodeFilter(node, keyword);
      filter(child);
    });

    if (!node.visible && children.length) {
      var allHidden = true;
      children.some(function (child) {
        if (child.visible) {
          allHidden = false;
          return true;
        }
      });
      node.visible = allHidden === false;
    } // 自动展开所有父级


    if (keyword && node.visible) {
      var parent = node.parent;

      while (parent) {
        parent.expanded = true;
        parent = parent.parent;
      }
    }
  };

  nodes.forEach(function (node) {
    return filter(node);
  });
  return visibleCount;
}
/**
 * render dom
 * @date 2018-11-13
 * @private
 * @param {*} nodes
 */


function render(nodes) {
  var props = this.props,
      states = this.states;
  var $el = states.$el;
  var isInit = false;

  if (!$el) {
    $el = document.createElement('ul');
    $el.className = UI_NAME;
    $el.setAttribute('role', 'tree');
    states.$container.appendChild($el); // 缓存DOM

    states.$el = $el;
    isInit = true;
  }

  var options = {
    indent: props.indent,
    checkable: props.checkable,
    chooseType: props.radio ? 'radio' : 'checkbox',
    checkName: props.checkName || "".concat(UI_NAME, "-").concat(states.treeId),
    expandAll: props.expandAll,
    disabled: props.disabled,
    labelRender: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(props.labelRender) ? props.labelRender : null
  };
  nodes = nodes && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(nodes) ? nodes : states.nodes;

  if (nodes.length) {
    $el.innerHTML = renderItems(nodes, options);
  } else {
    $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_1__["template"])(_template__WEBPACK_IMPORTED_MODULE_5__["noDataTpl"], {
      noDataText: props.noDataText
    });
  }

  states.$nodes = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["qsa"])(Selectors.node, $el); // 只有在初始化的时候才绑定事件

  isInit && bindEvents.call(this);
}
/**
 * bind dom evens
 * @date 2018-11-13
 * @private
 */


function bindEvents() {
  var props = this.props,
      states = this.states;
  var handles = states.handles;
  var self = this; // 点击Node节点

  handles.nodeClick = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["proxy"])(states.$el, Selectors.inner, function (event) {
    if (event.target.closest(Selectors.check) || event.target.closest('.nv-event-stop')) {
      return;
    }

    var $parent = this.parentNode;
    var id = $parent.getAttribute('data-node');
    var node = states.nodesMap[id];
    self.emit('click', node, $parent);

    if (node.children && node.children.length) {
      $parent.classList[node.expanded ? 'remove' : 'add'](CLASS_EXPANDED);
      node.updateStates('expanded', !node.expanded);
      self.emit('expend', node.expanded, node, $parent);
    }

    if (!node.disabled) {
      self.emit('selected', node, $parent, event);

      if (props.highlight) {
        $parent.classList.add(CLASS_SELECTED);
        states.$nodes.map(function ($node) {
          if ($node !== $parent) {
            $node.classList.remove(CLASS_SELECTED);
          }
        });
      }
    }
  }); // 选中/取消选中

  handles.onCheckChange = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["proxy"])(states.$el, Selectors.input, function (e) {
    e.stopPropagation();
    var node = states.nodesMap[this.value];

    if (node.disabled) {
      return;
    }

    var checked = this.checked;
    node.updateStates('checked', checked);

    if (!props.checkStrictly && !props.radio) {
      toggleAllChecked.call(self, node);
    }

    self.emit('check', checked, node, findNodeDomById(node.id, states.$nodes));
  });
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$el, 'click', handles.nodeClick);

  if (props.checkable) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["bind"])(states.$el, 'change', handles.onCheckChange);
  }
}
/**
 * unbind dom events
 * @date 2018-11-13
 * @private
 */


function unbindEvents() {
  var props = this.props,
      states = this.states;
  var handles = states.handles;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$el, 'click', handles.nodeClick);

  if (props.checkable) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["unbind"])(states.$el, 'change', handles.onCheckChange);
  }
}
/**
 * Tree Component
 * @date 2018-11-13
 * @export
 * @class Tree
 * @extends {Events}
 */


var Tree =
/*#__PURE__*/
function (_Events) {
  _inherits(Tree, _Events);

  /**
   * Creates an instance of Tree.
   * @date 2018-11-13
   * @param {*} container
   * @param {*} options
   * @memberof Tree
   */
  function Tree(container, options) {
    var _this;

    _classCallCheck(this, Tree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tree).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this)) instanceof Tree)) {
      return _possibleConstructorReturn(_this, new Tree(container, options));
    }

    var props = _this.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["mixins"])({}, defaults, options);
    var defaultCheckedKeys = props.defaultCheckedKeys,
        defaultExpandedKeys = props.defaultExpandedKeys;
    props.defaultCheckedKeys = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(defaultCheckedKeys) ? defaultCheckedKeys : [];
    props.defaultExpandedKeys = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(defaultExpandedKeys) ? defaultExpandedKeys : [];
    var states = _this.states = Object.create(null);
    states.treeId = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
    states.nodes = [];
    states.nodesMap = Object.create(null);
    states.$container = container;
    states.handles = Object.create(null);

    _this.setNodesTree(_this.props.data);

    delete _this.props.data;
    return _this;
  }
  /**
   * 将节点数组转换为tree
   * @date 2018-11-13
   * @param {*} data
   * @memberof Tree
   */


  _createClass(Tree, [{
    key: "setNodesTree",
    value: function setNodesTree(data) {
      this.states.nodes = this.arrayToNodes(data);
      this.states.nodesMap = nodesToMap(this.states.nodes);
      render.call(this);
    }
    /**
     * 将数组转换为节点组
     * @date 2018-11-13
     * @param {*} data
     * @returns
     * @memberof Tree
     */

  }, {
    key: "arrayToNodes",
    value: function arrayToNodes(data) {
      if (!data) {
        return null;
      }

      if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(data)) {
        data = [data];
      }

      var i = -1;
      var len = data.length;
      var nodes = [];
      var node;

      while (++i < len) {
        node = this.objectToTree(data[i]);
        node && nodes.push(node);
      }

      return nodes;
    }
    /**
     * 将对象转换为树结构
     * @date 2018-11-13
     * @param {*} object
     * @returns
     * @memberof Tree
     */

  }, {
    key: "objectToTree",
    value: function objectToTree(object) {
      if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(object)) {
        return null;
      } // 拷贝一份数据


      object = JSON.parse(JSON.stringify(object));
      var _this$props = this.props,
          defaultCheckedKeys = _this$props.defaultCheckedKeys,
          defaultExpandedKeys = _this$props.defaultExpandedKeys;
      object.expanded = object.expanded || this.props.expandAll || defaultExpandedKeys.indexOf(object.id) > -1;
      object.checked = object.checked || defaultCheckedKeys.indexOf(object.id) > -1;
      var node = new _node__WEBPACK_IMPORTED_MODULE_4__["default"](object);

      if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(object.children) && object.children.length) {
        return deepToNode(object.children, node, {
          expandAll: this.props.expandAll,
          defaultCheckedKeys: defaultCheckedKeys,
          defaultExpandedKeys: defaultExpandedKeys
        });
      }

      return node;
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

  }, {
    key: "filter",
    value: function filter(keyword) {
      if (!this.props.nodeFilter || !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(this.props.nodeFilter)) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["throwError"])('The \'nodeFilter\' method must be provided.');
      }

      keyword = (keyword || '').toString().trim();
      var count = filterNode.call(this, keyword, this.states.nodes);
      render.call(this);

      if (!count && this.states.nodes) {
        this.states.$el.innerHTML += Object(_utils_template__WEBPACK_IMPORTED_MODULE_1__["template"])(_template__WEBPACK_IMPORTED_MODULE_5__["noMatchDataTpl"], {
          noMatchDataText: this.props.noMatchDataText
        });
      }

      return count;
    }
    /**
     * 获取Node节点
     * @date 2018-11-13
     * @param {*} node
     * @returns
     * @memberof Tree
     */

  }, {
    key: "getNode",
    value: function getNode(node) {
      if (node instanceof _node__WEBPACK_IMPORTED_MODULE_4__["default"]) {
        return node;
      }

      return this.states.nodesMap[node];
    }
    /**
     * 插入子节点
     * @date 2018-11-13
     * @param {*} parent
     * @param {*} node
     * @memberof Tree
     */

  }, {
    key: "appendNode",
    value: function appendNode(parent, node) {
      var parentNode = this.getNode(parent);

      if (parentNode) {
        node = parentNode.insertChild(node);
        parentNode.expanded = true;
        this.states.nodesMap[node.id] = node;
        render.call(this);
      }
    }
    /**
     * 移除节点
     * @date 2018-11-13
     * @param {*} node
     * @param {boolean} [deep=true]
     * @memberof Tree
     */

  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // 这地方根节点有点问题，暂时强制deep = true
      deep = true;
      node = this.getNode(node);

      if (node.parent) {
        node.remove(deep);
      } else {
        // 如果是根节点
        var index = this.states.nodes.indexOf(node);
        this.states.nodes.splice(index, 1);
      }

      this.states.nodesMap = nodesToMap(this.states.nodes);
      render.call(this);
    }
    /**
     * 获取选中的节点
     * @date 2018-11-13
     * @param {boolean} [useDisabled=false]
     * @returns {Array}
     * @memberof Tree
     */

  }, {
    key: "getCheckedNodes",
    value: function getCheckedNodes() {
      var useDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isRadio = this.props.radio;
      var nodes = [];

      var finder = function finder(node) {
        if (isRadio && nodes.length) {
          return;
        }

        if (node.checked) {
          if (!node.disabled || useDisabled) {
            nodes.push(node);
          }
        }

        if (node.children && node.children.length) {
          node.children.forEach(function (child) {
            return finder(child);
          });
        }
      };

      this.states.nodes.forEach(function (node) {
        return finder(node);
      });
      return nodes;
    }
    /**
     * destroy
     * @date 2018-11-13
     * @memberof Tree
     */

  }, {
    key: "destroy",
    value: function destroy() {
      unbindEvents.call(this);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["removeNode"])(this.states.$el);
      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return Tree;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["Events"]);
/* harmony default export */ __webpack_exports__["default"] = (Tree);

/***/ }),

/***/ "./src/components/tree/node.js":
/*!*************************************!*\
  !*** ./src/components/tree/node.js ***!
  \*************************************/
/*! exports provided: Node, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
 // 节点状态

var STATES = ['checked', 'disabled', 'expanded', 'visible'];
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
  var children = node.children;
  var i = -1;
  var len = children.length;
  var child;

  while (++i < len && !child) {
    if (children[i] === target || children[i].id === target) {
      child = children[i];
      break;
    }

    if (deep) {
      child = findChild(children[i], target, deep);
    }
  }

  return child;
}
/**
 * 递归更新子节点的parent和level
 * @private
 * @param {*} node
 * @param {*} parent
 */


function updateChildenLevel(node, parent) {
  var children = node.children || [];
  var i = -1;
  var len = children.length;
  var child;

  while (++i < len) {
    child = children[i];

    if (parent) {
      parent.insertChild(child);
    } else {
      child.parent = null;
      child.level = 0;
    }

    updateChildenLevel(child, child);
  }
}
/**
 * Node 
 * @date 2018-11-12
 * @export
 * @class Node
 */


var Node =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Node.
   * @date 2018-11-12
   * @param {*} data
   * @memberof Node
   */
  function Node(data) {
    _classCallCheck(this, Node);

    this.id = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])();
    this.label = '';
    this.checked = false;
    this.disabled = false;
    this.expanded = false;
    this.visible = true;
    this.parent = null; // 覆盖属性

    if (data && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(data)) {
      for (var k in data) {
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["hasKey"])(k, data)) {
          this[k] = data[k];
        }
      }
    }

    this.level = 0;
    this.children = [];

    if (this.parent) {
      // 当前的层级等于parentNode的层级+1
      this.level = this.parent.level + 1;
    }
  }
  /**
   * 获取子元素的索引
   * @public
   * @param {*} child
   * @returns
   * @memberof Node
   */


  _createClass(Node, [{
    key: "getChildIndex",
    value: function getChildIndex(child) {
      if (child instanceof Node) {
        return this.children.indexOf(child);
      }

      var index = -1;
      var i = -1;
      var len = this.children.length;

      while (++i < len) {
        if (this.children[i].id === child) {
          index = i;
          break;
        }
      }

      return index;
    }
    /**
     * 插入子节点
     * @public
     * @param {Object | Node} child
     * @param {Number} index 插入位置
     * @memberof Node
     */

  }, {
    key: "insertChild",
    value: function insertChild(child, index) {
      if (!child) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["throwError"])('child is required.');
      } // 如果待插入的子节点不是一个Node


      if (!(child instanceof Node)) {
        child = new Node(child);
      }

      child.parent = this;
      child.level = this.level + 1;

      if (_typeof(index) === void 0 || index < 0 || isNaN(+index)) {
        this.children.push(child);
      } else {
        this.children.splice(+index, 0, child);
      }

      return child;
    }
    /**
     * 移除指定的子节点
     * 当deep为true时，将会移除节点及其节点的子节点
     * 当deep为fasle时，只会移除指定节点，节点的子节点将会移动到它的上一级
     * @param {*} child
     * @param {boolean} [deep=true]
     * @memberof Node
     */

  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var index = this.getChildIndex(child);

      if (index > -1) {
        if (!deep) {
          // 更新待删除子元素的子元素的parent和level
          // 将其子元素的parent更新为所在的上一级
          updateChildenLevel(child, this);
        }

        child.parent = null;
        this.children.splice(index, 1);
      }
    }
    /**
     * 在目标子元素之前插入子元素
     * @public
     * @param {*} node
     * @param {*} target
     * @memberof Node
     */

  }, {
    key: "insertBefore",
    value: function insertBefore(node, target) {
      var index = this.getChildIndex(target);
      this.insertChild(node, index);
    }
    /**
     * 在目标子元素之后插入子元素
     * @public
     * @param {*} node
     * @param {*} target
     * @memberof Node
     */

  }, {
    key: "insertAfter",
    value: function insertAfter(node, target) {
      var index = this.getChildIndex(target);

      if (index > -1) {
        index++;
      }

      this.insertChild(node, index);
    }
    /**
     * 移除当前节点
     * @param {boolean} [deep=true]
     * @memberof Node
     */

  }, {
    key: "remove",
    value: function remove() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var parent = this.parent;

      if (parent) {
        parent.removeChild(this, deep);
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

  }, {
    key: "findParent",
    value: function findParent(id) {
      if (id) {
        var parent = this.parent;

        while (parent) {
          if (parent.id === id) {
            return parent;
          }

          parent = parent.parent;
        }

        return null;
      }

      return this.parent;
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

  }, {
    key: "contains",
    value: function contains(target) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return !!findChild(this, target, deep);
    }
    /**
     * 返回上一个兄弟节点
     * @public
     * @returns
     * @memberof Node
     */

  }, {
    key: "nextSibling",
    value: function nextSibling() {
      var parent = this.parent; // 如果存在父级节点

      if (parent) {
        var currentIndex = parent.children.indexOf(this); // 存在且不是第一个节点

        if (currentIndex > 0) {
          return parent.children[currentIndex - 1];
        }
      }

      return null;
    }
    /**
     * 返回下一个兄弟节点
     * @public
     * @returns
     * @memberof Node
     */

  }, {
    key: "previousSibling",
    value: function previousSibling() {
      var parent = this.parent; // 如果存在父级节点

      if (parent) {
        var currentIndex = parent.children.indexOf(this); // 存在且不是最后一个节点

        if (currentIndex > -1 && currentIndex < parent.children.length - 1) {
          return parent.children[currentIndex + 1];
        }
      }

      return null;
    }
    /**
     * 更新节点的部分状态
     * @date 2018-11-12
     * @param {*} key
     * @param {*} value
     * @memberof Node
     */

  }, {
    key: "updateStates",
    value: function updateStates(key, value) {
      var args = arguments;
      var states = Object.create(null);

      if (args.length === 1 && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(key)) {
        states = key;
      } else if (args.length === 2) {
        states[key] = value;
      }

      for (var k in states) {
        if (STATES.indexOf(k) > -1) {
          this[k] = states[k];
        }
      }
    }
  }]);

  return Node;
}();
/* harmony default export */ __webpack_exports__["default"] = (Node);

/***/ }),

/***/ "./src/components/tree/template.js":
/*!*****************************************!*\
  !*** ./src/components/tree/template.js ***!
  \*****************************************/
/*! exports provided: skeletonTpl, noDataTpl, noMatchDataTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noDataTpl", function() { return noDataTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noMatchDataTpl", function() { return noMatchDataTpl; });
var skeletonTpl = "\n<li role=\"treeitem\" class=\"nv-tree__node<% if(expandAll || node.expanded) {%> tree-node--expanded<% } if(disabled || node.disabled) {%> nv-disabled<% } if(node.children && node.children.length) {%> tree-node--branch<% } else {%> tree-node--leaf<% } if(!node.visible) {%> tree-node--hidden<% }%>\" data-node=\"<%= node.id%>\">\n  <div class=\"tree-node__inner\" style=\"padding-left:<%= (node.level * indent)%>px;\"> \n    <% if(node.children && node.children.length) {%>\n    <i class=\"tree-node__icon\"></i>\n    <% }%> \n    <% if(checkable) { %>\n    <label class=\"nv-<%= chooseType %> tree-node__check\" role=\"<%= chooseType%>\">\n      <input type=\"<%= chooseType%>\" class=\"tree-node__value\" name=\"<%= checkName %>\" value=\"<%= node.id%>\"<% if(disabled || node.disabled) {%> disabled<% } if (node.checked) {%> checked<% }%> />\n      <i class=\"nv-<%= chooseType%>__icon\"></i>\n    </label>\n    <% } %>\n    <div class=\"tree-node__label\" title=\"<%= node.label%>\"><%= node.content%></div>\n  </div>\n  <% if(node.children && node.children.length) {%>\n    <ul role=\"group\" class=\"tree-node__children\">\n      <%= callback(node.children)%>\n    </ul>\n  <%}%>  \n</li>\n";
var noDataTpl = "\n<li class=\"nv-tree__empty\"><%=noDataText%></li>\n";
var noMatchDataTpl = "\n<li class=\"nv-tree__empty no-match\"><%=noMatchDataText%></li>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl,
  noDataTpl: noDataTpl
});

/***/ }),

/***/ "./src/locale/index.js":
/*!*****************************!*\
  !*** ./src/locale/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/zh-CN */ "./src/locale/lang/zh-CN.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  'zh-CN': _lang_zh_CN__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/locale/lang/zh-CN.js":
/*!**********************************!*\
  !*** ./src/locale/lang/zh-CN.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  datePicker: {
    weeks: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    shortMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    year: '年'
  },
  pagination: {
    total: '共{total}条记录，第{index}/{pages}页',
    jumper: '前往',
    unit: '页',
    eachPage: '条/页'
  },
  modal: {
    close: '关闭',
    confirm: '确定',
    cancel: '取消'
  }
});

/***/ }),

/***/ "./src/utils/constant.js":
/*!*******************************!*\
  !*** ./src/utils/constant.js ***!
  \*******************************/
/*! exports provided: CLASS_STATES_ACTIVED, CLASS_STATUS_DISABLED, CLASS_STATES_HOVER, CLASS_STATES_FOCUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATES_ACTIVED", function() { return CLASS_STATES_ACTIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATUS_DISABLED", function() { return CLASS_STATUS_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATES_HOVER", function() { return CLASS_STATES_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATES_FOCUS", function() { return CLASS_STATES_FOCUS; });
var CLASS_STATES_ACTIVED = 'nv-actived';
var CLASS_STATUS_DISABLED = 'nv-disabled';
var CLASS_STATES_HOVER = 'nv-hover';
var CLASS_STATES_FOCUS = 'nv-focusin';

/***/ }),

/***/ "./src/utils/debounce.js":
/*!*******************************!*\
  !*** ./src/utils/debounce.js ***!
  \*******************************/
/*! exports provided: debounce, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");
/*
 * File: debounce.js
 * Project: @vnnox/novaui
 * Description: Used for ...
 * Created: 2018-11-13 02:15
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-13 02:15
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

var debounce = function debounce(func, wait, immediate) {
  var timeout;

  var _later = function _later(context, args) {
    timeout = null;

    if (args) {
      func.apply(context, args);
    }
  };

  var _debounce = function _debounce() {
    timeout && clearTimeout(timeout);
    var context = this;
    var args = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["toArray"])(arguments);

    if (immediate) {
      var callNow = timeout;
      timeout = setTimeout(_later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timeout = setTimeout(_later, wait, context, args);
    }
  };

  _debounce.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return _debounce;
};
/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: bind, unbind, once, qsa, proxy, getOffset, getStyle, insertAfter, addClass, getScrollbarWidth, removeNode, scrollTo, getOffsetByParent, getScrollParent, getSize, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetByParent", function() { return getOffsetByParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollParent", function() { return getScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSize", function() { return getSize; });
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

var SELECTOR_REGS = {
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
var bind = function bind(el, name, handle) {
  return el.addEventListener(name, handle, false);
};
/**
 * 解绑DOM事件
 * @param {*} el 
 * @param {*} name 
 * @param {*} handle 
 */

var unbind = function unbind(el, name, handle) {
  return el.removeEventListener(name, handle, false);
};
/**
 * 绑定一次性事件
 * @param {*} el 
 * @param {*} name 
 * @param {*} handle 
 */

var once = function once(el, name, handle) {
  // 中间事件
  var listener = function listener() {
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

var qsa = function qsa(selector, context) {
  context = context || document;

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(selector)) {
    selector = selector.trim();
    var dom;

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

var proxy = function proxy(element, selector, callback) {
  return function (event) {
    var nodes = qsa(selector, element);
    var matched;
    var target = event.target;

    for (var i = 0, len = nodes.length; i < len; i++) {
      var node = nodes[i];

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

var getOffset = function getOffset(element) {
  var rect = element.getBoundingClientRect();
  var win = element.ownerDocument.defaultView;
  var top = rect.top + win.pageYOffset;
  var left = rect.left + win.pageXOffset;
  return {
    top: top,
    left: left,
    rect: rect
  };
};
/**
 * 获取元素计算后的样式
 * @param {HTMLElement} element 
 * @param {String} style
 * @returns {String | Object} 
 */

var getStyle = function getStyle(element, style) {
  var styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
  return style ? styles[style] : styles;
};
/**
 * 插入到目标元素之后
 * @param {*} target 目标元素 
 * @param {*} node 新元素
 * @returns {*}
 */

var insertAfter = function insertAfter(target, node) {
  var $parent = target.parentNode;

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

var addClass = function addClass(el, className) {
  var classList = [];

  if (className) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(className)) {
      classList = className.split(/,|\s+/);
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(className)) {
      classList = className;
    }
  }

  classList.forEach(function (name) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(name) && name.trim() && el.classList.add(name.trim());
  });
};
/**
 * 获取滚动条的宽度
 * @returns {Number} 
 */

var getScrollbarWidth = function getScrollbarWidth() {
  var hasScroll = document.body.scrollHeight > window.innerHeight;

  if (getScrollbarWidth.value !== void 0 && getScrollbarWidth.value !== 0) {
    return getScrollbarWidth.value;
  } // 当页面有滚动条的时候才计算


  if (hasScroll) {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.cssText += 'width:100px;position:absolute;top:-9999rem;z-index:-1;visibility:hidden;';
    document.body.appendChild(scrollDiv);
    scrollDiv.style.overflow = 'scroll';
    var width = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    scrollDiv.parentNode.removeChild(scrollDiv);
    getScrollbarWidth.value = width;
  } else {
    getScrollbarWidth.value = 0;
  }

  return getScrollbarWidth.value;
};
/**
 * 安全的移除元素
 * @param {*} el 
 */

var removeNode = function removeNode(el) {
  return el && el.parentNode && el.parentNode.removeChild(el);
};
/**
 * 将元素滚动到指定位置
 * @param {*} element 
 * @param {*} to 
 * @param {*} duration 
 */

var scrollTo = function scrollTo(element, to, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
    return setTimeout(arguments[0], 10);
  };

  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  requestAnimationFrame(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};
/**
 * 获取元素距离指定相对父级的位置
 * @param {*} element 
 * @param {*} parent 必须具有相对/绝对定位的属性
 * @returns {Object}
 */

var getOffsetByParent = function getOffsetByParent(element, parent) {
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var offsetParent = element;

  while (offsetParent = offsetParent.offsetParent) {
    if (offsetParent === parent) {
      break;
    }

    top += offsetParent.offsetTop;
    left += offsetParent.offsetLeft;
  }

  return {
    top: top,
    left: left
  };
};
/**
 * 获取元素的滚动父级
 * @param {*} element 
 */

var getScrollParent = function getScrollParent(element) {
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  }

  var _getStyle = getStyle(element),
      overflow = _getStyle.overflow,
      overflowX = _getStyle.overflowX,
      overflowY = _getStyle.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(element.parentNode);
};
/**
 * 获取一个有效的尺寸值
 * @param {*} size 
 */

var getSize = function getSize(size) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNumberString"])(size)) {
    size += 'px';
  }

  if (size && !isNaN(parseFloat(size, 10))) {
    return size;
  }

  return 0;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: bind,
  unbind: unbind,
  once: once,
  getOffset: getOffset,
  getStyle: getStyle,
  insertAfter: insertAfter,
  qsa: qsa,
  proxy: proxy,
  addClass: addClass,
  getScrollbarWidth: getScrollbarWidth,
  removeNode: removeNode,
  scrollTo: scrollTo,
  getOffsetByParent: getOffsetByParent,
  getScrollParent: getScrollParent,
  getSize: getSize
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
 * 事件基类
 * @date 2018-11-08
 * @export
 * @class Events
 */

var Events =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Events.
   * @date 2018-11-08
   * @memberof Events
   */
  function Events() {
    _classCallCheck(this, Events);

    this._events = Object.create(null);
  }
  /**
   * 注册事件
   * @date 2018-11-08
   * @param {*} name
   * @param {*} handle
   * @param {*} context
   * @returns
   * @memberof Events
   */


  _createClass(Events, [{
    key: "on",
    value: function on(name, handle, context) {
      if (!name || !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handle)) {
        return this;
      }

      var _events = this._events[name] || (this._events[name] = []);

      var event = Object.create(null);
      event.id = _events.length;
      event.handle = handle;
      event.context = context;

      _events.push(event);

      return this;
    }
    /**
     * 解绑事件
     * @date 2018-11-08
     * @param {*} name
     * @param {*} handle
     * @param {*} context
     * @returns
     * @memberof Events
     */

  }, {
    key: "off",
    value: function off(name, handle, context) {
      if (!name || !this._events[name]) {
        return this;
      } // 如果指定了handle


      if (handle && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handle)) {
        var _events = this._events[name];

        _events.forEach(function (event) {
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
     * @date 2018-11-08
     * @param {*} name
     * @param {*} handle
     * @param {*} context
     * @returns
     * @memberof Events
     */

  }, {
    key: "one",
    value: function one(name, handle, context) {
      if (!name || !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handle)) {
        return this;
      }

      var self = this;

      var once = function once() {
        self.off(name, once, context);
        return handle.apply(context || self, arguments);
      };

      once._handle = handle;
      this.on(name, once, context);
      return this;
    }
    /**
     * 触发事件
     * @date 2018-11-08
     * @param {*} name
     * @param {*} args
     * @returns
     * @memberof Events
     */

  }, {
    key: "emit",
    value: function emit(name) {
      if (!name || !this._events[name]) {
        return this;
      }

      var len = this._events[name].length;
      var i = -1; // 依次执行事件队列

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      while (++i < len) {
        var event = this._events[name][i];
        event.handle.apply(event.context || this, args);
      }

      return this;
    }
    /**
     * 销毁
     * @date 2018-11-08
     * @memberof Events
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._events = null;
    }
  }]);

  return Events;
}();
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/utils/i18n.js":
/*!***************************!*\
  !*** ./src/utils/i18n.js ***!
  \***************************/
/*! exports provided: i18n, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");
/*
 * File: i18n.js
 * Project: @vnnox/novaui
 * Description: 用于渲染模板中的语言变量
 * Created: 2018-11-14 05:45
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-14 05:45
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */

/* { word } */

var I18N_VALUE_REG = /\{\s*(\w+)\s*\}/gm;
/* { i18n: word }*/

var I18N_KEY_REG = /\{\s*i18n:\s*(\w+)\s*\}/gm;
var i18n = function i18n(string, lang, data) {
  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(string) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(string) || !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(lang)) {
    return string;
  }

  string = string.replace(I18N_KEY_REG, function (match, key) {
    var value;

    if (key) {
      value = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getObjectValue"])(key, lang);
    }

    return value && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(value) ? value : '';
  });

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(data)) {
    return string;
  }

  return i18n._(string, data);
};
/**
 * 解析语段中的变量
 * @param string
 * @param data
 */

i18n._ = function (string, data) {
  return string.replace(I18N_VALUE_REG, function (match, key) {
    var value;

    if (key) {
      value = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getObjectValue"])(key, data);
    }

    return value || '';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ "./src/utils/popup.js":
/*!****************************!*\
  !*** ./src/utils/popup.js ***!
  \****************************/
/*! exports provided: Popup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * File: popup.js
 * Project: @vnnox/novaui
 * Description: 模态框管理，统一管理模态框遮罩层，层级
 * Created: 2018-11-19 10:30
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-19 10:30
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */


var defaults = {
  backdrop: true,
  backdropBackground: 'rgba(0,0,0,.5)',
  backdropClose: true,
  scrollLock: true,
  escClose: true // start zIndex

};
var zIndex = 19900206; // 当前实例列表

var instances = []; // 当前backdrop

var backdrop = null; // 是否已经显示了backdrop

var isBackdropShow = false; // 当前屏幕是否已经锁定

var isScrollLocked = false;
/**
 * 获取backdrop element
 */

function getBackdrop() {
  if (backdrop) {
    return backdrop;
  }

  backdrop = document.createElement('div');
  backdrop.setAttribute('tabindex', '-1');
  backdrop.setAttribute('role', 'button');
  backdrop.className = 'nv-backdrop';
  backdrop.classList.remove('nv-animated--fade-in');
  backdrop.style.display = 'none';
  backdrop.style.zIndex = '19900206';
  document.body.appendChild(backdrop);
  return backdrop;
}
/**
 * 获取顶层实例
 * @private
 * @returns
 */


function getTopInstance() {
  return instances[instances.length - 1];
}
/**
 * ESC按键事件
 * @private
 * @param {*} e
 */


function keydownHandle(e) {
  if (e.keyCode === 27) {
    var topInstance = getTopInstance();

    if (topInstance && topInstance.escClose && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(topInstance.closeHandle)) {
      topInstance.closeHandle('esc');
    }
  }
}
/**
 * 模态框管理器
 * 用于模态框, 页面级loading等
 * 1. 保证多个模态框打开时只开启一个遮罩层
 * 2. 管理各个模态框的zIndex
 * @export
 * @class Popup
 */


var Popup =
/*#__PURE__*/
function () {
  function Popup() {
    _classCallCheck(this, Popup);
  }

  _createClass(Popup, null, [{
    key: "nextZIndex",

    /**
     *
     * 获取一个最新的zIndex
     * @static
     * @returns
     * @memberof Popup
     */
    value: function nextZIndex() {
      if (zIndex < Number.MAX_SAFE_INTEGER) {
        ++zIndex;
      } else {
        zIndex = 19900206;
      }

      return zIndex;
    }
    /**
     *
     * 模态框Open时
     * 1. 管理遮罩层
     * 2. 锁屏
     * 3. 重置层级
     * @static
     * @param {*} options
     * @memberof Popup
     */

  }, {
    key: "open",
    value: function open(options) {
      if (!options || !options.id) {
        return;
      }

      options.zIndex = options.zIndex || Popup.nextZIndex();

      for (var k in defaults) {
        if (options[k] === void 0) {
          options[k] = defaults[k];
        }
      }

      var len = instances.length; // 如果实例中已经包含了该实例，则不执行

      while (len--) {
        if (instances[len].id === options.id) {
          return;
        }
      } // 显示遮罩


      if (options.backdrop) {
        getBackdrop();
        backdrop.style.zIndex = options.zIndex;

        if (options.backdropBackground) {
          backdrop.style.backgroundColor = options.backdropBackground;
        }

        if (!isBackdropShow) {
          backdrop.classList.add('nv-animated--fade-in');
          backdrop.style.display = 'block';
        }

        isBackdropShow = true;
      } // 是否锁屏


      if (options.scrollLock && !isScrollLocked) {
        var _sbWidth = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getScrollbarWidth"])();

        var $body = document.body;
        $body.classList.add('nv-locked');
        $body.style.marginRight = _sbWidth + 'px';
        isScrollLocked = true;
      }

      instances.push(options);
      window.addEventListener('keydown', keydownHandle);
    }
    /**
     *
     * 模态框关闭时
     * @static
     * @param {*} id
     * @memberof Popup
     */

  }, {
    key: "close",
    value: function close(id) {
      if (!id || !instances.length) {
        return;
      }

      var $body = document.body;

      if (instances.length > 0) {
        var topInstance = getTopInstance(); // 如果被关闭的正好是顶层的实例

        if (topInstance.id === id) {
          // 移除当前实例
          instances.pop();

          if (instances.length > 0 && topInstance.backdrop) {
            // 将遮罩层的层级设置为下一个实例的层级
            backdrop.style.zIndex = getTopInstance().zIndex;
          }
        } else {
          var len = instances.length;

          while (len--) {
            // 找到当前实例并移除
            if (instances[len].id === id) {
              instances.splice(len, 1);
              break;
            }
          }
        }
      }

      var hasbackdrop = false;
      var hasLocked = false;
      var i = instances.length - 1;
      var instance;

      for (i; i >= 0; i--) {
        instance = instances[i];

        if (instance.scrollLock) {
          hasLocked = true;
        }

        if (instance.backdrop) {
          hasbackdrop = true;
        }
      }

      var length = instances.length;

      if (length === 0 || !hasbackdrop) {
        isBackdropShow = false;

        if (backdrop) {
          $body.removeChild(backdrop);
          backdrop = null;
        }
      }

      if (length === 0 || !hasLocked) {
        isScrollLocked = false;
        $body.classList.remove('nv-locked');
        $body.style.marginRight = null; // 如果没有实例了，就移除keydown事件

        if (length === 0) {
          window.removeEventListener('keydown', keydownHandle);
        }
      }
    }
  }]);

  return Popup;
}();
/* harmony default export */ __webpack_exports__["default"] = (Popup);

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
var VARIABLE_REG = /<%=([\s\S]+?)%>/g; // 语法规则

var SYNTAX_REG = /<%([\s\S]+?)%>/g;
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

var template = function template(tpl, data) {
  // 不包含变量的话直接返回tpl
  if (!tpl || !~tpl.indexOf('<%')) {
    return tpl;
  }

  var source = 'var __p=[];' + 'with(obj||{}){__p.push(\'' + tpl.replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(VARIABLE_REG, function (m, code) {
    return '\',' + code.replace(/\\'/, '\'') + ',\'';
  }).replace(SYNTAX_REG, function (m, code) {
    return '\');' + code.replace(/\\'/, '\'').replace(/[\r\n\t]/g, ' ') + '__p.push(\'';
  }).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + '\');}return __p.join("");';

  try {
    var render = new Function('obj', source);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var SLICE = Array.prototype.slice;
var TOSTRING = Object.prototype.toString;
var HASOWN = Object.prototype.hasOwnProperty;
var PRIMITIVE_VALUES = ['string', 'number', 'boolean', 'symbol', 'undefined'];
var NUMBER_REG = /^-?\d*\.?\d+$/;
/**
 * 校验传入值是否是字符串
 * @param {*} value
 * @returns {Boolean} 
 */

var isString = function isString(value) {
  return typeof value === 'string';
};
/**
 * 校验传入值是否是对象
 * @param {*} value 
 * @returns {Boolean} 
 */

var isObject = function isObject(value) {
  return value !== null && _typeof(value) === 'object';
};
/**
 * 校验传入值是否是纯对象
 * @param {*} value 
 * @example
 * isPlainObject({}) // true
 * isPlainObject(null) // false
 * isPlainObject([]) // false
 * @returns {Boolean} 
 */

var isPlainObject = function isPlainObject(value) {
  return isObject(value) && TOSTRING.call(value) === '[object Object]';
};
/**
 * 校验传入值是否是数组
 * @returns {Boolean}
 */

var isArray = Array.isArray;
/**
 * 校验传入值是否是函数
 * @param {*} value 
 * @returns {Boolean}
 */

var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
/**
 * 校验传入值是否是基本类型值
 * @param {*} value 
 * @returns {Boolean}
 */

var isPrimitive = function isPrimitive(value) {
  return !!~PRIMITIVE_VALUES.indexOf(_typeof(value));
};
/**
 * 校验传入值是否是布尔类型
 * @param {*} value 
 * @returns {Boolean}
 */

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};
/**
 * 校验传入值是否是数字
 * @param {*} value 
 * @returns {Boolean}
 */

var isNumber = function isNumber(value) {
  return !isNaN(value) && typeof value === 'number';
};
/**
 * 校验传入值是否是数字字符串
 * @param {*} value
 * @returns {Boolean} 
 */

var isNumberString = function isNumberString(value) {
  return NUMBER_REG.test(value);
};
/**
 * 校验传入值是否是整数
 * @param {*} value 
 * @returns {Boolean}
 */

var isInteger = function isInteger(value) {
  return isNumber(value) && value % 1 === 0;
};
/**
 * 校验传入值是否是浮点数
 * @param {*} value 
 * @returns {Boolean}
 */

var isFloat = function isFloat(value) {
  return isNumber(value) && value !== value | 0;
};
/**
 * 校验传入值是否是一个DOM元素
 * @param {*} value 
 * @returns {Boolean}
 */

var isElement = function isElement(value) {
  return isObject(value) && value.nodeType === 1 && !isPlainObject(value);
};
/**
 * 校验传入值是否是一个日期对象
 * @param {*} value 
 * @returns {Boolean}
 */

var isDate = function isDate(value) {
  return TOSTRING.call(value) === '[object Date]' && !isNaN(value.getTime());
};
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

var isEmpty = function isEmpty(value) {
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

var hasKey = function hasKey(key, object) {
  return HASOWN.call(object, key);
};
/**
 * 将类数组转换为数组
 * @param {*} arrayLike
 * @returns {Array} 
 */

var toArray = function toArray(arrayLike) {
  return SLICE.call(arrayLike);
};
/**
 * 对象混合
 * arg1 :
 *  Boolean: 是否深拷贝
 *  Object: targe
 * arg2, arg2, ..., argn: source
 * @returns {Object}
 */

function mixins() {
  var target = arguments[0] || {};
  var i = 0;
  var deep = false;
  var len = arguments.length;

  if (isBoolean(target)) {
    deep = target;
    target = arguments[1] || {};
    i = 1;
  }

  if (!isObject(target) && !isFunction(target)) {
    target = {};
  }

  while (i++ < len) {
    var source = arguments[i];

    if (source) {
      for (var k in source) {
        var src = target[k];
        var copy = source[k]; // 防止引用自身，造成死循环

        if (copy === target) {
          continue;
        }

        var _isArray = isArray(copy);

        if (deep && (_isArray || isPlainObject(copy))) {
          var clone = void 0;

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

var objectClone = function objectClone(object) {
  return JSON.parse(JSON.stringify(object));
};
var hyphenateRE = /\B([A-Z])/g;
/**
 * 驼峰转连接符
 * @param {*} str
 * @example
 * hyphenate('fadeIn') // fade-in
 * hyphenate('easeInOut') // ease-in-out
 * @returns {String} 
 */

var hyphenate = function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
};
/**
 * 对传入regExp的字符串转义
 * 搜索框中进行模糊匹配的时候
 * 需要对敲入的特殊字符进行转义
 * @param {*} value 
 * @returns {RegExp}
 */

var escapeRegExp = function escapeRegExp(value) {
  return value.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&');
};
/**
 * 根据路径从一个对象中获取其值
 * 内置了容错机制，防止层级太深时报错
 * @param {*} path 
 * @param {*} object 
 * @example
 * getObjectValue(p1.p1, obj) // obj.p1.p2
 * @returns {*}
 */

var getObjectValue = function getObjectValue(path, object) {
  if (isEmpty(path)) {
    return void 0;
  }

  var paths = path.trim().split('.');

  while (paths.length) {
    var k = paths.shift();
    object = object[k];

    if (!isPlainObject(object) && !isArray(object)) {
      break;
    }
  }

  return object;
};
var uid = 0;
/**
 * gen uuid
 * @returns {Number}
 */

var uuid = function uuid() {
  return ++uid;
};
/**
 * 抛出异常
 * @param {*} message 
 * @param {*} type 
 */

var throwError = function throwError(message, type) {
  message = "[NOVA.UI.ERROR] ".concat(message.toString());
  var method;

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
  isString: isString,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isArray: isArray,
  isFunction: isFunction,
  isPrimitive: isPrimitive,
  isBoolean: isBoolean,
  isNumber: isNumber,
  isInteger: isInteger,
  isFloat: isFloat,
  isElement: isElement,
  isDate: isDate,
  isEmpty: isEmpty,
  hasKey: hasKey,
  toArray: toArray,
  mixins: mixins,
  objectClone: objectClone,
  hyphenate: hyphenate,
  escapeRegExp: escapeRegExp,
  getObjectValue: getObjectValue,
  uuid: uuid,
  throwError: throwError
});

/***/ }),

/***/ "./src/vue/alert/index.js":
/*!********************************!*\
  !*** ./src/vue/alert/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/alert/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/alert/main.vue":
/*!********************************!*\
  !*** ./src/vue/alert/main.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_3f65bf64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=3f65bf64& */ "./src/vue/alert/main.vue?vue&type=template&id=3f65bf64&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/alert/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_3f65bf64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_3f65bf64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/alert/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/alert/main.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/vue/alert/main.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/alert/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/alert/main.vue?vue&type=template&id=3f65bf64&":
/*!***************************************************************!*\
  !*** ./src/vue/alert/main.vue?vue&type=template&id=3f65bf64& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3f65bf64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=3f65bf64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/alert/main.vue?vue&type=template&id=3f65bf64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3f65bf64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3f65bf64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/checkbox-group/group.vue":
/*!******************************************!*\
  !*** ./src/vue/checkbox-group/group.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_vue_vue_type_template_id_53ffd0a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group.vue?vue&type=template&id=53ffd0a7& */ "./src/vue/checkbox-group/group.vue?vue&type=template&id=53ffd0a7&");
/* harmony import */ var _group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.vue?vue&type=script&lang=js& */ "./src/vue/checkbox-group/group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _group_vue_vue_type_template_id_53ffd0a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _group_vue_vue_type_template_id_53ffd0a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/checkbox-group/group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/checkbox-group/group.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/vue/checkbox-group/group.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox-group/group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/checkbox-group/group.vue?vue&type=template&id=53ffd0a7&":
/*!*************************************************************************!*\
  !*** ./src/vue/checkbox-group/group.vue?vue&type=template&id=53ffd0a7& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_53ffd0a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./group.vue?vue&type=template&id=53ffd0a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox-group/group.vue?vue&type=template&id=53ffd0a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_53ffd0a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_53ffd0a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/checkbox-group/index.js":
/*!*****************************************!*\
  !*** ./src/vue/checkbox-group/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group */ "./src/vue/checkbox-group/group.vue");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/vue/checkbox-group/item.vue");



_group__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_group__WEBPACK_IMPORTED_MODULE_0__["default"].name, _group__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

_item__WEBPACK_IMPORTED_MODULE_1__["default"].install = function (Vue) {
  return Vue.component(_item__WEBPACK_IMPORTED_MODULE_1__["default"].name, _item__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  NvCheckboxGroup: _group__WEBPACK_IMPORTED_MODULE_0__["default"],
  NvCheckboxItem: _item__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/vue/checkbox-group/item.vue":
/*!*****************************************!*\
  !*** ./src/vue/checkbox-group/item.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue_vue_type_template_id_6474cb1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=6474cb1b& */ "./src/vue/checkbox-group/item.vue?vue&type=template&id=6474cb1b&");
/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js& */ "./src/vue/checkbox-group/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_vue_vue_type_template_id_6474cb1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_vue_vue_type_template_id_6474cb1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/checkbox-group/item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/checkbox-group/item.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/vue/checkbox-group/item.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox-group/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/checkbox-group/item.vue?vue&type=template&id=6474cb1b&":
/*!************************************************************************!*\
  !*** ./src/vue/checkbox-group/item.vue?vue&type=template&id=6474cb1b& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_6474cb1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=template&id=6474cb1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox-group/item.vue?vue&type=template&id=6474cb1b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_6474cb1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_6474cb1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/checkbox/index.js":
/*!***********************************!*\
  !*** ./src/vue/checkbox/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/checkbox/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/checkbox/main.vue":
/*!***********************************!*\
  !*** ./src/vue/checkbox/main.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_7764a19a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=7764a19a& */ "./src/vue/checkbox/main.vue?vue&type=template&id=7764a19a&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/checkbox/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_7764a19a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_7764a19a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/checkbox/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/checkbox/main.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/vue/checkbox/main.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/checkbox/main.vue?vue&type=template&id=7764a19a&":
/*!******************************************************************!*\
  !*** ./src/vue/checkbox/main.vue?vue&type=template&id=7764a19a& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_7764a19a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=7764a19a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/checkbox/main.vue?vue&type=template&id=7764a19a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_7764a19a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_7764a19a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/index.js":
/*!**************************!*\
  !*** ./src/vue/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio */ "./src/vue/radio/index.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox */ "./src/vue/checkbox/index.js");
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-group */ "./src/vue/radio-group/index.js");
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox-group */ "./src/vue/checkbox-group/index.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switch */ "./src/vue/switch/index.js");
/* harmony import */ var _input_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-number */ "./src/vue/input-number/index.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree */ "./src/vue/tree/index.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./src/vue/select/index.js");
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./option */ "./src/vue/option/index.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagination */ "./src/vue/pagination/index.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slider */ "./src/vue/slider/index.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal */ "./src/vue/modal/index.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alert */ "./src/vue/alert/index.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message */ "./src/vue/message/index.js");
/* harmony import */ var _message_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./message-box */ "./src/vue/message-box/index.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popover */ "./src/vue/popover/index.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tag */ "./src/vue/tag/index.js");


















var RadioGroup = _radio_group__WEBPACK_IMPORTED_MODULE_3__["default"].NvRadioGroup;
var RadioItem = _radio_group__WEBPACK_IMPORTED_MODULE_3__["default"].NvRadioItem;
var CheckboxGroup = _checkbox_group__WEBPACK_IMPORTED_MODULE_4__["default"].NvCheckboxGroup;
var CheckboxItem = _checkbox_group__WEBPACK_IMPORTED_MODULE_4__["default"].NvCheckboxItem;
var components = [_radio__WEBPACK_IMPORTED_MODULE_1__["default"], RadioGroup, RadioItem, _checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], CheckboxGroup, CheckboxItem, _switch__WEBPACK_IMPORTED_MODULE_5__["default"], _input_number__WEBPACK_IMPORTED_MODULE_6__["default"], _tree__WEBPACK_IMPORTED_MODULE_7__["default"], _option__WEBPACK_IMPORTED_MODULE_9__["default"], _select__WEBPACK_IMPORTED_MODULE_8__["default"], _pagination__WEBPACK_IMPORTED_MODULE_10__["default"], _slider__WEBPACK_IMPORTED_MODULE_11__["default"], _modal__WEBPACK_IMPORTED_MODULE_12__["default"], _alert__WEBPACK_IMPORTED_MODULE_13__["default"], _tag__WEBPACK_IMPORTED_MODULE_17__["default"]];

if (typeof window !== 'undefined' && window.Vue) {
  components.forEach(function (component) {
    window.Vue.component(component.name, component);
  });
  var VP = window.Vue.prototype;
  VP.$message = _message__WEBPACK_IMPORTED_MODULE_14__["default"];
  VP.$alert = _message_box__WEBPACK_IMPORTED_MODULE_15__["default"].alert;
  VP.$confirm = _message_box__WEBPACK_IMPORTED_MODULE_15__["default"].confirm; // directive

  window.Vue.directive('popover', _popover__WEBPACK_IMPORTED_MODULE_16__["default"]);
}

function routeChangeDestory() {
  _message_box__WEBPACK_IMPORTED_MODULE_15__["default"].destroy();
  _message__WEBPACK_IMPORTED_MODULE_14__["default"].destroy();
} // 当路由改变时，销毁已存在的实例


Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["bind"])(window, 'hashchange', routeChangeDestory);
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["bind"])(window, 'popstate', routeChangeDestory);
/* harmony default export */ __webpack_exports__["default"] = ({
  Radio: _radio__WEBPACK_IMPORTED_MODULE_1__["default"],
  RadioGroup: RadioGroup,
  RadioItem: RadioItem,
  Checkbox: _checkbox__WEBPACK_IMPORTED_MODULE_2__["default"],
  CheckboxGroup: CheckboxGroup,
  CheckboxItem: CheckboxItem,
  Switch: _switch__WEBPACK_IMPORTED_MODULE_5__["default"],
  InputNumber: _input_number__WEBPACK_IMPORTED_MODULE_6__["default"],
  Tree: _tree__WEBPACK_IMPORTED_MODULE_7__["default"],
  Option: _option__WEBPACK_IMPORTED_MODULE_9__["default"],
  Select: _select__WEBPACK_IMPORTED_MODULE_8__["default"],
  Pagination: _pagination__WEBPACK_IMPORTED_MODULE_10__["default"],
  Slider: _slider__WEBPACK_IMPORTED_MODULE_11__["default"],
  Modal: _modal__WEBPACK_IMPORTED_MODULE_12__["default"],
  Alert: _alert__WEBPACK_IMPORTED_MODULE_13__["default"],
  Tag: _tag__WEBPACK_IMPORTED_MODULE_17__["default"]
});

/***/ }),

/***/ "./src/vue/input-number/index.js":
/*!***************************************!*\
  !*** ./src/vue/input-number/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/input-number/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/input-number/main.vue":
/*!***************************************!*\
  !*** ./src/vue/input-number/main.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_01ff4f6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=01ff4f6a& */ "./src/vue/input-number/main.vue?vue&type=template&id=01ff4f6a&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/input-number/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_01ff4f6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_01ff4f6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/input-number/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/input-number/main.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/vue/input-number/main.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/input-number/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/input-number/main.vue?vue&type=template&id=01ff4f6a&":
/*!**********************************************************************!*\
  !*** ./src/vue/input-number/main.vue?vue&type=template&id=01ff4f6a& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_01ff4f6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=01ff4f6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/input-number/main.vue?vue&type=template&id=01ff4f6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_01ff4f6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_01ff4f6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/message-box/index.js":
/*!**************************************!*\
  !*** ./src/vue/message-box/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_message_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/message-box */ "./src/components/message-box/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_components_message_box__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/message/index.js":
/*!**********************************!*\
  !*** ./src/vue/message/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/message */ "./src/components/message/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_components_message__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/modal/index.js":
/*!********************************!*\
  !*** ./src/vue/modal/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/modal/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/modal/main.vue":
/*!********************************!*\
  !*** ./src/vue/modal/main.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_95e2cbc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=95e2cbc6& */ "./src/vue/modal/main.vue?vue&type=template&id=95e2cbc6&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/modal/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_95e2cbc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_95e2cbc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/modal/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/modal/main.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/vue/modal/main.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/modal/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/modal/main.vue?vue&type=template&id=95e2cbc6&":
/*!***************************************************************!*\
  !*** ./src/vue/modal/main.vue?vue&type=template&id=95e2cbc6& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_95e2cbc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=95e2cbc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/modal/main.vue?vue&type=template&id=95e2cbc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_95e2cbc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_95e2cbc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/option/index.js":
/*!*********************************!*\
  !*** ./src/vue/option/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/option/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/option/main.vue":
/*!*********************************!*\
  !*** ./src/vue/option/main.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_6303cf7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=6303cf7e& */ "./src/vue/option/main.vue?vue&type=template&id=6303cf7e&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/option/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_6303cf7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_6303cf7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/option/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/option/main.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/vue/option/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/option/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/option/main.vue?vue&type=template&id=6303cf7e&":
/*!****************************************************************!*\
  !*** ./src/vue/option/main.vue?vue&type=template&id=6303cf7e& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_6303cf7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=6303cf7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/option/main.vue?vue&type=template&id=6303cf7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_6303cf7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_6303cf7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/pagination/index.js":
/*!*************************************!*\
  !*** ./src/vue/pagination/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/pagination/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/pagination/main.vue":
/*!*************************************!*\
  !*** ./src/vue/pagination/main.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_5e28b088___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=5e28b088& */ "./src/vue/pagination/main.vue?vue&type=template&id=5e28b088&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/pagination/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_5e28b088___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_5e28b088___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/pagination/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/pagination/main.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/vue/pagination/main.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/pagination/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/pagination/main.vue?vue&type=template&id=5e28b088&":
/*!********************************************************************!*\
  !*** ./src/vue/pagination/main.vue?vue&type=template&id=5e28b088& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_5e28b088___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=5e28b088& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/pagination/main.vue?vue&type=template&id=5e28b088&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_5e28b088___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_5e28b088___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/popover/index.js":
/*!**********************************!*\
  !*** ./src/vue/popover/index.js ***!
  \**********************************/
/*! exports provided: PopoverDirective, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony import */ var _components_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/popover */ "./src/components/popover/index.js");

var PopoverDirective = {
  inserted: function inserted(el, binding) {
    var modifiers = binding.modifiers,
        options = binding.value;
    options = options || {};

    if (!options.trigger) {
      var trigger;

      if (modifiers.click) {
        trigger = 'click';
      } else if (modifiers.hover) {
        trigger = 'hover';
      } else if (modifiers.focus) {
        trigger = 'focus';
      }

      if (trigger) {
        options.trigger = trigger;
      }
    }

    return new _components_popover__WEBPACK_IMPORTED_MODULE_0__["default"](el, options);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PopoverDirective);

/***/ }),

/***/ "./src/vue/radio-group/group.vue":
/*!***************************************!*\
  !*** ./src/vue/radio-group/group.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_vue_vue_type_template_id_7cc667cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group.vue?vue&type=template&id=7cc667cb& */ "./src/vue/radio-group/group.vue?vue&type=template&id=7cc667cb&");
/* harmony import */ var _group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.vue?vue&type=script&lang=js& */ "./src/vue/radio-group/group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _group_vue_vue_type_template_id_7cc667cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _group_vue_vue_type_template_id_7cc667cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/radio-group/group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/radio-group/group.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/vue/radio-group/group.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/radio-group/group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/radio-group/group.vue?vue&type=template&id=7cc667cb&":
/*!**********************************************************************!*\
  !*** ./src/vue/radio-group/group.vue?vue&type=template&id=7cc667cb& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_7cc667cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./group.vue?vue&type=template&id=7cc667cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/radio-group/group.vue?vue&type=template&id=7cc667cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_7cc667cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_7cc667cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/radio-group/index.js":
/*!**************************************!*\
  !*** ./src/vue/radio-group/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group */ "./src/vue/radio-group/group.vue");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/vue/radio-group/item.vue");



_group__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_group__WEBPACK_IMPORTED_MODULE_0__["default"].name, _group__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

_item__WEBPACK_IMPORTED_MODULE_1__["default"].install = function (Vue) {
  return Vue.component(_item__WEBPACK_IMPORTED_MODULE_1__["default"].name, _item__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  NvRadioGroup: _group__WEBPACK_IMPORTED_MODULE_0__["default"],
  NvRadioItem: _item__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/vue/radio-group/item.vue":
/*!**************************************!*\
  !*** ./src/vue/radio-group/item.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue_vue_type_template_id_02acbf77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=02acbf77& */ "./src/vue/radio-group/item.vue?vue&type=template&id=02acbf77&");
/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js& */ "./src/vue/radio-group/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_vue_vue_type_template_id_02acbf77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_vue_vue_type_template_id_02acbf77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/radio-group/item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/radio-group/item.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/vue/radio-group/item.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/radio-group/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/radio-group/item.vue?vue&type=template&id=02acbf77&":
/*!*********************************************************************!*\
  !*** ./src/vue/radio-group/item.vue?vue&type=template&id=02acbf77& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_02acbf77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=template&id=02acbf77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/radio-group/item.vue?vue&type=template&id=02acbf77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_02acbf77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_02acbf77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/radio/index.js":
/*!********************************!*\
  !*** ./src/vue/radio/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/radio/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/radio/main.vue":
/*!********************************!*\
  !*** ./src/vue/radio/main.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_d189cee2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=d189cee2& */ "./src/vue/radio/main.vue?vue&type=template&id=d189cee2&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/radio/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_d189cee2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_d189cee2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/radio/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/radio/main.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/vue/radio/main.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/radio/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/radio/main.vue?vue&type=template&id=d189cee2&":
/*!***************************************************************!*\
  !*** ./src/vue/radio/main.vue?vue&type=template&id=d189cee2& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_d189cee2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=d189cee2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/radio/main.vue?vue&type=template&id=d189cee2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_d189cee2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_d189cee2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/select/index.js":
/*!*********************************!*\
  !*** ./src/vue/select/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/select/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/select/main.vue":
/*!*********************************!*\
  !*** ./src/vue/select/main.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_a4f4d8cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=a4f4d8cc& */ "./src/vue/select/main.vue?vue&type=template&id=a4f4d8cc&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/select/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_a4f4d8cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_a4f4d8cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/select/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/select/main.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/vue/select/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/select/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/select/main.vue?vue&type=template&id=a4f4d8cc&":
/*!****************************************************************!*\
  !*** ./src/vue/select/main.vue?vue&type=template&id=a4f4d8cc& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_a4f4d8cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=a4f4d8cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/select/main.vue?vue&type=template&id=a4f4d8cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_a4f4d8cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_a4f4d8cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/slider/index.js":
/*!*********************************!*\
  !*** ./src/vue/slider/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/slider/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/slider/main.vue":
/*!*********************************!*\
  !*** ./src/vue/slider/main.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_4891e155___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=4891e155& */ "./src/vue/slider/main.vue?vue&type=template&id=4891e155&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/slider/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_4891e155___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_4891e155___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/slider/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/slider/main.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/vue/slider/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/slider/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/slider/main.vue?vue&type=template&id=4891e155&":
/*!****************************************************************!*\
  !*** ./src/vue/slider/main.vue?vue&type=template&id=4891e155& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4891e155___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=4891e155& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/slider/main.vue?vue&type=template&id=4891e155&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4891e155___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4891e155___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/switch/index.js":
/*!*********************************!*\
  !*** ./src/vue/switch/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/switch/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/switch/main.vue":
/*!*********************************!*\
  !*** ./src/vue/switch/main.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_78e7df3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=78e7df3c& */ "./src/vue/switch/main.vue?vue&type=template&id=78e7df3c&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/switch/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_78e7df3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_78e7df3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/switch/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/switch/main.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/vue/switch/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/switch/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/switch/main.vue?vue&type=template&id=78e7df3c&":
/*!****************************************************************!*\
  !*** ./src/vue/switch/main.vue?vue&type=template&id=78e7df3c& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_78e7df3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=78e7df3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/switch/main.vue?vue&type=template&id=78e7df3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_78e7df3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_78e7df3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/tag/index.js":
/*!******************************!*\
  !*** ./src/vue/tag/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/tag/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/tag/main.vue":
/*!******************************!*\
  !*** ./src/vue/tag/main.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_65e05250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=65e05250& */ "./src/vue/tag/main.vue?vue&type=template&id=65e05250&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/tag/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_65e05250___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_65e05250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/tag/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/tag/main.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/vue/tag/main.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/tag/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/tag/main.vue?vue&type=template&id=65e05250&":
/*!*************************************************************!*\
  !*** ./src/vue/tag/main.vue?vue&type=template&id=65e05250& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_65e05250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=65e05250& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/tag/main.vue?vue&type=template&id=65e05250&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_65e05250___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_65e05250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/tree/index.js":
/*!*******************************!*\
  !*** ./src/vue/tree/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/tree/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/tree/main.vue":
/*!*******************************!*\
  !*** ./src/vue/tree/main.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_ff5e8e90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=ff5e8e90& */ "./src/vue/tree/main.vue?vue&type=template&id=ff5e8e90&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/tree/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_ff5e8e90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_ff5e8e90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/tree/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/tree/main.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/vue/tree/main.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/tree/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/tree/main.vue?vue&type=template&id=ff5e8e90&":
/*!**************************************************************!*\
  !*** ./src/vue/tree/main.vue?vue&type=template&id=ff5e8e90& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_ff5e8e90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=ff5e8e90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/tree/main.vue?vue&type=template&id=ff5e8e90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_ff5e8e90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_ff5e8e90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
//# sourceMappingURL=ui.vue.js.map