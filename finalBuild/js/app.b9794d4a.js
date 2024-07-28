/******/ (function (modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback (data) {
    /******/ 		var chunkIds = data[0]
    /******/ 		var moreModules = data[1]
    /******/ 		var executeModules = data[2]
    /******/
    /******/ 		// add "moreModules" to the modules object,
    /******/ 		// then flag all "chunkIds" as loaded and fire callback
    /******/ 		var moduleId; var chunkId; var i = 0; var resolves = []
    /******/ 		for (;i < chunkIds.length; i++) {
      /******/ 			chunkId = chunkIds[i]
      /******/ 			if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
        /******/ 				resolves.push(installedChunks[chunkId][0])
        /******/ 			}
      /******/ 			installedChunks[chunkId] = 0
      /******/ 		}
    /******/ 		for (moduleId in moreModules) {
      /******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /******/ 				modules[moduleId] = moreModules[moduleId]
        /******/ 			}
      /******/ 		}
    /******/ 		if (parentJsonpFunction) parentJsonpFunction(data)
    /******/
    /******/ 		while (resolves.length) {
      /******/ 			resolves.shift()()
      /******/ 		}
    /******/
    /******/ 		// add entry modules from loaded chunk to deferred list
    /******/ 		deferredModules.push.apply(deferredModules, executeModules || [])
    /******/
    /******/ 		// run deferred modules when all chunks ready
    /******/ 		return checkDeferredModules()
    /******/ 	};
  /******/ 	function checkDeferredModules () {
    /******/ 		var result
    /******/ 		for (var i = 0; i < deferredModules.length; i++) {
      /******/ 			var deferredModule = deferredModules[i]
      /******/ 			var fulfilled = true
      /******/ 			for (var j = 1; j < deferredModule.length; j++) {
        /******/ 				var depId = deferredModule[j]
        /******/ 				if (installedChunks[depId] !== 0) fulfilled = false
        /******/ 			}
      /******/ 			if (fulfilled) {
        /******/ 				deferredModules.splice(i--, 1)
        /******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0])
        /******/ 			}
      /******/ 		}
    /******/
    /******/ 		return result
    /******/ 	}
  /******/
  /******/ 	// The module cache
  /******/ 	var installedModules = {}
  /******/
  /******/ 	// object to store loaded and loading chunks
  /******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
  /******/ 	// Promise = chunk loading, 0 = chunk loaded
  /******/ 	var installedChunks = {
    /******/ 		app: 0
    /******/ 	}
  /******/
  /******/ 	var deferredModules = []
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__ (moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/ 		if (installedModules[moduleId]) {
      /******/ 			return installedModules[moduleId].exports
      /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
      /******/ 			i: moduleId,
      /******/ 			l: false,
      /******/ 			exports: {}
      /******/ 		}
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports
    /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function (exports, name, getter) {
    /******/ 		if (!__webpack_require__.o(exports, name)) {
      /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter })
      /******/ 		}
    /******/ 	}
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function (exports) {
    /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
      /******/ 		}
    /******/ 		Object.defineProperty(exports, '__esModule', { value: true })
    /******/ 	}
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/ 	__webpack_require__.t = function (value, mode) {
    /******/ 		if (mode & 1) value = __webpack_require__(value)
    /******/ 		if (mode & 8) return value
    /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
    /******/ 		var ns = Object.create(null)
    /******/ 		__webpack_require__.r(ns)
    /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value })
    /******/ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key] }.bind(null, key))
    /******/ 		return ns
    /******/ 	}
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function (module) {
    /******/ 		var getter = module && module.__esModule
    /******/ 			? function getDefault () { return module.default }
    /******/ 			: function getModuleExports () { return module }
    /******/ 		__webpack_require__.d(getter, 'a', getter)
    /******/ 		return getter
    /******/ 	}
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = '/'
  /******/
  /******/ 	var jsonpArray = window.webpackJsonp = window.webpackJsonp || []
  /******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray)
  /******/ 	jsonpArray.push = webpackJsonpCallback
  /******/ 	jsonpArray = jsonpArray.slice()
  /******/ 	for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i])
  /******/ 	var parentJsonpFunction = oldJsonpFunction
  /******/
  /******/
  /******/ 	// add entry module to deferred list
  /******/ 	deferredModules.push([0, 'chunk-vendors'])
  /******/ 	// run deferred modules when ready
  /******/ 	return checkDeferredModules()
/******/ })
/************************************************************************/
/******/ ({

  /***/ 0:
  /***/ function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__('56d7')
    /***/ },

  /***/ '06aa':
  /***/ function (module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/ },

  /***/ '143c':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6590d7a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('5e1e')
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6590d7a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6590d7a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__)
    /* unused harmony reexport * */
    /***/ },

  /***/ '30a1':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7af26be8_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('d174')
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7af26be8_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7af26be8_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__)
    /* unused harmony reexport * */
    /***/ },

  /***/ '56d7':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__)

    // EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
    var vue_runtime_esm = __webpack_require__('2b0e')

    // EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.esm.js
    var vue_meta_esm = __webpack_require__('58ca')

    // EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
    var vue_composition_api = __webpack_require__('ed09')

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf40ca68-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=8529a01c
    var render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { attrs: { id: 'app' } }, [_c('ProjectHeader'), _c('router-view', { staticClass: 'app__view' }), _c('ProjectFooter'), _c('FloatBtn')], 1) }
    var staticRenderFns = []

    // CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=8529a01c

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf40ca68-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectHeader/index.vue?vue&type=template&id=255684d2
    var ProjectHeadervue_type_template_id_255684d2_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('header', { staticClass: 'ProjectHeader' }, [_c('div', { staticClass: 'container' }, [_c('div', { staticClass: 'ProjectHeader_area ProjectHeader_area-left' }, [_c('div', { staticClass: 'menu' }, [_c('div', { staticClass: 'menu_item  menu_item-active' }, [_c('router-link', { attrs: { to: { name: 'Index' } } }, [_c('div', { staticClass: 'menu_itemText-zh' }, [_vm._v(' 關於我們 ')]), _c('div', { staticClass: 'menu_itemText-en' }, [_vm._v(' ABOUT ')])])], 1), _c('div', { staticClass: 'menu_item' }, [_c('router-link', { attrs: { to: { name: 'Index' } } }, [_c('div', { staticClass: 'menu_itemText-zh' }, [_vm._v(' 檢驗認證 ')]), _c('div', { staticClass: 'menu_itemText-en' }, [_vm._v(' DETECTION ')])])], 1), _c('div', { staticClass: 'menu_item' }, [_c('router-link', { attrs: { to: { name: 'Index' } } }, [_c('div', { staticClass: 'menu_itemText-zh' }, [_vm._v(' 產品資訊 ')]), _c('div', { staticClass: 'menu_itemText-en' }, [_vm._v(' PRODUCTS ')])])], 1), _c('div', { staticClass: 'menu_item' }, [_c('router-link', { attrs: { to: { name: 'Index' } } }, [_c('div', { staticClass: 'menu_itemText-zh' }, [_vm._v(' 最新消息 ')]), _c('div', { staticClass: 'menu_itemText-en' }, [_vm._v(' NEWS ')])])], 1)])]), _vm._m(0), _c('div', { staticClass: 'ProjectHeader_area ProjectHeader_area-right' }, [_c('div', { staticClass: 'menu' }, [_c('div', { staticClass: 'menu_item' }, [_c('router-link', { attrs: { to: { name: 'Index' } } }, [_c('div', { staticClass: 'menu_itemText-zh' }, [_vm._v(' 海藻學堂 ')]), _c('div', { staticClass: 'menu_itemText-en' }, [_vm._v(' SEAWEED ')])])], 1), _c('div', { staticClass: 'menu_item' }, [_c('router-link', { attrs: { to: { name: 'Index' } } }, [_c('div', { staticClass: 'menu_itemText-zh' }, [_vm._v(' 門市據點 ')]), _c('div', { staticClass: 'menu_itemText-en' }, [_vm._v(' STORE ')])])], 1), _c('div', { staticClass: 'menu_item' }, [_c('router-link', { attrs: { to: { name: 'Index' } } }, [_c('div', { staticClass: 'menu_itemText-zh' }, [_vm._v(' 聯絡我們 ')]), _c('div', { staticClass: 'menu_itemText-en' }, [_vm._v(' CONTACT ')])])], 1)]), _vm._m(1)])])]) }
    var ProjectHeadervue_type_template_id_255684d2_staticRenderFns = [function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'logo' }, [_c('img', { attrs: { src: '/img/navbar/logo.png', alt: '藻作坊' } })]) }, function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'functionBar' }, [_c('button', { attrs: { id: 'functionBar_member' } }), _c('button', { attrs: { id: 'functionBar_cart' } }), _c('div', { staticClass: 'functionBar_search' }, [_c('input', { attrs: { type: 'text', placeholder: 'SEARCH...' } })])]) }]

    // CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue?vue&type=template&id=255684d2

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

    /* harmony default export */ var ProjectHeadervue_type_script_lang_js = ({
      name: 'ProjectHeader',
      setup (props, context) {}
    })
    // CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue?vue&type=script&lang=js
    /* harmony default export */ var components_ProjectHeadervue_type_script_lang_js = (ProjectHeadervue_type_script_lang_js)
    // EXTERNAL MODULE: ./src/components/ProjectHeader/index.vue?vue&type=style&index=0&id=255684d2&prod&lang=scss
    var ProjectHeadervue_type_style_index_0_id_255684d2_prod_lang_scss = __webpack_require__('cbdc')

    // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    var componentNormalizer = __webpack_require__('2877')

    // CONCATENATED MODULE: ./src/components/ProjectHeader/index.vue

    /* normalize component */

    var component = Object(componentNormalizer['a' /* default */])(
      components_ProjectHeadervue_type_script_lang_js,
      ProjectHeadervue_type_template_id_255684d2_render,
      ProjectHeadervue_type_template_id_255684d2_staticRenderFns,
      false,
      null,
      null,
      null

    )

    /* harmony default export */ var ProjectHeader = (component.exports)
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf40ca68-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProjectFooter/index.vue?vue&type=template&id=7af26be8
    var ProjectFootervue_type_template_id_7af26be8_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('footer', { staticClass: 'ProjectFooter' }, [_vm._m(0), _c('div', { staticClass: 'ProjectFooter_note' }, [_c('div', { staticClass: 'container' }, [_vm._v(' ' + _vm._s(new Date().getFullYear()) + ' © 藻作坊 Designed By 禾藝叁陸巷有限公司 ')])])]) }
    var ProjectFootervue_type_template_id_7af26be8_staticRenderFns = [function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'container' }, [_c('div', { staticClass: 'ProjectFooter_content' }, [_c('div', { staticClass: 'ProjectFooter_logoWrap' }, [_c('div', { staticClass: 'ProjectFooter_pic' }, [_c('img', { attrs: { src: '/img/footer/footer_logo.png', alt: 'logo', draggable: 'false' } })])]), _c('div', { staticClass: 'ProjectFooter_linkPart' }, [_c('div', { staticClass: 'ProjectFooter_linkCategory' }, [_c('div', { staticClass: 'ProjectFooter_linkTitle notoSerif' }, [_vm._v(' 深入暸解 ')]), _c('div', { staticClass: 'ProjectFooter_linkList' }, [_c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('關於我們')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('永續發展')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('最新消息')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('海藻學堂')])])]), _c('div', { staticClass: 'ProjectFooter_linkCategory' }, [_c('div', { staticClass: 'ProjectFooter_linkTitle notoSerif' }, [_vm._v(' 藻藻帶回家 ')]), _c('div', { staticClass: 'ProjectFooter_linkList' }, [_c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('檢驗認證')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('產品總覽')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('分類一')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('分類二')])])]), _c('div', { staticClass: 'ProjectFooter_linkCategory' }, [_c('div', { staticClass: 'ProjectFooter_linkTitle notoSerif' }, [_vm._v(' 藻門市吧 ')]), _c('div', { staticClass: 'ProjectFooter_linkList' }, [_c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('彩虹門市')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('檜意門市')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('聯絡我們')])])]), _c('div', { staticClass: 'ProjectFooter_linkCategory' }, [_c('div', { staticClass: 'ProjectFooter_linkTitle notoSerif' }, [_vm._v(' 會員中心 ')]), _c('div', { staticClass: 'ProjectFooter_linkList' }, [_c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('會員登入')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('歷史訂單')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('優惠折扣')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('紅利點數')])])]), _c('div', { staticClass: 'ProjectFooter_linkCategory' }, [_c('div', { staticClass: 'ProjectFooter_linkTitle notoSerif' }, [_vm._v(' 會員權益 ')]), _c('div', { staticClass: 'ProjectFooter_linkList' }, [_c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('購物須知')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('退換貨說明')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('隱私權政策')]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_vm._v('會員註冊條款')])])]), _c('div', { staticClass: 'ProjectFooter_linkCategory' }, [_c('div', { staticClass: 'ProjectFooter_linkTitle notoSerif' }, [_vm._v(' 聯絡資訊 ')]), _c('div', { staticClass: 'ProjectFooter_linkList' }, [_c('div', { staticClass: 'ProjectFooter_linkList-text' }, [_c('img', { attrs: { src: '/img/footer/footer_phone.png' } }), _vm._v('0910-827-867 ')]), _c('div', { staticClass: 'ProjectFooter_linkList-text' }, [_c('img', { attrs: { src: '/img/footer/footer_time.png' } }), _vm._v('AM 9:00-PM 18:00 ')]), _c('div', { staticClass: 'ProjectFooter_linkList-text' }, [_c('img', { attrs: { src: '/img/footer/footer_email.png' } }), _vm._v('gzv6726@dr-seaweed.com.tw ')]), _c('div', { staticClass: 'ProjectFooter_linkList-text' }, [_c('img', { attrs: { src: '/img/footer/footer_position.png' } }), _vm._v('嘉義市東區共和路191巷6號 ')])])]), _c('div', { staticClass: 'ProjectFooter_linkCategory' }, [_c('div', { staticClass: 'ProjectFooter_linkTitle notoSerif' }, [_vm._v(' 關注我們 ')]), _c('div', { staticClass: 'ProjectFooter_socialMedia' }, [_c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_c('img', { attrs: { src: '/img/footer/footer_line.png', alt: 'LINE' } })]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_c('img', { attrs: { src: '/img/footer/footer_fb.png', alt: 'fb' } })]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_c('img', { attrs: { src: '/img/footer/footer_yt.png', alt: 'yt' } })])])])])])]) }]

    // CONCATENATED MODULE: ./src/components/ProjectFooter/index.vue?vue&type=template&id=7af26be8

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
      setup (props, context) {}
    })
    // CONCATENATED MODULE: ./src/components/ProjectFooter/index.vue?vue&type=script&lang=js
    /* harmony default export */ var components_ProjectFootervue_type_script_lang_js = (ProjectFootervue_type_script_lang_js)
    // EXTERNAL MODULE: ./src/components/ProjectFooter/index.vue?vue&type=style&index=0&id=7af26be8&prod&lang=scss
    var ProjectFootervue_type_style_index_0_id_7af26be8_prod_lang_scss = __webpack_require__('30a1')

    // CONCATENATED MODULE: ./src/components/ProjectFooter/index.vue

    /* normalize component */

    var ProjectFooter_component = Object(componentNormalizer['a' /* default */])(
      components_ProjectFootervue_type_script_lang_js,
      ProjectFootervue_type_template_id_7af26be8_render,
      ProjectFootervue_type_template_id_7af26be8_staticRenderFns,
      false,
      null,
      null,
      null

    )

    /* harmony default export */ var ProjectFooter = (ProjectFooter_component.exports)
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf40ca68-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FloatBtn/FloatBtn.vue?vue&type=template&id=1b0235dc
    var FloatBtnvue_type_template_id_1b0235dc_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _vm._m(0) }
    var FloatBtnvue_type_template_id_1b0235dc_staticRenderFns = [function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'FloatBtn' }, [_c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_c('img', { attrs: { src: '/img/floatBtn_chat.png', alt: 'chat' } })]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } }, [_c('img', { attrs: { src: '/img/floatBtn_cart.png', alt: 'cart' } })]), _c('button', { attrs: { id: 'btn__quickTop' } }, [_c('img', { attrs: { src: '/img/floatBtn_up.png', alt: 'up' } })])]) }]

    // CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=template&id=1b0235dc

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
      setup (props, context) {}
    })
    // CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=script&lang=js
    /* harmony default export */ var FloatBtn_FloatBtnvue_type_script_lang_js = (FloatBtnvue_type_script_lang_js)
    // EXTERNAL MODULE: ./src/components/FloatBtn/FloatBtn.vue?vue&type=style&index=0&id=1b0235dc&prod&lang=scss
    var FloatBtnvue_type_style_index_0_id_1b0235dc_prod_lang_scss = __webpack_require__('785d')

    // CONCATENATED MODULE: ./src/components/FloatBtn/FloatBtn.vue

    /* normalize component */

    var FloatBtn_component = Object(componentNormalizer['a' /* default */])(
      FloatBtn_FloatBtnvue_type_script_lang_js,
      FloatBtnvue_type_template_id_1b0235dc_render,
      FloatBtnvue_type_template_id_1b0235dc_staticRenderFns,
      false,
      null,
      null,
      null

    )

    /* harmony default export */ var FloatBtn = (FloatBtn_component.exports)
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
      metaInfo () {
        return {
          title: '藻作坊',
          meta: [{
            vmid: 'description',
            name: 'description',
            content: 'Description...'
          }]
        }
      }
    })
    // CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
    /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js)
    // EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=8529a01c&prod&lang=scss
    var Appvue_type_style_index_0_id_8529a01c_prod_lang_scss = __webpack_require__('963d')

    // CONCATENATED MODULE: ./src/App.vue

    /* normalize component */

    var App_component = Object(componentNormalizer['a' /* default */])(
      src_Appvue_type_script_lang_js,
      render,
      staticRenderFns,
      false,
      null,
      null,
      null

    )

    /* harmony default export */ var App = (App_component.exports)
    // EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
    var vue_router_esm = __webpack_require__('8c4f')

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf40ca68-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index/index.vue?vue&type=template&id=12fcefa7
    var Indexvue_type_template_id_12fcefa7_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _vm._m(0) }
    var Indexvue_type_template_id_12fcefa7_staticRenderFns = [function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: 'Index' }, [_c('div', { staticClass: 'kv' }, [_c('div', { staticClass: 'kv_content' }, [_c('div', [_c('picture', [_c('img', { attrs: { src: '/img/index/kv1.jpg', alt: '昆布芽' } })])]), _c('div', [_c('picture', [_c('img', { attrs: { src: '/img/index/kv2.jpg', alt: '海藻製造所' } })])])])]), _c('div', { staticClass: 'productIntro' }, [_c('div', { staticClass: 'productIntro_marque' }, [_c('div', { staticClass: 'marque' }, [_c('div', { staticClass: 'marque_wrap' }, [_c('span', { staticClass: 'content' }, [_vm._v('THE BOON BESTOWED BY THE SEA _ '), _c('span', { staticClass: 'content_highLight' }, [_vm._v('大海賜予的恩惠「 海藻 」')])])])])]), _c('div', { staticClass: 'productIntro_intro' }, [_c('div', { staticClass: 'container' }, [_c('div', { staticClass: 'productNav' }, [_c('a', { staticClass: 'productNav_icon productNav_icon--left' }), _c('a', { staticClass: 'productNav_icon productNav_icon--right' })]), _c('div', { staticClass: 'productList' }, [_c('a', { staticClass: 'productItem', attrs: { href: '' } }, [_c('div', { staticClass: 'productItem_desc' }, [_c('div', { staticClass: 'productDesc' }, [_c('i', { staticClass: 'productDesc_icon' }), _c('div', { staticClass: 'productDesc_title' }, [_vm._v(' 六色海藻 ')]), _c('div', { staticClass: 'productDesc_desc' }, [_vm._v(' 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ')]), _c('div', { staticClass: 'productDesc_price' }, [_c('div', { staticClass: 'price' }, [_vm._v(' 售價'), _c('span', [_vm._v('$330')])]), _c('div', { staticClass: 'action' }, [_c('a', { staticClass: 'action_icon action_icon-cart', attrs: { href: '' } }), _c('a', { staticClass: 'action_icon action_icon-bag', attrs: { href: '' } })])]), _c('div', { staticClass: 'productDesc_deco' }, [_c('div', { staticClass: 'deco' })])])]), _c('div', { staticClass: 'productItem_thumb' }, [_c('div', { staticClass: 'productThumb' }, [_c('img', { attrs: { src: '/img/index/product1_item1.png' } })])])]), _c('a', { staticClass: 'productItem', attrs: { href: '' } }, [_c('div', { staticClass: 'productItem_desc' }, [_c('div', { staticClass: 'productDesc' }, [_c('i', { staticClass: 'productDesc_icon' }), _c('div', { staticClass: 'productDesc_title' }, [_vm._v(' 昆布鹽 ')]), _c('div', { staticClass: 'productDesc_desc' }, [_vm._v(' 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ')]), _c('div', { staticClass: 'productDesc_price' }, [_c('div', { staticClass: 'price' }, [_vm._v(' 售價'), _c('span', [_vm._v('$330')])]), _c('div', { staticClass: 'action' }, [_c('a', { staticClass: 'action_icon action_icon-cart', attrs: { href: '' } }), _c('a', { staticClass: 'action_icon action_icon-bag', attrs: { href: '' } })])]), _c('div', { staticClass: 'productDesc_deco' }, [_c('div', { staticClass: 'deco' })])])]), _c('div', { staticClass: 'productItem_thumb' }, [_c('div', { staticClass: 'productThumb' }, [_c('img', { attrs: { src: '/img/index/product1_item2.png' } })])])]), _c('a', { staticClass: 'productItem', attrs: { href: '' } }, [_c('div', { staticClass: 'productItem_desc' }, [_c('div', { staticClass: 'productDesc' }, [_c('i', { staticClass: 'productDesc_icon' }), _c('div', { staticClass: 'productDesc_title' }, [_vm._v(' 六色海藻 ')]), _c('div', { staticClass: 'productDesc_desc' }, [_vm._v(' 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ')]), _c('div', { staticClass: 'productDesc_price' }, [_c('div', { staticClass: 'price' }, [_vm._v(' 售價'), _c('span', [_vm._v('$330')])]), _c('div', { staticClass: 'action' }, [_c('a', { staticClass: 'action_icon action_icon-cart', attrs: { href: '' } }), _c('a', { staticClass: 'action_icon action_icon-bag', attrs: { href: '' } })])]), _c('div', { staticClass: 'productDesc_deco' }, [_c('div', { staticClass: 'deco' })])])]), _c('div', { staticClass: 'productItem_thumb' }, [_c('div', { staticClass: 'productThumb' }, [_c('img', { attrs: { src: '/img/index/product1_item1.png' } })])])]), _c('a', { staticClass: 'productItem', attrs: { href: '' } }, [_c('div', { staticClass: 'productItem_desc' }, [_c('div', { staticClass: 'productDesc' }, [_c('i', { staticClass: 'productDesc_icon' }), _c('div', { staticClass: 'productDesc_title' }, [_vm._v(' 昆布鹽 ')]), _c('div', { staticClass: 'productDesc_desc' }, [_vm._v(' 昆布鹽使用於料理前後皆可使用 例：炒菜、鹽漬、熬湯、沾肉皆可提升食材的 ')]), _c('div', { staticClass: 'productDesc_price' }, [_c('div', { staticClass: 'price' }, [_vm._v(' 售價'), _c('span', [_vm._v('$330')])]), _c('div', { staticClass: 'action' }, [_c('a', { staticClass: 'action_icon action_icon-cart', attrs: { href: '' } }), _c('a', { staticClass: 'action_icon action_icon-bag', attrs: { href: '' } })])]), _c('div', { staticClass: 'productDesc_deco' }, [_c('div', { staticClass: 'deco' })])])]), _c('div', { staticClass: 'productItem_thumb' }, [_c('div', { staticClass: 'productThumb' }, [_c('img', { attrs: { src: '/img/index/product1_item2.png' } })])])])]), _c('div', { staticClass: 'productPager' }, [_c('a', { staticClass: 'productPager_icon active' }), _c('a', { staticClass: 'productPager_icon' }), _c('a', { staticClass: 'productPager_icon' })])])])]), _c('div', { staticClass: 'ad' }, [_c('div', { staticClass: 'container' }, [_c('div', { staticClass: 'ad_img' }, [_c('img', { attrs: { src: '/img/index/index_ad_1.jpg', alt: '讓餐桌多一份美好' } })])])]), _c('div', { staticClass: 'productGift' }, [_c('div', { staticClass: 'productGiftTitle' }, [_c('div', { staticClass: 'container' }, [_c('img', { attrs: { src: '/img/index/product2_title.png' } })])]), _c('div', { staticClass: 'productGiftSet' }, [_c('div', { staticClass: 'container' }, [_c('div', { staticClass: 'setList' }, [_c('a', { staticClass: 'setItem', attrs: { href: '' } }, [_c('div', { staticClass: 'setItem_thumb' }, [_c('div', { staticClass: 'setThumb' }, [_c('img', { attrs: { src: '/img/index/product2_item1.png' } }), _c('div', { staticClass: 'setThumb_action' }, [_c('div', { staticClass: 'action' }, [_c('a', { staticClass: 'action_icon action_icon-cart', attrs: { href: '' } }), _c('a', { staticClass: 'action_icon action_icon-bag', attrs: { href: '' } })])])])]), _c('div', { staticClass: 'setItem_desc' }, [_c('div', { staticClass: 'setDesc' }, [_c('div', { staticClass: 'setDesc_title' }, [_vm._v(' 六色海藻組合 ')]), _c('div', { staticClass: 'setDesc_desc' }, [_vm._v(' 嚴選六種優質海藻,方便簡單的料理方式 來補足現代人忙碌而無法攝取到足夠的 ')]), _c('div', { staticClass: 'setDesc_price' }, [_c('div', { staticClass: 'price price--delete' }, [_vm._v(' 售價'), _c('span', [_vm._v('$980')])]), _c('div', { staticClass: 'price' }, [_vm._v(' 售價'), _c('span', [_vm._v('$900')])])]), _c('div', { staticClass: 'setDesc_deco' }, [_c('div', { staticClass: 'deco' })])])])]), _c('a', { staticClass: 'setItem', attrs: { href: '' } }, [_c('div', { staticClass: 'setItem_thumb' }, [_c('div', { staticClass: 'setThumb' }, [_c('img', { attrs: { src: '/img/index/product2_item2.png' } }), _c('div', { staticClass: 'setThumb_action' }, [_c('div', { staticClass: 'action' }, [_c('a', { staticClass: 'action_icon action_icon-cart', attrs: { href: '' } }), _c('a', { staticClass: 'action_icon action_icon-bag', attrs: { href: '' } })])])])]), _c('div', { staticClass: 'setItem_desc' }, [_c('div', { staticClass: 'setDesc' }, [_c('div', { staticClass: 'setDesc_title' }, [_vm._v(' 湯底完勝兩入組 ')]), _c('div', { staticClass: 'setDesc_desc' }, [_vm._v(' 使用國產香菇與醬油製作而成，無化學調味無香精色素，只要七分鐘就能上好湯 ')]), _c('div', { staticClass: 'setDesc_price' }, [_c('div', { staticClass: 'price price--delete' }, [_vm._v(' 售價'), _c('span', [_vm._v('$1080')])]), _c('div', { staticClass: 'price' }, [_vm._v(' 售價'), _c('span', [_vm._v('$990')])])]), _c('div', { staticClass: 'setDesc_deco' }, [_c('div', { staticClass: 'deco' })])])])])])])]), _c('div', { staticClass: 'productGiftPromote' }, [_c('div', { staticClass: 'container' }, [_c('a', { attrs: { href: '' } }, [_c('img', { attrs: { src: '/img/index/product2_item3.png' } })])])])]), _c('div', { staticClass: 'productFeature' }, [_c('div', { staticClass: 'container' }, [_c('div', { staticClass: 'productFeature_promote' }, [_c('div', { staticClass: 'productFeature_promoteItem ' }, [_vm._v(' 新註冊現折 100 元 ')]), _c('div', { staticClass: 'productFeature_promoteItem ' }, [_vm._v(' 9/01 - 9/15 全站免運 ')])]), _c('div', { staticClass: 'productFeature_gallery' }, [_c('div', { staticClass: 'productFeature_gallery-col productFeature_gallery-col-3' }, [_c('div', { staticClass: 'productFeature_galleryItem' }, [_c('img', { attrs: { src: '/img/index/feature_1.jpg', alt: '日高極細昆布' } })]), _c('div', { staticClass: 'productFeature_galleryItem' }, [_c('img', { attrs: { src: '/img/index/feature_2.jpg', alt: '昆布' } })]), _c('div', { staticClass: 'productFeature_galleryItem' }, [_c('img', { attrs: { src: '/img/index/feature_3.jpg', alt: '海帶芽湯' } })])]), _c('div', { staticClass: 'productFeature_gallery-col productFeature_gallery-col-2' }, [_c('div', { staticClass: 'productFeature_galleryItem' }, [_c('img', { attrs: { src: '/img/index/feature_4.jpg', alt: '職人海帶芽湯' } })]), _c('div', { staticClass: 'productFeature_galleryItem' }, [_c('img', { attrs: { src: '/img/index/feature_5.jpg', alt: '海帶芽' } })])])])])]), _c('div', { staticClass: 'productBg' }, [_c('div', { staticClass: 'productRecommend' }, [_c('div', { staticClass: 'container' }, [_c('div', { staticClass: 'productRecommend_item' }, [_c('div', { staticClass: 'productRecommend_item-pic' }, [_c('img', { attrs: { src: '/img/temp_product-recommend.png', alt: '' } })]), _c('div', { staticClass: 'productRecommend_item-info' }, [_c('div', { staticClass: 'productRecommend_item-infoWrap' }, [_c('div', { staticClass: 'productRecommend_item-infoTitle' }, [_vm._v(' 焙煎胡麻 ')]), _c('div', { staticClass: 'productRecommend_item-infoText' }, [_vm._v(' 焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻焙煎胡麻 ')]), _c('div', { staticClass: 'productRecommend_item-infoArrow' }, [_c('div')])])]), _c('a', { attrs: { href: 'javascript:;', target: '_blank' } })])])]), _c('div', { staticClass: 'productAll' }, [_c('div', { staticClass: 'container' }, [_c('div', { staticClass: 'productAll_list' }, [_c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_item1.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_itme2.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_item1.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_itme2.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_item1.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_itme2.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_item1.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_itme2.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_item1.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])]), _c('div', { staticClass: 'productAll_item' }, [_c('div', { staticClass: 'productAll_itemWrap' }, [_c('div', { staticClass: 'productAll_itemTop' }, [_c('div', { staticClass: 'productAll_itemTop-pic' }, [_c('img', { attrs: { src: '/img/index/product3_itme2.png', alt: '黑芝麻醬' } })]), _c('div', { staticClass: 'productAll_itemTop-arrow' })]), _c('div', { staticClass: 'productAll_itemBottom' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrap' }, [_c('div', { staticClass: 'productAll_itemBottom-textWrapTitle' }, [_vm._v(' 黑芝麻醬 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapText' }, [_vm._v(' 海帶芽為韓國與日本家家戶戶冰箱必備的食材 ')]), _c('div', { staticClass: 'productAll_itemBottom-textWrapPrice' }, [_c('p', [_vm._v(' 原價 '), _c('span', [_vm._v('$300')])]), _c('p', [_vm._v(' 會員價 '), _c('span', [_vm._v('$280')])])])])]), _c('a', { attrs: { href: 'javascript:;' } })]), _c('div', { staticClass: 'productAll_itemBtns' }, [_c('button', { staticClass: 'productAll_itemBtns-cart' }), _c('button', { staticClass: 'productAll_itemBtns-bag' })])])])])])]), _c('div', { staticClass: 'slogan' }, [_c('img', { attrs: { src: '/img/index/slogan_title.png', alt: '職人精神' } })])]) }]

    // CONCATENATED MODULE: ./src/pages/Index/index.vue?vue&type=template&id=12fcefa7

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

    /* harmony default export */ var Indexvue_type_script_lang_js = ({
      name: 'Index',
      components: {},
      data () {
        return {}
      }
    })
    // CONCATENATED MODULE: ./src/pages/Index/index.vue?vue&type=script&lang=js
    /* harmony default export */ var pages_Indexvue_type_script_lang_js = (Indexvue_type_script_lang_js)
    // EXTERNAL MODULE: ./src/pages/Index/style.scss?vue&type=style&index=0&prod&lang=scss&external
    var stylevue_type_style_index_0_prod_lang_scss_external = __webpack_require__('9bd9')

    // CONCATENATED MODULE: ./src/pages/Index/index.vue

    /* normalize component */

    var Index_component = Object(componentNormalizer['a' /* default */])(
      pages_Indexvue_type_script_lang_js,
      Indexvue_type_template_id_12fcefa7_render,
      Indexvue_type_template_id_12fcefa7_staticRenderFns,
      false,
      null,
      null,
      null

    )

    /* harmony default export */ var Index = (Index_component.exports)
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf40ca68-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Header/index.vue?vue&type=template&id=a6590d7a
    var Headervue_type_template_id_a6590d7a_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('ProjectHeader') }
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
      data () {
        return {}
      }
    })
    // CONCATENATED MODULE: ./src/pages/Header/index.vue?vue&type=script&lang=js
    /* harmony default export */ var pages_Headervue_type_script_lang_js = (Headervue_type_script_lang_js)
    // EXTERNAL MODULE: ./src/pages/Header/index.vue?vue&type=style&index=0&id=a6590d7a&prod&lang=scss
    var Headervue_type_style_index_0_id_a6590d7a_prod_lang_scss = __webpack_require__('143c')

    // CONCATENATED MODULE: ./src/pages/Header/index.vue

    /* normalize component */

    var Header_component = Object(componentNormalizer['a' /* default */])(
      pages_Headervue_type_script_lang_js,
      Headervue_type_template_id_a6590d7a_render,
      Headervue_type_template_id_a6590d7a_staticRenderFns,
      false,
      null,
      null,
      null

    )

    /* harmony default export */ var Header = (Header_component.exports)
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf40ca68-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Footer/index.vue?vue&type=template&id=8964e6ae
    var Footervue_type_template_id_8964e6ae_render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('ProjectFooter') }
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
      data () {
        return {}
      }
    })
    // CONCATENATED MODULE: ./src/pages/Footer/index.vue?vue&type=script&lang=js
    /* harmony default export */ var pages_Footervue_type_script_lang_js = (Footervue_type_script_lang_js)
    // EXTERNAL MODULE: ./src/pages/Footer/index.vue?vue&type=style&index=0&id=8964e6ae&prod&lang=scss
    var Footervue_type_style_index_0_id_8964e6ae_prod_lang_scss = __webpack_require__('ba3b')

    // CONCATENATED MODULE: ./src/pages/Footer/index.vue

    /* normalize component */

    var Footer_component = Object(componentNormalizer['a' /* default */])(
      pages_Footervue_type_script_lang_js,
      Footervue_type_template_id_8964e6ae_render,
      Footervue_type_template_id_8964e6ae_staticRenderFns,
      false,
      null,
      null,
      null

    )

    /* harmony default export */ var Footer = (Footer_component.exports)
    // CONCATENATED MODULE: ./src/router/index.js

    vue_runtime_esm.default.use(vue_router_esm['a' /* default */])
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
      path: '*',
      redirect: {
        name: 'index'
      }
    }]
    const router = new vue_router_esm['a' /* default */]({
      mode: 'history',
      base: '/',
      routes,
      scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return {
            x: 0,
            y: 0
          }
        }
      }
    })
    /* harmony default export */ var src_router = (router)
    // EXTERNAL MODULE: ./node_modules/bowser/es5.js
    var es5 = __webpack_require__('337f')
    var es5_default = /* #__PURE__ */__webpack_require__.n(es5)

    // CONCATENATED MODULE: ./src/plugins/detectBrowser.js

    /* harmony default export */ var detectBrowser = ({
      install (Vue, options) {
        const browser = es5_default.a.getParser(window.navigator.userAgent)
        Vue.prototype.$browser = {
          ...browser.getBrowser(),
          platform: browser.getPlatformType()
        }
      }
    })
    // CONCATENATED MODULE: ./src/main.js
    // 如需啟用vuex請把下方註解打開

    // import store from './store'

    vue_runtime_esm.default.config.productionTip = false
    vue_runtime_esm.default.use(vue_composition_api['a' /* default */])
    vue_runtime_esm.default.use(vue_meta_esm['a' /* default */])
    vue_runtime_esm.default.use(detectBrowser)
    new vue_runtime_esm.default({
      router: src_router,
      // store,
      render: h => h(App)
    }).$mount('#app')
    /***/ },

  /***/ '5e1e':
  /***/ function (module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/ },

  /***/ '640e':
  /***/ function (module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/ },

  /***/ '690e':
  /***/ function (module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/ },

  /***/ '785d':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_1b0235dc_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('e6b5')
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_1b0235dc_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatBtn_vue_vue_type_style_index_0_id_1b0235dc_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__)
    /* unused harmony reexport * */
    /***/ },

  /***/ '963d':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8529a01c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('06aa')
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8529a01c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8529a01c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__)
    /* unused harmony reexport * */
    /***/ },

  /***/ '9bd9':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('690e')
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_style_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__)
    /* unused harmony reexport * */
    /***/ },

  /***/ ba3b:
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8964e6ae_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('640e')
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8964e6ae_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8964e6ae_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__)
    /* unused harmony reexport * */
    /***/ },

  /***/ bae4:
  /***/ function (module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/ },

  /***/ cbdc:
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_255684d2_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('bae4')
    /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_255684d2_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_255684d2_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__)
    /* unused harmony reexport * */
    /***/ },

  /***/ d174:
  /***/ function (module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/ },

  /***/ e6b5:
  /***/ function (module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/ }

/******/ })
