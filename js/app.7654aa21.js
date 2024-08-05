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

/***/ "06aa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a80":
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

/***/ "1f7b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "23cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01c39f08_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8cbd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01c39f08_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_01c39f08_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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

/***/ "49e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3fc24f20_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0a80");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3fc24f20_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3fc24f20_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "50e4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=8529a01c
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('ProjectHeader'),_c('router-view',{staticClass:"app__view"}),_c('ProjectFooter'),_c('FloatBtn')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=8529a01c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectHeader/index.vue?vue&type=template&id=1d8d4084
var ProjectHeadervue_type_template_id_1d8d4084_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"ProjectHeader"},[_c('div',{staticClass:"container ProjectHeader-pc"},[_c('div',{staticClass:"ProjectHeader_area ProjectHeader_area-left"},[_c('div',{staticClass:"menu"},[_c('div',{staticClass:"menu_item"},[_c('router-link',{attrs:{"to":{name: 'Index'}}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 關於我們 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" ABOUT ")])])],1),_c('div',{staticClass:"menu_item"},[_c('router-link',{attrs:{"to":{name: 'Index'}}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 檢驗認證 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" DETECTION ")])])],1),_c('div',{staticClass:"menu_item"},[_c('router-link',{attrs:{"to":{name: 'Index'}}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 產品資訊 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" PRODUCTS ")])])],1),_c('div',{staticClass:"menu_item"},[_c('router-link',{attrs:{"to":{name: 'Index'}}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 最新消息 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" NEWS ")])])],1)])]),_vm._m(0),_c('div',{staticClass:"ProjectHeader_area ProjectHeader_area-right"},[_c('div',{staticClass:"menu"},[_c('div',{staticClass:"menu_item"},[_c('router-link',{attrs:{"to":{name: 'Index'}}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 海藻學堂 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" SEAWEED ")])])],1),_c('div',{staticClass:"menu_item"},[_c('router-link',{attrs:{"to":{name: 'Index'}}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 門市據點 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" STORE ")])])],1),_c('div',{staticClass:"menu_item"},[_c('router-link',{attrs:{"to":{name: 'Index'}}},[_c('div',{staticClass:"menu_itemText-zh"},[_vm._v(" 聯絡我們 ")]),_c('div',{staticClass:"menu_itemText-en"},[_vm._v(" CONTACT ")])])],1)]),_vm._m(1)])]),_vm._m(2)])}
var ProjectHeadervue_type_template_id_1d8d4084_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":"/soho/img/navbar/logo.png","alt":"藻作坊"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"functionBar"},[_c('button',{attrs:{"id":"functionBar_member"}}),_c('button',{attrs:{"id":"functionBar_cart"}}),_c('div',{staticClass:"functionBar_search"},[_c('input',{attrs:{"type":"text","placeholder":"SEARCH..."}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container ProjectHeader-mobile"},[_c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":"/soho/img/navbar/logo.png","alt":"藻作坊"}})]),_c('div',{staticClass:"right"},[_c('div',{staticClass:"functionBar"},[_c('button',{attrs:{"id":"functionBar_cart"}})]),_c('button',{staticClass:"hamburger"},[_c('span'),_c('span'),_c('span'),_c('span')])])])}]


// CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue?vue&type=template&id=1d8d4084

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


/* harmony default export */ var ProjectHeadervue_type_script_lang_js = ({
  name: 'ProjectHeader',
  setup(props, context) {}
});
// CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ProjectHeadervue_type_script_lang_js = (ProjectHeadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/ProjectHeader/index.vue?vue&type=style&index=0&id=1d8d4084&prod&lang=scss
var ProjectHeadervue_type_style_index_0_id_1d8d4084_prod_lang_scss = __webpack_require__("a1c9");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectHeadervue_type_script_lang_js,
  ProjectHeadervue_type_template_id_1d8d4084_render,
  ProjectHeadervue_type_template_id_1d8d4084_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProjectHeader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectFooter/index.vue?vue&type=template&id=01c39f08
var ProjectFootervue_type_template_id_01c39f08_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"ProjectFooter"},[_vm._m(0),_c('div',{staticClass:"ProjectFooter_note"},[_c('div',{staticClass:"container"},[_vm._v(" "+_vm._s(new Date().getFullYear())+" © 藻作坊 Designed By 禾藝叁陸巷有限公司 ")])])])}
var ProjectFootervue_type_template_id_01c39f08_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"ProjectFooter_content"},[_c('div',{staticClass:"ProjectFooter_logoWrap"},[_c('div',{staticClass:"ProjectFooter_pic"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_logo.png","alt":"logo","draggable":"false"}})])]),_c('div',{staticClass:"ProjectFooter_linkPart"},[_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 深入暸解 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("關於我們")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("永續發展")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("最新消息")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("海藻學堂")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 藻藻帶回家 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("檢驗認證")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("產品總覽")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("分類一")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("分類二")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 藻門市吧 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("彩虹門市")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("檜意門市")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("聯絡我們")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 會員中心 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("會員登入")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("歷史訂單")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("優惠折扣")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("紅利點數")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 會員權益 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("購物須知")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("退換貨說明")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("隱私權政策")]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_vm._v("會員註冊條款")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 聯絡資訊 ")]),_c('div',{staticClass:"ProjectFooter_linkList"},[_c('div',{staticClass:"ProjectFooter_linkList-text"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_phone.png"}}),_vm._v("0910-827-867 ")]),_c('div',{staticClass:"ProjectFooter_linkList-text"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_time.png"}}),_vm._v("AM 9:00-PM 18:00 ")]),_c('div',{staticClass:"ProjectFooter_linkList-text"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_email.png"}}),_vm._v("gzv6726@dr-seaweed.com.tw ")]),_c('div',{staticClass:"ProjectFooter_linkList-text"},[_c('img',{attrs:{"src":"/soho/img/footer/footer_position.png"}}),_vm._v("嘉義市東區共和路191巷6號 ")])])]),_c('div',{staticClass:"ProjectFooter_linkCategory"},[_c('div',{staticClass:"ProjectFooter_linkTitle notoSerif"},[_vm._v(" 關注我們 ")]),_c('div',{staticClass:"ProjectFooter_socialMedia"},[_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_c('img',{attrs:{"src":"/soho/img/footer/footer_line.png","alt":"LINE"}})]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_c('img',{attrs:{"src":"/soho/img/footer/footer_fb.png","alt":"fb"}})]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_c('img',{attrs:{"src":"/soho/img/footer/footer_yt.png","alt":"yt"}})])])])])])])}]


// CONCATENATED MODULE: ./src/components/ProjectFooter/index.vue?vue&type=template&id=01c39f08

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// EXTERNAL MODULE: ./src/components/ProjectFooter/index.vue?vue&type=style&index=0&id=01c39f08&prod&lang=scss
var ProjectFootervue_type_style_index_0_id_01c39f08_prod_lang_scss = __webpack_require__("23cf");

// CONCATENATED MODULE: ./src/components/ProjectFooter/index.vue






/* normalize component */

var ProjectFooter_component = Object(componentNormalizer["a" /* default */])(
  components_ProjectFootervue_type_script_lang_js,
  ProjectFootervue_type_template_id_01c39f08_render,
  ProjectFootervue_type_template_id_01c39f08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProjectFooter = (ProjectFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FloatBtn/FloatBtn.vue?vue&type=template&id=fb7ad424
var FloatBtnvue_type_template_id_fb7ad424_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var FloatBtnvue_type_template_id_fb7ad424_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"FloatBtn"},[_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_c('img',{attrs:{"src":"/soho/img/floatBtn_chat.png","alt":"chat"}})]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}},[_c('img',{attrs:{"src":"/soho/img/floatBtn_cart.png","alt":"cart"}})]),_c('button',{attrs:{"id":"btn__quickTop"}},[_c('img',{attrs:{"src":"/soho/img/floatBtn_up.png","alt":"up"}})])])}]


// CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=template&id=fb7ad424

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
//

/* harmony default export */ var FloatBtnvue_type_script_lang_js = ({
  name: 'FloatBtn',
  setup(props, context) {}
});
// CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=script&lang=js
 /* harmony default export */ var FloatBtn_FloatBtnvue_type_script_lang_js = (FloatBtnvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=style&index=0&id=fb7ad424&prod&lang=scss
var FloatBtnvue_type_style_index_0_id_fb7ad424_prod_lang_scss = __webpack_require__("e727");

// CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue






/* normalize component */

var FloatBtn_component = Object(componentNormalizer["a" /* default */])(
  FloatBtn_FloatBtnvue_type_script_lang_js,
  FloatBtnvue_type_template_id_fb7ad424_render,
  FloatBtnvue_type_template_id_fb7ad424_staticRenderFns,
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




/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  components: {
    ProjectHeader: ProjectHeader,
    ProjectFooter: ProjectFooter,
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
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=8529a01c&prod&lang=scss
var Appvue_type_style_index_0_id_8529a01c_prod_lang_scss = __webpack_require__("963d");

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index/index.vue?vue&type=template&id=65bce50a
var Indexvue_type_template_id_65bce50a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Indexvue_type_template_id_65bce50a_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Index"},[_c('div',{staticClass:"kv",attrs:{"data-wow-duration":"1.5s"}},[_c('div',{staticClass:"kv_content"},[_c('picture',[_c('source',{attrs:{"srcset":"/soho/img/index/kv1-mobile.jpg","media":"(max-width: 600px)"}}),_c('img',{attrs:{"src":"/soho/img/index/kv1.jpg","alt":"昆布芽"}})]),_c('picture',[_c('source',{attrs:{"srcset":"/soho/img/index/kv2-mobile.jpg","media":"(max-width: 600px)"}}),_c('img',{attrs:{"src":"/soho/img/index/kv2.jpg","alt":"海藻製造所"}})])])]),_c('div',{staticClass:"productIntro"},[_c('div',{staticClass:"productIntro_marque"},[_c('div',{staticClass:"marque wow fadeInRight",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".1s"}},[_c('div',{staticClass:"marque_wrap"},[_c('span',{staticClass:"content"},[_vm._v("THE BOON BESTOWED BY THE SEA _ "),_c('span',{staticClass:"content_highLight"},[_vm._v("大海賜予的恩惠「 海藻 」")])])])])]),_c('div',{staticClass:"productIntro_intro"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productList"},[_c('div',{staticClass:"productList_container"},[_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])])]),_c('div',{staticClass:"productList_container"},[_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻2 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])])]),_c('div',{staticClass:"productList_container"},[_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻3 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item1.png"}})])])]),_c('div',{staticClass:"productItem"},[_c('div',{staticClass:"productItem_desc"},[_c('div',{staticClass:"productDesc"},[_c('i',{staticClass:"productDesc_icon"}),_c('div',{staticClass:"productDesc_title"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productDesc_desc"},[_vm._v(" 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ")]),_c('div',{staticClass:"productDesc_price"},[_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])]),_c('div',{staticClass:"productDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])]),_c('div',{staticClass:"productItem_thumb"},[_c('div',{staticClass:"productThumb wow flipInX",attrs:{"data-wow-duration":"1s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product1_item2.png"}})])])])])])])])]),_c('div',{staticClass:"ad"},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item1.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item2.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item3.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item4.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item5.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item6.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item7.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item8.jpg"}})]),_c('a',{staticClass:"ad_img wow fadeIn",attrs:{"href":"","data-wow-duration":"1.5s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/ad_item9.jpg"}})])])]),_c('div',{staticClass:"productGift"},[_c('div',{staticClass:"productGiftTitle"},[_c('div',{staticClass:"container"},[_c('img',{attrs:{"src":"/soho/img/index/product2_title.png"}})])]),_c('div',{staticClass:"productGiftSet"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"setList"},[_c('a',{staticClass:"setItem wow fadeInLeft",attrs:{"href":"","data-wow-duration":"1.2s","data-wow-delay":".1s"}},[_c('div',{staticClass:"setItem_thumb"},[_c('div',{staticClass:"setThumb"},[_c('img',{attrs:{"src":"/soho/img/index/product2_item1.png"}}),_c('div',{staticClass:"setThumb_action"},[_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])])])]),_c('div',{staticClass:"setItem_desc"},[_c('div',{staticClass:"setDesc"},[_c('div',{staticClass:"setDesc_title"},[_vm._v(" 六色海藻組合 ")]),_c('div',{staticClass:"setDesc_desc"},[_vm._v(" 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ")]),_c('div',{staticClass:"setDesc_price"},[_c('div',{staticClass:"price price--delete"},[_vm._v(" 售價"),_c('span',[_vm._v("$980")])]),_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$900")])])]),_c('div',{staticClass:"setDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])])]),_c('a',{staticClass:"setItem wow fadeInRight",attrs:{"href":"","data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('div',{staticClass:"setItem_thumb"},[_c('div',{staticClass:"setThumb"},[_c('img',{attrs:{"src":"/soho/img/index/product2_item2.png"}}),_c('div',{staticClass:"setThumb_action"},[_c('div',{staticClass:"action"},[_c('a',{staticClass:"action_icon action_icon-cart",attrs:{"href":""}}),_c('a',{staticClass:"action_icon action_icon-bag",attrs:{"href":""}})])])])]),_c('div',{staticClass:"setItem_desc"},[_c('div',{staticClass:"setDesc"},[_c('div',{staticClass:"setDesc_title"},[_vm._v(" 湯底完勝兩入組 ")]),_c('div',{staticClass:"setDesc_desc"},[_vm._v(" 使用國產香菇與醬油製作而成，無化學調味無香精色素，只要七分鐘就能上好湯 ")]),_c('div',{staticClass:"setDesc_price"},[_c('div',{staticClass:"price price--delete"},[_vm._v(" 售價"),_c('span',[_vm._v("$1080")])]),_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$990")])])]),_c('div',{staticClass:"setDesc_deco"},[_c('div',{staticClass:"deco move-x"})])])])])])])]),_c('div',{staticClass:"productGiftPromote"},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"wow fadeInUp",attrs:{"href":"","data-wow-duration":"1.2s","data-wow-delay":".1s"}},[_c('img',{attrs:{"src":"/soho/img/index/product2_item3.png"}})])])])]),_c('div',{staticClass:"productFeature"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productFeature_promote"},[_c('div',{staticClass:"productFeature_promoteItem wow fadeInDown",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".1s"}},[_vm._v(" 新註冊現折 100 元 ")]),_c('div',{staticClass:"productFeature_promoteItem wow fadeInDown",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_vm._v(" 9/01 - 9/15 全站免運 ")])]),_c('div',{staticClass:"productFeature_gallery"},[_c('div',{staticClass:"productFeature_gallery-col productFeature_gallery-col-3"},[_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_1.jpg","alt":"日高極細昆布"}})]),_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".4s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_2.jpg","alt":"昆布"}})]),_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".6s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_3.jpg","alt":"海帶芽湯"}})])]),_c('div',{staticClass:"productFeature_gallery-col productFeature_gallery-col-2"},[_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".4s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_4.jpg","alt":"職人海帶芽湯"}})]),_c('div',{staticClass:"productFeature_galleryItem wow flipInY",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".4s"}},[_c('img',{attrs:{"src":"/soho/img/index/feature_5.jpg","alt":"海帶芽"}})])])])])]),_c('div',{staticClass:"productBg"},[_c('div',{staticClass:"productRecommend"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productRecommend_item wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('div',{staticClass:"productRecommend_item-pic "},[_c('img',{attrs:{"src":"/soho/img/index/product3_main.png","alt":""}})]),_c('div',{staticClass:"productRecommend_item-info "},[_c('div',{staticClass:"productRecommend_item-infoWrap"},[_c('div',{staticClass:"productRecommend_item-infoTitle"},[_vm._v(" 焙煎胡麻 ")]),_c('div',{staticClass:"productRecommend_item-infoText"},[_vm._v(" 焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻 ")]),_c('div',{staticClass:"productRecommend_item-infoArrow move-x"},[_c('div')])])]),_c('a',{attrs:{"href":"javascript:;","target":"_blank"}})])])]),_c('div',{staticClass:"productAll"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productAll_list"},[_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_item1.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])]),_c('div',{staticClass:"productAll_item"},[_c('div',{staticClass:"productAll_itemWrap"},[_c('div',{staticClass:"productAll_itemTop"},[_c('div',{staticClass:"productAll_itemTop-pic wow zoomIn",attrs:{"data-wow-duration":"1.2s","data-wow-delay":".2s"}},[_c('img',{attrs:{"src":"/soho/img/index/product3_itme2.png","alt":"黑芝麻醬"}})]),_c('div',{staticClass:"productAll_itemTop-arrow"})]),_c('div',{staticClass:"productAll_itemBottom"},[_c('div',{staticClass:"productAll_itemBottom-textWrap"},[_c('div',{staticClass:"productAll_itemBottom-textWrapTitle"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapText"},[_vm._v(" 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ")]),_c('div',{staticClass:"productAll_itemBottom-textWrapPrice"},[_c('p',[_vm._v(" 原價 "),_c('span',[_vm._v("$300")])]),_c('p',[_vm._v(" 會員價 "),_c('span',[_vm._v("$280")])])])])]),_c('a',{attrs:{"href":"javascript:;"}})]),_c('div',{staticClass:"productAll_itemBtns"},[_c('button',{staticClass:"productAll_itemBtns-cart"}),_c('button',{staticClass:"productAll_itemBtns-bag"})])])])])])]),_c('div',{staticClass:"slogan"},[_c('div',{staticClass:"slogan_decoration"},[_c('img',{attrs:{"src":"/soho/img/index/product3_decoration.png"}})]),_c('img',{staticClass:"slogan_amin wow zoomIn",attrs:{"data-wow-duration":"1s","src":"/soho/img/index/slogan_title.png","alt":"職人精神"}})])])}]


