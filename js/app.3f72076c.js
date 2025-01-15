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
/******/ 		"app": 0
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
/******/ 	__webpack_require__.p = "/soho/";
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
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "10ab":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "11d8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "143c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6590d7a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e1e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6590d7a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6590d7a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "148e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "14af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("25f1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "195a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8b6f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1f7b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "25f1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2669":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "28a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3249":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9e74");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4379":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "45bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b6c2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4ba9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4b6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4cc9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e66e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4f24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aad2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4f8b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bd4b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "53ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1f7b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.esm.js
var vue_meta_esm = __webpack_require__("58ca");

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__("ed09");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=bfde3c08
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('ProjectHeader'),_c('router-view',{staticClass:"app__view"}),_c('MobileToolBar'),_c('ProjectFooter'),_c('FloatBtn')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=bfde3c08

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectHeader/index.vue?vue&type=template&id=5a86f886
var ProjectHeadervue_type_template_id_5a86f886_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var ProjectHeadervue_type_template_id_5a86f886_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"ProjectHeader"},[_c('div',{staticClass:"container ProjectHeader-pc"},[_c('div',{staticClass:"ProjectHeader_area ProjectHeader_area-left"},[_c('div',{staticClass:"menu"},[_c('div',{staticClass:"menu_item"},[_c('div',{staticClass:"menu_itemContent"},[_c('a',{attrs:{"href":"/soho/about.html"}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 關於我們 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" ABOUT ")])])])]),_c('div',{staticClass:"menu_item"},[_c('div',{staticClass:"menu_itemContent"},[_c('a',{attrs:{"href":"/soho/detection.html"}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 檢驗認證 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" DETECTION ")])])])]),_c('div',{staticClass:"menu_item menu_itemProducts menu_itemSubMenu",attrs:{"id":"menu_itemProducts"}},[_c('div',{staticClass:"menu_itemContent"},[_c('div',[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 產品資訊 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" PRODUCTS ")])])]),_c('div',{staticClass:"navbar_submenu navbar_submenuProduct",attrs:{"id":"menu_itemProductsSubMenu"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"navbar_submenuProductHotType"},[_c('a',{staticClass:"navbar_submenu-highlight"},[_vm._v(" 【9/01-9/14】中秋禮盒 - "),_c('br'),_vm._v("送你送健康 ")]),_c('a',{staticClass:"navbar_submenuItem",attrs:{"href":"/soho/giftList.html"}},[_vm._v(" 送禮專區 ")]),_c('a',{staticClass:"navbar_submenuItem",attrs:{"href":"/soho/productList.html"}},[_vm._v(" 新品上市 ")]),_c('a',{staticClass:"navbar_submenuItem",attrs:{"href":"/soho/productList.html"}},[_vm._v(" 暢銷熱賣 ")]),_c('a',{staticClass:"navbar_submenuItem",attrs:{"href":"/soho/productList.html"}},[_vm._v(" 囤貨必備 ")]),_c('a',{staticClass:"navbar_submenuItemButton",attrs:{"href":"/soho/productList.html"}},[_vm._v("SHOP ALL PRODUCTS")]),_c('a',{staticClass:"navbar_submenuItemButton navbar_submenuItemButton-benefit",attrs:{"href":"/soho/productList.html"}},[_vm._v("點我領取最新優惠 "),_c('span')])]),_c('div',{staticClass:"navbar_submenuProductType"},[_c('a',{staticClass:"navbar_submenuItem",attrs:{"href":""}},[_vm._v("海藻")]),_c('a',{staticClass:"navbar_submenuItem",attrs:{"href":""}},[_vm._v("醬料")]),_c('a',{staticClass:"navbar_submenuItem",attrs:{"href":""}},[_vm._v("高湯")]),_c('a',{staticClass:"navbar_submenuItem",attrs:{"href":""}},[_vm._v("組合搭配")])]),_c('div',{staticClass:"navbar_submenuProductAd"},[_c('div',{staticClass:"navbar_submenuProductAdBlock"},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_item1.jpg"}}),_c('div',[_c('p',{staticClass:"navbar_submenuProductAdBlockTitle"},[_vm._v(" 匠心工藝 最初風味 ")]),_c('p',[_vm._v("精選100% 新鮮芝麻，經多道研磨，形成質地細緻綿密，口感滑順的純黑芝麻醬。")]),_c('a',{staticClass:"navbar_submenuProductAdBlockLink",attrs:{"href":"/soho/productContent.html"}},[_vm._v("立即前往")])])]),_c('div',{staticClass:"navbar_submenuProductAdBlock"},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_item2.jpg"}}),_c('div',[_c('p',{staticClass:"navbar_submenuProductAdBlockTitle"},[_vm._v(" 匠心工藝 最初風味 ")]),_c('p',[_vm._v("精選100% 新鮮芝麻，經多道研磨，形成質地細緻綿密，口感滑順的純黑芝麻醬。")]),_c('a',{staticClass:"navbar_submenuProductAdBlockLink",attrs:{"href":"/soho/productContent.html"}},[_vm._v("立即前往")])])])])])])]),_c('div',{staticClass:"menu_item"},[_c('div',{staticClass:"menu_itemContent"},[_c('a',{attrs:{"href":"/soho/news.html"}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 最新消息 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" NEWS ")])])])])])]),_c('a',{staticClass:"logo",attrs:{"href":"/soho/index.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/logo.png","alt":"藻作坊"}})]),_c('div',{staticClass:"ProjectHeader_area ProjectHeader_area-right"},[_c('div',{staticClass:"menu"},[_c('div',{staticClass:"menu_item"},[_c('div',{staticClass:"menu_itemContent"},[_c('a',{attrs:{"href":"/soho/seaweed.html"}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 海藻學堂 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" SEAWEED ")])])])]),_c('div',{staticClass:"menu_item"},[_c('div',{staticClass:"menu_itemContent"},[_c('a',{attrs:{"href":"/soho/store.html"}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 門市據點 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" STORE ")])])])]),_c('div',{staticClass:"menu_item"},[_c('div',{staticClass:"menu_itemContent"},[_c('a',{attrs:{"href":"/soho/contact.html"}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 聯絡我們 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" CONTACT ")])])])])]),_c('div',{staticClass:"functionBar"},[_c('div',{staticClass:"functionBar_member",attrs:{"id":"functionBar_member"}},[_c('button',{staticClass:"navbar_btn functionBar_memberBtn",attrs:{"id":"navbar_memberBtn"}}),_c('div',{staticClass:"navbar_toolMember",attrs:{"id":"navbar_toolMember"}},[_c('div',{staticClass:"navbar_toolMemberMain"},[_c('a',{attrs:{"href":"/soho/orderStatus.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_memberItem1.png"}}),_c('span',[_vm._v("訂單查詢")])]),_c('a',{attrs:{"href":"/soho/cartProcess1.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_memberItem2.png"}}),_c('span',[_vm._v("我的購物車")])]),_c('a',{attrs:{"href":"/soho/member.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_memberItem3.png"}}),_c('span',[_vm._v("會員中心")])]),_c('a',{attrs:{"href":"/soho/member.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_memberItem4.png"}}),_c('span',[_vm._v("客服中心")])])]),_c('ul',{staticClass:"navbar_toolMemberSub"},[_c('li',[_c('a',{attrs:{"href":"/soho/collect.html"}},[_c('span',[_vm._v("我的收藏")])])]),_c('li',[_c('a',{attrs:{"href":"/soho/coupon.html"}},[_c('span',[_vm._v("我的折價券")])])]),_c('li',[_c('a',{attrs:{"href":"/soho/bonus.html"}},[_c('span',[_vm._v("我的紅利點數")])])]),_c('li',[_c('a',{attrs:{"href":"/soho/paymentInstructions.html"}},[_c('span',[_vm._v("付款說明")])])]),_c('li',[_c('a',{attrs:{"href":"/soho/returnsAndRefunds.html"}},[_c('span',[_vm._v("退換貨說明")])])])]),_c('div',{staticClass:"navbar_toolMemberStatus"},[_c('a',{attrs:{"href":"/soho"}},[_vm._v("登出")])])])]),_c('div',[_c('a',{staticClass:"navbar_btn functionBar_cartBtn",attrs:{"href":"/soho/cartProcess1.html"}})]),_c('div',[_c('div',{staticClass:"functionBar_search"},[_c('input',{attrs:{"type":"text","placeholder":"SEARCH..."}})])])])]),_c('button',{staticClass:"closeBtn",attrs:{"id":"navbar_closeBtn"}})]),_c('div',{staticClass:"container ProjectHeader-mobile"},[_c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":"/soho/img/navbar/logo.png","alt":"藻作坊"}})]),_c('div',{staticClass:"right"},[_c('div',{staticClass:"functionBar"},[_c('a',{staticClass:"navbar_btn functionBar_cartBtn",attrs:{"href":"/soho/cartProcess1.html"}})]),_c('button',{staticClass:"hamburger",attrs:{"id":"hamburger"}},[_c('span'),_c('span'),_c('span'),_c('span')])])])])}]


// CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue?vue&type=template&id=5a86f886

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectHeader/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//
//


/* harmony default export */ var ProjectHeadervue_type_script_lang_js = ({
  name: 'ProjectHeader',
  setup(props, context) {}
});
// CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ProjectHeadervue_type_script_lang_js = (ProjectHeadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/ProjectHeader/style.scss?vue&type=style&index=0&prod&lang=scss&external
var stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("c264");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectHeadervue_type_script_lang_js,
  ProjectHeadervue_type_template_id_5a86f886_render,
  ProjectHeadervue_type_template_id_5a86f886_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProjectHeader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectFooter/index.vue?vue&type=template&id=6f1fbb18
var ProjectFootervue_type_template_id_6f1fbb18_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"ProjectFooter"},[_vm._m(0),_c('div',{staticClass:"ProjectFooter_note"},[_c('div',{staticClass:"container"},[_vm._v(" "+_vm._s(new Date().getFullYear())+" © 藻作坊 Designed By 禾藝叁陸巷有限公司 ")])])])}
var ProjectFootervue_type_template_id_6f1fbb18_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"ProjectFooter_content"},[_c('div',{staticClass:"ProjectFooter_logoWrap"},[_c('div',{staticClass:"ProjectFooter_pic"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_logo.png","alt":"logo","draggable":"false"}})])]),_c('div',{staticClass:"ProjectFooter_linkPart"},[_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 深入暸解 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"/soho/about.html"}},[_vm._v("關於我們")]),_c('a',{attrs:{"href":"/soho/certification.html"}},[_vm._v("永續發展")]),_c('a',{attrs:{"href":"/soho/news.html"}},[_vm._v("最新消息")]),_c('a',{attrs:{"href":"/soho/seaweed.html"}},[_vm._v("海藻學堂")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 藻點帶回家 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"/soho/detection.html"}},[_vm._v("檢驗認證")]),_c('a',{attrs:{"href":"/soho/productList.html"}},[_vm._v("產品總覽")]),_c('a',{attrs:{"href":"/soho/productList.html"}},[_vm._v("分類一")]),_c('a',{attrs:{"href":"/soho/productList.html"}},[_vm._v("分類二")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 快來藻我 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"/soho/storeContent.html"}},[_vm._v("彩虹門市")]),_c('a',{attrs:{"href":"/soho/storeContent.html"}},[_vm._v("檜意門市")]),_c('a',{attrs:{"href":"/soho/contact.html"}},[_vm._v("聯絡我們")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 會員中心 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"/soho/login.html"}},[_vm._v("會員登入")]),_c('a',{attrs:{"href":"/soho/orderStatus.html"}},[_vm._v("歷史訂單")]),_c('a',{attrs:{"href":"/soho/coupon.html"}},[_vm._v("優惠折扣")]),_c('a',{attrs:{"href":"/soho/bonus.html"}},[_vm._v("紅利點數")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 會員權益 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"/soho/paymentInstructions.html"}},[_vm._v("購物須知")]),_c('a',{attrs:{"href":"/soho/returnsAndRefunds.html"}},[_vm._v("退換貨說明")]),_c('a',{attrs:{"href":"/soho/index.html"}},[_vm._v("隱私權政策")]),_c('a',{attrs:{"href":"/soho/registTerm.html"}},[_vm._v("會員註冊條款")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 聯絡資訊 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('div',{staticClass:"ProjectFooter_linkList-text"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_phone.png"}}),_vm._v("0910-827-867 ")]),_c('div',{staticClass:"ProjectFooter_linkList-text"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_time.png"}}),_vm._v("AM 9:00-PM 18:00 ")]),_c('div',{staticClass:"ProjectFooter_linkList-text"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_email.png"}}),_vm._v("gzv6726@dr-seaweed.com.tw ")]),_c('div',{staticClass:"ProjectFooter_linkList-text"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_position.png"}}),_vm._v("嘉義市東區共和路191巷6號 ")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 關注我們 ")]),_c('div',{staticClass:"ProjectFooter_socialMedia"},[_c('a',{attrs:{"href":"/soho/index.html"}},[_c('img',{attrs:{"src":"/soho/img/footer/footer_line.png","alt":"LINE"}})]),_c('a',{attrs:{"href":"/soho/index.html"}},[_c('img',{attrs:{"src":"/soho/img/footer/footer_fb.png","alt":"fb"}})]),_c('a',{attrs:{"href":"/soho/index.html"}},[_c('img',{attrs:{"src":"/soho/img/footer/footer_yt.png","alt":"yt"}})])])])])])])}]


// CONCATENATED MODULE: ./src/components/ProjectFooter/index.vue?vue&type=template&id=6f1fbb18

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectFooter/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ProjectFootervue_type_script_lang_js = ({
  name: 'ProjectFooter',
  setup(props, context) {}
});
// CONCATENATED MODULE: ./src/components/ProjectFooter/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ProjectFootervue_type_script_lang_js = (ProjectFootervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/ProjectFooter/style.scss?vue&type=style&index=0&prod&lang=scss&external
var ProjectFooter_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("f7c7");

// CONCATENATED MODULE: ./src/components/ProjectFooter/index.vue






/* normalize component */

var ProjectFooter_component = Object(componentNormalizer["a" /* default */])(
  components_ProjectFootervue_type_script_lang_js,
  ProjectFootervue_type_template_id_6f1fbb18_render,
  ProjectFootervue_type_template_id_6f1fbb18_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProjectFooter = (ProjectFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MobileToolBar/index.vue?vue&type=template&id=10a1e478
var MobileToolBarvue_type_template_id_10a1e478_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var MobileToolBarvue_type_template_id_10a1e478_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MobileToolBar"},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"MobileToolBar_item",attrs:{"href":"/soho/orderStatus.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_memberItem1.png"}}),_c('span',[_vm._v("訂單查詢")])]),_c('a',{staticClass:"MobileToolBar_item",attrs:{"href":"/soho/cartProcess1.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_memberItem2.png"}}),_c('span',[_vm._v("我的購物車")])]),_c('a',{staticClass:"MobileToolBar_item",attrs:{"href":"/soho/member.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_memberItem3.png"}}),_c('span',[_vm._v("會員中心")])]),_c('a',{staticClass:"MobileToolBar_item",attrs:{"href":"/soho/member.html"}},[_c('img',{attrs:{"src":"/soho/img/navbar/navbar_memberItem4.png"}}),_c('span',[_vm._v("客服中心")])])])])}]


// CONCATENATED MODULE: ./src/components/MobileToolBar/index.vue?vue&type=template&id=10a1e478

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MobileToolBar/index.vue?vue&type=script&lang=js
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
//
//


/* harmony default export */ var MobileToolBarvue_type_script_lang_js = ({
  name: 'MobileToolBar',
  setup(props, context) {}
});
// CONCATENATED MODULE: ./src/components/MobileToolBar/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_MobileToolBarvue_type_script_lang_js = (MobileToolBarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/MobileToolBar/style.scss?vue&type=style&index=0&prod&lang=scss&external
var MobileToolBar_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("4ba9");

// CONCATENATED MODULE: ./src/components/MobileToolBar/index.vue






/* normalize component */

var MobileToolBar_component = Object(componentNormalizer["a" /* default */])(
  components_MobileToolBarvue_type_script_lang_js,
  MobileToolBarvue_type_template_id_10a1e478_render,
  MobileToolBarvue_type_template_id_10a1e478_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MobileToolBar = (MobileToolBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FloatBtn/FloatBtn.vue?vue&type=template&id=6ca63d5b
var FloatBtnvue_type_template_id_6ca63d5b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var FloatBtnvue_type_template_id_6ca63d5b_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"FloatBtn"},[_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_c('img',{attrs:{"src":"/soho/img/floatBtn_chat.png","alt":"chat"}})]),_c('a',{attrs:{"href":"/soho/cartProcess1.html"}},[_c('img',{attrs:{"src":"/soho/img/floatBtn_cart.png","alt":"cart"}})]),_c('button',{attrs:{"id":"btn__quickTop"}},[_c('img',{attrs:{"src":"/soho/img/floatBtn_up.png","alt":"up"}})])])}]


// CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=template&id=6ca63d5b

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FloatBtn/FloatBtn.vue?vue&type=script&lang=js
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

/* harmony default export */ var FloatBtnvue_type_script_lang_js = ({
  name: 'FloatBtn',
  setup(props, context) {}
});
// CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=script&lang=js
 /* harmony default export */ var FloatBtn_FloatBtnvue_type_script_lang_js = (FloatBtnvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=style&index=0&id=6ca63d5b&prod&lang=scss
var FloatBtnvue_type_style_index_0_id_6ca63d5b_prod_lang_scss = __webpack_require__("fa17");

// CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue






/* normalize component */

var FloatBtn_component = Object(componentNormalizer["a" /* default */])(
  FloatBtn_FloatBtnvue_type_script_lang_js,
  FloatBtnvue_type_template_id_6ca63d5b_render,
  FloatBtnvue_type_template_id_6ca63d5b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FloatBtn = (FloatBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js
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





/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  components: {
    ProjectHeader: ProjectHeader,
    ProjectFooter: ProjectFooter,
    MobileToolBar: MobileToolBar,
    FloatBtn: FloatBtn
  },
  metaInfo() {
    return {
      title: '藻作坊',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'Description...'
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=bfde3c08&prod&lang=scss
var Appvue_type_style_index_0_id_bfde3c08_prod_lang_scss = __webpack_require__("588f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index/index.vue?vue&type=template&id=90fadb54
var Indexvue_type_template_id_90fadb54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Indexvue_type_template_id_90fadb54_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Index"},[_c('div',{staticClass:"kv",attrs:{"data-wow-duration":"1.5s"}},[_c('div',{staticClass:"kv_content",attrs:{"id":"indexKvSlider"}})]),_c('div',{staticClass:"productIntro"},[_c('div',{staticClass:"productIntro_marque"},[_c('div',{staticClass:"marque"},[_c('div',{staticClass:"marque_wrap"},[_c('span',{staticClass:"content"},[_vm._v("THE BOON BESTOWED BY THE SEA _ "),_c('span',{staticClass:"content_highLight"},[_vm._v("大海賜予的恩惠「 海藻 」")])])])])]),_c('div',{staticClass:"productIntro_intro"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productList"},[_c('div',{staticClass:"productList_container"},[_c('a',{staticClass:"productItem",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('a',{staticClass:"productItem",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])]),_c('a',{staticClass:"productItem",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('a',{staticClass:"productItem",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])])]),_c('div',{staticClass:"productList_container"},[_c('a',{staticClass:"productItem",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('a',{staticClass:"productItem",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])]),_c('a',{staticClass:"productItem",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('a',{staticClass:"productItem",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])])])])])])]),_c('div',{staticClass:"ad"},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item1.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item2.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item3.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item4.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item5.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item6.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item7.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item8.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"/soho/productContent.html","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item9.jpg"}})])])]),_c('div',{staticClass:"productGift"},[_c('div',{staticClass:"productGiftTitle"},[_c('div',{staticClass:"container"},[_c('img',{attrs:{"src":"/soho/img/index/product2_title.png"}})])]),_c('div',{staticClass:"productGiftSet"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"setList"},[_c('a',{staticClass:"setItem wow fadeInLeft",attrs:{"href":"/soho/giftList.html","data-wow-duration":"1.2s","data-wow-delay":".1s"}},[_c('div',{staticClass:"setItem_thumb"},[_c('div',{staticClass:"setThumb"},[_c('img',{attrs:{"src":"/soho/img/index/product2_item1.png"}}),_c('div',{staticClass:"setThumb_action"},[_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])])])]),_c('div',{staticClass:"setItem_desc"},[_c('div',{staticClass:"setDesc"},[_c('div',{staticClass:"setDesc_title"},[_vm._v(" 六色海藻組合 ")]),_c('div',{staticClass:"setDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"setDesc_price"},[_c('div',{staticClass:"price price--delete"},[_vm._v(" 定價"),_c('span',[_vm._v("$980")])]),_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$900")])])]),_c('div',{staticClass:"setDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])])]),_c('a',{staticClass:"setItem wow fadeInRight",attrs:{"href":"/soho/giftList.html","data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('div',{staticClass:"setItem_thumb"},[_c('div',{staticClass:"setThumb"},[_c('img',{attrs:{"src":"/soho/img/index/product2_item2.png"}}),_c('div',{staticClass:"setThumb_action"},[_c('div',{staticClass:"action"},[_c('button',{staticClass:"action_icon action_icon-cart"}),_c('button',{staticClass:"action_icon action_icon-bag"})])])])]),_c('div',{staticClass:"setItem_desc"},[_c('div',{staticClass:"setDesc"},[_c('div',{staticClass:"setDesc_title"},[_vm._v(" 湯底完勝兩入組 ")]),_c('div',{staticClass:"setDesc_desc"},[_vm._v(" 使用國產香菇與醬油製作而成，無化學調味無香精色素，只要七分鐘就能上好湯 ")]),_c('div',{staticClass:"setDesc_price"},[_c('div',{staticClass:"price price--delete"},[_vm._v(" 定價"),_c('span',[_vm._v("$1080")])]),_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$990")])])]),_c('div',{staticClass:"setDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])])])])])]),_c('div',{staticClass:"productGiftPromote"},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"wow fadeInUp",attrs:{"href":"/soho/giftList.html","data-wow-duration":"1.2s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/product2_item3.png"}})])])])]),_c('div',{staticClass:"productFeature"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productFeature_promote"},[_c('div',{staticClass:"productFeature_promoteItem wow fadeInDown",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".1s"}},[_vm._v(" 新註冊現折 100 元 ")]),_c('div',{staticClass:"productFeature_promoteItem wow fadeInDown",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_vm._v(" 9/01 - 9/15 全站免運 ")])]),_c('div',{staticClass:"productFeature_gallery"},[_c('div',{staticClass:"productFeature_gallery-col productFeature_gallery-col-3"},[_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_1.jpg","alt":"日高極細昆布"}})]),_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".4s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_2.jpg","alt":"昆布"}})]),_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".6s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_3.jpg","alt":"海帶芽湯"}})])]),_c('div',{staticClass:"productFeature_gallery-col productFeature_gallery-col-2"},[_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".4s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_4.jpg","alt":"職人海帶芽湯"}})]),_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".4s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_5.jpg","alt":"海帶芽"}})])])])])]),_c('div',{staticClass:"productBg"},[_c('div',{staticClass:"productRecommend"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productRecommend_item wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('div',{staticClass:"productRecommend_item-pic "},[_c('img',{attrs:{"src":"/soho/img/index/product3_main.png","alt":""}})]),_c('div',{staticClass:"productRecommend_item-info "},[_c('div',{staticClass:"productRecommend_item-infoWrap"},[_c('div',{staticClass:"productRecommend_item-infoTitle"},[_vm._v(" 焙煎胡麻 ")]),_c('div',{staticClass:"productRecommend_item-infoText"},[_vm._v(" 焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻 ")]),_c('div',{staticClass:"productRecommend_item-infoArrow move-x"},[_c('div')])])]),_c('a',{attrs:{"href":"/soho/giftList.html"}})])])]),_c('div',{staticClass:"productAll"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productAll_list"},[_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('a',{staticClass:"productAll_item",attrs:{"href":"/soho/giftList.html"}},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 定價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 售價 "),_c('span',[_vm._v("$280")])])])])])]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])])])])])]),_c('div',{staticClass:"slogan"},[_c('div',{staticClass:"slogan_decoration"},[_c('img',{attrs:{"src":"/soho/img/index/product3_decoration.png"}})]),_c('img',{staticClass:"slogan_amin wow zoomIn",attrs:{"data-wow-duration":"1s","src":"/soho/img/index/slogan_title.png","alt":"職人精神"}})])])}]


