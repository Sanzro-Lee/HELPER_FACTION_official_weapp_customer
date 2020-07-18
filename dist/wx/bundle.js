
var window = window || {};

var context = (function() { return this })() || Function("return this")();

// Fix babel runtime in some quirky environment like ali & qq dev.
if(!context.console) {
  try {
    context.console = console;
    context.setInterval = setInterval;
    context.setTimeout = setTimeout;
    context.JSON = JSON;
    context.Math = Math;
    context.RegExp = RegExp;
    context.Infinity = Infinity;
    context.isFinite = isFinite;
    context.parseFloat = parseFloat;
    context.parseInt = parseInt;
    context.Promise = Promise;
    context.WeakMap = WeakMap;
    context.Reflect = Reflect;
    context.RangeError = RangeError;
    context.TypeError = TypeError;
    context.Uint8Array = Uint8Array;
    context.DataView = DataView;
    context.ArrayBuffer = ArrayBuffer;
    context.Symbol = Symbol;
  } catch(e){
  }
}

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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		1: 0
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
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputed", function() { return getComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPureObject", function() { return toPureObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
/* harmony import */ var _core_createStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(213);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_5__["createStoreWithThis"]; });

/* harmony import */ var _core_injectMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);
/* harmony import */ var _convertor_convertor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(155);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMixin", function() { return _core_mergeOptions__WEBPACK_IMPORTED_MODULE_9__["getMixin"]; });

/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(145);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(141);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(146);
/* harmony import */ var _observer_watch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(208);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(164);





var _this = undefined;













function createApp(config) {
  var mpx = new EXPORT_MPX();

  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  _platform__WEBPACK_IMPORTED_MODULE_4__["createApp"].apply(_platform__WEBPACK_IMPORTED_MODULE_4__, [babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({ proto: mpx.proto }, config)].concat(rest));
}

function createPage(config) {
  var mpx = new EXPORT_MPX();

  for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  _platform__WEBPACK_IMPORTED_MODULE_4__["createPage"].apply(_platform__WEBPACK_IMPORTED_MODULE_4__, [babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({ proto: mpx.proto }, config)].concat(rest));
}

function createComponent(config) {
  var mpx = new EXPORT_MPX();

  for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    rest[_key3 - 1] = arguments[_key3];
  }

  _platform__WEBPACK_IMPORTED_MODULE_4__["createComponent"].apply(_platform__WEBPACK_IMPORTED_MODULE_4__, [babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({ proto: mpx.proto }, config)].concat(rest));
}



function getComputed(computed) {
  // ts computed类型推导辅助函数
  return computed;
}

function toPureObject(obj) {
  return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["diffAndCloneA"])(obj).clone;
}

function extendProps(target, proxyObj, rawProps, option) {
  var keys = babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default()(proxyObj);
  var rawPropsMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["makeMap"])(rawProps);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(keys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (APIs[key] || rawPropsMap[key]) {
        continue;
      } else if (option && (option.prefix || option.postfix)) {
        var transformKey = option.prefix ? option.prefix + '_' + key : key + '_' + option.postfix;
        target[transformKey] = proxyObj[key];
      } else if (!target.hasOwnProperty(key)) {
        target[key] = proxyObj[key];
      } else {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_10__["error"])('Mpx property [' + key + '] from installing plugin conflicts with already exists\uFF0Cplease pass prefix/postfix options to avoid property conflict, for example: "use(\'plugin\', {prefix: \'mm\'})"');
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

// 安装插件进行扩展API
var installedPlugins = [];

function use(plugin) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (installedPlugins.indexOf(plugin) > -1) {
    return this;
  }

  var args = [options];
  var proxyMPX = factory();
  var rawProps = babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default()(proxyMPX);
  var rawPrototypeProps = babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default()(proxyMPX.prototype);
  args.unshift(proxyMPX);
  // 传入真正的mpx对象供插件访问
  args.push(EXPORT_MPX);
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args);
  } else if (typeof plugin === 'function') {
    plugin.apply(null, args);
  }
  extendProps(EXPORT_MPX, proxyMPX, rawProps, options);
  extendProps(EXPORT_MPX.prototype, proxyMPX.prototype, rawPrototypeProps, options);
  installedPlugins.push(plugin);
  return this;
}

var APIs = {};

// 实例属性
var InstanceAPIs = {};

var observable = void 0;
var watch = void 0;

if (false) { var remove, _del, _set, vm; } else {
  observable = function observable(obj) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_12__["observe"])(obj);
    return obj;
  };

  var _vm = {};

  watch = function watch(expOrFn, cb, options) {
    return Object(_observer_watch__WEBPACK_IMPORTED_MODULE_13__["watch"])(_vm, expOrFn, cb, options);
  };

  var _remove = function _remove() {
    if (true) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_10__["error"])('$remove will be removed in next minor version, please use $delete instead!', this.$rawOptions && this.$rawOptions.mpxFileResource);
    }

    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _observer_index__WEBPACK_IMPORTED_MODULE_12__["del"].apply(this, args);
  };

  APIs = {
    createApp: createApp,
    createPage: createPage,
    createComponent: createComponent,
    createStore: _core_createStore__WEBPACK_IMPORTED_MODULE_5__["default"],
    createStoreWithThis: _core_createStore__WEBPACK_IMPORTED_MODULE_5__["createStoreWithThis"],
    mixin: _core_injectMixins__WEBPACK_IMPORTED_MODULE_6__["injectMixins"],
    injectMixins: _core_injectMixins__WEBPACK_IMPORTED_MODULE_6__["injectMixins"],
    toPureObject: toPureObject,
    observable: observable,
    watch: watch,
    use: use,
    set: _observer_index__WEBPACK_IMPORTED_MODULE_12__["set"],
    remove: _remove,
    delete: _observer_index__WEBPACK_IMPORTED_MODULE_12__["del"],
    setConvertRule: _convertor_convertor__WEBPACK_IMPORTED_MODULE_8__["setConvertRule"],
    getMixin: _core_mergeOptions__WEBPACK_IMPORTED_MODULE_9__["getMixin"],
    getComputed: getComputed,
    implement: _core_implement__WEBPACK_IMPORTED_MODULE_14__["default"]
  };

  InstanceAPIs = {
    $set: _observer_index__WEBPACK_IMPORTED_MODULE_12__["set"],
    $remove: _remove,
    $delete: _observer_index__WEBPACK_IMPORTED_MODULE_12__["del"]
  };
}



function factory() {
  // 作为原型挂载属性的中间层
  function MPX() {
    this.proto = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["extend"])({}, this);
  }

  babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(MPX, APIs);
  babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(MPX.prototype, InstanceAPIs);
  return MPX;
}

var EXPORT_MPX = factory();

EXPORT_MPX.config = {
  useStrictDiff: false,
  ignoreRenderError: false,
  ignoreProxyWhiteList: ['id', 'dataset']
};

if (false) {} else {
  if (global.i18n) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_12__["observe"])(global.i18n);
    // 挂载翻译方法
    if (global.i18nMethods) {
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(global.i18nMethods).forEach(function (methodName) {
        global.i18n[methodName] = function () {
          for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          args.unshift(global.i18n.locale);
          return global.i18nMethods[methodName].apply(_this, args);
        };
      });
    }
    EXPORT_MPX.i18n = global.i18n;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EXPORT_MPX);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(20).Object.keys;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(6);
var $keys = __webpack_require__(8);

__webpack_require__(25)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(9);
var enumBugKeys = __webpack_require__(24);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(14)(false);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(12);
var defined = __webpack_require__(7);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(15);
var toAbsoluteIndex = __webpack_require__(17);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(19)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(20);
var global = __webpack_require__(21);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(22) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : /* mpx inject */ (function() { return this })() || Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(26);
var core = __webpack_require__(20);
var fails = __webpack_require__(35);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var core = __webpack_require__(20);
var ctx = __webpack_require__(27);
var hide = __webpack_require__(29);
var has = __webpack_require__(10);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(30);
var createDesc = __webpack_require__(38);
module.exports = __webpack_require__(34) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(31);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(37);
var dP = Object.defineProperty;

exports.f = __webpack_require__(34) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(32);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(34) && !__webpack_require__(35)(function () {
  return Object.defineProperty(__webpack_require__(36)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(35)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(32);
var document = __webpack_require__(21).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(32);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(55);
module.exports = __webpack_require__(57);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
var global = __webpack_require__(21);
var hide = __webpack_require__(29);
var Iterators = __webpack_require__(45);
var TO_STRING_TAG = __webpack_require__(53)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(43);
var step = __webpack_require__(44);
var Iterators = __webpack_require__(45);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(46)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(22);
var $export = __webpack_require__(26);
var redefine = __webpack_require__(47);
var hide = __webpack_require__(29);
var Iterators = __webpack_require__(45);
var $iterCreate = __webpack_require__(48);
var setToStringTag = __webpack_require__(52);
var getPrototypeOf = __webpack_require__(54);
var ITERATOR = __webpack_require__(53)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(49);
var descriptor = __webpack_require__(38);
var setToStringTag = __webpack_require__(52);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(29)(IteratorPrototype, __webpack_require__(53)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(31);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(24);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(36)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(51).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(30);
var anObject = __webpack_require__(31);
var getKeys = __webpack_require__(8);

module.exports = __webpack_require__(34) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(21).document;
module.exports = document && document.documentElement;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(30).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(53)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(19)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(21).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(6);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(56)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(46)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var defined = __webpack_require__(7);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(31);
var get = __webpack_require__(58);
module.exports = __webpack_require__(20).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var ITERATOR = __webpack_require__(53)('iterator');
var Iterators = __webpack_require__(45);
module.exports = __webpack_require__(20).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13);
var TAG = __webpack_require__(53)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
var $Object = __webpack_require__(20).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(25)('getOwnPropertyNames', function () {
  return __webpack_require__(63).f;
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(64).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(9);
var hiddenKeys = __webpack_require__(24).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
module.exports = __webpack_require__(20).Object.assign;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(26);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(68) });


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(34);
var getKeys = __webpack_require__(8);
var gOPS = __webpack_require__(69);
var pIE = __webpack_require__(70);
var toObject = __webpack_require__(6);
var IObject = __webpack_require__(12);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(35)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _createApp__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(173);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return _createPage__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(212);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_transferOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);





function createApp(option) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _transferOptions = Object(_core_transferOptions__WEBPACK_IMPORTED_MODULE_1__["default"])(option, 'app', [{
    onLaunch: function onLaunch() {
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, option.proto);
    }
  }]),
      rawOptions = _transferOptions.rawOptions;

  var defaultOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_2__["default"])(rawOptions, 'app', false);

  if (false) {} else {
    var finalAppOption = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_3__["dissolveAttrs"])(defaultOptions, 'methods');
    var ctor = config.customCtor || global.currentCtor || App;
    ctor(finalAppOption);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transferOptions; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _injectMixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _mergeOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _convertor_getConvertMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(172);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(145);








function transferOptions(options, type) {
  var builtInMixins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var currentInject = void 0;
  if (global.currentInject && global.currentInject.moduleId === global.currentModuleId) {
    currentInject = global.currentInject;
  }
  // 文件编译路径
  options.mpxFileResource = global.currentResource;
  // 注入全局写入的mixins
  options = Object(_injectMixins__WEBPACK_IMPORTED_MODULE_2__["mergeInjectedMixins"])(options, type);

  if (currentInject && currentInject.injectComputed) {
    // 编译计算属性注入
    options.computed = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, options.computed, currentInject.injectComputed);
  }
  // 转换mode
  options.mpxConvertMode = options.mpxConvertMode || Object(_convertor_getConvertMode__WEBPACK_IMPORTED_MODULE_4__["getConvertMode"])(global.currentSrcMode);
  var rawOptions = Object(_mergeOptions__WEBPACK_IMPORTED_MODULE_3__["default"])(options, type);
  // 注入内建的mixins, 内建mixin是按原始平台编写的，所以合并规则和rootMixins保持一致
  rawOptions.mixins = builtInMixins;
  if (currentInject && currentInject.propKeys) {
    var computedKeys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(options.computed || {});
    // 头条小程序受限父子组件生命周期顺序的问题，向子组件传递computed属性，子组件初始挂载时是拿不到对应数据的，在此做出提示
    currentInject.propKeys.forEach(function (key) {
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["findItem"])(computedKeys, key)) {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["warn"])('The child component can\'t achieve the value of computed prop\u3010' + key + '\u3011when attached, which is governed by the order of tt miniprogram\'s lifecycles.', global.currentResource);
      }
    });
  }
  return {
    rawOptions: rawOptions,
    currentInject: currentInject
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectMixins", function() { return injectMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMixins", function() { return getInjectedMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeInjectedMixins", function() { return mergeInjectedMixins; });
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

var MIXINS_MAPS = {
  app: [],
  page: [],
  component: []
};

function injectMixins(mixins, type) {
  if (typeof type === 'string') {
    type = [type];
  } else {
    type = ['app', 'page', 'component'];
  }

  if (!Array.isArray(mixins)) {
    mixins = [mixins];
  }
  type.forEach(function (key) {
    var curMixins = MIXINS_MAPS[key];
    if (curMixins) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(mixins), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mixin = _step.value;

          curMixins.indexOf(mixin) === -1 && curMixins.push(mixin);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  });
  return this;
}

function getInjectedMixins(type) {
  return MIXINS_MAPS[type].slice(0);
}

function mergeInjectedMixins(options, type) {
  var injectedMixins = getInjectedMixins(type);
  if (injectedMixins.length) {
    options.mixins = options.mixins ? injectedMixins.concat(options.mixins) : injectedMixins;
  }
  return options;
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMixin", function() { return getMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDefault", function() { return mergeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeHooks", function() { return mergeHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeShallowObj", function() { return mergeShallowObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArray", function() { return mergeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeToArray", function() { return mergeToArray; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
/* harmony import */ var _convertor_convertor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(155);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(145);
/* harmony import */ var _platform_patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(171);
/* harmony import */ var _implement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(164);










var currentHooksMap = {};
var curType = void 0;
var convertRule = void 0;
var mpxCustomKeysMap = void 0;

function mergeOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = arguments[1];
  var needConvert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // 缓存混合模式下的自定义属性列表
  mpxCustomKeysMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["makeMap"])(options.mpxCustomKeysForBlend || []);
  // needConvert为false，表示衔接原生的root配置，那么此时的配置都是当前原生环境支持的配置，不需要转换
  convertRule = Object(_convertor_convertor__WEBPACK_IMPORTED_MODULE_5__["getConvertRule"])(needConvert ? options.mpxConvertMode || 'default' : 'local');
  // 微信小程序使用Component创建page
  if (type === 'page' && convertRule.pageMode) {
    curType = convertRule.pageMode;
  } else {
    curType = type;
  }
  currentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["makeMap"])(convertRule.lifecycle[curType]);
  var newOptions = {};
  extractMixins(newOptions, options, needConvert);
  if (needConvert) {
    proxyHooks(newOptions);
    // 自定义补充转换函数
    typeof convertRule.convert === 'function' && convertRule.convert(newOptions, type);
    // 当存在lifecycle2时，在转换后将currentHooksMap替换，以确保后续合并hooks时转换后的hooks能够被正确处理
    if (convertRule.lifecycle2) {
      var implementedHooks = convertRule.lifecycle[curType].filter(function (hook) {
        return _implement__WEBPACK_IMPORTED_MODULE_8__["implemented"][hook];
      });
      currentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["makeMap"])(convertRule.lifecycle2[curType].concat(implementedHooks));
    }
  }
  newOptions.mpxCustomKeysForBlend = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(mpxCustomKeysMap);
  return transformHOOKS(newOptions);
}

function getMixin() {
  var mixin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // 用于ts反向推导mixin类型
  return mixin.mixins ? extractMixins({}, mixin, true) : mixin;
}

function extractMixins(mergeOptions, options, needConvert) {
  // 如果编译阶段behaviors都被当做mixins处理，那么进行别名替换
  if (options.behaviors && options.behaviors[0] && options.behaviors[0].__mpx_behaviors_to_mixins__) {
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["aliasReplace"])(options, 'behaviors', 'mixins');
  }
  if (options.mixins) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(options.mixins), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var mixin = _step.value;

        if (typeof mixin === 'string') {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["error"])('String-formatted builtin behaviors is not supported to be converted to mixins.', options.mpxFileResource);
        } else {
          extractMixins(mergeOptions, mixin, needConvert);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  // 出于业务兼容考虑暂时不移除pageShow/pageHide
  // options = extractPageShow(options)
  options = extractLifetimes(options);
  options = extractPageHooks(options);
  if (needConvert) {
    options = extractObservers(options);
  }
  mergeMixins(mergeOptions, options);
  return mergeOptions;
}

// function extractPageShow (options) {
//   if (options.pageShow || options.pageHide) {
//     const mixin = {
//       pageLifetimes: {}
//     }
//     if (options.pageShow) {
//       mixin.pageLifetimes.show = options.pageShow
//       delete options.pageShow
//     }
//     if (options.pageHide) {
//       mixin.pageLifetimes.hide = options.pageHide
//       delete options.pageHide
//     }
//     mergeToArray(options, mixin, 'pageLifetimes')
//   }
//   return options
// }

function extractLifetimes(options) {
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isObject"])(options.lifetimes)) {
    var newOptions = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, options, options.lifetimes);
    delete newOptions.lifetimes;
    return newOptions;
  } else {
    return options;
  }
}

function extractObservers(options) {
  var observers = options.observers;
  var props = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, options.properties, options.props);
  var watch = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, options.watch);
  var extract = false;

  function mergeWatch(key, config) {
    if (watch[key]) {
      if (!Array.isArray(watch[key])) watch[key] = [watch[key]];
    } else {
      watch[key] = [];
    }
    watch[key].push(config);
    extract = true;
  }

  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(props).forEach(function (key) {
    var prop = props[key];
    if (prop && prop.observer) {
      mergeWatch(key, {
        handler: function handler() {
          var _callback;

          var callback = prop.observer;
          if (typeof callback === 'string') {
            callback = this[callback];
          }

          for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          typeof callback === 'function' && (_callback = callback).call.apply(_callback, [this].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rest)));
        },

        deep: true,
        // 延迟触发首次回调，处理转换支付宝时在observer中查询组件的行为，如vant/picker中，如不考虑该特殊情形可用immediate代替
        immediateAsync: true
      });
    }
  });
  if (observers) {
    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(observers).forEach(function (key) {
      var callback = observers[key];
      if (callback) {
        var deep = false;
        var propsArr = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(props);
        var keyPathArr = [];
        key.split(',').forEach(function (item) {
          var result = item.trim();
          result && keyPathArr.push(result);
        });
        // 针对prop的watch都需要立刻执行一次
        var watchProp = false;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(propsArr), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var prop = _step2.value;

            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["findItem"])(keyPathArr, prop)) {
              watchProp = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (key.indexOf('.**') > -1) {
          deep = true;
          key = key.replace('.**', '');
        }
        mergeWatch(key, {
          handler: function handler(val, old) {
            var cb = callback;
            if (typeof cb === 'string') {
              cb = this[cb];
            }
            if (typeof cb === 'function') {
              var _cb;

              if (keyPathArr.length < 2) {
                val = [val];
                old = [old];
              }
              (_cb = cb).call.apply(_cb, [this].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(old)));
            }
          },

          deep: deep,
          immediateAsync: watchProp
        });
      }
    });
  }
  if (extract) {
    var newOptions = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, options);
    newOptions.watch = watch;
    delete newOptions.observers;
    return newOptions;
  }
  return options;
}

function extractPageHooks(options) {
  if (curType === 'blend') {
    var newOptions = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, options);
    var methods = newOptions.methods;
    var pageHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["makeMap"])(convertRule.lifecycle.page);
    methods && babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(methods).forEach(function (key) {
      if (pageHooksMap[key]) {
        if (newOptions[key]) {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["warn"])('Duplicate lifecycle [' + key + '] is defined in root options and methods, please check.', options.mpxFileResource);
        }
        newOptions[key] = methods[key];
        delete methods[key];
      }
    });
    return newOptions;
  } else {
    return options;
  }
}

function mergeMixins(parent, child) {
  for (var key in child) {
    if (currentHooksMap[key]) {
      mergeHooks(parent, child, key);
    } else if (key === 'data') {
      mergeDataFn(parent, child, key);
    } else if (/^(computed|properties|props|methods|proto|options|relations)$/.test(key)) {
      mergeShallowObj(parent, child, key);
    } else if (/^(watch|observers|pageLifetimes|events)$/.test(key)) {
      mergeToArray(parent, child, key);
    } else if (/^behaviors|externalClasses$/.test(key)) {
      mergeArray(parent, child, key);
    } else if (key !== 'mixins' && key !== 'mpxCustomKeysForBlend') {
      // 收集非函数的自定义属性，在Component创建的页面中挂载到this上，模拟Page创建页面的表现
      if (curType === 'blend' && typeof child[key] !== 'function' && !_platform_patch_builtInKeysMap__WEBPACK_IMPORTED_MODULE_7__["default"][key]) {
        mpxCustomKeysMap[key] = true;
      }
      mergeDefault(parent, child, key);
    }
  }
}

function mergeDefault(parent, child, key) {
  parent[key] = child[key];
}

function mergeHooks(parent, child, key) {
  if (parent[key]) {
    parent[key].push(child[key]);
  } else {
    parent[key] = [child[key]];
  }
}

function mergeShallowObj(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];
  if (!parentVal) {
    parent[key] = parentVal = {};
  }
  babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(parentVal, childVal);
}

function mergeDataFn(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];
  if (typeof parentVal !== 'function' && typeof childVal !== 'function') {
    mergeShallowObj(parent, child, key);
  } else {
    if (!parentVal) {
      parent[key] = childVal;
    } else {
      parent[key] = function mergeFn() {
        var to = typeof parentVal === 'function' ? parentVal.call(this) : Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["diffAndCloneA"])(parentVal).clone;
        var from = typeof childVal === 'function' ? childVal.call(this) : Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["diffAndCloneA"])(childVal).clone;
        return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, to, from);
      };
    }
  }
}

function mergeArray(parent, child, key) {
  var childVal = child[key];
  if (!parent[key]) {
    parent[key] = [];
  }
  parent[key] = parent[key].concat(childVal);
}

function mergeToArray(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];
  if (!parentVal) {
    parent[key] = parentVal = {};
  }
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(childVal).forEach(function (key) {
    if (key in parentVal) {
      var _parent = parentVal[key];
      var _child = childVal[key];
      if (!Array.isArray(_parent)) {
        _parent = [_parent];
      }
      if (!Array.isArray(_child)) {
        _child = [_child];
      }
      parentVal[key] = _parent.concat(_child);
    } else {
      parentVal[key] = Array.isArray(childVal[key]) ? childVal[key] : [childVal[key]];
    }
  });
}

function composeHooks(target, includes) {
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(target).forEach(function (key) {
    if (!includes || includes[key]) {
      var hooksArr = target[key];
      hooksArr && (target[key] = function () {
        var result = void 0;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        for (var i = 0; i < hooksArr.length; i++) {
          if (typeof hooksArr[i] === 'function') {
            var data = hooksArr[i].apply(this, args);
            data !== undefined && (result = data);
          }
          if (result === '__abort__') {
            break;
          }
        }
        return result;
      });
    }
  });
}

function proxyHooks(options) {
  var lifecycleProxyMap = convertRule.lifecycleProxyMap;
  lifecycleProxyMap && babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(lifecycleProxyMap).forEach(function (key) {
    var newHooks = (options[key] || []).slice();
    var proxyArr = lifecycleProxyMap[key];
    proxyArr && proxyArr.forEach(function (lifecycle) {
      if (options[lifecycle] && currentHooksMap[lifecycle]) {
        newHooks.push.apply(newHooks, options[lifecycle]);
        delete options[lifecycle];
      }
    });
    newHooks.length && (options[key] = newHooks);
  });
}

function transformHOOKS(options) {
  composeHooks(options, currentHooksMap);
  options.pageLifetimes && composeHooks(options.pageLifetimes);
  options.events && composeHooks(options.events);
  if (curType === 'blend' && convertRule.support) {
    var componentHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["makeMap"])(convertRule.lifecycle.component);
    for (var key in options) {
      // 使用Component创建page实例，页面专属生命周期&自定义方法需写在methods内部
      if (typeof options[key] === 'function' && key !== 'data' && !componentHooksMap[key]) {
        if (!options.methods) options.methods = {};
        options.methods[key] = options[key];
        delete options[key];
      }
    }
  }
  return options;
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(77);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(79);
module.exports = __webpack_require__(20).Array.from;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(27);
var $export = __webpack_require__(26);
var toObject = __webpack_require__(6);
var call = __webpack_require__(80);
var isArrayIter = __webpack_require__(81);
var toLength = __webpack_require__(15);
var createProperty = __webpack_require__(82);
var getIterFn = __webpack_require__(58);

$export($export.S + $export.F * !__webpack_require__(83)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(31);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(45);
var ITERATOR = __webpack_require__(53)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(30);
var createDesc = __webpack_require__(38);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(53)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncLock", function() { return asyncLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aliasReplace", function() { return aliasReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findItem", function() { return findItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMap", function() { return normalizeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExistAttr", function() { return isExistAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setByPath", function() { return setByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByPath", function() { return getByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineGetterSetter", function() { return defineGetterSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerableKeys", function() { return enumerableKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dissolveAttrs", function() { return dissolveAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProto", function() { return hasProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidArrayIndex", function() { return isValidArrayIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeArray", function() { return likeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyClass", function() { return stringifyClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hump2dash", function() { return hump2dash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dash2hump", function() { return dash2hump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStyleText", function() { return parseStyleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genStyleText", function() { return genStyleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeObjectArray", function() { return mergeObjectArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDynamicStyle", function() { return normalizeDynamicStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aIsSubPathOfB", function() { return aIsSubPathOfB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstKey", function() { return getFirstKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processUndefined", function() { return processUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffAndCloneA", function() { return diffAndCloneA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIdentifierStr", function() { return isValidIdentifierStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberStr", function() { return isNumberStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectDataset", function() { return collectDataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preProcessRenderData", function() { return preProcessRenderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony import */ var babel_runtime_core_js_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var babel_runtime_core_js_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_seal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var babel_runtime_core_js_object_seal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_seal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_is_sealed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95);
/* harmony import */ var babel_runtime_core_js_object_is_sealed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_is_sealed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98);
/* harmony import */ var babel_runtime_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(101);
/* harmony import */ var babel_runtime_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(107);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(110);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(124);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(141);
/* harmony import */ var _getByPath__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(142);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(145);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(146);





















// type在支付宝环境下不一定准确，判断是普通对象优先使用isPlainObject
function type(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}

function asyncLock() {
  var lock = false;
  return function (fn, onerror) {
    if (!lock) {
      lock = true;
      babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_12___default.a.resolve().then(function () {
        lock = false;
        typeof fn === 'function' && fn();
      }).catch(function (e) {
        lock = false;
        Object(_log__WEBPACK_IMPORTED_MODULE_15__["error"])('Something wrong in mpx asyncLock func execution, please check.', undefined, e);
        typeof onerror === 'function' && onerror();
      });
    }
  };
}

function aliasReplace() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var alias = arguments[1];
  var target = arguments[2];

  if (options[alias]) {
    if (Array.isArray(options[alias])) {
      options[target] = options[alias].concat(options[target] || []);
    } else if (isObject(options[alias])) {
      options[target] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_11___default()({}, options[alias], options[target]);
    } else {
      options[target] = options[alias];
    }
    delete options[alias];
  }
  return options;
}

function findItem() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments[1];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_10___default()(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (key instanceof RegExp && key.test(item) || item === key) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

function normalizeMap(prefix, arr) {
  if (typeof prefix !== 'string') {
    arr = prefix;
    prefix = '';
  }
  if (Array.isArray(arr)) {
    var map = {};
    arr.forEach(function (value) {
      map[value] = prefix ? prefix + '.' + value : value;
    });
    return map;
  }
  if (prefix && isObject(arr)) {
    arr = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_11___default()({}, arr);
    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(arr).forEach(function (key) {
      if (typeof arr[key] === 'string') {
        arr[key] = prefix + '.' + arr[key];
      }
    });
  }
  return arr;
}

function isExistAttr(obj, attr) {
  var type = typeof obj === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default()(obj);
  var isNullOrUndefined = obj === null || obj === undefined;
  if (isNullOrUndefined) {
    return false;
  } else if (type === 'object' || type === 'function') {
    return attr in obj;
  } else {
    return obj[attr] !== undefined;
  }
}

function setByPath(data, pathStrOrArr, value) {
  Object(_getByPath__WEBPACK_IMPORTED_MODULE_14__["default"])(data, pathStrOrArr, function (current, key, meta) {
    if (meta.isEnd) {
      if (false) {} else {
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_16__["set"])(current, key, value);
      }
    } else if (!current[key]) {
      current[key] = {};
    }
    return current[key];
  });
}

function getByPath(data, pathStrOrArr, defaultVal, errTip) {
  var results = [];
  var normalizedArr = [];
  if (Array.isArray(pathStrOrArr)) {
    normalizedArr = [pathStrOrArr];
  } else if (typeof pathStrOrArr === 'string') {
    normalizedArr = pathStrOrArr.split(',').map(function (str) {
      return str.trim();
    });
  }

  normalizedArr.forEach(function (path) {
    if (!path) return;
    var result = Object(_getByPath__WEBPACK_IMPORTED_MODULE_14__["default"])(data, path, function (value, key) {
      var newValue = void 0;
      if (isExistAttr(value, key)) {
        newValue = value[key];
      } else {
        newValue = errTip;
      }
      return newValue;
    });
    // 小程序setData时不允许undefined数据
    results.push(result === undefined ? defaultVal : result);
  });
  return results.length > 1 ? results : results[0];
}

function defineGetterSetter(target, key, getValue, setValue, context) {
  var get = void 0;
  var set = void 0;
  if (typeof getValue === 'function') {
    get = context ? getValue.bind(context) : getValue;
  } else {
    get = function get() {
      return getValue;
    };
  }
  if (typeof setValue === 'function') {
    set = context ? setValue.bind(context) : setValue;
  }
  var descriptor = {
    get: get,
    configurable: true,
    enumerable: true
  };
  if (set) descriptor.set = set;
  babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(target, key, descriptor);
}

function proxy(target, source, keys, readonly, onConflict) {
  keys = keys || babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(source);
  keys.forEach(function (key) {
    var descriptor = {
      get: function get() {
        return source[key];
      },

      configurable: true,
      enumerable: true
    };
    !readonly && (descriptor.set = function (val) {
      source[key] = val;
    });
    if (onConflict) {
      if (key in target) {
        if (onConflict(key) === false) return;
      }
    }
    babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(target, key, descriptor);
  });
  return target;
}

// 包含原型链上属性keys
function enumerableKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}

// 此函数用于合并mpx插件挂载到mpx.prototype中的实例属性，因此需要进行原型链属性的合并
function extend(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_10___default()(sources), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var source = _step2.value;

      if (isObject(source)) {
        for (var key in source) {
          target[key] = source[key];
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return target;
}

function dissolveAttrs() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments[1];

  if (typeof keys === 'string') {
    keys = [keys];
  }
  var newOptions = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_11___default()({}, target);
  keys.forEach(function (key) {
    var value = target[key];
    if (!isObject(value)) return;
    delete newOptions[key];
    babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_11___default()(newOptions, value);
  });
  return newOptions;
}

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default()(obj)) === 'object';
}

function isPlainObject(value) {
  if (value === null || (typeof value === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default()(value)) !== 'object') return false;
  var proto = babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default()(value);
  return proto === Object.prototype || proto === null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

var hasProto = '__proto__' in {};

function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

function def(obj, key, val, enumerable) {
  babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

function likeArray(arr) {
  return Array.isArray(arr);
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified = void 0;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }
  return res;
}

function stringifyObject(value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) res += ' ';
      res += key;
    }
  }
  return res;
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function hump2dash(value) {
  return value.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  });
}

function dash2hump(value) {
  return value.replace(/-([a-z])/g, function (match, p1) {
    return p1.toUpperCase();
  });
}

function parseStyleText(cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[dash2hump(tmp[0].trim())] = tmp[1].trim());
    }
  });
  return res;
}

function genStyleText(styleObj) {
  var res = '';
  for (var key in styleObj) {
    if (styleObj.hasOwnProperty(key)) {
      var item = styleObj[key];
      res += hump2dash(key) + ':' + item + ';';
    }
  }
  return res;
}

function mergeObjectArray(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_11___default()(res, arr[i]);
    }
  }
  return res;
}

function normalizeDynamicStyle(value) {
  if (Array.isArray(value)) {
    return mergeObjectArray(value);
  }
  if (typeof value === 'string') {
    return parseStyleText(value);
  }
  return value;
}

function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }
  for (var key in obj) {
    return false;
  }
  return true;
}