// CONCATENATED MODULE: ./src/pages/Index/index.vue?vue&type=template&id=65bce50a

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__("9bd9");

// CONCATENATED MODULE: ./src/pages/Index/index.vue






/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  pages_Indexvue_type_script_lang_js,
  Indexvue_type_template_id_65bce50a_render,
  Indexvue_type_template_id_65bce50a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = (Index_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Header/index.vue?vue&type=template&id=a6590d7a
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Footer/index.vue?vue&type=template&id=8964e6ae
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/CartProcess1/index.vue?vue&type=template&id=3ce5146f
var CartProcess1vue_type_template_id_3ce5146f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess1"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"SHOPPING CART","zh":"我的購物車"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'MEMBER CENTER', path: '/cartProcess1.html'}]}})],1),_vm._m(0),_c('div',{staticClass:"CartProcess1_title"},[_vm._v(" 詳細訂單資料 / ")]),_vm._m(1),_vm._m(2)])])}
var CartProcess1vue_type_template_id_3ce5146f_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"memberCenter_progressBar"},[_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-active memberCenter_progressBar-step-cartProcess"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process1.png","alt":"購物車"}})]),_c('p',[_vm._v("購物車")])]),_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-confirmData"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process2.png","alt":"商品及資料確認"}})]),_c('p',[_vm._v("商品及資料確認")])]),_c('div',{staticClass:"memberCenter_progressBar-step memberCenter_progressBar-step-completeOrder"},[_c('div',{staticClass:"memberCenter_progressBar-step-icon"},[_c('img',{attrs:{"src":"/soho/img/icon_process3.png","alt":"訂單完成"}})]),_c('p',[_vm._v("訂單完成")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess1_content"},[_c('div',{staticClass:"CartProcess1_orderList"},[_c('div',{staticClass:"CartProcess1_orderItem"},[_c('div',{staticClass:"CartProcess1_orderItem-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good1.png","alt":""}})]),_c('div',{staticClass:"CartProcess1_orderItem-info"},[_c('div',{staticClass:"CartProcess1_orderItem-price"},[_c('div',{attrs:{"cl":""}},[_vm._v(" 六色海藻 ")]),_c('div',[_vm._v(" $330 ")])]),_c('div',{staticClass:"CartProcess1_orderItem-amount"},[_vm._v(" 數量："),_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"CartProcess1_orderItem-count"},[_vm._v(" 小計： $660 ")])]),_c('button',{staticClass:"CartProcess1_orderItem-delete"})]),_c('div',{staticClass:"CartProcess1_orderItem"},[_c('div',{staticClass:"CartProcess1_orderItem-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good1.png","alt":""}})]),_c('div',{staticClass:"CartProcess1_orderItem-info"},[_c('div',{staticClass:"CartProcess1_orderItem-price"},[_c('div',{attrs:{"cl":""}},[_vm._v(" 六色海藻 ")]),_c('div',[_vm._v(" $330 ")])]),_c('div',{staticClass:"CartProcess1_orderItem-amount"},[_vm._v(" 數量："),_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"CartProcess1_orderItem-count"},[_vm._v(" 小計： $660 ")])]),_c('button',{staticClass:"CartProcess1_orderItem-delete"})]),_c('div',{staticClass:"CartProcess1_orderItem"},[_c('div',{staticClass:"CartProcess1_orderItem-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good2.png","alt":""}})]),_c('div',{staticClass:"CartProcess1_orderItem-info"},[_c('div',{staticClass:"CartProcess1_orderItem-price"},[_c('div',[_vm._v("六色海藻")]),_c('div',[_vm._v("$330")])]),_c('div',{staticClass:"CartProcess1_orderItem-amount"},[_vm._v(" 數量："),_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"CartProcess1_orderItem-count"},[_vm._v(" 小計： $660 ")])]),_c('button',{staticClass:"CartProcess1_orderItem-delete"})]),_c('div',{staticClass:"CartProcess1_orderItem"},[_c('div',{staticClass:"CartProcess1_orderItem-pic"},[_c('img',{attrs:{"src":"/soho/img/cartProcess1/good3.png","alt":""}})]),_c('div',{staticClass:"CartProcess1_orderItem-info"},[_c('div',{staticClass:"CartProcess1_orderItem-price"},[_c('div',[_vm._v("六色海藻")]),_c('div',[_vm._v("$330")])]),_c('div',{staticClass:"CartProcess1_orderItem-amount"},[_vm._v(" 數量："),_c('div',{staticClass:"customSelect"},[_c('select',[_c('option',{attrs:{"value":"1"}},[_vm._v(" 1 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 2 ")])])])]),_c('div',{staticClass:"CartProcess1_orderItem-count"},[_vm._v(" 小計： $660 ")])]),_c('button',{staticClass:"CartProcess1_orderItem-delete"})])]),_c('div',{staticClass:"CartProcess1_discount"},[_c('div',{staticClass:"CartProcess1_discount-used"},[_c('div',{staticClass:"CartProcess1_discount-title"},[_vm._v(" 已享用優惠 ")]),_c('div',{staticClass:"CartProcess1_discount-list"},[_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle"},[_vm._v(" 首次購物折 50 ")]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_vm._v(" -NT$50 ")])]),_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle"},[_vm._v(" 國內滿千免運 ")]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_vm._v(" 國內滿千免運 ")])]),_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle"},[_vm._v(" 全館3件以上9.5折 ")]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_vm._v(" -NT$75 ")])])])]),_c('div',{staticClass:"CartProcess1_discount-unUsed"},[_c('div',{staticClass:"CartProcess1_discount-title"},[_vm._v(" 尚有更多輕踩優惠等著你！目前未享用： ")]),_c('div',{staticClass:"CartProcess1_discount-list"},[_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle CartProcess1_discount-itemTitle-unused"},[_c('div',[_vm._v("折價券")]),_c('div',{staticClass:"CartProcess1_discount-itemTitle-sub"},[_vm._v(" 不可與首次購物同時使用 ")])]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_c('div',{staticClass:"customSelect"},[_c('select',{staticClass:"CartProcess1_discount-select",attrs:{"disabled":""}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v(" 可使用折價券選擇 ")])])])])]),_c('div',{staticClass:"CartProcess1_discount-item"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle CartProcess1_discount-itemTitle-unused CartProcess1_discount-itemTitle-unused"},[_c('div',[_vm._v("紅利點數回饋")]),_c('div',{staticClass:"CartProcess1_discount-itemTitle-sub"},[_vm._v(" 不可與首次購物同時使用 ")])]),_c('div',{staticClass:"CartProcess1_discount-itemContent"},[_c('div',{staticClass:"CartProcess1_discount-itemContent-input"},[_c('input',{attrs:{"type":"text","placeholder":"請輸入想兌換紅利點數"}}),_vm._v(" "),_c('button',{staticClass:"CartProcess1_btn CartProcess1_btn-small"},[_vm._v(" 套用 ")])]),_c('div',{staticClass:"CartProcess1_discount-itemContent-text"},[_vm._v(" 紅利點數餘額 NT$100 ")])])]),_c('div',{staticClass:"CartProcess1_discount-item CartProcess1_discount-item-gift"},[_c('div',{staticClass:"CartProcess1_discount-itemTitle"},[_c('div',[_vm._v(" 【官網獨家｜滿額贈】"),_c('br'),_vm._v("藻作坊限量帆布提袋（數量有限，送完為止） ")])]),_c('div',{staticClass:"CartProcess1_discount-itemTag"},[_vm._v(" 再買 NT$320 即享有贈品 ")])])])]),_c('button',{staticClass:"CartProcess1_btn CartProcess1_btn-small CartProcess1_btn-go-product"},[_vm._v(" 繼續購物 ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CartProcess1_charge"},[_c('div',{staticClass:"CartProcess1_charge-wrap"},[_c('div',{staticClass:"CartProcess1_charge-total"},[_c('div',{staticClass:"CartProcess1_charge-total-zh"},[_vm._v(" 商品合計 ")]),_c('div',{staticClass:"CartProcess1_charge-total-data"},[_vm._v(" $1450 ")])]),_c('div',{staticClass:"CartProcess1_charge-bonus"},[_c('div',{staticClass:"CartProcess1_charge-bonus-zh"},[_vm._v(" 訂單完成後獲得紅利點數 ")]),_c('div',{staticClass:"CartProcess1_charge-bonus-data"},[_vm._v(" + NT$36 ")])]),_c('a',{staticClass:"CartProcess1_goCharge CartProcess1_btn CartProcess1_btn-go-checkout",attrs:{"href":"javascript:;"}},[_vm._v("前往結賬")])])])}]