// CONCATENATED MODULE: ./src/pages/Index/index.vue?vue&type=template&id=90fadb54

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index/index.vue?vue&type=script&lang=js
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

/* harmony default export */ var Indexvue_type_script_lang_js = ({
  name: 'Index',
  components: {},
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Index/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Indexvue_type_script_lang_js = (Indexvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Index/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Index_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("9bd9");

// CONCATENATED MODULE: ./src/pages/Index/index.vue






/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  pages_Indexvue_type_script_lang_js,
  Indexvue_type_template_id_90fadb54_render,
  Indexvue_type_template_id_90fadb54_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = (Index_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Header/index.vue?vue&type=template&id=a6590d7a
var Headervue_type_template_id_a6590d7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ProjectHeader')}
var Headervue_type_template_id_a6590d7a_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Header/index.vue?vue&type=template&id=a6590d7a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Header/index.vue?vue&type=script&lang=js
//
//
//
//


/* harmony default export */ var Headervue_type_script_lang_js = ({
  name: 'Header',
  components: {
    ProjectHeader: ProjectHeader
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Header/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Headervue_type_script_lang_js = (Headervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Header/index.vue?vue&type=style&index=0&id=a6590d7a&prod&lang=scss
var Headervue_type_style_index_0_id_a6590d7a_prod_lang_scss = __webpack_require__("143c");

// CONCATENATED MODULE: ./src/pages/Header/index.vue






/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  pages_Headervue_type_script_lang_js,
  Headervue_type_template_id_a6590d7a_render,
  Headervue_type_template_id_a6590d7a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Footer/index.vue?vue&type=template&id=8964e6ae
var Footervue_type_template_id_8964e6ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ProjectFooter')}
var Footervue_type_template_id_8964e6ae_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Footer/index.vue?vue&type=template&id=8964e6ae

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Footer/index.vue?vue&type=script&lang=js
//
//
//
//


/* harmony default export */ var Footervue_type_script_lang_js = ({
  name: 'Footer',
  components: {
    ProjectFooter: ProjectFooter
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Footer/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Footervue_type_script_lang_js = (Footervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Footer/index.vue?vue&type=style&index=0&id=8964e6ae&prod&lang=scss
var Footervue_type_style_index_0_id_8964e6ae_prod_lang_scss = __webpack_require__("ba3b");

// CONCATENATED MODULE: ./src/pages/Footer/index.vue






/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  pages_Footervue_type_script_lang_js,
  Footervue_type_template_id_8964e6ae_render,
  Footervue_type_template_id_8964e6ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/CartProcess1/index.vue?vue&type=template&id=5f10b6fa
var CartProcess1vue_type_template_id_5f10b6fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess1 Page"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"SHOPPING CART","zh":"我的購物車"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'MEMBER CENTER', path: '/cartProcess1.html'}]}})],1),_vm._m(0),_c('div',{staticClass:"CartProcess1_title"},[_vm._v(" 詳細訂單資料 / ")]),_vm._m(1),_vm._m(2)])])}
var CartProcess1vue_type_template_id_5f10b6fa_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"memberCenter_progressBar"},[_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-active memberCenter_progressBar-step-cartProcess"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process1.png","alt":"購物車"}})]),_c('p',[_vm._v("購物車")])]),_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-confirmData"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process2.png","alt":"商品及資料確認"}})]),_c('p',[_vm._v("商品及資料確認")])]),_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-completeOrder"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process3.png","alt":"訂單完成"}})]),_c('p',[_vm._v("訂單完成")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess1_content"},[_c('div',{staticClass:"CartProcess1_orderList"},[_c('div',{staticClass:"CartProcess1_orderItem"},[_c('div',{staticClass:"CartProcess1_orderItem-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good1.png","alt":""}})]),_c('div',{staticClass:"CartProcess1_orderItem-info"},[_c('div',{staticClass:"CartProcess1_orderItem-price"},[_c('div',[_vm._v(" 六色海藻 ")]),_c('div',[_vm._v(" $330 ")])]),_c('div',{staticClass:"CartProcess1_orderItem-amount"},[_vm._v(" 數量："),_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"CartProcess1_orderItem-count"},[_vm._v(" 小計： $660 ")])]),_c('button',{staticClass:"CartProcess1_orderItem-delete"})]),_c('div',{staticClass:"CartProcess1_orderItem"},[_c('div',{staticClass:"CartProcess1_orderItem-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good1.png","alt":""}})]),_c('div',{staticClass:"CartProcess1_orderItem-info"},[_c('div',{staticClass:"CartProcess1_orderItem-price"},[_c('div',[_vm._v(" 六色海藻 ")]),_c('div',[_vm._v(" $330 ")])]),_c('div',{staticClass:"CartProcess1_orderItem-amount"},[_vm._v(" 數量："),_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"CartProcess1_orderItem-count"},[_vm._v(" 小計： $660 ")])]),_c('button',{staticClass:"CartProcess1_orderItem-delete"})]),_c('div',{staticClass:"CartProcess1_orderItem"},[_c('div',{staticClass:"CartProcess1_orderItem-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good2.png","alt":""}})]),_c('div',{staticClass:"CartProcess1_orderItem-info"},[_c('div',{staticClass:"CartProcess1_orderItem-price"},[_c('div',[_vm._v("六色海藻")]),_c('div',[_vm._v("$330")])]),_c('div',{staticClass:"CartProcess1_orderItem-amount"},[_vm._v(" 數量："),_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"CartProcess1_orderItem-count"},[_vm._v(" 小計： $660 ")])]),_c('button',{staticClass:"CartProcess1_orderItem-delete"})]),_c('div',{staticClass:"CartProcess1_orderItem"},[_c('div',{staticClass:"CartProcess1_orderItem-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good3.png","alt":""}})]),_c('div',{staticClass:"CartProcess1_orderItem-info"},[_c('div',{staticClass:"CartProcess1_orderItem-price"},[_c('div',[_vm._v("六色海藻")]),_c('div',[_vm._v("$330")])]),_c('div',{staticClass:"CartProcess1_orderItem-amount"},[_vm._v(" 數量："),_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"CartProcess1_orderItem-count"},[_vm._v(" 小計： $660 ")])]),_c('button',{staticClass:"CartProcess1_orderItem-delete"})])]),_c('div',{staticClass:"CartProcess1_discount"},[_c('div',{staticClass:"CartProcess1_discount-used"},[_c('div',{staticClass:"CartProcess1_discount-title"},[_vm._v(" 已享用優惠 ")]),_c('div',{staticClass:"CartProcess1_discount-list"},[_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle"},[_vm._v(" 首次購物折 50 ")]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_vm._v(" -NT$50 ")])]),_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle"},[_vm._v(" 國內滿千免運 ")]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_vm._v(" 國內滿千免運 ")])]),_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle"},[_vm._v(" 全館3件以上9.5折 ")]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_vm._v(" -NT$75 ")])])])]),_c('div',{staticClass:"CartProcess1_discount-unUsed"},[_c('div',{staticClass:"CartProcess1_discount-title"},[_vm._v(" 尚有更多輕踩優惠等著你！目前未享用： ")]),_c('div',{staticClass:"CartProcess1_discount-list"},[_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle CartProcess1_discount-itemTitle-unused"},[_c('div',[_vm._v("折價券")]),_c('div',{staticClass:"CartProcess1_discount-itemTitle-sub"},[_vm._v(" 不可與首次購物同時使用 ")])]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_c('div',{staticClass:"customSelect"},[_c('select',{staticClass:"CartProcess1_discount-select",attrs:{"disabled":""}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v(" 可使用折價券選擇 ")])])])])]),_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle CartProcess1_discount-itemTitle-unused CartProcess1_discount-itemTitle-unused"},[_c('div',[_vm._v("紅利點數回饋")]),_c('div',{staticClass:"CartProcess1_discount-itemTitle-sub"},[_vm._v(" 不可與首次購物同時使用 ")])]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_c('div',{staticClass:"CartProcess1_discount-itemContent-input"},[_c('input',{attrs:{"type":"text","placeholder":"請輸入想兌換紅利點數"}}),_vm._v(" "),_c('button',{staticClass:"CartProcess1_btn CartProcess1_btn-small"},[_vm._v(" 套用 ")])]),_c('div',{staticClass:"CartProcess1_discount-itemContent-text"},[_vm._v(" 紅利點數餘額 NT$100 ")])])]),_c('div',{staticClass:"CartProcess1_discount-item CartProcess1_discount-item-gift"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle"},[_c('div',[_vm._v(" 【官網獨家｜滿額贈】"),_c('br'),_vm._v("藻作坊限量帆布提袋（數量有限，送完為止） ")])]),_c('div',{staticClass:"CartProcess1_discount-itemTag"},[_vm._v(" 再買 NT$320 即享有贈品 ")])])])]),_c('button',{staticClass:"CartProcess1_btn CartProcess1_btn-small CartProcess1_btn-go-product"},[_vm._v(" 繼續購物 ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess1_charge"},[_c('div',{staticClass:"CartProcess1_charge-wrap"},[_c('div',{staticClass:"CartProcess1_charge-total"},[_c('div',{staticClass:"CartProcess1_charge-total-zh"},[_vm._v(" 商品合計 ")]),_c('div',{staticClass:"CartProcess1_charge-total-data"},[_vm._v(" $1450 ")])]),_c('div',{staticClass:"CartProcess1_charge-bonus"},[_c('div',{staticClass:"CartProcess1_charge-bonus-zh"},[_vm._v(" 訂單完成後獲得紅利點數 ")]),_c('div',{staticClass:"CartProcess1_charge-bonus-data"},[_vm._v(" + NT$36 ")])]),_c('a',{staticClass:"CartProcess1_goCharge CartProcess1_btn CartProcess1_btn-go-checkout",attrs:{"href":"javascript:;"}},[_vm._v("前往結賬")])])])}]


// CONCATENATED MODULE: ./src/pages/CartProcess1/index.vue?vue&type=template&id=5f10b6fa

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Title/index.vue?vue&type=template&id=409ec044
var Titlevue_type_template_id_409ec044_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Title"},[_c('div',{staticClass:"Title_wrap"},[_c('div',{staticClass:"Title_en"},[_vm._v(" "+_vm._s(_vm.en)+" ")]),_c('div',{staticClass:"Title_zh"},[_c('span',[_vm._v(_vm._s(_vm.zh))])])])])}
var Titlevue_type_template_id_409ec044_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Title/index.vue?vue&type=template&id=409ec044

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Title/index.vue?vue&type=script&lang=js
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

/* harmony default export */ var Titlevue_type_script_lang_js = ({
  name: 'Title',
  props: {
    en: {
      type: String,
      required: true
    },
    zh: {
      type: String,
      required: true
    }
  },
  setup(props, context) {}
});
// CONCATENATED MODULE: ./src/components/Title/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Titlevue_type_script_lang_js = (Titlevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Title/index.vue?vue&type=style&index=0&id=409ec044&prod&lang=scss
var Titlevue_type_style_index_0_id_409ec044_prod_lang_scss = __webpack_require__("6a5a");

// CONCATENATED MODULE: ./src/components/Title/index.vue






/* normalize component */

var Title_component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_js,
  Titlevue_type_template_id_409ec044_render,
  Titlevue_type_template_id_409ec044_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Title = (Title_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/index.vue?vue&type=template&id=58000ef6
var Breadcrumbvue_type_template_id_58000ef6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumb"},[_c('div',{staticClass:"breadcrumb_wrap"},[_c('div',{staticClass:"breadcrumb_item"},[_vm._m(0),_vm._v(" "+_vm._s(_vm.linkData.length > 0 && '/')+" ")]),_vm._l((_vm.linkData),function(item,index){return _c('div',{key:item.title,staticClass:"breadcrumb_item"},[_c('a',{attrs:{"href":item.pah}},[_vm._v(_vm._s(item.title))]),_vm._v(" "+_vm._s((_vm.linkData.length - 1) > index ? '/' : '')+" ")])})],2)])}
var Breadcrumbvue_type_template_id_58000ef6_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/index.html"}},[_c('img',{attrs:{"src":"/soho/img/icon_home.png"}}),_vm._v("HOME")])}]


// CONCATENATED MODULE: ./src/components/Breadcrumb/index.vue?vue&type=template&id=58000ef6

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/index.vue?vue&type=script&lang=js
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
//

/* harmony default export */ var Breadcrumbvue_type_script_lang_js = ({
  name: 'Breadcrumb',
  props: {
    linkData: {
      type: Array,
      required: true
    }
  },
  setup(props, context) {}
});
// CONCATENATED MODULE: ./src/components/Breadcrumb/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js = (Breadcrumbvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Breadcrumb/index.vue?vue&type=style&index=0&id=58000ef6&prod&lang=scss
var Breadcrumbvue_type_style_index_0_id_58000ef6_prod_lang_scss = __webpack_require__("c018");

// CONCATENATED MODULE: ./src/components/Breadcrumb/index.vue






/* normalize component */

var Breadcrumb_component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js,
  Breadcrumbvue_type_template_id_58000ef6_render,
  Breadcrumbvue_type_template_id_58000ef6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Breadcrumb = (Breadcrumb_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/CartProcess1/index.vue?vue&type=script&lang=js
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



/* harmony default export */ var CartProcess1vue_type_script_lang_js = ({
  name: 'CartProcess1',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/CartProcess1/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_CartProcess1vue_type_script_lang_js = (CartProcess1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/CartProcess1/style.scss?vue&type=style&index=0&prod&lang=scss&external
var CartProcess1_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("78e7");

// CONCATENATED MODULE: ./src/pages/CartProcess1/index.vue






/* normalize component */

var CartProcess1_component = Object(componentNormalizer["a" /* default */])(
  pages_CartProcess1vue_type_script_lang_js,
  CartProcess1vue_type_template_id_5f10b6fa_render,
  CartProcess1vue_type_template_id_5f10b6fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CartProcess1 = (CartProcess1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/CartProcess2/index.vue?vue&type=template&id=656ab4a4
var CartProcess2vue_type_template_id_656ab4a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess2 Page"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"SHOPPING CART","zh":"我的購物車"}}),_c('Breadcrumb',{attrs:{"link-data":[{ title: 'MEMBER CENTER', path: '/cartProcess2.html' }]}})],1),_vm._m(0),_vm._m(1),_vm._m(2),_vm._m(3),_vm._m(4),_vm._m(5),_c('div',{staticClass:"CartProcess2_footer"},[_c('router-link',{attrs:{"to":{ name: 'CartProcess1' }}},[_c('div',{staticClass:"deco"}),_vm._v(" 返回購物車 ")]),_c('button',{staticClass:"active",attrs:{"id":"submit-client-form"}},[_vm._v(" 提交訂單 ")])],1)])])}
var CartProcess2vue_type_template_id_656ab4a4_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"memberCenter_progressBar"},[_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-active memberCenter_progressBar-step-cartProcess"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process1.png","alt":"購物車"}})]),_c('p',[_vm._v("購物車")])]),_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-active memberCenter_progressBar-step-confirmData"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process2.png","alt":"商品及資料確認"}})]),_c('p',[_vm._v("商品及資料確認")])]),_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-completeOrder"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process3.png","alt":"訂單完成"}})]),_c('p',[_vm._v("訂單完成")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess2_total"},[_c('div',{staticClass:"CartProcess2_total-charge"},[_c('div',{staticClass:"CartProcess2_total-charge-zh"},[_vm._v(" 商品合計 ")]),_c('div',{staticClass:"CartProcess2_total-charge-data"},[_vm._v(" $1450 ")])]),_c('div',{staticClass:"CartProcess2_total-cart"},[_c('span',[_vm._v("購物車 共"),_c('span',{staticClass:"num"},[_vm._v("3")]),_vm._v("件")]),_c('button',{staticClass:"CartProcess2_toggle-cartBtn",attrs:{"id":"CartProcess2_toggle-cartBtn"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess2_cart active",attrs:{"id":"CartProcess2_cart"}},[_c('div',{staticClass:"CartProcess2_cart-row CartProcess2_cart-header"},[_c('div',{staticClass:"CartProcess2_cart-cell"},[_vm._v(" 商品資料 ")]),_c('div',{staticClass:"CartProcess2_cart-cell"}),_c('div',{staticClass:"CartProcess2_cart-cell"},[_vm._v(" 優惠 ")]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_vm._v(" 單件價格 ")]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_vm._v(" 數量 ")]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_vm._v(" 小計 ")])]),_c('div',{staticClass:"CartProcess2_cart-body"},[_c('div',{staticClass:"CartProcess2_cart-row"},[_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good2.png","alt":""}})])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_name"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"product_content"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_discount"})]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_price"},[_vm._v(" $230 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_amount"},[_vm._v(" 1 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_total-price"},[_vm._v(" $230 ")])])]),_c('div',{staticClass:"CartProcess2_cart-row"},[_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good1.png","alt":""}})])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_name"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"product_content"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_discount"},[_vm._v(" 全館3件以上9.5折 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_price"},[_vm._v(" $330 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_amount"},[_vm._v(" 2 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_total-price"},[_vm._v(" $660 ")])])]),_c('div',{staticClass:"CartProcess2_cart-row"},[_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good3.png","alt":""}})])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_name"},[_vm._v(" 六色海藻組合 ")]),_c('div',{staticClass:"product_content"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_discount"})]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_price"},[_vm._v(" $890 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_amount"},[_vm._v(" 1 ")])]),_c('div',{staticClass:"CartProcess2_cart-cell"},[_c('div',{staticClass:"product_total-price"},[_vm._v(" $890 ")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess2_discount"},[_c('div',{staticClass:"CartProcess2_discount-title"},[_vm._v(" 已享用優惠 ")]),_c('div',{staticClass:"CartProcess2_discount-list"},[_c('div',{staticClass:"CartProcess2_discount-item"},[_c('div',{staticClass:"CartProcess2_discount-itemTitle"},[_vm._v(" 首次購物折 50 ")]),_c('div',{staticClass:"CartProcess2_discount-itemContent"},[_vm._v(" -NT$50 ")])]),_c('div',{staticClass:"CartProcess2_discount-item"},[_c('div',{staticClass:"CartProcess2_discount-itemTitle"},[_vm._v(" 國內滿千免運 ")]),_c('div',{staticClass:"CartProcess2_discount-itemContent"},[_vm._v(" 國內滿千免運 ")])]),_c('div',{staticClass:"CartProcess2_discount-item"},[_c('div',{staticClass:"CartProcess2_discount-itemTitle"},[_vm._v(" 全館3件以上9.5折 ")]),_c('div',{staticClass:"CartProcess2_discount-itemContent"},[_vm._v(" -NT$75 ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess2_final"},[_c('div',{staticClass:"CartProcess2_final-price"},[_c('div',{staticClass:"CartProcess2_final-price-row"},[_c('div',[_vm._v("小計")]),_c('div',[_vm._v("NT$1450")])]),_c('div',{staticClass:"CartProcess2_final-price-row"},[_c('div',[_vm._v("首次購物折50")]),_c('div',[_vm._v("-NT$50")])]),_c('div',{staticClass:"CartProcess2_final-price-row"},[_c('div',[_vm._v("運費")]),_c('div',[_vm._v("免運")])]),_c('div',{staticClass:"CartProcess2_final-price-row"},[_c('div',[_vm._v("合計")]),_c('div',[_vm._v("NT$1400")])])]),_c('div',{staticClass:"CartProcess2_final-coupon"},[_c('div',{staticClass:"CartProcess2_final-price-row"},[_c('div',[_vm._v("訂單完成後獲得紅利點數")]),_c('div',[_vm._v("+NT$36")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess2_client"},[_c('div',{staticClass:"CartProcess2_client-delivery"},[_c('div',{staticClass:"CartProcess2_title"},[_vm._v(" 寄送地址 / ")]),_c('div',{staticClass:"CartProcess2_client-form"},[_c('div',{staticClass:"CartProcess2_client-form-item required"},[_c('label',{attrs:{"for":"name"}},[_vm._v("姓名")]),_c('input',{attrs:{"id":"name","type":"text","name":"name","placeholder":"請填入真實姓名"}})]),_c('div',{staticClass:"CartProcess2_client-form-item required"},[_c('label',{attrs:{"for":"email"}},[_vm._v("聯絡信箱")]),_c('input',{attrs:{"id":"email","type":"text","name":"email","placeholder":"請填入電子信箱"}})]),_c('div',{staticClass:"CartProcess2_client-form-item required"},[_c('label',{attrs:{"for":"phone"}},[_vm._v("聯絡電話")]),_c('input',{attrs:{"id":"phone","type":"text","name":"phone","placeholder":"請填入手機號碼"}})]),_c('div',{staticClass:"CartProcess2_client-form-item"},[_c('label',{attrs:{"for":"note"}},[_vm._v("訂單備註")]),_c('textarea',{attrs:{"id":"note","type":"text","name":"note","placeholder":"請輸入備註留言訊息"}})]),_c('div',{staticClass:"CartProcess2_client-form-item"},[_c('label',{staticClass:"checkbox_wrap",attrs:{"for":"agree-read"}},[_c('input',{attrs:{"id":"agree-read","type":"checkbox","checked":"checked"}}),_vm._v("我已仔細閱讀並明瞭 「會員註冊條款」、「隱私權政策」、「訂購須知」所載內容及其意義茲同意該等條款規定，並願遵守網站現今、嗣後規範的各種規則。 "),_c('span',{staticClass:"checkmark"})])])])]),_c('div',{staticClass:"CartProcess2_client-payment"},[_c('div',{staticClass:"CartProcess2_client-paymentOptions"},[_c('div',{staticClass:"CartProcess2_title"},[_vm._v(" 付款方式 / ")]),_c('button',{staticClass:"CartProcess2_client-paymentOption CartProcess2_client-payment-creditCard  active"},[_vm._v(" 信用卡 ")]),_c('button',{staticClass:"CartProcess2_client-paymentOption CartProcess2_client-payment-ATM"},[_vm._v(" ATM匯款 ")])]),_c('div',{staticClass:"CartProcess2_client-paymentData"},[_c('div',{staticClass:"CartProcess2_title"},[_vm._v(" 付款資料 / ")]),_c('div',{staticClass:"CartProcess2_client-form-item"},[_c('label',[_vm._v("是否索取公司統編發票")]),_c('div',{staticClass:"CartProcess2_client-form-item-radio"},[_c('label',{staticClass:"radio_wrap"},[_c('input',{attrs:{"name":"ifNeedTaxNumber","type":"radio"}}),_c('span',{staticClass:"checkmark"},[_vm._v("否")])]),_c('label',{staticClass:"radio_wrap"},[_c('input',{attrs:{"name":"ifNeedTaxNumber","type":"radio","checked":"checked"}}),_c('span',{staticClass:"checkmark"},[_vm._v("是")])])])]),_c('div',{staticClass:"CartProcess2_client-form-item required"},[_c('label',{attrs:{"for":"companyName"}},[_vm._v("公司抬頭")]),_c('input',{attrs:{"id":"companyName","type":"text","name":"companyName","placeholder":"請填入公司抬頭"}})]),_c('div',{staticClass:"CartProcess2_client-form-item required"},[_c('label',{attrs:{"for":"taxNumber"}},[_vm._v("公司統編")]),_c('input',{attrs:{"id":"taxNumber","type":"text","name":"taxNumber","placeholder":"請填入8位數字公司統編"}})])]),_c('div',{staticClass:"CartProcess2_client-agreement"},[_c('div',{staticClass:"CartProcess2_client-form-item"},[_c('label',{staticClass:"checkbox_wrap",attrs:{"for":"agree-privacy"}},[_c('input',{attrs:{"id":"agree-privacy","type":"checkbox","checked":"checked"}}),_vm._v("我同意網站"),_c('a',{attrs:{"href":"javascript;'"}},[_vm._v("服務條款")]),_vm._v("及"),_c('a',{attrs:{"href":"javascript;'"}},[_vm._v("隱私權政策")]),_c('span',{staticClass:"checkmark"})]),_c('span',[_vm._v("您必須同意細則和私隱條款")])])])])])}]


// CONCATENATED MODULE: ./src/pages/CartProcess2/index.vue?vue&type=template&id=656ab4a4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/CartProcess2/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//



/* harmony default export */ var CartProcess2vue_type_script_lang_js = ({
  name: 'CartProcess2',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/CartProcess2/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_CartProcess2vue_type_script_lang_js = (CartProcess2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/CartProcess2/style.scss?vue&type=style&index=0&prod&lang=scss&external
var CartProcess2_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("da49");

// CONCATENATED MODULE: ./src/pages/CartProcess2/index.vue






/* normalize component */

var CartProcess2_component = Object(componentNormalizer["a" /* default */])(
  pages_CartProcess2vue_type_script_lang_js,
  CartProcess2vue_type_template_id_656ab4a4_render,
  CartProcess2vue_type_template_id_656ab4a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CartProcess2 = (CartProcess2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/CartProcess3/index.vue?vue&type=template&id=5f30a695
var CartProcess3vue_type_template_id_5f30a695_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess3 Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"SHOPPING CART","zh":"我的購物車"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'SHOPPING CART', path: '/cartProcess3.html'}]}})],1)]),_vm._m(0)])}
var CartProcess3vue_type_template_id_5f30a695_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"CartProcess3_check wow bounceIn"},[_c('img',{attrs:{"src":"/soho/img/cartProcess3/cartProcess3_iconCheck.png"}})]),_c('div',{staticClass:"CartProcess3_content wow fadeInUp"},[_c('div',[_vm._v("謝謝您！您的訂單已經成立！")]),_c('div',{staticClass:"CartProcess3_orderNumber"},[_vm._v(" 訂單號碼 "),_c('span',[_vm._v("20240829000100101")])]),_c('div',[_vm._v("訂單確認信件已經發送到您的電子信箱")])]),_c('div',{staticClass:"CartProcess3_note wow fadeInUp"},[_c('div',{staticClass:"CartProcess3_noteTitle"},[_vm._v(" [感謝您的支持] ")]),_c('div',[_vm._v(" 本店絕不會另外通知消費者交易失敗或是付款錯誤等原因,要求您去提款機做任何取消交易或轉帳的動作,請小心不要受騙。 ")])]),_c('div',{staticClass:"CartProcess3_links"},[_c('a',{attrs:{"href":"/soho/index.html"}},[_vm._v("回首頁")]),_c('a',{attrs:{"href":"/soho/orderStatus.html"}},[_vm._v("查看訂單")])])])}]


// CONCATENATED MODULE: ./src/pages/CartProcess3/index.vue?vue&type=template&id=5f30a695

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/CartProcess3/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CartProcess3vue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/CartProcess3/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_CartProcess3vue_type_script_lang_js = (CartProcess3vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/CartProcess3/style.scss?vue&type=style&index=0&prod&lang=scss&external
var CartProcess3_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("d474");

// CONCATENATED MODULE: ./src/pages/CartProcess3/index.vue






/* normalize component */

var CartProcess3_component = Object(componentNormalizer["a" /* default */])(
  pages_CartProcess3vue_type_script_lang_js,
  CartProcess3vue_type_template_id_5f30a695_render,
  CartProcess3vue_type_template_id_5f30a695_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CartProcess3 = (CartProcess3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ProductContent/index.vue?vue&type=template&id=e7e6f3bc
var ProductContentvue_type_template_id_e7e6f3bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductContent Page"},[_c('div',{staticClass:"productHeader"}),_c('div',{staticClass:"productTop"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productTop_title"},[_c('Title',{attrs:{"en":"PRODUCTS","zh":"產品資訊"}})],1),_c('div',{staticClass:"productTop_breadcrumb"},[_c('Breadcrumb',{attrs:{"link-data":[{title: 'PRODUCTS', path: '/ProductContent.html'}]}})],1)])]),_vm._m(0),_vm._m(1)])}
var ProductContentvue_type_template_id_e7e6f3bc_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"productIntro"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productIntro_wrap"},[_c('div',{staticClass:"ProductContent_content-menu"},[_c('div',{staticClass:"ProductContent_content-menuTitle"},[_vm._v(" 產品資訊 ")]),_c('div',{staticClass:"ProductContent_content-menuItemList"},[_c('div',{staticClass:"ProductContent_content-menuItem active"},[_c('div',{staticClass:"ProductContent_content-menuItemTitle"},[_vm._v(" 查看全部 ")])]),_c('div',{staticClass:"ProductContent_content-menuItem ProductContent_content-menuItem-toggle active"},[_c('div',{staticClass:"ProductContent_content-menuItemTitle"},[_c('span',[_vm._v("【 9/01-9/14 】中秋禮盒 - 送你送健康")])]),_c('div',{staticClass:"ProductContent_content-menuItemSub"},[_c('div',{staticClass:"ProductContent_content-menuItemSubItem active"},[_vm._v(" 海藻 ")]),_c('div',{staticClass:"ProductContent_content-menuItemSubItem"},[_vm._v(" 醬料 ")]),_c('div',{staticClass:"ProductContent_content-menuItemSubItem"},[_vm._v(" 高湯 ")]),_c('div',{staticClass:"ProductContent_content-menuItemSubItem"},[_vm._v(" 組合搭配 ")])])]),_c('div',{staticClass:"ProductContent_content-menuItem ProductContent_content-menuItem-toggle"},[_c('div',{staticClass:"ProductContent_content-menuItemTitle"},[_c('span',[_vm._v("新品上市")])]),_c('div',{staticClass:"ProductContent_content-menuItemSub"},[_c('div',{staticClass:"ProductContent_content-menuItemSubItem"},[_vm._v(" 新品一 ")])])]),_c('div',{staticClass:"ProductContent_content-menuItem "},[_c('div',{staticClass:"ProductContent_content-menuItemTitle"},[_c('span',[_vm._v("暢銷熱賣")])])]),_c('div',{staticClass:"ProductContent_content-menuItem "},[_c('div',{staticClass:"ProductContent_content-menuItemTitle"},[_c('span',[_vm._v("囤貨必備")])])])])]),_c('div',{staticClass:"introduce"},[_c('div',{staticClass:"introduce_slider"},[_c('div',{staticClass:"slider"},[_c('div',{staticClass:"slider_main"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})])]),_c('div',{staticClass:"slider_nav"}),_c('div',{staticClass:"slider_sub"},[_c('div',{staticClass:"sub"},[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',{staticClass:"sub"},[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',{staticClass:"sub"},[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',{staticClass:"sub"},[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})])])])]),_c('div',{staticClass:"introduce_desc"},[_c('div',{staticClass:"desc"},[_c('div',{staticClass:"desc_title"},[_c('div',{staticClass:"title"},[_vm._v(" 六色海藻 ")])]),_c('div',{staticClass:"desc_price"},[_c('div',{staticClass:"price price--delete"},[_vm._v(" 定價"),_c('span',[_vm._v("$350")])]),_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])])]),_c('div',{staticClass:"desc_mount"},[_c('div',{staticClass:"mount"},[_c('a',{staticClass:"mount_icon mount_icon--minus"},[_vm._v("-")]),_c('span',{staticClass:"mount_number"},[_vm._v("1")]),_c('a',{staticClass:"mount_icon mount_icon--plus"},[_vm._v("+")])])]),_c('div',{staticClass:"desc_action"},[_c('div',{staticClass:"action"},[_c('a',{staticClass:"btn"},[_vm._v("直接購買")]),_c('a',{staticClass:"btn btn--border"},[_vm._v("加入購物車")]),_c('a',{staticClass:"btn btn--border btn--min"},[_c('i',{staticClass:"icon icon_heart"})])])])]),_c('hr',{staticClass:"line"}),_c('div',{staticClass:"contentText"},[_c('div',{staticClass:"text text--highLight"},[_vm._v(" 嚴選六種優質海藻，方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的膳食纖維與微量元素。 嚴選六種優質海藻，方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的膳食纖維與微量元素。 ")]),_c('br'),_c('div',{staticClass:"text"},[_vm._v(" 編號 / 00139059 ")]),_c('br'),_c('div',{staticClass:"text"},[_vm._v(" 注意事項 /"),_c('br'),_vm._v(" 請放置陰涼處或冷藏"),_c('br'),_vm._v(" 請放置陰涼處或冷藏"),_c('br'),_vm._v(" 請放置陰涼處或冷藏"),_c('br'),_vm._v(" 請放置陰涼處或冷藏"),_c('br'),_vm._v(" 請放置陰涼處或冷藏 ")]),_c('br'),_c('div',{staticClass:"text"},[_vm._v(" 淨重 / 80g (一包約8~10人份) ")]),_c('br'),_c('div',{staticClass:"text"},[_vm._v(" 內容物 /"),_c('br'),_vm._v(" 海帶芽.海帶芽莖絲.寒天.雞冠藻.紅花櫻藻.黃花櫻藻 ")])])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"productDesc"},[_c('div',{staticClass:"container"},[_c('img',{staticClass:"image",attrs:{"src":"/soho/img/productContent/productContent_main.jpg"}}),_c('div',{staticClass:"title"},[_vm._v(" 味精裡面含有人類的第五味覺「鮮味」 ")]),_c('div',{staticClass:"content"},[_vm._v(" 跟酸.甜.苦.鹹一樣都是我們人類的味覺，只是鮮味比較晚才被發現，而提到鮮味，就必須要介紹到它的發現者與發明者池田菊苗教授的故事了。 "),_c('br'),_vm._v(" 1908年的一天，日本東京帝國大學池田菊苗化學教授，晚上下班後正吃著妻子準備的可口飯菜。他發現湯的味道特別鮮美,用小勺攪動幾下,發 現碗中只不過是一些海帶和幾片黃瓜。 「海帶和黃瓜都是非常普通的食物,怎麼會產生這樣的鮮味呢?」池田自言自語起來,「嗯,也許海帶里有奧妙。」職業敏感使的教授離開飯桌,跑 進了實驗室里。他取來一些海帶,細細地研究。半年後,池田菊苗教授發表了他的研究成果,在海帶中可提取出一和叫做麩胺酸的化學物質,如把極 少量的麩胺酸鈉加到湯里去,就能使味道鮮美至極。1908年的一天，日本東京帝國大學池田菊苗化學教授，晚上下班後正吃著妻子準備的可口飯 菜。他發現湯的味道特別鮮美,用小勺攪動幾下,發 現碗中只不過是一些海帶和幾片黃瓜。 ")]),_c('img',{staticClass:"image",attrs:{"src":"/soho/img/productContent/productContent_pic.jpg"}}),_c('div',{staticClass:"back"},[_c('a',{staticClass:"btn"},[_vm._v("回上一頁 ")])])])])}]