function aIsSubPathOfB(a, b) {
  if (a.startsWith(b) && a !== b) {
    var nextChar = a[b.length];
    if (nextChar === '.') {
      return a.slice(b.length + 1);
    } else if (nextChar === '[') {
      return a.slice(b.length);
    }
  }
}

function getFirstKey(path) {
  return (/^[^[.]*/.exec(path)[0]
  );
}

function doMergeData(target, source) {
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(source).forEach(function (srcKey) {
    if (target.hasOwnProperty(srcKey)) {
      target[srcKey] = source[srcKey];
    } else {
      var processed = false;
      var tarKeys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(target);
      for (var i = 0; i < tarKeys.length; i++) {
        var tarKey = tarKeys[i];
        if (aIsSubPathOfB(tarKey, srcKey)) {
          delete target[tarKey];
          target[srcKey] = source[srcKey];
          processed = true;
          continue;
        }
        var subPath = aIsSubPathOfB(srcKey, tarKey);
        if (subPath) {
          setByPath(target[tarKey], subPath, source[srcKey]);
          processed = true;
          break;
        }
      }
      if (!processed) {
        target[srcKey] = source[srcKey];
      }
    }
  });
  return target;
}

function mergeData(target) {
  if (target) {
    for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      sources[_key2 - 1] = arguments[_key2];
    }

    sources.forEach(function (source) {
      if (source) doMergeData(target, source);
    });
  }
  return target;
}

function processUndefined(obj) {
  var result = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] !== undefined) {
        result[key] = obj[key];
      } else {
        result[key] = '';
      }
    }
  }
  return result;
}

function noop() {}

function diffAndCloneA(a, b) {
  var diffData = null;
  var curPath = '';
  var diff = false;

  function deepDiffAndCloneA(a, b, currentDiff) {
    var setDiff = function setDiff(val) {
      if (val) {
        currentDiff = val;
        if (curPath) {
          diffData = diffData || {};
          diffData[curPath] = clone;
        }
      }
    };
    var clone = a;
    if ((typeof a === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_8___default()(a)) !== 'object' || a === null) {
      if (!currentDiff) setDiff(a !== b);
    } else {
      var _toString = Object.prototype.toString;
      var className = _toString.call(a);
      var sameClass = className === _toString.call(b);
      var length = void 0;
      var lastPath = void 0;
      if (isPlainObject(a)) {
        var keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(a);
        length = keys.length;
        clone = {};
        if (!currentDiff) setDiff(!sameClass || length < babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(b).length || !babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(b).every(function (key) {
          return a.hasOwnProperty(key);
        }));
        lastPath = curPath;
        for (var i = 0; i < length; i++) {
          var key = keys[i];
          curPath += '.' + key;
          clone[key] = deepDiffAndCloneA(a[key], sameClass ? b[key] : undefined, currentDiff);
          curPath = lastPath;
        }
        // 继承原始对象的freeze/seal/preventExtensions操作
        if (babel_runtime_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_5___default()(a)) {
          babel_runtime_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_4___default()(clone);
        } else if (babel_runtime_core_js_object_is_sealed__WEBPACK_IMPORTED_MODULE_3___default()(a)) {
          babel_runtime_core_js_object_seal__WEBPACK_IMPORTED_MODULE_2___default()(clone);
        } else if (!babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1___default()(a)) {
          babel_runtime_core_js_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_0___default()(clone);
        }
      } else if (Array.isArray(a)) {
        length = a.length;
        clone = [];
        if (!currentDiff) setDiff(!sameClass || length < b.length);
        lastPath = curPath;
        for (var _i = 0; _i < length; _i++) {
          curPath += '[' + _i + ']';
          clone[_i] = deepDiffAndCloneA(a[_i], sameClass ? b[_i] : undefined, currentDiff);
          curPath = lastPath;
        }
        // 继承原始数组的freeze/seal/preventExtensions操作
        if (babel_runtime_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_5___default()(a)) {
          babel_runtime_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_4___default()(clone);
        } else if (babel_runtime_core_js_object_is_sealed__WEBPACK_IMPORTED_MODULE_3___default()(a)) {
          babel_runtime_core_js_object_seal__WEBPACK_IMPORTED_MODULE_2___default()(clone);
        } else if (!babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1___default()(a)) {
          babel_runtime_core_js_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_0___default()(clone);
        }
      } else if (a instanceof RegExp) {
        if (!currentDiff) setDiff(!sameClass || '' + a !== '' + b);
      } else if (a instanceof Date) {
        if (!currentDiff) setDiff(!sameClass || +a !== +b);
      } else {
        if (!currentDiff) setDiff(!sameClass || a !== b);
      }
    }
    if (currentDiff) {
      diff = currentDiff;
    }
    return clone;
  }

  return {
    clone: deepDiffAndCloneA(a, b, diff),
    diff: diff,
    diffData: diffData
  };
}

function isValidIdentifierStr(str) {
  return (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(str)
  );
}

function isNumberStr(str) {
  return (/^\d+$/.test(str)
  );
}

var datasetReg = /^data-(.+)$/;

function collectDataset(props) {
  var dataset = {};
  for (var key in props) {
    if (props.hasOwnProperty(key)) {
      var matched = datasetReg.exec(key);
      if (matched) {
        dataset[matched[1]] = props[key];
      }
    }
  }
  return dataset;
}

/**
 * process renderData, remove sub node if visit parent node already
 * @param {Object} renderData
 * @return {Object} processedRenderData
 */
function preProcessRenderData(renderData) {
  // method for get key path array
  var processKeyPathMap = function processKeyPathMap(keyPathMap) {
    var keyPath = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(keyPathMap);
    return keyPath.filter(function (keyA) {
      return keyPath.every(function (keyB) {
        if (keyA.startsWith(keyB) && keyA !== keyB) {
          var nextChar = keyA[keyB.length];
          if (nextChar === '.' || nextChar === '[') {
            return false;
          }
        }
        return true;
      });
    });
  };

  var processedRenderData = {};
  var renderDataFinalKey = processKeyPathMap(renderData);
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(renderData).forEach(function (item) {
    if (renderDataFinalKey.indexOf(item) > -1) {
      processedRenderData[item] = renderData[item];
    }
  });
  return processedRenderData;
}

function makeMap(arr) {
  return arr.reduce(function (obj, item) {
    obj[item] = true;
    return obj;
  }, {});
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
module.exports = __webpack_require__(20).Object.preventExtensions;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(32);
var meta = __webpack_require__(88).onFreeze;

__webpack_require__(25)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(23)('meta');
var isObject = __webpack_require__(32);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(30).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(35)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
module.exports = __webpack_require__(20).Object.isExtensible;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(32);

__webpack_require__(25)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
module.exports = __webpack_require__(20).Object.seal;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(32);
var meta = __webpack_require__(88).onFreeze;

__webpack_require__(25)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(20).Object.isSealed;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(32);

__webpack_require__(25)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
module.exports = __webpack_require__(20).Object.freeze;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(32);
var meta = __webpack_require__(88).onFreeze;

__webpack_require__(25)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(20).Object.isFrozen;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(32);

__webpack_require__(25)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(20).Object.getPrototypeOf;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(6);
var $getPrototypeOf = __webpack_require__(54);

__webpack_require__(25)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);
var $Object = __webpack_require__(20).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(26);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(34), 'Object', { defineProperty: __webpack_require__(30).f });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(111);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(114);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(41);
module.exports = __webpack_require__(113).f('iterator');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(53);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
__webpack_require__(121);
__webpack_require__(122);
__webpack_require__(123);
module.exports = __webpack_require__(20).Symbol;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(21);
var has = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(34);
var $export = __webpack_require__(26);
var redefine = __webpack_require__(47);
var META = __webpack_require__(88).KEY;
var $fails = __webpack_require__(35);
var shared = __webpack_require__(19);
var setToStringTag = __webpack_require__(52);
var uid = __webpack_require__(23);
var wks = __webpack_require__(53);
var wksExt = __webpack_require__(113);
var wksDefine = __webpack_require__(117);
var enumKeys = __webpack_require__(118);
var isArray = __webpack_require__(119);
var anObject = __webpack_require__(31);
var isObject = __webpack_require__(32);
var toObject = __webpack_require__(6);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(37);
var createDesc = __webpack_require__(38);
var _create = __webpack_require__(49);
var gOPNExt = __webpack_require__(63);
var $GOPD = __webpack_require__(120);
var $GOPS = __webpack_require__(69);
var $DP = __webpack_require__(30);
var $keys = __webpack_require__(8);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(64).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(70).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(22)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(29)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var core = __webpack_require__(20);
var LIBRARY = __webpack_require__(22);
var wksExt = __webpack_require__(113);
var defineProperty = __webpack_require__(30).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(8);
var gOPS = __webpack_require__(69);
var pIE = __webpack_require__(70);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(13);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(70);
var createDesc = __webpack_require__(38);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(37);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(33);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(34) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 121 */
/***/ (function(module, exports) {



/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117)('asyncIterator');


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117)('observable');


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
__webpack_require__(55);
__webpack_require__(41);
__webpack_require__(126);
__webpack_require__(139);
__webpack_require__(140);
module.exports = __webpack_require__(20).Promise;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(22);
var global = __webpack_require__(21);
var ctx = __webpack_require__(27);
var classof = __webpack_require__(59);
var $export = __webpack_require__(26);
var isObject = __webpack_require__(32);
var aFunction = __webpack_require__(28);
var anInstance = __webpack_require__(127);
var forOf = __webpack_require__(128);
var speciesConstructor = __webpack_require__(129);
var task = __webpack_require__(130).set;
var microtask = __webpack_require__(132)();
var newPromiseCapabilityModule = __webpack_require__(133);
var perform = __webpack_require__(134);
var userAgent = __webpack_require__(135);
var promiseResolve = __webpack_require__(136);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(53)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(137)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(52)($Promise, PROMISE);
__webpack_require__(138)(PROMISE);
Wrapper = __webpack_require__(20)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(83)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var call = __webpack_require__(80);
var isArrayIter = __webpack_require__(81);
var anObject = __webpack_require__(31);
var toLength = __webpack_require__(15);
var getIterFn = __webpack_require__(58);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(31);
var aFunction = __webpack_require__(28);
var SPECIES = __webpack_require__(53)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var invoke = __webpack_require__(131);
var html = __webpack_require__(51);
var cel = __webpack_require__(36);
var global = __webpack_require__(21);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(13)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var macrotask = __webpack_require__(130).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(13)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(28);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(31);
var isObject = __webpack_require__(32);
var newPromiseCapability = __webpack_require__(133);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(29);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(21);
var core = __webpack_require__(20);
var dP = __webpack_require__(30);
var DESCRIPTORS = __webpack_require__(34);
var SPECIES = __webpack_require__(53)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(26);
var core = __webpack_require__(20);
var global = __webpack_require__(21);
var speciesConstructor = __webpack_require__(129);
var promiseResolve = __webpack_require__(136);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(26);
var newPromiseCapability = __webpack_require__(133);
var perform = __webpack_require__(134);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getByPath; });
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var curStack = void 0;
var targetStacks = void 0;
var property = void 0;

var Stack = function () {
  function Stack(mark) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Stack);

    this.mark = mark;
    // 字符串stack需要特殊处理
    this.type = /['"]/.test(mark) ? 'string' : 'normal';
    this.value = [];
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Stack, [{
    key: 'push',
    value: function push(data) {
      this.value.push(data);
    }
  }]);

  return Stack;
}();

function startStack(mark) {
  // 开启栈或关闭栈都意味着前面的字符拼接截止
  propertyJoinOver();
  curStack && targetStacks.push(curStack);
  curStack = new Stack(mark);
}

function endStack() {
  // 开启栈或关闭栈都意味着前面的字符拼接截止
  propertyJoinOver();
  // 字符串栈直接拼接
  var result = curStack.type === 'string' ? '__mpx_str_' + curStack.value.join('') : curStack.value;
  curStack = targetStacks.pop();
  // 将当前stack结果保存到父级stack里
  curStack.push(result);
}

function propertyJoinOver() {
  property = property.trim();
  if (property) curStack.push(property);
  property = '';
}

function init() {
  property = '';
  // 根stack
  curStack = new Stack();
  targetStacks = [];
}

function parse(str) {
  init();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(str), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var char = _step.value;

      // 当前遍历引号内的字符串时
      if (curStack.type === 'string') {
        // 若为对应的结束flag，则出栈，反之直接push
        curStack.mark === char ? endStack() : curStack.push(char);
      } else if (/['"[]/.test(char)) {
        startStack(char);
      } else if (char === ']') {
        endStack();
      } else if (char === '.' || char === '+') {
        propertyJoinOver();
        if (char === '+') curStack.push(char);
      } else {
        property += char;
      }
    }
    // 字符解析收尾
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  propertyJoinOver();
  return curStack.value;
}

function outPutByPath(context, path, isSimple, transfer) {
  var result = context;
  var len = path.length;
  var meta = {
    isEnd: false,
    stop: false
  };
  for (var index = 0; index < len; index++) {
    if (index === len - 1) meta.isEnd = true;
    var key = void 0;
    var item = path[index];
    if (result) {
      if (isSimple) {
        key = item;
      } else if (Array.isArray(item)) {
        // 获取子数组的输出结果作为当前key
        key = outPutByPath(context, item, isSimple, transfer);
      } else if (/^__mpx_str_/.test(item)) {
        // 字符串一定会被[]包裹，一定在子数组中
        result = item.replace('__mpx_str_', '');
      } else if (/^\d+$/.test(item)) {
        // 数字一定会被[]包裹，一定在子数组中
        result = +item;
      } else if (item === '+') {
        // 获取加号后面所有path最终的结果
        result += outPutByPath(context, path.slice(index + 1), isSimple, transfer);
        break;
      } else {
        key = item;
      }
      if (key !== undefined) {
        result = transfer ? transfer(result, key, meta) : result[key];
        if (meta.stop) break;
      }
    } else {
      break;
    }
  }
  return result;
}

function getByPath(context, pathStrOrArr, transfer) {
  if (!pathStrOrArr) {
    return context;
  }
  var isSimple = false;
  if (Array.isArray(pathStrOrArr)) {
    isSimple = true;
  } else if (!/[[\]]/.test(pathStrOrArr)) {
    pathStrOrArr = pathStrOrArr.split('.');
    isSimple = true;
  }

  if (!isSimple) pathStrOrArr = parse(pathStrOrArr);

  return outPutByPath(context, pathStrOrArr, isSimple, transfer);
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(107);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
function warn(msg, location, e) {
  return log('warn', msg, location, e);
}

function error(msg, location, e) {
  return log('error', msg, location, e);
}

function log(type, msg, location, e) {
  if (true) {
    var header = '[Mpx runtime ' + type + ']: ';
    if (location) {
      header = '[Mpx runtime ' + type + ' at ' + location + ']: ';
    }
    console[type](header + msg);
    if (e) console[type](e);
  }
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observerState", function() { return observerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineReactive", function() { return defineReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(143);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(144);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(150);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(151);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(145);














var arrayKeys = babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_6___default()(_array__WEBPACK_IMPORTED_MODULE_8__["arrayMethods"]);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true

  /**
   * Observer class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   */
};var Observer = function () {
  function Observer(value) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Observer);

    this.value = value;
    this.dep = new _dep__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.vmCount = 0;
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["def"])(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = _helper_utils__WEBPACK_IMPORTED_MODULE_9__["hasProto"] ? protoAugment : copyAugment;
      augment(value, _array__WEBPACK_IMPORTED_MODULE_8__["arrayMethods"], arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Observer, [{
    key: 'walk',
    value: function walk(obj) {
      var keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i], obj[keys[i]]);
      }
    }

    /**
     * Observe a list of Array items.
     */

  }, {
    key: 'observeArray',
    value: function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    }
  }]);

  return Observer;
}();

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["def"])(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["isObject"])(value)) {
    return;
  }
  var ob = void 0;
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["hasOwn"])(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && (Array.isArray(value) || Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"])(value)) && babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_2___default()(value)) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow) {
  var dep = new _dep__WEBPACK_IMPORTED_MODULE_7__["default"]();

  var property = babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (_dep__WEBPACK_IMPORTED_MODULE_7__["default"].target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */
      customSetter && customSetter();
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(target, key, val) {
  if (Array.isArray(target) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["isValidArrayIndex"])(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["hasOwn"])(target, key)) {
    target[key] = val;
    return val;
  }
  var ob = target.__ob__;
  if (ob && ob.vmCount) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_10__["warn"])('Avoid adding reactive properties to the root data at runtime, declare it upfront in the data option!');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
  if (Array.isArray(target) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["isValidArrayIndex"])(key)) {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (ob && ob.vmCount) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_10__["warn"])('Avoid deleting properties on the root data, just set it to null!');
    return;
  }
  if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["hasOwn"])(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
var $Object = __webpack_require__(20).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(11);
var $getOwnPropertyDescriptor = __webpack_require__(120).f;

__webpack_require__(25)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushTarget", function() { return pushTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popTarget", function() { return popTarget; });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);




var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function () {
  function Dep() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dep);

    this.id = uid++;
    this.subs = [];
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dep, [{
    key: 'addSub',
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: 'removeSub',
    value: function removeSub(sub) {
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["remove"])(this.subs, sub);
    }
  }, {
    key: 'depend',
    value: function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    }
  }, {
    key: 'notify',
    value: function notify() {
      // stabilize the subscriber list first
      var subs = this.subs.slice();
      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    }
  }]);

  return Dep;
}();

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.


/* harmony default export */ __webpack_exports__["default"] = (Dep);
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMethods", function() { return arrayMethods; });
/* harmony import */ var babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */



var arrayProto = Array.prototype;
var arrayMethods = babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(arrayProto)

/**
 * Intercept mutating methods and emit events
 */
;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["def"])(arrayMethods, method, function mutator() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted = void 0;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154);
var $Object = __webpack_require__(20).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(26);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(49) });


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConvertRule", function() { return setConvertRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertRule", function() { return getConvertRule; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(156);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(157);
/* harmony import */ var _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(160);
/* harmony import */ var _platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(161);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(162);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(145);
/* harmony import */ var _wxToAli__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(163);
/* harmony import */ var _wxToWeb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(165);
/* harmony import */ var _wxToSwan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(168);
/* harmony import */ var _wxToQq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(169);
/* harmony import */ var _wxToTt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(170);















// 生命周期模板
var lifecycleTemplates = {
  wx: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"],
  ali: _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_4__["LIFECYCLE"],
  swan: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"],
  qq: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"],
  tt: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"]
  // 根据当前环境获取的默认生命周期信息
};var lifecycleInfo = void 0;
var pageMode = void 0;

if (false) {} else if (false) {} else {
  lifecycleInfo = _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__;
  pageMode = 'blend';
}

/**
 * 转换规则包含四点
 * lifecycle [object] 生命周期
 * lifecycleProxyMap [object] 代理规则
 * pageMode [string] 页面生命周期合并模式, 目前仅wx支持[blend]
 * support [boolean]当前平台是否支持当前pageMode
 * convert [function] 自定义转换函数, 接收一个options
 */
var defaultConvertRule = {
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_6__["mergeLifecycle"])(lifecycleInfo.LIFECYCLE),
  lifecycleProxyMap: lifecycleInfo.lifecycleProxyMap,
  pageMode: pageMode,
  support: !!pageMode,
  convert: null
};

var RULEMAPS = {
  local: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultConvertRule),
  default: defaultConvertRule,
  wxToWeb: _wxToWeb__WEBPACK_IMPORTED_MODULE_10__["default"], // 微信转web rule
  wxToSwan: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultConvertRule, _wxToSwan__WEBPACK_IMPORTED_MODULE_11__["default"]),
  wxToQq: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultConvertRule, _wxToQq__WEBPACK_IMPORTED_MODULE_12__["default"]),
  wxToTt: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultConvertRule, _wxToTt__WEBPACK_IMPORTED_MODULE_13__["default"]),
  wxToAli: _wxToAli__WEBPACK_IMPORTED_MODULE_9__["default"] // 微信转支付宝rule

  // 外部控制默认转换规则
};function setConvertRule(rule) {
  if (rule.lifecycleTemplate) {
    rule.lifecycle = lifecycleTemplates[rule.lifecycleTemplate];
  }
  if (rule.lifecycle) {
    // 合并内建钩子
    rule.lifecycle = Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_6__["mergeLifecycle"])(rule.lifecycle);
  }
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(defaultConvertRule).forEach(function (key) {
    if (rule.hasOwnProperty(key)) {
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["isObject"])(defaultConvertRule[key])) {
        defaultConvertRule[key] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConvertRule[key], rule[key]);
      } else {
        defaultConvertRule[key] = rule[key];
      }
    }
  });
}

function getConvertRule(convertMode) {
  var rule = void 0;
  if (typeof convertMode === 'function') {
    rule = convertMode() || {};
    var lifecycle = lifecycleTemplates[rule.lifecycleTemplate] || rule.lifecycle;
    // 混入内部钩子
    rule.lifecycle = Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_6__["mergeLifecycle"])(lifecycle);
  } else {
    rule = RULEMAPS[convertMode];
  }
  if (!rule || !rule.lifecycle) {
    Object(_helper_log__WEBPACK_IMPORTED_MODULE_8__["error"])('Absence of convert rule for ' + convertMode + ', please check.');
  } else {
    return rule;
  }
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(65);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(159);


var _lifecycleProxyMap;



var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound'];

var PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize'];

var COMPONENT_HOOKS = ['beforeCreate', 'created', 'attached', 'ready', 'moved', 'detached', 'updated', 'pageShow', 'pageHide', 'definitionFilter'];

var lifecycleProxyMap = (_lifecycleProxyMap = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["BEFORECREATE"], ['beforeCreate']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["CREATED"], ['created', 'attached']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["UPDATED"], ['updated']), _lifecycleProxyMap);

var LIFECYCLE = {
  APP_HOOKS: APP_HOOKS,
  PAGE_HOOKS: PAGE_HOOKS,
  COMPONENT_HOOKS: COMPONENT_HOOKS
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(107);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORECREATE", function() { return BEFORECREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFOREMOUNT", function() { return BEFOREMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUNTED", function() { return MOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATED", function() { return UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROYED", function() { return DESTROYED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW", function() { return SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE", function() { return HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INNER_LIFECYCLES", function() { return INNER_LIFECYCLES; });
var BEFORECREATE = '__beforeCreate__';
var CREATED = '__created__';
var BEFOREMOUNT = '__beforeMount__';
var MOUNTED = '__mounted__';
var UPDATED = '__updated__';
var DESTROYED = '__destroyed__';
var SHOW = '__show__';
var HIDE = '__hide__';
var INNER_LIFECYCLES = [BEFORECREATE, CREATED, BEFOREMOUNT, MOUNTED, UPDATED, DESTROYED, SHOW, HIDE];

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(159);


var _lifecycleProxyMap;



var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError'];

var PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTitleClick', 'onOptionMenuClick', 'onUpdated', 'onBeforeCreate'];

var COMPONENT_HOOKS = ['onInit', 'deriveDataFromProps', 'didMount', 'didUpdate', 'didUnmount', 'updated', 'beforeCreate', 'pageShow', 'pageHide'];

var lifecycleProxyMap = (_lifecycleProxyMap = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["BEFORECREATE"], ['beforeCreate', 'onBeforeCreate']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["CREATED"], ['onLoad', 'onInit']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["UPDATED"], ['updated', 'onUpdated']), _lifecycleProxyMap);

var LIFECYCLE = {
  APP_HOOKS: APP_HOOKS,
  PAGE_HOOKS: PAGE_HOOKS,
  COMPONENT_HOOKS: COMPONENT_HOOKS
};

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
var COMPONENT_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'beforeDestroy', 'destroyed', 'errorCaptured'];

var LIFECYCLE = {
  APP_HOOKS: COMPONENT_HOOKS,
  PAGE_HOOKS: COMPONENT_HOOKS,
  COMPONENT_HOOKS: COMPONENT_HOOKS
};

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeLifecycle", function() { return mergeLifecycle; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);


function mergeLifecycle(lifecycle) {
  if (lifecycle) {
    var appHooks = (lifecycle.APP_HOOKS || []).concat(_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["INNER_LIFECYCLES"]);
    var pageHooks = (lifecycle.PAGE_HOOKS || []).concat(_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["INNER_LIFECYCLES"]);
    var componentHooks = (lifecycle.COMPONENT_HOOKS || []).concat(_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["INNER_LIFECYCLES"]);
    return {
      'app': appHooks,
      'page': pageHooks,
      'component': componentHooks,
      'blend': pageHooks.concat(lifecycle.COMPONENT_HOOKS || [])
    };
  }
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(157);
/* harmony import */ var _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(162);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(145);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(164);









var NOTSUPPORTS = ['moved', 'definitionFilter'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_6__["error"])('Options.' + key + ' is not supported in runtime conversion from wx to ali.', global.currentResource);
}

function notSupportTip(options) {
  NOTSUPPORTS.forEach(function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_7__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_7__["implemented"][key].remove) {
        delete options[key];
      }
    }
  });
  // relations部分支持
  var relations = options['relations'];
  if (relations) {
    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(relations).forEach(function (path) {
      var item = relations[path];
      if (item.target) {
        convertErrorDesc('relations > target');
      }
      if (item.linkChanged) {
        convertErrorDesc('relations > linkChanged');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_4__["mergeLifecycle"])(_platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE"]),
  lifecycle2: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_4__["mergeLifecycle"])(_platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"]),
  pageMode: 'blend',
  support: false,
  lifecycleProxyMap: {
    '__created__': ['onLoad', 'created', 'attached'],
    '__mounted__': ['ready', 'onReady'],
    '__destroyed__': ['detached', 'onUnload'],
    '__updated__': ['updated']
  },
  convert: function convert(options) {
    if (options.properties) {
      var newProps = {};
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options.properties).forEach(function (key) {
        var prop = options.properties[key];
        if (prop) {
          if (prop.hasOwnProperty('value')) {
            newProps[key] = prop.value;
          } else {
            var type = prop.hasOwnProperty('type') ? prop.type : prop;
            if (typeof type === 'function') newProps[key] = type();
          }
        }
      });
      options.props = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newProps, options.props);
      delete options.properties;
    }
    if (options.onResize) {
      Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_5__["mergeToArray"])(options, {
        events: {
          onResize: options.onResize
        }
      }, 'events');
      delete options.onResize;
    }
    notSupportTip(options);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implemented", function() { return implemented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return implement; });
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);


var implemented = {};

function implement(name) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$modes = _ref.modes,
      modes = _ref$modes === undefined ? [] : _ref$modes,
      _ref$processor = _ref.processor,
      processor = _ref$processor === undefined ? Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["noop"])() : _ref$processor,
      _ref$remove = _ref.remove,
      remove = _ref$remove === undefined ? false : _ref$remove;

  if (!name) return;
  if (modes.indexOf("wx") > -1) {
    processor();
    implemented[name] = {
      remove: remove
    };
  }
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(166);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(157);
/* harmony import */ var _platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(161);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(162);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(145);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(164);










// 暂不支持的wx选项，后期需要各种花式支持
var NOTSUPPORTS = ['moved', 'relations', 'pageLifetimes', 'definitionFilter', 'onPageNotFound', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize', 'pageShow', 'pageHide'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_7__["error"])('Options.' + key + ' is not supported in runtime conversion from wx to web.', global.currentResource);
}

function notSupportTip(options) {
  NOTSUPPORTS.forEach(function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_8__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_8__["implemented"][key].remove) {
        delete options[key];
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_6__["mergeLifecycle"])(_platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_4__["LIFECYCLE"]),
  lifecycle2: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_6__["mergeLifecycle"])(_platform_patch_web_lifecycle__WEBPACK_IMPORTED_MODULE_5__["LIFECYCLE"]),
  pageMode: 'blend',
  // support传递为true以将methods外层的方法函数合入methods中
  support: true,
  lifecycleProxyMap: {
    '__created__': ['onLaunch', 'onLoad', 'created', 'attached'],
    '__mounted__': ['ready', 'onReady'],
    '__destroyed__': ['detached', 'onUnload'],
    '__updated__': ['updated'],
    '__show__': ['onShow'],
    '__hide__': ['onHide'],
    'errorCaptured': ['onError']
  },
  convert: function convert(options) {
    if (options.data && typeof options.data !== 'function') {
      var rawData = options.data;
      /* eslint-disable no-new-func */
      options.data = new Function('return ' + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(rawData) + ';');
    }
    if (options.properties) {
      var newProps = {};
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(options.properties).forEach(function (key) {
        var prop = options.properties[key];
        if (prop) {
          if (prop.hasOwnProperty('type')) {
            var newProp = {};
            if (prop.hasOwnProperty('optionalTypes')) {
              newProp.type = [prop.type].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(prop.optionalTypes));
            } else {
              newProp.type = prop.type;
            }
            if (prop.hasOwnProperty('value')) {
              newProp.default = prop.value;
            }
            newProps[key] = newProp;
          } else {
            newProps[key] = prop;
          }
        }
      });
      options.props = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newProps, options.props);
      delete options.properties;
    }
    notSupportTip(options);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(20);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _core_implement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);



var BEHAVIORS_MAP = {
  'wx://form-field': 'swan://form-field',
  'wx://component-export': 'swan://component-export'
};

var NOTSUPPORTS = ['moved', 'relations'];

function convertErrorDesc(key) {
  Object(_helper_log__WEBPACK_IMPORTED_MODULE_0__["error"])('Options.' + key + ' is not supported in runtime conversion from wx to swan.', global.currentResource);
}

function notSupportTip(options) {
  NOTSUPPORTS.forEach(function (key) {
    if (options[key]) {
      if (!_core_implement__WEBPACK_IMPORTED_MODULE_1__["implemented"][key]) {
         true && convertErrorDesc(key);
        delete options[key];
      } else if (_core_implement__WEBPACK_IMPORTED_MODULE_1__["implemented"][key].remove) {
        delete options[key];
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  convert: function convert(options, type) {
    // todo fix swan onshow onload执行顺序
    if (options.behaviors) {
      options.behaviors.forEach(function (behavior, idx) {
        if (typeof behavior === 'string' && BEHAVIORS_MAP[behavior]) {
          options.behaviors.splice(idx, 1, BEHAVIORS_MAP[behavior]);
        }
      });
    }
    if (type === 'page' && !options.__pageCtor__) {
      options.options = options.options || {};
      options.options.addGlobalClass = true;
    }
    notSupportTip(options);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BEHAVIORS_MAP = {
  'wx://form-field': 'qq://form-field',
  'wx://component-export': 'qq://component-export'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  convert: function convert(options) {
    if (options.behaviors) {
      options.behaviors.forEach(function (behavior, idx) {
        if (typeof behavior === 'string' && BEHAVIORS_MAP[behavior]) {
          options.behaviors.splice(idx, 1, BEHAVIORS_MAP[behavior]);
        }
      });
    }
  }
});

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);


/* harmony default export */ __webpack_exports__["default"] = ({
  convert: function convert(options) {
    if (options.behaviors) {
      options.behaviors.forEach(function (behavior, idx) {
        if (typeof behavior === 'string') {
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_0__["error"])('Built-in behavior "' + behavior + '" is not supported in tt environment!', global.currentResource);
          options.behaviors.splice(idx, 1);
        }
      });
    }
    if (options.pageLifetimes && options.pageLifetimes.resize) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_0__["error"])('Options.pageLifetimes.resize is not supported in tt environment!', global.currentResource);
      delete options.pageLifetimes.resize;
    }
    if (options.onResize) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_0__["error"])('Options.onResize is not supported in tt environment!', global.currentResource);
      delete options.onResize;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);



var bulitInKeys = void 0;

if (false) {} else {
  bulitInKeys = ['proto', 'mixins', 'watch', 'computed', 'mpxCustomKeysForBlend', 'mpxConvertMode', 'mpxFileResource', '__nativeRender__', '__type__', '__pageCtor__'];
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["makeMap"])(bulitInKeys.concat(_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["INNER_LIFECYCLES"])));

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertMode", function() { return getConvertMode; });
var CONVERTMODES = {
  'wx-ali': 'wxToAli',
  'wx-web': 'wxToWeb',
  'wx-swan': 'wxToSwan',
  'wx-qq': 'wxToQq',
  'wx-tt': 'wxToTt'
};

function getConvertMode(srcMode) {
  return CONVERTMODES[srcMode + '-' + "wx"];
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);


/* harmony default export */ __webpack_exports__["default"] = (Object(_patch__WEBPACK_IMPORTED_MODULE_0__["default"])('page'));

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderCallBack", function() { return getRenderCallBack; });
/* harmony import */ var _core_transferOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _builtInMixins_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(175);
/* harmony import */ var _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(185);
/* harmony import */ var _ali_getDefaultOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210);
/* harmony import */ var _web_getDefaultOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(211);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(145);







function createFactory(type) {
  return function (options) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        isNative = _ref.isNative,
        customCtor = _ref.customCtor,
        customCtorType = _ref.customCtorType;

    options.__nativeRender__ = !!isNative;
    options.__type__ = type;
    var ctor = void 0;
    if (true) {
      if (customCtor) {
        ctor = customCtor;
        customCtorType = customCtorType || type;
        if (type === 'page' && customCtorType === 'page') {
          options.__pageCtor__ = true;
        }
      } else {
        if (global.currentCtor) {
          ctor = global.currentCtor;
          if (global.currentCtorType === 'page') {
            options.__pageCtor__ = true;
          }
        } else {
          if (type === 'page') {
            ctor = Page;
            options.__pageCtor__ = true;
          } else {
            ctor = Component;
          }
        }
      }
    }

    var getDefaultOptions = void 0;
    if (false) {} else if (false) {} else {
      getDefaultOptions = _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__["getDefaultOptions"];
    }

    // 获取内建的mixins
    var builtInMixins = Object(_builtInMixins_index__WEBPACK_IMPORTED_MODULE_1__["default"])(options, type);

    var _transferOptions = Object(_core_transferOptions__WEBPACK_IMPORTED_MODULE_0__["default"])(options, type, builtInMixins),
        rawOptions = _transferOptions.rawOptions,
        currentInject = _transferOptions.currentInject;

    var defaultOptions = getDefaultOptions(type, { rawOptions: rawOptions, currentInject: currentInject });
    if (defaultOptions.pageShow || defaultOptions.pageHide) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_5__["error"])('出于性能考虑，pageShow/pageHide增强钩子将在下个版本被移除，请使用原生的pageLifetimes替代，此外请不要强依赖pageLifetimes.show进行初始化操作，因为pageLifetimes.show并不能保证在初始化时一定被调用！', global.currentResource);
    }
    if (false) {} else if (ctor) {
      return ctor(defaultOptions);
    }
  };
}

function getRenderCallBack(context) {
  return function () {
    if (true) {
      context.updated();
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBuiltInMixins; });
/* harmony import */ var _pageStatusMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _proxyEventMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(177);
/* harmony import */ var _renderHelperMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(178);
/* harmony import */ var _refsMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(179);
/* harmony import */ var _showMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(181);
/* harmony import */ var _relationsMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(182);
/* harmony import */ var _i18nMixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(183);
/* harmony import */ var _pageTitleMixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(184);









function getBuiltInMixins(options, type) {
  if (false) {} else {
    return [Object(_pageStatusMixin__WEBPACK_IMPORTED_MODULE_0__["default"])(type), Object(_proxyEventMixin__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_renderHelperMixin__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_refsMixin__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_showMixin__WEBPACK_IMPORTED_MODULE_4__["default"])(type), Object(_relationsMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(type), Object(_i18nMixin__WEBPACK_IMPORTED_MODULE_6__["default"])()].filter(function (item) {
      return item;
    });
  }
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStatusMixin; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function pageStatusMixin(mixinType) {
  // 只有tt和ali没有pageLifeTimes支持，需要框架实现，其余平台一律使用原生pageLifeTimes
  // 由于业务上大量使用了pageShow进行初始化。。。下个版本再移除非必要的pageShow/Hide实现。。。
  if (mixinType === 'page') {
    var pageMixin = {
      data: {
        mpxPageStatus: 'show'
      },
      onShow: function onShow() {
        this.mpxPageStatus = 'show';
      },
      onHide: function onHide() {
        this.mpxPageStatus = 'hide';
      }
    };
    if (false) {}
    return pageMixin;
  } else {
    if (false) {} else {
      return {
        properties: {
          mpxPageStatus: {
            type: String
          }
        },
        watch: {
          mpxPageStatus: {
            handler: function handler(val) {
              if (val) {
                var options = this.$rawOptions;
                if (val === 'show' && typeof options.pageShow === 'function') options.pageShow.call(this);
                if (val === 'hide' && typeof options.pageHide === 'function') options.pageHide.call(this);
                if (false) { var pageLifetimes; }
              }
            },

            immediate: true
          }
        }
      };
    }
  }
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return proxyEventMixin; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(145);




function proxyEventMixin() {
  var methods = {
    __invoke: function __invoke($event) {
      var _this = this;

      var type = $event.type;
      var emitMode = $event.detail && $event.detail.mpxEmit;
      if (!type) {
        throw new Error('Event object must have [type] property!');
      }
      var fallbackType = '';
      if (type === 'begin' || type === 'end') {
        // 地图的 regionchange 事件会派发 e.type 为 begin 和 end 的事件
        fallbackType = 'regionchange';
      }
      var target = $event.currentTarget || $event.target;
      if (!target) {
        throw new Error('[' + type + '] event object must have [currentTarget/target] property!');
      }
      var eventConfigs = target.dataset.eventconfigs || {};
      var curEventConfig = eventConfigs[type] || eventConfigs[fallbackType] || [];
      var returnedValue = void 0;
      curEventConfig.forEach(function (item) {
        var callbackName = item[0];
        if (emitMode) {
          $event = $event.detail.data;
        }
        if (callbackName) {
          var params = item.length > 1 ? item.slice(1).map(function (item) {
            // 暂不支持$event.xxx的写法
            // if (/^\$event/.test(item)) {
            //   this.__mpxTempEvent = $event
            //   const value = getByPath(this, item.replace('$event', '__mpxTempEvent'))
            //   // 删除临时变量
            //   delete this.__mpxTempEvent
            //   return value
            if (item === '__mpx_event__') {
              return $event;
            } else {
              return item;
            }
          }) : [$event];
          if (typeof _this[callbackName] === 'function') {
            returnedValue = _this[callbackName].apply(_this, params);
          } else {
            var location = _this.__mpxProxy && _this.__mpxProxy.options.mpxFileResource;
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_2__["error"])('Instance property [' + callbackName + '] is not function, please check.', location);
          }
        }
      });
      return returnedValue;
    },
    __model: function __model(expr, $event) {
      var valuePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['value'];
      var filterMethod = arguments[3];

      var innerFilter = {
        trim: function trim(val) {
          return typeof val === 'string' && val.trim();
        }
      };
      var originValue = valuePath.reduce(function (acc, cur) {
        return acc[cur];
      }, $event.detail);
      var value = filterMethod ? innerFilter[filterMethod] ? innerFilter[filterMethod](originValue) : typeof this[filterMethod] === 'function' && this[filterMethod] : originValue;
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["setByPath"])(this, expr, value);
    }
  };
  if (false) {}
  return {
    methods: methods
  };
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderHelperMixin; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);



function renderHelperMixin() {
  return {
    methods: {
      _i: function _i(val, handler) {
        var i = void 0,
            l = void 0,
            keys = void 0,
            key = void 0;
        if (Array.isArray(val) || typeof val === 'string') {
          for (i = 0, l = val.length; i < l; i++) {
            handler.call(this, val[i], i);
          }
        } else if (typeof val === 'number') {
          for (i = 0; i < val; i++) {
            handler.call(this, i + 1, i);
          }
        } else if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(val)) {
          keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(val);
          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            handler.call(this, val[key], key, i);
          }
        }
      },
      _c: function _c(key, value) {
        this.__mpxProxy.renderData[key] = value;
        return value;
      },
      _r: function _r() {
        this.__mpxProxy.renderWithData();
      }
    }
  };
}

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRefsMixin; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(156);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(145);
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(180);








var envObj = Object(_helper_env__WEBPACK_IMPORTED_MODULE_6__["getEnvObj"])();

function getRefsMixin() {
  var _ref;

  var aliMethods = void 0;
  if (false) { var proxyMethods; }
  return _ref = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["BEFORECREATE"], function () {
    this.$refs = {};
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["CREATED"], function () {
    this.__updateRef && this.__updateRef();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["BEFOREMOUNT"], function () {
    this.__getRefs();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["UPDATED"], function () {
    this.__getRefs();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["DESTROYED"], function () {
    // 销毁ref
    this.__updateRef && this.__updateRef(true);
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'methods', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, aliMethods, {
    __getRefs: function __getRefs() {
      var _this = this;

      if (this.__getRefsData) {
        var refs = this.__getRefsData();
        refs.forEach(function (ref) {
          _this.$refs[ref.key] = _this.__getRefNode(ref);
        });
      }
    },
    __getRefNode: function __getRefNode(ref) {
      if (!ref) return;
      var selector = ref.selector.replace(/{{mpxCid}}/g, this.__mpxProxy.uid);
      if (ref.type === 'node') {
        var query = this.createSelectorQuery ? this.createSelectorQuery() : envObj.createSelectorQuery();
        return query && (ref.all ? query.selectAll(selector) : query.select(selector));
      } else if (ref.type === 'component') {
        return ref.all ? this.selectAllComponents(selector) : this.selectComponent(selector);
      }
    }
  })), _ref;
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvObj", function() { return getEnvObj; });
function getEnvObj() {
  if (typeof wx !== 'undefined' && typeof wx.getSystemInfo === 'function') {
    return wx;
  } else if (typeof my !== 'undefined' && typeof my.getSystemInfo === 'function') {
    return my;
  } else if (typeof swan !== 'undefined' && typeof swan.getSystemInfo === 'function') {
    return swan;
  } else if (typeof qq !== 'undefined' && typeof qq.getSystemInfo === 'function') {
    return qq;
  } else if (typeof tt !== 'undefined' && typeof tt.getSystemInfo === 'function') {
    return tt;
  }
}

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStatusMixin; });
function pageStatusMixin(mixinType) {
  if (mixinType === 'component') {
    if (false) {} else {
      return {
        properties: {
          mpxShow: {
            type: Boolean,
            value: true
          }
        }
      };
    }
  }
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relationsMixin; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);



var targets = [];
var curTarget = null;

function pushTarget(cur) {
  targets.push(curTarget);
  curTarget = cur;
}

function popTarget() {
  curTarget = targets.pop();
}

function parsePath(path, absolute) {
  if (path.indexOf('/') === 0) {
    return path;
  }
  var dirs = absolute.split('/').slice(0, -1);
  var relatives = path.split('/');
  relatives = relatives.filter(function (path) {
    if (path === '..') {
      dirs.pop();
      return false;
    } else {
      return path !== '.';
    }
  });
  return dirs.concat(relatives).join('/');
}

function transferPath(relations, base) {
  var newRelations = {};
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(relations).forEach(function (key) {
    newRelations[parsePath(key, base)] = relations[key];
  });
  return newRelations;
}

function relationsMixin(mixinType) {
  if (false) {}
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i18nMixin; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(146);





function i18nMixin() {
  if (global.i18n) {
    return babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      // 替换为dataFn注入，再每次组件创建时重新执行获取，处理reLaunch后无法拿到更新后语言的问题
      data: function data() {
        return { mpxLocale: global.i18n.locale || 'zh-CN' };
      }
    }, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_2__["BEFORECREATE"], function () {
      var _this = this;

      this.$i18n = { locale: global.i18n.locale };
      Object(_observer_index__WEBPACK_IMPORTED_MODULE_3__["observe"])(this.$i18n);
      this.$watch(function () {
        return global.i18n.locale;
      }, function (locale) {
        _this.mpxLocale = _this.$i18n.locale = locale;
      }, {
        sync: true
      });

      this.$watch(function () {
        return _this.$i18n.locale;
      }, function (locale) {
        _this.mpxLocale = locale;
      }, {
        sync: true
      });
      // 挂载翻译方法
      if (global.i18nMethods) {
        babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(global.i18nMethods).forEach(function (methodName) {
          _this['$' + methodName] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            args.unshift(_this.mpxLocale);
            return global.i18nMethods[methodName].apply(_this, args);
          };
        });
      }
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageTitleMixin; });
// web专用mixin，在web中实现页面title功能
function pageTitleMixin(mixinType) {
  if (mixinType === 'page' && "wx" === 'web') {
    return {
      activated: function activated() {
        if (this.$vnode.componentOptions && this.$vnode.componentOptions.Ctor.options.pageTitle) {
          document.title = this.$vnode.componentOptions.Ctor.options.pageTitle;
        }
      }
    };
  }
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(171);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(157);










function transformProperties(properties) {
  if (!properties) {
    return {};
  }
  var newProps = {};
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(properties).forEach(function (key) {
    var rawFiled = properties[key];
    var newFiled = null;
    if (rawFiled === null) {
      rawFiled = {
        type: null
      };
    }
    if (typeof rawFiled === 'function') {
      newFiled = {
        type: rawFiled
      };
    } else {
      newFiled = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, rawFiled);
    }
    newFiled.observer = function (value, oldValue) {
      if (this.__mpxProxy) {
        this[key] = value;
        this.__mpxProxy.updated();
      }
    };
    newProps[key] = newFiled;
  });
  return newProps;
}

function transformApiForProxy(context, currentInject) {
  var rawSetData = context.setData.bind(context);
  babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(context, {
    setData: {
      get: function get() {
        return this.__mpxProxy.forceUpdate.bind(this.__mpxProxy);
      },

      configurable: true
    },
    __getInitialData: {
      get: function get() {
        return function () {
          return context.data;
        };
      },

      configurable: false
    },
    __render: {
      get: function get() {
        return rawSetData;
      },

      configurable: false
    }
  });
  // 绑定注入的render
  if (currentInject) {
    if (currentInject.render) {
      babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(context, {
        __injectedRender: {
          get: function get() {
            return currentInject.render.bind(context);
          },

          configurable: false
        }
      });
    }
    if (currentInject.getRefsData) {
      babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(context, {
        __getRefsData: {
          get: function get() {
            return currentInject.getRefsData;
          },

          configurable: false
        }
      });
    }
  }
}

function filterOptions(options) {
  var newOptions = {};
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(options).forEach(function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_6__["default"][key] || key === 'data' && typeof options[key] === 'function') {
      return;
    }
    if (key === 'properties' || key === 'props') {
      newOptions['properties'] = transformProperties(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, options['properties'], options['props']));
    } else if (key === 'methods' && options.__pageCtor__) {
      // 构造器为Page时抽取所有methods方法到顶层
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(newOptions, options[key]);
    } else {
      newOptions[key] = options[key];
    }
  });
  return newOptions;
}

function getRootMixins(mixin) {
  var supportBehavior = typeof Behavior !== 'undefined';
  var rootMixins = [];
  if (supportBehavior) {
    var behavior = {};
    var pageHooksMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["makeMap"])(_lifecycle__WEBPACK_IMPORTED_MODULE_8__["LIFECYCLE"].PAGE_HOOKS);
    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(mixin).forEach(function (key) {
      // 除页面生命周期之外使用behaviors进行mixin
      if (!pageHooksMap[key]) {
        behavior[key] = mixin[key];
        delete mixin[key];
      }
    });
    if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isEmptyObject"])(behavior)) {
      rootMixins.push({
        // eslint-disable-next-line no-undef
        behaviors: [Behavior(behavior)]
      });
    }
  }
  rootMixins.push(mixin);
  return rootMixins;
}

function initProxy(context, rawOptions, currentInject) {
  // 提供代理对象需要的api
  transformApiForProxy(context, currentInject);
  // 缓存options
  context.$rawOptions = rawOptions;
  // 创建proxy对象
  var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_5__["default"](rawOptions, context);
  context.__mpxProxy = mpxProxy;
  // 组件监听视图数据更新, attached之后才能拿到properties
  context.__mpxProxy.created();
}

function getDefaultOptions(type, _ref) {
  var _getRootMixins;

  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === undefined ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;

  var hookNames = ['attached', 'ready', 'detached'];
  // 当用户传入page作为构造器构造页面时，修改所有关键hooks
  if (rawOptions.__pageCtor__) {
    hookNames[0] = 'onLoad';
    hookNames[1] = 'onReady';
    hookNames[2] = 'onUnload';
  }
  var rootMixins = getRootMixins((_getRootMixins = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_getRootMixins, hookNames[0], function () {
    if (!this.__mpxProxy) {
      initProxy(this, rawOptions, currentInject);
    }
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_getRootMixins, hookNames[1], function () {
    this.__mpxProxy && this.__mpxProxy.mounted();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_getRootMixins, hookNames[2], function () {
    this.__mpxProxy && this.__mpxProxy.destroyed();
  }), _getRootMixins));

  rawOptions.mixins = rawOptions.mixins ? rootMixins.concat(rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_7__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions);
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(187), __esModule: true };

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(188);
var $Object = __webpack_require__(20).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(26);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(34), 'Object', { defineProperties: __webpack_require__(50) });


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(146);
/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(190);
/* harmony import */ var _observer_watch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(208);
/* harmony import */ var _observer_computed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(209);
/* harmony import */ var _observer_scheduler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(207);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84);
/* harmony import */ var _helper_getByPath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(142);
/* harmony import */ var _platform_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(174);
/* harmony import */ var _innerLifecycle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(159);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(145);

















var uid = 0;

var MPXProxy = function () {
  function MPXProxy(options, target) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, MPXProxy);

    this.target = target;
    this.uid = uid++;
    this.name = options.name || '';
    this.options = options;
    // initial -> created -> mounted -> destroyed
    this.state = 'initial';
    if (true) {
      if (typeof target.__getInitialData !== 'function') {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["error"])('Please specify a [__getInitialData] function to get component\'s initial data.', this.options.mpxFileResource);
        return;
      }
      this._watchers = [];
      this._watcher = null;
      this.localKeysMap = {}; // 非props key
      this.renderData = {}; // 渲染函数中收集的数据
      this.miniRenderData = {};
      this.forceUpdateData = {}; // 强制更新的数据
      this.forceUpdateAll = false; // 下次是否需要强制更新全部渲染数据
      this.curRenderTask = null;
      this.ignoreProxyMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["makeMap"])(_index__WEBPACK_IMPORTED_MODULE_10__["default"].config.ignoreProxyWhiteList);
    }
    this.lockTask = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["asyncLock"])();
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(MPXProxy, [{
    key: 'created',
    value: function created() {
      this.initApi();
      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["BEFORECREATE"]);
      if (true) {
        this.initState(this.options);
      }
      this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["CREATED"];

      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      this.callUserHook.apply(this, [_innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["CREATED"]].concat(params));
      if (true) {
        // 强制走小程序原生渲染逻辑
        this.options.__nativeRender__ ? this.doRender() : this.initRender();
      }
    }
  }, {
    key: 'renderTaskExecutor',
    value: function renderTaskExecutor(isEmptyRender) {
      if (!this.isMounted() && this.curRenderTask || this.isMounted() && isEmptyRender) {
        return;
      }
      var promiseResolve = void 0;
      var promise = new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
        promiseResolve = resolve;
      });
      this.curRenderTask = {
        promise: promise,
        resolve: promiseResolve
        // isMounted之前基于mounted触发，isMounted之后基于setData回调触发
      };return this.isMounted() && promiseResolve;
    }
  }, {
    key: 'isMounted',
    value: function isMounted() {
      return this.state === _innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["MOUNTED"];
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      if (this.state === _innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["CREATED"]) {
        this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["MOUNTED"];
        // 用于处理refs等前置工作
        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["BEFOREMOUNT"]);
        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["MOUNTED"]);
        this.curRenderTask && this.curRenderTask.resolve();
      }
    }
  }, {
    key: 'updated',
    value: function updated() {
      var _this = this;

      if (this.isMounted()) {
        this.lockTask(function () {
          if (_this.isMounted()) {
            _this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["UPDATED"]);
          }
        });
      }
    }
  }, {
    key: 'destroyed',
    value: function destroyed() {
      this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["DESTROYED"];
      if (true) {
        this.clearWatchers();
      }
      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_14__["DESTROYED"]);
    }
  }, {
    key: 'initApi',
    value: function initApi() {
      var _this2 = this;

      // 挂载扩展属性到实例上
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["proxy"])(this.target, this.options.proto, babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.options.proto), true, function (key) {
        if (_this2.ignoreProxyMap[key]) return false;
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["error"])('The key [' + key + '] of mpx.prototype exist in the component/page instance already, please check your plugins!', _this2.options.mpxFileResource);
      });
      // 挂载混合模式下createPage中的自定义属性，模拟原生Page构造器的表现
      if (this.options.__type__ === 'page' && !this.options.__pageCtor__) {
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["proxy"])(this.target, this.options, this.options.mpxCustomKeysForBlend, undefined, function (key) {
          if (_this2.ignoreProxyMap[key]) return false;
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["error"])('The key [' + key + '] of page options exist in the page instance already, please check your page options!', _this2.options.mpxFileResource);
        });
      }
      if (true) {
        // 挂载$watch
        this.target.$watch = function () {
          return _this2.watch.apply(_this2, arguments);
        };
        // 强制执行render
        this.target.$forceUpdate = function () {
          return _this2.forceUpdate.apply(_this2, arguments);
        };
        this.target.$nextTick = function (fn) {
          return _this2.nextTick(fn);
        };
      }
    }
  }, {
    key: 'initState',
    value: function initState() {
      var _this3 = this;

      var options = this.options;
      var proxyedKeys = this.initData(options.data);
      var proxyedKeysMap = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["makeMap"])(proxyedKeys);
      this.initComputed(options.computed);
      // target的数据访问代理到将proxy的data
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["proxy"])(this.target, this.data, undefined, undefined, function (key) {
        if (_this3.ignoreProxyMap[key]) return false;
        if (!proxyedKeysMap[key]) Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["error"])('The data/props/computed key [' + key + '] exist in the component/page instance already, please check and rename it!', _this3.options.mpxFileResource);
      });
      this.initWatch(options.watch);
    }
  }, {
    key: 'initComputed',
    value: function initComputed(computedOpt) {
      if (computedOpt) {
        this.collectLocalKeys(computedOpt);
        Object(_observer_computed__WEBPACK_IMPORTED_MODULE_8__["initComputed"])(this, this.data, computedOpt);
      }
    }

    // 构建响应式data

  }, {
    key: 'initData',
    value: function initData() {
      var _this4 = this;

      var dataOpt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var proxyedKeys = [];
      // 获取包含data/props在内的初始数据，包含初始原生微信转换支付宝时合并props进入data的逻辑
      var initialData = this.target.__getInitialData() || {};
      if (typeof dataOpt === 'function') {
        proxyedKeys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(initialData);
        // 预先将initialData代理到this.target中，便于data函数访问
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["proxy"])(this.target, initialData, proxyedKeys, undefined, function (key) {
          if (_this4.ignoreProxyMap[key]) return false;
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["error"])('The props key [' + key + '] exist in the component instance already, please check and rename it!', _this4.options.mpxFileResource);
        });
        this.data = dataOpt.call(this.target) || {};
      } else {
        // 之所以没有直接使用initialData，而是通过对原始dataOpt进行深clone获取初始数据对象，主要是为了避免小程序自身序列化时错误地转换数据对象，比如将promise转为普通object
        this.data = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(dataOpt).clone || {};
      }
      this.collectLocalKeys(this.data);

      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(initialData).forEach(function (key) {
        if (!_this4.data.hasOwnProperty(key)) {
          // 除了data函数返回的数据外深拷贝切断引用关系，避免后续watch由于小程序内部对data赋值重复触发watch
          _this4.data[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(initialData[key]).clone;
          // this.data[key] = initialData[key]
        }
      });
      // mpxCid 解决支付宝环境selector为全局问题
      this.data.mpxCid = this.uid;
      this.localKeysMap.mpxCid = true;
      Object(_observer_index__WEBPACK_IMPORTED_MODULE_5__["observe"])(this.data, true);
      return proxyedKeys;
    }
  }, {
    key: 'initWatch',
    value: function initWatch(watch) {
      if (watch) {
        for (var key in watch) {
          var handler = watch[key];
          if (Array.isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
              this.watch(key, handler[i]);
            }
          } else {
            this.watch(key, handler);
          }
        }
      }
    }
  }, {
    key: 'collectLocalKeys',
    value: function collectLocalKeys(data) {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          this.localKeysMap[key] = true;
        }
      }
    }
  }, {
    key: 'nextTick',
    value: function nextTick(fn) {
      var _this5 = this;

      if (typeof fn === 'function') {
        Object(_observer_scheduler__WEBPACK_IMPORTED_MODULE_9__["queueWatcher"])(function () {
          _this5.curRenderTask ? _this5.curRenderTask.promise.then(fn) : fn();
        });
      }
    }
  }, {
    key: 'callUserHook',
    value: function callUserHook(hookName) {
      var hook = this.options[hookName];
      if (typeof hook === 'function') {
        for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }

        hook.call.apply(hook, [this.target].concat(params));
      }
    }
  }, {
    key: 'watch',
    value: function watch(expOrFn, cb, options) {
      return Object(_observer_watch__WEBPACK_IMPORTED_MODULE_7__["watch"])(this, expOrFn, cb, options);
    }
  }, {
    key: 'clearWatchers',
    value: function clearWatchers() {
      var i = this._watchers.length;
      while (i--) {
        this._watchers[i].teardown();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var renderData = this.data;
      this.doRender(this.processRenderDataWithStrictDiff(renderData));
    }
  }, {
    key: 'renderWithData',
    value: function renderWithData() {
      var renderData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["preProcessRenderData"])(this.renderData);
      this.doRender(this.processRenderDataWithStrictDiff(renderData));
      // 重置renderData准备下次收集
      this.renderData = {};
    }
  }, {
    key: 'processRenderDataWithDiffData',
    value: function processRenderDataWithDiffData(result, key, diffData) {
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(diffData).forEach(function (subKey) {
        result[key + subKey] = diffData[subKey];
      });
    }
  }, {
    key: 'processRenderDataWithStrictDiff',
    value: function processRenderDataWithStrictDiff(renderData) {
      var _this6 = this;

      var result = {};

      var _loop = function _loop(key) {
        if (renderData.hasOwnProperty(key)) {
          var _ret2 = function () {
            var data = renderData[key];
            var firstKey = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["getFirstKey"])(key);
            if (!_this6.localKeysMap[firstKey]) {
              return {
                v: 'continue'
              };
            }
            // 外部clone，用于只需要clone的场景
            var clone = void 0;
            if (_this6.miniRenderData.hasOwnProperty(key)) {
              var _diffAndCloneA = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(data, _this6.miniRenderData[key]),
                  localClone = _diffAndCloneA.clone,
                  diff = _diffAndCloneA.diff,
                  diffData = _diffAndCloneA.diffData;

              clone = localClone;
              if (diff) {
                _this6.miniRenderData[key] = clone;
                if (diffData && _index__WEBPACK_IMPORTED_MODULE_10__["default"].config.useStrictDiff) {
                  _this6.processRenderDataWithDiffData(result, key, diffData);
                } else {
                  result[key] = clone;
                }
              }
            } else {
              var processed = false;
              var miniRenderDataKeys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_this6.miniRenderData);
              for (var i = 0; i < miniRenderDataKeys.length; i++) {
                var tarKey = miniRenderDataKeys[i];
                if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["aIsSubPathOfB"])(tarKey, key)) {
                  if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(data).clone;
                  delete _this6.miniRenderData[tarKey];
                  _this6.miniRenderData[key] = result[key] = clone;
                  processed = true;
                  continue;
                }
                var subPath = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["aIsSubPathOfB"])(key, tarKey);
                if (subPath) {
                  // setByPath 更新miniRenderData中的子数据
                  Object(_helper_getByPath__WEBPACK_IMPORTED_MODULE_12__["default"])(_this6.miniRenderData[tarKey], subPath, function (current, subKey, meta) {
                    if (meta.isEnd) {
                      var _diffAndCloneA2 = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(data, current[subKey]),
                          _clone = _diffAndCloneA2.clone,
                          _diff = _diffAndCloneA2.diff,
                          _diffData = _diffAndCloneA2.diffData;

                      if (_diff) {
                        current[subKey] = _clone;
                        if (_diffData && _index__WEBPACK_IMPORTED_MODULE_10__["default"].config.useStrictDiff) {
                          _this6.processRenderDataWithDiffData(result, key, _diffData);
                        } else {
                          result[key] = _clone;
                        }
                      }
                    } else if (!current[subKey]) {
                      current[subKey] = {};
                    }
                    return current[subKey];
                  });
                  processed = true;
                  break;
                }
              }
              if (!processed) {
                // 如果当前数据和上次的miniRenderData完全无关，但存在于组件的视图数据中，则与组件视图数据进行diff
                if (_this6.target.data.hasOwnProperty(firstKey)) {
                  var localInitialData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["getByPath"])(_this6.target.data, key);

                  var _diffAndCloneA3 = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(data, localInitialData),
                      _clone2 = _diffAndCloneA3.clone,
                      _diff2 = _diffAndCloneA3.diff,
                      _diffData2 = _diffAndCloneA3.diffData;

                  _this6.miniRenderData[key] = _clone2;
                  if (_diff2) {
                    if (_diffData2 && _index__WEBPACK_IMPORTED_MODULE_10__["default"].config.useStrictDiff) {
                      _this6.processRenderDataWithDiffData(result, key, _diffData2);
                    } else {
                      result[key] = _clone2;
                    }
                  }
                } else {
                  if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(data).clone;
                  _this6.miniRenderData[key] = result[key] = clone;
                }
              }
            }
            if (_this6.forceUpdateAll) {
              if (!clone) clone = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(data).clone;
              _this6.forceUpdateData[key] = clone;
            }
          }();

          if ((typeof _ret2 === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret2)) === "object") return _ret2.v;
        }
      };

      for (var key in renderData) {
        var _ret = _loop(key);

        if (_ret === 'continue') continue;
      }
      return result;
    }
  }, {
    key: 'doRender',
    value: function doRender(data, cb) {
      var _this7 = this;

      if (typeof this.target.__render !== 'function') {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["error"])('Please specify a [__render] function to render view.', this.options.mpxFileResource);
        return;
      }
      if (typeof cb !== 'function') {
        cb = undefined;
      }

      var isEmpty = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["isEmptyObject"])(data) && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["isEmptyObject"])(this.forceUpdateData);
      var resolve = this.renderTaskExecutor(isEmpty);

      if (isEmpty) {
        cb && cb();
        return;
      }

      // 使用forceUpdateData后清空
      if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["isEmptyObject"])(this.forceUpdateData)) {
        data = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["mergeData"])({}, data, this.forceUpdateData);
        this.forceUpdateData = {};
        this.forceUpdateAll = false;
      }

      /**
       * mounted之后才接收回调来触发updated钩子，换言之mounted之前修改数据是不会触发updated的
       */
      var callback = cb;
      if (this.isMounted()) {
        callback = function callback() {
          Object(_platform_patch__WEBPACK_IMPORTED_MODULE_13__["getRenderCallBack"])(_this7)();
          cb && cb();
          resolve && resolve();
        };
      }
      this.target.__render(Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["processUndefined"])(data), callback);
    }
  }, {
    key: 'initRender',
    value: function initRender() {
      var _this8 = this;

      var renderWatcher = void 0;
      if (this.target.__injectedRender) {
        renderWatcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_6__["default"](this, function () {
          try {
            return _this8.target.__injectedRender();
          } catch (e) {
            if (!_index__WEBPACK_IMPORTED_MODULE_10__["default"].config.ignoreRenderError) {
              Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["warn"])('Failed to execute render function, degrade to full-set-data mode.', _this8.options.mpxFileResource, e);
            }
            _this8.render();
          }
        }, _helper_utils__WEBPACK_IMPORTED_MODULE_11__["noop"]);
      } else {
        renderWatcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_6__["default"](this, function () {
          _this8.render();
        }, _helper_utils__WEBPACK_IMPORTED_MODULE_11__["noop"]);
      }
      this._watcher = renderWatcher;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(data, callback) {
      var _this9 = this;

      if (typeof data === 'function') {
        callback = data;
        data = undefined;
      }

      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["isPlainObject"])(data)) {
        this.forceUpdateData = data;
        babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.forceUpdateData).forEach(function (key) {
          if (!_this9.options.__nativeRender__ && !_this9.localKeysMap[Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["getFirstKey"])(key)]) {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_15__["warn"])('ForceUpdate data includes a props/computed key [' + key + '], which may yield a unexpected result!', _this9.options.mpxFileResource);
          }
          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["setByPath"])(_this9.data, key, _this9.forceUpdateData[key]);
        });
      } else {
        this.forceUpdateAll = true;
      }

      if (callback) {
        callback = callback.bind(this.target);
        this.nextTick(callback);
      }
      if (this._watcher) {
        this._watcher.update();
      } else {
        if (this.forceUpdateAll) {
          babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.data).forEach(function (key) {
            if (_this9.localKeysMap[key]) {
              _this9.forceUpdateData[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_11__["diffAndCloneA"])(_this9.data[key]).clone;
            }
          });
        }
        this.doRender();
      }
    }
  }]);

  return MPXProxy;
}();

/* harmony default export */ __webpack_exports__["default"] = (MPXProxy);

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(191);
/* harmony import */ var babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(207);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(150);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);









var uid = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function () {
  function Watcher(vm, expOrFn, cb, options) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Watcher);

    this.vm = vm;
    vm._watchers = vm._watchers || [];
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid; // uid for batching
    this.active = true;
    this.immediateAsync = false;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a();
    this.newDepIds = new babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a();
    this.expression =  true ? expOrFn.toString() : undefined;
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = function () {
        return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["getByPath"])(this, expOrFn);
      };
    }
    this.value = this.lazy ? undefined : this.get();
  }

  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Watcher, [{
    key: 'get',
    value: function get() {
      Object(_dep__WEBPACK_IMPORTED_MODULE_6__["pushTarget"])(this);
      var value = void 0;
      var vm = this.vm;
      try {
        value = this.getter.call(vm.target);
      } catch (e) {
        throw e;
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value);
        }
        Object(_dep__WEBPACK_IMPORTED_MODULE_6__["popTarget"])();
        this.cleanupDeps();
      }
      return value;
    }

    /**
     * Add a dependency to this directive.
     */

  }, {
    key: 'addDep',
    value: function addDep(dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    }

    /**
     * Clean up for dependency collection.
     */

  }, {
    key: 'cleanupDeps',
    value: function cleanupDeps() {
      var i = this.deps.length;
      while (i--) {
        var dep = this.deps[i];
        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    }

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */

  }, {
    key: 'update',
    value: function update() {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        Object(_scheduler__WEBPACK_IMPORTED_MODULE_5__["queueWatcher"])(this);
      }
    }

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */

  }, {
    key: 'run',
    value: function run() {
      if (this.active) {
        var value = this.get();
        if (this.immediateAsync) {
          this.immediateAsync = false;
          this.value = value;
          this.cb.call(this.vm.target, value);
        } else if (value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["isObject"])(value) || this.deep) {
          // set new value
          var oldValue = this.value;
          this.value = value;
          this.cb.call(this.vm.target, value, oldValue);
        }
      }
    }

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */

  }, {
    key: 'evaluate',
    value: function evaluate() {
      this.value = this.get();
      this.dirty = false;
    }

    /**
     * Depend on all deps collected by this watcher.
     */

  }, {
    key: 'depend',
    value: function depend() {
      var i = this.deps.length;
      while (i--) {
        this.deps[i].depend();
      }
    }

    /**
     * Remove self from all dependencies' subscriber list.
     */

  }, {
    key: 'teardown',
    value: function teardown() {
      if (this.active) {
        if (this.vm.state !== '__destroyed__') {
          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["remove"])(this.vm._watchers, this);
        }
        var i = this.deps.length;
        while (i--) {
          this.deps[i].removeSub(this);
        }
        this.active = false;
      }
    }
  }]);

  return Watcher;
}();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */


/* harmony default export */ __webpack_exports__["default"] = (Watcher);
var seenObjects = new babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a();

function traverse(val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i = void 0,
      keys = void 0;
  var isA = Array.isArray(val);
  if (!isA && !Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["isObject"])(val) || !babel_runtime_core_js_object_is_extensible__WEBPACK_IMPORTED_MODULE_1___default()(val)) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
__webpack_require__(55);
__webpack_require__(41);
__webpack_require__(193);
__webpack_require__(200);
__webpack_require__(203);
__webpack_require__(205);
module.exports = __webpack_require__(20).Set;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(194);
var validate = __webpack_require__(195);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(196)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(30).f;
var create = __webpack_require__(49);
var redefineAll = __webpack_require__(137);
var ctx = __webpack_require__(27);
var anInstance = __webpack_require__(127);
var forOf = __webpack_require__(128);
var $iterDefine = __webpack_require__(46);
var step = __webpack_require__(44);
var setSpecies = __webpack_require__(138);
var DESCRIPTORS = __webpack_require__(34);
var fastKey = __webpack_require__(88).fastKey;
var validate = __webpack_require__(195);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(32);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(21);
var $export = __webpack_require__(26);
var meta = __webpack_require__(88);
var fails = __webpack_require__(35);
var hide = __webpack_require__(29);
var redefineAll = __webpack_require__(137);
var forOf = __webpack_require__(128);
var anInstance = __webpack_require__(127);
var isObject = __webpack_require__(32);
var setToStringTag = __webpack_require__(52);
var dP = __webpack_require__(30).f;
var each = __webpack_require__(197)(0);
var DESCRIPTORS = __webpack_require__(34);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(27);
var IObject = __webpack_require__(12);
var toObject = __webpack_require__(6);
var toLength = __webpack_require__(15);
var asc = __webpack_require__(198);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(199);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(32);
var isArray = __webpack_require__(119);
var SPECIES = __webpack_require__(53)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(26);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(201)('Set') });


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(59);
var from = __webpack_require__(202);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(128);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(204)('Set');


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(26);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(206)('Set');


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(26);
var aFunction = __webpack_require__(28);
var ctx = __webpack_require__(27);
var forOf = __webpack_require__(128);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueWatcher", function() { return queueWatcher; });
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);



var queue = [];
var has = {};
var circular = {};
var flushing = false;
var curIndex = 0;
var lockTask = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["asyncLock"])();
var MAX_UPDATE_COUNT = 100;

function queueWatcher(watcher) {
  if (!watcher.id && typeof watcher === 'function') {
    watcher = {
      id: Infinity,
      run: watcher
    };
  }
  if (!has[watcher.id] || watcher.id === Infinity) {
    has[watcher.id] = true;
    if (!flushing) {
      queue.push(watcher);
      lockTask(flushQueue, resetQueue);
    } else {
      var i = queue.length - 1;
      while (i > curIndex && watcher.id < queue[i].id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
  }
}

function flushQueue() {
  flushing = true;
  queue.sort(function (a, b) {
    return a.id - b.id;
  });
  for (curIndex = 0; curIndex < queue.length; curIndex++) {
    var watcher = queue[curIndex];
    var id = watcher.id;
    if (id !== Infinity) {
      delete has[id];
      if (true) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          var location = watcher.vm && watcher.vm.options && watcher.vm.options.mpxFileResource;
          Object(_helper_log__WEBPACK_IMPORTED_MODULE_1__["error"])('You may have a dead circular update in watcher with expression [' + watcher.expression + '], please check!', location);
          break;
        }
      }
    }
    // 如果已经销毁，就不再执行
    if (!watcher.destroyed) {
      watcher.run();
    }
  }
  resetQueue();
}

function resetQueue() {
  flushing = false;
  curIndex = queue.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
}

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(190);
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(207);




function watch(vm, expOrFn, cb, options) {
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(cb)) {
    options = cb;
    cb = cb.handler;
  }
  if (typeof cb === 'string') {
    if (vm.target && vm.target[cb]) {
      cb = vm.target[cb];
    } else {
      cb = _helper_utils__WEBPACK_IMPORTED_MODULE_0__["noop"];
    }
  }

  cb = cb || _helper_utils__WEBPACK_IMPORTED_MODULE_0__["noop"];

  options = options || {};
  options.user = true;
  var watcher = new _watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, expOrFn, cb, options);
  if (options.immediate) {
    cb.call(vm.target, watcher.value);
  } else if (options.immediateAsync) {
    watcher.immediateAsync = true;
    Object(_scheduler__WEBPACK_IMPORTED_MODULE_2__["queueWatcher"])(watcher);
  }

  return function unwatchFn() {
    watcher.teardown();
  };
}

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initComputed", function() { return initComputed; });
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(190);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(145);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(150);






var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: _helper_utils__WEBPACK_IMPORTED_MODULE_2__["noop"],
  set: _helper_utils__WEBPACK_IMPORTED_MODULE_2__["noop"]
};

function initComputed(vm, target, computed) {
  var watchers = vm._computedWatchers = {};
  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    watchers[key] = new _watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, getter || _helper_utils__WEBPACK_IMPORTED_MODULE_2__["noop"], _helper_utils__WEBPACK_IMPORTED_MODULE_2__["noop"], { lazy: true });
    if (!(key in target)) {
      defineComputed(vm, target, key, userDef);
    } else {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_3__["error"])('The computed key [' + key + '] is duplicated with data/props, please check.', vm.options.mpxFileResource);
    }
  }
}

function defineComputed(vm, target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(vm, key);
    sharedPropertyDefinition.set = _helper_utils__WEBPACK_IMPORTED_MODULE_2__["noop"];
  } else {
    sharedPropertyDefinition.get = userDef.get ? createComputedGetter(vm, key) : _helper_utils__WEBPACK_IMPORTED_MODULE_2__["noop"];
    sharedPropertyDefinition.set = userDef.set ? userDef.set.bind(vm.target) : _helper_utils__WEBPACK_IMPORTED_MODULE_2__["noop"];
  }
  babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, sharedPropertyDefinition);
}

function createComputedGetter(vm, key) {
  return function () {
    var watcher = vm._computedWatchers && vm._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (_dep__WEBPACK_IMPORTED_MODULE_4__["default"].target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(147);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(171);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(145);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84);











function transformApiForProxy(context, currentInject) {
  var rawSetData = context.setData.bind(context);
  if (babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(context, 'setData').configurable) {
    Object.defineProperty(context, 'setData', {
      get: function get() {
        return context.__mpxProxy.forceUpdate.bind(context.__mpxProxy);
      },

      configurable: true
    });
  }
  babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default()(context, {
    __getInitialData: {
      get: function get() {
        return function () {
          if (context.props) {
            var newData = context.$rawOptions.__nativeRender__ ? context.data : babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, context.data);
            babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(context.props).forEach(function (key) {
              if (!key.startsWith('$') && typeof context.props[key] !== 'function') {
                newData[key] = context.props[key];
              }
            });
            return newData;
          }
          return context.data;
        };
      },

      configurable: false
    },
    __render: {
      get: function get() {
        return rawSetData;
      },

      configurable: false
    }
  });
  if (currentInject) {
    if (currentInject.render) {
      babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default()(context, {
        __injectedRender: {
          get: function get() {
            return currentInject.render.bind(context);
          },

          configurable: false
        }
      });
    }
    if (currentInject.getRefsData) {
      babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default()(context, {
        __getRefsData: {
          get: function get() {
            return currentInject.getRefsData;
          },

          configurable: false
        }
      });
    }
  }
}

function filterOptions(options, type) {
  var newOptions = {};
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options).forEach(function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_6__["default"][key] || key === 'data' && typeof options[key] === 'function') {
      return;
    }
    if (key === 'properties' || key === 'props') {
      newOptions['props'] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, options['properties'], options['props']);
    } else if (key === 'methods' && type === 'page') {
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(newOptions, options[key]);
    } else {
      newOptions[key] = options[key];
    }
  });
  return newOptions;
}

function getDefaultOptions(type, _ref) {
  var _ref2;

  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === undefined ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;

  var hookNames = type === 'component' ? ['onInit', 'didMount', 'didUnmount'] : ['onLoad', 'onReady', 'onUnload'];
  var rootMixins = [(_ref2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, hookNames[0], function () {
    var _mpxProxy;

    // 提供代理对象需要的api
    transformApiForProxy(this, currentInject);
    // 缓存options
    this.$rawOptions = rawOptions;
    // 创建proxy对象
    var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_5__["default"](rawOptions, this);
    this.__mpxProxy = mpxProxy;
    (_mpxProxy = this.__mpxProxy).created.apply(_mpxProxy, arguments);
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 'deriveDataFromProps', function deriveDataFromProps(nextProps) {
    var _this = this;

    if (this.__mpxProxy && this.__mpxProxy.isMounted() && nextProps && nextProps !== this.props) {
      if (this.$rawOptions.__nativeRender__) {
        var newData = {};
        // 微信原生转换支付宝时，每次props更新将其设置进data模拟微信表现
        babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(nextProps).forEach(function (key) {
          if (!key.startsWith('$') && typeof nextProps[key] !== 'function' && nextProps[key] !== _this.props[key]) {
            newData[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["diffAndCloneA"])(nextProps[key]).clone;
          }
        });
        this.__mpxProxy.forceUpdate(newData);
      } else {
        // 由于支付宝中props透传父级setData的值，此处发生变化的属性实例一定不同，只需浅比较即可确定发生变化的属性
        babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(nextProps).forEach(function (key) {
          if (!key.startsWith('$') && typeof nextProps[key] !== 'function' && nextProps[key] !== _this.props[key]) {
            // 由于支付宝中透传父级setData的值，此处进行深copy后赋值避免父级存储的miniRenderData部分数据在此处被响应化，在子组件对props赋值时触发父组件的render
            _this[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_9__["diffAndCloneA"])(nextProps[key]).clone;
          }
        });
      }
    }
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 'didUpdate', function didUpdate() {
    this.__mpxProxy && this.__mpxProxy.updated();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, hookNames[1], function () {
    if (this.__mpxProxy) {
      this.__mpxProxy.mounted();
    } else {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_8__["error"])('请在支付宝开发工具的详情设置里面，启用component2编译。依赖基础库版本 >=1.14.0');
    }
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, hookNames[2], function () {
    this.__mpxProxy && this.__mpxProxy.destroyed();
  }), _ref2)];
  rawOptions.mixins = rawOptions.mixins ? rootMixins.concat(rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_7__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions, type);
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builtInKeysMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(171);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(189);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(159);






function filterOptions(options) {
  var newOptions = {};
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(options).forEach(function (key) {
    if (_builtInKeysMap__WEBPACK_IMPORTED_MODULE_1__["default"][key]) {
      return;
    }
    newOptions[key] = options[key];
  });
  return newOptions;
}

function initProxy(context, rawOptions) {
  // 缓存options
  context.$rawOptions = rawOptions;
  // 创建proxy对象
  var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_3__["default"](rawOptions, context);
  context.__mpxProxy = mpxProxy;
  context.__mpxProxy.created();
}

function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === undefined ? {} : _ref$rawOptions;

  var rootMixins = [{
    created: function created() {
      if (!this.__mpxProxy) {
        initProxy(this, rawOptions);
      }
    },
    mounted: function mounted() {
      this.__mpxProxy && this.__mpxProxy.mounted();
    },
    updated: function updated() {
      this.__mpxProxy && this.__mpxProxy.updated();
    },
    destroyed: function destroyed() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }
  }];
  if (type === 'page') {
    rootMixins.push({
      activated: function activated() {
        this.__mpxProxy && this.__mpxProxy.callUserHook(_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_4__["SHOW"]);
      },
      deactivated: function deactivated() {
        this.__mpxProxy && this.__mpxProxy.callUserHook(_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_4__["HIDE"]);
      }
    });
  }
  rawOptions.mixins = rawOptions.mixins ? rootMixins.concat(rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_2__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions);
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);


/* harmony default export */ __webpack_exports__["default"] = (Object(_patch__WEBPACK_IMPORTED_MODULE_0__["default"])('component'));

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreWithThis", function() { return createStoreWithThis; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(124);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(146);
/* harmony import */ var _observer_computed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(209);
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(141);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(145);
/* harmony import */ var _mapStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(214);















// 兼容在web和小程序平台中创建表现一致的store



function transformGetters(getters, module, store) {
  var newGetters = {};

  var _loop = function _loop(key) {
    if (key in store.getters) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_9__["warn"])('Duplicate getter type: ' + key + '.');
    }
    var getter = function getter() {
      if (store.withThis) {
        return getters[key].call({
          state: module.state,
          getters: store.getters,
          rootState: store.state
        });
      }
      return getters[key](module.state, store.getters, store.state);
    };
    newGetters[key] = getter;
  };

  for (var key in getters) {
    _loop(key);
  }
  return newGetters;
}

function transformMutations(mutations, module, store) {
  var newMutations = {};

  var _loop2 = function _loop2(key) {
    if (store.mutations[key]) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_9__["warn"])('Duplicate mutation type: ' + key + '.');
    }

    var mutation = function mutation() {
      for (var _len = arguments.length, payload = Array(_len), _key = 0; _key < _len; _key++) {
        payload[_key] = arguments[_key];
      }

      if (store.withThis) return mutations[key].apply({ state: module.state }, payload);
      return mutations[key].apply(mutations, [module.state].concat(payload));
    };
    newMutations[key] = mutation;
  };

  for (var key in mutations) {
    _loop2(key);
  }
  return newMutations;
}

function transformActions(actions, module, store) {
  var newActions = {};

  var _loop3 = function _loop3(key) {
    if (store.actions[key]) {
      Object(_helper_log__WEBPACK_IMPORTED_MODULE_9__["warn"])('Duplicate action type: ' + key + '.');
    }
    newActions[key] = function () {
      var context = {
        rootState: store.state,
        state: module.state,
        getters: store.getters,
        dispatch: store.dispatch.bind(store),
        commit: store.commit.bind(store)
      };

      var result = void 0;

      for (var _len2 = arguments.length, payload = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        payload[_key2] = arguments[_key2];
      }

      if (store.withThis) {
        result = actions[key].apply(context, payload);
      } else {
        result = actions[key].apply(actions, [context].concat(payload));
      }
      // action一定返回一个promise
      if (result && typeof result.then === 'function' && typeof result.catch === 'function') {
        return result;
      } else {
        return babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(result);
      }
    };
  };

  for (var key in actions) {
    _loop3(key);
  }
  return newActions;
}

function mergeDeps(module, deps) {
  var mergeProps = ['state', 'getters', 'mutations', 'actions'];
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(deps).forEach(function (key) {
    var store = deps[key];
    mergeProps.forEach(function (prop) {
      if (module[prop] && key in module[prop]) {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_9__["warn"])('Deps\'s name [' + key + '] conflicts with ' + prop + '\'s key in current options.');
      } else {
        module[prop] = module[prop] || {};
        if (prop === 'getters') {
          // depsGetters单独存放，不需要重新进行初始化
          module.depsGetters = module.depsGetters || {};
          module.depsGetters[key] = store.getters;
          // module[prop][key] = () => store[prop]
        } else {
          module[prop][key] = store[prop];
        }
      }
    });
  });
}

var Store = function () {
  function Store(options) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Store);

    this.withThis = options.withThis;
    this.__wrappedGetters = {};
    this.__depsGetters = {};
    this.getters = {};
    this.mutations = {};
    this.actions = {};
    this.state = this.registerModule(options).state;
    this.resetStoreVM();
    babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, Object(_mapStore__WEBPACK_IMPORTED_MODULE_10__["default"])(this));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Store, [{
    key: 'dispatch',
    value: function dispatch(type) {
      var action = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["getByPath"])(this.actions, type);
      if (!action) {
        return babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.reject(new Error('unknown action type: ' + type));
      } else {
        for (var _len3 = arguments.length, payload = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          payload[_key3 - 1] = arguments[_key3];
        }

        return action.apply(undefined, payload);
      }
    }
  }, {
    key: 'commit',
    value: function commit(type) {
      var mutation = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["getByPath"])(this.mutations, type);
      if (!mutation) {
        Object(_helper_log__WEBPACK_IMPORTED_MODULE_9__["warn"])('Unknown mutation type: ' + type + '.');
      } else {
        for (var _len4 = arguments.length, payload = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          payload[_key4 - 1] = arguments[_key4];
        }

        return mutation.apply(undefined, payload);
      }
    }
  }, {
    key: 'registerModule',
    value: function registerModule(module) {
      var _this = this;

      var state = module.state || {};
      var reactiveModule = {
        state: state
      };
      if (module.getters) {
        reactiveModule.getters = transformGetters(module.getters, reactiveModule, this);
      }
      if (module.mutations) {
        reactiveModule.mutations = transformMutations(module.mutations, reactiveModule, this);
      }
      if (module.actions) {
        reactiveModule.actions = transformActions(module.actions, reactiveModule, this);
      }
      if (module.deps) {
        mergeDeps(reactiveModule, module.deps);
      }
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.__depsGetters, reactiveModule.depsGetters);
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.__wrappedGetters, reactiveModule.getters);
      // merge mutations
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.mutations, reactiveModule.mutations);
      // merge actions
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.actions, reactiveModule.actions);
      // 子module
      if (module.modules) {
        var childs = module.modules;
        babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(childs).forEach(function (key) {
          reactiveModule.state[key] = _this.registerModule(childs[key]).state;
        });
      }
      return reactiveModule;
    }
  }, {
    key: 'resetStoreVM',
    value: function resetStoreVM() {
      if (false) { var computedKeys; } else {
        this._vm = {};
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_5__["observe"])(this.state, true);
        Object(_observer_computed__WEBPACK_IMPORTED_MODULE_6__["initComputed"])(this._vm, this.getters, this.__wrappedGetters);
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_8__["proxy"])(this.getters, this.__depsGetters);
      }
    }
  }]);

  return Store;
}();

function createStore(options) {
  return new Store(options);
}

function createStoreWithThis(options) {
  options.withThis = true;
  return new Store(options);
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _helper_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(145);





function mapFactory(type, store) {
  return function (depPath, maps) {
    maps = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["normalizeMap"])(depPath, maps);
    var result = {};

    var _loop = function _loop(key) {
      result[key] = function (payload) {
        var value = maps[key];
        if (type === 'mutations') {
          return store.commit(value, payload);
        } else if (type === 'actions') {
          return store.dispatch(value, payload);
        } else {
          var getterVal = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["getByPath"])(store.getters, value, '', '__NOTFOUND__');
          if (getterVal === '__NOTFOUND__') {
            Object(_helper_log__WEBPACK_IMPORTED_MODULE_2__["warn"])('Unknown getter named [' + value + '].');
            getterVal = '';
          }
          return getterVal;
        }
      };
    };

    for (var key in maps) {
      _loop(key);
    }
    return result;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    mapGetters: mapFactory('getters', store),
    mapMutations: mapFactory('mutations', store),
    mapActions: mapFactory('actions', store),
    mapState: function mapState(depPath, maps) {
      maps = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["normalizeMap"])(depPath, maps);
      var result = {};
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(maps).forEach(function (key) {
        var value = maps[key];
        result[key] = function () {
          if (typeof value === 'function') {
            return value.call(this, store.state, store.getters);
          } else if (typeof value === 'string') {
            return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["getByPath"])(store.state, value);
          }
        };
      });
      return result;
    }
  };
});

/***/ }),
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VantComponent", function() { return VantComponent; });
/* harmony import */ var _mixins_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(230);
/* harmony import */ var _mixins_observer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(231);


function mapKeys(source, target, map) {
    Object.keys(map).forEach(key => {
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}
function VantComponent(vantOptions = {}) {
    const options = {};
    mapKeys(vantOptions, options, {
        data: 'data',
        props: 'properties',
        mixins: 'behaviors',
        methods: 'methods',
        beforeCreate: 'created',
        created: 'attached',
        mounted: 'ready',
        relations: 'relations',
        destroyed: 'detached',
        classes: 'externalClasses'
    });
    const { relation } = vantOptions;
    if (relation) {
        options.relations = Object.assign(options.relations || {}, {
            [`../${relation.name}/index`]: relation
        });
    }
    // add default externalClasses
    options.externalClasses = options.externalClasses || [];
    options.externalClasses.push('custom-class');
    // add default behaviors
    options.behaviors = options.behaviors || [];
    options.behaviors.push(_mixins_basic__WEBPACK_IMPORTED_MODULE_0__["basic"]);
    // map field to form-field behavior
    if (vantOptions.field) {
        options.behaviors.push('wx://form-field');
    }
    // add default options
    options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
    Object(_mixins_observer_index__WEBPACK_IMPORTED_MODULE_1__["observe"])(vantOptions, options);
    Component(options);
}



/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basic", function() { return basic; });
const basic = Behavior({
    methods: {
        $emit(...args) {
            this.triggerEvent(...args);
        },
        getRect(selector, all) {
            return new Promise(resolve => {
                wx.createSelectorQuery()
                    .in(this)[all ? 'selectAll' : 'select'](selector)
                    .boundingClientRect(rect => {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve(rect);
                    }
                    if (!all && rect) {
                        resolve(rect);
                    }
                })
                    .exec();
            });
        }
    }
});


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(233);


function observe(vantOptions, options) {
    const { watch, computed } = vantOptions;
    options.behaviors.push(_behavior__WEBPACK_IMPORTED_MODULE_0__["behavior"]);
    if (watch) {
        const props = options.properties || {};
        Object.keys(watch).forEach(key => {
            if (key in props) {
                let prop = props[key];
                if (prop === null || !('type' in prop)) {
                    prop = { type: prop };
                }
                prop.observer = watch[key];
                props[key] = prop;
            }
        });
        options.properties = props;
    }
    if (computed) {
        options.methods = options.methods || {};
        options.methods.$options = () => vantOptions;
        if (options.properties) {
            Object(_props__WEBPACK_IMPORTED_MODULE_1__["observeProps"])(options.properties);
        }
    }
}


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "behavior", function() { return behavior; });
function setAsync(context, data) {
    return new Promise(resolve => {
        context.setData(data, resolve);
    });
}
const behavior = Behavior({
    created() {
        if (!this.$options) {
            return;
        }
        const cache = {};
        const { computed } = this.$options();
        const keys = Object.keys(computed);
        this.calcComputed = () => {
            const needUpdate = {};
            keys.forEach(key => {
                const value = computed[key].call(this);
                if (cache[key] !== value) {
                    cache[key] = value;
                    needUpdate[key] = value;
                }
            });
            return needUpdate;
        };
    },
    attached() {
        this.set();
    },
    methods: {
        // set data and set computed data
        set(data, callback) {
            const stack = [];
            if (data) {
                stack.push(setAsync(this, data));
            }
            if (this.calcComputed) {
                stack.push(setAsync(this, this.calcComputed()));
            }
            return Promise.all(stack).then(res => {
                if (callback && typeof callback === 'function') {
                    callback.call(this);
                }
                return res;
            });
        }
    }
});


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeProps", function() { return observeProps; });
function observeProps(props) {
    if (!props) {
        return;
    }
    Object.keys(props).forEach(key => {
        let prop = props[key];
        if (prop === null || !('type' in prop)) {
            prop = { type: prop };
        }
        let { observer } = prop;
        prop.observer = function (...args) {
            if (observer) {
                if (typeof observer === 'string') {
                    observer = this[observer];
                }
                observer.apply(this, args);
            }
            this.set();
        };
        props[key] = prop;
    });
}


/***/ })
/******/ ]);
module.exports = window["webpackJsonp"];