// CONCATENATED MODULE: ./src/pages/CartProcess1/index.vue?vue&type=template&id=3ce5146f

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Title/index.vue?vue&type=template&id=3fc24f20
var Titlevue_type_template_id_3fc24f20_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Title"},[_c('div',{staticClass:"Title_wrap"},[_c('div',{staticClass:"Title_en"},[_vm._v(" "+_vm._s(_vm.en)+" ")]),_c('div',{staticClass:"Title_zh"},[_c('span',[_vm._v(_vm._s(_vm.zh))])])])])}
var Titlevue_type_template_id_3fc24f20_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Title/index.vue?vue&type=template&id=3fc24f20

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
// EXTERNAL MODULE: ./src/components/Title/index.vue?vue&type=style&index=0&id=3fc24f20&prod&lang=scss
var Titlevue_type_style_index_0_id_3fc24f20_prod_lang_scss = __webpack_require__("49e5");

// CONCATENATED MODULE: ./src/components/Title/index.vue






/* normalize component */

var Title_component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_js,
  Titlevue_type_template_id_3fc24f20_render,
  Titlevue_type_template_id_3fc24f20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Title = (Title_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Breadcrumb/index.vue?vue&type=template&id=3dd984d0
var Breadcrumbvue_type_template_id_3dd984d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumb"},[_c('div',{staticClass:"breadcrumb_wrap"},[_c('div',{staticClass:"breadcrumb_item"},[_vm._m(0),_vm._v(" "+_vm._s(_vm.linkData.length > 0 && '/')+" ")]),_vm._l((_vm.linkData),function(item,index){return _c('div',{key:item.title,staticClass:"breadcrumb_item"},[_c('a',{attrs:{"href":item.pah}},[_vm._v(_vm._s(item.title))]),_vm._v(" "+_vm._s((_vm.linkData.length - 1) > index ? '/' : '')+" ")])})],2)])}
var Breadcrumbvue_type_template_id_3dd984d0_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/index.html"}},[_c('img',{attrs:{"src":"/soho/img/icon_home.png"}}),_vm._v("HOME")])}]


// CONCATENATED MODULE: ./src/components/Breadcrumb/index.vue?vue&type=template&id=3dd984d0

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
// EXTERNAL MODULE: ./src/components/Breadcrumb/index.vue?vue&type=style&index=0&id=3dd984d0&prod&lang=scss
var Breadcrumbvue_type_style_index_0_id_3dd984d0_prod_lang_scss = __webpack_require__("ee03");

// CONCATENATED MODULE: ./src/components/Breadcrumb/index.vue






/* normalize component */

var Breadcrumb_component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js,
  Breadcrumbvue_type_template_id_3dd984d0_render,
  Breadcrumbvue_type_template_id_3dd984d0_staticRenderFns,
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
  CartProcess1vue_type_template_id_3ce5146f_render,
  CartProcess1vue_type_template_id_3ce5146f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CartProcess1 = (CartProcess1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ProductContent/index.vue?vue&type=template&id=40798fe2
var ProductContentvue_type_template_id_40798fe2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductContent"},[_c('div',{staticClass:"productHeader"}),_c('div',{staticClass:"productTop"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productTop_title"},[_c('Title',{attrs:{"en":"PRODUCTS","zh":"產品資訊"}})],1),_c('div',{staticClass:"productTop_breadcrumb"},[_c('Breadcrumb',{attrs:{"link-data":[{title: 'PRODUCTS', path: '/ProductContent.html'}]}})],1)])]),_vm._m(0),_vm._m(1)])}
var ProductContentvue_type_template_id_40798fe2_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"productIntro"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"productIntro_wrap"},[_c('div',{staticClass:"navigation"},[_c('div',{staticClass:"title"},[_vm._v(" 產品資訊 ")]),_c('ul',[_c('li',{staticClass:"level level-1"},[_c('a',[_vm._v("查看全部")])]),_c('li',{staticClass:"level level-1 active hasChild isOpened"},[_c('a',[_vm._v(" 【9/01-9/14】中秋禮盒-送你送健康 ")]),_c('ul',[_c('li',{staticClass:"level level-2 active"},[_c('a',[_vm._v("海藻")])]),_c('li',{staticClass:"level level-2"},[_c('a',[_vm._v("醬料")])]),_c('li',{staticClass:"level level-2"},[_c('a',[_vm._v("高湯")])]),_c('li',{staticClass:"level level-2"},[_c('a',[_vm._v("組合搭配")])])])]),_c('li',{staticClass:"level level-1 hasChild"},[_c('a',[_vm._v("新品上市")])]),_c('li',{staticClass:"level level-1"},[_c('a',[_vm._v("暢銷熱賣")])]),_c('li',{staticClass:"level level-1"},[_c('a',[_vm._v("囤貨必備")])])])]),_c('div',{staticClass:"introduce"},[_c('div',{staticClass:"introduce_slider"},[_c('div',{staticClass:"slider"},[_c('div',{staticClass:"slider_main"},[_c('div',[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})])]),_c('div',{staticClass:"slider_nav"}),_c('div',{staticClass:"slider_sub"},[_c('div',{staticClass:"sub"},[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',{staticClass:"sub"},[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',{staticClass:"sub"},[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})]),_c('div',{staticClass:"sub"},[_c('img',{attrs:{"src":"/soho/img/productContent/productContent_good1.jpg"}})])])])]),_c('div',{staticClass:"introduce_desc"},[_c('div',{staticClass:"desc"},[_c('div',{staticClass:"desc_title"},[_c('div',{staticClass:"title"},[_vm._v(" 六色海藻 ")])]),_c('div',{staticClass:"desc_price"},[_c('div',{staticClass:"price price--delete"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])]),_c('div',{staticClass:"price"},[_vm._v(" 售價"),_c('span',[_vm._v("$330")])])]),_c('div',{staticClass:"desc_mount"},[_c('div',{staticClass:"mount"},[_c('a',{staticClass:"mount_icon mount_icon--minus"},[_vm._v("-")]),_c('span',{staticClass:"mount_number"},[_vm._v("1")]),_c('a',{staticClass:"mount_icon mount_icon--plus"},[_vm._v("+")])])]),_c('div',{staticClass:"desc_action"},[_c('div',{staticClass:"action"},[_c('a',{staticClass:"btn"},[_vm._v("直接購買")]),_c('a',{staticClass:"btn btn--border"},[_vm._v("加入購物車")]),_c('a',{staticClass:"btn btn--border btn--min"},[_c('i',{staticClass:"icon icon_heart"})])])])]),_c('hr',{staticClass:"line"}),_c('div',{staticClass:"contentText"},[_c('div',{staticClass:"text text--highLight"},[_vm._v(" 嚴選六種優質海藻，方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的膳食纖維與微量元素。 嚴選六種優質海藻，方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的膳食纖維與微量元素。 ")]),_c('br'),_c('div',{staticClass:"text"},[_vm._v(" 編號 / 00139059 ")]),_c('br'),_c('div',{staticClass:"text"},[_vm._v(" 注意事項 /"),_c('br'),_vm._v(" 請放置陰涼處或冷藏"),_c('br'),_vm._v(" 請放置陰涼處或冷藏"),_c('br'),_vm._v(" 請放置陰涼處或冷藏"),_c('br'),_vm._v(" 請放置陰涼處或冷藏"),_c('br'),_vm._v(" 請放置陰涼處或冷藏 ")]),_c('br'),_c('div',{staticClass:"text"},[_vm._v(" 淨重 / 80g (一包約8~10人份) ")]),_c('br'),_c('div',{staticClass:"text"},[_vm._v(" 內容物 /"),_c('br'),_vm._v(" 海帶芽.海帶芽莖絲.寒天.雞冠藻.紅花櫻藻.黃花櫻藻 ")])])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"productDesc"},[_c('div',{staticClass:"container"},[_c('img',{staticClass:"image",attrs:{"src":"/soho/img/productContent/productContent_main.jpg"}}),_c('div',{staticClass:"title"},[_vm._v(" 味精裡面含有人類的第五味覺「鮮味」 ")]),_c('div',{staticClass:"content"},[_vm._v(" 跟酸.甜.苦.鹹一樣都是我們人類的味覺，只是鮮味比較晚才被發現，而提到鮮味，就必須要介紹到它的發現者與發明者池田菊苗教授的故事了。 "),_c('br'),_vm._v(" 1908年的一天，日本東京帝國大學池田菊苗化學教授，晚上下班後正吃著妻子準備的可口飯菜。他發現湯的味道特別鮮美,用小勺攪動幾下,發 現碗中只不過是一些海帶和幾片黃瓜。 「海帶和黃瓜都是非常普通的食物,怎麼會產生這樣的鮮味呢?」池田自言自語起來,「嗯,也許海帶里有奧妙。」職業敏感使的教授離開飯桌,跑 進了實驗室里。他取來一些海帶,細細地研究。半年後,池田菊苗教授發表了他的研究成果,在海帶中可提取出一和叫做麩胺酸的化學物質,如把極 少量的麩胺酸鈉加到湯里去,就能使味道鮮美至極。1908年的一天，日本東京帝國大學池田菊苗化學教授，晚上下班後正吃著妻子準備的可口飯 菜。他發現湯的味道特別鮮美,用小勺攪動幾下,發 現碗中只不過是一些海帶和幾片黃瓜。 ")]),_c('img',{staticClass:"image",attrs:{"src":"/soho/img/productContent/productContent_pic.jpg"}}),_c('div',{staticClass:"back"},[_c('a',{staticClass:"btn"},[_vm._v("回上一頁 ")])])])])}]


// CONCATENATED MODULE: ./src/pages/ProductContent/index.vue?vue&type=template&id=40798fe2

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
  ProductContentvue_type_template_id_40798fe2_render,
  ProductContentvue_type_template_id_40798fe2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductContent = (ProductContent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/ProductList/index.vue?vue&type=template&id=963c7ff4
var ProductListvue_type_template_id_963c7ff4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"PRODUCTS","zh":"產品資訊"}})],1),_vm._m(0)]),_c('div',{staticClass:"helper"})])}
var ProductListvue_type_template_id_963c7ff4_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ProductList_content"},[_c('div',{staticClass:"ProductList_content-menu"},[_c('div',{staticClass:"ProductList_content-menuTitle"},[_vm._v(" 產品資訊 ")]),_c('div',{staticClass:"ProductList_content-menuItemList"},[_c('div',{staticClass:"ProductList_content-menuItem active"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_vm._v(" 查看全部 ")])]),_c('div',{staticClass:"ProductList_content-menuItem ProductList_content-menuItem-toggle active"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("【 9/01-9/14 】中秋禮盒 - 送你送健康")])]),_c('div',{staticClass:"ProductList_content-menuItemSub"},[_c('div',{staticClass:"ProductList_content-menuItemSubItem active"},[_vm._v(" 海藻 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 醬料 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 高湯 ")]),_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 組合搭配 ")])])]),_c('div',{staticClass:"ProductList_content-menuItem ProductList_content-menuItem-toggle"},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("新品上市")])]),_c('div',{staticClass:"ProductList_content-menuItemSub"},[_c('div',{staticClass:"ProductList_content-menuItemSubItem"},[_vm._v(" 新品一 ")])])]),_c('div',{staticClass:"ProductList_content-menuItem "},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("暢銷熱賣")])])]),_c('div',{staticClass:"ProductList_content-menuItem "},[_c('div',{staticClass:"ProductList_content-menuItemTitle"},[_c('span',[_vm._v("囤貨必備")])])])])]),_c('div',{staticClass:"ProductList_content-product"},[_c('div',{staticClass:"ProductList_content-product-ad"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_ad.jpg","alt":"海帶芽湯"}})]),_c('div',{staticClass:"ProductList_content-product-wrap"},[_c('div',{staticClass:"ProductList_content-product-filters active"},[_c('div',[_c('div',{staticClass:"ProductList_content-product-filter select"},[_c('select',[_c('option',{attrs:{"value":"","selected":""}},[_vm._v(" 預設 ")]),_c('option',{attrs:{"value":"1"}},[_vm._v(" 價格低至高 ")]),_c('option',{attrs:{"value":"2"}},[_vm._v(" 價格高至低 ")])])]),_c('div',{staticClass:"ProductList_content-product-filter price-filter active"},[_c('button',[_vm._v("金額範圍")])]),_c('div',{staticClass:"ProductList_content-product-filter select"},[_c('select',[_c('option',{attrs:{"value":"","selected":""}},[_vm._v(" 商品評分 ")])])])]),_c('div',{staticClass:"ProductList_content-product-filter-advanced price"},[_c('label',{staticClass:"inputWrap"},[_c('span',[_vm._v("最低價格")]),_c('span',{staticClass:"symbol"},[_vm._v("$")]),_c('input',{attrs:{"inputmode":"numeric","value":"0"}})]),_c('span',[_vm._v(" - ")]),_c('label',{staticClass:"inputWrap"},[_c('span',[_vm._v("最高價格")]),_c('span',{staticClass:"symbol"},[_vm._v("$")]),_c('input',{attrs:{"inputmode":"numeric","value":"2000"}})]),_c('button',[_vm._v("搜尋")])])]),_c('div',{staticClass:"ProductList_content-product-list"},[_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item1.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的現代人忙碌而無")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item2.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item3.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 六色海藻 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("嚴選六種優質海藻,方便簡單的料理方式來補足現代人忙碌而無法攝取到足夠的現代人忙碌而無")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('button',[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item4.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 昆布鹽 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item5.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 海苔醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item6.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 海苔醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item7.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item8.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])]),_c('div',{staticClass:"ProductList_content-product-item"},[_c('div',{staticClass:"productPic"},[_c('img',{attrs:{"src":"/soho/img/productList/productList_item9.png","alt":""}}),_c('img',{staticClass:"hover",attrs:{"src":"/soho/img/productList/productList_item1-hover.png","alt":""}})]),_c('div',{staticClass:"productInfo"},[_c('div',{staticClass:"productName"},[_vm._v(" 黑芝麻醬 ")]),_c('div',{staticClass:"productIntro"},[_c('p',[_vm._v("昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的")])]),_c('div',{staticClass:"deco"}),_c('div',{staticClass:"productControl"},[_c('a',{attrs:{"href":"https://yahoo.com"}},[_vm._v("直接購買")]),_c('button',[_vm._v("加入購物車")])])])])]),_c('div',{staticClass:"ProductList_content-product-pageControl"},[_c('button',[_vm._v("PREVIOUS")]),_c('div',{staticClass:"ProductList_content-product-pageControl-pages"},[_c('button',{staticClass:"active"},[_vm._v(" 1 ")]),_c('button',{},[_vm._v(" 2 ")])]),_c('button',[_vm._v("NEXT")])])])])])}]


// CONCATENATED MODULE: ./src/pages/ProductList/index.vue?vue&type=template&id=963c7ff4

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
//
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
    Title: Title
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
  ProductListvue_type_template_id_963c7ff4_render,
  ProductListvue_type_template_id_963c7ff4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductList = (ProductList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login/index.vue?vue&type=template&id=ae5132f8
var Loginvue_type_template_id_ae5132f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Login"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"MEMBER LOGIN","zh":"會員登入"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'MEMBER LOGIN', path: '/login.html'}]}})],1),_vm._m(0),_vm._m(1)])])}
var Loginvue_type_template_id_ae5132f8_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoginSignUp_links"},[_c('a',{attrs:{"href":"/soho/signup.html"}},[_vm._v("會員註冊")]),_c('a',{staticClass:"active",attrs:{"href":"/soho/login.html"}},[_vm._v("會員登入")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoginSignUp_formWrap"},[_c('div',{staticClass:"LoginSignUp_socialMedia"},[_c('div',{staticClass:"LoginSignUp_title"},[_vm._v(" 社群帳號登入 / ")]),_c('button',{staticClass:"LoginSignUp_line"},[_c('img',{attrs:{"src":"/soho/img/login/login_line.jpg","alt":""}})])]),_c('div',{staticClass:"LoginSignUp_member"},[_c('div',{staticClass:"LoginSignUp_title"},[_vm._v(" 會員帳號登入 / ")]),_c('div',{staticClass:"LoginSignUp_member-form"},[_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_c('span',[_vm._v("電子信箱")])]),_c('input',{attrs:{"id":"","placeholder":"請輸入電子信箱","type":"text","name":""}})]),_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_vm._v("密碼")]),_c('input',{attrs:{"id":"","type":"password","name":""}})]),_c('div',{staticClass:"LoginSignUp_member-form-utils"},[_c('label',{staticClass:"checkbox_wrap"},[_c('input',{attrs:{"type":"checkbox","checked":"checked"}}),_vm._v("記住我 "),_c('span',{staticClass:"checkmark"})]),_c('div',[_c('a',{staticClass:"forgetPwd",attrs:{"href":""}},[_vm._v("忘記密碼？")])])]),_c('button',{staticClass:"LoginSignUp_member-form-btn"},[_vm._v(" 登"),_c('span'),_vm._v("入 ")]),_c('div',{staticClass:"LoginSignUp_member-form-divider"},[_c('span',[_vm._v("或是")])]),_c('button',{staticClass:"LoginSignUp_member-form-btn LoginSignvUp_member-form-btn-secondary"},[_vm._v(" 註"),_c('span'),_vm._v("冊 ")])])])])}]