// CONCATENATED MODULE: ./src/pages/ProductContent/index.vue?vue&type=template&id=e7e6f3bc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ProductContent/index.vue?vue&type=script&lang=js
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



/* harmony default export */ var ProductContentvue_type_script_lang_js = ({
  name: 'ProductContent',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/ProductContent/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_ProductContentvue_type_script_lang_js = (ProductContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/ProductContent/style.scss?vue&type=style&index=0&prod&lang=scss&external
var ProductContent_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("7534");

// CONCATENATED MODULE: ./src/pages/ProductContent/index.vue






/* normalize component */

var ProductContent_component = Object(componentNormalizer["a" /* default */])(
  pages_ProductContentvue_type_script_lang_js,
  ProductContentvue_type_template_id_e7e6f3bc_render,
  ProductContentvue_type_template_id_e7e6f3bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductContent = (ProductContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ProductList/index.vue?vue&type=template&id=042b8228
var ProductListvue_type_template_id_042b8228_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList Page"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"PRODUCTS","zh":"產品資訊"}})],1),_c('div',{staticClass:"ProductList_content"},[_vm._m(0),_c('div',{staticClass:"ProductList_content-product"},[_vm._m(1),_c('div',{staticClass:"ProductList_content-product-wrap"},[_vm._m(2),_vm._m(3),_c('PageControl')],1)])])])])}
var ProductListvue_type_template_id_042b8228_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content-menu"},[_c('div',{staticClass:"ProductList_content-menuTitle"},[_vm._v(" 產品資訊 ")]),_c('div',{staticClass:"ProductList_content-menuItemList"},[_c('div',{staticClass:"ProductList_content-menuItem"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_vm._v(" 查看全部 ")])]),_c('div',{staticClass:"ProductList_content-menuItem ProductList_content-menuItem-toggle active"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("【 9/01-9/14 】中秋禮盒 - 送你送健康")])]),_c('div',{staticClass:"ProductList_content-menuItemSub"},[_c('div',{staticClass:"ProductList_content-menuItemSubItem active"},[_vm._v(" 海藻 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 醬料 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 高湯 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 組合搭配 ")])])]),_c('div',{staticClass:"ProductList_content-menuItem "},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("送禮專區")])])]),_c('div',{staticClass:"ProductList_content-menuItem ProductList_content-menuItem-toggle"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("新品上市")])]),_c('div',{staticClass:"ProductList_content-menuItemSub"},[_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 新品一 ")])])]),_c('div',{staticClass:"ProductList_content-menuItem "},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("暢銷熱賣")])])]),_c('div',{staticClass:"ProductList_content-menuItem "},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("囤貨必備")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content-product-ad"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_ad.jpg","alt":"海帶芽湯"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content-product-filters active"},[_c('div',[_c('div',{staticClass:"ProductList_content-product-filter select"},[_c('select',[_c('option',{attrs:{"value":"","selected":""}},[_vm._v(" 預設 ")]),_c('option',{attrs:{"value":"1"}},[_vm._v(" 價格低至高 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 價格高至低 ")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content-product-list"},[_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item1.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的現代人忙碌而無")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item2.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item3.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的現代人忙碌而無")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item4.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item5.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 海苔醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item6.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 海苔醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item7.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item8.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item9.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])])])}]


// CONCATENATED MODULE: ./src/pages/ProductList/index.vue?vue&type=template&id=042b8228

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageControl/index.vue?vue&type=template&id=39bfc552
var PageControlvue_type_template_id_39bfc552_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var PageControlvue_type_template_id_39bfc552_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"PageControl"},[_c('button',[_vm._v(" PREVIOUS ")]),_c('div',{staticClass:"PageControl-pages"},[_c('button',{staticClass:"active"},[_vm._v(" 1 ")]),_c('button',{},[_vm._v(" 2 ")])]),_c('button',[_vm._v(" NEXT ")])])}]


// CONCATENATED MODULE: ./src/components/PageControl/index.vue?vue&type=template&id=39bfc552

// EXTERNAL MODULE: ./src/components/PageControl/style.scss?vue&type=style&index=0&prod&lang=scss&external
var PageControl_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("4f24");

// CONCATENATED MODULE: ./src/components/PageControl/index.vue

var script = {}



/* normalize component */

var PageControl_component = Object(componentNormalizer["a" /* default */])(
  script,
  PageControlvue_type_template_id_39bfc552_render,
  PageControlvue_type_template_id_39bfc552_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageControl = (PageControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ProductList/index.vue?vue&type=script&lang=js
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



/* harmony default export */ var ProductListvue_type_script_lang_js = ({
  name: 'ProductList',
  components: {
    Title: Title,
    PageControl: PageControl
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/ProductList/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_ProductListvue_type_script_lang_js = (ProductListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/ProductList/style.scss?vue&type=style&index=0&prod&lang=scss&external
var ProductList_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("53ac");

// CONCATENATED MODULE: ./src/pages/ProductList/index.vue






/* normalize component */

var ProductList_component = Object(componentNormalizer["a" /* default */])(
  pages_ProductListvue_type_script_lang_js,
  ProductListvue_type_template_id_042b8228_render,
  ProductListvue_type_template_id_042b8228_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductList = (ProductList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login/index.vue?vue&type=template&id=37ed9965
var Loginvue_type_template_id_37ed9965_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Login Page"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"MEMBER LOGIN","zh":"會員登入"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'MEMBER LOGIN', path: '/login.html'}]}})],1),_vm._m(0),_vm._m(1)])])}
var Loginvue_type_template_id_37ed9965_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoginSignUp_links"},[_c('a',{attrs:{"href":"/soho/signup.html"}},[_vm._v("會員註冊")]),_c('a',{staticClass:"active",attrs:{"href":"/soho/login.html"}},[_vm._v("會員登入")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoginSignUp_formWrap"},[_c('div',{staticClass:"LoginSignUp_socialMedia"},[_c('div',{staticClass:"LoginSignUp_title"},[_vm._v(" 社群帳號登入 / ")]),_c('button',{staticClass:"LoginSignUp_line"},[_c('img',{attrs:{"src":"/soho/img/login/login_line.jpg","alt":""}})])]),_c('form',{staticClass:"LoginSignUp_member"},[_c('div',{staticClass:"LoginSignUp_title"},[_vm._v(" 會員帳號登入 / ")]),_c('div',{staticClass:"LoginSignUp_member-form"},[_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_c('span',[_vm._v("電子信箱")])]),_c('input',{attrs:{"id":"email","placeholder":"請輸入電子信箱","type":"text","name":""}})]),_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_vm._v("密碼")]),_c('input',{attrs:{"id":"","type":"password","name":""}})]),_c('div',{staticClass:"LoginSignUp_member-form-utils"},[_c('label',{staticClass:"checkbox_wrap"},[_c('input',{attrs:{"type":"checkbox","checked":"checked"}}),_vm._v("記住我 "),_c('span',{staticClass:"checkmark"})]),_c('div',[_c('a',{staticClass:"forgetPwd",attrs:{"href":""}},[_vm._v("忘記密碼？")])])]),_c('button',{staticClass:"LoginSignUp_member-form-btn"},[_vm._v(" 登"),_c('span'),_vm._v("入 ")]),_c('div',{staticClass:"LoginSignUp_member-form-divider"},[_c('span',[_vm._v("或是")])]),_c('button',{staticClass:"LoginSignUp_member-form-btn LoginSignvUp_member-form-btn-secondary"},[_vm._v(" 註"),_c('span'),_vm._v("冊 ")])])])])}]


// CONCATENATED MODULE: ./src/pages/Login/index.vue?vue&type=template&id=37ed9965

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login/index.vue?vue&type=script&lang=js
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
//
//



/* harmony default export */ var Loginvue_type_script_lang_js = ({
  name: 'Login',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Login/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Loginvue_type_script_lang_js = (Loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Login/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Login_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("7f7a");

// CONCATENATED MODULE: ./src/pages/Login/index.vue






/* normalize component */

var Login_component = Object(componentNormalizer["a" /* default */])(
  pages_Loginvue_type_script_lang_js,
  Loginvue_type_template_id_37ed9965_render,
  Loginvue_type_template_id_37ed9965_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Login = (Login_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/SignUp/index.vue?vue&type=template&id=77fea376
var SignUpvue_type_template_id_77fea376_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SignUp Page"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"SIGN UP","zh":"會員註冊"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'SIGN UP', path: '/signup.html'}]}})],1),_vm._m(0),_vm._m(1)])])}
var SignUpvue_type_template_id_77fea376_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoginSignUp_links"},[_c('a',{staticClass:"active",attrs:{"href":"/soho/signup.html"}},[_vm._v("會員註冊")]),_c('a',{attrs:{"href":"/soho/login.html"}},[_vm._v("會員登入")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"LoginSignUp_formWrap"},[_c('div',{staticClass:"LoginSignUp_socialMedia"},[_c('div',{staticClass:"LoginSignUp_title"},[_vm._v(" 社群帳號註冊 / ")]),_c('button',{staticClass:"LoginSignUp_line"},[_c('img',{attrs:{"src":"/soho/img/login/login_line.jpg","alt":""}})])]),_c('div',{staticClass:"LoginSignUp_member"},[_c('div',{staticClass:"LoginSignUp_title"},[_vm._v(" 會員註冊 / ")]),_c('div',{staticClass:"LoginSignUp_member-form"},[_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_c('span',[_vm._v("電子信箱")])]),_c('input',{attrs:{"id":"","placeholder":"請輸入電子信箱","type":"text","name":""}})]),_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_vm._v("密碼")]),_c('input',{attrs:{"id":"password","type":"password","name":""}})]),_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_vm._v("重新輸入密碼")]),_c('input',{attrs:{"id":"reWritePassword","type":"password","name":""}})]),_c('label',{staticClass:"last",attrs:{"for":""}},[_c('div',{staticClass:"name"},[_c('span',[_vm._v("使用者名稱")])]),_c('input',{attrs:{"id":"username","placeholder":"請輸入使用者名稱，字數限10字內","type":"text","name":""}})]),_c('button',{staticClass:"LoginSignUp_member-form-btn"},[_vm._v(" 註"),_c('span'),_vm._v("冊 ")]),_c('div',{staticClass:"SignUp_goLogin"},[_vm._v(" 已有帳號？"),_c('a',{attrs:{"href":"/soho/login.html"}},[_vm._v("立即登入")])])])])])}]


// CONCATENATED MODULE: ./src/pages/SignUp/index.vue?vue&type=template&id=77fea376

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/SignUp/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//



/* harmony default export */ var SignUpvue_type_script_lang_js = ({
  name: 'SignUp',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/SignUp/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_SignUpvue_type_script_lang_js = (SignUpvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/SignUp/style.scss?vue&type=style&index=0&prod&lang=scss&external
var SignUp_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("3249");

// CONCATENATED MODULE: ./src/pages/SignUp/index.vue






/* normalize component */

var SignUp_component = Object(componentNormalizer["a" /* default */])(
  pages_SignUpvue_type_script_lang_js,
  SignUpvue_type_template_id_77fea376_render,
  SignUpvue_type_template_id_77fea376_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SignUp = (SignUp_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/RegistTerm/index.vue?vue&type=template&id=6d9dd502
var RegistTermvue_type_template_id_6d9dd502_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"RegistTerm Page"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"MEMBER AGREEMENT","zh":"會員註冊條款"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'MEMBER AGREEMENT', path: '/registTerm.html'}]}})],1),_vm._m(0)])])}
var RegistTermvue_type_template_id_6d9dd502_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"RegistTerm__content"},[_c('div',{staticClass:"RegistTerm__block"},[_c('div',{staticClass:"RegistTerm__title"},[_vm._v(" 您同意以下會員註冊條款,已進行會員註冊程序： ")]),_c('div',{staticClass:"RegistTerm__info"},[_c('div',[_vm._v(" 1. 遵守中華民國相關法規及一切使用網際網路之國際慣例。 ")]),_c('div',[_vm._v(" 2. 商品下訂單尚未出貨前可以隨意更改訂單狀態,如修改訂單取消訂單(客製化商品除外),一但出貨將無法取消交易。 ")]),_c('div',[_vm._v(" 3. 會員保證願意承擔一切因個人行為而直接或間接導致的民事及刑事法律責任。 ")]),_c('div',[_vm._v(" 4. 嚴禁惡意刪改、入侵、散播病毒或破壞本站之任何資料或頁面,否則將承擔所有法律責任。 ")]),_c('div',[_vm._v(" 5. 會員若有任何問題與爭議,本站保留最終裁決權利。 ")]),_c('div',[_vm._v(" 6. 會員若蓄意觸犯上述任何一項條例,本站將立即處以停權處份,並追究相關法律責任。 ")]),_c('div',[_vm._v(" 7. 本公司有權利中止取消您的重複可疑訂單。 ")])])]),_c('div',{staticClass:"RegistTerm__block"},[_c('div',{staticClass:"RegistTerm__title"},[_vm._v(" 會員註冊義務： ")]),_c('div',{staticClass:"RegistTerm__subTitle"},[_vm._v(" 為了能使用本服務,會員同意以下事項： ")]),_c('div',{staticClass:"RegistTerm__info"},[_c('div',[_vm._v(" 依本服務註冊表之提示提供會員本人正確、最新的資料，且不得以第三人之名義註冊為會員。每位會員僅能註冊登錄一個帳號,不可重覆註冊登錄。 ")]),_c('div',[_vm._v(" 即時維持並更新會員個人資料，確保其正確性，以獲取最佳之服務。 ")]),_c('div',[_vm._v(" 若會員提供任何錯誤或不實的資料、或未按指示提供資料、或欠缺必要之資料、或有重覆註冊帳號等情事時，藻作坊有權不經事先通知，逕行暫停或終止會員的帳號，並拒絕會員使用本服務之全部或一部。 ")])])]),_c('div',{staticClass:"RegistTerm__block"},[_c('div',{staticClass:"RegistTerm__title"},[_vm._v(" 會員帳號及密碼安全： ")]),_c('div',{staticClass:"RegistTerm__info"},[_vm._v(" 1. 完成本服務的登記程序之後，會員將取得一個特定之密碼及會員帳號，維持密碼及帳號之機密安全，是會員的責任。任何依照規定方法輸入會員帳號及密碼與登入資料一致時，無論是否由本人親自輸入，均將推定為會員本人所使用，利用該密碼及帳號所進行的一切行動，會員本人應負完全責任。 ")]),_c('div',{staticClass:"RegistTerm__info"},[_c('div',[_vm._v(" 會員的密碼或帳號遭到盜用或有其他任何安全問題發生時，會員將立即通知藻作坊。 ")]),_c('div',[_vm._v(" 每次連線完畢，均結束會員的帳號使用。 ")]),_c('div',[_vm._v(" 會員的帳號、密碼及會員權益均僅供會員個人使用及享有，不得轉借、轉讓他人或與他人合用。 ")]),_c('div',[_vm._v(" 帳號及密碼遭盜用、不當使用或其他藻作坊無法辯識是否為本人親自使用之情況時，對此所致之損害，除證明係因可歸責於藻作坊之事由所致，藻作坊將不負任何責任。 ")]),_c('div',[_vm._v(" 藻作坊若知悉會員之帳號密碼確係遭他人冒用時，將立即暫停該帳號之使用(含該帳號所生交易之處理)。 ")]),_c('div',[_vm._v(" 會員需定期自行更改密碼。 ")]),_c('div',[_vm._v(" 會員應自行在其所使用之電腦設備或行動裝置上安裝防護軟體。 ")])])]),_c('div',{staticClass:"RegistTerm__agree"},[_c('label',{attrs:{"for":""}},[_c('input',{attrs:{"id":"","type":"checkbox","name":""}}),_vm._v(" 我已經詳細閱讀並同意 ")])]),_c('div',{staticClass:"RegistTerm__next"},[_c('button',{staticClass:"RegistTerm__nextBtn"},[_c('div',{staticClass:"RegistTerm__nextText"},[_vm._v(" 下一步 ")]),_c('div',{staticClass:"RegistTerm__nextBall"})])])])}]


// CONCATENATED MODULE: ./src/pages/RegistTerm/index.vue?vue&type=template&id=6d9dd502

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/RegistTerm/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//



/* harmony default export */ var RegistTermvue_type_script_lang_js = ({
  name: 'RegistTerm',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/RegistTerm/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_RegistTermvue_type_script_lang_js = (RegistTermvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/RegistTerm/style.scss?vue&type=style&index=0&prod&lang=scss&external
var RegistTerm_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("45bb");

// CONCATENATED MODULE: ./src/pages/RegistTerm/index.vue






/* normalize component */

var RegistTerm_component = Object(componentNormalizer["a" /* default */])(
  pages_RegistTermvue_type_script_lang_js,
  RegistTermvue_type_template_id_6d9dd502_render,
  RegistTermvue_type_template_id_6d9dd502_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RegistTerm = (RegistTerm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Coupon/index.vue?vue&type=template&id=55ddc718
var Couponvue_type_template_id_55ddc718_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Coupon Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"DISCOUNT COUPON","zh":"我的折價券"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'DISCOUNT COUPON', path: '/coupon.html'}]}})],1)]),_c('Tabs'),_vm._m(0)],1)}
var Couponvue_type_template_id_55ddc718_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"Coupon__wrap"},[_c('div',{staticClass:"Coupon__title"},[_vm._v(" 我的折價券 / ")]),_c('div',{staticClass:"Coupon__tabs"},[_c('button',{staticClass:"active"},[_vm._v(" 可使用 ")]),_c('button',[_vm._v(" 已使用 ")]),_c('button',[_vm._v(" 已過期 ")])]),_c('div',{staticClass:"Coupon__search"},[_c('input',{staticClass:"Coupon__searchInput",attrs:{"id":"","type":"text","name":"","placeholder":"輸入折扣碼"}}),_c('button',{staticClass:"Coupon__searchBtn"},[_vm._v(" 領取 ")])]),_c('div',{staticClass:"Coupon__couponList"},[_c('div',{staticClass:"Coupon__coupon"},[_c('div',{staticClass:"Coupon__price"},[_vm._v(" ＄50 ")]),_c('div',{staticClass:"Coupon__info"},[_c('div',{staticClass:"Coupon__infoTitle"},[_vm._v(" 首次購物 折$50 ")]),_c('div',{staticClass:"Coupon__infoDateTitle"},[_vm._v(" 使用日期 ")]),_c('div',{staticClass:"Coupon__infoDate"},[_vm._v(" 2024/07/01～2024/07/31 ")])])]),_c('div',{staticClass:"Coupon__coupon"},[_c('div',{staticClass:"Coupon__price"},[_vm._v(" ＄150 ")]),_c('div',{staticClass:"Coupon__info"},[_c('div',{staticClass:"Coupon__infoTitle"},[_vm._v(" 會員專屬 折$150 ")]),_c('div',{staticClass:"Coupon__infoDateTitle"},[_vm._v(" 使用日期 ")]),_c('div',{staticClass:"Coupon__infoDate"},[_vm._v(" 2024/07/01～2024/07/14 ")])])]),_c('div',{staticClass:"Coupon__coupon"},[_c('div',{staticClass:"Coupon__price"},[_vm._v(" 9 "),_c('span',[_vm._v(" 折 ")])]),_c('div',{staticClass:"Coupon__info"},[_c('div',{staticClass:"Coupon__infoTitle"},[_vm._v(" 會員生日 當月9折 ")]),_c('div',{staticClass:"Coupon__infoDateTitle"},[_vm._v(" 使用日期 ")]),_c('div',{staticClass:"Coupon__infoDate"},[_vm._v(" 2024/07/01～2024/07/31 ")])])]),_c('div',{staticClass:"Coupon__coupon"},[_c('div',{staticClass:"Coupon__price"},[_vm._v(" 9 "),_c('span',[_vm._v(" 折 ")])]),_c('div',{staticClass:"Coupon__info"},[_c('div',{staticClass:"Coupon__infoTitle"},[_vm._v(" 會員生日 當月9折 ")]),_c('div',{staticClass:"Coupon__infoDateTitle"},[_vm._v(" 使用日期 ")]),_c('div',{staticClass:"Coupon__infoDate"},[_vm._v(" 2024/07/01～2024/07/31 ")])])])])])])}]


// CONCATENATED MODULE: ./src/pages/Coupon/index.vue?vue&type=template&id=55ddc718

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/index.vue?vue&type=template&id=26afb512
var Tabsvue_type_template_id_26afb512_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Tabs"},[_c('div',{staticClass:"Tabs__container"},[_c('div',{staticClass:"Tabs__content"},[_c('router-link',{class:{active: _vm.isActive('/member.html')},attrs:{"to":{ name: 'Member' }}},[_vm._v(" 會員中心 ")]),_c('router-link',{class:{active: _vm.isActive('/orderStatus.html')},attrs:{"to":{ name: 'OrderStatus' }}},[_vm._v(" 訂單查詢 ")]),_c('router-link',{class:{active: _vm.isActive('/collect.html')},attrs:{"to":{ name: 'Collect' }}},[_vm._v(" 我的收藏 ")]),_c('router-link',{class:{active: _vm.isActive('/coupon.html')},attrs:{"to":{ name: 'Coupon' }}},[_vm._v(" 我的折價券 ")]),_c('router-link',{class:{active: _vm.isActive('/bonus.html')},attrs:{"to":{ name: 'Bonus' }}},[_vm._v(" 我的紅利點數 ")])],1)])])}
var Tabsvue_type_template_id_26afb512_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tabs/index.vue?vue&type=template&id=26afb512

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//
//


/* harmony default export */ var Tabsvue_type_script_lang_js = ({
  name: 'ProjectFooter',
  setup(props, context) {
    const isActive = path => {
      const pathname = window.location.pathname;
      return pathname.indexOf(path) !== -1;
    };
    return {
      isActive
    };
  }
});
// CONCATENATED MODULE: ./src/components/Tabs/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Tabsvue_type_script_lang_js = (Tabsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Tabs/index.vue?vue&type=style&index=0&id=26afb512&prod&lang=scss
var Tabsvue_type_style_index_0_id_26afb512_prod_lang_scss = __webpack_require__("6d2f");

// CONCATENATED MODULE: ./src/components/Tabs/index.vue






/* normalize component */

var Tabs_component = Object(componentNormalizer["a" /* default */])(
  components_Tabsvue_type_script_lang_js,
  Tabsvue_type_template_id_26afb512_render,
  Tabsvue_type_template_id_26afb512_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tabs = (Tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Coupon/index.vue?vue&type=script&lang=js
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




/* harmony default export */ var Couponvue_type_script_lang_js = ({
  name: 'Coupon',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb,
    Tabs: Tabs
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Coupon/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Couponvue_type_script_lang_js = (Couponvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Coupon/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Coupon_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("4f8b");

// CONCATENATED MODULE: ./src/pages/Coupon/index.vue






/* normalize component */

var Coupon_component = Object(componentNormalizer["a" /* default */])(
  pages_Couponvue_type_script_lang_js,
  Couponvue_type_template_id_55ddc718_render,
  Couponvue_type_template_id_55ddc718_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Coupon = (Coupon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Collect/index.vue?vue&type=template&id=0187db35
var Collectvue_type_template_id_0187db35_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Collect Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"TRACKING LIST","zh":"我的收藏"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'TRACKING LIST', path: '/collect.html'}]}})],1)]),_c('Tabs'),_vm._m(0)],1)}
var Collectvue_type_template_id_0187db35_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"Collect__wrap"},[_c('div',{staticClass:"Collect__title"},[_vm._v(" 我的收藏 / ")]),_c('div',{staticClass:"Collect_cart"},[_c('div',{staticClass:"Collect_cart-row Collect_cart-header"},[_c('div',{staticClass:"Collect_cart-cell"},[_vm._v(" 商品圖 ")]),_c('div',{staticClass:"Collect_cart-cell"},[_vm._v(" 商品資訊 ")]),_c('div',{staticClass:"Collect_cart-cell"},[_vm._v(" 數量 ")]),_c('div',{staticClass:"Collect_cart-cell"},[_vm._v(" 單價 ")]),_c('div',{staticClass:"Collect_cart-cell"},[_vm._v(" 購買狀態 ")]),_c('div',{staticClass:"Collect_cart-cell"})]),_c('div',{staticClass:"Collect_cart-body"},[_c('div',{staticClass:"Collect_cart-row"},[_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product-pic"},[_c('img',{attrs:{"src":"/soho/img/collect/collect_item1.png","alt":""}})])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_name"},[_vm._v(" 六色海藻 ")])]),_c('div',{staticClass:"Collect_cart-cell product_amount"},[_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_price"},[_vm._v(" $330 ")])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_status"},[_c('button',[_vm._v("加入購物車")]),_c('button',{staticClass:"secondary"},[_vm._v(" 立即購買 ")])])]),_c('div',{staticClass:"Collect_cart-cell product_delete "},[_c('button',{})])]),_c('div',{staticClass:"Collect_cart-row"},[_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product-pic"},[_c('img',{attrs:{"src":"/soho/img/collect/collect_item2.png","alt":""}})])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_name"},[_vm._v(" 昆布鹽 ")])]),_c('div',{staticClass:"Collect_cart-cell product_amount"},[_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_price"},[_vm._v(" $230 ")])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_status"},[_c('button',[_vm._v("加入購物車")]),_c('button',{staticClass:"secondary"},[_vm._v(" 立即購買 ")])])]),_c('div',{staticClass:"Collect_cart-cell product_delete"},[_c('button',{})])]),_c('div',{staticClass:"Collect_cart-row"},[_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product-pic"},[_c('img',{attrs:{"src":"/soho/img/collect/collect_item3.png","alt":""}})])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_name"},[_vm._v(" 六色海藻組合 ")])]),_c('div',{staticClass:"Collect_cart-cell product_amount"},[_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_price"},[_vm._v(" $890 ")])]),_c('div',{staticClass:"Collect_cart-cell"},[_c('div',{staticClass:"product_status"},[_c('button',[_vm._v("加入購物車")]),_c('button',{staticClass:"secondary"},[_vm._v(" 立即購買 ")])])]),_c('div',{staticClass:"Collect_cart-cell product_delete "},[_c('button',{})])])])])])])}]


// CONCATENATED MODULE: ./src/pages/Collect/index.vue?vue&type=template&id=0187db35

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Collect/index.vue?vue&type=script&lang=js
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
//
//




/* harmony default export */ var Collectvue_type_script_lang_js = ({
  name: 'Collect',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb,
    Tabs: Tabs
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Collect/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Collectvue_type_script_lang_js = (Collectvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Collect/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Collect_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("ebf7");

// CONCATENATED MODULE: ./src/pages/Collect/index.vue






/* normalize component */

var Collect_component = Object(componentNormalizer["a" /* default */])(
  pages_Collectvue_type_script_lang_js,
  Collectvue_type_template_id_0187db35_render,
  Collectvue_type_template_id_0187db35_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Collect = (Collect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Bonus/index.vue?vue&type=template&id=5b2fe5bc
var Bonusvue_type_template_id_5b2fe5bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Bonus Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"BONUS POINTS","zh":"我的紅利點數"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'BONUS POINTS', path: '/Bonus.html'}]}})],1)]),_c('Tabs'),_c('div',{staticClass:"container"},[_c('div',{staticClass:"Bonus__wrap"},[_c('div',{staticClass:"Bonus__title"},[_vm._v(" 我的紅利點數 / ")]),_vm._m(0),_vm._m(1),_c('PageControl')],1)])],1)}
var Bonusvue_type_template_id_5b2fe5bc_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Bonus_total"},[_vm._v(" 目前紅利點數為 "),_c('span',[_vm._v("100")]),_vm._v(" 點 ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Bonus_table"},[_c('div',{staticClass:"Bonus_table-row Bonus_table-header"},[_c('div',{staticClass:"Bonus_table-cell"},[_vm._v(" 日期 ")]),_c('div',{staticClass:"Bonus_table-cell"},[_vm._v(" 訂單編號 ")]),_c('div',{staticClass:"Bonus_table-cell"},[_vm._v(" 連結到訂單 ")]),_c('div',{staticClass:"Bonus_table-cell"},[_vm._v(" 轉入點數 ")]),_c('div',{staticClass:"Bonus_table-cell"},[_vm._v(" 使用點數 ")]),_c('div',{staticClass:"Bonus_table-cell"},[_vm._v(" 到期日 ")])]),_c('div',{staticClass:"Bonus_table-body"},[_c('div',{staticClass:"Bonus_table-row"},[_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2024/06/02 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" DW123456 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_c('a',{attrs:{"href":"/soho/orderStatus.html"}},[_vm._v("DW123456")])])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" +30 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" -50 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2025/12/31 ")])])]),_c('div',{staticClass:"Bonus_table-row"},[_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2024/05/29 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" HP234567 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_c('a',{attrs:{"href":"/soho/orderStatus.html"}},[_vm._v("HP234567")])])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" +120 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" - ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2025/12/31 ")])])]),_c('div',{staticClass:"Bonus_table-row"},[_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2024/05/02 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" – ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_c('a',{attrs:{"href":"/soho/orderStatus.html"}},[_vm._v("-")])])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" +30 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" - ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2025/12/31 ")])])]),_c('div',{staticClass:"Bonus_table-row"},[_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2024/05/17 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" - ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_c('a',{attrs:{"href":"/soho/orderStatus.html"}},[_vm._v("-")])])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" -30 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" - ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2025/12/31 ")])])]),_c('div',{staticClass:"Bonus_table-row"},[_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2023/12/22 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" LO345678 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_c('a',{attrs:{"href":"/soho/orderStatus.html"}},[_vm._v("LO345678")])])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" +30 ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" - ")])]),_c('div',{staticClass:"Bonus_table-cell"},[_c('div',{staticClass:"text"},[_vm._v(" 2025/12/31 ")])])])])])}]


// CONCATENATED MODULE: ./src/pages/Bonus/index.vue?vue&type=template&id=5b2fe5bc

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Bonus/index.vue?vue&type=script&lang=js
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
//
//
//
//





/* harmony default export */ var Bonusvue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb,
    Tabs: Tabs,
    PageControl: PageControl
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Bonus/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Bonusvue_type_script_lang_js = (Bonusvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Bonus/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Bonus_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("dc75");

// CONCATENATED MODULE: ./src/pages/Bonus/index.vue






/* normalize component */

var Bonus_component = Object(componentNormalizer["a" /* default */])(
  pages_Bonusvue_type_script_lang_js,
  Bonusvue_type_template_id_5b2fe5bc_render,
  Bonusvue_type_template_id_5b2fe5bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Bonus = (Bonus_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Member/index.vue?vue&type=template&id=3770976e
var Membervue_type_template_id_3770976e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Member Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"MEMBER ACCOUNT","zh":"會員中心"}}),_c('Breadcrumb',{attrs:{"link-data":[{ title: 'MEMBER ACCOUNT', path: '/Member.html' }]}})],1)]),_c('Tabs'),_vm._m(0)],1)}
var Membervue_type_template_id_3770976e_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('form',{staticClass:"Member__wrap"},[_c('div',{staticClass:"Member_avatar"},[_c('div',{staticClass:"Member_avatar-pic"},[_c('img',{attrs:{"src":"/soho/img/member/member_people.png","alt":""}}),_c('button',[_c('img',{attrs:{"src":"/soho/img/member/member_edit.png","alt":""}})])]),_c('div',{staticClass:"Member_avatar-info"},[_c('div',{staticClass:"Member_avatar-name"},[_vm._v(" 吳小可 ")]),_c('div',{staticClass:"Member_avatar-type"},[_vm._v(" 一般會員 ")])])]),_c('div',{staticClass:"Member_info"},[_c('div',{staticClass:"Member_info-data"},[_c('div',{staticClass:"Member_title"},[_vm._v(" 會員資料 / ")]),_c('div',{staticClass:"Member_info-form"},[_c('div',{staticClass:"Member_info-form-item required"},[_c('label',{attrs:{"for":"name"}},[_vm._v("姓名")]),_c('input',{attrs:{"id":"name","type":"text","name":"name","value":"吳小可","placeholder":"請填入真實姓名"}})]),_c('div',{staticClass:"Member_info-form-item"},[_c('label',{attrs:{"for":"birthday"}},[_vm._v("生日")]),_c('input',{attrs:{"id":"birthday","type":"date","name":"birthday","placeholder":""}})]),_c('div',{staticClass:"Member_info-form-item"},[_c('label',[_vm._v("性別")]),_c('div',{staticClass:"Member_info-form-item-radio"},[_c('label',{staticClass:"radio_wrap"},[_c('input',{attrs:{"name":"gender","type":"radio"}}),_c('span',{staticClass:"checkmark"},[_vm._v("男生")])]),_c('label',{staticClass:"radio_wrap"},[_c('input',{attrs:{"name":"gender","type":"radio","checked":"checked"}}),_c('span',{staticClass:"checkmark"},[_vm._v("女生")])])])]),_c('div',{staticClass:"Member_info-form-item required"},[_c('label',{attrs:{"for":"phone"}},[_vm._v("聯絡電話")]),_c('input',{attrs:{"id":"phone","type":"text","name":"phone","value":"0901138130","placeholder":"請填入手機號碼"}})]),_c('div',{staticClass:"Member_info-form-item required"},[_c('label',{attrs:{"for":"email"}},[_vm._v("電子信箱")]),_c('input',{attrs:{"id":"email","type":"text","name":"email","value":"136designco.ltd@gmail.com","placeholder":"請輸入電子信箱"}})]),_c('div',{staticClass:"Member_info-form-item required "},[_c('label',{attrs:{"for":"address"}},[_vm._v("收件地址")]),_c('div',{staticClass:"address-select-wrap"},[_c('div',{staticClass:"customSelect"},[_c('select',{attrs:{"address-select-wrap":"","name":"city"}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v(" 縣市 ")])])]),_c('div',{staticClass:"customSelect"},[_c('select',{attrs:{"name":"area"}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v(" 區域 ")])])]),_c('input',{attrs:{"id":"code","type":"text","name":"code","value":"000","placeholder":"郵遞區號"}})]),_c('input',{attrs:{"id":"address","type":"text","name":"address","placeholder":"街道地址"}})])])]),_c('div',{staticClass:"Member_info-password"},[_c('div',{staticClass:"Member_info-passwordOptions"},[_c('div',{staticClass:"Member_title"},[_vm._v(" 密碼 / ")]),_c('div',{staticClass:"Member_info-form-item required"},[_c('label',{attrs:{"for":"oldPwd"}},[_vm._v("舊密碼")]),_c('input',{attrs:{"id":"oldPwd","type":"password","name":"oldPwd","placeholder":"0901138130"}})]),_c('div',{staticClass:"Member_info-form-item required"},[_c('label',{attrs:{"for":"newPwd"}},[_vm._v("新密碼")]),_c('input',{attrs:{"id":"newPwd","type":"password","name":"newPwd","placeholder":"136136136"}})]),_c('div',{staticClass:"Member_info-form-item required"},[_c('label',{attrs:{"for":"confirmPwd"}},[_vm._v("確認密碼")]),_c('input',{attrs:{"id":"confirmPwd","type":"password","name":"confirmPwd","placeholder":"136136136"}})])])])]),_c('div',{staticClass:"Member_footer"},[_c('button',{staticClass:"active",attrs:{"id":"submit-client-form"}},[_vm._v(" 更 新 ")])])])])}]


// CONCATENATED MODULE: ./src/pages/Member/index.vue?vue&type=template&id=3770976e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Member/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//
//




/* harmony default export */ var Membervue_type_script_lang_js = ({
  name: 'Member',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb,
    Tabs: Tabs
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Member/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Membervue_type_script_lang_js = (Membervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Member/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Member_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("14af");

// CONCATENATED MODULE: ./src/pages/Member/index.vue






/* normalize component */

var Member_component = Object(componentNormalizer["a" /* default */])(
  pages_Membervue_type_script_lang_js,
  Membervue_type_template_id_3770976e_render,
  Membervue_type_template_id_3770976e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Member = (Member_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ReturnsAndRefunds/index.vue?vue&type=template&id=166659e3
var ReturnsAndRefundsvue_type_template_id_166659e3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ReturnsAndRefunds Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"RETURNS & REFUNDS","zh":"退換貨說明"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'RETURNS & REFUNDS', path: '/returnsAndRefunds.html'}]}})],1)]),_vm._m(0)])}
var ReturnsAndRefundsvue_type_template_id_166659e3_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h2',{staticClass:"ReturnsAndRefunds_pageTitle"},[_vm._v(" 退換貨說明 / ")]),_c('div',{staticClass:"ReturnsAndRefunds_block"},[_c('h3',{staticClass:"ReturnsAndRefunds_subTitle"},[_vm._v(" 商品鑑賞期 ")]),_c('p',{staticClass:"ReturnsAndRefunds_text"},[_vm._v(" 除易於腐敗、保存期限較短（退貨／取消時即將逾期）類之食品、客製化商品、當期之報紙、期刊或雜誌、經拆封之影音商品或電腦軟體、遊戲點數卡、其他點數卡、已拆封之個人衛生用品等按「通訊交易解除權合理例外情事適用準則」不適用 7天鑑賞期之商品外，從商品抵達您手上開始即擁有７天商品鑑賞期 （７天含假日）。 ")]),_c('p',{staticClass:"ReturnsAndRefunds_text"},[_vm._v(" 如有退貨需求，請於收到商品７天內聯絡客服人員，並提供「姓名」、「訂單編號」、「連絡電話」、「退貨商品名稱」、「退貨原因及照片」等資料，客服人員收到後將會協助您進行退換貨。 ")])]),_c('div',{staticClass:"ReturnsAndRefunds_block"},[_c('h3',{staticClass:"ReturnsAndRefunds_subTitle"},[_vm._v(" 退貨須知 ")]),_c('p',{staticClass:"ReturnsAndRefunds_text"},[_vm._v(" 退貨商品須為未經使用，且無非人為瑕疵所造成的污損、故障，消保法保障 7 天鑑賞期僅供您猶豫並確認商品是否符合您的需求，並非商品的試用期；如本商店有提示您者，請保留完整的原始包裝（含外包裝紙盒），否則恕不接受退貨。 ")]),_c('p',{staticClass:"ReturnsAndRefunds_text"},[_vm._v(" 以下情況無法接受退貨： "),_c('ul',[_c('li',{staticClass:"ReturnsAndRefunds_text-highlight"},[_vm._v(" 超過 7 天的商品鑑賞期。 ")]),_c('li',[_vm._v("商品已拆封使用，或因人為因素而產生的破壞，如：污損、故障、損毀、磨損、擦傷、刮傷、髒污。")]),_c('li',{staticClass:"ReturnsAndRefunds_text-highlight"},[_vm._v(" 退貨商品包裝破損不完整，或發票、配件不齊者。 ")]),_c('li',[_vm._v("惡意或大量退貨。")])])])]),_c('div',{staticClass:"ReturnsAndRefunds_block"},[_c('h3',{staticClass:"ReturnsAndRefunds_subTitle"},[_vm._v(" 退貨流程 ")]),_c('p',{staticClass:"ReturnsAndRefunds_text"},[_vm._v(" 聯絡客服人員 → 確認可退貨 → 準備完整商品及發票 → 提供收件時間及聯絡資訊、地址 → 將由商店委託之物流進行回收。 ")])]),_c('div',{staticClass:"ReturnsAndRefunds_block"},[_c('h3',{staticClass:"ReturnsAndRefunds_subTitle"},[_vm._v(" 退款說明 ")]),_c('p',{staticClass:"ReturnsAndRefunds_text"},[_c('ul',[_c('li',[_vm._v("信用卡付款者：確認退貨成功後，會直接把款項刷退至原付款的信用卡帳號中。")]),_c('li',[_vm._v("貨到付款者：確認退貨成功後，則將退款費用轉帳至您提供的銀行帳戶中。")])])])])])}]


// CONCATENATED MODULE: ./src/pages/ReturnsAndRefunds/index.vue?vue&type=template&id=166659e3

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ReturnsAndRefunds/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//



/* harmony default export */ var ReturnsAndRefundsvue_type_script_lang_js = ({
  name: 'ReturnsAndRefunds',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/ReturnsAndRefunds/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_ReturnsAndRefundsvue_type_script_lang_js = (ReturnsAndRefundsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/ReturnsAndRefunds/style.scss?vue&type=style&index=0&prod&lang=scss&external
var ReturnsAndRefunds_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("dd7f");

// CONCATENATED MODULE: ./src/pages/ReturnsAndRefunds/index.vue






/* normalize component */

var ReturnsAndRefunds_component = Object(componentNormalizer["a" /* default */])(
  pages_ReturnsAndRefundsvue_type_script_lang_js,
  ReturnsAndRefundsvue_type_template_id_166659e3_render,
  ReturnsAndRefundsvue_type_template_id_166659e3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ReturnsAndRefunds = (ReturnsAndRefunds_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/PaymentInstructions/index.vue?vue&type=template&id=89bcc968
var PaymentInstructionsvue_type_template_id_89bcc968_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"PaymentInstructions Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"PAYMENT INSTRUCTIONS","zh":"付款說明"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'PAYMENT INSTRUCTIONS', path: '/paymentInstructions.html'}]}})],1)]),_vm._m(0)])}
var PaymentInstructionsvue_type_template_id_89bcc968_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h2',{staticClass:"PaymentInstructions_pageTitle"},[_vm._v(" 付款說明 / ")]),_c('div',{staticClass:"PaymentInstructions_block"},[_c('h3',{staticClass:"PaymentInstructions_subTitle"},[_vm._v(" Q1.付款方式？ ")]),_c('p',{staticClass:"PaymentInstructions_text"},[_vm._v(" 二種付款方式，有信用卡線上刷卡、ATM轉帳。 ")]),_c('p',{staticClass:"PaymentInstructions_text"},[_vm._v(" 1.信用卡線上刷卡(VISA/MasterCard/JCB)說明"),_c('br'),_vm._v(" 採用永豐銀行刷卡系統信用卡付費機制平台，提供了絕對安全可靠的網路付款機制。您可直接於網路上付款，在安全與方便之間取得極佳的平衡點。繳款完畢後，無須通知我們，我們會直接與銀行對帳確認。"),_c('br'),_vm._v(" ※線上刷卡會需要一些時間進行作業，過程中請勿關閉頁面或重新整理頁面，會影響交易流程，並導致入帳作業延遲或有誤。 ")]),_c('p',{staticClass:"PaymentInstructions_text"},[_vm._v(" 2.ATM轉帳說明："),_c('br'),_vm._v(" 請您於下單後三天內，依照訂單明細提供之匯款帳號(如下)至ATM臨櫃轉帳或線上轉帳，匯款完成後請您登入會員並至會員專區中「訂單查詢」，並於該筆訂單留言填寫您『匯出帳戶的末5碼』或來電告知，以利我們確認是否收到貨款。"),_c('br'),_vm._v(" 銀行代號：004台灣銀行"),_c('br'),_vm._v(" 分行名稱：XX分行(分行代號:000)"),_c('br'),_vm._v(" 帳號：000-001-000000"),_c('br'),_vm._v(" 戶名：藻作坊有限公司 ")])]),_c('div',{staticClass:"PaymentInstructions_block"},[_c('h3',{staticClass:"PaymentInstructions_subTitle"},[_vm._v(" Q2.可以變更付款方式嗎？ ")]),_c('p',{staticClass:"PaymentInstructions_text"},[_vm._v(" 由於不同付款方式是採用不同的作業系統，且受限於銀行規定，本網站目前尚未提供您直接更改付款方式的服務。"),_c('br'),_vm._v(" 請於上班時間使用免付費專線0800-000000（星期一 ~ 星期五，8:30 ~ 17:30 ），我們將有專員協助您處理。 ")])]),_c('div',{staticClass:"PaymentInstructions_block"},[_c('h3',{staticClass:"PaymentInstructions_subTitle"},[_vm._v(" Q3.在網路商店輸入信用卡資料，是否安全？信用卡資料會不會外流？ ")]),_c('p',{staticClass:"PaymentInstructions_text"},[_vm._v(" 本網路採用SSL(SecureSocket Layer)安全協定，所以非常安全。您個人的資料皆被加密處理，在網路傳輸過程中不會被竊取，敬請安心購買。 ")])]),_c('div',{staticClass:"PaymentInstructions_block"},[_c('h3',{staticClass:"PaymentInstructions_subTitle"},[_vm._v(" Q4.信用卡資料輸入錯誤或失敗，要如何處理？ ")]),_c('p',{staticClass:"PaymentInstructions_text"},[_vm._v(" 若訂購商品時因信用卡的號碼或有效日期輸入錯誤、或某種理由而造成無法使用信用卡"),_c('br'),_vm._v(" 請於上班時間使用免付費專線與我們聯絡：0800-000000（星期一 ~ 星期五，8:30 ~ 17:30 ），我們將協助您取消訂單並請您重新購買。 ")])])])}]


// CONCATENATED MODULE: ./src/pages/PaymentInstructions/index.vue?vue&type=template&id=89bcc968

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/PaymentInstructions/index.vue?vue&type=script&lang=js
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
//
//



/* harmony default export */ var PaymentInstructionsvue_type_script_lang_js = ({
  name: 'PaymentInstructions',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/PaymentInstructions/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_PaymentInstructionsvue_type_script_lang_js = (PaymentInstructionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/PaymentInstructions/style.scss?vue&type=style&index=0&prod&lang=scss&external
var PaymentInstructions_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("af28");

// CONCATENATED MODULE: ./src/pages/PaymentInstructions/index.vue






/* normalize component */

var PaymentInstructions_component = Object(componentNormalizer["a" /* default */])(
  pages_PaymentInstructionsvue_type_script_lang_js,
  PaymentInstructionsvue_type_template_id_89bcc968_render,
  PaymentInstructionsvue_type_template_id_89bcc968_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PaymentInstructions = (PaymentInstructions_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/OrderStatus/index.vue?vue&type=template&id=6b7c1d88
var OrderStatusvue_type_template_id_6b7c1d88_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"OrderStatus Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"ORDER STATUS","zh":"訂單查詢"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'ORDER STATUS', path: '/orderStatus.html'}]}})],1)]),_c('Tabs'),_vm._m(0)],1)}
var OrderStatusvue_type_template_id_6b7c1d88_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h2',{staticClass:"OrderStatus_pageTitle"},[_vm._v(" 訂單查詢 / ")]),_c('div',[_c('div',{staticClass:"OrderStatus_item active",attrs:{"data-good-id":"20240601000"}},[_c('div',{staticClass:"OrderStatus_itemStatus unpaid"},[_c('span',[_vm._v("尚未付款")])]),_c('div',{staticClass:"OrderStatus_content"},[_c('div',{staticClass:"OrderStatus_text OrderStatus_text-highlight"},[_c('span',[_vm._v("訂單編號：")]),_c('span',[_vm._v("20240601000")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("訂單成立：")]),_c('span',[_vm._v("2024/06/01 00:00")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款方式：")]),_c('span',[_vm._v("信用卡")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款狀態：")]),_c('span',[_vm._v("尚未寄件")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款時間：")]),_c('span',[_vm._v("-")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("實付金額：")]),_c('span',[_vm._v("＄1490")])])]),_c('div',{staticClass:"OrderStatus_itemTrigger"},[_c('button',[_vm._v("查看訂單明細 "),_c('span',{staticClass:"OrderStatus_itemTriggerArrow"})])]),_c('div',{staticClass:"OrderStatus_itemGoods"},[_c('div',{staticClass:"OrderStatus_itemGoodsHeader"},[_c('div'),_c('div',[_vm._v("品名")]),_c('div',[_vm._v("數量")]),_c('div',[_vm._v("單價")]),_c('div',[_vm._v("小計")])]),_c('div',{staticClass:"OrderStatus_itemGood"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/orderStatus/orderStatus_item1.png"}})]),_c('div',[_vm._v("六色海藻")]),_c('div',[_vm._v("2")]),_c('div',[_vm._v("$330")]),_c('div',[_vm._v("$660")])]),_c('div',{staticClass:"OrderStatus_itemGood"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/orderStatus/orderStatus_item2.png"}})]),_c('div',[_vm._v("昆布鹽")]),_c('div',[_vm._v("1")]),_c('div',[_vm._v("$230")]),_c('div',[_vm._v("$230")])]),_c('div',{staticClass:"OrderStatus_itemGood"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/orderStatus/orderStatus_item3.png"}})]),_c('div',[_vm._v("六色海藻組合")]),_c('div',[_vm._v("1")]),_c('div',[_vm._v("$890")]),_c('div',[_vm._v("$890")])])])]),_c('div',{staticClass:"OrderStatus_item",attrs:{"data-good-id":"20240522030"}},[_c('div',{staticClass:"OrderStatus_itemStatus"},[_c('span',[_vm._v("付款完成")])]),_c('div',{staticClass:"OrderStatus_content"},[_c('div',{staticClass:"OrderStatus_text OrderStatus_text-highlight"},[_c('span',[_vm._v("訂單編號：")]),_c('span',[_vm._v("20240522030")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("訂單成立：")]),_c('span',[_vm._v("2024/05/22 21:34")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款方式：")]),_c('span',[_vm._v("信用卡")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款狀態：")]),_c('span',[_vm._v("訂單已出貨")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款時間：")]),_c('span',[_vm._v("2024/05/22 22:49")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("實付金額：")]),_c('span',[_vm._v("＄5000")])])]),_c('div',{staticClass:"OrderStatus_itemTrigger"},[_c('button',[_vm._v("查看訂單明細 "),_c('span',{staticClass:"OrderStatus_itemTriggerArrow"})])]),_c('div',{staticClass:"OrderStatus_itemGoods"},[_c('div',{staticClass:"OrderStatus_itemGoodsHeader"},[_c('div'),_c('div',[_vm._v("品名")]),_c('div',[_vm._v("數量")]),_c('div',[_vm._v("單價")]),_c('div',[_vm._v("小計")])]),_c('div',{staticClass:"OrderStatus_itemGood"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/orderStatus/orderStatus_item1.png"}})]),_c('div',[_vm._v("六色海藻")]),_c('div',[_vm._v("2")]),_c('div',[_vm._v("$330")]),_c('div',[_vm._v("$660")])])])]),_c('div',{staticClass:"OrderStatus_item",attrs:{"data-good-id":"20240322101"}},[_c('div',{staticClass:"OrderStatus_itemStatus"},[_c('span',[_vm._v("付款完成")])]),_c('div',{staticClass:"OrderStatus_content"},[_c('div',{staticClass:"OrderStatus_text OrderStatus_text-highlight"},[_c('span',[_vm._v("訂單編號：")]),_c('span',[_vm._v("20240322101")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("訂單成立：")]),_c('span',[_vm._v("2024/03/22 10:21")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款方式：")]),_c('span',[_vm._v("信用卡")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款狀態：")]),_c('span',[_vm._v("訂單已出貨")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("付款時間：")]),_c('span',[_vm._v("2024/03/23 23:49")])]),_c('div',{staticClass:"OrderStatus_text"},[_c('span',[_vm._v("實付金額：")]),_c('span',[_vm._v("＄4250")])])]),_c('div',{staticClass:"OrderStatus_itemTrigger"},[_c('button',[_vm._v("查看訂單明細 "),_c('span',{staticClass:"OrderStatus_itemTriggerArrow"})])]),_c('div',{staticClass:"OrderStatus_itemGoods"},[_c('div',{staticClass:"OrderStatus_itemGoodsHeader"},[_c('div'),_c('div',[_vm._v("品名")]),_c('div',[_vm._v("數量")]),_c('div',[_vm._v("單價")]),_c('div',[_vm._v("小計")])]),_c('div',{staticClass:"OrderStatus_itemGood"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/orderStatus/orderStatus_item1.png"}})]),_c('div',[_vm._v("六色海藻")]),_c('div',[_vm._v("2")]),_c('div',[_vm._v("$330")]),_c('div',[_vm._v("$660")])])])])])])}]


// CONCATENATED MODULE: ./src/pages/OrderStatus/index.vue?vue&type=template&id=6b7c1d88

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/OrderStatus/index.vue?vue&type=script&lang=js
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




/* harmony default export */ var OrderStatusvue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb,
    Tabs: Tabs
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/OrderStatus/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_OrderStatusvue_type_script_lang_js = (OrderStatusvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/OrderStatus/style.scss?vue&type=style&index=0&prod&lang=scss&external
var OrderStatus_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("ad80");

// CONCATENATED MODULE: ./src/pages/OrderStatus/index.vue






/* normalize component */

var OrderStatus_component = Object(componentNormalizer["a" /* default */])(
  pages_OrderStatusvue_type_script_lang_js,
  OrderStatusvue_type_template_id_6b7c1d88_render,
  OrderStatusvue_type_template_id_6b7c1d88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OrderStatus = (OrderStatus_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Store/index.vue?vue&type=template&id=5f255231
var Storevue_type_template_id_5f255231_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Store Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"STORE","zh":"門市據點"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'STORE', path: '/store.html'}]}})],1)]),_c('div',{staticClass:"container"},[_vm._m(0),_c('PageControl',{staticClass:"Store_PageControl"})],1)])}
var Storevue_type_template_id_5f255231_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Store_blocks"},[_c('div',{staticClass:"Store_block"},[_c('div',{staticClass:"Store_imgs"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item1-1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item1-2.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item1-3.jpg"}})])]),_c('div',{staticClass:"Store_content"},[_c('div',{staticClass:"Store_contentCompany"},[_vm._v(" 總公司 ")]),_c('div',{staticClass:"Store_contentPhone"},[_c('img',{attrs:{"src":"/soho/img/store/icon_phone.png"}}),_vm._v(" 0910-827-867 ")]),_c('div',{staticClass:"Store_contentMail"},[_c('img',{attrs:{"src":"/soho/img/store/icon_mail.png"}}),_vm._v(" gzv6726@dr-seaweed.com.tw ")]),_c('div',{staticClass:"Store_contentTime"},[_c('img',{attrs:{"src":"/soho/img/store/icon_time.png"}}),_vm._v(" AM 9:00-PM 17:00 ")]),_c('div',{staticClass:"Store_contentLocation"},[_c('img',{attrs:{"src":"/soho/img/store/icon_location.png"}}),_vm._v(" 高雄市前鎮區擴建路1-29號13樓 ")]),_c('div',{staticClass:"Store_contentLink"},[_c('a',{attrs:{"href":"/soho/storeContent.html"}})])])]),_c('div',{staticClass:"Store_block"},[_c('div',{staticClass:"Store_imgs"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item2-1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item2-2.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item2-3.jpg"}})])]),_c('div',{staticClass:"Store_content"},[_c('div',{staticClass:"Store_contentCompany"},[_vm._v(" 彩虹門市 ")]),_c('div',{staticClass:"Store_contentPhone"},[_c('img',{attrs:{"src":"/soho/img/store/icon_phone.png"}}),_vm._v(" 0910-827-867 ")]),_c('div',{staticClass:"Store_contentMail"},[_c('img',{attrs:{"src":"/soho/img/store/icon_mail.png"}}),_vm._v(" gzv6726@dr-seaweed.com.tw ")]),_c('div',{staticClass:"Store_contentTime"},[_c('img',{attrs:{"src":"/soho/img/store/icon_time.png"}}),_vm._v(" AM 10:30-PM 22:00 ")]),_c('div',{staticClass:"Store_contentLocation"},[_c('img',{attrs:{"src":"/soho/img/store/icon_location.png"}}),_vm._v(" 高雄市左營區高鐵路115號3樓 (新光三越彩虹市集) ")]),_c('div',{staticClass:"Store_contentLink"},[_c('a',{attrs:{"href":"/soho/storeContent.html"}})])])]),_c('div',{staticClass:"Store_block"},[_c('div',{staticClass:"Store_imgs"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item2-1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item2-2.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item2-3.jpg"}})])]),_c('div',{staticClass:"Store_content"},[_c('div',{staticClass:"Store_contentCompany"},[_vm._v(" 檜意門市 ")]),_c('div',{staticClass:"Store_contentPhone"},[_c('img',{attrs:{"src":"/soho/img/store/icon_phone.png"}}),_vm._v(" 0910-827-867 ")]),_c('div',{staticClass:"Store_contentMail"},[_c('img',{attrs:{"src":"/soho/img/store/icon_mail.png"}}),_vm._v(" gzv6726@dr-seaweed.com.tw ")]),_c('div',{staticClass:"Store_contentTime"},[_c('img',{attrs:{"src":"/soho/img/store/icon_time.png"}}),_vm._v(" AM 09:00-PM 18:00 ")]),_c('div',{staticClass:"Store_contentLocation"},[_c('img',{attrs:{"src":"/soho/img/store/icon_location.png"}}),_vm._v(" 嘉義市東區共和路191巷6號 ")]),_c('div',{staticClass:"Store_contentLink"},[_c('a',{attrs:{"href":"/soho/storeContent.html"}})])])])])}]


// CONCATENATED MODULE: ./src/pages/Store/index.vue?vue&type=template&id=5f255231

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Store/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//




/* harmony default export */ var Storevue_type_script_lang_js = ({
  name: 'Store',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb,
    PageControl: PageControl
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Store/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Storevue_type_script_lang_js = (Storevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Store/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Store_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("e93c");

// CONCATENATED MODULE: ./src/pages/Store/index.vue






/* normalize component */

var Store_component = Object(componentNormalizer["a" /* default */])(
  pages_Storevue_type_script_lang_js,
  Storevue_type_template_id_5f255231_render,
  Storevue_type_template_id_5f255231_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Store = (Store_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/StoreContent/index.vue?vue&type=template&id=3523debf
var StoreContentvue_type_template_id_3523debf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"StoreContent Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"STORE","zh":"門市據點"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'STORE', path: '/store.html'}]}})],1)]),_vm._m(0)])}
var StoreContentvue_type_template_id_3523debf_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"StoreContent_block"},[_c('div',{staticClass:"StoreContent_imgs"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item1-1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item1-2.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/store/store_item1-3.jpg"}})])]),_c('ul',{staticClass:"StoreContent_payWay"},[_c('li',[_vm._v("信用卡")]),_c('li',[_vm._v("現金")])]),_c('div',{staticClass:"StoreContent_content"},[_c('div',{staticClass:"StoreContent_contentCompany"},[_vm._v(" 總公司 ")]),_c('div',{staticClass:"StoreContent_contentPhone"},[_c('img',{attrs:{"src":"/soho/img/store/icon_phone.png"}}),_vm._v(" 0910-827-867 ")]),_c('div',{staticClass:"StoreContent_contentMail"},[_c('img',{attrs:{"src":"/soho/img/store/icon_mail.png"}}),_vm._v(" gzv6726@dr-seaweed.com.tw ")]),_c('div',{staticClass:"StoreContent_contentTime"},[_c('img',{attrs:{"src":"/soho/img/store/icon_time.png"}}),_vm._v(" AM 9:00-PM 17:00 ")]),_c('div',{staticClass:"StoreContent_contentLocation"},[_c('img',{attrs:{"src":"/soho/img/store/icon_location.png"}}),_vm._v(" 高雄市前鎮區擴建路1-29號13樓 ")])]),_c('div',{staticClass:"StoreContent_mainLinks"},[_c('a',{attrs:{"href":"https://www.facebook.com/","target":"_blank"}},[_c('span',[_vm._v("前往臉書")]),_c('span',{staticClass:"StoreContent_mainLinkArrow"})]),_c('a',{attrs:{"href":"/soho/news.html"}},[_c('span',[_vm._v("最新活動")]),_c('span',{staticClass:"StoreContent_mainLinkArrow"})])]),_c('div',{staticClass:"StoreContent_note"},[_c('h3',[_vm._v(" 秋相聚有我陪！連假瘋玩遊戲再賺最高$500回饋！ ")]),_c('div',[_vm._v(" 1、活動期間：2024/9/27~2024/10/1"),_c('br'),_vm._v(" 2、活動辦法：活動期間內於App Store/Google Play商店使用「台灣大哥大電信帳單代收」付款，累積消費$500,並於此頁面完成登記,狂賺10%帳單折抵金回饋,每人最高回饋$500,名額限量2,000名,額滿為止請火速參加！(額滿不另行通知)。 ")])]),_c('div',{staticClass:"StoreContent_map"},[_c('iframe',{staticStyle:{"border":"0"},attrs:{"src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.706201454013!2d120.30273659999999!3d22.590089199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e030bf36aaaab%3A0x14a9f80a16da3e98!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A5pO05bu66LevMeS5izMx6JmfMTPmqJM!5e0!3m2!1szh-TW!2stw!4v1724106721224!5m2!1szh-TW!2stw","allowfullscreen":"","loading":"lazy","referrerpolicy":"no-referrer-when-downgrade"}})]),_c('div',{staticClass:"StoreContent_backHandler"},[_c('a',{staticClass:"link",attrs:{"href":"/soho/store.html"}},[_c('span',{staticClass:"arrow"}),_c('span',[_vm._v("回上一頁")])])])])])}]


// CONCATENATED MODULE: ./src/pages/StoreContent/index.vue?vue&type=template&id=3523debf

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/StoreContent/index.vue?vue&type=script&lang=js
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



/* harmony default export */ var StoreContentvue_type_script_lang_js = ({
  name: 'StoreContent',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/StoreContent/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_StoreContentvue_type_script_lang_js = (StoreContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/StoreContent/style.scss?vue&type=style&index=0&prod&lang=scss&external
var StoreContent_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("195a");

// CONCATENATED MODULE: ./src/pages/StoreContent/index.vue






/* normalize component */

var StoreContent_component = Object(componentNormalizer["a" /* default */])(
  pages_StoreContentvue_type_script_lang_js,
  StoreContentvue_type_template_id_3523debf_render,
  StoreContentvue_type_template_id_3523debf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StoreContent = (StoreContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/About/index.vue?vue&type=template&id=7b6942c0
var Aboutvue_type_template_id_7b6942c0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"ABOUT","zh":"關於我們"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'ABOUT', path: '/about.html'}]}})],1)]),_vm._m(0),_vm._m(1),_vm._m(2),_vm._m(3),_vm._m(4),_vm._m(5),_vm._m(6),_vm._m(7)])}
var Aboutvue_type_template_id_7b6942c0_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About_info"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"About_infoText wow fadeInUp"},[_c('div',{staticClass:"title"},[_c('h1',[_vm._v(" 藻作坊 ")]),_c('div',{staticClass:"establish"},[_vm._v(" 於2018年正式成立 ")]),_c('div',{staticClass:"note"},[_vm._v(" 於嘉義市檜意森活村成立第一家門市 ")])]),_c('p',{staticClass:"text"},[_vm._v(" 藻作坊是一家致力於研發海藻商品的企業,海藻對於人體的益處都能在報章雜誌或醫學期刊上找到,但在台灣食用海藻的文化不普及,因消費者不了解如何料理與市面上不常見海藻類的產品而導致對許多家庭主婦與消費者而言是較為陌生的食材。 ")])]),_c('div',{staticClass:"About_infoImg wow fadeIn",attrs:{"data-wow-delay":".5s"}},[_c('img',{attrs:{"src":"/soho/img/about/about_pic1.png"}})])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About_mission"},[_c('div',{staticClass:"container wow fadeInUp"},[_c('h2',[_vm._v("來自大海的恩賜_")]),_c('p',[_vm._v(" 我們希望將大海賜予的恩惠「 海藻 」能讓更多的家庭認識且食用，將產品的料理方式"),_c('br'),_vm._v(" 「簡單化」與「便利化」是我們的目標"),_c('br'),_vm._v(" 幫助每一個忙碌的家庭改善膳食纖維攝取不足的問題，這是我們的使命且我們視為是一種社會責任。 ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About_image"},[_c('div',{staticClass:"wow fadeInLeft"},[_c('img',{attrs:{"src":"/soho/img/about/about_pic2.png"}})]),_c('div',{staticClass:"wow fadeInRight"},[_c('img',{attrs:{"src":"/soho/img/about/about_pic3.png"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About_slogan"},[_c('div',{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s","data-wow-duration":"1s"}},[_c('img',{attrs:{"src":"/soho/img/about/about_slogan.png"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About_registerGift"},[_c('div',{staticClass:"container wow fadeInLeft"},[_c('h2',[_vm._v("註冊禮")]),_c('div',{staticClass:"note"},[_vm._v(" 首次註冊領 "),_c('span',{staticClass:"highlight"},[_vm._v(" $100 ")]),_c('span',{staticClass:"small"},[_vm._v(" 優惠券 ")])]),_c('a',{staticClass:"link",attrs:{"href":"/soho/bonus.html"}},[_vm._v(" 立即領券 "),_c('span',{staticClass:"highlight"},[_vm._v("GO!")]),_c('span',{staticClass:"arrow"},[_c('span')])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About_lineGift"},[_c('div',{staticClass:"container"},[_c('h2',[_vm._v("好友禮")]),_c('span',[_vm._v("加Line 好友領")]),_c('span',{staticClass:"highlight"},[_vm._v("$50")]),_c('span',[_vm._v("優惠券")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About_good"},[_c('div',{staticClass:"About_goodItem wow fadeIn"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/about/about_good1.png"}})]),_c('div',{staticClass:"note"},[_c('div',{staticClass:"title"},[_vm._v(" 官網限定3件組 ")]),_c('div',[_vm._v(" 焙煎胡麻醬 x1"),_c('br'),_vm._v(" 和風胡麻醬 x2 ")]),_c('div',{staticClass:"price"},[_c('span',{staticClass:"originPrice"},[_vm._v("原價 $1,200")]),_c('span',{staticClass:"benefit"},[_vm._v("9折優惠價 $1,080")])])])]),_c('div',{staticClass:"About_goodItem wow fadeIn",attrs:{"data-wow-delay":".5s"}},[_c('div',[_c('img',{attrs:{"src":"/soho/img/about/about_good2.png"}})]),_c('div',{staticClass:"note"},[_c('div',{staticClass:"title"},[_vm._v(" 官網限定3件組 ")]),_c('div',[_vm._v(" 焙煎胡麻醬 x1"),_c('br'),_vm._v(" 和風胡麻醬 x2 ")]),_c('div',{staticClass:"price"},[_c('span',{staticClass:"originPrice"},[_vm._v("原價 $1,200")]),_c('span',{staticClass:"benefit"},[_vm._v("9折優惠價 $1,080")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"About_links"},[_c('a',{attrs:{"href":"/soho/productList.html"}},[_c('span',[_vm._v("所有藻作坊商品")]),_c('span',{staticClass:"arrow"})]),_c('a',{attrs:{"href":"/soho/store.html"}},[_c('span',[_vm._v("尋找藻作坊")]),_c('span',{staticClass:"arrow"})])])}]


// CONCATENATED MODULE: ./src/pages/About/index.vue?vue&type=template&id=7b6942c0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/About/index.vue?vue&type=script&lang=js
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



/* harmony default export */ var Aboutvue_type_script_lang_js = ({
  name: 'About',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/About/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Aboutvue_type_script_lang_js = (Aboutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/About/style.scss?vue&type=style&index=0&prod&lang=scss&external
var About_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("b126");

// CONCATENATED MODULE: ./src/pages/About/index.vue






/* normalize component */

var About_component = Object(componentNormalizer["a" /* default */])(
  pages_Aboutvue_type_script_lang_js,
  Aboutvue_type_template_id_7b6942c0_render,
  Aboutvue_type_template_id_7b6942c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var About = (About_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Seaweed/index.vue?vue&type=template&id=64d0d056
var Seaweedvue_type_template_id_64d0d056_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Seaweed Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"SEAWEED","zh":"海藻學堂"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'SEAWEED', path: '/seaweed.html'}]}})],1)]),_c('div',{staticClass:"container"},[_vm._m(0),_c('PageControl')],1)])}
var Seaweedvue_type_template_id_64d0d056_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"Seaweed_list"},[_c('li',{staticClass:"Seaweed_item"},[_c('a',{staticClass:"Seaweed_link wow fadeInRight",attrs:{"href":"/soho/seaweedContent.html"}},[_c('div',{staticClass:"Seaweed_time"},[_vm._v("2024/07/05")]),_c('div',{staticClass:"Seaweed_pic"},[_c('img',{attrs:{"src":"/soho/img/seaweed/seaweed_item1.jpg"}}),_c('div',{staticClass:"Seaweed_picArrow"},[_c('span')])]),_c('div',{staticClass:"Seaweed_content"},[_c('h2',[_vm._v("味素的由來")]),_c('p',[_vm._v("味精裡面含有人類的第五味覺「鮮味」跟酸.甜.苦.鹹一樣都是我們人類的味覺，只是鮮味比較晚才被發現，而提到鮮味，就必須味精裡面含有人類的第五味覺「鮮味」跟酸.甜.苦.鹹一樣都是我們人類的味覺，只是鮮味比較晚才被發現，而提到鮮味，就必須")]),_c('span',{staticClass:"Seaweed_arrow"})])])]),_c('li',{staticClass:"Seaweed_item"},[_c('a',{staticClass:"Seaweed_link wow fadeInRight",attrs:{"href":"/soho/seaweedContent.html"}},[_c('div',{staticClass:"Seaweed_time"},[_vm._v("2024/07/02")]),_c('div',{staticClass:"Seaweed_pic"},[_c('img',{attrs:{"src":"/soho/img/seaweed/seaweed_item2.jpg"}}),_c('div',{staticClass:"Seaweed_picArrow"},[_c('span')])]),_c('div',{staticClass:"Seaweed_content"},[_c('h2',[_vm._v("六種最常見的食用海藻品種")]),_c('p',[_vm._v("食用海藻是海中的蔬菜，人與海洋生物可以以多種形式食用它。從營養學的角度來說，海藻可以從海洋中濃縮吸收碘。人體不能")]),_c('span',{staticClass:"Seaweed_arrow"})])])]),_c('li',{staticClass:"Seaweed_item"},[_c('a',{staticClass:"Seaweed_link wow fadeInRight",attrs:{"href":"/soho/seaweedContent.html"}},[_c('div',{staticClass:"Seaweed_time"},[_vm._v("2024/06/28")]),_c('div',{staticClass:"Seaweed_pic"},[_c('img',{attrs:{"src":"/soho/img/seaweed/seaweed_item3.jpg"}}),_c('div',{staticClass:"Seaweed_picArrow"},[_c('span')])]),_c('div',{staticClass:"Seaweed_content"},[_c('h2',[_vm._v("六種常見海藻－營養及熱量")]),_c('p',[_vm._v("有來自「大海的蔬菜」之稱的「海藻」，在餐桌上最常見的有： 海帶、昆布、紫菜、海帶芽、珊瑚草、海茸這 6 種，每種都有其")]),_c('span',{staticClass:"Seaweed_arrow"})])])]),_c('li',{staticClass:"Seaweed_item"},[_c('a',{staticClass:"Seaweed_link wow fadeInRight",attrs:{"href":"/soho/seaweedContent.html"}},[_c('div',{staticClass:"Seaweed_time"},[_vm._v("2024/07/02")]),_c('div',{staticClass:"Seaweed_pic"},[_c('img',{attrs:{"src":"/soho/img/seaweed/seaweed_item4.jpg"}}),_c('div',{staticClass:"Seaweed_picArrow"},[_c('span')])]),_c('div',{staticClass:"Seaweed_content"},[_c('h2',[_vm._v("海藻的營養價值與好處")]),_c('p',[_vm._v("你知道吃海藻有哪些好處嗎？說到海藻，大部分人會先想到海藻的天然鮮味，以及各異其趣的種類和口感但其實海藻也含有非常")]),_c('span',{staticClass:"Seaweed_arrow"})])])]),_c('li',{staticClass:"Seaweed_item"},[_c('a',{staticClass:"Seaweed_link wow fadeInRight",attrs:{"href":"/soho/seaweedContent.html"}},[_c('div',{staticClass:"Seaweed_time"},[_vm._v("2024/06/11")]),_c('div',{staticClass:"Seaweed_pic"},[_c('img',{attrs:{"src":"/soho/img/seaweed/seaweed_item5.jpg"}}),_c('div',{staticClass:"Seaweed_picArrow"},[_c('span')])]),_c('div',{staticClass:"Seaweed_content"},[_c('h2',[_vm._v("海藻熱量全公開 低卡清爽無負擔")]),_c('p',[_vm._v("以下是常見的 6 種海藻熱量一覽，海藻的熱量不高，富含膳食纖維，吃下肚後也會有飽足感，對於在意熱量、但又想滿足口腹之")]),_c('span',{staticClass:"Seaweed_arrow"})])])])])}]


// CONCATENATED MODULE: ./src/pages/Seaweed/index.vue?vue&type=template&id=64d0d056

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Seaweed/index.vue?vue&type=script&lang=js
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
//
//
//




/* harmony default export */ var Seaweedvue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb,
    PageControl: PageControl
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Seaweed/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Seaweedvue_type_script_lang_js = (Seaweedvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Seaweed/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Seaweed_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("6c2c");

// CONCATENATED MODULE: ./src/pages/Seaweed/index.vue






/* normalize component */

var Seaweed_component = Object(componentNormalizer["a" /* default */])(
  pages_Seaweedvue_type_script_lang_js,
  Seaweedvue_type_template_id_64d0d056_render,
  Seaweedvue_type_template_id_64d0d056_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Seaweed = (Seaweed_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/SeaweedContent/index.vue?vue&type=template&id=113418e8
var SeaweedContentvue_type_template_id_113418e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SeaweedContent Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"SEAWEED","zh":"海藻學堂"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'SEAWEED', path: '/seaweedContent.html'}]}})],1)]),_vm._m(0),_vm._m(1)])}
var SeaweedContentvue_type_template_id_113418e8_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SeaweedContent_content"},[_c('div',{staticClass:"SeaweedContent_img wow fadeInUp"},[_c('img',{attrs:{"src":"/soho/img/seaweedContent/seaweedContent_main.jpg"}})]),_c('div',{staticClass:"SeaweedContent_main wow fadeInUp"},[_c('div',{staticClass:"container"},[_c('div',[_c('div',{staticClass:"SeaweedContent_time"},[_vm._v(" 2024/07/05 ")])]),_c('div',[_c('h2',{staticClass:"SeaweedContent_title"},[_vm._v(" 味素的由來 ")]),_c('br'),_c('p',[_vm._v(" 味精裡面含有人類的第五味覺「鮮味」"),_c('br'),_vm._v(" 跟酸，甜.苦.鹹一樣都是我們人類的味覺，只是鮮味比較晚才被發現，"),_c('br'),_vm._v(" 而提到鮮味，就必須要介紹到它的發現者與發明者池田菊苗教授的故事了 ")]),_c('br'),_c('p',[_vm._v(" 1908年的一天，日本東京帝國大學池田菊苗化學教授，晚上下班後正吃著妻子準備的可口飯菜。他發現湯的味道特別鮮美，用小勺攪動幾下，發現碗中只不過是一些海帶和幾片黃瓜。「海帶和黃瓜都是非常普通的食物，怎麼會產生這樣的鮮味呢?」池田自言自語起來，「嗯,也許海帶里有奧妙。」 ")]),_c('br'),_c('p',[_vm._v(" 職業敏感使的教授離開飯桌，跑進了實驗室里。他取來一些海帶，細細地研究。半年後，池田菊苗教授發表了他的研究成果，在海帶中可提取出一和叫做麩胺酸的化學物質，如把極少量的麩胺酸鈉加到湯里去，就能使味道鮮美至極。 ")]),_c('br'),_c('p',[_vm._v(" 這個發現發表之後，立即被一個叫鈴木三郎的日本商人看上，他放棄了當時從海帶中提取碘的計劃，轉而開始了從海帶中提取麩胺酸鈉的計劃。於是這位商人就和池田菊苗一拍即合，開始了「味素」的提煉。終於有一天，一種叫「味之素」的產品在東京淺草的一家商店裡面世了，廣告詞是這樣寫的：「家有味之素,白水變雞汁!」沒有想到的是，味素一下就被流傳使用開，最終變成了家喻戶曉的調味品。 ")]),_c('br'),_c('img',{attrs:{"src":"/soho/img/seaweedContent/seaweedContent_content1.jpg"}}),_c('br'),_c('br'),_c('br'),_c('h2',{staticClass:"SeaweedContent_title"},[_vm._v(" 這也就是味素的由來。 ")]),_c('br'),_c('p',[_vm._v(" 而其實在肉類與蔬果裡面其實都能找到「麩胺酸」的蹤跡，簡單舉個例子來說除了昆布以外干貝.乾香菇.柴魚.乾番茄.玉米.豬肉.雞肉......等，這些都是用來熬湯頭的食材其實本身都含有豐富的麩胺酸，而昆布高湯之所以要用昆布與柴魚片一起熬煮是為了讓這些天然食材裡的麩胺酸釋放在湯頭裡，使湯頭變得鮮美。 ")])]),_c('div',{staticClass:"SeaweedContent_tool"},[_c('button',{staticClass:"SeaweedContent_like"},[_c('img',{attrs:{"src":"/soho/img/seaweedContent/seaweedContent_like.png"}}),_c('span',[_vm._v("6201")])]),_c('a',{staticClass:"SeaweedContent_prePage",attrs:{"href":"/soho/seaweed.html"}},[_c('span',{staticClass:"arrow"}),_c('span',[_vm._v("回上一頁")])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SeaweedContent_recommend"},[_c('div',{staticClass:"SeaweedContent_recommendTitle"},[_vm._v(" 相關學堂 ")]),_c('div',{staticClass:"SeaweedContent_recommendList"},[_c('a',{staticClass:"SeaweedContent_recommendItem wow fadeInRight",attrs:{"href":"/soho/seaweedContent.html"}},[_c('div',{staticClass:"SeaweedContent_recommendTime"},[_vm._v("2024/07/02")]),_c('div',{staticClass:"SeaweedContent_recommendContent"},[_c('div',{staticClass:"SeaweedContent_recommendSubTitle"},[_vm._v(" 六種最常見的食用海藻品種 ")]),_c('div',{staticClass:"SeaweedContent_recommendText"},[_vm._v(" 不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。 因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。 ")])]),_c('div',{staticClass:"SeaweedContent_recommendImg"},[_c('img',{attrs:{"src":"/soho/img/seaweedContent/seaweedContent_new1.jpg"}})]),_c('div',{staticClass:"SeaweedContent_recommendArrow"})]),_c('a',{staticClass:"SeaweedContent_recommendItem wow fadeInRight",attrs:{"href":"/soho/seaweedContent.html"}},[_c('div',{staticClass:"SeaweedContent_recommendTime"},[_vm._v("2024/06/28")]),_c('div',{staticClass:"SeaweedContent_recommendContent"},[_c('div',{staticClass:"SeaweedContent_recommendSubTitle"},[_vm._v(" 六種常見海藻－營養及熱量 ")]),_c('div',{staticClass:"SeaweedContent_recommendText"},[_vm._v(" 不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。 因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。 ")])]),_c('div',{staticClass:"SeaweedContent_recommendImg"},[_c('img',{attrs:{"src":"/soho/img/seaweedContent/seaweedContent_new2.jpg"}})]),_c('div',{staticClass:"SeaweedContent_recommendArrow"})]),_c('a',{staticClass:"SeaweedContent_recommendItem wow fadeInRight",attrs:{"href":"/soho/seaweedContent.html"}},[_c('div',{staticClass:"SeaweedContent_recommendTime"},[_vm._v("2024/06/18")]),_c('div',{staticClass:"SeaweedContent_recommendContent"},[_c('div',{staticClass:"SeaweedContent_recommendSubTitle"},[_vm._v(" 六種最常見的食用海藻品種 ")]),_c('div',{staticClass:"SeaweedContent_recommendText"},[_vm._v(" 不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。 因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。 ")])]),_c('div',{staticClass:"SeaweedContent_recommendImg"},[_c('img',{attrs:{"src":"/soho/img/seaweedContent/seaweedContent_new3.jpg"}})]),_c('div',{staticClass:"SeaweedContent_recommendArrow"})])])])}]


// CONCATENATED MODULE: ./src/pages/SeaweedContent/index.vue?vue&type=template&id=113418e8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/SeaweedContent/index.vue?vue&type=script&lang=js
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
//



/* harmony default export */ var SeaweedContentvue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/SeaweedContent/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_SeaweedContentvue_type_script_lang_js = (SeaweedContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/SeaweedContent/style.scss?vue&type=style&index=0&prod&lang=scss&external
var SeaweedContent_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("6ef5");

// CONCATENATED MODULE: ./src/pages/SeaweedContent/index.vue






/* normalize component */

var SeaweedContent_component = Object(componentNormalizer["a" /* default */])(
  pages_SeaweedContentvue_type_script_lang_js,
  SeaweedContentvue_type_template_id_113418e8_render,
  SeaweedContentvue_type_template_id_113418e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SeaweedContent = (SeaweedContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/NewsContent/index.vue?vue&type=template&id=338f131a
var NewsContentvue_type_template_id_338f131a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"NewsContent Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"NEWS","zh":"最新消息"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'NEWS', path: '/newsContent.html'}]}})],1)]),_vm._m(0),_vm._m(1)])}
var NewsContentvue_type_template_id_338f131a_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"NewsContent_content"},[_c('div',{staticClass:"NewsContent_video wow fadeInUp"},[_c('div',[_c('iframe',{attrs:{"src":"https://www.youtube.com/embed/KSXTXalqWL8?si=k1RXgkBZTpIwhik0","title":"YouTube video player","frameborder":"0","allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy":"strict-origin-when-cross-origin","allowfullscreen":""}})])]),_c('div',{staticClass:"NewsContent_main wow fadeInUp"},[_c('div',{staticClass:"container"},[_c('div',[_c('div',{staticClass:"NewsContent_time"},[_vm._v(" 2024/07/05 ")])]),_c('div',[_c('h2',{staticClass:"NewsContent_title"},[_vm._v(" 海裡多少會有重金屬 ")]),_c('br'),_c('p',[_vm._v(" 不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。 ")]),_c('br'),_c('p',[_vm._v(" 現代人的餐桌上總少不了魚類、蝦蟹及貝類等各式各樣的海鮮種類,琳瑯滿目的水產品,總讓人不禁垂涎三尺,想大快朵頤一番。 ")]),_c('br'),_c('p',[_vm._v(" 海鮮富含豐碩的蛋白質、Ω-3 高度不飽和脂肪酸(DHA及EPA)、維生素及微量元素(鈣、磷、鋅及硒）等，對於腦部智力發育及人體所需營養相當有益，但享受美味及攝取營養的同時，現行環境汙染日益嚴重，是否攝取了過量的重金屬值得注意。 ")]),_c('br'),_c('p',[_vm._v(" 這個發現發表之後，立即被一個叫鈴木三郎的日本商人看上，他放棄了當時從海帶中提取碘的計劃，轉而開始了從海帶中提取麩胺酸鈉的計劃。於是這位商人就和池田菊苗一拍即合，開始了「味素」的提煉。終於有一天，一種叫「味之素」的產品在東京淺草的一家商店裡面世了，廣告詞是這樣寫的：「家有味之素,白水變雞汁!」沒有想到的是，味素一下就被流傳使用開，最終變成了家喻戶曉的調味品。 ")]),_c('br'),_c('br'),_c('br'),_c('h2',{staticClass:"NewsContent_title"},[_vm._v(" 重金屬汙染途徑 ")]),_c('br'),_c('p',[_vm._v(" 近年來，隨著工業化的發展，環境污染日亦嚴重，整個生物鏈都受到嚴重的影響，其中海中生物透過攝食藻類及浮游生物等方式，累積重金屬在體內，之後透過食物鏈，回到人體中，造成健康危害。 ")]),_c('br'),_c('p',[_vm._v(" 一般而言,位居生物鏈裡階層較高的魚類,如大型洄游魚類或深海魚類,因為攝食海藻及小魚的生物累積效應，體內積累的重金屬含量更高，水生生物中常見對人體健康有影響的重金屬為砷、鉛、鎘、汞等。 ")]),_c('br'),_c('img',{attrs:{"src":"/soho/img/newsContent/newsContent_main.jpg"}}),_c('br'),_c('br'),_c('br'),_c('h2',{staticClass:"NewsContent_title"},[_vm._v(" 重金屬可能造成的危害 ")]),_c('br'),_c('p',[_vm._v(" 重金屬砷的危害"),_c('br'),_vm._v(" 砷的型態可分為有機砷和無機砷兩大類,有機砷通常存在於水產中居多,對人體的毒性較低,攝入體內約 1~2 天後就會經腎臟代謝由尿液排出體外,最常見的形式為「二甲基砷酸 (DMA)」與「單甲基砷酸 (MMA)」等等；無機砷則可分為「三價砷 (As2O3)」，以及「五價砷 (NaAsO3)」等兩種形式，長期攝取過多的無機砷，會累積在人體的肝、腎及膽等器官中，引起慢性砷中毒，也可能會有膀胱癌、皮膚癌、腎臟癌等發生。 ")])]),_c('div',{staticClass:"NewsContent_tool"},[_c('button',{staticClass:"NewsContent_like"},[_c('img',{attrs:{"src":"/soho/img/newsContent/newsContent_like.png"}}),_c('span',[_vm._v("2112")])]),_c('a',{staticClass:"NewsContent_prePage",attrs:{"href":"/soho/news.html"}},[_c('span',{staticClass:"arrow"}),_c('span',[_vm._v("回上一頁")])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"NewsContent_recommend"},[_c('div',{staticClass:"NewsContent_recommendTitle"},[_vm._v(" 相關消息 ")]),_c('div',{staticClass:"NewsContent_recommendList"},[_c('a',{staticClass:"NewsContent_recommendItem wow fadeInRight",attrs:{"href":"/soho/newsContent.html"}},[_c('div',{staticClass:"NewsContent_recommendTime"},[_vm._v("2024/07/02")]),_c('div',{staticClass:"NewsContent_recommendContent"},[_c('div',{staticClass:"NewsContent_recommendSubTitle"},[_vm._v(" 海裡多少會有重金屬 ")]),_c('div',{staticClass:"NewsContent_recommendText"},[_vm._v(" 不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。 ")])]),_c('div',{staticClass:"NewsContent_recommendImg"},[_c('img',{attrs:{"src":"/soho/img/newsContent/newsContent_list1.jpg"}})]),_c('div',{staticClass:"NewsContent_recommendArrow"})]),_c('a',{staticClass:"NewsContent_recommendItem wow fadeInRight",attrs:{"href":"/soho/newsContent.html"}},[_c('div',{staticClass:"NewsContent_recommendTime"},[_vm._v("2024/06/28")]),_c('div',{staticClass:"NewsContent_recommendContent"},[_c('div',{staticClass:"NewsContent_recommendSubTitle"},[_vm._v(" 海裡多少會有重金屬 ")]),_c('div',{staticClass:"NewsContent_recommendText"},[_vm._v(" 不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。 ")])]),_c('div',{staticClass:"NewsContent_recommendImg"},[_c('img',{attrs:{"src":"/soho/img/newsContent/newsContent_list2.jpg"}})]),_c('div',{staticClass:"NewsContent_recommendArrow"})]),_c('a',{staticClass:"NewsContent_recommendItem wow fadeInRight",attrs:{"href":"/soho/newsContent.html"}},[_c('div',{staticClass:"NewsContent_recommendTime"},[_vm._v("2024/06/18")]),_c('div',{staticClass:"NewsContent_recommendContent"},[_c('div',{staticClass:"NewsContent_recommendSubTitle"},[_vm._v(" 海裡多少會有重金屬 ")]),_c('div',{staticClass:"NewsContent_recommendText"},[_vm._v(" 不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。 ")])]),_c('div',{staticClass:"NewsContent_recommendImg"},[_c('img',{attrs:{"src":"/soho/img/newsContent/newsContent_list3.jpg"}})]),_c('div',{staticClass:"NewsContent_recommendArrow"})])])])}]


// CONCATENATED MODULE: ./src/pages/NewsContent/index.vue?vue&type=template&id=338f131a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/NewsContent/index.vue?vue&type=script&lang=js
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
//
//



/* harmony default export */ var NewsContentvue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/NewsContent/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_NewsContentvue_type_script_lang_js = (NewsContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/NewsContent/style.scss?vue&type=style&index=0&prod&lang=scss&external
var NewsContent_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("8550");

// CONCATENATED MODULE: ./src/pages/NewsContent/index.vue






/* normalize component */

var NewsContent_component = Object(componentNormalizer["a" /* default */])(
  pages_NewsContentvue_type_script_lang_js,
  NewsContentvue_type_template_id_338f131a_render,
  NewsContentvue_type_template_id_338f131a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewsContent = (NewsContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Contact/index.vue?vue&type=template&id=0a32f05c
var Contactvue_type_template_id_0a32f05c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Contact Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"CONTACT","zh":"聯絡我們"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'CONTACT', path: '/contact.html'}]}})],1)]),_vm._m(0),_vm._m(1),_vm._m(2)])}
var Contactvue_type_template_id_0a32f05c_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Contact_info"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"Contact_title"},[_vm._v(" 歡迎您透過以下"),_c('br'),_vm._v(" 各種方式聯繫我們"),_c('br'),_c('span',[_vm._v("For more information, please contact us.")])]),_c('div',[_c('div',{staticClass:"Contact_note wow fadeIn"},[_vm._v(" 「藻作坊的企業使命與社會責任」"),_c('br'),_vm._v(" 「藻作坊有限公司」於2018年正式成立，並於嘉義市檜意森活村成立第一家門市。 ")]),_c('div',{staticClass:"Contact_content wow fadeIn"},[_c('div',{staticClass:"Contact_contentCompany"},[_c('div',{staticClass:"Contact_contentTitle"},[_vm._v(" 總公司 ")]),_c('div',{staticClass:"Contact_communityLinks"},[_c('a',{attrs:{"href":""}},[_c('img',{attrs:{"src":"/soho/img/contact/icon-line.png"}})]),_c('a',{attrs:{"href":""}},[_c('img',{attrs:{"src":"/soho/img/contact/icon-fb.png"}})]),_c('a',{attrs:{"href":""}},[_c('img',{attrs:{"src":"/soho/img/contact/icon-yt.png"}})])])]),_c('div',{staticClass:"Contact_contentPhone"},[_c('img',{attrs:{"src":"/soho/img/contact/icon_phone.png"}}),_vm._v(" 0910-827-867 ")]),_c('div',{staticClass:"Contact_contentMail"},[_c('img',{attrs:{"src":"/soho/img/contact/icon_mail.png"}}),_vm._v(" gzv6726@dr-seaweed.com.tw ")]),_c('div',{staticClass:"Contact_contentTime"},[_c('img',{attrs:{"src":"/soho/img/contact/icon_time.png"}}),_vm._v(" AM 9:00-PM 17:00 ")]),_c('div',{staticClass:"Contact_contentLocation"},[_c('img',{attrs:{"src":"/soho/img/contact/icon_location.png"}}),_vm._v(" 高雄市前鎮區擴建路1-29號13樓 ")]),_c('iframe',{staticClass:"Contact_map",staticStyle:{"border":"0"},attrs:{"src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.706201454013!2d120.30273659999999!3d22.590089199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e030bf36aaaab%3A0x14a9f80a16da3e98!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A5pO05bu66LevMeS5izMx6JmfMTPmqJM!5e0!3m2!1szh-TW!2stw!4v1724106721224!5m2!1szh-TW!2stw","allowfullscreen":"","loading":"lazy","referrerpolicy":"no-referrer-when-downgrade"}})])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Contact_form"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"Contact_title"},[_vm._v(" SEND US MESSAGE ")]),_c('div',{staticClass:"Contact_formContent wow fadeIn"},[_c('div',{staticClass:"Contact_formItem"},[_c('label',[_c('div',{staticClass:"Contact_formQuestion"},[_vm._v("*姓名")]),_c('input',{attrs:{"type":"text"}})])]),_c('div',{staticClass:"Contact_formItem"},[_c('label',[_c('div',{staticClass:"Contact_formQuestion"},[_vm._v("*電話")]),_c('input',{attrs:{"type":"text"}})])]),_c('div',{staticClass:"Contact_formItem"},[_c('label',[_c('div',{staticClass:"Contact_formQuestion"},[_vm._v("信箱")]),_c('input',{attrs:{"type":"text"}})])]),_c('div',{staticClass:"Contact_formItem"},[_c('div',{staticClass:"Contact_formQuestion"},[_vm._v(" *留言類型 ")]),_c('select',[_c('option',{attrs:{"value":""}},[_vm._v(" 經銷洽談 ")])])]),_c('div',{staticClass:"Contact_formItem"},[_c('div',{staticClass:"Contact_formQuestion"},[_vm._v(" 留言 ")]),_c('textarea',{staticClass:"Contact_formTextarea",attrs:{"rows":"5","type":"textarea"}})]),_c('div',{staticClass:"Contact_formItem"},[_c('label',[_c('div',{staticClass:"Contact_formQuestion"},[_vm._v("*驗證碼")]),_c('div',{staticClass:"Contact_formVerify"},[_c('input',{attrs:{"type":"text"}}),_c('div',{staticClass:"Contact_formVerifyCode"},[_vm._v("1234")])])])]),_c('button',{staticClass:"Contact_sendBtn"},[_vm._v(" 送出 ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Contact_links"},[_c('div',{staticClass:"Contact_item"},[_c('div',{staticClass:"wow fadeInLeft"},[_c('div',{staticClass:"Contact_linkTitle"},[_vm._v(" ONLINE"),_c('br'),_vm._v(" SHOP "),_c('br'),_c('span',[_vm._v("線上門市")])]),_c('a',{staticClass:"Contact_linkA",attrs:{"href":"/soho/store.html"}},[_vm._v("立即前往")])])]),_c('div',{staticClass:"Contact_item"},[_c('div',{staticClass:"wow fadeInLeft"},[_c('div',{staticClass:"Contact_linkTitle"},[_vm._v(" DISCOUNT "),_c('br'),_vm._v(" INFORMATION "),_c('br'),_c('span',[_vm._v("優惠資訊")])]),_c('a',{staticClass:"Contact_linkA",attrs:{"href":"/soho/store.html"}},[_vm._v("前往優惠")])])])])}]


// CONCATENATED MODULE: ./src/pages/Contact/index.vue?vue&type=template&id=0a32f05c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Contact/index.vue?vue&type=script&lang=js
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
//
//
//
//
//



/* harmony default export */ var Contactvue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Contact/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Contactvue_type_script_lang_js = (Contactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Contact/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Contact_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("e689");

// CONCATENATED MODULE: ./src/pages/Contact/index.vue






/* normalize component */

var Contact_component = Object(componentNormalizer["a" /* default */])(
  pages_Contactvue_type_script_lang_js,
  Contactvue_type_template_id_0a32f05c_render,
  Contactvue_type_template_id_0a32f05c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Contact = (Contact_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/News/index.vue?vue&type=template&id=68296f66
var Newsvue_type_template_id_68296f66_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"News Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"NEWS","zh":"最新消息"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'NEWS', path: '/news.html'}]}})],1)]),_vm._m(0),_c('div',{staticClass:"container"},[_vm._m(1),_c('PageControl',{staticClass:"News_pageController"})],1)])}
var Newsvue_type_template_id_68296f66_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"News_followerWrap"},[_c('div',{staticClass:"News_follower",attrs:{"id":"News_follower"}},[_c('div',{staticClass:"News_followerArrow"},[_c('span')]),_c('div',{staticClass:"News_followerVideo",attrs:{"id":"News_followerVideo"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"News_list",attrs:{"id":"News_list"}},[_c('a',{staticClass:"News_item",attrs:{"href":"/soho/newsContent.html","data-youtube-id":"KSXTXalqWL8"}},[_c('div',{staticClass:"News_time"},[_vm._v("2024/07/05")]),_c('h2',{staticClass:"News_title"},[_vm._v("海裡多少會有重金屬")]),_c('div',{staticClass:"News_content"},[_c('p',[_vm._v(" 不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。 ")]),_c('div',{staticClass:"News_arrow"})])]),_c('a',{staticClass:"News_item",attrs:{"href":"/soho/newsContent.html","data-youtube-id":"mCCAesaJZSo"}},[_c('div',{staticClass:"News_time"},[_vm._v("2024/07/05")]),_c('h2',{staticClass:"News_title"},[_vm._v("海裡多少會有重金屬")]),_c('div',{staticClass:"News_content"},[_c('p',[_vm._v(" 不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。 ")]),_c('div',{staticClass:"News_arrow"})])]),_c('a',{staticClass:"News_item",attrs:{"href":"/soho/newsContent.html","data-youtube-id":""}},[_c('div',{staticClass:"News_time"},[_vm._v("2024/07/02")]),_c('h2',{staticClass:"News_title"},[_vm._v("海裡多少會有重金屬")]),_c('div',{staticClass:"News_content"},[_c('p',[_vm._v(" 不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。 ")]),_c('div',{staticClass:"News_arrow"})])]),_c('a',{staticClass:"News_item",attrs:{"href":"/soho/newsContent.html","data-youtube-id":"KSXTXalqWL8"}},[_c('div',{staticClass:"News_time"},[_vm._v("2024/06/28")]),_c('h2',{staticClass:"News_title"},[_vm._v("海裡多少會有重金屬")]),_c('div',{staticClass:"News_content"},[_c('p',[_vm._v(" 不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。 ")]),_c('div',{staticClass:"News_arrow"})])]),_c('a',{staticClass:"News_item",attrs:{"href":"/soho/newsContent.html","data-youtube-id":""}},[_c('div',{staticClass:"News_time"},[_vm._v("2024/06/18")]),_c('h2',{staticClass:"News_title"},[_vm._v("海裡多少會有重金屬")]),_c('div',{staticClass:"News_content"},[_c('p',[_vm._v(" 不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。 ")]),_c('div',{staticClass:"News_arrow"})])]),_c('a',{staticClass:"News_item",attrs:{"href":"/soho/newsContent.html","data-youtube-id":"KSXTXalqWL8"}},[_c('div',{staticClass:"News_time"},[_vm._v("2024/06/03")]),_c('h2',{staticClass:"News_title"},[_vm._v("海裡多少會有重金屬")]),_c('div',{staticClass:"News_content"},[_c('p',[_vm._v(" 不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。 ")]),_c('div',{staticClass:"News_arrow"})])]),_c('a',{staticClass:"News_item",attrs:{"href":"/soho/newsContent.html","data-youtube-id":""}},[_c('div',{staticClass:"News_time"},[_vm._v("2024/06/01")]),_c('h2',{staticClass:"News_title"},[_vm._v("海裡多少會有重金屬")]),_c('div',{staticClass:"News_content"},[_c('p',[_vm._v(" 不只是汞,會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。因為這些元素具有生物累積性、不易代謝,在一層一層的食物鏈中會逐漸被累積。 ")]),_c('div',{staticClass:"News_arrow"})])])])}]


// CONCATENATED MODULE: ./src/pages/News/index.vue?vue&type=template&id=68296f66

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/News/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//
//




/* harmony default export */ var Newsvue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb,
    PageControl: PageControl
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/News/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Newsvue_type_script_lang_js = (Newsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/News/style.scss?vue&type=style&index=0&prod&lang=scss&external
var News_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("dcae");

// CONCATENATED MODULE: ./src/pages/News/index.vue






/* normalize component */

var News_component = Object(componentNormalizer["a" /* default */])(
  pages_Newsvue_type_script_lang_js,
  Newsvue_type_template_id_68296f66_render,
  Newsvue_type_template_id_68296f66_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var News = (News_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Detection/index.vue?vue&type=template&id=3c05ba46
var Detectionvue_type_template_id_3c05ba46_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Detection Page"},[_c('div',{staticClass:"container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"DETECTION","zh":"檢驗認證"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'DETECTION', path: '/detection.html'}]}})],1)]),_vm._m(0),_vm._m(1),_vm._m(2),_vm._m(3),_vm._m(4),_vm._m(5),_vm._m(6)])}
var Detectionvue_type_template_id_3c05ba46_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Detection_block"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"Detection_mainTitle"},[_vm._v(" 海裡多少會有重金屬 ")]),_c('div',{staticClass:"Detection_note"},[_vm._v(" 不只是汞，會出現在海鮮中的常見重金屬還包含鎘、鉛和砷等元素。"),_c('br'),_vm._v(" 因為這些元素具有生物累積性、不易代謝，在一層一層的食物鏈中會逐漸被累積。"),_c('br'),_vm._v(" 提供重金屬檢驗服務的台美檢驗，為我們整理出幾種重金屬對人體的危害： ")]),_c('div',{staticClass:"Detection_decoration"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_decoration.jpg"}})])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Detection_block Detection_video"},[_c('iframe',{attrs:{"src":"https://www.youtube.com/embed/LFaKMm0Gulw?si=Xxsd0ZIrcUfX1fCQ","title":"YouTube video player","frameborder":"0","allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy":"strict-origin-when-cross-origin","allowfullscreen":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Detection_block Detection_item"},[_c('div',{staticClass:"Detection_content"},[_c('div',[_c('h2',{staticClass:"Detection_title"},[_vm._v(" 1. 重金屬"),_c('span',[_vm._v("汞")])]),_c('p',[_vm._v(" 汞，主要有元素汞、無機汞及有機汞三種型態。"),_c('br'),_vm._v(" 通常提及海鮮中的汞，多指的是「甲基汞」，為有機汞在所有型態中毒性最大。"),_c('br'),_vm._v(" 日本 1956 年的「水俁病」就是由甲基汞所引發。"),_c('br'),_vm._v(" 當地居民出現智力低下、神經錯亂、視力障礙甚至死亡等現象。 ")]),_c('div',{staticClass:"Detection_links"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_link.jpg"}}),_c('a',{attrs:{"href":""}},[_c('span',[_vm._v("藻作坊安心檢驗")]),_c('span',{staticClass:"arrow"})])])])]),_c('div',{staticClass:"Detection_img"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_main1.jpg"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Detection_block Detection_item Detection_itemPureText"},[_c('div',{staticClass:"Detection_content"},[_c('div',[_c('h2',{staticClass:"Detection_title"},[_vm._v(" 2. 重金屬"),_c('span',[_vm._v("砷")])]),_c('p',[_vm._v(" 砷，可分為有機砷和無機砷兩種型態。"),_c('br'),_vm._v(" 在海鮮中常見的是有機砷，但是對人體的毒性較低，且可以經由尿液排出體外。"),_c('br'),_vm._v(" 然而，無機砷則會累積在人體的器官，引起慢性砷中毒。嚴重一點，甚至有引發癌症的可能。 ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Detection_block Detection_item"},[_c('div',{staticClass:"Detection_content"},[_c('div',[_c('h2',{staticClass:"Detection_title"},[_vm._v(" 3. 重金屬"),_c('span',[_vm._v("鎘")])]),_c('p',[_vm._v(" 汞，主要有元素汞、無機汞及有機汞三種型態。"),_c('br'),_vm._v(" 通常提及海鮮中的汞，多指的是「甲基汞」，為有機汞在所有型態中毒性最大。"),_c('br'),_vm._v(" 日本 1956 年的「水俁病」就是由甲基汞所引發。"),_c('br'),_vm._v(" 當地居民出現智力低下、神經錯亂、視力障礙甚至死亡等現象。 ")]),_c('div',{staticClass:"Detection_links"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_link.jpg"}}),_c('a',{attrs:{"href":""}},[_c('span',[_vm._v("藻作坊安心檢驗")]),_c('span',{staticClass:"arrow"})])])])]),_c('div',{staticClass:"Detection_img"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_main3.jpg"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Detection_block Detection_slogan"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"text"},[_vm._v(" 藻，最好的海藻 ")]),_c('div',{staticClass:"pic"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_slogan1.jpg"}})]),_c('div',{staticClass:"textPic"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_slogan2.jpg"}})])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Detection_block Detection_slider"},[_c('div',{staticClass:"Detection_sliderContentWrap"},[_c('button',{staticClass:"Detection_sliderPrev",attrs:{"id":"Detection_sliderPrev"}},[_c('img',{attrs:{"src":"/soho/img/detection/icon_marqueeL.png"}})]),_c('button',{staticClass:"Detection_sliderNext",attrs:{"id":"Detection_sliderNext"}},[_c('img',{attrs:{"src":"/soho/img/detection/icon_marqueeR.png"}})]),_c('div',{staticClass:"Detection_sliderContent",attrs:{"id":"Detection_sliderContent"}},[_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item1.jpg"}})]),_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item2.jpg"}})]),_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item3.jpg"}})]),_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item4.jpg"}})]),_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item5.jpg"}})]),_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item6.jpg"}})]),_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item7.jpg"}})]),_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item8.jpg"}})]),_c('div',{staticClass:"Detection_sliderItem"},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item9.jpg"}})])])]),_c('div',{staticClass:"Detection_sliderDots"},[_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"0"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item1.jpg"}})]),_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"1"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item2.jpg"}})]),_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"2"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item3.jpg"}})]),_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"3"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item4.jpg"}})]),_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"4"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item5.jpg"}})]),_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"5"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item6.jpg"}})]),_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"6"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item7.jpg"}})]),_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"7"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item8.jpg"}})]),_c('button',{staticClass:"Detection_sliderDot",attrs:{"data-slider-index":"8"}},[_c('img',{attrs:{"src":"/soho/img/detection/detection_item9.jpg"}})])])])}]


// CONCATENATED MODULE: ./src/pages/Detection/index.vue?vue&type=template&id=3c05ba46

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Detection/index.vue?vue&type=script&lang=js
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
//
//
//
//
//
//



/* harmony default export */ var Detectionvue_type_script_lang_js = ({
  name: 'Bonus',
  components: {
    Title: Title,
    Breadcrumb: Breadcrumb
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/Detection/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Detectionvue_type_script_lang_js = (Detectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/Detection/style.scss?vue&type=style&index=0&prod&lang=scss&external
var Detection_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("4cc9");

// CONCATENATED MODULE: ./src/pages/Detection/index.vue






/* normalize component */

var Detection_component = Object(componentNormalizer["a" /* default */])(
  pages_Detectionvue_type_script_lang_js,
  Detectionvue_type_template_id_3c05ba46_render,
  Detectionvue_type_template_id_3c05ba46_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Detection = (Detection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c58b4b9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/GiftList/index.vue?vue&type=template&id=0858fc88
var GiftListvue_type_template_id_0858fc88_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList Page"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"PRODUCTS","zh":"送禮專區"}})],1),_c('div',{staticClass:"ProductList_content"},[_vm._m(0),_c('div',{staticClass:"ProductList_content-product"},[_vm._m(1),_c('div',{staticClass:"ProductList_content-product-wrap"},[_vm._m(2),_vm._m(3),_c('PageControl')],1)])])])])}
var GiftListvue_type_template_id_0858fc88_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content-menu"},[_c('div',{staticClass:"ProductList_content-menuTitle"},[_vm._v(" 產品資訊 ")]),_c('div',{staticClass:"ProductList_content-menuItemList"},[_c('div',{staticClass:"ProductList_content-menuItem"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_vm._v(" 查看全部 ")])]),_c('div',{staticClass:"ProductList_content-menuItem ProductList_content-menuItem-toggle"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("【 9/01-9/14 】中秋禮盒 - 送你送健康")])]),_c('div',{staticClass:"ProductList_content-menuItemSub"},[_c('div',{staticClass:"ProductList_content-menuItemSubItem active"},[_vm._v(" 海藻 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 醬料 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 高湯 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 組合搭配 ")])])]),_c('div',{staticClass:"ProductList_content-menuItem active"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("送禮專區")])])]),_c('div',{staticClass:"ProductList_content-menuItem ProductList_content-menuItem-toggle"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("新品上市")])]),_c('div',{staticClass:"ProductList_content-menuItemSub"},[_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 新品一 ")])])]),_c('div',{staticClass:"ProductList_content-menuItem "},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("暢銷熱賣")])])]),_c('div',{staticClass:"ProductList_content-menuItem "},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("囤貨必備")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content-product-ad"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_ad.jpg","alt":"海帶芽湯"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content-product-filters active"},[_c('div',[_c('div',{staticClass:"ProductList_content-product-filter select"},[_c('select',[_c('option',{attrs:{"value":"","selected":""}},[_vm._v(" 預設 ")]),_c('option',{attrs:{"value":"1"}},[_vm._v(" 價格低至高 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 價格高至低 ")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content-product-list"},[_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item1.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的現代人忙碌而無")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item2.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item3.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的現代人忙碌而無")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item4.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item5.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 海苔醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item6.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 海苔醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item7.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item8.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('a',{staticClass:"ProductList_content-product-item",attrs:{"href":"/soho/productContent.html"}},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item9.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])])])}]


// CONCATENATED MODULE: ./src/pages/GiftList/index.vue?vue&type=template&id=0858fc88

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/GiftList/index.vue?vue&type=script&lang=js
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



/* harmony default export */ var GiftListvue_type_script_lang_js = ({
  name: 'ProductList',
  components: {
    Title: Title,
    PageControl: PageControl
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/pages/GiftList/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_GiftListvue_type_script_lang_js = (GiftListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/pages/GiftList/style.scss?vue&type=style&index=0&prod&lang=scss&external
var GiftList_stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("8c1d");

// CONCATENATED MODULE: ./src/pages/GiftList/index.vue






/* normalize component */

var GiftList_component = Object(componentNormalizer["a" /* default */])(
  pages_GiftListvue_type_script_lang_js,
  GiftListvue_type_template_id_0858fc88_render,
  GiftListvue_type_template_id_0858fc88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GiftList = (GiftList_component.exports);
// CONCATENATED MODULE: ./src/router/index.js






























vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
const routes = [{
  path: '/index.html',
  name: 'index',
  component: Index
}, {
  path: '/header.html',
  name: 'Header',
  component: Header
}, {
  path: '/footer.html',
  name: 'Footer',
  component: Footer
}, {
  path: '/cartProcess1.html',
  name: 'CartProcess1',
  component: CartProcess1
}, {
  path: '/cartProcess2.html',
  name: 'CartProcess2',
  component: CartProcess2
}, {
  path: '/cartProcess3.html',
  name: 'CartProcess3',
  component: CartProcess3
}, {
  path: '/productList.html',
  name: 'ProductList',
  component: ProductList
}, {
  path: '/productContent.html',
  name: 'ProductContent',
  component: ProductContent
}, {
  path: '/signup.html',
  name: 'signup',
  component: SignUp
}, {
  path: '/login.html',
  name: 'Login',
  component: Login
}, {
  path: '/member.html',
  name: 'Member',
  component: Member
}, {
  path: '/registTerm.html',
  name: 'RegistTerm',
  component: RegistTerm
}, {
  path: '/bonus.html',
  name: 'Bonus',
  component: Bonus
}, {
  path: '/coupon.html',
  name: 'Coupon',
  component: Coupon
}, {
  path: '/collect.html',
  name: 'Collect',
  component: Collect
}, {
  path: '/returnsAndRefunds.html',
  name: 'ReturnsAndRefunds',
  component: ReturnsAndRefunds
}, {
  path: '/paymentInstructions.html',
  name: 'PaymentInstructions',
  component: PaymentInstructions
}, {
  path: '/orderStatus.html',
  name: 'OrderStatus',
  component: OrderStatus
}, {
  path: '/store.html',
  name: 'Store',
  component: Store
}, {
  path: '/storeContent.html',
  name: 'StoreContent',
  component: StoreContent
}, {
  path: '/about.html',
  name: 'About',
  component: About
}, {
  path: '/seaweed.html',
  name: 'Seaweed',
  component: Seaweed
}, {
  path: '/seaweedContent.html',
  name: 'SeaweedContent',
  component: SeaweedContent
}, {
  path: '/news.html',
  name: 'News',
  component: News
}, {
  path: '/newsContent.html',
  name: 'NewsContent',
  component: NewsContent
}, {
  path: '/contact.html',
  name: 'Contact',
  component: Contact
}, {
  path: '/detection.html',
  name: 'Detection',
  component: Detection
}, {
  path: '/giftList.html',
  name: 'GiftList',
  component: GiftList
}, {
  path: '*',
  redirect: {
    name: 'index'
  }
}];
const router = new vue_router_esm["a" /* default */]({
  mode: 'history',
  base: "/soho/",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/bowser/es5.js
var es5 = __webpack_require__("337f");
var es5_default = /*#__PURE__*/__webpack_require__.n(es5);

// CONCATENATED MODULE: ./src/plugins/detectBrowser.js

/* harmony default export */ var detectBrowser = ({
  install(Vue, options) {
    const browser = es5_default.a.getParser(window.navigator.userAgent);
    Vue.prototype.$browser = {
      ...browser.getBrowser(),
      platform: browser.getPlatformType()
    };
  }
});
// CONCATENATED MODULE: ./src/main.js
// 如需啟用vuex請把下方註解打開







// import store from './store'

vue_runtime_esm["default"].config.productionTip = false;
vue_runtime_esm["default"].use(vue_composition_api["a" /* default */]);
vue_runtime_esm["default"].use(vue_meta_esm["a" /* default */]);
vue_runtime_esm["default"].use(detectBrowser);
new vue_runtime_esm["default"]({
  router: src_router,
  // store,
  render: h => h(App)
}).$mount('#app');

/***/ }),

/***/ "588f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_bfde3c08_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9dd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_bfde3c08_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_bfde3c08_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5d7e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5e1e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "640e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "648d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "653e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "690e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6a5a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_409ec044_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d4ae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_409ec044_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_409ec044_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6c2c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6f3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6d2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_26afb512_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2669");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_26afb512_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_26afb512_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6ef5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("653e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7099":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7534":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7099");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "78e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4379");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7f7a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a7cd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8550":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8806":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8b6f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8c1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("148e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9bd9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("690e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9e74":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a7cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a9dd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aad2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ab0f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10ab");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "af28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d6e6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b126":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e903");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b30f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b6c2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba3b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8964e6ae_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("640e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8964e6ae_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8964e6ae_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bd3d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bd4b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c018":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58000ef6_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5d7e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58000ef6_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58000ef6_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c264":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("11d8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c2fd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c4b6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cfa8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d474":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e3ba");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d4ae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d6e6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "da49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("28a0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dc75":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cfa8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dcae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ab0f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dd7f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("648d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e3ba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e66e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e689":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bd3d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e903":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e93c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c2fd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ebf7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fc40");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f7c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8806");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fa17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_6ca63d5b_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b30f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_6ca63d5b_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_6ca63d5b_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fc40":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fe0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });