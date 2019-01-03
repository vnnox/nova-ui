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
    disabled: Boolean,
    indeterminate: Boolean
  },
  data: function data() {
    return {
      val: this.value
    };
  },
  methods: {
    change: function change(e) {
      this.$emit('input', this.val);
      this.$emit('change', this.val, e);
    }
  },
  watch: {
    value: function value() {
      this.val = this.value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/color-picker/main.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/color-picker/main.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/color-picker */ "./src/components/color-picker/index.js");
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
  name: 'nv-color-picker',
  props: {
    lang: String,
    value: String,
    disabled: Boolean,
    lumps: Array,
    recentlyColors: Array,
    maxRecentlyCount: {
      type: Number,
      default: 6
    },
    palette: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'select',
      validator: function validator(value) {
        return ['select', 'lump'].indexOf(value) > -1;
      }
    },
    align: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].indexOf(value) > -1;
      }
    },
    customClass: String
  },
  data: function data() {
    return {
      instance: null
    };
  },
  computed: {
    inputVal: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        var value = Object(_components_color_picker__WEBPACK_IMPORTED_MODULE_0__["getEffectiveValue"])(val);

        if (value) {
          this.change(value);
          this.instance.setInitValue(value);
          this.$refs.input.value = value;
        } else {
          this.$refs.input.value = this.value || '';
        }
      }
    },
    lumpBackground: function lumpBackground() {
      return 'background-color:' + (this.value || 'rgba(0,0,0,0)');
    },
    lumpColor: function lumpColor() {
      return 'color:' + (this.value || 'rgba(0,0,0,0)');
    }
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.instance.setValue(val);
      }
    },
    disabled: function disabled(val) {
      val ? this.instance.disable() : this.instance.enable();
    }
  },
  methods: {
    change: function change(val) {
      var oldValue = this.value;
      this.$emit('input', val);
      this.$emit('change', val, oldValue);
    },
    addRecentlyColor: function addRecentlyColor(color) {
      this.instance.addRecentlyColor(color);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.instance = new _components_color_picker__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"](this.$el, this.$props);
    this.instance.on('picker-click', function () {
      _this.$refs.input && _this.$refs.input.focus();
    }).on('change', function (value, oldValue) {
      _this.change(value);
    }).on('paletteChange', function (color, event) {
      _this.$emit('palette-change', color, event);
    }).on('open', function () {
      return _this.$emit('open');
    }).on('close', function () {
      return _this.$emit('close');
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/date-picker/main.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/date-picker/main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_date_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/date-picker */ "./src/components/date-picker/index.js");
/* harmony import */ var _components_date_picker_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/date-picker/utils */ "./src/components/date-picker/utils.js");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-date-picker',
  props: {
    lang: String,
    value: {},
    placeholder: String,
    readonly: Boolean,
    clearable: Boolean,
    name: String,
    mode: {
      type: String,
      default: 'date',
      validator: function validator(value) {
        return ['date', 'year', 'month'].indexOf(value) > -1;
      }
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    weekStart: {
      type: Number,
      default: 0
    },
    disabledDate: Function,
    min: {},
    max: {},
    disabled: Boolean,
    customClass: String,
    align: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].indexOf(value) > -1;
      }
    },
    today: Boolean,
    confirm: Boolean
  },
  data: function data() {
    return {
      instance: null
    };
  },
  computed: {
    inputValue: {
      set: function set(val) {
        var value = Object(_components_date_picker_utils__WEBPACK_IMPORTED_MODULE_1__["parseDate"])(val, this.format);

        if (value) {
          this.instance.setValue(value, true);
        }

        this.$refs.input.value = this.instance.getValue(true);
        this.change(this.instance.getValue(true), this.instance.getValue());
      },
      get: function get() {
        var value = Object(_components_date_picker_utils__WEBPACK_IMPORTED_MODULE_1__["parseDate"])(this.value, this.format);

        if (value) {
          return Object(_components_date_picker_utils__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(value, this.format);
        }

        return '';
      }
    }
  },
  methods: {
    change: function change(formatValue, value) {
      this.$emit('input', formatValue);
      this.$emit('done', formatValue, value);
    },
    clear: function clear() {
      this.instance.setValue(null, true);
    }
  },
  watch: {
    disabled: function disabled(val) {
      if (this.instance) {
        val ? this.instance.disable() : this.instance.enable();
      }
    },
    value: function value(val, old) {
      if (val !== old && this.instance) {
        this.instance.setValue(val, true);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.instance = new _components_date_picker__WEBPACK_IMPORTED_MODULE_0__["default"](this.$el, this.$props);
    this.instance.on('picker-click', function () {
      _this.$refs.input && _this.$refs.input.focus();
    }).on('done', function (formatValue, value) {
      return _this.change(formatValue, value);
    }).on('open', function () {
      return _this.$emit('open');
    }).on('close', function () {
      return _this.$emit('close');
    }).on('change', function (formatValue, value) {
      return _this.$emit('change', formatValue, value);
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
      instance: null,
      visible: this.value
    };
  },
  mounted: function mounted() {
    var _this = this;

    var props = this.$props;
    props.visible = this.visible;
    props.content = this.$refs['content'] || '';
    props.footSlot = this.$refs['foot'] || null;
    props.btns = this.$refs['btns'] || null;
    this.$el.parentNode.removeChild(this.$el);
    this.instance = new _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"](props);
    this.instance.on('open', function ($el) {
      _this.visible = true;

      _this.$emit('open', $el);

      _this.$emit('input', true);
    }).on('close', function (type, $el) {
      _this.visible = false;

      _this.$emit('close', type, $el);

      _this.$emit('input', false);
    });
  },
  watch: {
    value: function value(val, oldVal) {
      if (val !== oldVal) {
        this.visible = val;

        if (val && this.instance) {
          this.instance.open();
        } else {
          this.instance.close();
        }
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

    try {
      this.instance && this.instance.destroy();
      this.$nextTick(function () {
        return _this2.instance = null;
      });
    } catch (error) {}
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
    limit: Number,
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
        this.instance.setIndex(val, false);
      }
    },
    limit: function limit(val, oldVal) {
      if (val !== oldVal) {
        this.instance.setLimit(val, false);
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
    change: function change(e) {
      this.$emit('input', this.val);
      this.$emit('change', this.val, e);
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
    render: Function,
    align: String
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
      _this.$emit('change', value, options);

      _this.$emit('input', value);
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
    disabled: function disabled(val) {
      val ? this.instance.disable() : this.instance.enable();
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
    label: [String, Number, Boolean],
    name: String,
    disabled: Boolean
  },
  computed: {
    val: {
      get: function get() {
        return this.value;
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
      this.$emit('remove');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/time-picker/main.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/time-picker/main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_time_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/time-picker */ "./src/components/time-picker/index.js");
/* harmony import */ var _components_date_picker_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/date-picker/utils */ "./src/components/date-picker/utils.js");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nv-time-picker',
  props: {
    lang: String,
    value: {},
    defaultValue: {},
    placeholder: String,
    readonly: Boolean,
    clearable: Boolean,
    name: String,
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    minTime: {},
    maxTime: {},
    disabled: Boolean,
    customClass: String,
    align: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].indexOf(value) > -1;
      }
    },
    cancel: Boolean,
    confirm: Boolean,
    width: [String, Number],
    itemHeight: String
  },
  data: function data() {
    return {
      instance: null
    };
  },
  watch: {
    disabled: function disabled(val) {
      if (this.instance) {
        val ? this.instance.disable() : this.instance.enable();
      }
    },
    value: function value(val, old) {
      if (val !== old && this.instance) {
        this.instance.setValue(val);
      }
    }
  },
  methods: {
    change: function change(formatValue, value) {
      this.$emit('input', formatValue);
      this.$emit('done', formatValue, value);
    },
    clear: function clear() {
      this.instance.clear();
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.instance = new _components_time_picker__WEBPACK_IMPORTED_MODULE_0__["default"](this.$refs.input, this.$props);
    this.instance.on('picker-click', function () {
      _this.$refs.input && _this.$refs.input.focus();
    }).on('done', function (formatValue, value) {
      return _this.change(formatValue, value);
    }).on('open', function () {
      return _this.$emit('open');
    }).on('close', function () {
      return _this.$emit('close');
    }).on('change', function (formatValue, value) {
      return _this.$emit('change', formatValue, value || '');
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
      class: { "nv-checkbox--indeterminate": _vm.indeterminate && !_vm.val },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/color-picker/main.vue?vue&type=template&id=3c14c55e&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/color-picker/main.vue?vue&type=template&id=3c14c55e& ***!
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
  return _vm.mode === "select"
    ? _c(
        "label",
        {
          staticClass: "nv-select nv-color-picker__target target-select",
          class: { "nv-disabled": _vm.disabled }
        },
        [
          _c("span", {
            staticClass: "nv-color-lump",
            style: _vm.lumpBackground
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.lazy",
                value: _vm.inputVal,
                expression: "inputVal",
                modifiers: { lazy: true }
              }
            ],
            ref: "input",
            staticClass: "nv-input",
            attrs: { disabled: _vm.disabled },
            domProps: { value: _vm.inputVal },
            on: {
              change: function($event) {
                _vm.inputVal = $event.target.value
              }
            }
          })
        ]
      )
    : _c(
        "div",
        {
          staticClass: "nv-color-picker__target target-lump",
          class: { "nv-disabled": _vm.disabled },
          style: _vm.lumpColor,
          attrs: { title: _vm.value }
        },
        [
          _c(
            "button",
            { staticClass: "target-lump__outer", attrs: { type: "button" } },
            [
              _c("span", {
                staticClass: "target-lump__inner",
                style: _vm.lumpBackground
              })
            ]
          ),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/date-picker/main.vue?vue&type=template&id=8c0b3486&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/date-picker/main.vue?vue&type=template&id=8c0b3486& ***!
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
    "div",
    {
      staticClass: "nv-date-picker--wrap nv-select",
      class: {
        "show-clean": _vm.inputValue && !_vm.disabled,
        "nv-disabled": _vm.disabled
      },
      attrs: { role: "combobox" }
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.lazy",
            value: _vm.inputValue,
            expression: "inputValue",
            modifiers: { lazy: true }
          }
        ],
        ref: "input",
        staticClass: "nv-input",
        attrs: {
          type: "text",
          disabled: _vm.disabled,
          readonly: _vm.readonly,
          placeholder: _vm.placeholder,
          name: _vm.name
        },
        domProps: { value: _vm.inputValue },
        on: {
          change: function($event) {
            _vm.inputValue = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm.clearable
        ? _c(
            "a",
            {
              staticClass: "nv-select__clean",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.clear($event)
                }
              }
            },
            [_c("i", { staticClass: "nv-icon-close" })]
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
      attrs: { role: "switch", tabindex: _vm.disabled ? -1 : 0 }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/time-picker/main.vue?vue&type=template&id=416daadc&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/time-picker/main.vue?vue&type=template&id=416daadc& ***!
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
    "div",
    {
      staticClass: "nv-time-picker--wrap nv-select",
      class: {
        "show-clean": _vm.value && !_vm.disabled,
        "nv-disabled": _vm.disabled
      },
      attrs: { role: "combobox" }
    },
    [
      _c("input", {
        ref: "input",
        staticClass: "nv-input",
        attrs: {
          type: "text",
          disabled: _vm.disabled,
          readonly: _vm.readonly,
          placeholder: _vm.placeholder,
          name: _vm.name
        }
      }),
      _vm._v(" "),
      _vm.clearable
        ? _c(
            "a",
            {
              staticClass: "nv-select__clean",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.clear($event)
                }
              }
            },
            [_c("i", { staticClass: "nv-icon-close" })]
          )
        : _vm._e()
    ]
  )
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

/***/ "./src/components/color-picker/index.js":
/*!**********************************************!*\
  !*** ./src/components/color-picker/index.js ***!
  \**********************************************/
/*! exports provided: getEffectiveValue, ColorPicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEffectiveValue", function() { return getEffectiveValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/locale */ "./src/utils/locale.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../picker */ "./src/components/picker/index.js");
/* harmony import */ var _picker_placements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../picker/placements */ "./src/components/picker/placements.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template */ "./src/components/color-picker/template.js");
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
 * Description: 颜色选择器
 * Created: 2018-11-23 10:11
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-29 05:00
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */








 // ui class name

var UI_NAME = 'nv-color-picker'; // 16进制颜色规则

var REG_HEX = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/; // rgb颜色规则

var REG_RGB = /^rgb?\((\d+\,)(\d+\,)(\d+)\)$/i; // default confirg

var defaults = {
  // [ string ] 多语言
  lang: '',
  // [ string ] 绑定值
  value: '',
  // [ array ] 色块
  lumps: ['44a2f8', '6ae3cf', '81d452', 'f7e159', 'ed6e57', 'de6aa5', '595e91', '4aa59d', '54ad32', 'efbb40', 'db3b26', 'bb3b79', '1c4d7c', '347975', '306e1d', 'f19737', 'a72a17', '8d285c', '10345f', '245958', '1f4c14', 'c96527', '751b0e', '5c1945', 'ffffff', 'a9a9a9', '6c6c6c', '434343', '000000'],
  // [ array ] 最近使用的色块
  recentlyColors: [],
  // [ number ] 最近使用的颜色数组的最大长度
  maxRecentlyCount: 6,
  // [ boolean ] 显示调色器
  palette: true,
  // [ string ] 自定义样式
  customClass: '',
  // [ boolean ] 是否禁用
  disabled: false,
  align: 'left' // selectors

};
var Selectors = {
  recommend: '.recommend-colors',
  recently: '.recently-colors',
  recentlyWrap: '.color-panel__recently',
  chooseInput: '.choose-color',
  colorLump: '.color-lump'
  /**
   * render
   * @private
   */

};

function render() {
  var props = this.props,
      states = this.states;
  var locales = states.locales;
  var $el = document.createElement('div');
  $el.className = UI_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["addClass"])($el, props.customClass);
  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_8__["skeletonTpl"], {
    recently: locales.recently
  });
  states.$recommend = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.recommend, $el)[0];
  states.$recently = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.recently, $el)[0];
  states.$recommend.innerHTML = renderLumps(props.lumps);

  if (props.palette) {
    states.$recommend.innerHTML += Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_8__["moreBtnTpl"], {
      more: locales.more
    });
  }

  states.$el = $el;
  states.$recentlyWrap = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.recentlyWrap, $el)[0];
  states.$chooseInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.chooseInput, $el)[0];
  states.$lumps = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["qsa"])(Selectors.colorLump, states.$recommend);
  initPickerInstance.call(this);
  bindEvents.call(this);
}
/**
 * 渲染色块
 * @param {*} lumps 
 */


function renderLumps(lumps) {
  var html = '';

  if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(lumps) && lumps.length) {
    lumps.forEach(function (color) {
      return html += getLumpTpl(color);
    });
  }

  return html;
}
/**
 * 获取色块模板
 * @param {*} color 
 */


function getLumpTpl(color) {
  color = color.charAt(0) === '#' ? color : '#' + color;
  return Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_8__["lumpTpl"], {
    color: color
  });
}
/**
 * 设置色块的选中状态
 * @private
 */


function setLumpActived() {
  var states = this.states,
      props = this.props;
  var value = (states.value || '').replace(/^#/, '');
  props.lumps.forEach(function (color, index) {
    color = color.replace(/^#/, '');

    if (color === value) {
      states.$lumps[index].classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_ACTIVED"]);
    } else {
      states.$lumps[index].classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_ACTIVED"]);
    }
  });
}
/**
 * 初始化Picker
 * @private
 */


function initPickerInstance() {
  var _this = this;

  var props = this.props,
      states = this.states;
  states.pickerInstance = new _picker__WEBPACK_IMPORTED_MODULE_5__["default"](states.$target, {
    content: states.$el,
    trigger: 'click',
    placement: Object(_picker_placements__WEBPACK_IMPORTED_MODULE_6__["getPlacementByAlign"])(props.align),
    showArrow: false,
    margin: 2,
    disabled: props.disabled
  });
  states.pickerInstance.on('open', function () {
    states.pickeOpened = true;
    setLumpActived.call(_this);

    _this.emit('open', states.pickerInstance);
  }).on('close', function () {
    states.pickeOpened = false;

    _this.emit('close', states.pickerInstance);
  });
}
/**
 * 调色器改变时
 * @param {*} e 
 */


function handleChooseInputChange(e) {
  var value = e.target.value;
  this.emit('paletteChange', value, e);
  this.setValue(value);
}
/**
 * bind dom events
 * @private
 */


function bindEvents() {
  var states = this.states;
  var handles = states.handles = Object.create(null);
  var self = this;
  handles.colorLumpClick = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["proxy"])(states.$el, Selectors.colorLump, function () {
    var value = this.getAttribute('data-value');

    if (value) {
      self.setValue(value);
      self.close();
    }
  });
  handles.chooseInputChange = handleChooseInputChange.bind(this);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["bind"])(states.$el, 'click', handles.colorLumpClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["bind"])(states.$chooseInput, 'change', handles.chooseInputChange);
}
/**
 * unbind dom events
 * @private
 */


function unbindEvents() {
  var states = this.states;
  var handles = states.handles;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$el, 'click', handles.colorLumpClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["unbind"])(states.$chooseInput, 'change', handles.chooseInputChange);
}
/**
 * rgb色转16进制
 * @date 2018-11-23
 * @method
 * @param {*} color
 * @returns
 */


function componentToHex(color) {
  var hex = color.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}
/**
 * 获取有效的颜色值
 * @method
 * @date 2018-11-23
 * @param {*} value
 * @returns
 */


function getEffectiveValue(value) {
  if (!value || !value.trim()) {
    return '';
  }

  var hex = '';

  if (REG_HEX.test(value)) {
    value = value.replace(/#/, '').split('');

    if (value.length === 3) {
      for (var i = 0; i < 3; i += 1) {
        hex += value[i] + value[i];
      }
    } else {
      hex = value.join('');
    }

    return '#' + hex;
  } else {
    var _value = (_value || '').replace(/\s/g, '');

    if (_value && REG_RGB.test(_value)) {
      _value = _value.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');

      _value.forEach(function (val) {
        return hex += componentToHex(val);
      });

      if (hex.length === 6) {
        return '#' + hex;
      }
    }
  }

  return '';
}
/**
 * Color Picker Component
 * @date 2018-11-29
 * @export
 * @class ColorPicker
 * @extends {Events}
 */

var ColorPicker =
/*#__PURE__*/
function (_Events) {
  _inherits(ColorPicker, _Events);

  /**
   * Creates an instance of ColorPicker.
   * @date 2018-11-29
   * @param {*} target
   * @param {*} options
   * @memberof ColorPicker
   */
  function ColorPicker(target, options) {
    var _this2;

    _classCallCheck(this, ColorPicker);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ColorPicker).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this2)) instanceof ColorPicker)) {
      return _possibleConstructorReturn(_this2, new ColorPicker(target, options));
    }

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(target)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'target\' 必须是一个DOM容器', 'type');
    }

    var props = _this2.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {});
    var states = _this2.states = Object.create(null);
    states.locales = Object(_utils_locale__WEBPACK_IMPORTED_MODULE_2__["getLocales"])(props.lang).colorPicker;
    states.$target = target;
    states.isInput = target.nodeName === 'INPUT';
    var targetValue = states.isInput ? target.value : '';
    var value = getEffectiveValue(props.value || targetValue);
    states.bindValue = states.value = value;
    states.isInput && (states.$target.value = value);
    render.call(_assertThisInitialized(_assertThisInitialized(_this2)));
    states.recentlyColors = [];
    var recentlyColors = props.recentlyColors || [];
    recentlyColors = recentlyColors.reverse();

    _this2.addRecentlyColor(recentlyColors);

    setLumpActived.call(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }
  /**
   * 向最近使用面板中添加颜色
   * @date 2018-11-29
   * @param {*} colors
   * @memberof ColorPicker
   */


  _createClass(ColorPicker, [{
    key: "addRecentlyColor",
    value: function addRecentlyColor(colors) {
      var props = this.props,
          states = this.states;
      var recentlyColors = states.recentlyColors;

      if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(colors)) {
        colors = [colors];
      }

      if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(colors)) {
        colors.forEach(function (color) {
          color = getEffectiveValue(color);
          var index = recentlyColors.indexOf(color);

          if (index > -1) {
            recentlyColors.splice(index, 1);
          }

          recentlyColors.unshift(color);
        });
      }

      if (recentlyColors.length > props.maxRecentlyCount) {
        recentlyColors.length = props.maxRecentlyCount;
      }

      if (recentlyColors.length) {
        states.$recentlyWrap.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);
        states.$recently.innerHTML = renderLumps(recentlyColors);
      } else {
        states.$recentlyWrap.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);
      }
    }
    /**
     * set value
     * @date 2018-11-29
     * @param {*} value
     * @memberof ColorPicker
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      var states = this.states;
      var oldValue = states.value;

      if (value === null) {// todo
      } else {
        value = getEffectiveValue(value);

        if (!value) {
          value = states.value;
        }
      }

      if (oldValue !== value) {
        this.emit('change', value, oldValue);
      }

      states.bindValue = states.value = value;
      setLumpActived.call(this);
      states.isInput && (states.$target.value = value);
    }
    /**
     * get current value
     * @date 2018-11-29
     * @returns
     * @memberof ColorPicker
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.states.value;
    }
    /**
     * open picker
     * @date 2018-11-23
     * @memberof ColorPicker
     */

  }, {
    key: "open",
    value: function open() {
      if (this.states.pickerInstance && !this.states.pickeOpened) {
        this.states.pickerInstance.open();
      }
    }
    /**
     * close picker
     * @date 2018-11-23
     * @memberof ColorPicker
     */

  }, {
    key: "close",
    value: function close() {
      if (this.states.pickerInstance && this.states.pickeOpened) {
        this.states.pickerInstance.close();
      }
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
      props.disabled = true;

      if (states.pickerInstance) {
        states.pickerInstance.close();
        states.pickerInstance.disable();
      }
    }
    /**
     * destroy
     * @date 2018-11-29
     * @memberof ColorPicker
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var states = this.states;
      unbindEvents.call(this);
      this.states.pickerInstance.destroy();
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["removeNode"])(states.$el);
      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return ColorPicker;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./src/components/color-picker/template.js":
/*!*************************************************!*\
  !*** ./src/components/color-picker/template.js ***!
  \*************************************************/
/*! exports provided: skeletonTpl, moreBtnTpl, lumpTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreBtnTpl", function() { return moreBtnTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lumpTpl", function() { return lumpTpl; });
// export const skeletonTpl = `
// <% if (lumps) {%>
// <ul class="nv-color-picker__lumps"></ul>
// <% } %>
// <div class="nv-color-picker__panel"><div class="panel-main"></div></div>
// <% if(clear || showInput || confirm) { %>
// <div class="nv-color-picker__foot nv-clearfix">
//   <% if(showInput) { %>
//   <label class="nv-color-picker__current nv-left">
//     <span class="current-lump"></span>
//     <input class="nv-input nv-input--small nv-color-picker__value" spellcheck="false" value="<%= value%>"/>
//   </label>
//   <% } %>
//   <div class="nv-color-picker__btns nv-right">
//     <% if(clear) { %>
//     <button type="button" class="nv-btn nv-btn--small nv-btn--link nv-color-picker__clear"><%= clear%></button>
//     <% } if(confirm) { %>
//     <button type="button" class="nv-btn nv-btn--small nv-btn--primary nv-color-picker__confirm"><%= confirm %></button>
//     <% }%>
//   </div>
// </div>
// <% }%>
// `
var skeletonTpl = "\n<div class=\"color-panel\">\n  <ul class=\"color-panel__lumps recommend-colors\"></ul>\n  <div class=\"color-panel__recently\">\n    <h3 class=\"recently-label\"><%= recently%></h3>\n    <ul class=\"color-panel__lumps recently-colors\"></ul>\n  </div>\n</div>\n";
var moreBtnTpl = "\n<li class=\"color-lump nv-color-picker_more\">\n  <label class=\"more-toggle\">\n    <input type=\"color\" class=\"choose-color\">\n    <a role=\"button\" class=\"more-toggle__btn\"><%= more%></a>\n  </label>\n</li>\n";
var lumpTpl = "\n<li class=\"color-lump\" data-value=\"<%=color%>\"><span style=\"background-color:<%=color%>\"></span></li>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl,
  moreBtnTpl: moreBtnTpl,
  lumpTpl: lumpTpl
});

/***/ }),

/***/ "./src/components/date-picker/fecha.js":
/*!*********************************************!*\
  !*** ./src/components/date-picker/fecha.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://github.com/taylorhakes/fecha/blob/master/src/fecha.js

/**
 * Parse or format dates
 * @class fecha
 */
var fecha = {};
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = '\\d\\d?';
var threeDigits = '\\d{3}';
var fourDigits = '\\d{4}';
var word = '[^\\s]+';
var literal = /\[([^]*?)\]/gm;

var noop = function noop() {};

function regexEscape(str) {
  return str.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
}

function shorten(arr, sLen) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }

  return newArr;
}

function monthUpdate(arrName) {
  return function (d, v, i18n) {
    var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

    if (~index) {
      d.month = index;
    }
  };
}

function pad(val, len) {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
}

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
  dayNamesShort: dayNamesShort,
  dayNames: dayNames,
  monthNamesShort: monthNamesShort,
  monthNames: monthNames,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  }
};
var formatFlags = {
  D: function D(dateObj) {
    return dateObj.getDate();
  },
  DD: function DD(dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function Do(dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function d(dateObj) {
    return dateObj.getDay();
  },
  dd: function dd(dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function ddd(dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function dddd(dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function M(dateObj) {
    return dateObj.getMonth() + 1;
  },
  MM: function MM(dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function MMM(dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function MMMM(dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function YY(dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function YYYY(dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function h(dateObj) {
    return dateObj.getHours() % 12 || 12;
  },
  hh: function hh(dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function H(dateObj) {
    return dateObj.getHours();
  },
  HH: function HH(dateObj) {
    return pad(dateObj.getHours());
  },
  m: function m(dateObj) {
    return dateObj.getMinutes();
  },
  mm: function mm(dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function s(dateObj) {
    return dateObj.getSeconds();
  },
  ss: function ss(dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function S(dateObj) {
    return Math.round(dateObj.getMilliseconds() / 100);
  },
  SS: function SS(dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function SSS(dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function a(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function A(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function ZZ(dateObj) {
    var o = dateObj.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};
var parseFlags = {
  D: [twoDigits, function (d, v) {
    d.day = v;
  }],
  Do: [twoDigits + word, function (d, v) {
    d.day = parseInt(v, 10);
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  YY: [twoDigits, function (d, v) {
    var da = new Date(),
        cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  YYYY: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: ['\\d', function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: ['\\d{2}', function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  d: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();

    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  ZZ: ['[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z', function (d, v) {
    var parts = (v + '').match(/([+-]|\d\d)/gi),
        minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
parseFlags.dd = parseFlags.d;
parseFlags.dddd = parseFlags.ddd;
parseFlags.DD = parseFlags.D;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a; // Some common format strings

fecha.masks = {
  default: 'ddd MMM DD YYYY HH:mm:ss',
  shortDate: 'M/D/YY',
  mediumDate: 'MMM D, YYYY',
  longDate: 'MMMM D, YYYY',
  fullDate: 'dddd, MMMM D, YYYY',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */

};

fecha.format = function (dateObj, mask, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }

  if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format');
  }

  mask = fecha.masks[mask] || mask || fecha.masks['default'];
  var literals = []; // Make literals inactive by replacing them with ??

  mask = mask.replace(literal, function ($0, $1) {
    literals.push($1);
    return '??';
  }); // Apply formatting rules

  mask = mask.replace(token, function ($0) {
    return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
  }); // Inline literal values back into the formatted value

  return mask.replace(/\?\?/g, function () {
    return literals.shift();
  });
};
/**
 * Parse a date string into an object, changes - into /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @returns {Date|boolean}
 */


fecha.parse = function (dateStr, format, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof format !== 'string') {
    throw new Error('Invalid format in fecha.parse');
  }

  format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
  // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

  if (dateStr.length > 1000) {
    return null;
  }

  var dateInfo = {};
  var parseInfo = [];
  var newFormat = regexEscape(format).replace(token, function ($0) {
    if (parseFlags[$0]) {
      var info = parseFlags[$0];
      parseInfo.push(info[1]);
      return '(' + info[0] + ')';
    }

    return $0;
  });
  var matches = dateStr.match(new RegExp(newFormat, 'i'));

  if (!matches) {
    return null;
  }

  for (var i = 1; i < matches.length; i++) {
    parseInfo[i - 1](dateInfo, matches[i], i18n);
  }

  var today = new Date();

  if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }

  var date;

  if (dateInfo.timezoneOffset != null) {
    dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
    date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
  } else {
    date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
  }

  return date;
};

/* harmony default export */ __webpack_exports__["default"] = (fecha);

/***/ }),

/***/ "./src/components/date-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/date-picker/index.js ***!
  \*********************************************/
/*! exports provided: DatePicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/locale */ "./src/utils/locale.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/date-picker/utils.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../picker */ "./src/components/picker/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _picker_placements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../picker/placements */ "./src/components/picker/placements.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template */ "./src/components/date-picker/template.js");
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
 * Description: Choose Date
 * Created: 2018-11-27 09:12
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-28 11:43
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */









 // ui class name

var UI_NAME = 'nv-date-picker';
var UI_WRAP_NAME = 'panel-wrap'; // modes

var MODES = ['date', 'year', 'month']; // min date

var MIN_DATE = new Date(1000, 0, 1, 0, 0, 0); // max dae

var MAX_DATE = new Date(9999, 11, 31, 0, 0, 0); // default config

var defaults = {
  // [ string ] 国际化
  lang: '',
  // [ string, Date ] 绑定值
  value: '',
  // [ string ] 模式
  mode: 'date',
  // [ string ] 格式化
  format: 'YYYY-MM-DD',
  // [ number ] 一周的起始日 [0 - 6]
  weekStart: 0,
  // [ function | array ] 返回禁用的日期
  disabledDate: null,
  // [ string | date ] 可选的最小日期
  min: null,
  // [ string | date ] 可选的最大日期
  max: null,
  // [ boolean ] 是否禁用
  disabled: false,
  // [ boolean ]  直接插入到指定容器
  inline: false,
  // [ string ] 自定义样式
  customClass: '',
  // [ string ] 与target的对齐方式
  align: 'left',
  // [ boolean ] 显示今天按钮
  today: false,
  // [ boolean ] 显示确定按钮
  confirm: false // selectors

};
var Selectors = {
  yearPrev: '.year-prev',
  yearNext: '.year-next',
  monthPrev: '.month-prev',
  monthNext: '.month-next',
  currentYear: '.year-current',
  currentMonth: '.month-current',
  body: '.nv-date__body',
  foot: '.nv-date__foot',
  item: '.nv-date__item',
  today: '.nv-date__btn_today',
  confirm: '.nv-date__btn_confirm'
  /**
   * render
   * @private
   */

};

function render() {
  var props = this.props,
      states = this.states;
  var locales = states.locales;
  var $el = document.createElement('div');
  $el.className = UI_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["addClass"])($el, props.customClass);
  props.inline && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["addClass"])($el, UI_NAME + '--inline');
  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_9__["panelTpl"], {
    today: !props.inline && props.today ? locales.today : false,
    confirm: !props.inline && props.confirm ? locales.confirm : false
  });
  states.$el = $el;
  states.$yearPrev = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.yearPrev, $el)[0];
  states.$yearNext = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.yearNext, $el)[0];
  states.$monthPrev = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.monthPrev, $el)[0];
  states.$monthNext = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.monthNext, $el)[0];
  states.$currentYear = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.currentYear, $el)[0];
  states.$currentMonth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.currentMonth, $el)[0];
  states.$body = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.body, $el)[0];
  states.$today = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.today, $el)[0];
  states.$confirm = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.confirm, $el)[0];
  states.$foot = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.foot, $el)[0];

  if (!states.$today && !states.$confirm) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["removeNode"])(states.$foot);
  }

  if (props.inline) {
    states.isInput ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["insertAfter"])(states.$target, $el) : states.$target.appendChild($el);
  } else {
    initPickerInstance.call(this);
  }

  this.toggleView();
  bindEvents.call(this);
}
/**
 * 初始化Picker
 * @private
 */


function initPickerInstance() {
  var _this = this;

  var props = this.props,
      states = this.states;
  states.pickerInstance = new _picker__WEBPACK_IMPORTED_MODULE_6__["default"](states.$target, {
    content: states.$el,
    trigger: 'click',
    placement: Object(_picker_placements__WEBPACK_IMPORTED_MODULE_8__["getPlacementByAlign"])(props.align),
    showArrow: false,
    margin: 2,
    disabled: props.disabled
  });
  states.pickerInstance.on('open', function () {
    states.pickeOpened = true;
    setValueState.call(_this, states.bindValue);
    states.view = props.mode;

    _this.toggleView();

    _this.emit('open', states.pickerInstance);
  }).on('close', function () {
    states.pickeOpened = false;

    _this.emit('close', states.pickerInstance);
  });
}
/**
 * 点击当前年
 * @event
 * @private
 */


function handleCurrentYearClick() {
  if (this.states.view === 'date' || this.states.view === 'month') {
    this.toggleView('year');
  }
}
/**
 * 点击当前月
 * @event
 * @private
 */


function handleCurrentMonthClick() {
  this.toggleView('month');
}
/**
 * 点击today按钮
 * @date 2018-11-28
 * @param {*} e
 */


function handleTodayClick(e) {
  e.stopPropagation();
  this.setValue(new Date(), true);
}
/**
 * 点击confirm按钮
 * @date 2018-11-28
 * @param {*} e
 */


function handleConfirmClick(e) {
  e.stopPropagation();

  if (!this.states.value) {
    return;
  }

  this.setValue(this.states.value, true);
}
/**
 * bind dom events
 * @date 2018-11-28
 * @private
 */


function bindEvents() {
  var states = this.states,
      props = this.props;
  var self = this;
  var handles = states.handles = Object.create(null);
  handles.currentYearClick = handleCurrentYearClick.bind(this);
  handles.currentMonthClick = handleCurrentMonthClick.bind(this);
  handles.dateClick = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["proxy"])(states.$body, Selectors.item, function (e) {
    e.stopPropagation();
    var dates = states.dates,
        $dates = states.$dates,
        view = states.view;
    var index = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getIndex"])(this, $dates);

    if (index === -1) {
      return;
    }

    var data = dates[index];

    if (data.disabled) {
      return;
    }

    var value = data.date;
    var set = false;

    switch (view) {
      case 'year':
        if (props.mode === 'year') {
          set = true;
        } else {
          states.year = data.value;
          self.toggleView('month');
        }

        break;

      case 'month':
        if (props.mode === 'month') {
          set = true;
        } else {
          states.month = data.value;
          self.toggleView('date');
        }

        break;

      case 'date':
      default:
        set = true;
        break;
    }

    if (set) {
      self.setValue(value);
    }
  });
  handles.prevYear = this.prevYear.bind(this);
  handles.nextYear = this.nextYear.bind(this);
  handles.prevMonth = this.prevMonth.bind(this);
  handles.nextMonth = this.nextMonth.bind(this);
  handles.today = handleTodayClick.bind(this);
  handles.confirm = handleConfirmClick.bind(this);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$currentYear, 'click', handles.currentYearClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$currentMonth, 'click', handles.currentMonthClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$body, 'click', handles.dateClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$yearPrev, 'click', handles.prevYear);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$yearNext, 'click', handles.nextYear);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$monthPrev, 'click', handles.prevMonth);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$monthNext, 'click', handles.nextMonth);
  states.$today && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$today, 'click', handles.today);
  states.$confirm && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["bind"])(states.$confirm, 'click', handles.confirm);
}
/**
 * unbind dom events
 * @date 2018-11-28
 * @private
 */


function unbindEvents() {
  var states = this.states;
  var handles = states.handles;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$currentYear, 'click', handles.currentYearClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$currentMonth, 'click', handles.currentMonthClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$body, 'click', handles.dateClick);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$yearPrev, 'click', handles.prevYear);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$yearNext, 'click', handles.nextYear);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$monthPrev, 'click', handles.prevMonth);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$monthNext, 'click', handles.nextMonth);
  states.$today && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$today, 'click', handles.today);
  states.$confirm && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["unbind"])(states.$confirm, 'click', handles.confirm);
}
/**
 * 生成一个面板容器
 * @param {*} view
 * @method 
 */


function genWrap(view) {
  var $view = document.createElement('div');
  $view.className = UI_WRAP_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["addClass"])($view, UI_WRAP_NAME + '--' + view);
  return $view;
}
/**
 * 渲染年面板
 * @date 2018-11-28
 * @private
 */


function renderYearPanel() {
  var states = this.states;
  var $view = states.$year;

  if (!$view) {
    $view = states.$year = genWrap('year');
    states.$body.appendChild($view);
  }

  var years = getYears.call(this);
  $view.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_9__["yearMonthTpl"], {
    dates: years
  });
  states.dates = years;
  states.$dates = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.item, $view);
  afterViewChange.call(this);
}
/**
 * 渲染月面板
 * @date 2018-11-28
 * @private
 */


function renderMonthPanel() {
  var states = this.states;
  var $view = states.$month;
  var locales = states.locales;
  var year = states.year;
  var months = [];
  var i = 0;

  while (i++ < 12) {
    months.push({
      value: i,
      label: locales.months[i - 1],
      date: new Date(year, i, 0) // 当月最后一天

    });
  }

  if (!$view) {
    $view = states.$month = genWrap('month');
    $view.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_9__["yearMonthTpl"], {
      dates: months
    });
    states.$body.appendChild($view);
  }

  states.dates = months;
  states.$dates = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.item, $view);
  afterViewChange.call(this);
}
/**
 * 渲染日期面板
 * @date 2018-11-28
 * @private
 */


function renderDatePanel() {
  var states = this.states;
  var weekStart = states.weekStart,
      locales = states.locales;
  var start = weekStart % 7;
  var weeks = locales.weeks;
  weeks = weeks.slice(start).concat(weeks.slice(0, start));
  var dates = getDates.call(this);
  var $view = states.$date;

  if (!$view) {
    $view = states.$date = genWrap('date');
    states.$body.appendChild($view);
  }

  var html = Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_9__["weekTpl"], {
    weeks: weeks
  });
  html += Object(_utils_template__WEBPACK_IMPORTED_MODULE_3__["default"])(_template__WEBPACK_IMPORTED_MODULE_9__["datesTpl"], {
    dates: dates
  });
  $view.innerHTML = html;
  states.dates = dates;
  states.$dates = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["qsa"])(Selectors.item, $view);
  afterViewChange.call(this);
}
/**
 * 获取当前面板上的日期列表
 * @private
 * @returns {array}
 */


function getDates() {
  var states = this.states,
      props = this.props;
  var dates = [];
  var year = states.year,
      month = states.month,
      weekStart = states.weekStart;
  var length;
  var i;
  var firstDay = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getFirstDayInMonth"])(year, month);
  var now = new Date(); // 本月从第几格开始，上月占几格

  var offset = firstDay - (weekStart & 7);

  if (offset <= 0) {
    offset += 7;
  } // prev


  var prevYear = year;
  var prevMonth = month;

  if (month === 1) {
    prevYear -= 1;
    prevMonth = 12;
  } else {
    prevMonth -= 1;
  }

  length = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getDaysInMonth"])(prevYear, prevMonth);

  for (i = length - (offset - 1); i <= length; i++) {
    var date = getADateStr(prevYear, prevMonth, i);
    var today = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(date, now);
    dates.push({
      value: date,
      label: i,
      date: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseDate"])(date, props.format),
      today: today,
      placeholder: true
    });
  } // 当月


  length = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getDaysInMonth"])(year, month);

  for (i = 1; i <= length; i++) {
    var _date = getADateStr(year, month, i);

    var _today = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(_date, now);

    dates.push({
      value: _date,
      label: i,
      date: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseDate"])(_date, props.format),
      today: _today
    });
  } // 下月


  var nextYear = year;
  var nextMonth = month;

  if (month === 12) {
    nextYear += 1;
    nextMonth = 1;
  } else {
    nextMonth += 1;
  }

  length = 42 - dates.length;

  for (i = 1; i <= length; i++) {
    var _date2 = getADateStr(nextYear, nextMonth, i);

    var _today2 = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(_date2, now);

    dates.push({
      value: _date2,
      label: i,
      date: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseDate"])(_date2, props.format),
      today: _today2,
      placeholder: true
    });
  }

  return dates;
}
/**
 * 获取当前面板上的年份列表
 * @private
 * @returns {array}
 */


function getYears() {
  var states = this.states;
  var year = states.year,
      locales = states.locales;
  var yearStr = year + '';
  var value = yearStr.charAt(yearStr.length - 1);
  var left = Math.abs(0 - +value);
  var right = 9 - +value;
  var years = []; // 遍历当前年的每一天，直到disabledDate 返回true 或者循环结束
  // left

  while (left) {
    var val = year - left;
    years.push({
      value: val,
      label: val + locales.year,
      date: new Date(val, 11, 31)
    });
    left--;
  } // now


  years.push({
    value: year,
    label: year + locales.year,
    date: new Date(year, 11, 31)
  }); // right

  for (var i = 1; i <= right; i++) {
    var _val = year + i;

    years.push({
      value: _val,
      label: _val + locales.year,
      date: new Date(_val, 11, 31)
    });
  }

  var firstYear = years[0].value - 1;
  years.unshift({
    value: firstYear,
    label: firstYear + locales.year,
    placeholder: true,
    date: new Date(firstYear, 11, 31)
  });
  var lastYear = years[years.length - 1].value + 1;
  years.push({
    value: lastYear,
    label: lastYear + locales.year,
    placeholder: true,
    date: new Date(lastYear, 11, 31)
  });
  return years;
}
/**
 * 获取年月日字符串
 * @method
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 */


function getADateStr(year, month, day) {
  return [year, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["pad"])(month, 2), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["pad"])(day, 2)].join('-');
}
/**
 * 当面板改变后改变面板上的状态
 * @private
 */


function afterViewChange() {
  var _this2 = this;

  var states = this.states;
  var locales = states.locales;
  var $currentYear = states.$currentYear,
      $currentMonth = states.$currentMonth,
      $monthPrev = states.$monthPrev,
      $monthNext = states.$monthNext,
      year = states.year,
      month = states.month,
      view = states.view,
      dates = states.dates,
      $dates = states.$dates;
  toggleBtnState.call(this);

  switch (view) {
    case 'date':
      $monthPrev.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);
      $monthNext.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);
      $currentMonth.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);
      $currentYear.textContent = year + locales.year;
      $currentMonth.textContent = locales.shortMonths[month - 1];
      break;

    case 'year':
    case 'month':
      $currentMonth.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);
      $monthPrev.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);
      $monthNext.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);

      if (view === 'year') {
        states.$currentYear.textContent = dates[1].label + ' - ' + dates[dates.length - 2].label;
      } else {
        states.$currentYear.textContent = year + locales.year;
      }

      break;
  }

  dates.forEach(function (date, index) {
    var actived = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isSameDate"])(states.value, date.date, view);

    var disabled = _this2.isDisabled(date.date);

    date.disabled = disabled;
    $dates[index].classList[disabled ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
    $dates[index].classList[actived ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_ACTIVED"]);
  });
  this.emit('viewChange', {
    view: view,
    dates: dates,
    $dates: $dates,
    year: year,
    month: month
  });
}
/**
 * 切换按钮状态
 * @private
 */


function toggleBtnState() {
  isDisabledPrevYear.call(this);
  isDisabledPrevMonth.call(this);
  isDisabledNextYear.call(this);
  isDisabledNextMonth.call(this);
}
/**
 * 上一（十）年按钮是否禁用
 * @private
 * @returns {boolean}
 */


function isDisabledPrevYear() {
  var props = this.props,
      states = this.states;
  var year = states.year,
      view = states.view;
  var minYear = props.min.getFullYear();
  var step = view === 'year' ? 10 : 1;
  var disabled = year - step < minYear;

  if (disabled) {
    states.$yearPrev.setAttribute('disabled', '');
    states.$yearPrev.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
  } else {
    states.$yearPrev.removeAttribute('disabled');
    states.$yearPrev.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
  }

  return disabled;
}
/**
 * 下一（十）年按钮是否禁用
 * @private
 * @returns {boolean}
 */


function isDisabledNextYear() {
  var props = this.props,
      states = this.states;
  var year = states.year,
      view = states.view;
  var maxYear = props.max.getFullYear();
  var step = view === 'year' ? 10 : 1;
  var disabled = year + step > maxYear;

  if (disabled) {
    states.$yearNext.setAttribute('disabled', '');
    states.$yearNext.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
  } else {
    states.$yearNext.removeAttribute('disabled');
    states.$yearNext.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
  }

  return disabled;
}
/**
 * 上一月按钮是否禁用
 * @private
 * @returns {boolean}
 */


function isDisabledPrevMonth() {
  var props = this.props,
      states = this.states;
  var year = states.year,
      month = states.month;
  month = month - 1;
  var minDate = props.min; // 上月31日小于最小日期

  var value = new Date(year, month, 0);
  var disabled = value * 1 <= minDate * 1;

  if (disabled) {
    states.$monthPrev.setAttribute('disabled', '');
    states.$monthPrev.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
  } else {
    states.$monthPrev.removeAttribute('disabled');
    states.$monthPrev.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
  }

  return disabled;
}
/**
 * 下一月按钮是否禁用
 * @private
 * @returns {boolean}
 */


function isDisabledNextMonth() {
  var props = this.props,
      states = this.states;
  var year = states.year,
      month = states.month;
  month = month - 1;
  var maxDate = props.max; // 下月31日大于最大日期

  var value = new Date(year, month + 1, 0, 0);
  var disabled = value * 1 >= maxDate * 1;

  if (disabled) {
    states.$monthNext.setAttribute('disabled', '');
    states.$monthNext.classList.add(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
  } else {
    states.$monthNext.removeAttribute('disabled');
    states.$monthNext.classList.remove(_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
  }

  return disabled;
}
/**
 * 设置值得状态
 * @date 2018-11-28
 * @param {*} value
 */


function setValueState(value) {
  var props = this.props,
      states = this.states;
  value = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseDate"])(value, props.format);
  value = value ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["toDate"])(value) : null;
  var date = value || new Date();
  states.year = date.getFullYear();
  states.month = date.getMonth() + 1;

  if (value) {
    if (props.mode === 'year') {
      value.setMonth(0);
      value.setDate(1);
    }

    if (props.mode === 'month') {
      value.setDate(1);
    }
  }

  states.value = value;
}
/**
 * 设置最小最大值
 * @date 2018-11-28
 * @param {*} min
 * @param {*} max
 */


function setMinMaxDate(min, max) {
  var props = this.props;
  min = min || props.min;
  max = max || props.max;
  var minDate = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseDate"])(min, props.format) || MIN_DATE;
  var maxDate = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseDate"])(max, props.format) || MAX_DATE;
  minDate = Math.max(minDate * 1, MIN_DATE * 1);
  maxDate = Math.min(maxDate * 1, MAX_DATE * 1);
  props.min = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["toDate"])(minDate);
  props.max = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["toDate"])(maxDate);
}
/**
 * Date Picker Component
 * @date 2018-11-28
 * @export
 * @class DatePicker
 * @extends {Events}
 */


var DatePicker =
/*#__PURE__*/
function (_Events) {
  _inherits(DatePicker, _Events);

  /**
   * Creates an instance of DatePicker.
   * @date 2018-11-28
   * @param {*} target
   * @param {*} options
   * @memberof DatePicker
   */
  function DatePicker(target, options) {
    var _this3;

    _classCallCheck(this, DatePicker);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this3)) instanceof DatePicker)) {
      return _possibleConstructorReturn(_this3, new DatePicker(target, options));
    }

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(target)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["throwError"])('\'target\' 必须是一个DOM元素.');
    }

    var props = _this3.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {});
    props.isDisabedDate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(props.isDisabedDate) ? props.isDisabedDate : null;
    var states = _this3.states = Object.create(null);
    var isInput = target.nodeName === 'INPUT';
    states.isInput = isInput;
    states.$target = target;
    states.locales = Object(_utils_locale__WEBPACK_IMPORTED_MODULE_2__["getLocales"])(props.lang).datePicker;

    if (MODES.indexOf(props.mode) === -1) {
      props.mode === 'date';
    }

    states.view = props.mode === 'week' ? 'date' : props.mode;
    var value = props.value; // get value from target

    if (isInput && !value) {
      value = target.value;
    }

    setMinMaxDate.call(_assertThisInitialized(_assertThisInitialized(_this3)));
    setValueState.call(_assertThisInitialized(_assertThisInitialized(_this3)), value);
    states.bindValue = states.value;
    render.call(_assertThisInitialized(_assertThisInitialized(_this3)));

    if (states.isInput) {
      states.$target.value = _this3.getValue(true);
    }

    return _this3;
  }
  /**
   * 验证一个日期是否被禁用
   * @date 2018-11-28
   * @param {*} date
   * @returns
   * @memberof DatePicker
   */


  _createClass(DatePicker, [{
    key: "isDisabled",
    value: function isDisabled(date) {
      var props = this.props,
          states = this.states; // 如果组件禁用，则直接禁用

      if (props.disabled) {
        return true;
      }

      date = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["toDate"])(date);
      var min = props.min,
          max = props.max;

      if (!date || !min && !max) {
        return false;
      }

      var disabled = false;

      if (props.disabledDate) {
        // 只有返回true的情况下才认为禁用
        disabled = props.disabledDate(date, states.view) === true;
      }

      if (disabled) {
        return true;
      }

      if (states.view === 'year' || states.view === 'month') {
        var year = date.getFullYear();
        var _ref = {},
            minYear = _ref.minYear,
            maxYear = _ref.maxYear,
            minDate = _ref.minDate,
            maxDate = _ref.maxDate;

        if (min) {
          minYear = min.getFullYear();
          minDate = min.setDate(1);
        }

        if (max) {
          maxYear = max.getFullYear();
          maxDate = max.setDate(1);
        }

        var disableYear = minYear && year < minYear || maxYear && maxYear < year;

        if (states.view === 'year' || disableYear) {
          return disableYear;
        }

        var curDate = date.setDate(1);
        curDate = +curDate;
        disabled = minDate && curDate < +minDate || maxDate && +maxDate < curDate;
      } else {
        disabled = min && +date < +min || max && +date > +max;
      }

      return disabled;
    }
    /**
     * 设置当前value
     * @date 2018-11-28
     * @param {*} value
     * @param {*} updateBind 是否同时更新绑定值
     * @memberof DatePicker
     */

  }, {
    key: "setValue",
    value: function setValue(value, updateBind) {
      var states = this.states,
          props = this.props;

      if (value === null) {// todo
      } else {
        value = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parseDate"])(value, props.format);

        if (!value || this.isDisabled(value)) {
          value = props.bindValue;
        }
      }

      var oldValue = states.value;
      setValueState.call(this, value);
      var formatValue = this.getValue(true);

      if (+value !== +oldValue) {
        this.emit('change', formatValue, states.value);
      }

      if (!props.inline && !states.$confirm || updateBind) {
        states.bindValue = states.value;
        this.close();
        this.emit('done', formatValue, states.value);

        if (states.isInput) {
          states.$target.value = formatValue;
          states.$target.focus();
        }

        return;
      } // picker 模式在关闭时toggleView


      this.toggleView();
    }
    /**
     * 获取当前值
     * @date 2018-11-28
     * @param {*} format
     * @returns
     * @memberof DatePicker
     */

  }, {
    key: "getValue",
    value: function getValue(format) {
      if (this.states.value) {
        return format ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.states.value, this.props.format) : this.states.value;
      }

      return null;
    }
    /**
     * 切换面板
     * @date 2018-11-28
     * @param {*} view
     * @memberof DatePicker
     */

  }, {
    key: "toggleView",
    value: function toggleView(view) {
      var states = this.states,
          props = this.props;
      view = view || states.view;

      if (MODES.indexOf(view) === -1) {
        view === 'date';
      }

      if (props.mode === 'year') {
        view = 'year';
      }

      if (props.mode === 'month' && view === 'date') {
        view = 'month';
      }

      states.view = view === 'week' ? 'date' : view;
      states.$el.setAttribute('data-view', view);

      switch (view) {
        case 'year':
          renderYearPanel.call(this);
          break;

        case 'month':
          renderMonthPanel.call(this);
          break;

        case 'date':
          renderDatePanel.call(this);
          break;
      }

      if (states.$confirm) {
        if (states.value) {
          states.$confirm.removeAttribute('disabled');
        } else {
          states.$confirm.setAttribute('disabled', '');
        }
      }

      if (states.$foot) {
        states.$foot.classList[props.mode === 'date' && states.view !== 'date' ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATES_HIDE"]);
      }
    }
    /**
     * 上一/十年
     * @date 2018-11-28
     * @memberof DatePicker
     */

  }, {
    key: "prevYear",
    value: function prevYear() {
      var states = this.states;
      var year = states.year,
          view = states.view;
      var step = view === 'year' ? 10 : 1;
      year -= step;
      states.year = year;
      this.toggleView();
    }
    /**
     * 下一/十年
     * @date 2018-11-28
     * @memberof DatePicker
     */

  }, {
    key: "nextYear",
    value: function nextYear() {
      var states = this.states;
      var year = states.year,
          view = states.view;
      var step = view === 'year' ? 10 : 1;
      year += step;
      states.year = year;
      this.toggleView();
    }
    /**
     * 上一月
     * @date 2018-11-28
     * @memberof DatePicker
     */

  }, {
    key: "prevMonth",
    value: function prevMonth() {
      var states = this.states,
          props = this.props;
      var year = states.year,
          month = states.month;

      if (month === 1) {
        var minYear = props.min.getFullYear();

        if (year <= minYear) {
          year = minYear + 1;
        }

        year--;
        month = 12;
      } else {
        month--;
      }

      states.year = year;
      states.month = month;
      this.toggleView();
    }
    /**
     * 下一月
     * @date 2018-11-28
     * @memberof DatePicker
     */

  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var states = this.states,
          props = this.props;
      var year = states.year,
          month = states.month;

      if (month === 12) {
        var maxYear = props.max.getFullYear();

        if (year >= maxYear) {
          year = maxYear - 1;
        }

        year++;
        month = 1;
      } else {
        month++;
      }

      states.year = year;
      states.month = month;
      this.toggleView();
    }
    /**
     * open picker
     * @date 2018-11-28
     * @memberof ColorPicker
     */

  }, {
    key: "open",
    value: function open() {
      if (this.states.pickerInstance && !this.states.pickeOpened) {
        this.states.pickerInstance.open();
      }
    }
    /**
     * close picker
     * @date 2018-11-28
     * @memberof ColorPicker
     */

  }, {
    key: "close",
    value: function close() {
      if (this.states.pickerInstance && this.states.pickeOpened) {
        this.states.pickerInstance.close();
      }
    }
    /**
     * disable the component
     * @date 2018-11-28
     * @memberof Select
     */

  }, {
    key: "disable",
    value: function disable() {
      var props = this.props,
          states = this.states;
      props.disabled = true;

      if (states.pickerInstance) {
        states.pickerInstance.close();
        states.pickerInstance.disable();
      }
    }
    /**
     * enable the component
     * @date 2018-11-28
     * @memberof Select
     */

  }, {
    key: "enable",
    value: function enable() {
      var props = this.props,
          states = this.states;
      props.disabled = false;

      if (states.pickerInstance) {
        states.pickerInstance && states.pickerInstance.enable();
      }
    }
    /**
     * destroy
     * @date 2018-11-28
     * @memberof DatePicker
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var states = this.states,
          props = this.props;
      unbindEvents.call(this);

      if (props.inline) {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["removeNode"])(states.$el);
      } else {
        states.pickerInstance.destroy();
      }

      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return DatePicker;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["Events"]);
/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "./src/components/date-picker/template.js":
/*!************************************************!*\
  !*** ./src/components/date-picker/template.js ***!
  \************************************************/
/*! exports provided: panelTpl, weekTpl, datesTpl, yearMonthTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panelTpl", function() { return panelTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekTpl", function() { return weekTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datesTpl", function() { return datesTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearMonthTpl", function() { return yearMonthTpl; });
var panelTpl = "\n<div class=\"nv-date-panel\">\n  <div class=\"nv-date__head\">\n    <button type=\"button\" class=\"year-prev\">\n      <i class=\"nv-icon-arrow-d-left\"></i>\n    </button>\n    <button type=\"button\" class=\"month-prev\">\n      <i class=\"nv-icon-arrow-left\"></i>\n    </button>\n    <a class=\"year-current\"></a>\n    <a class=\"month-current\"></a>\n    <button type=\"button\" class=\"month-next\">\n      <i class=\"nv-icon-arrow-right\"></i>\n    </button>\n    <button type=\"button\" class=\"year-next\">\n      <i class=\"nv-icon-arrow-d-right\"></i>\n    </button>\n  </div>\n  <div class=\"nv-date__body\"></div>\n  <div class=\"nv-date__foot\">\n  <% if(today) {%>\n    <button type=\"button\" class=\"nv-btn nv-btn--small nv-btn--link nv-date__btn_today\"><%= today%></button>\n  <% } %>\n  <% if(confirm) {%>\n    <button type=\"button\" class=\"nv-btn nv-btn--small nv-btn--primary nv-date__btn_confirm\"><%= confirm%></button>\n  <% } %>\n  </div>\n</div>\n";
var weekTpl = "\n<ul class=\"nv-date__rows week-rows\">\n<% for(var i = 0, len = weeks.length; i < len; i++) {\n  var week = weeks[i];\n%>\n<li class=\"nv-date__cell\"><%=week%></li>\n<% }%>\n</ul>\n";
var datesTpl = "\n<% for(var i = 0; i < 6; i++) { %>\n<ul class=\"nv-date__rows date-rows\">\n<% for(var j = 0; j < 7; j++) {\n  var date = dates[i * 7 + j];\n%>\n<li class=\"nv-date__cell nv-date__item <% if(date.placeholder) { %> nv-placeholder<% } if (date.today) {%> is-today<% }%>\"><span><%=date.label%></span></li>\n<% }%>\n</ul>\n<% }%>\n";
var yearMonthTpl = "\n<ul class=\"nv-date__rows year-rows\">\n<% for(var i = 0, len = dates.length; i < len; i++) {\n  var date = dates[i];\n%>\n<li class=\"nv-date__cell nv-date__item<% if(date.placeholder) { %> nv-placeholder<% }%>\"><span><%=date.label%></span></li>\n<% }%>\n</ul>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  panelTpl: panelTpl,
  weekTpl: weekTpl,
  datesTpl: datesTpl,
  yearMonthTpl: yearMonthTpl
});

/***/ }),

/***/ "./src/components/date-picker/utils.js":
/*!*********************************************!*\
  !*** ./src/components/date-picker/utils.js ***!
  \*********************************************/
/*! exports provided: pad, getFirstDayInMonth, getDaysInMonth, isLeapYear, getDaysInYear, toDate, formatDate, parseDate, getDayTimestamps, isSameDate, isSameDay, dateInRange, getDatesOfYear, getDatesOfMonth, compareTwoTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstDayInMonth", function() { return getFirstDayInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return isLeapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInYear", function() { return getDaysInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayTimestamps", function() { return getDayTimestamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDate", function() { return isSameDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return isSameDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateInRange", function() { return dateInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDatesOfYear", function() { return getDatesOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDatesOfMonth", function() { return getDatesOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTwoTime", function() { return compareTwoTime; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _fecha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fecha */ "./src/components/date-picker/fecha.js");
/*
 * File: utils.js
 * Project: @vnnox/novaui
 * Description: 日期操作
 * Created: 2018-11-27 09:12
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-28 11:44
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */


/**
 *  补零
 * @param {*} value 
 * @param {*} len 
 */

var pad = function pad(value, len) {
  var val = value + '';
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
};
/**
 * 获取某月第一天是周几
 * @param year 
 * @param month 
 */

var getFirstDayInMonth = function getFirstDayInMonth(year, month) {
  return new Date(year, month - 1, 1).getDay();
};
/**
 * 获取某一月有多少天
 * @param year 
 * @param month 
 */

var getDaysInMonth = function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
};
/**
 * 是否是闰年
 * @param year 
 */

var isLeapYear = function isLeapYear(year) {
  return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
};
/**
 * 获取指定年的天数
 * @param {*} year 
 */

var getDaysInYear = function getDaysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
};
/**
 * 返回一个有效日期对象
 * @param date 
 */

var toDate = function toDate(date) {
  if (date === '' || date === null || date === void 0) {
    return null;
  }

  if (date instanceof Date) {
    return date;
  }

  if (!isNaN(+date) || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(date)) {
    date = new Date(parseInt(date, 10));
  } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(date)) {
    date = (date || '').trim();
    date = date.replace(/\.\d+/, '').replace(/-/, '/').replace(/-/, '/').replace(/T/, ' ').replace(/Z/, ' UTC').replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2');
    date = new Date(date);
  }

  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isDate"])(date) ? date : null;
};
/**
 * 格式化日期
 * @param date 
 * @param format 
 */

var formatDate = function formatDate(date, format, i18n) {
  date = toDate(date);

  if (!date) {
    return '';
  }

  return _fecha__WEBPACK_IMPORTED_MODULE_1__["default"].format(date, format || 'YYYY-MM-DD', i18n);
};
/**
 * 转换日期
 * @param date 
 * @param format 
 */

var parseDate = function parseDate(date, format, i18n) {
  if (date === '' || date === null || date === void 0) {
    return null;
  }

  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isDate"])(date) ? date : _fecha__WEBPACK_IMPORTED_MODULE_1__["default"].parse(date || '', format, i18n);
};
/**
 * 获取每一天0点的时间戳
 * @param date 
 */

var getDayTimestamps = function getDayTimestamps(date) {
  date = toDate(date);
  return date ? new Date(date.getFullYear(), date.getMonth() - 1, date.getDate(), 0, 0, 0).getTime() : 0;
};
/**
 * 校验两个日期是否相同
 * @param {*} date1 
 * @param {*} date2 
 * @param {*} type 
 */

var isSameDate = function isSameDate(date1, date2) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'date';

  if (!date1 || !date2) {
    return false;
  }

  date1 = toDate(date1);
  date2 = toDate(date2);
  var same = date1 && date2 && date1.getFullYear() === date2.getFullYear();

  if (!same || type === 'year') {
    return same;
  }

  same = same && date1.getMonth() === date2.getMonth();

  if (type === 'month') {
    return same;
  }

  return same && date1.getDate() === date2.getDate();
};
/**
 * 判断两个日期是否是同一天
 * @param day1 
 * @param day2 
 */

var isSameDay = function isSameDay(day1, day2) {
  return isSameDate(day1, day2, 'date');
};
/**
 * 校验日期是否在范围内
 * @param {*} value 
 * @param {*} start 
 * @param {*} end 
 */

var dateInRange = function dateInRange(value, start, end) {
  start = +toDate(start);
  value = +toDate(value);
  end = +toDate(end);
  return value >= start && value <= end;
};
/**
 * 获取某一年的每一天
 * @param year 
 */

var getDatesOfYear = function getDatesOfYear(year) {
  var days = getDaysInYear(year);
  var dates = [];

  for (var i = 0; i < days; i++) {
    var start = new Date(year, 0, 1);
    start.setDate(start.getDate() + i);
    dates.push(new Date(start.getFullYear(), start.getMonth(), start.getDate()));
  }

  return dates;
};
/**
 * 获取某年某月的每一天
 * @param year 
 * @param month 
 */

var getDatesOfMonth = function getDatesOfMonth(year, month) {
  var days = getDaysInMonth(year, month);
  var dates = [];

  for (var i = 0; i < days; i++) {
    var start = new Date(year, month - 1, 1);
    start.setDate(start.getDate() + i);
    dates.push(new Date(start.getFullYear(), start.getMonth(), start.getDate()));
  }

  return dates;
};
/**
 * 比较两个时间的大小
 * 将它们转换为同一天再比较
 * @param {*} time1 
 * @param {*} time2 
 * @returns {Boolean}
 */

var compareTwoTime = function compareTwoTime(time1, time2) {
  var t1 = new Date(1970, 0, 1, time1.getHours(), time1.getMinutes(), time1.getSeconds());
  var t2 = new Date(1970, 0, 1, time2.getHours(), time2.getMinutes(), time2.getSeconds());
  t1 = +t1;
  t2 = +t2;

  if (t1 === t2) {
    return 0;
  }

  if (t1 > t2) {
    return 1;
  }

  return -1;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  pad: pad,
  getFirstDayInMonth: getFirstDayInMonth,
  getDaysInMonth: getDaysInMonth,
  isLeapYear: isLeapYear,
  getDaysInYear: getDaysInYear,
  toDate: toDate,
  formatDate: formatDate,
  parseDate: parseDate,
  getDayTimestamps: getDayTimestamps,
  isSameDay: isSameDay,
  isSameDate: isSameDate,
  dateInRange: dateInRange,
  getDatesOfYear: getDatesOfYear,
  getDatesOfMonth: getDatesOfMonth,
  compareTwoTime: compareTwoTime
});

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
 * Description: 标准数字输入器
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

/***/ "./src/components/loader/index.js":
/*!****************************************!*\
  !*** ./src/components/loader/index.js ***!
  \****************************************/
/*! exports provided: Loader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _utils_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/popup */ "./src/utils/popup.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template */ "./src/components/loader/template.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 页面初始化，加载数据时显示动效
 * Created: 2018-11-26 02:03
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-26 02:10
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */




 // ui class name

var UI_NAME = 'nv-loader'; // 收集已创建的loader实例

var instances = []; // default config

var defaults = {
  // [string] 遮罩背景色
  background: 'rgba(255,255,255,.8)',
  // [boolean] 锁屏
  lock: false,
  // [string] 加载文案
  label: '',
  // [string] 自定义样式
  customClass: '',
  // [boolean] 文案和图标垂直居中，默认水平显示
  vertical: false
  /**
   * render
   * @private
   */

};

function render() {
  var props = this.props,
      states = this.states;
  var $el = document.createElement('div');
  $el.className = UI_NAME;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])($el, props.customClass);
  props.vertical && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])($el, UI_NAME + '--vertical');
  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_1__["template"])(_template__WEBPACK_IMPORTED_MODULE_4__["skeletonTpl"], {
    background: (props.background || 'transparent').toString(),
    label: props.label
  });
  states.$container.appendChild($el);
  states.$el = $el;

  if (states.isBody) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])($el, UI_NAME + '--fullscreen');
    _utils_popup__WEBPACK_IMPORTED_MODULE_3__["default"].open({
      id: states.id,
      backdrop: false,
      backdropBackground: null,
      scrollLock: props.lock,
      zIndex: _utils_popup__WEBPACK_IMPORTED_MODULE_3__["default"].nextZIndex(),
      escClose: false
    });
  } else {
    if (props.lock) {
      states.$container.classList.add('nv-locked');
    }
  }

  $el.style.zIndex = _utils_popup__WEBPACK_IMPORTED_MODULE_3__["default"].nextZIndex();
}
/**
 * Loader Component
 * @date 2018-11-26
 * @export
 * @class Loader
 */


var Loader =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Loader.
   * @date 2018-11-26
   * @param {*} container
   * @param {*} options
   * @memberof Loader
   */
  function Loader(container, options) {
    _classCallCheck(this, Loader);

    if (!(this instanceof Loader)) {
      return new Loader(container, options);
    }

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(container)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["throwError"])('\'container\' 必须是一个DOM容器', 'type');
    }

    this.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["mixins"])({}, defaults, options);
    var states = this.states = Object.create(null);
    states.isBody = container === document.body; // 页面级Loader只允许有一个

    if (states.isBody) {
      instances.forEach(function (ins) {
        if (ins.states.isBody) {
          ins.close();
        }
      });
      instances.push(this);
    } else {
      var position = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["getStyle"])(container, 'position');

      if (!position || position === 'static') {
        container.style.position = 'relative';
      }
    }

    states.$container = container;
    states.id = UI_NAME + '_' + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])();
    render.call(this);
  }
  /**
   * close
   * @date 2018-11-26
   * @memberof Loader
   */


  _createClass(Loader, [{
    key: "close",
    value: function close() {
      var states = this.states;
      var index = instances.indexOf(this);

      if (index > -1) {
        instances.splice(index, 1);
      }

      if (!this.states) {
        return;
      }

      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["removeNode"])(states.$el);

      if (states.isBody) {
        _utils_popup__WEBPACK_IMPORTED_MODULE_3__["default"].close(states.id);
      } else if (this.props.lock) {
        states.$container.classList.remove('nv-locked');
      }

      this.states = null;
      this.props = null;
    }
  }]);

  return Loader;
}();
/**
 * 销毁所有的Loader实例
 * @date 2018-11-26
 * @static
 * @memberof Loader
 */

Loader.destroy = function () {
  instances.forEach(function (ins) {
    return ins.close();
  });
  instances.length = 0;
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/loader/template.js":
/*!*******************************************!*\
  !*** ./src/components/loader/template.js ***!
  \*******************************************/
/*! exports provided: skeletonTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
var skeletonTpl = "\n<div class=\"nv-loader__backdrop\" style=\"background:<%=background%>;\"></div>\n<div class=\"nv-loader__inner\">\n  <div class=\"nv-loader__content\">\n    <span class=\"nv-loader__spin\">\n      <svg viewBox=\"25 25 50 50\" class=\"circular\"><circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" class=\"path\"></circle></svg>\n    </span>\n    <% if(label) {%>\n    <span class=\"nv-loader__label\"><%=label%></span>\n    <% }%>\n  </div>\n</div>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl
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
 * Description: alert / confirm
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

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: 主动操作后的反馈提示，如操作成功等
 * Created: 2018-11-19 05:01
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-11-26 02:04
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */




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
 * Description: 页面对话框
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
  // [boolean] 默认是否打开
  visible: false,
  // [string | boolean] 标题
  title: '',
  // [string | htmlelement] 内容
  content: '',
  // [boolean] 显示关闭按钮
  closeBtn: true,
  // [HTMLElement] 插入到的父级元素
  appendTo: document.body,
  // [boolean] 显示遮罩层
  backdrop: true,
  // [string] 遮罩层背景色
  backdropBackground: 'rgba(0,0,0,.5)',
  // [boolean] 点击遮罩层关闭
  backdropClose: true,
  // [boolean] 按esc键关闭
  escClose: true,
  // [ number| string | null ] 模态框宽度
  width: null,
  // [ number | string ] 距离顶部高度
  top: '10%',
  // [ string | null] 自定义样式
  customClass: null,

  /**
   * [array | null | boolean]
   * button: {
   *   text: [string] 按钮文本
   *   css: [string] 按钮样式
   *   hanlde: [function] 按钮事件
   * }
   */
  btns: null,
  // [string | HTMLElement] btns同级插槽
  footSlot: null,
  // [boolean] 是否锁屏
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
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/locale */ "./src/utils/locale.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../select */ "./src/components/select/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template */ "./src/components/pagination/template.js");
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
  total: _template__WEBPACK_IMPORTED_MODULE_8__["totalTpl"],
  prev: _template__WEBPACK_IMPORTED_MODULE_8__["prevTpl"],
  pager: _template__WEBPACK_IMPORTED_MODULE_8__["pagerTpl"],
  next: _template__WEBPACK_IMPORTED_MODULE_8__["nextTpl"],
  sizes: _template__WEBPACK_IMPORTED_MODULE_8__["sizesTpl"],
  jumper: _template__WEBPACK_IMPORTED_MODULE_8__["jumperTpl"] // 内部选择器

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
  lang: '',
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
   * pager: 数字分页，不包括上/下页按钮
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
      states = this.states;
  var $container = states.$container;
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
      html += Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"])(tpl, states.locales, {});
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
      selectClass: 'pagination-sizes-select',
      align: 'left'
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
  states.$pagers.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(_template__WEBPACK_IMPORTED_MODULE_8__["pagerItemsTpl"], {
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
    states.$total.innerHTML = _utils_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"]._(states.locales.total, {
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
    states.$prev.classList[isDisabled ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
    isDisabled ? states.$prev.setAttribute('disabled', 'disabled') : states.$prev.removeAttribute('disabled');
  } // 切换下一页按钮的禁用状态


  if (states.$next) {
    var _isDisabled = isDisabledNext.call(this);

    states.$next.classList[_isDisabled ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_7__["CLASS_STATUS_DISABLED"]);
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

    var props = _this2.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, defaults, options || {});
    var states = _this2.states = Object.create(null);
    states.handles = Object.create(null);
    states.pages = 0;
    states.$container = container; // 初始化语言包

    states.locales = Object(_utils_locale__WEBPACK_IMPORTED_MODULE_5__["getLocales"])(props.lang).pagination; // 处理visible num

    var visible = props.visible;
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

    props.visible = visible; // 处理 total, index, limit

    updateStates.call(_assertThisInitialized(_assertThisInitialized(_this2)), props);
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
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var oldIndex = this.states.index;
      updateStates.call(this, {
        index: index
      });
      updateDom.call(this);

      if (emit && oldIndex !== this.states.index) {
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
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
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
        }

        states.limitSelectIns.setValue(limit);
      }

      if (emit) {
        this.emit('change', this.states.index, this.states.limit, this.states.pages);
      }
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
 * Description: 底层： Popover/Select/DatePicker/TimePicker...
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
      $picker.style.position = 'fixed';
      $picker.style.display = 'block';
      states.visible = true;
      setPosition.call(this);
      $picker.style.visibility = null;
      $picker.style.position = null;
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
/*! exports provided: PLACEMENTS, getPlacement, getPlacementByAlign, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEMENTS", function() { return PLACEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlacement", function() { return getPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlacementByAlign", function() { return getPlacementByAlign; });
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
/**
 * 通过align获取placement
 * @param {*} align 
 */

var getPlacementByAlign = function getPlacementByAlign(align) {
  var placement;

  switch (align) {
    case 'center':
      placement = 'bottom';
      break;

    case 'right':
      placement = 'bottom-end';
      break;

    case 'left':
    default:
      placement = 'bottom-start';
      break;
  }

  return placement;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  PLACEMENTS: PLACEMENTS,
  getPlacement: getPlacement,
  getPlacementByAlign: getPlacementByAlign
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
 * Description: 轻量级模态框
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

  if (props.asHtml) {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])(props.content)) {
      states.$content.appendChild(props.content);
    } else {
      states.$content.innerHTML = (props.content || '').toString();
    }
  } else {
    states.$content.textContent = (props.content || '').toString();
  }

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
/* harmony import */ var _picker_placements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../picker/placements */ "./src/components/picker/placements.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template */ "./src/components/select/template.js");
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
  render: null,
  // [ string ] 与target的对齐方式
  align: 'left'
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
  $select.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(_template__WEBPACK_IMPORTED_MODULE_8__["skeletonTpl"], {
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
  $selectPicker.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(_template__WEBPACK_IMPORTED_MODULE_8__["pickerSkeletonTpl"], {
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
    placement: Object(_picker_placements__WEBPACK_IMPORTED_MODULE_7__["getPlacementByAlign"])(props.align),
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
    $optionsWrap.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_2__["template"])(props.groupable ? _template__WEBPACK_IMPORTED_MODULE_8__["optionGroupsTpl"] : _template__WEBPACK_IMPORTED_MODULE_8__["optionsTpl"], {
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

/***/ "./src/components/time-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/time-picker/index.js ***!
  \*********************************************/
/*! exports provided: TimePicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return TimePicker; });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../picker */ "./src/components/picker/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _date_picker_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../date-picker/utils */ "./src/components/date-picker/utils.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _picker_placements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../picker/placements */ "./src/components/picker/placements.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/locale */ "./src/utils/locale.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template */ "./src/components/time-picker/template.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * File: index.js
 * Project: @vnnox/novaui
 * Description: Choose Time
 * Created: 2018-12-04 10:18
 * Author: smohan (mengxw@novastar.tech)
 * -----
 * Last Modified: 2018-12-04 10:18
 * Modified By: smohan (mengxw@novastar.tech>)
 * -----
 * Copyright 2018, NovaStar Tech Co., Ltd
 */









 // ui class name

var UI_NAME = 'nv-time-picker'; // default config

var defaults = {
  // [ string ] 国际化
  lang: '',
  // [ string | date ] 绑定值
  value: '',
  // [ string | date ] 默认值
  defaultValue: null,
  // [ string ] 格式化
  format: 'HH:mm:ss',
  // [ string ] 自定义样式
  customClass: '',
  // [ string ] 与target的对齐方式
  align: 'left',
  // [ string | date ] 最小时间
  minTime: null,
  // [ string | date ] 最大时间
  maxTime: null,
  // [ boolean ] 是否禁用
  disabled: false,
  // [ boolean ] 显示取消按钮
  cancel: false,
  // [ boolean ] 显示确定按钮
  confirm: false,
  // Picker宽度
  width: 160,
  // 行高
  itemHeight: 32 // selectors

};
var Selectors = {
  hour: '.hour-select',
  minute: '.minute-select',
  second: '.second-select',
  select: '.nv-time-picker__select',
  option: '.nv-time-picker__option',
  cancel: '.nv-btn__cancel',
  confirm: '.nv-btn__confirm' // config of every part of time

};
var TIME_MAP = [{
  name: 'hour',
  key: 'H',
  size: 24,
  useKey: 'useHour'
}, {
  name: 'minute',
  key: 'm',
  size: 60,
  useKey: 'useMinute'
}, {
  name: 'second',
  key: 's',
  size: 60,
  useKey: 'useSecond'
}];
/**
 * 获取时分秒在value字符串中所处的位置
 * @private
 * @param {*} type 
 * @param {*} format 
 */

function getPartFormatIndexRange(type, format) {
  var start;
  var len;

  switch (type) {
    case 'hour':
      len = /HH/.test(format) ? 2 : 1;
      start = format.indexOf(len === 2 ? 'HH' : 'H');
      break;

    case 'minute':
      len = /mm/.test(format) ? 2 : 1;
      start = format.indexOf(len === 2 ? 'mm' : 'm');
      break;

    case 'second':
      len = /ss/.test(format) ? 2 : 1;
      start = format.indexOf(len === 2 ? 'ss' : 's');
      break;
  }

  return [start, start + len];
}
/**
 * 获取下拉列表
 * @param {*} max 
 */


function genOptions(max) {
  var i = -1;
  var options = [];

  while (++i < max) {
    options.push({
      value: i,
      label: Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["pad"])(i)
    });
  }

  return options;
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
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["addClass"])($el, props.customClass); // 为了隐藏滚动条, scroll中有个 -20px的margin值

  var scrollBarWidth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["getElScrollbarWidth"])();
  var padding = scrollBarWidth ? 0 : 20;
  $el.innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_1__["default"])(_template__WEBPACK_IMPORTED_MODULE_9__["skeletonTpl"], {
    cancel: props.cancel ? states.locales.cancel : false,
    confirm: props.confirm ? states.locales.confirm : false,
    padding: padding,
    useHour: states.useHour,
    useMinute: states.useMinute,
    useSecond: states.useSecond
  });
  states.$hour = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.hour, $el)[0];
  states.$minute = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.minute, $el)[0];
  states.$second = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.second, $el)[0];
  TIME_MAP.forEach(function (item) {
    if (states[item.useKey]) {
      var $wrap = states["$".concat(item.name)];
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.select, $wrap)[0].innerHTML = Object(_utils_template__WEBPACK_IMPORTED_MODULE_1__["default"])(_template__WEBPACK_IMPORTED_MODULE_9__["optionsTpl"], {
        options: genOptions(item.size)
      }); // 缓存DOM

      states["$".concat(item.name, "Options")] = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.option, $wrap);
    } else {
      delete states["$".concat(item.name)];
    }
  });
  states.$el = $el;
  states.$confirm = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.confirm, $el)[0];
  states.$cancel = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["qsa"])(Selectors.cancel, $el)[0];
  bindEvents.call(this);
  initPickerInstance.call(this);

  if (states.isInput) {
    states.$target.value = this.getValue(true);
  }
}
/**
 * 初始化Picker
 * @private
 */


function initPickerInstance() {
  var _this = this;

  var props = this.props,
      states = this.states;
  states.pickerInstance = new _picker__WEBPACK_IMPORTED_MODULE_3__["default"](states.$target, {
    content: states.$el,
    trigger: 'click',
    placement: Object(_picker_placements__WEBPACK_IMPORTED_MODULE_7__["getPlacementByAlign"])(props.align),
    showArrow: false,
    margin: 2,
    disabled: props.disabled
  });
  states.pickerInstance.on('open', function () {
    var targetWidth = states.$target.offsetWidth;
    var width;

    if (props.width === 'auto') {
      width = targetWidth;
    } else if (props.width) {
      width = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["getSize"])(props.width);
    }

    width = Math.max(150, width);
    states.$el.style.width = width + 'px';
    states.pickeOpened = true; // 打开时重新设定当前值

    states.value = states.bindValue;
    setTimeMap.call(_this);
    autoScroll.call(_this); // 在scroll之后绑定Scroll事件，防止Scroll事件触发setValue

    setTimeout(function () {
      return bindScrollEvents.call(_this);
    }, 0);

    _this.emit('open', states.pickerInstance);
  }).on('close', function () {
    states.pickeOpened = false;
    unbindScrollEvents.call(_this);

    if (states.$confirm && +states.value !== +states.bindValue) {
      _this.setValue(states.bindValue);
    }

    _this.emit('close', states.pickerInstance);
  });
}
/**
 * 容器滚动事件
 * @event
 * @param {*} type 
 */


function handleWrapScroll(type) {
  var props = this.props;
  var $scroller = this.states["$".concat(type)];
  var ticking = $scroller.ticking;
  var self = this;

  if (!ticking) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["reqAnimationFrame"])(function () {
      $scroller.ticking = false;
      var scrollTop = $scroller.scrollTop;
      var value = Math.min(Math.floor(scrollTop / props.itemHeight), type === 'hour' ? 23 : 59);

      if (isDisabledItem.call(self, type, value)) {
        return;
      }

      self.states.map[type] = value;
      setPanelValue.call(self, '', false);
    });
    $scroller.ticking = true;
  }
}
/**
 * 滚动后自动调整滚动条位置事件
 * @event
 * @param {*} type 
 */


function handleAdjustScroll(type) {
  var props = this.props;
  var $scroller = this.states["$".concat(type)];
  var scrollTop = $scroller.scrollTop;
  var value = Math.min(Math.floor(scrollTop / props.itemHeight), type === 'hour' ? 23 : 59);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["scrollTo"])($scroller, value * props.itemHeight, 60);
}
/**
 * 鼠标进入事件
 * @event
 * @param {*} type 
 */


function handleMouseenter(type) {
  var states = this.states;
  states.focusPanelType = type;

  if (states.isInput) {
    setSelectionRange.call(this, type);
  }
}
/**
 * 确定按钮事件
 * @event
 */


function handleConfirm() {
  var states = this.states;
  var oldValue = states.oldValue;
  var value = states.value || getValueByMap.call(this);
  states.bindValue = states.value = value;
  this.emit('done', this.getValue(true), value, oldValue);
  this.close();
}
/**
 * 取消按钮被点击事件
 * @private
 */


function handleCancel() {
  // const { states } = this
  // 关闭时重新设定值，取消事件不会更新bindValue
  // states.value = states.bindValue
  // setTimeMap.call(this)
  // if (states.isInput) {
  //   states.$target.value = this.getValue(true)
  // }
  this.close();
}
/**
 * 绑定滚动事件
 * @private
 */


function bindScrollEvents() {
  var states = this.states;
  var handles = states.handles; // 先解绑

  unbindScrollEvents.call(this);
  states.useHour && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$hour, 'scroll', handles.hourWrapScroll);
  states.useMinute && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$minute, 'scroll', handles.minuteWrapScroll);
  states.useSecond && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$second, 'scroll', handles.secondWrapScroll);
}
/**
 * 解绑滚动事件
 * @private
 */


function unbindScrollEvents() {
  var states = this.states;
  var handles = states.handles;
  states.useHour && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$hour, 'scroll', handles.hourWrapScroll);
  states.useMinute && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$minute, 'scroll', handles.minuteWrapScroll);
  states.useSecond && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$second, 'scroll', handles.secondWrapScroll);
}
/**
 * target value change event
 * @event
 * @param {*} event 
 */


function handleInputChange(event) {
  var value = event.target.value;
  this.setValue(value);
  this.states.bindValue = this.getValue();
}
/**
 * target keydown event
 * @event
 * @param {*} event 
 */


function handleKeydown(event) {
  var states = this.states,
      props = this.props;

  if (props.disabled || !states.pickeOpened) {
    return;
  }

  var code = event.keyCode;

  if (code === 27) {
    event.preventDefault();
    states.pickerInstance.close();
    return;
  }

  if (code === 38 || code === 40 && states.focusPanelType) {
    event.preventDefault();
    setMapByKeydownEvent.call(this, code === 38 ? 'prev' : 'next');
    return;
  }
}
/**
 * 快捷键选择值
 * @private
 * @param {*} type 
 * @param {*} value 
 */


function setMapByKeydownEvent(type, value) {
  var states = this.states,
      props = this.props;
  var part = states.focusPanelType;
  var map = states.map;
  value = value === void 0 ? map[part] : value;
  var max = part === 'hour' ? 23 : 59;
  value = type === 'prev' ? --value : ++value;

  if (value < 0) {
    value = max;
  }

  if (value > max) {
    value = 0;
  }

  if (isDisabledItem.call(this, part, value)) {
    return setMapByKeydownEvent.call(this, type, value);
  }

  map[part] = value;
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["scrollTo"])(states["$".concat(part)], value * props.itemHeight, 0);
}
/**
 * bind dom events
 * @private
 */


function bindEvents() {
  var states = this.states;
  var handles = states.handles = Object.create(null);
  var self = this;
  handles.hourWrapScroll = handleWrapScroll.bind(this, 'hour');
  handles.minuteWrapScroll = handleWrapScroll.bind(this, 'minute');
  handles.secondWrapScroll = handleWrapScroll.bind(this, 'second');
  handles.hourAdjustScroll = handleAdjustScroll.bind(this, 'hour');
  handles.minuteAdjustScroll = handleAdjustScroll.bind(this, 'minute');
  handles.secondAdjustScroll = handleAdjustScroll.bind(this, 'second');
  handles.hourMouseenter = handleMouseenter.bind(this, 'hour');
  handles.minuteMouseenter = handleMouseenter.bind(this, 'minute');
  handles.secondMouseenter = handleMouseenter.bind(this, 'second');
  handles.inputChange = handleInputChange.bind(this);
  handles.keydown = handleKeydown.bind(this);
  handles.optionClick = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["proxy"])(states.$el, Selectors.option, function () {
    var $parent = this.parentNode.parentNode;
    var type = $parent === states.$hour ? 'hour' : $parent === states.$minute ? 'minute' : 'second';
    var index = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["getIndex"])(this, states["$".concat(type, "Options")]);

    if (isDisabledItem.call(self, type, index)) {
      return;
    }

    states.map[type] = index;
    setPanelValue.call(self);
  });
  handles.confirm = handleConfirm.bind(this);
  handles.cancel = handleCancel.bind(this);

  if (states.useHour) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$hour, 'mouseleave', handles.hourAdjustScroll);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$hour, 'mouseenter', handles.hourMouseenter);
  }

  if (states.useMinute) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$minute, 'mouseleave', handles.minuteAdjustScroll);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$minute, 'mouseenter', handles.minuteMouseenter);
  }

  if (states.useSecond) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$second, 'mouseleave', handles.secondAdjustScroll);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$second, 'mouseenter', handles.secondMouseenter);
  }

  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$el, 'click', handles.optionClick);
  states.$confirm && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$confirm, 'click', handles.confirm);
  states.$cancel && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$cancel, 'click', handles.cancel);

  if (states.isInput) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$target, 'change', handles.inputChange);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["bind"])(states.$target, 'keydown', handles.keydown);
  }
}
/**
 * unbind dom events
 * @private
 */


function unbindEvents() {
  var states = this.states;
  var handles = states.handles;
  unbindScrollEvents.call(this);

  if (states.useHour) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$hour, 'mouseleave', handles.hourAdjustScroll);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$hour, 'mouseenter', handles.hourMouseenter);
  }

  if (states.useMinute) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$minute, 'mouseleave', handles.minuteAdjustScroll);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$minute, 'mouseenter', handles.minuteMouseenter);
  }

  if (states.useSecond) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$second, 'mouseleave', handles.secondAdjustScroll);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$second, 'mouseenter', handles.secondMouseenter);
  }

  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$el, 'click', handles.optionClick);
  states.$confirm && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$confirm, 'click', handles.confirm);
  states.$cancel && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$cancel, 'click', handles.cancel);

  if (states.isInput) {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$target, 'change', handles.inputChange);
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["unbind"])(states.$target, 'keydown', handles.keydown);
  }
}
/**
 * 校验格式
 * @private
 */


function checkFormat() {
  var props = this.props,
      states = this.states;
  var count = 0;
  TIME_MAP.forEach(function (item) {
    states[item.useKey] = props.format.indexOf(item.key) > -1;
    states[item.useKey] && count++;
  });

  if (!count) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["throwError"])('无效的格式');
  }

  states.hourIndexs = getPartFormatIndexRange('hour', props.format);
  states.minuteIndexs = getPartFormatIndexRange('minute', props.format);
  states.secondIndexs = getPartFormatIndexRange('second', props.format);
}
/**
 * 设置最小最大值Map
 * @private
 */


function setRangeMap() {
  var props = this.props,
      states = this.states;
  var minHour = -1;
  var minMinute = -1;
  var minSecond = -1;
  var maxHour = 24;
  var maxMinute = 60;
  var maxSecond = 60;

  if (props.minTime) {
    minHour = props.minTime.getHours();
    minMinute = props.minTime.getMinutes();
    minSecond = props.minTime.getSeconds();
  }

  if (props.maxTime) {
    maxHour = props.maxTime.getHours();
    maxMinute = props.maxTime.getMinutes();
    maxSecond = props.maxTime.getSeconds();
  }

  states.minMap = [minHour, minMinute, minSecond];
  states.maxMap = [maxHour, maxMinute, maxSecond];
}
/**
 * 设置target选取
 * @private
 * @param {*} type 
 */


function setSelectionRange(type) {
  var states = this.states;
  var range = states["".concat(type, "Indexs")];
  states.$target.setSelectionRange(range[0], range[1]);
}
/**
 * 将时间转换为字典对象
 * 当该对象改变的时候，将会重置时间选项的选中，禁用状态等
 * 该对象仅供Picker的初始状态使用
 * 字典中对象的hour等值不一定是真实value的值
 * 其值可能是：
 * 1. value
 * 2. defaultValue
 * 3. now (new Date())
 * 4. minTime
 * 5. maxTime
 * @private
 */


function setTimeMap() {
  var props = this.props,
      states = this.states;
  var map = Object.create(null);
  var value = states.value;

  if (!value) {
    value = getEffectiveValue.call(this, props.defaultValue || props.minTime);
  }

  if (value) {
    map.hour = value.getHours();
    map.minute = value.getMinutes();
    map.second = value.getSeconds();
  } else {
    map.hour = map.minute = map.second = 0;
  }

  states.map = map;
  setItemsStatus.call(this);
}
/**
 * 通过map获取value
 * @private
 */


function getValueByMap() {
  var states = this.states;
  var map = states.map;
  var values = [];
  states.useHour && values.push(map.hour);
  states.useMinute && values.push(map.minute);
  states.useSecond && values.push(map.second);
  return values.join(':');
}
/**
 * 设置所有选项的状态
 * @private
 */


function setItemsStatus() {
  var states = this.states;
  states.useHour && toggleItemsStatus.call(this, 'hour');
  states.useMinute && toggleItemsStatus.call(this, 'minute');
  states.useSecond && toggleItemsStatus.call(this, 'second');
}
/**
 * 设置指定类型的选项的状态
 * @param {string} type 
 * @private
 */


function toggleItemsStatus(type) {
  var _this2 = this;

  var states = this.states;
  var $options = states["$".concat(type, "Options")];
  var value = states.map[type];
  $options.forEach(function ($item, index) {
    var isDisabled = isDisabledItem.call(_this2, type, index);
    var isActived = index === value;
    $item.classList[isActived ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_6__["CLASS_STATES_ACTIVED"]);
    $item.classList[isDisabled ? 'add' : 'remove'](_utils_constant__WEBPACK_IMPORTED_MODULE_6__["CLASS_STATUS_DISABLED"]);
  });
}
/**
 * 自动滚动
 * @private
 */


function autoScroll() {
  var states = this.states,
      props = this.props;
  states.useHour && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["scrollTo"])(states.$hour, states.map.hour * props.itemHeight, 0);
  states.useMinute && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["scrollTo"])(states.$minute, states.map.minute * props.itemHeight, 0);
  states.useSecond && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["scrollTo"])(states.$second, states.map.second * props.itemHeight, 0);
}
/**
 * 获取一个有效日期
 * @param {*} value 
 * @private
 * @returns {null | Date}
 */


function getEffectiveValue(value) {
  var props = this.props;
  value = Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["parseDate"])(value, props.format);
  var minTime = props.minTime,
      maxTime = props.maxTime;

  if (!value || !minTime && !maxTime) {
    return value;
  }

  if (minTime || maxTime) {
    if (minTime && Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["compareTwoTime"])(value, minTime) === -1) {
      value = minTime;
    }

    if (maxTime && Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["compareTwoTime"])(value, maxTime) === 1) {
      value = maxTime;
    }
  }

  return value;
}
/**
 *
 * 校验传入值是否被禁用
 * @private
 * @param {*} type
 * @param {*} value
 * @returns {Boolean}
 */


function isDisabledItem(type, value) {
  var states = this.states,
      props = this.props;

  if (props.disabled) {
    return true;
  }

  var _states$minMap = _slicedToArray(states.minMap, 2),
      minHour = _states$minMap[0],
      minMinute = _states$minMap[1];

  var _states$maxMap = _slicedToArray(states.maxMap, 2),
      maxHour = _states$maxMap[0],
      maxMinute = _states$maxMap[1];

  if (type === 'hour') {
    return value < minHour || value > maxHour;
  }

  var map = states.map;

  if (type === 'minute') {
    return map.hour < minHour || map.hour > maxHour || map.hour === minHour && value < minMinute || map.hour === maxHour && value > maxMinute;
  }

  if (type === 'second') {
    var time = new Date(1970, 0, 1, map.hour, map.minute, value);
    var res = false;

    if (props.minTime) {
      // time < minTime
      res = Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["compareTwoTime"])(props.minTime, time) === 1;
    }

    if (!res && props.maxTime) {
      // time > maxTime
      res = Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["compareTwoTime"])(props.maxTime, time) === -1;
    }

    return res;
  }

  return false;
}
/**
 * set value
 * 设置的不是bindValue
 * @param {*} value 
 * @param {*} scroll 
 */


function setPanelValue(value) {
  var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var states = this.states,
      props = this.props;

  if (props.disabled) {
    return;
  }

  var oldValue = states.value;
  value = getEffectiveValue.call(this, value || getValueByMap.call(this));

  if (!value) {
    value = oldValue;
  }

  var newValue = value;
  states.value = newValue;
  var formatValue = this.getValue(true); // 设置target的value

  if (states.isInput) {
    states.$target.value = formatValue;
    states.$target.focus();
  }

  if (+newValue !== +oldValue) {
    this.emit('change', formatValue, newValue, oldValue);
  }

  if (!states.$confirm) {
    var bindValue = states.bindValue;

    if (+bindValue !== +newValue) {
      states.bindValue = newValue;
      this.emit('done', formatValue, newValue, bindValue);
    }
  }

  setTimeMap.call(this);
  scroll && autoScroll.call(this);
}
/**
 * TimePicker Component
 * @date 2018-12-05
 * @export
 * @class TimePicker
 * @extends {Events}
 */


var TimePicker =
/*#__PURE__*/
function (_Events) {
  _inherits(TimePicker, _Events);

  /**
   * Creates an instance of TimePicker.
   * @date 2018-12-05
   * @param {*} target
   * @param {*} options
   * @memberof TimePicker
   */
  function TimePicker(target, options) {
    var _this3;

    _classCallCheck(this, TimePicker);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TimePicker).call(this));

    if (!(_assertThisInitialized(_assertThisInitialized(_this3)) instanceof TimePicker)) {
      return _possibleConstructorReturn(_this3, new TimePicker(target, options));
    }

    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isElement"])(target)) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["throwError"])('\'target\' 必须是一个DOM元素.');
    }

    var props = _this3.props = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["mixins"])({}, defaults, options || {});
    var states = _this3.states = Object.create(null);
    states.$target = target;
    states.isInput = target.nodeName === 'INPUT';
    states.locales = Object(_utils_locale__WEBPACK_IMPORTED_MODULE_8__["getLocales"])(props.lang).datePicker; // 校验格式

    checkFormat.call(_assertThisInitialized(_assertThisInitialized(_this3))); // 最小最大值

    props.minTime = Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["parseDate"])(props.minTime, props.format);
    props.maxTime = Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["parseDate"])(props.maxTime, props.format);
    setRangeMap.call(_assertThisInitialized(_assertThisInitialized(_this3))); // get value

    var value = props.value;

    if (!value && states.isInput) {
      value = target.value;
    }

    value = getEffectiveValue.call(_assertThisInitialized(_assertThisInitialized(_this3)), value);
    states.bindValue = states.value = value; // 当前激活的Panel

    states.focusPanelType = null;
    render.call(_assertThisInitialized(_assertThisInitialized(_this3)));
    return _this3;
  }
  /**
   * set value
   * 会同时设定value和bindValue
   * @date 2018-12-05
   * @param {*} value
   * @memberof TimePicker
   */


  _createClass(TimePicker, [{
    key: "setValue",
    value: function setValue(value) {
      setPanelValue.call(this, value);
      var bindValue = this.states.bindValue;

      if (+bindValue !== +this.states.value) {
        this.states.bindValue = this.states.value;
        this.emit('done', this.getValue(true), this.states.value, bindValue);
      }
    }
    /**
     * clear value
     * @public
     * @memberof TimePicker
     */

  }, {
    key: "clear",
    value: function clear() {
      var states = this.states;
      var oldValue = states.value;
      var oldBindValue = states.bindValue;
      states.value = states.bindValue = null;
      this.close();

      if (states.isInput) {
        states.$target.value = '';
        states.$target.focus();
      }

      if (+oldValue !== 0) {
        this.emit('change', '', null, oldValue);
      }

      if (+oldBindValue !== 0) {
        this.emit('done', '', null, oldBindValue);
      }
    }
    /**
     * get current value
     * @date 2018-12-05
     * @param {*} isFormat
     * @returns
     * @memberof TimePicker
     */

  }, {
    key: "getValue",
    value: function getValue(isFormat) {
      return isFormat ? Object(_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.states.value, this.props.format) : this.states.value;
    }
    /**
     * 设置最小时间
     * @public
     * @param {*} value
     * @memberof TimePicker
     */

  }, {
    key: "setMinTime",
    value: function setMinTime(value) {
      this.props.minTime = value;
      setRangeMap.call(this);
      this.states.pickeOpened && setTimeMap.call(this);
    }
    /**
     * 设置最大时间
     * @public
     * @param {*} value
     * @memberof TimePicker
     */

  }, {
    key: "setMaxTime",
    value: function setMaxTime(value) {
      this.props.maxTime = value;
      setRangeMap.call(this);
      this.states.pickeOpened && setTimeMap.call(this);
    }
    /**
     * open picker
     * @date 2018-11-28
     * @memberof ColorPicker
     */

  }, {
    key: "open",
    value: function open() {
      if (this.states.pickerInstance && !this.states.pickeOpened) {
        this.states.pickerInstance.open();
      }
    }
    /**
     * close picker
     * @date 2018-11-28
     * @memberof ColorPicker
     */

  }, {
    key: "close",
    value: function close() {
      if (this.states.pickerInstance && this.states.pickeOpened) {
        this.states.pickerInstance.close();
      }
    }
    /**
     * disable the component
     * @date 2018-11-28
     * @memberof Select
     */

  }, {
    key: "disable",
    value: function disable() {
      var props = this.props,
          states = this.states;
      props.disabled = true;

      if (states.pickerInstance) {
        states.pickerInstance.close();
        states.pickerInstance.disable();
      }
    }
    /**
     * enable the component
     * @date 2018-11-28
     * @memberof Select
     */

  }, {
    key: "enable",
    value: function enable() {
      var props = this.props,
          states = this.states;
      props.disabled = false;

      if (states.pickerInstance) {
        states.pickerInstance && states.pickerInstance.enable();
      }
    }
    /**
     * destroy
     * @date 2018-12-05
     * @memberof TimePicker
     */

  }, {
    key: "destroy",
    value: function destroy() {
      unbindEvents.call(this);
      var states = this.states;
      states.pickerInstance && states.pickerInstance.destroy();
      this.states = null;
      this.props = null;
      this._events = null;
    }
  }]);

  return TimePicker;
}(_utils_events__WEBPACK_IMPORTED_MODULE_0__["Events"]);
/* harmony default export */ __webpack_exports__["default"] = (TimePicker);

/***/ }),

/***/ "./src/components/time-picker/template.js":
/*!************************************************!*\
  !*** ./src/components/time-picker/template.js ***!
  \************************************************/
/*! exports provided: skeletonTpl, optionsTpl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeletonTpl", function() { return skeletonTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTpl", function() { return optionsTpl; });
var skeletonTpl = "\n<div class=\"nv-time-picker__body\">\n  <% if(useHour) { %>\n  <div class=\"nv-time-picker__wrap\">\n    <div class=\"nv-scroller hour-select\"<% if (padding) { %> style=\"padding-right:<%=padding%>px;\"<% }%>>\n      <ul class=\"nv-time-picker__select\"></ul>\n    </div>\n  </div>\n  <% } if(useMinute) { %>\n  <div class=\"nv-time-picker__wrap\">\n    <div class=\"nv-scroller minute-select\"<% if (padding) { %> style=\"padding-right:<%=padding%>px;\"<% }%>>\n      <ul class=\"nv-time-picker__select\"></ul>\n    </div>\n  </div>\n  <% } if(useSecond) { %>\n  <div class=\"nv-time-picker__wrap\">\n    <div class=\"nv-scroller second-select\"<% if (padding) { %> style=\"padding-right:<%=padding%>px;\"<% }%>>\n      <ul class=\"nv-time-picker__select\"></ul>\n    </div>\n  </div>\n  <% } %>\n  <div class=\"nv-time-picker__separator\">\n    <% if(useHour) { %>\n    <span>:</span>\n    <% } if(useMinute) { %>\n    <span>:</span>\n    <% } if(useSecond) { %>\n    <span>:</span>\n    <% } %>\n  </div>\n</div>\n<% if (cancel || confirm) { %>\n<div class=\"nv-time-picker__foot\">\n<% if(cancel) {%>\n  <button type=\"button\" class=\"nv-btn nv-btn--small nv-btn--text nv-btn__cancel\"><%= cancel%></button>\n<% } %>\n<% if(confirm) {%>\n  <button type=\"button\" class=\"nv-btn nv-btn--small nv-btn--link nv-btn__confirm\"><%= confirm%></button>\n<% } %>\n</div>\n<% } %>\n";
var optionsTpl = "\n<% for(var i = 0, len = options.length; i < len; i++) {\n  var option = options[i];\n%>\n<li class=\"nv-time-picker__option\"><%=option.label%></li>\n<% }%>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  skeletonTpl: skeletonTpl,
  optionsTpl: optionsTpl
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
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/en */ "./src/locale/lang/en.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  'zh-CN': _lang_zh_CN__WEBPACK_IMPORTED_MODULE_0__["default"],
  en: _lang_en__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/locale/lang/en.js":
/*!*******************************!*\
  !*** ./src/locale/lang/en.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  datePicker: {
    weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    year: '',
    confirm: 'Confirm',
    cancel: 'Cancel',
    today: 'Today'
  },
  pagination: {
    total: '{total} record(s) in total , Page {index}/{pages}',
    jumper: 'Go to Page',
    unit: '',
    eachPage: 'Items/Page'
  },
  modal: {
    close: 'Close',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  colorPicker: {
    confirm: 'Confirm',
    recently: 'Recently used color',
    more: 'More'
  }
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
    year: '年',
    confirm: '确定',
    cancel: '取消',
    today: '今天'
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
  },
  colorPicker: {
    confirm: '确定',
    recently: '最近使用的颜色',
    more: '更多'
  }
});

/***/ }),

/***/ "./src/utils/constant.js":
/*!*******************************!*\
  !*** ./src/utils/constant.js ***!
  \*******************************/
/*! exports provided: CLASS_STATES_ACTIVED, CLASS_STATUS_DISABLED, CLASS_STATES_HOVER, CLASS_STATES_FOCUS, CLASS_STATES_HIDE, CLASS_STATES_ROLLING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATES_ACTIVED", function() { return CLASS_STATES_ACTIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATUS_DISABLED", function() { return CLASS_STATUS_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATES_HOVER", function() { return CLASS_STATES_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATES_FOCUS", function() { return CLASS_STATES_FOCUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATES_HIDE", function() { return CLASS_STATES_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_STATES_ROLLING", function() { return CLASS_STATES_ROLLING; });
var CLASS_STATES_ACTIVED = 'nv-actived';
var CLASS_STATUS_DISABLED = 'nv-disabled';
var CLASS_STATES_HOVER = 'nv-hover';
var CLASS_STATES_FOCUS = 'nv-focusin';
var CLASS_STATES_HIDE = 'nv-hide';
var CLASS_STATES_ROLLING = 'nv-rolling';

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
/*! exports provided: bind, unbind, once, qsa, proxy, getOffset, getStyle, insertAfter, addClass, getElScrollbarWidth, getScrollbarWidth, removeNode, reqAnimationFrame, scrollTo, getOffsetByParent, getScrollParent, getSize, getIndex, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElScrollbarWidth", function() { return getElScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqAnimationFrame", function() { return reqAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetByParent", function() { return getOffsetByParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollParent", function() { return getScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSize", function() { return getSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return getIndex; });
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
 * 通过创建元素的方式获取滚动条宽度
 * @returns {Number}
 */

var getElScrollbarWidth = function getElScrollbarWidth() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.cssText += 'width:100px;position:absolute;top:-9999rem;z-index:-1;visibility:hidden;';
  document.body.appendChild(scrollDiv);
  scrollDiv.style.overflow = 'scroll';
  var width = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  scrollDiv.parentNode.removeChild(scrollDiv);
  return width;
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
    getScrollbarWidth.value = getElScrollbarWidth();
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
 * 兼容性的requestAnimationFrame
 * @returns {Function}
 */

var reqAnimationFrame = window.requestAnimationFrame || function (callback) {
  return setTimeout(callback, 60);
};
/**
 * 将元素滚动到指定位置
 * @param {*} element 
 * @param {*} to 
 * @param {*} duration 
 */

var scrollTo = function scrollTo(element, to, duration) {
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  reqAnimationFrame(function () {
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
/**
 * 获取DOM元素的Index
 * @param {*} el 
 * @param {*} els 
 */

var getIndex = function getIndex(el, els) {
  if (!els) {
    var parentNode = el.parentNode;

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(el)) {
      els = parentNode.children();
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(el)) {
      els = qsa(el, parentNode);
    } else {
      return -1;
    }
  }

  var i = -1;
  var len = els.length;

  while (++i < len) {
    if (els[i] === el) {
      return i;
    }
  }

  return -1;
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
  getElScrollbarWidth: getElScrollbarWidth,
  removeNode: removeNode,
  scrollTo: scrollTo,
  getOffsetByParent: getOffsetByParent,
  getScrollParent: getScrollParent,
  getSize: getSize,
  getIndex: getIndex,
  reqAnimationFrame: reqAnimationFrame
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

/***/ "./src/utils/locale.js":
/*!*****************************!*\
  !*** ./src/utils/locale.js ***!
  \*****************************/
/*! exports provided: setLocales, setLang, getLocales, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocales", function() { return setLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLang", function() { return setLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocales", function() { return getLocales; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale */ "./src/locale/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global Nova */


var localesObject = _locale__WEBPACK_IMPORTED_MODULE_0__["default"];
var langKey = 'zh-CN';

if ((typeof Nova === "undefined" ? "undefined" : _typeof(Nova)) === 'object' && _typeof(Nova.config) === 'object') {
  localesObject = Nova.config.locales;
  langKey = Nova.config.lang;
}
/**
 * 设置多语言
 * @param {*} lang 
 */


var setLocales = function setLocales(locales) {
  return localesObject = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, localesObject, locales || {});
};
/**
 * 设置当前语言
 * @param {*} lang 
 */

var setLang = function setLang(lang) {
  return langKey = lang || langKey;
};
/**
 * 获取多语言
 * @param {*} lang 
 */

var getLocales = function getLocales(lang) {
  return localesObject[lang || langKey] || localesObject;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getLocales: getLocales,
  setLocales: setLocales,
  setLang: setLang
});

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
var zIndex = 1990; // 当前实例列表

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

/***/ "./src/vue/color-picker/index.js":
/*!***************************************!*\
  !*** ./src/vue/color-picker/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/color-picker/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/color-picker/main.vue":
/*!***************************************!*\
  !*** ./src/vue/color-picker/main.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_3c14c55e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=3c14c55e& */ "./src/vue/color-picker/main.vue?vue&type=template&id=3c14c55e&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/color-picker/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_3c14c55e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_3c14c55e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/color-picker/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/color-picker/main.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/vue/color-picker/main.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/color-picker/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/color-picker/main.vue?vue&type=template&id=3c14c55e&":
/*!**********************************************************************!*\
  !*** ./src/vue/color-picker/main.vue?vue&type=template&id=3c14c55e& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3c14c55e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=3c14c55e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/color-picker/main.vue?vue&type=template&id=3c14c55e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3c14c55e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3c14c55e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/date-picker/index.js":
/*!**************************************!*\
  !*** ./src/vue/date-picker/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/date-picker/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/date-picker/main.vue":
/*!**************************************!*\
  !*** ./src/vue/date-picker/main.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_8c0b3486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=8c0b3486& */ "./src/vue/date-picker/main.vue?vue&type=template&id=8c0b3486&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/date-picker/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_8c0b3486___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_8c0b3486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/date-picker/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/date-picker/main.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/vue/date-picker/main.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/date-picker/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/date-picker/main.vue?vue&type=template&id=8c0b3486&":
/*!*********************************************************************!*\
  !*** ./src/vue/date-picker/main.vue?vue&type=template&id=8c0b3486& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_8c0b3486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=8c0b3486& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/date-picker/main.vue?vue&type=template&id=8c0b3486&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_8c0b3486___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_8c0b3486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/locale */ "./src/utils/locale.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio */ "./src/vue/radio/index.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox */ "./src/vue/checkbox/index.js");
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-group */ "./src/vue/radio-group/index.js");
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox-group */ "./src/vue/checkbox-group/index.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switch */ "./src/vue/switch/index.js");
/* harmony import */ var _input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-number */ "./src/vue/input-number/index.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tree */ "./src/vue/tree/index.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select */ "./src/vue/select/index.js");
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./option */ "./src/vue/option/index.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagination */ "./src/vue/pagination/index.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slider */ "./src/vue/slider/index.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal */ "./src/vue/modal/index.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./alert */ "./src/vue/alert/index.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./message */ "./src/vue/message/index.js");
/* harmony import */ var _message_box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message-box */ "./src/vue/message-box/index.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./popover */ "./src/vue/popover/index.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tag */ "./src/vue/tag/index.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loader */ "./src/vue/loader/index.js");
/* harmony import */ var _color_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./color-picker */ "./src/vue/color-picker/index.js");
/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./date-picker */ "./src/vue/date-picker/index.js");
/* harmony import */ var _time_picker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./time-picker */ "./src/vue/time-picker/index.js");

























var RadioGroup = _radio_group__WEBPACK_IMPORTED_MODULE_6__["default"].NvRadioGroup;
var RadioItem = _radio_group__WEBPACK_IMPORTED_MODULE_6__["default"].NvRadioItem;
var CheckboxGroup = _checkbox_group__WEBPACK_IMPORTED_MODULE_7__["default"].NvCheckboxGroup;
var CheckboxItem = _checkbox_group__WEBPACK_IMPORTED_MODULE_7__["default"].NvCheckboxItem;
var components = [_radio__WEBPACK_IMPORTED_MODULE_4__["default"], RadioGroup, RadioItem, _checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], CheckboxGroup, CheckboxItem, _switch__WEBPACK_IMPORTED_MODULE_8__["default"], _input_number__WEBPACK_IMPORTED_MODULE_9__["default"], _tree__WEBPACK_IMPORTED_MODULE_10__["default"], _option__WEBPACK_IMPORTED_MODULE_12__["default"], _select__WEBPACK_IMPORTED_MODULE_11__["default"], _pagination__WEBPACK_IMPORTED_MODULE_13__["default"], _slider__WEBPACK_IMPORTED_MODULE_14__["default"], _modal__WEBPACK_IMPORTED_MODULE_15__["default"], _alert__WEBPACK_IMPORTED_MODULE_16__["default"], _tag__WEBPACK_IMPORTED_MODULE_20__["default"], _color_picker__WEBPACK_IMPORTED_MODULE_22__["default"], _date_picker__WEBPACK_IMPORTED_MODULE_23__["default"], _time_picker__WEBPACK_IMPORTED_MODULE_24__["default"]]; // Vue.use

function install(Vue, options) {
  components.forEach(function (component) {
    return Vue.component(component.name, component);
  }); // 设置多语言

  if (options) {
    if (options.lang) {
      _utils_locale__WEBPACK_IMPORTED_MODULE_3__["default"].setLang(options.lang);
    }

    if (options.locales) {
      _utils_locale__WEBPACK_IMPORTED_MODULE_3__["default"].setLocales(options.locales);
    }
  }

  var VP = Vue.prototype;
  VP.$message = _message__WEBPACK_IMPORTED_MODULE_17__["default"];
  VP.$alert = _message_box__WEBPACK_IMPORTED_MODULE_18__["default"].alert;
  VP.$confirm = _message_box__WEBPACK_IMPORTED_MODULE_18__["default"].confirm;
  VP.$loader = _loader__WEBPACK_IMPORTED_MODULE_21__["default"].Loader; // directive

  Vue.directive('popover', _popover__WEBPACK_IMPORTED_MODULE_19__["default"]);
  Vue.directive('loader', _loader__WEBPACK_IMPORTED_MODULE_21__["default"].directive);
} // 自动安装


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["mixins"])({}, window.NovaConfig || {}));
} // 自动销毁的组件


function routeChangeDestory() {
  _message_box__WEBPACK_IMPORTED_MODULE_18__["default"].destroy();
  _message__WEBPACK_IMPORTED_MODULE_17__["default"].destroy();
} // 当路由改变时，销毁已存在的实例


Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["bind"])(window, 'hashchange', routeChangeDestory);
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["bind"])(window, 'popstate', routeChangeDestory);
var output = {
  version: '1.0.7',
  $Dom: _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"],
  $Events: _utils_events__WEBPACK_IMPORTED_MODULE_2__["default"],
  $Utils: _utils_utils__WEBPACK_IMPORTED_MODULE_1__["default"],
  install: install,
  Radio: _radio__WEBPACK_IMPORTED_MODULE_4__["default"],
  RadioGroup: RadioGroup,
  RadioItem: RadioItem,
  Checkbox: _checkbox__WEBPACK_IMPORTED_MODULE_5__["default"],
  CheckboxGroup: CheckboxGroup,
  CheckboxItem: CheckboxItem,
  Switch: _switch__WEBPACK_IMPORTED_MODULE_8__["default"],
  InputNumber: _input_number__WEBPACK_IMPORTED_MODULE_9__["default"],
  Tree: _tree__WEBPACK_IMPORTED_MODULE_10__["default"],
  Option: _option__WEBPACK_IMPORTED_MODULE_12__["default"],
  Select: _select__WEBPACK_IMPORTED_MODULE_11__["default"],
  Pagination: _pagination__WEBPACK_IMPORTED_MODULE_13__["default"],
  Slider: _slider__WEBPACK_IMPORTED_MODULE_14__["default"],
  Modal: _modal__WEBPACK_IMPORTED_MODULE_15__["default"],
  Alert: _alert__WEBPACK_IMPORTED_MODULE_16__["default"],
  Tag: _tag__WEBPACK_IMPORTED_MODULE_20__["default"],
  ColorPicker: _color_picker__WEBPACK_IMPORTED_MODULE_22__["default"],
  DatePicker: _date_picker__WEBPACK_IMPORTED_MODULE_23__["default"],
  TimePicker: _time_picker__WEBPACK_IMPORTED_MODULE_24__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (output);

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

/***/ "./src/vue/loader/index.js":
/*!*********************************!*\
  !*** ./src/vue/loader/index.js ***!
  \*********************************/
/*! exports provided: directive, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/loader */ "./src/components/loader/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");


/**
 * Creates an instance of Loader.
 * @param {*} el 
 * @param {*} modifiers 
 * @param {*} value 
 */

function createLoader(el, modifiers, value) {
  var $container = el;

  if (modifiers.fullscreen) {
    $container = document.body;
  }

  if (el.$nv__loader) {
    el.$nv__loader.close();
    el.$nv__loader = null;
    delete el.$nv__loader;
  }

  if (value) {
    var options = {};

    if (modifiers.lock) {
      options.lock = true;
    }

    if (modifiers.vertical) {
      options.vertical = true;
    }

    var label = el.getAttribute('data-loader-label');
    var css = el.getAttribute('data-loader-css');
    var background = el.getAttribute('data-loader-background');
    label && (options.label = label);
    css && (options.customClass = css);
    background && (options.background = background);
    el.$nv__loader = new _components_loader__WEBPACK_IMPORTED_MODULE_0__["default"]($container, options);
  }
}

var directive = {
  bind: function bind(el, binding) {
    var modifiers = binding.modifiers,
        value = binding.value;
    createLoader(el, modifiers, value);
  },
  update: function update(el, binding) {
    var modifiers = binding.modifiers,
        value = binding.value;
    createLoader(el, modifiers, value);
  },
  unbind: function unbind(el) {
    if (el.$nv__loader) {
      el.$nv__loader.close();
      el.$nv__loader = null;
      delete el.$nv__loader;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  directive: directive,
  Loader: function Loader(options) {
    options = options || {};
    var $container = options.target;

    if (!$container || !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isElement"])($container)) {
      $container = document.body;
    }

    delete options.target;
    return new _components_loader__WEBPACK_IMPORTED_MODULE_0__["default"]($container, options);
  }
});

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


function createPopover(el, modifiers, options) {
  options = options || {};

  if (el.$__popover) {
    el.$__popover.destroy();
    el.$__popover = null;
    delete el.$__popover;
  }

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

  el.$__popover = new _components_popover__WEBPACK_IMPORTED_MODULE_0__["default"](el, options);
}

var PopoverDirective = {
  bind: function bind(el, binding) {
    var modifiers = binding.modifiers,
        options = binding.value;
    createPopover(el, modifiers, options);
  },
  update: function update(el, binding) {
    var modifiers = binding.modifiers,
        options = binding.value;
    createPopover(el, modifiers, options);
  },
  unbind: function unbind(el) {
    if (el.$__popover) {
      el.$__popover.destroy();
      el.$__popover = null;
      delete el.$__popover;
    }
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

/***/ "./src/vue/time-picker/index.js":
/*!**************************************!*\
  !*** ./src/vue/time-picker/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/vue/time-picker/main.vue");


_main__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  return Vue.component(_main__WEBPACK_IMPORTED_MODULE_0__["default"].name, _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/vue/time-picker/main.vue":
/*!**************************************!*\
  !*** ./src/vue/time-picker/main.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_416daadc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=416daadc& */ "./src/vue/time-picker/main.vue?vue&type=template&id=416daadc&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/vue/time-picker/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_416daadc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_416daadc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue/time-picker/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/time-picker/main.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/vue/time-picker/main.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/vue/time-picker/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/time-picker/main.vue?vue&type=template&id=416daadc&":
/*!*********************************************************************!*\
  !*** ./src/vue/time-picker/main.vue?vue&type=template&id=416daadc& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_416daadc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=416daadc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vue/time-picker/main.vue?vue&type=template&id=416daadc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_416daadc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_416daadc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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