// CONCATENATED MODULE: ./src/pages/Login/index.vue?vue&type=template&id=ae5132f8

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
  Loginvue_type_template_id_ae5132f8_render,
  Loginvue_type_template_id_ae5132f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Login = (Login_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a8c00be2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/SignUp/index.vue?vue&type=template&id=de11c8d2
var SignUpvue_type_template_id_de11c8d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SignUp"},[_c('div',{staticClass:"container container-page"},[_c('div',{staticClass:"page_commonTitleArea"},[_c('Title',{attrs:{"en":"SIGN UP","zh":"會員註冊"}}),_c('Breadcrumb',{attrs:{"link-data":[{title: 'SIGN UP', path: '/signup.html'}]}})],1),_vm._m(0),_vm._m(1)])])}
var SignUpvue_type_template_id_de11c8d2_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoginSignUp_links"},[_c('a',{staticClass:"active",attrs:{"href":"/soho/signup.html"}},[_vm._v("會員註冊")]),_c('a',{attrs:{"href":"/soho/login.html"}},[_vm._v("會員登入")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoginSignUp_formWrap"},[_c('div',{staticClass:"LoginSignUp_socialMedia"},[_c('div',{staticClass:"LoginSignUp_title"},[_vm._v(" 社群帳號註冊 / ")]),_c('button',{staticClass:"LoginSignUp_line"},[_c('img',{attrs:{"src":"/soho/img/login/login_line.jpg","alt":""}})])]),_c('div',{staticClass:"LoginSignUp_member"},[_c('div',{staticClass:"LoginSignUp_title"},[_vm._v(" 會員註冊 / ")]),_c('div',{staticClass:"LoginSignUp_member-form"},[_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_c('span',[_vm._v("電子信箱")])]),_c('input',{attrs:{"id":"","placeholder":"請輸入電子信箱","type":"text","name":""}})]),_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_vm._v("密碼")]),_c('input',{attrs:{"id":"","type":"password","name":""}})]),_c('label',{attrs:{"for":""}},[_c('div',{staticClass:"name"},[_vm._v("重新輸入密碼")]),_c('input',{attrs:{"id":"","type":"password","name":""}})]),_c('label',{staticClass:"last",attrs:{"for":""}},[_c('div',{staticClass:"name"},[_c('span',[_vm._v("使用者名稱")])]),_c('input',{attrs:{"id":"","placeholder":"請輸入使用者名稱，字數限10字內","type":"text","name":""}})]),_c('button',{staticClass:"LoginSignUp_member-form-btn"},[_vm._v(" 註"),_c('span'),_vm._v("冊 ")]),_c('div',{staticClass:"SignUp_goLogin"},[_vm._v(" 已有帳號？"),_c('a',{attrs:{"href":"/soho/login.html"}},[_vm._v("立即登入")])])])])])}]


// CONCATENATED MODULE: ./src/pages/SignUp/index.vue?vue&type=template&id=de11c8d2

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
  SignUpvue_type_template_id_de11c8d2_render,
  SignUpvue_type_template_id_de11c8d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SignUp = (SignUp_component.exports);
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
  path: '/productContent.html',
  name: 'ProductContent',
  component: ProductContent
}, {
  path: '/productList.html',
  name: 'ProductList',
  component: ProductList
}, {
  path: '/login.html',
  name: 'Login',
  component: Login
}, {
  path: '/signup.html',
  name: 'signup',
  component: SignUp
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

/***/ "5e1e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "640e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "690e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "8a5e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8cbd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "963d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8529a01c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("06aa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8529a01c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8529a01c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "a1c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d8d4084_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("50e4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d8d4084_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d8d4084_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a7cd":
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

/***/ "e727":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_fb7ad424_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8a5e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_fb7ad424_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_fb7ad424_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ee03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3dd984d0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f565");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3dd984d0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3dd984d0_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f565":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });