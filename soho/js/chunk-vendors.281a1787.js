(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-vendors'], {

  /***/ 2877:
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function () { return normalizeComponent })
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
      moduleIdentifier /* server only */,
      shadowMode /* vue-cli only */
    ) {
      // Vue.extend constructor export interop
      var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
      if (moduleIdentifier) {
        // server build
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
          ? function () {
            injectStyles.call(
              this,
              (options.functional ? this.parent : this).$root.$options.shadowRoot
            )
          }
          : injectStyles
      }

      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook
          // register for functional component in vue file
          var originalRender = options.render
          options.render = function renderWithStyleInjection (h, context) {
            hook.call(context)
            return originalRender(h, context)
          }
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
        }
      }

      return {
        exports: scriptExports,
        options: options
      }
    }
    /***/ },

  /***/ '2b0e':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function (global) { /*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
      /*  */

      var emptyObject = Object.freeze({})

      // These helpers produce better VM code in JS engines due to their
      // explicitness and function inlining.
      function isUndef (v) {
        return v === undefined || v === null
      }

      function isDef (v) {
        return v !== undefined && v !== null
      }

      function isTrue (v) {
        return v === true
      }

      function isFalse (v) {
        return v === false
      }

      /**
 * Check if value is primitive.
 */
      function isPrimitive (value) {
        return (
          typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
        )
      }

      /**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
      function isObject (obj) {
        return obj !== null && typeof obj === 'object'
      }

      /**
 * Get the raw type string of a value, e.g., [object Object].
 */
      var _toString = Object.prototype.toString

      function toRawType (value) {
        return _toString.call(value).slice(8, -1)
      }

      /**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
      function isPlainObject (obj) {
        return _toString.call(obj) === '[object Object]'
      }

      function isRegExp (v) {
        return _toString.call(v) === '[object RegExp]'
      }

      /**
 * Check if val is a valid array index.
 */
      function isValidArrayIndex (val) {
        var n = parseFloat(String(val))
        return n >= 0 && Math.floor(n) === n && isFinite(val)
      }

      function isPromise (val) {
        return (
          isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
        )
      }

      /**
 * Convert a value to a string that is actually rendered.
 */
      function toString (val) {
        return val == null
          ? ''
          : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, null, 2)
            : String(val)
      }

      /**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
      function toNumber (val) {
        var n = parseFloat(val)
        return isNaN(n) ? val : n
      }

      /**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
      function makeMap (
        str,
        expectsLowerCase
      ) {
        var map = Object.create(null)
        var list = str.split(',')
        for (var i = 0; i < list.length; i++) {
          map[list[i]] = true
        }
        return expectsLowerCase
          ? function (val) { return map[val.toLowerCase()] }
          : function (val) { return map[val] }
      }

      /**
 * Check if a tag is a built-in tag.
 */
      var isBuiltInTag = makeMap('slot,component', true)

      /**
 * Check if an attribute is a reserved attribute.
 */
      var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is')

      /**
 * Remove an item from an array.
 */
      function remove (arr, item) {
        if (arr.length) {
          var index = arr.indexOf(item)
          if (index > -1) {
            return arr.splice(index, 1)
          }
        }
      }

      /**
 * Check whether an object has the property.
 */
      var hasOwnProperty = Object.prototype.hasOwnProperty
      function hasOwn (obj, key) {
        return hasOwnProperty.call(obj, key)
      }

      /**
 * Create a cached version of a pure function.
 */
      function cached (fn) {
        var cache = Object.create(null)
        return function cachedFn (str) {
          var hit = cache[str]
          return hit || (cache[str] = fn(str))
        }
      }

      /**
 * Camelize a hyphen-delimited string.
 */
      var camelizeRE = /-(\w)/g
      var camelize = cached(function (str) {
        return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : '' })
      })

      /**
 * Capitalize a string.
 */
      var capitalize = cached(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      })

      /**
 * Hyphenate a camelCase string.
 */
      var hyphenateRE = /\B([A-Z])/g
      var hyphenate = cached(function (str) {
        return str.replace(hyphenateRE, '-$1').toLowerCase()
      })

      /**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

      /* istanbul ignore next */
      function polyfillBind (fn, ctx) {
        function boundFn (a) {
          var l = arguments.length
          return l
            ? l > 1
              ? fn.apply(ctx, arguments)
              : fn.call(ctx, a)
            : fn.call(ctx)
        }

        boundFn._length = fn.length
        return boundFn
      }

      function nativeBind (fn, ctx) {
        return fn.bind(ctx)
      }

      var bind = Function.prototype.bind
        ? nativeBind
        : polyfillBind

      /**
 * Convert an Array-like object to a real Array.
 */
      function toArray (list, start) {
        start = start || 0
        var i = list.length - start
        var ret = new Array(i)
        while (i--) {
          ret[i] = list[i + start]
        }
        return ret
      }

      /**
 * Mix properties into target object.
 */
      function extend (to, _from) {
        for (var key in _from) {
          to[key] = _from[key]
        }
        return to
      }

      /**
 * Merge an Array of Objects into a single Object.
 */
      function toObject (arr) {
        var res = {}
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) {
            extend(res, arr[i])
          }
        }
        return res
      }

      /* eslint-disable no-unused-vars */

      /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
      function noop (a, b, c) {}

      /**
 * Always return false.
 */
      var no = function (a, b, c) { return false }

      /* eslint-enable no-unused-vars */

      /**
 * Return the same value.
 */
      var identity = function (_) { return _ }

      /**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
      function looseEqual (a, b) {
        if (a === b) { return true }
        var isObjectA = isObject(a)
        var isObjectB = isObject(b)
        if (isObjectA && isObjectB) {
          try {
            var isArrayA = Array.isArray(a)
            var isArrayB = Array.isArray(b)
            if (isArrayA && isArrayB) {
              return a.length === b.length && a.every(function (e, i) {
                return looseEqual(e, b[i])
              })
            } else if (a instanceof Date && b instanceof Date) {
              return a.getTime() === b.getTime()
            } else if (!isArrayA && !isArrayB) {
              var keysA = Object.keys(a)
              var keysB = Object.keys(b)
              return keysA.length === keysB.length && keysA.every(function (key) {
                return looseEqual(a[key], b[key])
              })
            } else {
              /* istanbul ignore next */
              return false
            }
          } catch (e) {
            /* istanbul ignore next */
            return false
          }
        } else if (!isObjectA && !isObjectB) {
          return String(a) === String(b)
        } else {
          return false
        }
      }

      /**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
      function looseIndexOf (arr, val) {
        for (var i = 0; i < arr.length; i++) {
          if (looseEqual(arr[i], val)) { return i }
        }
        return -1
      }

      /**
 * Ensure a function is called only once.
 */
      function once (fn) {
        var called = false
        return function () {
          if (!called) {
            called = true
            fn.apply(this, arguments)
          }
        }
      }

      var SSR_ATTR = 'data-server-rendered'

      var ASSET_TYPES = [
        'component',
        'directive',
        'filter'
      ]

      var LIFECYCLE_HOOKS = [
        'beforeCreate',
        'created',
        'beforeMount',
        'mounted',
        'beforeUpdate',
        'updated',
        'beforeDestroy',
        'destroyed',
        'activated',
        'deactivated',
        'errorCaptured',
        'serverPrefetch'
      ]

      /*  */

      var config = ({
        /**
   * Option merge strategies (used in core/util/options)
   */
        // $flow-disable-line
        optionMergeStrategies: Object.create(null),

        /**
   * Whether to suppress warnings.
   */
        silent: false,

        /**
   * Show production mode tip message on boot?
   */
        productionTip: 'production' !== 'production',

        /**
   * Whether to enable devtools
   */
        devtools: 'production' !== 'production',

        /**
   * Whether to record perf
   */
        performance: false,

        /**
   * Error handler for watcher errors
   */
        errorHandler: null,

        /**
   * Warn handler for watcher warns
   */
        warnHandler: null,

        /**
   * Ignore certain custom elements
   */
        ignoredElements: [],

        /**
   * Custom user key aliases for v-on
   */
        // $flow-disable-line
        keyCodes: Object.create(null),

        /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
        isReservedTag: no,

        /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
        isReservedAttr: no,

        /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
        isUnknownElement: no,

        /**
   * Get the namespace of an element
   */
        getTagNamespace: noop,

        /**
   * Parse the real tag name for the specific platform.
   */
        parsePlatformTagName: identity,

        /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
        mustUseProp: no,

        /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
        async: true,

        /**
   * Exposed for legacy reasons
   */
        _lifecycleHooks: LIFECYCLE_HOOKS
      })

      /*  */

      /**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
      var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/

      /**
 * Check if a string starts with $ or _
 */
      function isReserved (str) {
        var c = (str + '').charCodeAt(0)
        return c === 0x24 || c === 0x5F
      }

      /**
 * Define a property.
 */
      function def (obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
          value: val,
          enumerable: !!enumerable,
          writable: true,
          configurable: true
        })
      }

      /**
 * Parse simple path.
 */
      var bailRE = new RegExp(('[^' + (unicodeRegExp.source) + '.$_\\d]'))
      function parsePath (path) {
        if (bailRE.test(path)) {
          return
        }
        var segments = path.split('.')
        return function (obj) {
          for (var i = 0; i < segments.length; i++) {
            if (!obj) { return }
            obj = obj[segments[i]]
          }
          return obj
        }
      }

      /*  */

      // can we use __proto__?
      var hasProto = '__proto__' in {}

      // Browser environment sniffing
      var inBrowser = typeof window !== 'undefined'
      var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
      var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
      var UA = inBrowser && window.navigator.userAgent.toLowerCase()
      var isIE = UA && /msie|trident/.test(UA)
      var isIE9 = UA && UA.indexOf('msie 9.0') > 0
      var isEdge = UA && UA.indexOf('edge/') > 0
      var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
      var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
      var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
      var isPhantomJS = UA && /phantomjs/.test(UA)
      var isFF = UA && UA.match(/firefox\/(\d+)/)

      // Firefox has a "watch" function on Object.prototype...
      var nativeWatch = ({}).watch

      var supportsPassive = false
      if (inBrowser) {
        try {
          var opts = {}
          Object.defineProperty(opts, 'passive', ({
            get: function get () {
              /* istanbul ignore next */
              supportsPassive = true
            }
          })) // https://github.com/facebook/flow/issues/285
          window.addEventListener('test-passive', null, opts)
        } catch (e) {}
      }

      // this needs to be lazy-evaled because vue may be required before
      // vue-server-renderer can set VUE_ENV
      var _isServer
      var isServerRendering = function () {
        if (_isServer === undefined) {
          /* istanbul ignore if */
          if (!inBrowser && !inWeex && typeof global !== 'undefined') {
            // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            _isServer = global.process && global.process.env.VUE_ENV === 'server'
          } else {
            _isServer = false
          }
        }
        return _isServer
      }

      // detect devtools
      var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

      /* istanbul ignore next */
      function isNative (Ctor) {
        return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
      }

      var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys)

      var _Set
      /* istanbul ignore if */ // $flow-disable-line
      if (typeof Set !== 'undefined' && isNative(Set)) {
        // use native Set when available.
        _Set = Set
      } else {
        // a non-standard Set polyfill that only works with primitive keys.
        _Set = /* @__PURE__ */(function () {
          function Set () {
            this.set = Object.create(null)
          }
          Set.prototype.has = function has (key) {
            return this.set[key] === true
          }
          Set.prototype.add = function add (key) {
            this.set[key] = true
          }
          Set.prototype.clear = function clear () {
            this.set = Object.create(null)
          }

          return Set
        }())
      }

      /*  */

      var warn = noop
      var tip = noop
      var generateComponentTrace = (noop) // work around flow check
      var formatComponentName = (noop)

      if (false) { var repeat, classify, classifyRE, hasConsole }

      /*  */

      var uid = 0

      /**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
      var Dep = function Dep () {
        this.id = uid++
        this.subs = []
      }

      Dep.prototype.addSub = function addSub (sub) {
        this.subs.push(sub)
      }

      Dep.prototype.removeSub = function removeSub (sub) {
        remove(this.subs, sub)
      }

      Dep.prototype.depend = function depend () {
        if (Dep.target) {
          Dep.target.addDep(this)
        }
      }

      Dep.prototype.notify = function notify () {
        // stabilize the subscriber list first
        var subs = this.subs.slice()
        if (false) {}
        for (var i = 0, l = subs.length; i < l; i++) {
          subs[i].update()
        }
      }

      // The current target watcher being evaluated.
      // This is globally unique because only one watcher
      // can be evaluated at a time.
      Dep.target = null
      var targetStack = []

      function pushTarget (target) {
        targetStack.push(target)
        Dep.target = target
      }

      function popTarget () {
        targetStack.pop()
        Dep.target = targetStack[targetStack.length - 1]
      }

      /*  */

      var VNode = function VNode (
        tag,
        data,
        children,
        text,
        elm,
        context,
        componentOptions,
        asyncFactory
      ) {
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
        this.ns = undefined
        this.context = context
        this.fnContext = undefined
        this.fnOptions = undefined
        this.fnScopeId = undefined
        this.key = data && data.key
        this.componentOptions = componentOptions
        this.componentInstance = undefined
        this.parent = undefined
        this.raw = false
        this.isStatic = false
        this.isRootInsert = true
        this.isComment = false
        this.isCloned = false
        this.isOnce = false
        this.asyncFactory = asyncFactory
        this.asyncMeta = undefined
        this.isAsyncPlaceholder = false
      }

      var prototypeAccessors = { child: { configurable: true } }

      // DEPRECATED: alias for componentInstance for backwards compat.
      /* istanbul ignore next */
      prototypeAccessors.child.get = function () {
        return this.componentInstance
      }

      Object.defineProperties(VNode.prototype, prototypeAccessors)

      var createEmptyVNode = function (text) {
        if (text === void 0) text = ''

        var node = new VNode()
        node.text = text
        node.isComment = true
        return node
      }

      function createTextVNode (val) {
        return new VNode(undefined, undefined, undefined, String(val))
      }

      // optimized shallow clone
      // used for static nodes and slot nodes because they may be reused across
      // multiple renders, cloning them avoids errors when DOM manipulations rely
      // on their elm reference.
      function cloneVNode (vnode) {
        var cloned = new VNode(
          vnode.tag,
          vnode.data,
          // #7975
          // clone children array to avoid mutating original in case of cloning
          // a child.
          vnode.children && vnode.children.slice(),
          vnode.text,
          vnode.elm,
          vnode.context,
          vnode.componentOptions,
          vnode.asyncFactory
        )
        cloned.ns = vnode.ns
        cloned.isStatic = vnode.isStatic
        cloned.key = vnode.key
        cloned.isComment = vnode.isComment
        cloned.fnContext = vnode.fnContext
        cloned.fnOptions = vnode.fnOptions
        cloned.fnScopeId = vnode.fnScopeId
        cloned.asyncMeta = vnode.asyncMeta
        cloned.isCloned = true
        return cloned
      }

      /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

      var arrayProto = Array.prototype
      var arrayMethods = Object.create(arrayProto)

      var methodsToPatch = [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice',
        'sort',
        'reverse'
      ]

      /**
 * Intercept mutating methods and emit events
 */
      methodsToPatch.forEach(function (method) {
        // cache original method
        var original = arrayProto[method]
        def(arrayMethods, method, function mutator () {
          var args = []; var len = arguments.length
          while (len--) args[len] = arguments[len]

          var result = original.apply(this, args)
          var ob = this.__ob__
          var inserted
          switch (method) {
            case 'push':
            case 'unshift':
              inserted = args
              break
            case 'splice':
              inserted = args.slice(2)
              break
          }
          if (inserted) { ob.observeArray(inserted) }
          // notify change
          ob.dep.notify()
          return result
        })
      })

      /*  */

      var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

      /**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
      var shouldObserve = true

      function toggleObserving (value) {
        shouldObserve = value
      }

      /**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
      var Observer = function Observer (value) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        def(value, '__ob__', this)
        if (Array.isArray(value)) {
          if (hasProto) {
            protoAugment(value, arrayMethods)
          } else {
            copyAugment(value, arrayMethods, arrayKeys)
          }
          this.observeArray(value)
        } else {
          this.walk(value)
        }
      }

      /**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
      Observer.prototype.walk = function walk (obj) {
        var keys = Object.keys(obj)
        for (var i = 0; i < keys.length; i++) {
          defineReactive$$1(obj, keys[i])
        }
      }

      /**
 * Observe a list of Array items.
 */
      Observer.prototype.observeArray = function observeArray (items) {
        for (var i = 0, l = items.length; i < l; i++) {
          observe(items[i])
        }
      }

      // helpers

      /**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
      function protoAugment (target, src) {
        /* eslint-disable no-proto */
        target.__proto__ = src
        /* eslint-enable no-proto */
      }

      /**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
      /* istanbul ignore next */
      function copyAugment (target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i]
          def(target, key, src[key])
        }
      }

      /**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
      function observe (value, asRootData) {
        if (!isObject(value) || value instanceof VNode) {
          return
        }
        var ob
        if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
          ob = value.__ob__
        } else if (
          shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
        ) {
          ob = new Observer(value)
        }
        if (asRootData && ob) {
          ob.vmCount++
        }
        return ob
      }

      /**
 * Define a reactive property on an Object.
 */
      function defineReactive$$1 (
        obj,
        key,
        val,
        customSetter,
        shallow
      ) {
        var dep = new Dep()

        var property = Object.getOwnPropertyDescriptor(obj, key)
        if (property && property.configurable === false) {
          return
        }

        // cater for pre-defined getter/setters
        var getter = property && property.get
        var setter = property && property.set
        if ((!getter || setter) && arguments.length === 2) {
          val = obj[key]
        }

        var childOb = !shallow && observe(val)
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function reactiveGetter () {
            var value = getter ? getter.call(obj) : val
            if (Dep.target) {
              dep.depend()
              if (childOb) {
                childOb.dep.depend()
                if (Array.isArray(value)) {
                  dependArray(value)
                }
              }
            }
            return value
          },
          set: function reactiveSetter (newVal) {
            var value = getter ? getter.call(obj) : val
            /* eslint-disable no-self-compare */
            if (newVal === value || (newVal !== newVal && value !== value)) {
              return
            }
            /* eslint-enable no-self-compare */
            if (false) {}
            // #7981: for accessor properties without setter
            if (getter && !setter) { return }
            if (setter) {
              setter.call(obj, newVal)
            } else {
              val = newVal
            }
            childOb = !shallow && observe(newVal)
            dep.notify()
          }
        })
      }

      /**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
      function set (target, key, val) {
        if (false
        ) {}
        if (Array.isArray(target) && isValidArrayIndex(key)) {
          target.length = Math.max(target.length, key)
          target.splice(key, 1, val)
          return val
        }
        if (key in target && !(key in Object.prototype)) {
          target[key] = val
          return val
        }
        var ob = (target).__ob__
        if (target._isVue || (ob && ob.vmCount)) {
          false && false
          return val
        }
        if (!ob) {
          target[key] = val
          return val
        }
        defineReactive$$1(ob.value, key, val)
        ob.dep.notify()
        return val
      }

      /**
 * Delete a property and trigger change if necessary.
 */
      function del (target, key) {
        if (false
        ) {}
        if (Array.isArray(target) && isValidArrayIndex(key)) {
          target.splice(key, 1)
          return
        }
        var ob = (target).__ob__
        if (target._isVue || (ob && ob.vmCount)) {
          false && false
          return
        }
        if (!hasOwn(target, key)) {
          return
        }
        delete target[key]
        if (!ob) {
          return
        }
        ob.dep.notify()
      }

      /**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
      function dependArray (value) {
        for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
          e = value[i]
          e && e.__ob__ && e.__ob__.dep.depend()
          if (Array.isArray(e)) {
            dependArray(e)
          }
        }
      }

      /*  */

      /**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
      var strats = config.optionMergeStrategies

      /**
 * Options with restrictions
 */
      if (false) {}

      /**
 * Helper that recursively merges two data objects together.
 */
      function mergeData (to, from) {
        if (!from) { return to }
        var key, toVal, fromVal

        var keys = hasSymbol
          ? Reflect.ownKeys(from)
          : Object.keys(from)

        for (var i = 0; i < keys.length; i++) {
          key = keys[i]
          // in case the object is already observed...
          if (key === '__ob__') { continue }
          toVal = to[key]
          fromVal = from[key]
          if (!hasOwn(to, key)) {
            set(to, key, fromVal)
          } else if (
            toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
          ) {
            mergeData(toVal, fromVal)
          }
        }
        return to
      }

      /**
 * Data
 */
      function mergeDataOrFn (
        parentVal,
        childVal,
        vm
      ) {
        if (!vm) {
          // in a Vue.extend merge, both should be functions
          if (!childVal) {
            return parentVal
          }
          if (!parentVal) {
            return childVal
          }
          // when parentVal & childVal are both present,
          // we need to return a function that returns the
          // merged result of both functions... no need to
          // check if parentVal is a function here because
          // it has to be a function to pass previous merges.
          return function mergedDataFn () {
            return mergeData(
              typeof childVal === 'function' ? childVal.call(this, this) : childVal,
              typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
            )
          }
        } else {
          return function mergedInstanceDataFn () {
            // instance merge
            var instanceData = typeof childVal === 'function'
              ? childVal.call(vm, vm)
              : childVal
            var defaultData = typeof parentVal === 'function'
              ? parentVal.call(vm, vm)
              : parentVal
            if (instanceData) {
              return mergeData(instanceData, defaultData)
            } else {
              return defaultData
            }
          }
        }
      }

      strats.data = function (
        parentVal,
        childVal,
        vm
      ) {
        if (!vm) {
          if (childVal && typeof childVal !== 'function') {
            false && false

            return parentVal
          }
          return mergeDataOrFn(parentVal, childVal)
        }

        return mergeDataOrFn(parentVal, childVal, vm)
      }

      /**
 * Hooks and props are merged as arrays.
 */
      function mergeHook (
        parentVal,
        childVal
      ) {
        var res = childVal
          ? parentVal
            ? parentVal.concat(childVal)
            : Array.isArray(childVal)
              ? childVal
              : [childVal]
          : parentVal
        return res
          ? dedupeHooks(res)
          : res
      }

      function dedupeHooks (hooks) {
        var res = []
        for (var i = 0; i < hooks.length; i++) {
          if (res.indexOf(hooks[i]) === -1) {
            res.push(hooks[i])
          }
        }
        return res
      }

      LIFECYCLE_HOOKS.forEach(function (hook) {
        strats[hook] = mergeHook
      })

      /**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
      function mergeAssets (
        parentVal,
        childVal,
        vm,
        key
      ) {
        var res = Object.create(parentVal || null)
        if (childVal) {
          false && false
          return extend(res, childVal)
        } else {
          return res
        }
      }

      ASSET_TYPES.forEach(function (type) {
        strats[type + 's'] = mergeAssets
      })

      /**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
      strats.watch = function (
        parentVal,
        childVal,
        vm,
        key
      ) {
        // work around Firefox's Object.prototype.watch...
        if (parentVal === nativeWatch) { parentVal = undefined }
        if (childVal === nativeWatch) { childVal = undefined }
        /* istanbul ignore if */
        if (!childVal) { return Object.create(parentVal || null) }
        if (false) {}
        if (!parentVal) { return childVal }
        var ret = {}
        extend(ret, parentVal)
        for (var key$1 in childVal) {
          var parent = ret[key$1]
          var child = childVal[key$1]
          if (parent && !Array.isArray(parent)) {
            parent = [parent]
          }
          ret[key$1] = parent
            ? parent.concat(child)
            : Array.isArray(child) ? child : [child]
        }
        return ret
      }

      /**
 * Other object hashes.
 */
      strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && 'production' !== 'production') {
    assertObjectType(key, childVal, vm)
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null)
  extend(ret, parentVal)
  if (childVal) { extend(ret, childVal) }
  return ret
}
      strats.provide = mergeDataOrFn

      /**
 * Default strategy.
 */
      var defaultStrat = function (parentVal, childVal) {
        return childVal === undefined
          ? parentVal
          : childVal
      }

      /**
 * Validate component names
 */
      function checkComponents (options) {
        for (var key in options.components) {
          validateComponentName(key)
        }
      }

      function validateComponentName (name) {
        if (!new RegExp(('^[a-zA-Z][\\-\\.0-9_' + (unicodeRegExp.source) + ']*$')).test(name)) {
          warn(
            'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
          )
        }
        if (isBuiltInTag(name) || config.isReservedTag(name)) {
          warn(
            'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
          )
        }
      }

      /**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
      function normalizeProps (options, vm) {
        var props = options.props
        if (!props) { return }
        var res = {}
        var i, val, name
        if (Array.isArray(props)) {
          i = props.length
          while (i--) {
            val = props[i]
            if (typeof val === 'string') {
              name = camelize(val)
              res[name] = { type: null }
            } else if (false) {}
          }
        } else if (isPlainObject(props)) {
          for (var key in props) {
            val = props[key]
            name = camelize(key)
            res[name] = isPlainObject(val)
              ? val
              : { type: val }
          }
        } else if (false) {}
        options.props = res
      }

      /**
 * Normalize all injections into Object-based format
 */
      function normalizeInject (options, vm) {
        var inject = options.inject
        if (!inject) { return }
        var normalized = options.inject = {}
        if (Array.isArray(inject)) {
          for (var i = 0; i < inject.length; i++) {
            normalized[inject[i]] = { from: inject[i] }
          }
        } else if (isPlainObject(inject)) {
          for (var key in inject) {
            var val = inject[key]
            normalized[key] = isPlainObject(val)
              ? extend({ from: key }, val)
              : { from: val }
          }
        } else if (false) {}
      }

      /**
 * Normalize raw function directives into object format.
 */
      function normalizeDirectives (options) {
        var dirs = options.directives
        if (dirs) {
          for (var key in dirs) {
            var def$$1 = dirs[key]
            if (typeof def$$1 === 'function') {
              dirs[key] = { bind: def$$1, update: def$$1 }
            }
          }
        }
      }

      function assertObjectType (name, value, vm) {
        if (!isPlainObject(value)) {
          warn(
            'Invalid value for option "' + name + '": expected an Object, ' +
      'but got ' + (toRawType(value)) + '.',
            vm
          )
        }
      }

      /**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
      function mergeOptions (
        parent,
        child,
        vm
      ) {
        if (false) {}

        if (typeof child === 'function') {
          child = child.options
        }

        normalizeProps(child, vm)
        normalizeInject(child, vm)
        normalizeDirectives(child)

        // Apply extends and mixins on the child options,
        // but only if it is a raw options object that isn't
        // the result of another mergeOptions call.
        // Only merged options has the _base property.
        if (!child._base) {
          if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm)
          }
          if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
              parent = mergeOptions(parent, child.mixins[i], vm)
            }
          }
        }

        var options = {}
        var key
        for (key in parent) {
          mergeField(key)
        }
        for (key in child) {
          if (!hasOwn(parent, key)) {
            mergeField(key)
          }
        }
        function mergeField (key) {
          var strat = strats[key] || defaultStrat
          options[key] = strat(parent[key], child[key], vm, key)
        }
        return options
      }

      /**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
      function resolveAsset (
        options,
        type,
        id,
        warnMissing
      ) {
        /* istanbul ignore if */
        if (typeof id !== 'string') {
          return
        }
        var assets = options[type]
        // check local registration variations first
        if (hasOwn(assets, id)) { return assets[id] }
        var camelizedId = camelize(id)
        if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
        var PascalCaseId = capitalize(camelizedId)
        if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
        // fallback to prototype chain
        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
        if (false) {}
        return res
      }

      /*  */

      function validateProp (
        key,
        propOptions,
        propsData,
        vm
      ) {
        var prop = propOptions[key]
        var absent = !hasOwn(propsData, key)
        var value = propsData[key]
        // boolean casting
        var booleanIndex = getTypeIndex(Boolean, prop.type)
        if (booleanIndex > -1) {
          if (absent && !hasOwn(prop, 'default')) {
            value = false
          } else if (value === '' || value === hyphenate(key)) {
            // only cast empty string / same name to boolean if
            // boolean has higher priority
            var stringIndex = getTypeIndex(String, prop.type)
            if (stringIndex < 0 || booleanIndex < stringIndex) {
              value = true
            }
          }
        }
        // check default value
        if (value === undefined) {
          value = getPropDefaultValue(vm, prop, key)
          // since the default value is a fresh copy,
          // make sure to observe it.
          var prevShouldObserve = shouldObserve
          toggleObserving(true)
          observe(value)
          toggleObserving(prevShouldObserve)
        }
        if (
          false
        ) {}
        return value
      }

      /**
 * Get the default value of a prop.
 */
      function getPropDefaultValue (vm, prop, key) {
        // no default, return undefined
        if (!hasOwn(prop, 'default')) {
          return undefined
        }
        var def = prop.default
        // warn against non-factory defaults for Object & Array
        if (false) {}
        // the raw prop value was also undefined from previous render,
        // return previous default value to avoid unnecessary watcher trigger
        if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
        ) {
          return vm._props[key]
        }
        // call factory function for non-Function types
        // a value is Function if its prototype is function even across different execution context
        return typeof def === 'function' && getType(prop.type) !== 'Function'
          ? def.call(vm)
          : def
      }

      /**
 * Assert whether a prop is valid.
 */
      function assertProp (
        prop,
        name,
        value,
        vm,
        absent
      ) {
        if (prop.required && absent) {
          warn(
            'Missing required prop: "' + name + '"',
            vm
          )
          return
        }
        if (value == null && !prop.required) {
          return
        }
        var type = prop.type
        var valid = !type || type === true
        var expectedTypes = []
        if (type) {
          if (!Array.isArray(type)) {
            type = [type]
          }
          for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i])
            expectedTypes.push(assertedType.expectedType || '')
            valid = assertedType.valid
          }
        }

        if (!valid) {
          warn(
            getInvalidTypeMessage(name, value, expectedTypes),
            vm
          )
          return
        }
        var validator = prop.validator
        if (validator) {
          if (!validator(value)) {
            warn(
              'Invalid prop: custom validator check failed for prop "' + name + '".',
              vm
            )
          }
        }
      }

      var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/

      function assertType (value, type) {
        var valid
        var expectedType = getType(type)
        if (simpleCheckRE.test(expectedType)) {
          var t = typeof value
          valid = t === expectedType.toLowerCase()
          // for primitive wrapper objects
          if (!valid && t === 'object') {
            valid = value instanceof type
          }
        } else if (expectedType === 'Object') {
          valid = isPlainObject(value)
        } else if (expectedType === 'Array') {
          valid = Array.isArray(value)
        } else {
          valid = value instanceof type
        }
        return {
          valid: valid,
          expectedType: expectedType
        }
      }

      /**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
      function getType (fn) {
        var match = fn && fn.toString().match(/^\s*function (\w+)/)
        return match ? match[1] : ''
      }

      function isSameType (a, b) {
        return getType(a) === getType(b)
      }

      function getTypeIndex (type, expectedTypes) {
        if (!Array.isArray(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1
        }
        for (var i = 0, len = expectedTypes.length; i < len; i++) {
          if (isSameType(expectedTypes[i], type)) {
            return i
          }
        }
        return -1
      }

      function getInvalidTypeMessage (name, value, expectedTypes) {
        var message = 'Invalid prop: type check failed for prop "' + name + '".' +
    ' Expected ' + (expectedTypes.map(capitalize).join(', '))
        var expectedType = expectedTypes[0]
        var receivedType = toRawType(value)
        var expectedValue = styleValue(value, expectedType)
        var receivedValue = styleValue(value, receivedType)
        // check if we need to specify expected value
        if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
          message += ' with value ' + expectedValue
        }
        message += ', got ' + receivedType + ' '
        // check if we need to specify received value
        if (isExplicable(receivedType)) {
          message += 'with value ' + receivedValue + '.'
        }
        return message
      }

      function styleValue (value, type) {
        if (type === 'String') {
          return ('"' + value + '"')
        } else if (type === 'Number') {
          return ('' + (Number(value)))
        } else {
          return ('' + value)
        }
      }

      function isExplicable (value) {
        var explicitTypes = ['string', 'number', 'boolean']
        return explicitTypes.some(function (elem) { return value.toLowerCase() === elem })
      }

      function isBoolean () {
        var args = []; var len = arguments.length
        while (len--) args[len] = arguments[len]

        return args.some(function (elem) { return elem.toLowerCase() === 'boolean' })
      }

      /*  */

      function handleError (err, vm, info) {
        // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
        // See: https://github.com/vuejs/vuex/issues/1505
        pushTarget()
        try {
          if (vm) {
            var cur = vm
            while ((cur = cur.$parent)) {
              var hooks = cur.$options.errorCaptured
              if (hooks) {
                for (var i = 0; i < hooks.length; i++) {
                  try {
                    var capture = hooks[i].call(cur, err, vm, info) === false
                    if (capture) { return }
                  } catch (e) {
                    globalHandleError(e, cur, 'errorCaptured hook')
                  }
                }
              }
            }
          }
          globalHandleError(err, vm, info)
        } finally {
          popTarget()
        }
      }

      function invokeWithErrorHandling (
        handler,
        context,
        args,
        vm,
        info
      ) {
        var res
        try {
          res = args ? handler.apply(context, args) : handler.call(context)
          if (res && !res._isVue && isPromise(res) && !res._handled) {
            res.catch(function (e) { return handleError(e, vm, info + ' (Promise/async)') })
            // issue #9511
            // avoid catch triggering multiple times when nested calls
            res._handled = true
          }
        } catch (e) {
          handleError(e, vm, info)
        }
        return res
      }

      function globalHandleError (err, vm, info) {
        if (config.errorHandler) {
          try {
            return config.errorHandler.call(null, err, vm, info)
          } catch (e) {
            // if the user intentionally throws the original error in the handler,
            // do not log it twice
            if (e !== err) {
              logError(e, null, 'config.errorHandler')
            }
          }
        }
        logError(err, vm, info)
      }

      function logError (err, vm, info) {
        if (false) {}
        /* istanbul ignore else */
        if ((inBrowser || inWeex) && typeof console !== 'undefined') {
          console.error(err)
        } else {
          throw err
        }
      }

      /*  */

      var isUsingMicroTask = false

      var callbacks = []
      var pending = false

      function flushCallbacks () {
        pending = false
        var copies = callbacks.slice(0)
        callbacks.length = 0
        for (var i = 0; i < copies.length; i++) {
          copies[i]()
        }
      }

      // Here we have async deferring wrappers using microtasks.
      // In 2.5 we used (macro) tasks (in combination with microtasks).
      // However, it has subtle problems when state is changed right before repaint
      // (e.g. #6813, out-in transitions).
      // Also, using (macro) tasks in event handler would cause some weird behaviors
      // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
      // So we now use microtasks everywhere, again.
      // A major drawback of this tradeoff is that there are some scenarios
      // where microtasks have too high a priority and fire in between supposedly
      // sequential events (e.g. #4521, #6690, which have workarounds)
      // or even between bubbling of the same event (#6566).
      var timerFunc

      // The nextTick behavior leverages the microtask queue, which can be accessed
      // via either native Promise.then or MutationObserver.
      // MutationObserver has wider support, however it is seriously bugged in
      // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
      // completely stops working after triggering a few times... so, if native
      // Promise is available, we will use it:
      /* istanbul ignore next, $flow-disable-line */
      if (typeof Promise !== 'undefined' && isNative(Promise)) {
        var p = Promise.resolve()
        timerFunc = function () {
          p.then(flushCallbacks)
          // In problematic UIWebViews, Promise.then doesn't completely break, but
          // it can get stuck in a weird state where callbacks are pushed into the
          // microtask queue but the queue isn't being flushed, until the browser
          // needs to do some other work, e.g. handle a timer. Therefore we can
          // "force" the microtask queue to be flushed by adding an empty timer.
          if (isIOS) { setTimeout(noop) }
        }
        isUsingMicroTask = true
      } else if (!isIE && typeof MutationObserver !== 'undefined' && (
        isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
      )) {
        // Use MutationObserver where native Promise is not available,
        // e.g. PhantomJS, iOS7, Android 4.4
        // (#6466 MutationObserver is unreliable in IE11)
        var counter = 1
        var observer = new MutationObserver(flushCallbacks)
        var textNode = document.createTextNode(String(counter))
        observer.observe(textNode, {
          characterData: true
        })
        timerFunc = function () {
          counter = (counter + 1) % 2
          textNode.data = String(counter)
        }
        isUsingMicroTask = true
      } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
        // Fallback to setImmediate.
        // Technically it leverages the (macro) task queue,
        // but it is still a better choice than setTimeout.
        timerFunc = function () {
          setImmediate(flushCallbacks)
        }
      } else {
        // Fallback to setTimeout.
        timerFunc = function () {
          setTimeout(flushCallbacks, 0)
        }
      }

      function nextTick (cb, ctx) {
        var _resolve
        callbacks.push(function () {
          if (cb) {
            try {
              cb.call(ctx)
            } catch (e) {
              handleError(e, ctx, 'nextTick')
            }
          } else if (_resolve) {
            _resolve(ctx)
          }
        })
        if (!pending) {
          pending = true
          timerFunc()
        }
        // $flow-disable-line
        if (!cb && typeof Promise !== 'undefined') {
          return new Promise(function (resolve) {
            _resolve = resolve
          })
        }
      }

      /*  */

      /* not type checking this file because flow doesn't play well with Proxy */

      var initProxy

      if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals }

      /*  */

      var seenObjects = new _Set()

      /**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
      function traverse (val) {
        _traverse(val, seenObjects)
        seenObjects.clear()
      }

      function _traverse (val, seen) {
        var i, keys
        var isA = Array.isArray(val)
        if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
          return
        }
        if (val.__ob__) {
          var depId = val.__ob__.dep.id
          if (seen.has(depId)) {
            return
          }
          seen.add(depId)
        }
        if (isA) {
          i = val.length
          while (i--) { _traverse(val[i], seen) }
        } else {
          keys = Object.keys(val)
          i = keys.length
          while (i--) { _traverse(val[keys[i]], seen) }
        }
      }

      var mark
      var measure

      if (false) { var perf }

      /*  */

      var normalizeEvent = cached(function (name) {
        var passive = name.charAt(0) === '&'
        name = passive ? name.slice(1) : name
        var once$$1 = name.charAt(0) === '~' // Prefixed last, checked first
        name = once$$1 ? name.slice(1) : name
        var capture = name.charAt(0) === '!'
        name = capture ? name.slice(1) : name
        return {
          name: name,
          once: once$$1,
          capture: capture,
          passive: passive
        }
      })

      function createFnInvoker (fns, vm) {
        function invoker () {
          var arguments$1 = arguments

          var fns = invoker.fns
          if (Array.isArray(fns)) {
            var cloned = fns.slice()
            for (var i = 0; i < cloned.length; i++) {
              invokeWithErrorHandling(cloned[i], null, arguments$1, vm, 'v-on handler')
            }
          } else {
            // return handler return value for single handlers
            return invokeWithErrorHandling(fns, null, arguments, vm, 'v-on handler')
          }
        }
        invoker.fns = fns
        return invoker
      }

      function updateListeners (
        on,
        oldOn,
        add,
        remove$$1,
        createOnceHandler,
        vm
      ) {
        var name, def$$1, cur, old, event
        for (name in on) {
          def$$1 = cur = on[name]
          old = oldOn[name]
          event = normalizeEvent(name)
          if (isUndef(cur)) {
            false && false
          } else if (isUndef(old)) {
            if (isUndef(cur.fns)) {
              cur = on[name] = createFnInvoker(cur, vm)
            }
            if (isTrue(event.once)) {
              cur = on[name] = createOnceHandler(event.name, cur, event.capture)
            }
            add(event.name, cur, event.capture, event.passive, event.params)
          } else if (cur !== old) {
            old.fns = cur
            on[name] = old
          }
        }
        for (name in oldOn) {
          if (isUndef(on[name])) {
            event = normalizeEvent(name)
            remove$$1(event.name, oldOn[name], event.capture)
          }
        }
      }

      /*  */

      function mergeVNodeHook (def, hookKey, hook) {
        if (def instanceof VNode) {
          def = def.data.hook || (def.data.hook = {})
        }
        var invoker
        var oldHook = def[hookKey]

        function wrappedHook () {
          hook.apply(this, arguments)
          // important: remove merged hook to ensure it's called only once
          // and prevent memory leak
          remove(invoker.fns, wrappedHook)
        }

        if (isUndef(oldHook)) {
          // no existing hook
          invoker = createFnInvoker([wrappedHook])
        } else {
          /* istanbul ignore if */
          if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
            // already a merged invoker
            invoker = oldHook
            invoker.fns.push(wrappedHook)
          } else {
            // existing plain hook
            invoker = createFnInvoker([oldHook, wrappedHook])
          }
        }

        invoker.merged = true
        def[hookKey] = invoker
      }

      /*  */

      function extractPropsFromVNodeData (
        data,
        Ctor,
        tag
      ) {
        // we are only extracting raw values here.
        // validation and default values are handled in the child
        // component itself.
        var propOptions = Ctor.options.props
        if (isUndef(propOptions)) {
          return
        }
        var res = {}
        var attrs = data.attrs
        var props = data.props
        if (isDef(attrs) || isDef(props)) {
          for (var key in propOptions) {
            var altKey = hyphenate(key)
            if (false) { var keyInLowerCase }
            checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false)
          }
        }
        return res
      }

      function checkProp (
        res,
        hash,
        key,
        altKey,
        preserve
      ) {
        if (isDef(hash)) {
          if (hasOwn(hash, key)) {
            res[key] = hash[key]
            if (!preserve) {
              delete hash[key]
            }
            return true
          } else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey]
            if (!preserve) {
              delete hash[altKey]
            }
            return true
          }
        }
        return false
      }

      /*  */

      // The template compiler attempts to minimize the need for normalization by
      // statically analyzing the template at compile time.
      //
      // For plain HTML markup, normalization can be completely skipped because the
      // generated render function is guaranteed to return Array<VNode>. There are
      // two cases where extra normalization is needed:

      // 1. When the children contains components - because a functional component
      // may return an Array instead of a single root. In this case, just a simple
      // normalization is needed - if any child is an Array, we flatten the whole
      // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
      // because functional components already normalize their own children.
      function simpleNormalizeChildren (children) {
        for (var i = 0; i < children.length; i++) {
          if (Array.isArray(children[i])) {
            return Array.prototype.concat.apply([], children)
          }
        }
        return children
      }

      // 2. When the children contains constructs that always generated nested Arrays,
      // e.g. <template>, <slot>, v-for, or when the children is provided by user
      // with hand-written render functions / JSX. In such cases a full normalization
      // is needed to cater to all possible types of children values.
      function normalizeChildren (children) {
        return isPrimitive(children)
          ? [createTextVNode(children)]
          : Array.isArray(children)
            ? normalizeArrayChildren(children)
            : undefined
      }

      function isTextNode (node) {
        return isDef(node) && isDef(node.text) && isFalse(node.isComment)
      }

      function normalizeArrayChildren (children, nestedIndex) {
        var res = []
        var i, c, lastIndex, last
        for (i = 0; i < children.length; i++) {
          c = children[i]
          if (isUndef(c) || typeof c === 'boolean') { continue }
          lastIndex = res.length - 1
          last = res[lastIndex]
          //  nested
          if (Array.isArray(c)) {
            if (c.length > 0) {
              c = normalizeArrayChildren(c, ((nestedIndex || '') + '_' + i))
              // merge adjacent text nodes
              if (isTextNode(c[0]) && isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + (c[0]).text)
                c.shift()
              }
              res.push.apply(res, c)
            }
          } else if (isPrimitive(c)) {
            if (isTextNode(last)) {
              // merge adjacent text nodes
              // this is necessary for SSR hydration because text nodes are
              // essentially merged when rendered to HTML strings
              res[lastIndex] = createTextVNode(last.text + c)
            } else if (c !== '') {
              // convert primitive to vnode
              res.push(createTextVNode(c))
            }
          } else {
            if (isTextNode(c) && isTextNode(last)) {
              // merge adjacent text nodes
              res[lastIndex] = createTextVNode(last.text + c.text)
            } else {
              // default key for nested array children (likely generated by v-for)
              if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
                c.key = '__vlist' + nestedIndex + '_' + i + '__'
              }
              res.push(c)
            }
          }
        }
        return res
      }

      /*  */

      function initProvide (vm) {
        var provide = vm.$options.provide
        if (provide) {
          vm._provided = typeof provide === 'function'
            ? provide.call(vm)
            : provide
        }
      }

      function initInjections (vm) {
        var result = resolveInject(vm.$options.inject, vm)
        if (result) {
          toggleObserving(false)
          Object.keys(result).forEach(function (key) {
            /* istanbul ignore else */
            if (false) {} else {
              defineReactive$$1(vm, key, result[key])
            }
          })
          toggleObserving(true)
        }
      }

      function resolveInject (inject, vm) {
        if (inject) {
          // inject is :any because flow is not smart enough to figure out cached
          var result = Object.create(null)
          var keys = hasSymbol
            ? Reflect.ownKeys(inject)
            : Object.keys(inject)

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i]
            // #6574 in case the inject object is observed...
            if (key === '__ob__') { continue }
            var provideKey = inject[key].from
            var source = vm
            while (source) {
              if (source._provided && hasOwn(source._provided, provideKey)) {
                result[key] = source._provided[provideKey]
                break
              }
              source = source.$parent
            }
            if (!source) {
              if ('default' in inject[key]) {
                var provideDefault = inject[key].default
                result[key] = typeof provideDefault === 'function'
                  ? provideDefault.call(vm)
                  : provideDefault
              } else if (false) {}
            }
          }
          return result
        }
      }

      /*  */

      /**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
      function resolveSlots (
        children,
        context
      ) {
        if (!children || !children.length) {
          return {}
        }
        var slots = {}
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i]
          var data = child.data
          // remove slot attribute if the node is resolved as a Vue slot node
          if (data && data.attrs && data.attrs.slot) {
            delete data.attrs.slot
          }
          // named slots should only be respected if the vnode was rendered in the
          // same context.
          if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
          ) {
            var name = data.slot
            var slot = (slots[name] || (slots[name] = []))
            if (child.tag === 'template') {
              slot.push.apply(slot, child.children || [])
            } else {
              slot.push(child)
            }
          } else {
            (slots.default || (slots.default = [])).push(child)
          }
        }
        // ignore slots that contains only whitespace
        for (var name$1 in slots) {
          if (slots[name$1].every(isWhitespace)) {
            delete slots[name$1]
          }
        }
        return slots
      }

      function isWhitespace (node) {
        return (node.isComment && !node.asyncFactory) || node.text === ' '
      }

      /*  */

      function normalizeScopedSlots (
        slots,
        normalSlots,
        prevSlots
      ) {
        var res
        var hasNormalSlots = Object.keys(normalSlots).length > 0
        var isStable = slots ? !!slots.$stable : !hasNormalSlots
        var key = slots && slots.$key
        if (!slots) {
          res = {}
        } else if (slots._normalized) {
          // fast path 1: child component re-render only, parent did not change
          return slots._normalized
        } else if (
          isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
        ) {
          // fast path 2: stable scoped slots w/ no normal slots to proxy,
          // only need to normalize once
          return prevSlots
        } else {
          res = {}
          for (var key$1 in slots) {
            if (slots[key$1] && key$1[0] !== '$') {
              res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1])
            }
          }
        }
        // expose normal slots on scopedSlots
        for (var key$2 in normalSlots) {
          if (!(key$2 in res)) {
            res[key$2] = proxyNormalSlot(normalSlots, key$2)
          }
        }
        // avoriaz seems to mock a non-extensible $scopedSlots object
        // and when that is passed down this would cause an error
        if (slots && Object.isExtensible(slots)) {
          (slots)._normalized = res
        }
        def(res, '$stable', isStable)
        def(res, '$key', key)
        def(res, '$hasNormal', hasNormalSlots)
        return res
      }

      function normalizeScopedSlot (normalSlots, key, fn) {
        var normalized = function () {
          var res = arguments.length ? fn.apply(null, arguments) : fn({})
          res = res && typeof res === 'object' && !Array.isArray(res)
            ? [res] // single vnode
            : normalizeChildren(res)
          return res && (
            res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
          ) ? undefined
            : res
        }
        // this is a slot using the new v-slot syntax without scope. although it is
        // compiled as a scoped slot, render fn users would expect it to be present
        // on this.$slots because the usage is semantically a normal slot.
        if (fn.proxy) {
          Object.defineProperty(normalSlots, key, {
            get: normalized,
            enumerable: true,
            configurable: true
          })
        }
        return normalized
      }

      function proxyNormalSlot (slots, key) {
        return function () { return slots[key] }
      }

      /*  */

      /**
 * Runtime helper for rendering v-for lists.
 */
      function renderList (
        val,
        render
      ) {
        var ret, i, l, keys, key
        if (Array.isArray(val) || typeof val === 'string') {
          ret = new Array(val.length)
          for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i)
          }
        } else if (typeof val === 'number') {
          ret = new Array(val)
          for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i)
          }
        } else if (isObject(val)) {
          if (hasSymbol && val[Symbol.iterator]) {
            ret = []
            var iterator = val[Symbol.iterator]()
            var result = iterator.next()
            while (!result.done) {
              ret.push(render(result.value, ret.length))
              result = iterator.next()
            }
          } else {
            keys = Object.keys(val)
            ret = new Array(keys.length)
            for (i = 0, l = keys.length; i < l; i++) {
              key = keys[i]
              ret[i] = render(val[key], key, i)
            }
          }
        }
        if (!isDef(ret)) {
          ret = []
        }
        (ret)._isVList = true
        return ret
      }

      /*  */

      /**
 * Runtime helper for rendering <slot>
 */
      function renderSlot (
        name,
        fallback,
        props,
        bindObject
      ) {
        var scopedSlotFn = this.$scopedSlots[name]
        var nodes
        if (scopedSlotFn) { // scoped slot
          props = props || {}
          if (bindObject) {
            if (false) {}
            props = extend(extend({}, bindObject), props)
          }
          nodes = scopedSlotFn(props) || fallback
        } else {
          nodes = this.$slots[name] || fallback
        }

        var target = props && props.slot
        if (target) {
          return this.$createElement('template', { slot: target }, nodes)
        } else {
          return nodes
        }
      }

      /*  */

      /**
 * Runtime helper for resolving filters
 */
      function resolveFilter (id) {
        return resolveAsset(this.$options, 'filters', id, true) || identity
      }

      /*  */

      function isKeyNotMatch (expect, actual) {
        if (Array.isArray(expect)) {
          return expect.indexOf(actual) === -1
        } else {
          return expect !== actual
        }
      }

      /**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
      function checkKeyCodes (
        eventKeyCode,
        key,
        builtInKeyCode,
        eventKeyName,
        builtInKeyName
      ) {
        var mappedKeyCode = config.keyCodes[key] || builtInKeyCode
        if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
          return isKeyNotMatch(builtInKeyName, eventKeyName)
        } else if (mappedKeyCode) {
          return isKeyNotMatch(mappedKeyCode, eventKeyCode)
        } else if (eventKeyName) {
          return hyphenate(eventKeyName) !== key
        }
      }

      /*  */

      /**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
      function bindObjectProps (
        data,
        tag,
        value,
        asProp,
        isSync
      ) {
        if (value) {
          if (!isObject(value)) {
            false && false
          } else {
            if (Array.isArray(value)) {
              value = toObject(value)
            }
            var hash
            var loop = function (key) {
              if (
                key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
              ) {
                hash = data
              } else {
                var type = data.attrs && data.attrs.type
                hash = asProp || config.mustUseProp(tag, type, key)
                  ? data.domProps || (data.domProps = {})
                  : data.attrs || (data.attrs = {})
              }
              var camelizedKey = camelize(key)
              var hyphenatedKey = hyphenate(key)
              if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                hash[key] = value[key]

                if (isSync) {
                  var on = data.on || (data.on = {})
                  on[('update:' + key)] = function ($event) {
                    value[key] = $event
                  }
                }
              }
            }

            for (var key in value) loop(key)
          }
        }
        return data
      }

      /*  */

      /**
 * Runtime helper for rendering static trees.
 */
      function renderStatic (
        index,
        isInFor
      ) {
        var cached = this._staticTrees || (this._staticTrees = [])
        var tree = cached[index]
        // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree.
        if (tree && !isInFor) {
          return tree
        }
        // otherwise, render a fresh tree.
        tree = cached[index] = this.$options.staticRenderFns[index].call(
          this._renderProxy,
          null,
          this // for render fns generated for functional component templates
        )
        markStatic(tree, ('__static__' + index), false)
        return tree
      }

      /**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
      function markOnce (
        tree,
        index,
        key
      ) {
        markStatic(tree, ('__once__' + index + (key ? ('_' + key) : '')), true)
        return tree
      }

      function markStatic (
        tree,
        key,
        isOnce
      ) {
        if (Array.isArray(tree)) {
          for (var i = 0; i < tree.length; i++) {
            if (tree[i] && typeof tree[i] !== 'string') {
              markStaticNode(tree[i], (key + '_' + i), isOnce)
            }
          }
        } else {
          markStaticNode(tree, key, isOnce)
        }
      }

      function markStaticNode (node, key, isOnce) {
        node.isStatic = true
        node.key = key
        node.isOnce = isOnce
      }

      /*  */

      function bindObjectListeners (data, value) {
        if (value) {
          if (!isPlainObject(value)) {
            false && false
          } else {
            var on = data.on = data.on ? extend({}, data.on) : {}
            for (var key in value) {
              var existing = on[key]
              var ours = value[key]
              on[key] = existing ? [].concat(existing, ours) : ours
            }
          }
        }
        return data
      }

      /*  */

      function resolveScopedSlots (
        fns, // see flow/vnode
        res,
        // the following are added in 2.6
        hasDynamicKeys,
        contentHashKey
      ) {
        res = res || { $stable: !hasDynamicKeys }
        for (var i = 0; i < fns.length; i++) {
          var slot = fns[i]
          if (Array.isArray(slot)) {
            resolveScopedSlots(slot, res, hasDynamicKeys)
          } else if (slot) {
            // marker for reverse proxying v-slot without scope on this.$slots
            if (slot.proxy) {
              slot.fn.proxy = true
            }
            res[slot.key] = slot.fn
          }
        }
        if (contentHashKey) {
          (res).$key = contentHashKey
        }
        return res
      }

      /*  */

      function bindDynamicKeys (baseObj, values) {
        for (var i = 0; i < values.length; i += 2) {
          var key = values[i]
          if (typeof key === 'string' && key) {
            baseObj[values[i]] = values[i + 1]
          } else if (false) {}
        }
        return baseObj
      }

      // helper to dynamically append modifier runtime markers to event names.
      // ensure only append when value is already string, otherwise it will be cast
      // to string and cause the type check to miss.
      function prependModifier (value, symbol) {
        return typeof value === 'string' ? symbol + value : value
      }

      /*  */

      function installRenderHelpers (target) {
        target._o = markOnce
        target._n = toNumber
        target._s = toString
        target._l = renderList
        target._t = renderSlot
        target._q = looseEqual
        target._i = looseIndexOf
        target._m = renderStatic
        target._f = resolveFilter
        target._k = checkKeyCodes
        target._b = bindObjectProps
        target._v = createTextVNode
        target._e = createEmptyVNode
        target._u = resolveScopedSlots
        target._g = bindObjectListeners
        target._d = bindDynamicKeys
        target._p = prependModifier
      }

      /*  */

      function FunctionalRenderContext (
        data,
        props,
        children,
        parent,
        Ctor
      ) {
        var this$1 = this

        var options = Ctor.options
        // ensure the createElement function in functional components
        // gets a unique context - this is necessary for correct named slot check
        var contextVm
        if (hasOwn(parent, '_uid')) {
          contextVm = Object.create(parent)
          // $flow-disable-line
          contextVm._original = parent
        } else {
          // the context vm passed in is a functional context as well.
          // in this case we want to make sure we are able to get a hold to the
          // real context instance.
          contextVm = parent
          // $flow-disable-line
          parent = parent._original
        }
        var isCompiled = isTrue(options._compiled)
        var needNormalization = !isCompiled

        this.data = data
        this.props = props
        this.children = children
        this.parent = parent
        this.listeners = data.on || emptyObject
        this.injections = resolveInject(options.inject, parent)
        this.slots = function () {
          if (!this$1.$slots) {
            normalizeScopedSlots(
              data.scopedSlots,
              this$1.$slots = resolveSlots(children, parent)
            )
          }
          return this$1.$slots
        }

        Object.defineProperty(this, 'scopedSlots', ({
          enumerable: true,
          get: function get () {
            return normalizeScopedSlots(data.scopedSlots, this.slots())
          }
        }))

        // support for compiled functional template
        if (isCompiled) {
          // exposing $options for renderStatic()
          this.$options = options
          // pre-resolve slots for renderSlot()
          this.$slots = this.slots()
          this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots)
        }

        if (options._scopeId) {
          this._c = function (a, b, c, d) {
            var vnode = createElement(contextVm, a, b, c, d, needNormalization)
            if (vnode && !Array.isArray(vnode)) {
              vnode.fnScopeId = options._scopeId
              vnode.fnContext = parent
            }
            return vnode
          }
        } else {
          this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization) }
        }
      }

      installRenderHelpers(FunctionalRenderContext.prototype)

      function createFunctionalComponent (
        Ctor,
        propsData,
        data,
        contextVm,
        children
      ) {
        var options = Ctor.options
        var props = {}
        var propOptions = options.props
        if (isDef(propOptions)) {
          for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData || emptyObject)
          }
        } else {
          if (isDef(data.attrs)) { mergeProps(props, data.attrs) }
          if (isDef(data.props)) { mergeProps(props, data.props) }
        }

        var renderContext = new FunctionalRenderContext(
          data,
          props,
          children,
          contextVm,
          Ctor
        )

        var vnode = options.render.call(null, renderContext._c, renderContext)

        if (vnode instanceof VNode) {
          return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
        } else if (Array.isArray(vnode)) {
          var vnodes = normalizeChildren(vnode) || []
          var res = new Array(vnodes.length)
          for (var i = 0; i < vnodes.length; i++) {
            res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext)
          }
          return res
        }
      }

      function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
        // #7817 clone node before setting fnContext, otherwise if the node is reused
        // (e.g. it was from a cached normal slot) the fnContext causes named slots
        // that should not be matched to match.
        var clone = cloneVNode(vnode)
        clone.fnContext = contextVm
        clone.fnOptions = options
        if (false) {}
        if (data.slot) {
          (clone.data || (clone.data = {})).slot = data.slot
        }
        return clone
      }

      function mergeProps (to, from) {
        for (var key in from) {
          to[camelize(key)] = from[key]
        }
      }

      /*  */

      /*  */

      /*  */

      /*  */

      // inline hooks to be invoked on component VNodes during patch
      var componentVNodeHooks = {
        init: function init (vnode, hydrating) {
          if (
            vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
          ) {
            // kept-alive components, treat as a patch
            var mountedNode = vnode // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode)
          } else {
            var child = vnode.componentInstance = createComponentInstanceForVnode(
              vnode,
              activeInstance
            )
            child.$mount(hydrating ? vnode.elm : undefined, hydrating)
          }
        },

        prepatch: function prepatch (oldVnode, vnode) {
          var options = vnode.componentOptions
          var child = vnode.componentInstance = oldVnode.componentInstance
          updateChildComponent(
            child,
            options.propsData, // updated props
            options.listeners, // updated listeners
            vnode, // new parent vnode
            options.children // new children
          )
        },

        insert: function insert (vnode) {
          var context = vnode.context
          var componentInstance = vnode.componentInstance
          if (!componentInstance._isMounted) {
            componentInstance._isMounted = true
            callHook(componentInstance, 'mounted')
          }
          if (vnode.data.keepAlive) {
            if (context._isMounted) {
              // vue-router#1212
              // During updates, a kept-alive component's child components may
              // change, so directly walking the tree here may call activated hooks
              // on incorrect children. Instead we push them into a queue which will
              // be processed after the whole patch process ended.
              queueActivatedComponent(componentInstance)
            } else {
              activateChildComponent(componentInstance, true /* direct */)
            }
          }
        },

        destroy: function destroy (vnode) {
          var componentInstance = vnode.componentInstance
          if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
              componentInstance.$destroy()
            } else {
              deactivateChildComponent(componentInstance, true /* direct */)
            }
          }
        }
      }

      var hooksToMerge = Object.keys(componentVNodeHooks)

      function createComponent (
        Ctor,
        data,
        context,
        children,
        tag
      ) {
        if (isUndef(Ctor)) {
          return
        }

        var baseCtor = context.$options._base

        // plain options object: turn it into a constructor
        if (isObject(Ctor)) {
          Ctor = baseCtor.extend(Ctor)
        }

        // if at this stage it's not a constructor or an async component factory,
        // reject.
        if (typeof Ctor !== 'function') {
          if (false) {}
          return
        }

        // async component
        var asyncFactory
        if (isUndef(Ctor.cid)) {
          asyncFactory = Ctor
          Ctor = resolveAsyncComponent(asyncFactory, baseCtor)
          if (Ctor === undefined) {
            // return a placeholder node for async component, which is rendered
            // as a comment node but preserves all the raw information for the node.
            // the information will be used for async server-rendering and hydration.
            return createAsyncPlaceholder(
              asyncFactory,
              data,
              context,
              children,
              tag
            )
          }
        }

        data = data || {}

        // resolve constructor options in case global mixins are applied after
        // component constructor creation
        resolveConstructorOptions(Ctor)

        // transform component v-model data into props & events
        if (isDef(data.model)) {
          transformModel(Ctor.options, data)
        }

        // extract props
        var propsData = extractPropsFromVNodeData(data, Ctor, tag)

        // functional component
        if (isTrue(Ctor.options.functional)) {
          return createFunctionalComponent(Ctor, propsData, data, context, children)
        }

        // extract listeners, since these needs to be treated as
        // child component listeners instead of DOM listeners
        var listeners = data.on
        // replace with listeners with .native modifier
        // so it gets processed during parent component patch.
        data.on = data.nativeOn

        if (isTrue(Ctor.options.abstract)) {
          // abstract components do not keep anything
          // other than props & listeners & slot

          // work around flow
          var slot = data.slot
          data = {}
          if (slot) {
            data.slot = slot
          }
        }

        // install component management hooks onto the placeholder node
        installComponentHooks(data)

        // return a placeholder vnode
        var name = Ctor.options.name || tag
        var vnode = new VNode(
          ('vue-component-' + (Ctor.cid) + (name ? ('-' + name) : '')),
          data, undefined, undefined, undefined, context,
          { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
          asyncFactory
        )

        return vnode
      }

      function createComponentInstanceForVnode (
        vnode, // we know it's MountedComponentVNode but flow doesn't
        parent // activeInstance in lifecycle state
      ) {
        var options = {
          _isComponent: true,
          _parentVnode: vnode,
          parent: parent
        }
        // check inline-template render functions
        var inlineTemplate = vnode.data.inlineTemplate
        if (isDef(inlineTemplate)) {
          options.render = inlineTemplate.render
          options.staticRenderFns = inlineTemplate.staticRenderFns
        }
        return new vnode.componentOptions.Ctor(options)
      }

      function installComponentHooks (data) {
        var hooks = data.hook || (data.hook = {})
        for (var i = 0; i < hooksToMerge.length; i++) {
          var key = hooksToMerge[i]
          var existing = hooks[key]
          var toMerge = componentVNodeHooks[key]
          if (existing !== toMerge && !(existing && existing._merged)) {
            hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge
          }
        }
      }

      function mergeHook$1 (f1, f2) {
        var merged = function (a, b) {
          // flow complains about extra args which is why we use any
          f1(a, b)
          f2(a, b)
        }
        merged._merged = true
        return merged
      }

      // transform component v-model info (value and callback) into
      // prop and event handler respectively.
      function transformModel (options, data) {
        var prop = (options.model && options.model.prop) || 'value'
        var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value
        var on = data.on || (data.on = {})
        var existing = on[event]
        var callback = data.model.callback
        if (isDef(existing)) {
          if (
            Array.isArray(existing)
              ? existing.indexOf(callback) === -1
              : existing !== callback
          ) {
            on[event] = [callback].concat(existing)
          }
        } else {
          on[event] = callback
        }
      }

      /*  */

      var SIMPLE_NORMALIZE = 1
      var ALWAYS_NORMALIZE = 2

      // wrapper function for providing a more flexible interface
      // without getting yelled at by flow
      function createElement (
        context,
        tag,
        data,
        children,
        normalizationType,
        alwaysNormalize
      ) {
        if (Array.isArray(data) || isPrimitive(data)) {
          normalizationType = children
          children = data
          data = undefined
        }
        if (isTrue(alwaysNormalize)) {
          normalizationType = ALWAYS_NORMALIZE
        }
        return _createElement(context, tag, data, children, normalizationType)
      }

      function _createElement (
        context,
        tag,
        data,
        children,
        normalizationType
      ) {
        if (isDef(data) && isDef((data).__ob__)) {
          false && false
          return createEmptyVNode()
        }
        // object syntax in v-bind
        if (isDef(data) && isDef(data.is)) {
          tag = data.is
        }
        if (!tag) {
          // in case of component :is set to falsy value
          return createEmptyVNode()
        }
        // warn against non-primitive key
        if (false
        ) {}
        // support single function children as default scoped slot
        if (Array.isArray(children) &&
    typeof children[0] === 'function'
        ) {
          data = data || {}
          data.scopedSlots = { default: children[0] }
          children.length = 0
        }
        if (normalizationType === ALWAYS_NORMALIZE) {
          children = normalizeChildren(children)
        } else if (normalizationType === SIMPLE_NORMALIZE) {
          children = simpleNormalizeChildren(children)
        }
        var vnode, ns
        if (typeof tag === 'string') {
          var Ctor
          ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
          if (config.isReservedTag(tag)) {
            // platform built-in elements
            if (false) {}
            vnode = new VNode(
              config.parsePlatformTagName(tag), data, children,
              undefined, undefined, context
            )
          } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
            // component
            vnode = createComponent(Ctor, data, context, children, tag)
          } else {
            // unknown or unlisted namespaced elements
            // check at runtime because it may get assigned a namespace when its
            // parent normalizes children
            vnode = new VNode(
              tag, data, children,
              undefined, undefined, context
            )
          }
        } else {
          // direct component options / constructor
          vnode = createComponent(tag, data, context, children)
        }
        if (Array.isArray(vnode)) {
          return vnode
        } else if (isDef(vnode)) {
          if (isDef(ns)) { applyNS(vnode, ns) }
          if (isDef(data)) { registerDeepBindings(data) }
          return vnode
        } else {
          return createEmptyVNode()
        }
      }

      function applyNS (vnode, ns, force) {
        vnode.ns = ns
        if (vnode.tag === 'foreignObject') {
          // use default namespace inside foreignObject
          ns = undefined
          force = true
        }
        if (isDef(vnode.children)) {
          for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i]
            if (isDef(child.tag) && (
              isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
              applyNS(child, ns, force)
            }
          }
        }
      }

      // ref #5318
      // necessary to ensure parent re-render when deep bindings like :style and
      // :class are used on slot nodes
      function registerDeepBindings (data) {
        if (isObject(data.style)) {
          traverse(data.style)
        }
        if (isObject(data.class)) {
          traverse(data.class)
        }
      }

      /*  */

      function initRender (vm) {
        vm._vnode = null // the root of the child tree
        vm._staticTrees = null // v-once cached trees
        var options = vm.$options
        var parentVnode = vm.$vnode = options._parentVnode // the placeholder node in parent tree
        var renderContext = parentVnode && parentVnode.context
        vm.$slots = resolveSlots(options._renderChildren, renderContext)
        vm.$scopedSlots = emptyObject
        // bind the createElement fn to this instance
        // so that we get proper render context inside it.
        // args order: tag, data, children, normalizationType, alwaysNormalize
        // internal version is used by render functions compiled from templates
        vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false) }
        // normalization is always applied for the public version, used in
        // user-written render functions.
        vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true) }

        // $attrs & $listeners are exposed for easier HOC creation.
        // they need to be reactive so that HOCs using them are always updated
        var parentData = parentVnode && parentVnode.data

        /* istanbul ignore else */
        if (false) {} else {
          defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true)
          defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true)
        }
      }

      var currentRenderingInstance = null

      function renderMixin (Vue) {
        // install runtime convenience helpers
        installRenderHelpers(Vue.prototype)

        Vue.prototype.$nextTick = function (fn) {
          return nextTick(fn, this)
        }

        Vue.prototype._render = function () {
          var vm = this
          var ref = vm.$options
          var render = ref.render
          var _parentVnode = ref._parentVnode

          if (_parentVnode) {
            vm.$scopedSlots = normalizeScopedSlots(
              _parentVnode.data.scopedSlots,
              vm.$slots,
              vm.$scopedSlots
            )
          }

          // set parent vnode. this allows render functions to have access
          // to the data on the placeholder node.
          vm.$vnode = _parentVnode
          // render self
          var vnode
          try {
            // There's no need to maintain a stack because all render fns are called
            // separately from one another. Nested component's render fns are called
            // when parent component is patched.
            currentRenderingInstance = vm
            vnode = render.call(vm._renderProxy, vm.$createElement)
          } catch (e) {
            handleError(e, vm, 'render')
            // return error render result,
            // or previous vnode to prevent render error causing blank component
            /* istanbul ignore else */
            if (false) {} else {
              vnode = vm._vnode
            }
          } finally {
            currentRenderingInstance = null
          }
          // if the returned array contains only a single node, allow it
          if (Array.isArray(vnode) && vnode.length === 1) {
            vnode = vnode[0]
          }
          // return empty vnode in case the render function errored out
          if (!(vnode instanceof VNode)) {
            if (false) {}
            vnode = createEmptyVNode()
          }
          // set parent
          vnode.parent = _parentVnode
          return vnode
        }
      }

      /*  */

      function ensureCtor (comp, base) {
        if (
          comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
        ) {
          comp = comp.default
        }
        return isObject(comp)
          ? base.extend(comp)
          : comp
      }

      function createAsyncPlaceholder (
        factory,
        data,
        context,
        children,
        tag
      ) {
        var node = createEmptyVNode()
        node.asyncFactory = factory
        node.asyncMeta = { data: data, context: context, children: children, tag: tag }
        return node
      }

      function resolveAsyncComponent (
        factory,
        baseCtor
      ) {
        if (isTrue(factory.error) && isDef(factory.errorComp)) {
          return factory.errorComp
        }

        if (isDef(factory.resolved)) {
          return factory.resolved
        }

        var owner = currentRenderingInstance
        if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
          // already pending
          factory.owners.push(owner)
        }

        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
          return factory.loadingComp
        }

        if (owner && !isDef(factory.owners)) {
          var owners = factory.owners = [owner]
          var sync = true
          var timerLoading = null
          var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner) })

          var forceRender = function (renderCompleted) {
            for (var i = 0, l = owners.length; i < l; i++) {
              (owners[i]).$forceUpdate()
            }

            if (renderCompleted) {
              owners.length = 0
              if (timerLoading !== null) {
                clearTimeout(timerLoading)
                timerLoading = null
              }
              if (timerTimeout !== null) {
                clearTimeout(timerTimeout)
                timerTimeout = null
              }
            }
          }

          var resolve = once(function (res) {
            // cache resolved
            factory.resolved = ensureCtor(res, baseCtor)
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync) {
              forceRender(true)
            } else {
              owners.length = 0
            }
          })

          var reject = once(function (reason) {
            false && false
            if (isDef(factory.errorComp)) {
              factory.error = true
              forceRender(true)
            }
          })

          var res = factory(resolve, reject)

          if (isObject(res)) {
            if (isPromise(res)) {
              // () => Promise
              if (isUndef(factory.resolved)) {
                res.then(resolve, reject)
              }
            } else if (isPromise(res.component)) {
              res.component.then(resolve, reject)

              if (isDef(res.error)) {
                factory.errorComp = ensureCtor(res.error, baseCtor)
              }

              if (isDef(res.loading)) {
                factory.loadingComp = ensureCtor(res.loading, baseCtor)
                if (res.delay === 0) {
                  factory.loading = true
                } else {
                  timerLoading = setTimeout(function () {
                    timerLoading = null
                    if (isUndef(factory.resolved) && isUndef(factory.error)) {
                      factory.loading = true
                      forceRender(false)
                    }
                  }, res.delay || 200)
                }
              }

              if (isDef(res.timeout)) {
                timerTimeout = setTimeout(function () {
                  timerTimeout = null
                  if (isUndef(factory.resolved)) {
                    reject(
                      false
                        ? (undefined)
                        : null
                    )
                  }
                }, res.timeout)
              }
            }
          }

          sync = false
          // return in case resolved synchronously
          return factory.loading
            ? factory.loadingComp
            : factory.resolved
        }
      }

      /*  */

      function isAsyncPlaceholder (node) {
        return node.isComment && node.asyncFactory
      }

      /*  */

      function getFirstComponentChild (children) {
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            var c = children[i]
            if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
              return c
            }
          }
        }
      }

      /*  */

      /*  */

      function initEvents (vm) {
        vm._events = Object.create(null)
        vm._hasHookEvent = false
        // init parent attached events
        var listeners = vm.$options._parentListeners
        if (listeners) {
          updateComponentListeners(vm, listeners)
        }
      }

      var target

      function add (event, fn) {
        target.$on(event, fn)
      }

      function remove$1 (event, fn) {
        target.$off(event, fn)
      }

      function createOnceHandler (event, fn) {
        var _target = target
        return function onceHandler () {
          var res = fn.apply(null, arguments)
          if (res !== null) {
            _target.$off(event, onceHandler)
          }
        }
      }

      function updateComponentListeners (
        vm,
        listeners,
        oldListeners
      ) {
        target = vm
        updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm)
        target = undefined
      }

      function eventsMixin (Vue) {
        var hookRE = /^hook:/
        Vue.prototype.$on = function (event, fn) {
          var vm = this
          if (Array.isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
              vm.$on(event[i], fn)
            }
          } else {
            (vm._events[event] || (vm._events[event] = [])).push(fn)
            // optimize hook:event cost by using a boolean flag marked at registration
            // instead of a hash lookup
            if (hookRE.test(event)) {
              vm._hasHookEvent = true
            }
          }
          return vm
        }

        Vue.prototype.$once = function (event, fn) {
          var vm = this
          function on () {
            vm.$off(event, on)
            fn.apply(vm, arguments)
          }
          on.fn = fn
          vm.$on(event, on)
          return vm
        }

        Vue.prototype.$off = function (event, fn) {
          var vm = this
          // all
          if (!arguments.length) {
            vm._events = Object.create(null)
            return vm
          }
          // array of events
          if (Array.isArray(event)) {
            for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
              vm.$off(event[i$1], fn)
            }
            return vm
          }
          // specific event
          var cbs = vm._events[event]
          if (!cbs) {
            return vm
          }
          if (!fn) {
            vm._events[event] = null
            return vm
          }
          // specific handler
          var cb
          var i = cbs.length
          while (i--) {
            cb = cbs[i]
            if (cb === fn || cb.fn === fn) {
              cbs.splice(i, 1)
              break
            }
          }
          return vm
        }

        Vue.prototype.$emit = function (event) {
          var vm = this
          if (false) { var lowerCaseEvent }
          var cbs = vm._events[event]
          if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs
            var args = toArray(arguments, 1)
            var info = 'event handler for "' + event + '"'
            for (var i = 0, l = cbs.length; i < l; i++) {
              invokeWithErrorHandling(cbs[i], vm, args, vm, info)
            }
          }
          return vm
        }
      }

      /*  */

      var activeInstance = null
      var isUpdatingChildComponent = false

      function setActiveInstance (vm) {
        var prevActiveInstance = activeInstance
        activeInstance = vm
        return function () {
          activeInstance = prevActiveInstance
        }
      }

      function initLifecycle (vm) {
        var options = vm.$options

        // locate first non-abstract parent
        var parent = options.parent
        if (parent && !options.abstract) {
          while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent
          }
          parent.$children.push(vm)
        }

        vm.$parent = parent
        vm.$root = parent ? parent.$root : vm

        vm.$children = []
        vm.$refs = {}

        vm._watcher = null
        vm._inactive = null
        vm._directInactive = false
        vm._isMounted = false
        vm._isDestroyed = false
        vm._isBeingDestroyed = false
      }

      function lifecycleMixin (Vue) {
        Vue.prototype._update = function (vnode, hydrating) {
          var vm = this
          var prevEl = vm.$el
          var prevVnode = vm._vnode
          var restoreActiveInstance = setActiveInstance(vm)
          vm._vnode = vnode
          // Vue.prototype.__patch__ is injected in entry points
          // based on the rendering backend used.
          if (!prevVnode) {
            // initial render
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
          } else {
            // updates
            vm.$el = vm.__patch__(prevVnode, vnode)
          }
          restoreActiveInstance()
          // update __vue__ reference
          if (prevEl) {
            prevEl.__vue__ = null
          }
          if (vm.$el) {
            vm.$el.__vue__ = vm
          }
          // if parent is an HOC, update its $el as well
          if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
            vm.$parent.$el = vm.$el
          }
          // updated hook is called by the scheduler to ensure that children are
          // updated in a parent's updated hook.
        }

        Vue.prototype.$forceUpdate = function () {
          var vm = this
          if (vm._watcher) {
            vm._watcher.update()
          }
        }

        Vue.prototype.$destroy = function () {
          var vm = this
          if (vm._isBeingDestroyed) {
            return
          }
          callHook(vm, 'beforeDestroy')
          vm._isBeingDestroyed = true
          // remove self from parent
          var parent = vm.$parent
          if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove(parent.$children, vm)
          }
          // teardown watchers
          if (vm._watcher) {
            vm._watcher.teardown()
          }
          var i = vm._watchers.length
          while (i--) {
            vm._watchers[i].teardown()
          }
          // remove reference from data ob
          // frozen object may not have observer.
          if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--
          }
          // call the last hook...
          vm._isDestroyed = true
          // invoke destroy hooks on current rendered tree
          vm.__patch__(vm._vnode, null)
          // fire destroyed hook
          callHook(vm, 'destroyed')
          // turn off all instance listeners.
          vm.$off()
          // remove __vue__ reference
          if (vm.$el) {
            vm.$el.__vue__ = null
          }
          // release circular reference (#6759)
          if (vm.$vnode) {
            vm.$vnode.parent = null
          }
        }
      }

      function mountComponent (
        vm,
        el,
        hydrating
      ) {
        vm.$el = el
        if (!vm.$options.render) {
          vm.$options.render = createEmptyVNode
          if (false) {}
        }
        callHook(vm, 'beforeMount')

        var updateComponent
        /* istanbul ignore if */
        if (false) {} else {
          updateComponent = function () {
            vm._update(vm._render(), hydrating)
          }
        }

        // we set this to vm._watcher inside the watcher's constructor
        // since the watcher's initial patch may call $forceUpdate (e.g. inside child
        // component's mounted hook), which relies on vm._watcher being already defined
        new Watcher(vm, updateComponent, noop, {
          before: function before () {
            if (vm._isMounted && !vm._isDestroyed) {
              callHook(vm, 'beforeUpdate')
            }
          }
        }, true /* isRenderWatcher */)
        hydrating = false

        // manually mounted instance, call mounted on self
        // mounted is called for render-created child components in its inserted hook
        if (vm.$vnode == null) {
          vm._isMounted = true
          callHook(vm, 'mounted')
        }
        return vm
      }

      function updateChildComponent (
        vm,
        propsData,
        listeners,
        parentVnode,
        renderChildren
      ) {
        if (false) {}

        // determine whether component has slot children
        // we need to do this before overwriting $options._renderChildren.

        // check if there are dynamic scopedSlots (hand-written or compiled but with
        // dynamic slot names). Static scoped slots compiled from template has the
        // "$stable" marker.
        var newScopedSlots = parentVnode.data.scopedSlots
        var oldScopedSlots = vm.$scopedSlots
        var hasDynamicScopedSlot = !!(
          (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
        )

        // Any static slot children from the parent may have changed during parent's
        // update. Dynamic scoped slots may also have changed. In such cases, a forced
        // update is necessary to ensure correctness.
        var needsForceUpdate = !!(
          renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot
        )

        vm.$options._parentVnode = parentVnode
        vm.$vnode = parentVnode // update vm's placeholder node without re-render

        if (vm._vnode) { // update child tree's parent
          vm._vnode.parent = parentVnode
        }
        vm.$options._renderChildren = renderChildren

        // update $attrs and $listeners hash
        // these are also reactive so they may trigger child update if the child
        // used them during render
        vm.$attrs = parentVnode.data.attrs || emptyObject
        vm.$listeners = listeners || emptyObject

        // update props
        if (propsData && vm.$options.props) {
          toggleObserving(false)
          var props = vm._props
          var propKeys = vm.$options._propKeys || []
          for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i]
            var propOptions = vm.$options.props // wtf flow?
            props[key] = validateProp(key, propOptions, propsData, vm)
          }
          toggleObserving(true)
          // keep a copy of raw propsData
          vm.$options.propsData = propsData
        }

        // update listeners
        listeners = listeners || emptyObject
        var oldListeners = vm.$options._parentListeners
        vm.$options._parentListeners = listeners
        updateComponentListeners(vm, listeners, oldListeners)

        // resolve slots + force update if has children
        if (needsForceUpdate) {
          vm.$slots = resolveSlots(renderChildren, parentVnode.context)
          vm.$forceUpdate()
        }

        if (false) {}
      }

      function isInInactiveTree (vm) {
        while (vm && (vm = vm.$parent)) {
          if (vm._inactive) { return true }
        }
        return false
      }

      function activateChildComponent (vm, direct) {
        if (direct) {
          vm._directInactive = false
          if (isInInactiveTree(vm)) {
            return
          }
        } else if (vm._directInactive) {
          return
        }
        if (vm._inactive || vm._inactive === null) {
          vm._inactive = false
          for (var i = 0; i < vm.$children.length; i++) {
            activateChildComponent(vm.$children[i])
          }
          callHook(vm, 'activated')
        }
      }

      function deactivateChildComponent (vm, direct) {
        if (direct) {
          vm._directInactive = true
          if (isInInactiveTree(vm)) {
            return
          }
        }
        if (!vm._inactive) {
          vm._inactive = true
          for (var i = 0; i < vm.$children.length; i++) {
            deactivateChildComponent(vm.$children[i])
          }
          callHook(vm, 'deactivated')
        }
      }

      function callHook (vm, hook) {
        // #7573 disable dep collection when invoking lifecycle hooks
        pushTarget()
        var handlers = vm.$options[hook]
        var info = hook + ' hook'
        if (handlers) {
          for (var i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, null, vm, info)
          }
        }
        if (vm._hasHookEvent) {
          vm.$emit('hook:' + hook)
        }
        popTarget()
      }

      /*  */

      var MAX_UPDATE_COUNT = 100

      var queue = []
      var activatedChildren = []
      var has = {}
      var circular = {}
      var waiting = false
      var flushing = false
      var index = 0

      /**
 * Reset the scheduler's state.
 */
      function resetSchedulerState () {
        index = queue.length = activatedChildren.length = 0
        has = {}
        if (false) {}
        waiting = flushing = false
      }

      // Async edge case #6566 requires saving the timestamp when event listeners are
      // attached. However, calling performance.now() has a perf overhead especially
      // if the page has thousands of event listeners. Instead, we take a timestamp
      // every time the scheduler flushes and use that for all event listeners
      // attached during that flush.
      var currentFlushTimestamp = 0

      // Async edge case fix requires storing an event listener's attach timestamp.
      var getNow = Date.now

      // Determine what event timestamp the browser is using. Annoyingly, the
      // timestamp can either be hi-res (relative to page load) or low-res
      // (relative to UNIX epoch), so in order to compare time we have to use the
      // same timestamp type when saving the flush timestamp.
      // All IE versions use low-res event timestamps, and have problematic clock
      // implementations (#9632)
      if (inBrowser && !isIE) {
        var performance = window.performance
        if (
          performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
        ) {
          // if the event timestamp, although evaluated AFTER the Date.now(), is
          // smaller than it, it means the event is using a hi-res timestamp,
          // and we need to use the hi-res version for event listener timestamps as
          // well.
          getNow = function () { return performance.now() }
        }
      }

      /**
 * Flush both queues and run the watchers.
 */
      function flushSchedulerQueue () {
        currentFlushTimestamp = getNow()
        flushing = true
        var watcher, id

        // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.
        queue.sort(function (a, b) { return a.id - b.id })

        // do not cache length because more watchers might be pushed
        // as we run existing watchers
        for (index = 0; index < queue.length; index++) {
          watcher = queue[index]
          if (watcher.before) {
            watcher.before()
          }
          id = watcher.id
          has[id] = null
          watcher.run()
          // in dev build, check and stop circular updates.
          if (false) {}
        }

        // keep copies of post queues before resetting state
        var activatedQueue = activatedChildren.slice()
        var updatedQueue = queue.slice()

        resetSchedulerState()

        // call component updated and activated hooks
        callActivatedHooks(activatedQueue)
        callUpdatedHooks(updatedQueue)

        // devtool hook
        /* istanbul ignore if */
        if (devtools && config.devtools) {
          devtools.emit('flush')
        }
      }

      function callUpdatedHooks (queue) {
        var i = queue.length
        while (i--) {
          var watcher = queue[i]
          var vm = watcher.vm
          if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
            callHook(vm, 'updated')
          }
        }
      }

      /**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
      function queueActivatedComponent (vm) {
        // setting _inactive to false here so that a render function can
        // rely on checking whether it's in an inactive tree (e.g. router-view)
        vm._inactive = false
        activatedChildren.push(vm)
      }

      function callActivatedHooks (queue) {
        for (var i = 0; i < queue.length; i++) {
          queue[i]._inactive = true
          activateChildComponent(queue[i], true /* true */)
        }
      }

      /**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
      function queueWatcher (watcher) {
        var id = watcher.id
        if (has[id] == null) {
          has[id] = true
          if (!flushing) {
            queue.push(watcher)
          } else {
            // if already flushing, splice the watcher based on its id
            // if already past its id, it will be run next immediately.
            var i = queue.length - 1
            while (i > index && queue[i].id > watcher.id) {
              i--
            }
            queue.splice(i + 1, 0, watcher)
          }
          // queue the flush
          if (!waiting) {
            waiting = true

            if (false) {}
            nextTick(flushSchedulerQueue)
          }
        }
      }

      /*  */

      var uid$2 = 0

      /**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
      var Watcher = function Watcher (
        vm,
        expOrFn,
        cb,
        options,
        isRenderWatcher
      ) {
        this.vm = vm
        if (isRenderWatcher) {
          vm._watcher = this
        }
        vm._watchers.push(this)
        // options
        if (options) {
          this.deep = !!options.deep
          this.user = !!options.user
          this.lazy = !!options.lazy
          this.sync = !!options.sync
          this.before = options.before
        } else {
          this.deep = this.user = this.lazy = this.sync = false
        }
        this.cb = cb
        this.id = ++uid$2 // uid for batching
        this.active = true
        this.dirty = this.lazy // for lazy watchers
        this.deps = []
        this.newDeps = []
        this.depIds = new _Set()
        this.newDepIds = new _Set()
        this.expression = false
          ? undefined
          : ''
        // parse expression for getter
        if (typeof expOrFn === 'function') {
          this.getter = expOrFn
        } else {
          this.getter = parsePath(expOrFn)
          if (!this.getter) {
            this.getter = noop
            false && false
          }
        }
        this.value = this.lazy
          ? undefined
          : this.get()
      }

      /**
 * Evaluate the getter, and re-collect dependencies.
 */
      Watcher.prototype.get = function get () {
        pushTarget(this)
        var value
        var vm = this.vm
        try {
          value = this.getter.call(vm, vm)
        } catch (e) {
          if (this.user) {
            handleError(e, vm, ('getter for watcher "' + (this.expression) + '"'))
          } else {
            throw e
          }
        } finally {
          // "touch" every property so they are all tracked as
          // dependencies for deep watching
          if (this.deep) {
            traverse(value)
          }
          popTarget()
          this.cleanupDeps()
        }
        return value
      }

      /**
 * Add a dependency to this directive.
 */
      Watcher.prototype.addDep = function addDep (dep) {
        var id = dep.id
        if (!this.newDepIds.has(id)) {
          this.newDepIds.add(id)
          this.newDeps.push(dep)
          if (!this.depIds.has(id)) {
            dep.addSub(this)
          }
        }
      }

      /**
 * Clean up for dependency collection.
 */
      Watcher.prototype.cleanupDeps = function cleanupDeps () {
        var i = this.deps.length
        while (i--) {
          var dep = this.deps[i]
          if (!this.newDepIds.has(dep.id)) {
            dep.removeSub(this)
          }
        }
        var tmp = this.depIds
        this.depIds = this.newDepIds
        this.newDepIds = tmp
        this.newDepIds.clear()
        tmp = this.deps
        this.deps = this.newDeps
        this.newDeps = tmp
        this.newDeps.length = 0
      }

      /**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
      Watcher.prototype.update = function update () {
        /* istanbul ignore else */
        if (this.lazy) {
          this.dirty = true
        } else if (this.sync) {
          this.run()
        } else {
          queueWatcher(this)
        }
      }

      /**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
      Watcher.prototype.run = function run () {
        if (this.active) {
          var value = this.get()
          if (
            value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
          ) {
            // set new value
            var oldValue = this.value
            this.value = value
            if (this.user) {
              try {
                this.cb.call(this.vm, value, oldValue)
              } catch (e) {
                handleError(e, this.vm, ('callback for watcher "' + (this.expression) + '"'))
              }
            } else {
              this.cb.call(this.vm, value, oldValue)
            }
          }
        }
      }

      /**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
      Watcher.prototype.evaluate = function evaluate () {
        this.value = this.get()
        this.dirty = false
      }

      /**
 * Depend on all deps collected by this watcher.
 */
      Watcher.prototype.depend = function depend () {
        var i = this.deps.length
        while (i--) {
          this.deps[i].depend()
        }
      }

      /**
 * Remove self from all dependencies' subscriber list.
 */
      Watcher.prototype.teardown = function teardown () {
        if (this.active) {
          // remove self from vm's watcher list
          // this is a somewhat expensive operation so we skip it
          // if the vm is being destroyed.
          if (!this.vm._isBeingDestroyed) {
            remove(this.vm._watchers, this)
          }
          var i = this.deps.length
          while (i--) {
            this.deps[i].removeSub(this)
          }
          this.active = false
        }
      }

      /*  */

      var sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
      }

      function proxy (target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter () {
          return this[sourceKey][key]
        }
        sharedPropertyDefinition.set = function proxySetter (val) {
          this[sourceKey][key] = val
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
      }

      function initState (vm) {
        vm._watchers = []
        var opts = vm.$options
        if (opts.props) { initProps(vm, opts.props) }
        if (opts.methods) { initMethods(vm, opts.methods) }
        if (opts.data) {
          initData(vm)
        } else {
          observe(vm._data = {}, true /* asRootData */)
        }
        if (opts.computed) { initComputed(vm, opts.computed) }
        if (opts.watch && opts.watch !== nativeWatch) {
          initWatch(vm, opts.watch)
        }
      }

      function initProps (vm, propsOptions) {
        var propsData = vm.$options.propsData || {}
        var props = vm._props = {}
        // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.
        var keys = vm.$options._propKeys = []
        var isRoot = !vm.$parent
        // root instance props should be converted
        if (!isRoot) {
          toggleObserving(false)
        }
        var loop = function (key) {
          keys.push(key)
          var value = validateProp(key, propsOptions, propsData, vm)
          /* istanbul ignore else */
          if (false) { var hyphenatedKey } else {
            defineReactive$$1(props, key, value)
          }
          // static props are already proxied on the component's prototype
          // during Vue.extend(). We only need to proxy props defined at
          // instantiation here.
          if (!(key in vm)) {
            proxy(vm, '_props', key)
          }
        }

        for (var key in propsOptions) loop(key)
        toggleObserving(true)
      }

      function initData (vm) {
        var data = vm.$options.data
        data = vm._data = typeof data === 'function'
          ? getData(data, vm)
          : data || {}
        if (!isPlainObject(data)) {
          data = {}
          false && false
        }
        // proxy data on instance
        var keys = Object.keys(data)
        var props = vm.$options.props
        var methods = vm.$options.methods
        var i = keys.length
        while (i--) {
          var key = keys[i]
          if (false) {}
          if (props && hasOwn(props, key)) {
            false && false
          } else if (!isReserved(key)) {
            proxy(vm, '_data', key)
          }
        }
        // observe data
        observe(data, true /* asRootData */)
      }

      function getData (data, vm) {
        // #7573 disable dep collection when invoking data getters
        pushTarget()
        try {
          return data.call(vm, vm)
        } catch (e) {
          handleError(e, vm, 'data()')
          return {}
        } finally {
          popTarget()
        }
      }

      var computedWatcherOptions = { lazy: true }

      function initComputed (vm, computed) {
        // $flow-disable-line
        var watchers = vm._computedWatchers = Object.create(null)
        // computed properties are just getters during SSR
        var isSSR = isServerRendering()

        for (var key in computed) {
          var userDef = computed[key]
          var getter = typeof userDef === 'function' ? userDef : userDef.get
          if (false) {}

          if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(
              vm,
              getter || noop,
              noop,
              computedWatcherOptions
            )
          }

          // component-defined computed properties are already defined on the
          // component prototype. We only need to define computed properties defined
          // at instantiation here.
          if (!(key in vm)) {
            defineComputed(vm, key, userDef)
          } else if (false) {}
        }
      }

      function defineComputed (
        target,
        key,
        userDef
      ) {
        var shouldCache = !isServerRendering()
        if (typeof userDef === 'function') {
          sharedPropertyDefinition.get = shouldCache
            ? createComputedGetter(key)
            : createGetterInvoker(userDef)
          sharedPropertyDefinition.set = noop
        } else {
          sharedPropertyDefinition.get = userDef.get
            ? shouldCache && userDef.cache !== false
              ? createComputedGetter(key)
              : createGetterInvoker(userDef.get)
            : noop
          sharedPropertyDefinition.set = userDef.set || noop
        }
        if (false) {}
        Object.defineProperty(target, key, sharedPropertyDefinition)
      }

      function createComputedGetter (key) {
        return function computedGetter () {
          var watcher = this._computedWatchers && this._computedWatchers[key]
          if (watcher) {
            if (watcher.dirty) {
              watcher.evaluate()
            }
            if (Dep.target) {
              watcher.depend()
            }
            return watcher.value
          }
        }
      }

      function createGetterInvoker (fn) {
        return function computedGetter () {
          return fn.call(this, this)
        }
      }

      function initMethods (vm, methods) {
        var props = vm.$options.props
        for (var key in methods) {
          if (false) {}
          vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm)
        }
      }

      function initWatch (vm, watch) {
        for (var key in watch) {
          var handler = watch[key]
          if (Array.isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
              createWatcher(vm, key, handler[i])
            }
          } else {
            createWatcher(vm, key, handler)
          }
        }
      }

      function createWatcher (
        vm,
        expOrFn,
        handler,
        options
      ) {
        if (isPlainObject(handler)) {
          options = handler
          handler = handler.handler
        }
        if (typeof handler === 'string') {
          handler = vm[handler]
        }
        return vm.$watch(expOrFn, handler, options)
      }

      function stateMixin (Vue) {
        // flow somehow has problems with directly declared definition object
        // when using Object.defineProperty, so we have to procedurally build up
        // the object here.
        var dataDef = {}
        dataDef.get = function () { return this._data }
        var propsDef = {}
        propsDef.get = function () { return this._props }
        if (false) {}
        Object.defineProperty(Vue.prototype, '$data', dataDef)
        Object.defineProperty(Vue.prototype, '$props', propsDef)

        Vue.prototype.$set = set
        Vue.prototype.$delete = del

        Vue.prototype.$watch = function (
          expOrFn,
          cb,
          options
        ) {
          var vm = this
          if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options)
          }
          options = options || {}
          options.user = true
          var watcher = new Watcher(vm, expOrFn, cb, options)
          if (options.immediate) {
            try {
              cb.call(vm, watcher.value)
            } catch (error) {
              handleError(error, vm, ('callback for immediate watcher "' + (watcher.expression) + '"'))
            }
          }
          return function unwatchFn () {
            watcher.teardown()
          }
        }
      }

      /*  */

      var uid$3 = 0

      function initMixin (Vue) {
        Vue.prototype._init = function (options) {
          var vm = this
          // a uid
          vm._uid = uid$3++

          var startTag, endTag
          /* istanbul ignore if */
          if (false) {}

          // a flag to avoid this being observed
          vm._isVue = true
          // merge options
          if (options && options._isComponent) {
            // optimize internal component instantiation
            // since dynamic options merging is pretty slow, and none of the
            // internal component options needs special treatment.
            initInternalComponent(vm, options)
          } else {
            vm.$options = mergeOptions(
              resolveConstructorOptions(vm.constructor),
              options || {},
              vm
            )
          }
          /* istanbul ignore else */
          if (false) {} else {
            vm._renderProxy = vm
          }
          // expose real self
          vm._self = vm
          initLifecycle(vm)
          initEvents(vm)
          initRender(vm)
          callHook(vm, 'beforeCreate')
          initInjections(vm) // resolve injections before data/props
          initState(vm)
          initProvide(vm) // resolve provide after data/props
          callHook(vm, 'created')

          /* istanbul ignore if */
          if (false) {}

          if (vm.$options.el) {
            vm.$mount(vm.$options.el)
          }
        }
      }

      function initInternalComponent (vm, options) {
        var opts = vm.$options = Object.create(vm.constructor.options)
        // doing this because it's faster than dynamic enumeration.
        var parentVnode = options._parentVnode
        opts.parent = options.parent
        opts._parentVnode = parentVnode

        var vnodeComponentOptions = parentVnode.componentOptions
        opts.propsData = vnodeComponentOptions.propsData
        opts._parentListeners = vnodeComponentOptions.listeners
        opts._renderChildren = vnodeComponentOptions.children
        opts._componentTag = vnodeComponentOptions.tag

        if (options.render) {
          opts.render = options.render
          opts.staticRenderFns = options.staticRenderFns
        }
      }

      function resolveConstructorOptions (Ctor) {
        var options = Ctor.options
        if (Ctor.super) {
          var superOptions = resolveConstructorOptions(Ctor.super)
          var cachedSuperOptions = Ctor.superOptions
          if (superOptions !== cachedSuperOptions) {
            // super option changed,
            // need to resolve new options.
            Ctor.superOptions = superOptions
            // check if there are any late-modified/attached options (#4976)
            var modifiedOptions = resolveModifiedOptions(Ctor)
            // update base extend options
            if (modifiedOptions) {
              extend(Ctor.extendOptions, modifiedOptions)
            }
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
            if (options.name) {
              options.components[options.name] = Ctor
            }
          }
        }
        return options
      }

      function resolveModifiedOptions (Ctor) {
        var modified
        var latest = Ctor.options
        var sealed = Ctor.sealedOptions
        for (var key in latest) {
          if (latest[key] !== sealed[key]) {
            if (!modified) { modified = {} }
            modified[key] = latest[key]
          }
        }
        return modified
      }

      function Vue (options) {
        if (false
        ) {}
        this._init(options)
      }

      initMixin(Vue)
      stateMixin(Vue)
      eventsMixin(Vue)
      lifecycleMixin(Vue)
      renderMixin(Vue)

      /*  */

      function initUse (Vue) {
        Vue.use = function (plugin) {
          var installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
          if (installedPlugins.indexOf(plugin) > -1) {
            return this
          }

          // additional parameters
          var args = toArray(arguments, 1)
          args.unshift(this)
          if (typeof plugin.install === 'function') {
            plugin.install.apply(plugin, args)
          } else if (typeof plugin === 'function') {
            plugin.apply(null, args)
          }
          installedPlugins.push(plugin)
          return this
        }
      }

      /*  */

      function initMixin$1 (Vue) {
        Vue.mixin = function (mixin) {
          this.options = mergeOptions(this.options, mixin)
          return this
        }
      }

      /*  */

      function initExtend (Vue) {
        /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
        Vue.cid = 0
        var cid = 1

        /**
   * Class inheritance
   */
        Vue.extend = function (extendOptions) {
          extendOptions = extendOptions || {}
          var Super = this
          var SuperId = Super.cid
          var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
          if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId]
          }

          var name = extendOptions.name || Super.options.name
          if (false) {}

          var Sub = function VueComponent (options) {
            this._init(options)
          }
          Sub.prototype = Object.create(Super.prototype)
          Sub.prototype.constructor = Sub
          Sub.cid = cid++
          Sub.options = mergeOptions(
            Super.options,
            extendOptions
          )
          Sub.super = Super

          // For props and computed properties, we define the proxy getters on
          // the Vue instances at extension time, on the extended prototype. This
          // avoids Object.defineProperty calls for each instance created.
          if (Sub.options.props) {
            initProps$1(Sub)
          }
          if (Sub.options.computed) {
            initComputed$1(Sub)
          }

          // allow further extension/mixin/plugin usage
          Sub.extend = Super.extend
          Sub.mixin = Super.mixin
          Sub.use = Super.use

          // create asset registers, so extended classes
          // can have their private assets too.
          ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type]
          })
          // enable recursive self-lookup
          if (name) {
            Sub.options.components[name] = Sub
          }

          // keep a reference to the super options at extension time.
          // later at instantiation we can check if Super's options have
          // been updated.
          Sub.superOptions = Super.options
          Sub.extendOptions = extendOptions
          Sub.sealedOptions = extend({}, Sub.options)

          // cache constructor
          cachedCtors[SuperId] = Sub
          return Sub
        }
      }

      function initProps$1 (Comp) {
        var props = Comp.options.props
        for (var key in props) {
          proxy(Comp.prototype, '_props', key)
        }
      }

      function initComputed$1 (Comp) {
        var computed = Comp.options.computed
        for (var key in computed) {
          defineComputed(Comp.prototype, key, computed[key])
        }
      }

      /*  */

      function initAssetRegisters (Vue) {
        /**
   * Create asset registration methods.
   */
        ASSET_TYPES.forEach(function (type) {
          Vue[type] = function (
            id,
            definition
          ) {
            if (!definition) {
              return this.options[type + 's'][id]
            } else {
              /* istanbul ignore if */
              if (false) {}
              if (type === 'component' && isPlainObject(definition)) {
                definition.name = definition.name || id
                definition = this.options._base.extend(definition)
              }
              if (type === 'directive' && typeof definition === 'function') {
                definition = { bind: definition, update: definition }
              }
              this.options[type + 's'][id] = definition
              return definition
            }
          }
        })
      }

      /*  */

      function getComponentName (opts) {
        return opts && (opts.Ctor.options.name || opts.tag)
      }

      function matches (pattern, name) {
        if (Array.isArray(pattern)) {
          return pattern.indexOf(name) > -1
        } else if (typeof pattern === 'string') {
          return pattern.split(',').indexOf(name) > -1
        } else if (isRegExp(pattern)) {
          return pattern.test(name)
        }
        /* istanbul ignore next */
        return false
      }

      function pruneCache (keepAliveInstance, filter) {
        var cache = keepAliveInstance.cache
        var keys = keepAliveInstance.keys
        var _vnode = keepAliveInstance._vnode
        for (var key in cache) {
          var cachedNode = cache[key]
          if (cachedNode) {
            var name = getComponentName(cachedNode.componentOptions)
            if (name && !filter(name)) {
              pruneCacheEntry(cache, key, keys, _vnode)
            }
          }
        }
      }

      function pruneCacheEntry (
        cache,
        key,
        keys,
        current
      ) {
        var cached$$1 = cache[key]
        if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
          cached$$1.componentInstance.$destroy()
        }
        cache[key] = null
        remove(keys, key)
      }

      var patternTypes = [String, RegExp, Array]

      var KeepAlive = {
        name: 'keep-alive',
        abstract: true,

        props: {
          include: patternTypes,
          exclude: patternTypes,
          max: [String, Number]
        },

        created: function created () {
          this.cache = Object.create(null)
          this.keys = []
        },

        destroyed: function destroyed () {
          for (var key in this.cache) {
            pruneCacheEntry(this.cache, key, this.keys)
          }
        },

        mounted: function mounted () {
          var this$1 = this

          this.$watch('include', function (val) {
            pruneCache(this$1, function (name) { return matches(val, name) })
          })
          this.$watch('exclude', function (val) {
            pruneCache(this$1, function (name) { return !matches(val, name) })
          })
        },

        render: function render () {
          var slot = this.$slots.default
          var vnode = getFirstComponentChild(slot)
          var componentOptions = vnode && vnode.componentOptions
          if (componentOptions) {
            // check pattern
            var name = getComponentName(componentOptions)
            var ref = this
            var include = ref.include
            var exclude = ref.exclude
            if (
            // not included
              (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
            ) {
              return vnode
            }

            var ref$1 = this
            var cache = ref$1.cache
            var keys = ref$1.keys
            var key = vnode.key == null
            // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
              ? componentOptions.Ctor.cid + (componentOptions.tag ? ('::' + (componentOptions.tag)) : '')
              : vnode.key
            if (cache[key]) {
              vnode.componentInstance = cache[key].componentInstance
              // make current key freshest
              remove(keys, key)
              keys.push(key)
            } else {
              cache[key] = vnode
              keys.push(key)
              // prune oldest entry
              if (this.max && keys.length > parseInt(this.max)) {
                pruneCacheEntry(cache, keys[0], keys, this._vnode)
              }
            }

            vnode.data.keepAlive = true
          }
          return vnode || (slot && slot[0])
        }
      }

      var builtInComponents = {
        KeepAlive: KeepAlive
      }

      /*  */

      function initGlobalAPI (Vue) {
        // config
        var configDef = {}
        configDef.get = function () { return config }
        if (false) {}
        Object.defineProperty(Vue, 'config', configDef)

        // exposed util methods.
        // NOTE: these are not considered part of the public API - avoid relying on
        // them unless you are aware of the risk.
        Vue.util = {
          warn: warn,
          extend: extend,
          mergeOptions: mergeOptions,
          defineReactive: defineReactive$$1
        }

        Vue.set = set
        Vue.delete = del
        Vue.nextTick = nextTick

        // 2.6 explicit observable API
        Vue.observable = function (obj) {
          observe(obj)
          return obj
        }

        Vue.options = Object.create(null)
        ASSET_TYPES.forEach(function (type) {
          Vue.options[type + 's'] = Object.create(null)
        })

        // this is used to identify the "base" constructor to extend all plain-object
        // components with in Weex's multi-instance scenarios.
        Vue.options._base = Vue

        extend(Vue.options.components, builtInComponents)

        initUse(Vue)
        initMixin$1(Vue)
        initExtend(Vue)
        initAssetRegisters(Vue)
      }

      initGlobalAPI(Vue)

      Object.defineProperty(Vue.prototype, '$isServer', {
        get: isServerRendering
      })

      Object.defineProperty(Vue.prototype, '$ssrContext', {
        get: function get () {
          /* istanbul ignore next */
          return this.$vnode && this.$vnode.ssrContext
        }
      })

      // expose FunctionalRenderContext for ssr runtime helper installation
      Object.defineProperty(Vue, 'FunctionalRenderContext', {
        value: FunctionalRenderContext
      })

      Vue.version = '2.6.11'

      /*  */

      // these are reserved for web because they are directly compiled away
      // during template compilation
      var isReservedAttr = makeMap('style,class')

      // attributes that should be using props for binding
      var acceptValue = makeMap('input,textarea,option,select,progress')
      var mustUseProp = function (tag, type, attr) {
        return (
          (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
        )
      }

      var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')

      var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only')

      var convertEnumeratedValue = function (key, value) {
        return isFalsyAttrValue(value) || value === 'false'
          ? 'false'
        // allow arbitrary string value for contenteditable
          : key === 'contenteditable' && isValidContentEditableValue(value)
            ? value
            : 'true'
      }

      var isBooleanAttr = makeMap(
        'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
      )

      var xlinkNS = 'http://www.w3.org/1999/xlink'

      var isXlink = function (name) {
        return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
      }

      var getXlinkProp = function (name) {
        return isXlink(name) ? name.slice(6, name.length) : ''
      }

      var isFalsyAttrValue = function (val) {
        return val == null || val === false
      }

      /*  */

      function genClassForVnode (vnode) {
        var data = vnode.data
        var parentNode = vnode
        var childNode = vnode
        while (isDef(childNode.componentInstance)) {
          childNode = childNode.componentInstance._vnode
          if (childNode && childNode.data) {
            data = mergeClassData(childNode.data, data)
          }
        }
        while (isDef(parentNode = parentNode.parent)) {
          if (parentNode && parentNode.data) {
            data = mergeClassData(data, parentNode.data)
          }
        }
        return renderClass(data.staticClass, data.class)
      }

      function mergeClassData (child, parent) {
        return {
          staticClass: concat(child.staticClass, parent.staticClass),
          class: isDef(child.class)
            ? [child.class, parent.class]
            : parent.class
        }
      }

      function renderClass (
        staticClass,
        dynamicClass
      ) {
        if (isDef(staticClass) || isDef(dynamicClass)) {
          return concat(staticClass, stringifyClass(dynamicClass))
        }
        /* istanbul ignore next */
        return ''
      }

      function concat (a, b) {
        return a ? b ? (a + ' ' + b) : a : (b || '')
      }

      function stringifyClass (value) {
        if (Array.isArray(value)) {
          return stringifyArray(value)
        }
        if (isObject(value)) {
          return stringifyObject(value)
        }
        if (typeof value === 'string') {
          return value
        }
        /* istanbul ignore next */
        return ''
      }

      function stringifyArray (value) {
        var res = ''
        var stringified
        for (var i = 0, l = value.length; i < l; i++) {
          if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
            if (res) { res += ' ' }
            res += stringified
          }
        }
        return res
      }

      function stringifyObject (value) {
        var res = ''
        for (var key in value) {
          if (value[key]) {
            if (res) { res += ' ' }
            res += key
          }
        }
        return res
      }

      /*  */

      var namespaceMap = {
        svg: 'http://www.w3.org/2000/svg',
        math: 'http://www.w3.org/1998/Math/MathML'
      }

      var isHTMLTag = makeMap(
        'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
      )

      // this map is intentionally selective, only covering SVG elements that may
      // contain child elements.
      var isSVG = makeMap(
        'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
        true
      )

      var isReservedTag = function (tag) {
        return isHTMLTag(tag) || isSVG(tag)
      }

      function getTagNamespace (tag) {
        if (isSVG(tag)) {
          return 'svg'
        }
        // basic support for MathML
        // note it doesn't support other MathML elements being component roots
        if (tag === 'math') {
          return 'math'
        }
      }

      var unknownElementCache = Object.create(null)
      function isUnknownElement (tag) {
        /* istanbul ignore if */
        if (!inBrowser) {
          return true
        }
        if (isReservedTag(tag)) {
          return false
        }
        tag = tag.toLowerCase()
        /* istanbul ignore if */
        if (unknownElementCache[tag] != null) {
          return unknownElementCache[tag]
        }
        var el = document.createElement(tag)
        if (tag.indexOf('-') > -1) {
          // http://stackoverflow.com/a/28210364/1070244
          return (unknownElementCache[tag] = (
            el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
          ))
        } else {
          return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
        }
      }

      var isTextInputType = makeMap('text,number,password,search,email,tel,url')

      /*  */

      /**
 * Query an element selector if it's not an element already.
 */
      function query (el) {
        if (typeof el === 'string') {
          var selected = document.querySelector(el)
          if (!selected) {
            false && false
            return document.createElement('div')
          }
          return selected
        } else {
          return el
        }
      }

      /*  */

      function createElement$1 (tagName, vnode) {
        var elm = document.createElement(tagName)
        if (tagName !== 'select') {
          return elm
        }
        // false or null will remove the attribute but undefined will not
        if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
          elm.setAttribute('multiple', 'multiple')
        }
        return elm
      }

      function createElementNS (namespace, tagName) {
        return document.createElementNS(namespaceMap[namespace], tagName)
      }

      function createTextNode (text) {
        return document.createTextNode(text)
      }

      function createComment (text) {
        return document.createComment(text)
      }

      function insertBefore (parentNode, newNode, referenceNode) {
        parentNode.insertBefore(newNode, referenceNode)
      }

      function removeChild (node, child) {
        node.removeChild(child)
      }

      function appendChild (node, child) {
        node.appendChild(child)
      }

      function parentNode (node) {
        return node.parentNode
      }

      function nextSibling (node) {
        return node.nextSibling
      }

      function tagName (node) {
        return node.tagName
      }

      function setTextContent (node, text) {
        node.textContent = text
      }

      function setStyleScope (node, scopeId) {
        node.setAttribute(scopeId, '')
      }

      var nodeOps = /* #__PURE__ */Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        setStyleScope: setStyleScope
      })

      /*  */

      var ref = {
        create: function create (_, vnode) {
          registerRef(vnode)
        },
        update: function update (oldVnode, vnode) {
          if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true)
            registerRef(vnode)
          }
        },
        destroy: function destroy (vnode) {
          registerRef(vnode, true)
        }
      }

      function registerRef (vnode, isRemoval) {
        var key = vnode.data.ref
        if (!isDef(key)) { return }

        var vm = vnode.context
        var ref = vnode.componentInstance || vnode.elm
        var refs = vm.$refs
        if (isRemoval) {
          if (Array.isArray(refs[key])) {
            remove(refs[key], ref)
          } else if (refs[key] === ref) {
            refs[key] = undefined
          }
        } else {
          if (vnode.data.refInFor) {
            if (!Array.isArray(refs[key])) {
              refs[key] = [ref]
            } else if (refs[key].indexOf(ref) < 0) {
              // $flow-disable-line
              refs[key].push(ref)
            }
          } else {
            refs[key] = ref
          }
        }
      }

      /**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

      var emptyNode = new VNode('', {}, [])

      var hooks = ['create', 'activate', 'update', 'remove', 'destroy']

      function sameVnode (a, b) {
        return (
          a.key === b.key && (
            (
              a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
            ) || (
              isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
            )
          )
        )
      }

      function sameInputType (a, b) {
        if (a.tag !== 'input') { return true }
        var i
        var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type
        var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type
        return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
      }

      function createKeyToOldIdx (children, beginIdx, endIdx) {
        var i, key
        var map = {}
        for (i = beginIdx; i <= endIdx; ++i) {
          key = children[i].key
          if (isDef(key)) { map[key] = i }
        }
        return map
      }

      function createPatchFunction (backend) {
        var i, j
        var cbs = {}

        var modules = backend.modules
        var nodeOps = backend.nodeOps

        for (i = 0; i < hooks.length; ++i) {
          cbs[hooks[i]] = []
          for (j = 0; j < modules.length; ++j) {
            if (isDef(modules[j][hooks[i]])) {
              cbs[hooks[i]].push(modules[j][hooks[i]])
            }
          }
        }

        function emptyNodeAt (elm) {
          return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
        }

        function createRmCb (childElm, listeners) {
          function remove$$1 () {
            if (--remove$$1.listeners === 0) {
              removeNode(childElm)
            }
          }
          remove$$1.listeners = listeners
          return remove$$1
        }

        function removeNode (el) {
          var parent = nodeOps.parentNode(el)
          // element may have already been removed due to v-html / v-text
          if (isDef(parent)) {
            nodeOps.removeChild(parent, el)
          }
        }

        function isUnknownElement$$1 (vnode, inVPre) {
          return (
            !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
          )
        }

        var creatingElmInVPre = 0

        function createElm (
          vnode,
          insertedVnodeQueue,
          parentElm,
          refElm,
          nested,
          ownerArray,
          index
        ) {
          if (isDef(vnode.elm) && isDef(ownerArray)) {
            // This vnode was used in a previous render!
            // now it's used as a new node, overwriting its elm would cause
            // potential patch errors down the road when it's used as an insertion
            // reference node. Instead, we clone the node on-demand before creating
            // associated DOM element for it.
            vnode = ownerArray[index] = cloneVNode(vnode)
          }

          vnode.isRootInsert = !nested // for transition enter check
          if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
            return
          }

          var data = vnode.data
          var children = vnode.children
          var tag = vnode.tag
          if (isDef(tag)) {
            if (false) {}

            vnode.elm = vnode.ns
              ? nodeOps.createElementNS(vnode.ns, tag)
              : nodeOps.createElement(tag, vnode)
            setScope(vnode)

            /* istanbul ignore if */
            {
              createChildren(vnode, children, insertedVnodeQueue)
              if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue)
              }
              insert(parentElm, vnode.elm, refElm)
            }

            if (false) {}
          } else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text)
            insert(parentElm, vnode.elm, refElm)
          } else {
            vnode.elm = nodeOps.createTextNode(vnode.text)
            insert(parentElm, vnode.elm, refElm)
          }
        }

        function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
          var i = vnode.data
          if (isDef(i)) {
            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive
            if (isDef(i = i.hook) && isDef(i = i.init)) {
              i(vnode, false /* hydrating */)
            }
            // after calling the init hook, if the vnode is a child component
            // it should've created a child instance and mounted it. the child
            // component also has set the placeholder vnode's elm.
            // in that case we can just return the element and be done.
            if (isDef(vnode.componentInstance)) {
              initComponent(vnode, insertedVnodeQueue)
              insert(parentElm, vnode.elm, refElm)
              if (isTrue(isReactivated)) {
                reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
              }
              return true
            }
          }
        }

        function initComponent (vnode, insertedVnodeQueue) {
          if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
            vnode.data.pendingInsert = null
          }
          vnode.elm = vnode.componentInstance.$el
          if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue)
            setScope(vnode)
          } else {
            // empty component root.
            // skip all element-related modules except for ref (#3455)
            registerRef(vnode)
            // make sure to invoke the insert hook
            insertedVnodeQueue.push(vnode)
          }
        }

        function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
          var i
          // hack for #4339: a reactivated component with inner transition
          // does not trigger because the inner node's created hooks are not called
          // again. It's not ideal to involve module-specific logic in here but
          // there doesn't seem to be a better way to do it.
          var innerNode = vnode
          while (innerNode.componentInstance) {
            innerNode = innerNode.componentInstance._vnode
            if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
              for (i = 0; i < cbs.activate.length; ++i) {
                cbs.activate[i](emptyNode, innerNode)
              }
              insertedVnodeQueue.push(innerNode)
              break
            }
          }
          // unlike a newly created component,
          // a reactivated keep-alive component doesn't insert itself
          insert(parentElm, vnode.elm, refElm)
        }

        function insert (parent, elm, ref$$1) {
          if (isDef(parent)) {
            if (isDef(ref$$1)) {
              if (nodeOps.parentNode(ref$$1) === parent) {
                nodeOps.insertBefore(parent, elm, ref$$1)
              }
            } else {
              nodeOps.appendChild(parent, elm)
            }
          }
        }

        function createChildren (vnode, children, insertedVnodeQueue) {
          if (Array.isArray(children)) {
            if (false) {}
            for (var i = 0; i < children.length; ++i) {
              createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
            }
          } else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)))
          }
        }

        function isPatchable (vnode) {
          while (vnode.componentInstance) {
            vnode = vnode.componentInstance._vnode
          }
          return isDef(vnode.tag)
        }

        function invokeCreateHooks (vnode, insertedVnodeQueue) {
          for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
            cbs.create[i$1](emptyNode, vnode)
          }
          i = vnode.data.hook // Reuse variable
          if (isDef(i)) {
            if (isDef(i.create)) { i.create(emptyNode, vnode) }
            if (isDef(i.insert)) { insertedVnodeQueue.push(vnode) }
          }
        }

        // set scope id attribute for scoped CSS.
        // this is implemented as a special case to avoid the overhead
        // of going through the normal attribute patching process.
        function setScope (vnode) {
          var i
          if (isDef(i = vnode.fnScopeId)) {
            nodeOps.setStyleScope(vnode.elm, i)
          } else {
            var ancestor = vnode
            while (ancestor) {
              if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
                nodeOps.setStyleScope(vnode.elm, i)
              }
              ancestor = ancestor.parent
            }
          }
          // for slot content they should also get the scopeId from the host instance.
          if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
          ) {
            nodeOps.setStyleScope(vnode.elm, i)
          }
        }

        function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
          for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx)
          }
        }

        function invokeDestroyHook (vnode) {
          var i, j
          var data = vnode.data
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode) }
            for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode) }
          }
          if (isDef(i = vnode.children)) {
            for (j = 0; j < vnode.children.length; ++j) {
              invokeDestroyHook(vnode.children[j])
            }
          }
        }

        function removeVnodes (vnodes, startIdx, endIdx) {
          for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx]
            if (isDef(ch)) {
              if (isDef(ch.tag)) {
                removeAndInvokeRemoveHook(ch)
                invokeDestroyHook(ch)
              } else { // Text node
                removeNode(ch.elm)
              }
            }
          }
        }

        function removeAndInvokeRemoveHook (vnode, rm) {
          if (isDef(rm) || isDef(vnode.data)) {
            var i
            var listeners = cbs.remove.length + 1
            if (isDef(rm)) {
              // we have a recursively passed down rm callback
              // increase the listeners count
              rm.listeners += listeners
            } else {
              // directly removing
              rm = createRmCb(vnode.elm, listeners)
            }
            // recursively invoke hooks on child component root node
            if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
              removeAndInvokeRemoveHook(i, rm)
            }
            for (i = 0; i < cbs.remove.length; ++i) {
              cbs.remove[i](vnode, rm)
            }
            if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
              i(vnode, rm)
            } else {
              rm()
            }
          } else {
            removeNode(vnode.elm)
          }
        }

        function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
          var oldStartIdx = 0
          var newStartIdx = 0
          var oldEndIdx = oldCh.length - 1
          var oldStartVnode = oldCh[0]
          var oldEndVnode = oldCh[oldEndIdx]
          var newEndIdx = newCh.length - 1
          var newStartVnode = newCh[0]
          var newEndVnode = newCh[newEndIdx]
          var oldKeyToIdx, idxInOld, vnodeToMove, refElm

          // removeOnly is a special flag used only by <transition-group>
          // to ensure removed elements stay in correct relative positions
          // during leaving transitions
          var canMove = !removeOnly

          if (false) {}

          while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
              oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
            } else if (isUndef(oldEndVnode)) {
              oldEndVnode = oldCh[--oldEndIdx]
            } else if (sameVnode(oldStartVnode, newStartVnode)) {
              patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
              oldStartVnode = oldCh[++oldStartIdx]
              newStartVnode = newCh[++newStartIdx]
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
              patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
              oldEndVnode = oldCh[--oldEndIdx]
              newEndVnode = newCh[--newEndIdx]
            } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
              patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
              canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
              oldStartVnode = oldCh[++oldStartIdx]
              newEndVnode = newCh[--newEndIdx]
            } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
              patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
              canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
              oldEndVnode = oldCh[--oldEndIdx]
              newStartVnode = newCh[++newStartIdx]
            } else {
              if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) }
              idxInOld = isDef(newStartVnode.key)
                ? oldKeyToIdx[newStartVnode.key]
                : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
              if (isUndef(idxInOld)) { // New element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
              } else {
                vnodeToMove = oldCh[idxInOld]
                if (sameVnode(vnodeToMove, newStartVnode)) {
                  patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
                  oldCh[idxInOld] = undefined
                  canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
                } else {
                  // same key but different element. treat as new element
                  createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
                }
              }
              newStartVnode = newCh[++newStartIdx]
            }
          }
          if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
          } else if (newStartIdx > newEndIdx) {
            removeVnodes(oldCh, oldStartIdx, oldEndIdx)
          }
        }

        function checkDuplicateKeys (children) {
          var seenKeys = {}
          for (var i = 0; i < children.length; i++) {
            var vnode = children[i]
            var key = vnode.key
            if (isDef(key)) {
              if (seenKeys[key]) {
                warn(
                  ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
                  vnode.context
                )
              } else {
                seenKeys[key] = true
              }
            }
          }
        }

        function findIdxInOld (node, oldCh, start, end) {
          for (var i = start; i < end; i++) {
            var c = oldCh[i]
            if (isDef(c) && sameVnode(node, c)) { return i }
          }
        }

        function patchVnode (
          oldVnode,
          vnode,
          insertedVnodeQueue,
          ownerArray,
          index,
          removeOnly
        ) {
          if (oldVnode === vnode) {
            return
          }

          if (isDef(vnode.elm) && isDef(ownerArray)) {
            // clone reused vnode
            vnode = ownerArray[index] = cloneVNode(vnode)
          }

          var elm = vnode.elm = oldVnode.elm

          if (isTrue(oldVnode.isAsyncPlaceholder)) {
            if (isDef(vnode.asyncFactory.resolved)) {
              hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
            } else {
              vnode.isAsyncPlaceholder = true
            }
            return
          }

          // reuse element for static trees.
          // note we only do this if the vnode is cloned -
          // if the new node is not cloned it means the render functions have been
          // reset by the hot-reload-api and we need to do a proper re-render.
          if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
          ) {
            vnode.componentInstance = oldVnode.componentInstance
            return
          }

          var i
          var data = vnode.data
          if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
            i(oldVnode, vnode)
          }

          var oldCh = oldVnode.children
          var ch = vnode.children
          if (isDef(data) && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode) }
            if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode) }
          }
          if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
              if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly) }
            } else if (isDef(ch)) {
              if (false) {}
              if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, '') }
              addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
            } else if (isDef(oldCh)) {
              removeVnodes(oldCh, 0, oldCh.length - 1)
            } else if (isDef(oldVnode.text)) {
              nodeOps.setTextContent(elm, '')
            }
          } else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text)
          }
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode) }
          }
        }

        function invokeInsertHook (vnode, queue, initial) {
          // delay insert hooks for component root nodes, invoke them after the
          // element is really inserted
          if (isTrue(initial) && isDef(vnode.parent)) {
            vnode.parent.data.pendingInsert = queue
          } else {
            for (var i = 0; i < queue.length; ++i) {
              queue[i].data.hook.insert(queue[i])
            }
          }
        }

        var hydrationBailed = false
        // list of modules that can skip create hook during hydration because they
        // are already rendered on the client or has no need for initialization
        // Note: style is excluded because it relies on initial clone for future
        // deep updates (#7063).
        var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key')

        // Note: this is a browser-only function so we can assume elms are DOM nodes.
        function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
          var i
          var tag = vnode.tag
          var data = vnode.data
          var children = vnode.children
          inVPre = inVPre || (data && data.pre)
          vnode.elm = elm

          if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
            vnode.isAsyncPlaceholder = true
            return true
          }
          // assert node match
          if (false) {}
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */) }
            if (isDef(i = vnode.componentInstance)) {
              // child component. it should have hydrated its own tree.
              initComponent(vnode, insertedVnodeQueue)
              return true
            }
          }
          if (isDef(tag)) {
            if (isDef(children)) {
              // empty element, allow client to pick up and populate children
              if (!elm.hasChildNodes()) {
                createChildren(vnode, children, insertedVnodeQueue)
              } else {
                // v-html and domProps: innerHTML
                if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                  if (i !== elm.innerHTML) {
                    /* istanbul ignore if */
                    if (false
                    ) {}
                    return false
                  }
                } else {
                  // iterate and compare children lists
                  var childrenMatch = true
                  var childNode = elm.firstChild
                  for (var i$1 = 0; i$1 < children.length; i$1++) {
                    if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                      childrenMatch = false
                      break
                    }
                    childNode = childNode.nextSibling
                  }
                  // if childNode is not null, it means the actual childNodes list is
                  // longer than the virtual children list.
                  if (!childrenMatch || childNode) {
                    /* istanbul ignore if */
                    if (false
                    ) {}
                    return false
                  }
                }
              }
            }
            if (isDef(data)) {
              var fullInvoke = false
              for (var key in data) {
                if (!isRenderedModule(key)) {
                  fullInvoke = true
                  invokeCreateHooks(vnode, insertedVnodeQueue)
                  break
                }
              }
              if (!fullInvoke && data.class) {
                // ensure collecting deps for deep class bindings for future updates
                traverse(data.class)
              }
            }
          } else if (elm.data !== vnode.text) {
            elm.data = vnode.text
          }
          return true
        }

        function assertNodeMatch (node, vnode, inVPre) {
          if (isDef(vnode.tag)) {
            return vnode.tag.indexOf('vue-component') === 0 || (
              !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
            )
          } else {
            return node.nodeType === (vnode.isComment ? 8 : 3)
          }
        }

        return function patch (oldVnode, vnode, hydrating, removeOnly) {
          if (isUndef(vnode)) {
            if (isDef(oldVnode)) { invokeDestroyHook(oldVnode) }
            return
          }

          var isInitialPatch = false
          var insertedVnodeQueue = []

          if (isUndef(oldVnode)) {
            // empty mount (likely as component), create new root element
            isInitialPatch = true
            createElm(vnode, insertedVnodeQueue)
          } else {
            var isRealElement = isDef(oldVnode.nodeType)
            if (!isRealElement && sameVnode(oldVnode, vnode)) {
              // patch existing root node
              patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
            } else {
              if (isRealElement) {
                // mounting to a real element
                // check if this is server-rendered content and if we can perform
                // a successful hydration.
                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                  oldVnode.removeAttribute(SSR_ATTR)
                  hydrating = true
                }
                if (isTrue(hydrating)) {
                  if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                    invokeInsertHook(vnode, insertedVnodeQueue, true)
                    return oldVnode
                  } else if (false) {}
                }
                // either not server-rendered, or hydration failed.
                // create an empty node and replace it
                oldVnode = emptyNodeAt(oldVnode)
              }

              // replacing existing element
              var oldElm = oldVnode.elm
              var parentElm = nodeOps.parentNode(oldElm)

              // create new node
              createElm(
                vnode,
                insertedVnodeQueue,
                // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm,
                nodeOps.nextSibling(oldElm)
              )

              // update parent placeholder node element, recursively
              if (isDef(vnode.parent)) {
                var ancestor = vnode.parent
                var patchable = isPatchable(vnode)
                while (ancestor) {
                  for (var i = 0; i < cbs.destroy.length; ++i) {
                    cbs.destroy[i](ancestor)
                  }
                  ancestor.elm = vnode.elm
                  if (patchable) {
                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                      cbs.create[i$1](emptyNode, ancestor)
                    }
                    // #6513
                    // invoke insert hooks that may have been merged by create hooks.
                    // e.g. for directives that uses the "inserted" hook.
                    var insert = ancestor.data.hook.insert
                    if (insert.merged) {
                      // start at index 1 to avoid re-invoking component mounted hook
                      for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                        insert.fns[i$2]()
                      }
                    }
                  } else {
                    registerRef(ancestor)
                  }
                  ancestor = ancestor.parent
                }
              }

              // destroy old node
              if (isDef(parentElm)) {
                removeVnodes([oldVnode], 0, 0)
              } else if (isDef(oldVnode.tag)) {
                invokeDestroyHook(oldVnode)
              }
            }
          }

          invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
          return vnode.elm
        }
      }

      /*  */

      var directives = {
        create: updateDirectives,
        update: updateDirectives,
        destroy: function unbindDirectives (vnode) {
          updateDirectives(vnode, emptyNode)
        }
      }

      function updateDirectives (oldVnode, vnode) {
        if (oldVnode.data.directives || vnode.data.directives) {
          _update(oldVnode, vnode)
        }
      }

      function _update (oldVnode, vnode) {
        var isCreate = oldVnode === emptyNode
        var isDestroy = vnode === emptyNode
        var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context)
        var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context)

        var dirsWithInsert = []
        var dirsWithPostpatch = []

        var key, oldDir, dir
        for (key in newDirs) {
          oldDir = oldDirs[key]
          dir = newDirs[key]
          if (!oldDir) {
            // new directive, bind
            callHook$1(dir, 'bind', vnode, oldVnode)
            if (dir.def && dir.def.inserted) {
              dirsWithInsert.push(dir)
            }
          } else {
            // existing directive, update
            dir.oldValue = oldDir.value
            dir.oldArg = oldDir.arg
            callHook$1(dir, 'update', vnode, oldVnode)
            if (dir.def && dir.def.componentUpdated) {
              dirsWithPostpatch.push(dir)
            }
          }
        }

        if (dirsWithInsert.length) {
          var callInsert = function () {
            for (var i = 0; i < dirsWithInsert.length; i++) {
              callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode)
            }
          }
          if (isCreate) {
            mergeVNodeHook(vnode, 'insert', callInsert)
          } else {
            callInsert()
          }
        }

        if (dirsWithPostpatch.length) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            for (var i = 0; i < dirsWithPostpatch.length; i++) {
              callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode)
            }
          })
        }

        if (!isCreate) {
          for (key in oldDirs) {
            if (!newDirs[key]) {
              // no longer present, unbind
              callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy)
            }
          }
        }
      }

      var emptyModifiers = Object.create(null)

      function normalizeDirectives$1 (
        dirs,
        vm
      ) {
        var res = Object.create(null)
        if (!dirs) {
          // $flow-disable-line
          return res
        }
        var i, dir
        for (i = 0; i < dirs.length; i++) {
          dir = dirs[i]
          if (!dir.modifiers) {
            // $flow-disable-line
            dir.modifiers = emptyModifiers
          }
          res[getRawDirName(dir)] = dir
          dir.def = resolveAsset(vm.$options, 'directives', dir.name, true)
        }
        // $flow-disable-line
        return res
      }

      function getRawDirName (dir) {
        return dir.rawName || ((dir.name) + '.' + (Object.keys(dir.modifiers || {}).join('.')))
      }

      function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
        var fn = dir.def && dir.def[hook]
        if (fn) {
          try {
            fn(vnode.elm, dir, vnode, oldVnode, isDestroy)
          } catch (e) {
            handleError(e, vnode.context, ('directive ' + (dir.name) + ' ' + hook + ' hook'))
          }
        }
      }

      var baseModules = [
        ref,
        directives
      ]

      /*  */

      function updateAttrs (oldVnode, vnode) {
        var opts = vnode.componentOptions
        if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
          return
        }
        if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
          return
        }
        var key, cur, old
        var elm = vnode.elm
        var oldAttrs = oldVnode.data.attrs || {}
        var attrs = vnode.data.attrs || {}
        // clone observed objects, as the user probably wants to mutate it
        if (isDef(attrs.__ob__)) {
          attrs = vnode.data.attrs = extend({}, attrs)
        }

        for (key in attrs) {
          cur = attrs[key]
          old = oldAttrs[key]
          if (old !== cur) {
            setAttr(elm, key, cur)
          }
        }
        // #4391: in IE9, setting type can reset value for input[type=radio]
        // #6666: IE/Edge forces progress value down to 1 before setting a max
        /* istanbul ignore if */
        if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
          setAttr(elm, 'value', attrs.value)
        }
        for (key in oldAttrs) {
          if (isUndef(attrs[key])) {
            if (isXlink(key)) {
              elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
            } else if (!isEnumeratedAttr(key)) {
              elm.removeAttribute(key)
            }
          }
        }
      }

      function setAttr (el, key, value) {
        if (el.tagName.indexOf('-') > -1) {
          baseSetAttr(el, key, value)
        } else if (isBooleanAttr(key)) {
          // set attribute for blank value
          // e.g. <option disabled>Select one</option>
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key)
          } else {
            // technically allowfullscreen is a boolean attribute for <iframe>,
            // but Flash expects a value of "true" when used on <embed> tag
            value = key === 'allowfullscreen' && el.tagName === 'EMBED'
              ? 'true'
              : key
            el.setAttribute(key, value)
          }
        } else if (isEnumeratedAttr(key)) {
          el.setAttribute(key, convertEnumeratedValue(key, value))
        } else if (isXlink(key)) {
          if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key))
          } else {
            el.setAttributeNS(xlinkNS, key, value)
          }
        } else {
          baseSetAttr(el, key, value)
        }
      }

      function baseSetAttr (el, key, value) {
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key)
        } else {
          // #7138: IE10 & 11 fires input event when setting placeholder on
          // <textarea>... block the first input event and remove the blocker
          // immediately.
          /* istanbul ignore if */
          if (
            isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
          ) {
            var blocker = function (e) {
              e.stopImmediatePropagation()
              el.removeEventListener('input', blocker)
            }
            el.addEventListener('input', blocker)
            // $flow-disable-line
            el.__ieph = true /* IE placeholder patched */
          }
          el.setAttribute(key, value)
        }
      }

      var attrs = {
        create: updateAttrs,
        update: updateAttrs
      }

      /*  */

      function updateClass (oldVnode, vnode) {
        var el = vnode.elm
        var data = vnode.data
        var oldData = oldVnode.data
        if (
          isUndef(data.staticClass) &&
    isUndef(data.class) && (
            isUndef(oldData) || (
              isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
            )
          )
        ) {
          return
        }

        var cls = genClassForVnode(vnode)

        // handle transition classes
        var transitionClass = el._transitionClasses
        if (isDef(transitionClass)) {
          cls = concat(cls, stringifyClass(transitionClass))
        }

        // set the class
        if (cls !== el._prevClass) {
          el.setAttribute('class', cls)
          el._prevClass = cls
        }
      }

      var klass = {
        create: updateClass,
        update: updateClass
      }

      /*  */

      /*  */

      /*  */

      /*  */

      // in some cases, the event used has to be determined at runtime
      // so we used some reserved tokens during compile.
      var RANGE_TOKEN = '__r'
      var CHECKBOX_RADIO_TOKEN = '__c'

      /*  */

      // normalize v-model event tokens that can only be determined at runtime.
      // it's important to place the event as the first in the array because
      // the whole point is ensuring the v-model callback gets called before
      // user-attached handlers.
      function normalizeEvents (on) {
        /* istanbul ignore if */
        if (isDef(on[RANGE_TOKEN])) {
          // IE input[type=range] only supports `change` event
          var event = isIE ? 'change' : 'input'
          on[event] = [].concat(on[RANGE_TOKEN], on[event] || [])
          delete on[RANGE_TOKEN]
        }
        // This was originally intended to fix #4521 but no longer necessary
        // after 2.5. Keeping it for backwards compat with generated code from < 2.4
        /* istanbul ignore if */
        if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
          on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || [])
          delete on[CHECKBOX_RADIO_TOKEN]
        }
      }

      var target$1

      function createOnceHandler$1 (event, handler, capture) {
        var _target = target$1 // save current target element in closure
        return function onceHandler () {
          var res = handler.apply(null, arguments)
          if (res !== null) {
            remove$2(event, onceHandler, capture, _target)
          }
        }
      }

      // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
      // implementation and does not fire microtasks in between event propagation, so
      // safe to exclude.
      var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53)

      function add$1 (
        name,
        handler,
        capture,
        passive
      ) {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        if (useMicrotaskFix) {
          var attachedTimestamp = currentFlushTimestamp
          var original = handler
          handler = original._wrapper = function (e) {
            if (
            // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
              e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
            ) {
              return original.apply(this, arguments)
            }
          }
        }
        target$1.addEventListener(
          name,
          handler,
          supportsPassive
            ? { capture: capture, passive: passive }
            : capture
        )
      }

      function remove$2 (
        name,
        handler,
        capture,
        _target
      ) {
        (_target || target$1).removeEventListener(
          name,
          handler._wrapper || handler,
          capture
        )
      }

      function updateDOMListeners (oldVnode, vnode) {
        if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
          return
        }
        var on = vnode.data.on || {}
        var oldOn = oldVnode.data.on || {}
        target$1 = vnode.elm
        normalizeEvents(on)
        updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context)
        target$1 = undefined
      }

      var events = {
        create: updateDOMListeners,
        update: updateDOMListeners
      }

      /*  */

      var svgContainer

      function updateDOMProps (oldVnode, vnode) {
        if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
          return
        }
        var key, cur
        var elm = vnode.elm
        var oldProps = oldVnode.data.domProps || {}
        var props = vnode.data.domProps || {}
        // clone observed objects, as the user probably wants to mutate it
        if (isDef(props.__ob__)) {
          props = vnode.data.domProps = extend({}, props)
        }

        for (key in oldProps) {
          if (!(key in props)) {
            elm[key] = ''
          }
        }

        for (key in props) {
          cur = props[key]
          // ignore children if the node has textContent or innerHTML,
          // as these will throw away existing DOM nodes and cause removal errors
          // on subsequent patches (#3360)
          if (key === 'textContent' || key === 'innerHTML') {
            if (vnode.children) { vnode.children.length = 0 }
            if (cur === oldProps[key]) { continue }
            // #6601 work around Chrome version <= 55 bug where single textNode
            // replaced by innerHTML/textContent retains its parentNode property
            if (elm.childNodes.length === 1) {
              elm.removeChild(elm.childNodes[0])
            }
          }

          if (key === 'value' && elm.tagName !== 'PROGRESS') {
            // store value as _value as well since
            // non-string values will be stringified
            elm._value = cur
            // avoid resetting cursor position when value is the same
            var strCur = isUndef(cur) ? '' : String(cur)
            if (shouldUpdateValue(elm, strCur)) {
              elm.value = strCur
            }
          } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
            // IE doesn't support innerHTML for SVG elements
            svgContainer = svgContainer || document.createElement('div')
            svgContainer.innerHTML = '<svg>' + cur + '</svg>'
            var svg = svgContainer.firstChild
            while (elm.firstChild) {
              elm.removeChild(elm.firstChild)
            }
            while (svg.firstChild) {
              elm.appendChild(svg.firstChild)
            }
          } else if (
          // skip the update if old and new VDOM state is the same.
          // `value` is handled separately because the DOM value may be temporarily
          // out of sync with VDOM state due to focus, composition and modifiers.
          // This  #4521 by skipping the unnecesarry `checked` update.
            cur !== oldProps[key]
          ) {
            // some property updates can throw
            // e.g. `value` on <progress> w/ non-finite value
            try {
              elm[key] = cur
            } catch (e) {}
          }
        }
      }

      // check platforms/web/util/attrs.js acceptValue

      function shouldUpdateValue (elm, checkVal) {
        return (!elm.composing && (
          elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
        ))
      }

      function isNotInFocusAndDirty (elm, checkVal) {
        // return true when textbox (.number and .trim) loses focus and its value is
        // not equal to the updated value
        var notInFocus = true
        // #6157
        // work around IE bug when accessing document.activeElement in an iframe
        try { notInFocus = document.activeElement !== elm } catch (e) {}
        return notInFocus && elm.value !== checkVal
      }

      function isDirtyWithModifiers (elm, newVal) {
        var value = elm.value
        var modifiers = elm._vModifiers // injected by v-model runtime
        if (isDef(modifiers)) {
          if (modifiers.number) {
            return toNumber(value) !== toNumber(newVal)
          }
          if (modifiers.trim) {
            return value.trim() !== newVal.trim()
          }
        }
        return value !== newVal
      }

      var domProps = {
        create: updateDOMProps,
        update: updateDOMProps
      }

      /*  */

      var parseStyleText = cached(function (cssText) {
        var res = {}
        var listDelimiter = /;(?![^(]*\))/g
        var propertyDelimiter = /:(.+)/
        cssText.split(listDelimiter).forEach(function (item) {
          if (item) {
            var tmp = item.split(propertyDelimiter)
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim())
          }
        })
        return res
      })

      // merge static and dynamic style data on the same vnode
      function normalizeStyleData (data) {
        var style = normalizeStyleBinding(data.style)
        // static style is pre-processed into an object during compilation
        // and is always a fresh object, so it's safe to merge into it
        return data.staticStyle
          ? extend(data.staticStyle, style)
          : style
      }

      // normalize possible array / string values into Object
      function normalizeStyleBinding (bindingStyle) {
        if (Array.isArray(bindingStyle)) {
          return toObject(bindingStyle)
        }
        if (typeof bindingStyle === 'string') {
          return parseStyleText(bindingStyle)
        }
        return bindingStyle
      }

      /**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
      function getStyle (vnode, checkChild) {
        var res = {}
        var styleData

        if (checkChild) {
          var childNode = vnode
          while (childNode.componentInstance) {
            childNode = childNode.componentInstance._vnode
            if (
              childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
            ) {
              extend(res, styleData)
            }
          }
        }

        if ((styleData = normalizeStyleData(vnode.data))) {
          extend(res, styleData)
        }

        var parentNode = vnode
        while ((parentNode = parentNode.parent)) {
          if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData)
          }
        }
        return res
      }

      /*  */

      var cssVarRE = /^--/
      var importantRE = /\s*!important$/
      var setProp = function (el, name, val) {
        /* istanbul ignore if */
        if (cssVarRE.test(name)) {
          el.style.setProperty(name, val)
        } else if (importantRE.test(val)) {
          el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important')
        } else {
          var normalizedName = normalize(name)
          if (Array.isArray(val)) {
            // Support values array created by autoprefixer, e.g.
            // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
            // Set them one by one, and the browser will only set those it can recognize
            for (var i = 0, len = val.length; i < len; i++) {
              el.style[normalizedName] = val[i]
            }
          } else {
            el.style[normalizedName] = val
          }
        }
      }

      var vendorNames = ['Webkit', 'Moz', 'ms']

      var emptyStyle
      var normalize = cached(function (prop) {
        emptyStyle = emptyStyle || document.createElement('div').style
        prop = camelize(prop)
        if (prop !== 'filter' && (prop in emptyStyle)) {
          return prop
        }
        var capName = prop.charAt(0).toUpperCase() + prop.slice(1)
        for (var i = 0; i < vendorNames.length; i++) {
          var name = vendorNames[i] + capName
          if (name in emptyStyle) {
            return name
          }
        }
      })

      function updateStyle (oldVnode, vnode) {
        var data = vnode.data
        var oldData = oldVnode.data

        if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
        ) {
          return
        }

        var cur, name
        var el = vnode.elm
        var oldStaticStyle = oldData.staticStyle
        var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}

        // if static style exists, stylebinding already merged into it when doing normalizeStyleData
        var oldStyle = oldStaticStyle || oldStyleBinding

        var style = normalizeStyleBinding(vnode.data.style) || {}

        // store normalized style under a different key for next diff
        // make sure to clone it if it's reactive, since the user likely wants
        // to mutate it.
        vnode.data.normalizedStyle = isDef(style.__ob__)
          ? extend({}, style)
          : style

        var newStyle = getStyle(vnode, true)

        for (name in oldStyle) {
          if (isUndef(newStyle[name])) {
            setProp(el, name, '')
          }
        }
        for (name in newStyle) {
          cur = newStyle[name]
          if (cur !== oldStyle[name]) {
            // ie9 setting to null has no effect, must use empty string
            setProp(el, name, cur == null ? '' : cur)
          }
        }
      }

      var style = {
        create: updateStyle,
        update: updateStyle
      }

      /*  */

      var whitespaceRE = /\s+/

      /**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
      function addClass (el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
          return
        }

        /* istanbul ignore else */
        if (el.classList) {
          if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c) })
          } else {
            el.classList.add(cls)
          }
        } else {
          var cur = ' ' + (el.getAttribute('class') || '') + ' '
          if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim())
          }
        }
      }

      /**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
      function removeClass (el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
          return
        }

        /* istanbul ignore else */
        if (el.classList) {
          if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c) })
          } else {
            el.classList.remove(cls)
          }
          if (!el.classList.length) {
            el.removeAttribute('class')
          }
        } else {
          var cur = ' ' + (el.getAttribute('class') || '') + ' '
          var tar = ' ' + cls + ' '
          while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ')
          }
          cur = cur.trim()
          if (cur) {
            el.setAttribute('class', cur)
          } else {
            el.removeAttribute('class')
          }
        }
      }

      /*  */

      function resolveTransition (def$$1) {
        if (!def$$1) {
          return
        }
        /* istanbul ignore else */
        if (typeof def$$1 === 'object') {
          var res = {}
          if (def$$1.css !== false) {
            extend(res, autoCssTransition(def$$1.name || 'v'))
          }
          extend(res, def$$1)
          return res
        } else if (typeof def$$1 === 'string') {
          return autoCssTransition(def$$1)
        }
      }

      var autoCssTransition = cached(function (name) {
        return {
          enterClass: (name + '-enter'),
          enterToClass: (name + '-enter-to'),
          enterActiveClass: (name + '-enter-active'),
          leaveClass: (name + '-leave'),
          leaveToClass: (name + '-leave-to'),
          leaveActiveClass: (name + '-leave-active')
        }
      })

      var hasTransition = inBrowser && !isIE9
      var TRANSITION = 'transition'
      var ANIMATION = 'animation'

      // Transition property/event sniffing
      var transitionProp = 'transition'
      var transitionEndEvent = 'transitionend'
      var animationProp = 'animation'
      var animationEndEvent = 'animationend'
      if (hasTransition) {
        /* istanbul ignore if */
        if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
        ) {
          transitionProp = 'WebkitTransition'
          transitionEndEvent = 'webkitTransitionEnd'
        }
        if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
        ) {
          animationProp = 'WebkitAnimation'
          animationEndEvent = 'webkitAnimationEnd'
        }
      }

      // binding to window is necessary to make hot reload work in IE in strict mode
      var raf = inBrowser
        ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
        : /* istanbul ignore next */ function (fn) { return fn() }

      function nextFrame (fn) {
        raf(function () {
          raf(fn)
        })
      }

      function addTransitionClass (el, cls) {
        var transitionClasses = el._transitionClasses || (el._transitionClasses = [])
        if (transitionClasses.indexOf(cls) < 0) {
          transitionClasses.push(cls)
          addClass(el, cls)
        }
      }

      function removeTransitionClass (el, cls) {
        if (el._transitionClasses) {
          remove(el._transitionClasses, cls)
        }
        removeClass(el, cls)
      }

      function whenTransitionEnds (
        el,
        expectedType,
        cb
      ) {
        var ref = getTransitionInfo(el, expectedType)
        var type = ref.type
        var timeout = ref.timeout
        var propCount = ref.propCount
        if (!type) { return cb() }
        var event = type === TRANSITION ? transitionEndEvent : animationEndEvent
        var ended = 0
        var end = function () {
          el.removeEventListener(event, onEnd)
          cb()
        }
        var onEnd = function (e) {
          if (e.target === el) {
            if (++ended >= propCount) {
              end()
            }
          }
        }
        setTimeout(function () {
          if (ended < propCount) {
            end()
          }
        }, timeout + 1)
        el.addEventListener(event, onEnd)
      }

      var transformRE = /\b(transform|all)(,|$)/

      function getTransitionInfo (el, expectedType) {
        var styles = window.getComputedStyle(el)
        // JSDOM may return undefined for transition properties
        var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ')
        var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ')
        var transitionTimeout = getTimeout(transitionDelays, transitionDurations)
        var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ')
        var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ')
        var animationTimeout = getTimeout(animationDelays, animationDurations)

        var type
        var timeout = 0
        var propCount = 0
        /* istanbul ignore if */
        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION
            timeout = transitionTimeout
            propCount = transitionDurations.length
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION
            timeout = animationTimeout
            propCount = animationDurations.length
          }
        } else {
          timeout = Math.max(transitionTimeout, animationTimeout)
          type = timeout > 0
            ? transitionTimeout > animationTimeout
              ? TRANSITION
              : ANIMATION
            : null
          propCount = type
            ? type === TRANSITION
              ? transitionDurations.length
              : animationDurations.length
            : 0
        }
        var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property'])
        return {
          type: type,
          timeout: timeout,
          propCount: propCount,
          hasTransform: hasTransform
        }
      }

      function getTimeout (delays, durations) {
        /* istanbul ignore next */
        while (delays.length < durations.length) {
          delays = delays.concat(delays)
        }

        return Math.max.apply(null, durations.map(function (d, i) {
          return toMs(d) + toMs(delays[i])
        }))
      }

      // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
      // in a locale-dependent way, using a comma instead of a dot.
      // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
      // as a floor function) causing unexpected behaviors
      function toMs (s) {
        return Number(s.slice(0, -1).replace(',', '.')) * 1000
      }

      /*  */

      function enter (vnode, toggleDisplay) {
        var el = vnode.elm

        // call leave callback now
        if (isDef(el._leaveCb)) {
          el._leaveCb.cancelled = true
          el._leaveCb()
        }

        var data = resolveTransition(vnode.data.transition)
        if (isUndef(data)) {
          return
        }

        /* istanbul ignore if */
        if (isDef(el._enterCb) || el.nodeType !== 1) {
          return
        }

        var css = data.css
        var type = data.type
        var enterClass = data.enterClass
        var enterToClass = data.enterToClass
        var enterActiveClass = data.enterActiveClass
        var appearClass = data.appearClass
        var appearToClass = data.appearToClass
        var appearActiveClass = data.appearActiveClass
        var beforeEnter = data.beforeEnter
        var enter = data.enter
        var afterEnter = data.afterEnter
        var enterCancelled = data.enterCancelled
        var beforeAppear = data.beforeAppear
        var appear = data.appear
        var afterAppear = data.afterAppear
        var appearCancelled = data.appearCancelled
        var duration = data.duration

        // activeInstance will always be the <transition> component managing this
        // transition. One edge case to check is when the <transition> is placed
        // as the root node of a child component. In that case we need to check
        // <transition>'s parent for appear check.
        var context = activeInstance
        var transitionNode = activeInstance.$vnode
        while (transitionNode && transitionNode.parent) {
          context = transitionNode.context
          transitionNode = transitionNode.parent
        }

        var isAppear = !context._isMounted || !vnode.isRootInsert

        if (isAppear && !appear && appear !== '') {
          return
        }

        var startClass = isAppear && appearClass
          ? appearClass
          : enterClass
        var activeClass = isAppear && appearActiveClass
          ? appearActiveClass
          : enterActiveClass
        var toClass = isAppear && appearToClass
          ? appearToClass
          : enterToClass

        var beforeEnterHook = isAppear
          ? (beforeAppear || beforeEnter)
          : beforeEnter
        var enterHook = isAppear
          ? (typeof appear === 'function' ? appear : enter)
          : enter
        var afterEnterHook = isAppear
          ? (afterAppear || afterEnter)
          : afterEnter
        var enterCancelledHook = isAppear
          ? (appearCancelled || enterCancelled)
          : enterCancelled

        var explicitEnterDuration = toNumber(
          isObject(duration)
            ? duration.enter
            : duration
        )

        if (false) {}

        var expectsCSS = css !== false && !isIE9
        var userWantsControl = getHookArgumentsLength(enterHook)

        var cb = el._enterCb = once(function () {
          if (expectsCSS) {
            removeTransitionClass(el, toClass)
            removeTransitionClass(el, activeClass)
          }
          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, startClass)
            }
            enterCancelledHook && enterCancelledHook(el)
          } else {
            afterEnterHook && afterEnterHook(el)
          }
          el._enterCb = null
        })

        if (!vnode.data.show) {
          // remove pending leave element on enter by injecting an insert hook
          mergeVNodeHook(vnode, 'insert', function () {
            var parent = el.parentNode
            var pendingNode = parent && parent._pending && parent._pending[vnode.key]
            if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
            ) {
              pendingNode.elm._leaveCb()
            }
            enterHook && enterHook(el, cb)
          })
        }

        // start enter transition
        beforeEnterHook && beforeEnterHook(el)
        if (expectsCSS) {
          addTransitionClass(el, startClass)
          addTransitionClass(el, activeClass)
          nextFrame(function () {
            removeTransitionClass(el, startClass)
            if (!cb.cancelled) {
              addTransitionClass(el, toClass)
              if (!userWantsControl) {
                if (isValidDuration(explicitEnterDuration)) {
                  setTimeout(cb, explicitEnterDuration)
                } else {
                  whenTransitionEnds(el, type, cb)
                }
              }
            }
          })
        }

        if (vnode.data.show) {
          toggleDisplay && toggleDisplay()
          enterHook && enterHook(el, cb)
        }

        if (!expectsCSS && !userWantsControl) {
          cb()
        }
      }

      function leave (vnode, rm) {
        var el = vnode.elm

        // call enter callback now
        if (isDef(el._enterCb)) {
          el._enterCb.cancelled = true
          el._enterCb()
        }

        var data = resolveTransition(vnode.data.transition)
        if (isUndef(data) || el.nodeType !== 1) {
          return rm()
        }

        /* istanbul ignore if */
        if (isDef(el._leaveCb)) {
          return
        }

        var css = data.css
        var type = data.type
        var leaveClass = data.leaveClass
        var leaveToClass = data.leaveToClass
        var leaveActiveClass = data.leaveActiveClass
        var beforeLeave = data.beforeLeave
        var leave = data.leave
        var afterLeave = data.afterLeave
        var leaveCancelled = data.leaveCancelled
        var delayLeave = data.delayLeave
        var duration = data.duration

        var expectsCSS = css !== false && !isIE9
        var userWantsControl = getHookArgumentsLength(leave)

        var explicitLeaveDuration = toNumber(
          isObject(duration)
            ? duration.leave
            : duration
        )

        if (false) {}

        var cb = el._leaveCb = once(function () {
          if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null
          }
          if (expectsCSS) {
            removeTransitionClass(el, leaveToClass)
            removeTransitionClass(el, leaveActiveClass)
          }
          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, leaveClass)
            }
            leaveCancelled && leaveCancelled(el)
          } else {
            rm()
            afterLeave && afterLeave(el)
          }
          el._leaveCb = null
        })

        if (delayLeave) {
          delayLeave(performLeave)
        } else {
          performLeave()
        }

        function performLeave () {
          // the delayed leave may have already been cancelled
          if (cb.cancelled) {
            return
          }
          // record leaving element
          if (!vnode.data.show && el.parentNode) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode
          }
          beforeLeave && beforeLeave(el)
          if (expectsCSS) {
            addTransitionClass(el, leaveClass)
            addTransitionClass(el, leaveActiveClass)
            nextFrame(function () {
              removeTransitionClass(el, leaveClass)
              if (!cb.cancelled) {
                addTransitionClass(el, leaveToClass)
                if (!userWantsControl) {
                  if (isValidDuration(explicitLeaveDuration)) {
                    setTimeout(cb, explicitLeaveDuration)
                  } else {
                    whenTransitionEnds(el, type, cb)
                  }
                }
              }
            })
          }
          leave && leave(el, cb)
          if (!expectsCSS && !userWantsControl) {
            cb()
          }
        }
      }

      // only used in dev mode
      function checkDuration (val, name, vnode) {
        if (typeof val !== 'number') {
          warn(
            '<transition> explicit ' + name + ' duration is not a valid number - ' +
      'got ' + (JSON.stringify(val)) + '.',
            vnode.context
          )
        } else if (isNaN(val)) {
          warn(
            '<transition> explicit ' + name + ' duration is NaN - ' +
      'the duration expression might be incorrect.',
            vnode.context
          )
        }
      }

      function isValidDuration (val) {
        return typeof val === 'number' && !isNaN(val)
      }

      /**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
      function getHookArgumentsLength (fn) {
        if (isUndef(fn)) {
          return false
        }
        var invokerFns = fn.fns
        if (isDef(invokerFns)) {
          // invoker
          return getHookArgumentsLength(
            Array.isArray(invokerFns)
              ? invokerFns[0]
              : invokerFns
          )
        } else {
          return (fn._length || fn.length) > 1
        }
      }

      function _enter (_, vnode) {
        if (vnode.data.show !== true) {
          enter(vnode)
        }
      }

      var transition = inBrowser ? {
        create: _enter,
        activate: _enter,
        remove: function remove$$1 (vnode, rm) {
          /* istanbul ignore else */
          if (vnode.data.show !== true) {
            leave(vnode, rm)
          } else {
            rm()
          }
        }
      } : {}

      var platformModules = [
        attrs,
        klass,
        events,
        domProps,
        style,
        transition
      ]

      /*  */

      // the directive module should be applied last, after all
      // built-in modules have been applied.
      var modules = platformModules.concat(baseModules)

      var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules })

      /**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

      /* istanbul ignore if */
      if (isIE9) {
        // http://www.matts411.com/post/internet-explorer-9-oninput/
        document.addEventListener('selectionchange', function () {
          var el = document.activeElement
          if (el && el.vmodel) {
            trigger(el, 'input')
          }
        })
      }

      var directive = {
        inserted: function inserted (el, binding, vnode, oldVnode) {
          if (vnode.tag === 'select') {
            // #6903
            if (oldVnode.elm && !oldVnode.elm._vOptions) {
              mergeVNodeHook(vnode, 'postpatch', function () {
                directive.componentUpdated(el, binding, vnode)
              })
            } else {
              setSelected(el, binding, vnode.context)
            }
            el._vOptions = [].map.call(el.options, getValue)
          } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
            el._vModifiers = binding.modifiers
            if (!binding.modifiers.lazy) {
              el.addEventListener('compositionstart', onCompositionStart)
              el.addEventListener('compositionend', onCompositionEnd)
              // Safari < 10.2 & UIWebView doesn't fire compositionend when
              // switching focus before confirming composition choice
              // this also fixes the issue where some browsers e.g. iOS Chrome
              // fires "change" instead of "input" on autocomplete.
              el.addEventListener('change', onCompositionEnd)
              /* istanbul ignore if */
              if (isIE9) {
                el.vmodel = true
              }
            }
          }
        },

        componentUpdated: function componentUpdated (el, binding, vnode) {
          if (vnode.tag === 'select') {
            setSelected(el, binding, vnode.context)
            // in case the options rendered by v-for have changed,
            // it's possible that the value is out-of-sync with the rendered options.
            // detect such cases and filter out values that no longer has a matching
            // option in the DOM.
            var prevOptions = el._vOptions
            var curOptions = el._vOptions = [].map.call(el.options, getValue)
            if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]) })) {
              // trigger change event if
              // no matching option found for at least one value
              var needReset = el.multiple
                ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions) })
                : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions)
              if (needReset) {
                trigger(el, 'change')
              }
            }
          }
        }
      }

      function setSelected (el, binding, vm) {
        actuallySetSelected(el, binding, vm)
        /* istanbul ignore if */
        if (isIE || isEdge) {
          setTimeout(function () {
            actuallySetSelected(el, binding, vm)
          }, 0)
        }
      }

      function actuallySetSelected (el, binding, vm) {
        var value = binding.value
        var isMultiple = el.multiple
        if (isMultiple && !Array.isArray(value)) {
          false && false
          return
        }
        var selected, option
        for (var i = 0, l = el.options.length; i < l; i++) {
          option = el.options[i]
          if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1
            if (option.selected !== selected) {
              option.selected = selected
            }
          } else {
            if (looseEqual(getValue(option), value)) {
              if (el.selectedIndex !== i) {
                el.selectedIndex = i
              }
              return
            }
          }
        }
        if (!isMultiple) {
          el.selectedIndex = -1
        }
      }

      function hasNoMatchingOption (value, options) {
        return options.every(function (o) { return !looseEqual(o, value) })
      }

      function getValue (option) {
        return '_value' in option
          ? option._value
          : option.value
      }

      function onCompositionStart (e) {
        e.target.composing = true
      }

      function onCompositionEnd (e) {
        // prevent triggering an input event for no reason
        if (!e.target.composing) { return }
        e.target.composing = false
        trigger(e.target, 'input')
      }

      function trigger (el, type) {
        var e = document.createEvent('HTMLEvents')
        e.initEvent(type, true, true)
        el.dispatchEvent(e)
      }

      /*  */

      // recursively search for possible transition defined inside the component root
      function locateNode (vnode) {
        return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
          ? locateNode(vnode.componentInstance._vnode)
          : vnode
      }

      var show = {
        bind: function bind (el, ref, vnode) {
          var value = ref.value

          vnode = locateNode(vnode)
          var transition$$1 = vnode.data && vnode.data.transition
          var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display
          if (value && transition$$1) {
            vnode.data.show = true
            enter(vnode, function () {
              el.style.display = originalDisplay
            })
          } else {
            el.style.display = value ? originalDisplay : 'none'
          }
        },

        update: function update (el, ref, vnode) {
          var value = ref.value
          var oldValue = ref.oldValue

          /* istanbul ignore if */
          if (!value === !oldValue) { return }
          vnode = locateNode(vnode)
          var transition$$1 = vnode.data && vnode.data.transition
          if (transition$$1) {
            vnode.data.show = true
            if (value) {
              enter(vnode, function () {
                el.style.display = el.__vOriginalDisplay
              })
            } else {
              leave(vnode, function () {
                el.style.display = 'none'
              })
            }
          } else {
            el.style.display = value ? el.__vOriginalDisplay : 'none'
          }
        },

        unbind: function unbind (
          el,
          binding,
          vnode,
          oldVnode,
          isDestroy
        ) {
          if (!isDestroy) {
            el.style.display = el.__vOriginalDisplay
          }
        }
      }

      var platformDirectives = {
        model: directive,
        show: show
      }

      /*  */

      var transitionProps = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
      }

      // in case the child is also an abstract component, e.g. <keep-alive>
      // we want to recursively retrieve the real component to be rendered
      function getRealChild (vnode) {
        var compOptions = vnode && vnode.componentOptions
        if (compOptions && compOptions.Ctor.options.abstract) {
          return getRealChild(getFirstComponentChild(compOptions.children))
        } else {
          return vnode
        }
      }

      function extractTransitionData (comp) {
        var data = {}
        var options = comp.$options
        // props
        for (var key in options.propsData) {
          data[key] = comp[key]
        }
        // events.
        // extract listeners and pass them directly to the transition methods
        var listeners = options._parentListeners
        for (var key$1 in listeners) {
          data[camelize(key$1)] = listeners[key$1]
        }
        return data
      }

      function placeholder (h, rawChild) {
        if (/\d-keep-alive$/.test(rawChild.tag)) {
          return h('keep-alive', {
            props: rawChild.componentOptions.propsData
          })
        }
      }

      function hasParentTransition (vnode) {
        while ((vnode = vnode.parent)) {
          if (vnode.data.transition) {
            return true
          }
        }
      }

      function isSameChild (child, oldChild) {
        return oldChild.key === child.key && oldChild.tag === child.tag
      }

      var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c) }

      var isVShowDirective = function (d) { return d.name === 'show' }

      var Transition = {
        name: 'transition',
        props: transitionProps,
        abstract: true,

        render: function render (h) {
          var this$1 = this

          var children = this.$slots.default
          if (!children) {
            return
          }

          // filter out text nodes (possible whitespaces)
          children = children.filter(isNotTextNode)
          /* istanbul ignore if */
          if (!children.length) {
            return
          }

          // warn multiple elements
          if (false) {}

          var mode = this.mode

          // warn invalid mode
          if (false
          ) {}

          var rawChild = children[0]

          // if this is a component root node and the component's
          // parent container node also has transition, skip.
          if (hasParentTransition(this.$vnode)) {
            return rawChild
          }

          // apply transition data to child
          // use getRealChild() to ignore abstract components e.g. keep-alive
          var child = getRealChild(rawChild)
          /* istanbul ignore if */
          if (!child) {
            return rawChild
          }

          if (this._leaving) {
            return placeholder(h, rawChild)
          }

          // ensure a key that is unique to the vnode type and to this transition
          // component instance. This key will be used to remove pending leaving nodes
          // during entering.
          var id = '__transition-' + (this._uid) + '-'
          child.key = child.key == null
            ? child.isComment
              ? id + 'comment'
              : id + child.tag
            : isPrimitive(child.key)
              ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
              : child.key

          var data = (child.data || (child.data = {})).transition = extractTransitionData(this)
          var oldRawChild = this._vnode
          var oldChild = getRealChild(oldRawChild)

          // mark v-show
          // so that the transition module can hand over the control to the directive
          if (child.data.directives && child.data.directives.some(isVShowDirective)) {
            child.data.show = true
          }

          if (
            oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
          ) {
            // replace old child transition data with fresh one
            // important for dynamic transitions!
            var oldData = oldChild.data.transition = extend({}, data)
            // handle transition mode
            if (mode === 'out-in') {
              // return placeholder node and queue update when leave finishes
              this._leaving = true
              mergeVNodeHook(oldData, 'afterLeave', function () {
                this$1._leaving = false
                this$1.$forceUpdate()
              })
              return placeholder(h, rawChild)
            } else if (mode === 'in-out') {
              if (isAsyncPlaceholder(child)) {
                return oldRawChild
              }
              var delayedLeave
              var performLeave = function () { delayedLeave() }
              mergeVNodeHook(data, 'afterEnter', performLeave)
              mergeVNodeHook(data, 'enterCancelled', performLeave)
              mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave })
            }
          }

          return rawChild
        }
      }

      /*  */

      var props = extend({
        tag: String,
        moveClass: String
      }, transitionProps)

      delete props.mode

      var TransitionGroup = {
        props: props,

        beforeMount: function beforeMount () {
          var this$1 = this

          var update = this._update
          this._update = function (vnode, hydrating) {
            var restoreActiveInstance = setActiveInstance(this$1)
            // force removing pass
            this$1.__patch__(
              this$1._vnode,
              this$1.kept,
              false, // hydrating
              true // removeOnly (!important, avoids unnecessary moves)
            )
            this$1._vnode = this$1.kept
            restoreActiveInstance()
            update.call(this$1, vnode, hydrating)
          }
        },

        render: function render (h) {
          var tag = this.tag || this.$vnode.data.tag || 'span'
          var map = Object.create(null)
          var prevChildren = this.prevChildren = this.children
          var rawChildren = this.$slots.default || []
          var children = this.children = []
          var transitionData = extractTransitionData(this)

          for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i]
            if (c.tag) {
              if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                children.push(c)
                map[c.key] = c
                ;(c.data || (c.data = {})).transition = transitionData
              } else if (false) { var name, opts }
            }
          }

          if (prevChildren) {
            var kept = []
            var removed = []
            for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
              var c$1 = prevChildren[i$1]
              c$1.data.transition = transitionData
              c$1.data.pos = c$1.elm.getBoundingClientRect()
              if (map[c$1.key]) {
                kept.push(c$1)
              } else {
                removed.push(c$1)
              }
            }
            this.kept = h(tag, null, kept)
            this.removed = removed
          }

          return h(tag, null, children)
        },

        updated: function updated () {
          var children = this.prevChildren
          var moveClass = this.moveClass || ((this.name || 'v') + '-move')
          if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return
          }

          // we divide the work into three loops to avoid mixing DOM reads and writes
          // in each iteration - which helps prevent layout thrashing.
          children.forEach(callPendingCbs)
          children.forEach(recordPosition)
          children.forEach(applyTranslation)

          // force reflow to put everything in position
          // assign to this to avoid being removed in tree-shaking
          // $flow-disable-line
          this._reflow = document.body.offsetHeight

          children.forEach(function (c) {
            if (c.data.moved) {
              var el = c.elm
              var s = el.style
              addTransitionClass(el, moveClass)
              s.transform = s.WebkitTransform = s.transitionDuration = ''
              el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
                if (e && e.target !== el) {
                  return
                }
                if (!e || /transform$/.test(e.propertyName)) {
                  el.removeEventListener(transitionEndEvent, cb)
                  el._moveCb = null
                  removeTransitionClass(el, moveClass)
                }
              })
            }
          })
        },

        methods: {
          hasMove: function hasMove (el, moveClass) {
            /* istanbul ignore if */
            if (!hasTransition) {
              return false
            }
            /* istanbul ignore if */
            if (this._hasMove) {
              return this._hasMove
            }
            // Detect whether an element with the move class applied has
            // CSS transitions. Since the element may be inside an entering
            // transition at this very moment, we make a clone of it and remove
            // all other transition classes applied to ensure only the move class
            // is applied.
            var clone = el.cloneNode()
            if (el._transitionClasses) {
              el._transitionClasses.forEach(function (cls) { removeClass(clone, cls) })
            }
            addClass(clone, moveClass)
            clone.style.display = 'none'
            this.$el.appendChild(clone)
            var info = getTransitionInfo(clone)
            this.$el.removeChild(clone)
            return (this._hasMove = info.hasTransform)
          }
        }
      }

      function callPendingCbs (c) {
        /* istanbul ignore if */
        if (c.elm._moveCb) {
          c.elm._moveCb()
        }
        /* istanbul ignore if */
        if (c.elm._enterCb) {
          c.elm._enterCb()
        }
      }

      function recordPosition (c) {
        c.data.newPos = c.elm.getBoundingClientRect()
      }

      function applyTranslation (c) {
        var oldPos = c.data.pos
        var newPos = c.data.newPos
        var dx = oldPos.left - newPos.left
        var dy = oldPos.top - newPos.top
        if (dx || dy) {
          c.data.moved = true
          var s = c.elm.style
          s.transform = s.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)'
          s.transitionDuration = '0s'
        }
      }

      var platformComponents = {
        Transition: Transition,
        TransitionGroup: TransitionGroup
      }

      /*  */

      // install platform specific utils
      Vue.config.mustUseProp = mustUseProp
      Vue.config.isReservedTag = isReservedTag
      Vue.config.isReservedAttr = isReservedAttr
      Vue.config.getTagNamespace = getTagNamespace
      Vue.config.isUnknownElement = isUnknownElement

      // install platform runtime directives & components
      extend(Vue.options.directives, platformDirectives)
      extend(Vue.options.components, platformComponents)

      // install platform patch function
      Vue.prototype.__patch__ = inBrowser ? patch : noop

      // public mount method
      Vue.prototype.$mount = function (
        el,
        hydrating
      ) {
        el = el && inBrowser ? query(el) : undefined
        return mountComponent(this, el, hydrating)
      }

      // devtools global hook
      /* istanbul ignore next */
      if (inBrowser) {
        setTimeout(function () {
          if (config.devtools) {
            if (devtools) {
              devtools.emit('init', Vue)
            } else if (
              false
            ) {}
          }
          if (false
          ) {}
        }, 0)
      }

      /*  */

      /* harmony default export */ __webpack_exports__.default = (Vue)
      /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
    /***/ },

  /***/ '337f':
  /***/ function (module, exports, __webpack_require__) {
    !(function (e, t) { true ? module.exports = t() : undefined }(this, function () { return (function (e) { var t = {}; function r (n) { if (t[n]) return t[n].exports; var i = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports } return r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (var i in e)r.d(n, i, function (t) { return e[t] }.bind(null, i)); return n }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, 'a', t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = '', r(r.s = 90) }({ 17: function (e, t, r) { 'use strict'; t.__esModule = !0, t.default = void 0; var n = r(18); var i = (function () { function e () {} return e.getFirstMatch = function (e, t) { var r = t.match(e); return r && r.length > 0 && r[1] || '' }, e.getSecondMatch = function (e, t) { var r = t.match(e); return r && r.length > 1 && r[2] || '' }, e.matchAndReturnConst = function (e, t, r) { if (e.test(t)) return r }, e.getWindowsVersionName = function (e) { switch (e) { case 'NT':return 'NT'; case 'XP':return 'XP'; case 'NT 5.0':return '2000'; case 'NT 5.1':return 'XP'; case 'NT 5.2':return '2003'; case 'NT 6.0':return 'Vista'; case 'NT 6.1':return '7'; case 'NT 6.2':return '8'; case 'NT 6.3':return '8.1'; case 'NT 10.0':return '10'; default: } }, e.getMacOSVersionName = function (e) { var t = e.split('.').splice(0, 2).map(function (e) { return parseInt(e, 10) || 0 }); if (t.push(0), t[0] === 10) switch (t[1]) { case 5:return 'Leopard'; case 6:return 'Snow Leopard'; case 7:return 'Lion'; case 8:return 'Mountain Lion'; case 9:return 'Mavericks'; case 10:return 'Yosemite'; case 11:return 'El Capitan'; case 12:return 'Sierra'; case 13:return 'High Sierra'; case 14:return 'Mojave'; case 15:return 'Catalina'; default: } }, e.getAndroidVersionName = function (e) { var t = e.split('.').splice(0, 2).map(function (e) { return parseInt(e, 10) || 0 }); if (t.push(0), !(t[0] === 1 && t[1] < 5)) return t[0] === 1 && t[1] < 6 ? 'Cupcake' : t[0] === 1 && t[1] >= 6 ? 'Donut' : t[0] === 2 && t[1] < 2 ? 'Eclair' : t[0] === 2 && t[1] === 2 ? 'Froyo' : t[0] === 2 && t[1] > 2 ? 'Gingerbread' : t[0] === 3 ? 'Honeycomb' : t[0] === 4 && t[1] < 1 ? 'Ice Cream Sandwich' : t[0] === 4 && t[1] < 4 ? 'Jelly Bean' : t[0] === 4 && t[1] >= 4 ? 'KitKat' : t[0] === 5 ? 'Lollipop' : t[0] === 6 ? 'Marshmallow' : t[0] === 7 ? 'Nougat' : t[0] === 8 ? 'Oreo' : t[0] === 9 ? 'Pie' : void 0 }, e.getVersionPrecision = function (e) { return e.split('.').length }, e.compareVersions = function (t, r, n) { void 0 === n && (n = !1); var i = e.getVersionPrecision(t); var s = e.getVersionPrecision(r); var a = Math.max(i, s); var o = 0; var u = e.map([t, r], function (t) { var r = a - e.getVersionPrecision(t); var n = t + new Array(r + 1).join('.0'); return e.map(n.split('.'), function (e) { return new Array(20 - e.length).join('0') + e }).reverse() }); for (n && (o = a - Math.min(i, s)), a -= 1; a >= o;) { if (u[0][a] > u[1][a]) return 1; if (u[0][a] === u[1][a]) { if (a === o) return 0; a -= 1 } else if (u[0][a] < u[1][a]) return -1 } }, e.map = function (e, t) { var r; var n = []; if (Array.prototype.map) return Array.prototype.map.call(e, t); for (r = 0; r < e.length; r += 1)n.push(t(e[r])); return n }, e.find = function (e, t) { var r, n; if (Array.prototype.find) return Array.prototype.find.call(e, t); for (r = 0, n = e.length; r < n; r += 1) { var i = e[r]; if (t(i, r)) return i } }, e.assign = function (e) { for (var t, r, n = e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)s[a - 1] = arguments[a]; if (Object.assign) return Object.assign.apply(Object, [e].concat(s)); var o = function () { var e = s[t]; typeof e === 'object' && e !== null && Object.keys(e).forEach(function (t) { n[t] = e[t] }) }; for (t = 0, r = s.length; t < r; t += 1)o(); return e }, e.getBrowserAlias = function (e) { return n.BROWSER_ALIASES_MAP[e] }, e.getBrowserTypeByAlias = function (e) { return n.BROWSER_MAP[e] || '' }, e }()); t.default = i, e.exports = t.default }, 18: function (e, t, r) { 'use strict'; t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0; t.BROWSER_ALIASES_MAP = { 'Amazon Silk': 'amazon_silk', 'Android Browser': 'android', Bada: 'bada', BlackBerry: 'blackberry', Chrome: 'chrome', Chromium: 'chromium', Electron: 'electron', Epiphany: 'epiphany', Firefox: 'firefox', Focus: 'focus', Generic: 'generic', 'Google Search': 'google_search', Googlebot: 'googlebot', 'Internet Explorer': 'ie', 'K-Meleon': 'k_meleon', Maxthon: 'maxthon', 'Microsoft Edge': 'edge', 'MZ Browser': 'mz', 'NAVER Whale Browser': 'naver', Opera: 'opera', 'Opera Coast': 'opera_coast', PhantomJS: 'phantomjs', Puffin: 'puffin', QupZilla: 'qupzilla', QQ: 'qq', QQLite: 'qqlite', Safari: 'safari', Sailfish: 'sailfish', 'Samsung Internet for Android': 'samsung_internet', SeaMonkey: 'seamonkey', Sleipnir: 'sleipnir', Swing: 'swing', Tizen: 'tizen', 'UC Browser': 'uc', Vivaldi: 'vivaldi', 'WebOS Browser': 'webos', WeChat: 'wechat', 'Yandex Browser': 'yandex', Roku: 'roku' }; t.BROWSER_MAP = { amazon_silk: 'Amazon Silk', android: 'Android Browser', bada: 'Bada', blackberry: 'BlackBerry', chrome: 'Chrome', chromium: 'Chromium', electron: 'Electron', epiphany: 'Epiphany', firefox: 'Firefox', focus: 'Focus', generic: 'Generic', googlebot: 'Googlebot', google_search: 'Google Search', ie: 'Internet Explorer', k_meleon: 'K-Meleon', maxthon: 'Maxthon', edge: 'Microsoft Edge', mz: 'MZ Browser', naver: 'NAVER Whale Browser', opera: 'Opera', opera_coast: 'Opera Coast', phantomjs: 'PhantomJS', puffin: 'Puffin', qupzilla: 'QupZilla', qq: 'QQ Browser', qqlite: 'QQ Browser Lite', safari: 'Safari', sailfish: 'Sailfish', samsung_internet: 'Samsung Internet for Android', seamonkey: 'SeaMonkey', sleipnir: 'Sleipnir', swing: 'Swing', tizen: 'Tizen', uc: 'UC Browser', vivaldi: 'Vivaldi', webos: 'WebOS Browser', wechat: 'WeChat', yandex: 'Yandex Browser' }; t.PLATFORMS_MAP = { tablet: 'tablet', mobile: 'mobile', desktop: 'desktop', tv: 'tv' }; t.OS_MAP = { WindowsPhone: 'Windows Phone', Windows: 'Windows', MacOS: 'macOS', iOS: 'iOS', Android: 'Android', WebOS: 'WebOS', BlackBerry: 'BlackBerry', Bada: 'Bada', Tizen: 'Tizen', Linux: 'Linux', ChromeOS: 'Chrome OS', PlayStation4: 'PlayStation 4', Roku: 'Roku' }; t.ENGINE_MAP = { EdgeHTML: 'EdgeHTML', Blink: 'Blink', Trident: 'Trident', Presto: 'Presto', Gecko: 'Gecko', WebKit: 'WebKit' } }, 90: function (e, t, r) { 'use strict'; t.__esModule = !0, t.default = void 0; var n; var i = (n = r(91)) && n.__esModule ? n : { default: n }; var s = r(18); function a (e, t) { for (var r = 0; r < t.length; r++) { var n = t[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } var o = (function () { function e () {} var t, r, n; return e.getParser = function (e, t) { if (void 0 === t && (t = !1), typeof e !== 'string') throw new Error('UserAgent should be a string'); return new i.default(e, t) }, e.parse = function (e) { return new i.default(e).getResult() }, t = e, n = [{ key: 'BROWSER_MAP', get: function () { return s.BROWSER_MAP } }, { key: 'ENGINE_MAP', get: function () { return s.ENGINE_MAP } }, { key: 'OS_MAP', get: function () { return s.OS_MAP } }, { key: 'PLATFORMS_MAP', get: function () { return s.PLATFORMS_MAP } }], (r = null) && a(t.prototype, r), n && a(t, n), e }()); t.default = o, e.exports = t.default }, 91: function (e, t, r) { 'use strict'; t.__esModule = !0, t.default = void 0; var n = u(r(92)); var i = u(r(93)); var s = u(r(94)); var a = u(r(95)); var o = u(r(17)); function u (e) { return e && e.__esModule ? e : { default: e } } var d = (function () { function e (e, t) { if (void 0 === t && (t = !1), e == null || e === '') throw new Error("UserAgent parameter can't be empty"); this._ua = e, this.parsedResult = {}, !0 !== t && this.parse() } var t = e.prototype; return t.getUA = function () { return this._ua }, t.test = function (e) { return e.test(this._ua) }, t.parseBrowser = function () { var e = this; this.parsedResult.browser = {}; var t = o.default.find(n.default, function (t) { if (typeof t.test === 'function') return t.test(e); if (t.test instanceof Array) return t.test.some(function (t) { return e.test(t) }); throw new Error("Browser's test function is not valid") }); return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser }, t.getBrowser = function () { return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser() }, t.getBrowserName = function (e) { return e ? String(this.getBrowser().name).toLowerCase() || '' : this.getBrowser().name || '' }, t.getBrowserVersion = function () { return this.getBrowser().version }, t.getOS = function () { return this.parsedResult.os ? this.parsedResult.os : this.parseOS() }, t.parseOS = function () { var e = this; this.parsedResult.os = {}; var t = o.default.find(i.default, function (t) { if (typeof t.test === 'function') return t.test(e); if (t.test instanceof Array) return t.test.some(function (t) { return e.test(t) }); throw new Error("Browser's test function is not valid") }); return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os }, t.getOSName = function (e) { var t = this.getOS().name; return e ? String(t).toLowerCase() || '' : t || '' }, t.getOSVersion = function () { return this.getOS().version }, t.getPlatform = function () { return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform() }, t.getPlatformType = function (e) { void 0 === e && (e = !1); var t = this.getPlatform().type; return e ? String(t).toLowerCase() || '' : t || '' }, t.parsePlatform = function () { var e = this; this.parsedResult.platform = {}; var t = o.default.find(s.default, function (t) { if (typeof t.test === 'function') return t.test(e); if (t.test instanceof Array) return t.test.some(function (t) { return e.test(t) }); throw new Error("Browser's test function is not valid") }); return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform }, t.getEngine = function () { return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine() }, t.getEngineName = function (e) { return e ? String(this.getEngine().name).toLowerCase() || '' : this.getEngine().name || '' }, t.parseEngine = function () { var e = this; this.parsedResult.engine = {}; var t = o.default.find(a.default, function (t) { if (typeof t.test === 'function') return t.test(e); if (t.test instanceof Array) return t.test.some(function (t) { return e.test(t) }); throw new Error("Browser's test function is not valid") }); return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine }, t.parse = function () { return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this }, t.getResult = function () { return o.default.assign({}, this.parsedResult) }, t.satisfies = function (e) { var t = this; var r = {}; var n = 0; var i = {}; var s = 0; if (Object.keys(e).forEach(function (t) { var a = e[t]; typeof a === 'string' ? (i[t] = a, s += 1) : typeof a === 'object' && (r[t] = a, n += 1) }), n > 0) { var a = Object.keys(r); var u = o.default.find(a, function (e) { return t.isOS(e) }); if (u) { var d = this.satisfies(r[u]); if (void 0 !== d) return d } var c = o.default.find(a, function (e) { return t.isPlatform(e) }); if (c) { var f = this.satisfies(r[c]); if (void 0 !== f) return f } } if (s > 0) { var l = Object.keys(i); var h = o.default.find(l, function (e) { return t.isBrowser(e, !0) }); if (void 0 !== h) return this.compareVersion(i[h]) } }, t.isBrowser = function (e, t) { void 0 === t && (t = !1); var r = this.getBrowserName().toLowerCase(); var n = e.toLowerCase(); var i = o.default.getBrowserTypeByAlias(n); return t && i && (n = i.toLowerCase()), n === r }, t.compareVersion = function (e) { var t = [0]; var r = e; var n = !1; var i = this.getBrowserVersion(); if (typeof i === 'string') return e[0] === '>' || e[0] === '<' ? (r = e.substr(1), e[1] === '=' ? (n = !0, r = e.substr(2)) : t = [], e[0] === '>' ? t.push(1) : t.push(-1)) : e[0] === '=' ? r = e.substr(1) : e[0] === '~' && (n = !0, r = e.substr(1)), t.indexOf(o.default.compareVersions(i, r, n)) > -1 }, t.isOS = function (e) { return this.getOSName(!0) === String(e).toLowerCase() }, t.isPlatform = function (e) { return this.getPlatformType(!0) === String(e).toLowerCase() }, t.isEngine = function (e) { return this.getEngineName(!0) === String(e).toLowerCase() }, t.is = function (e, t) { return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e) }, t.some = function (e) { var t = this; return void 0 === e && (e = []), e.some(function (e) { return t.is(e) }) }, e }()); t.default = d, e.exports = t.default }, 92: function (e, t, r) { 'use strict'; t.__esModule = !0, t.default = void 0; var n; var i = (n = r(17)) && n.__esModule ? n : { default: n }; var s = /version\/(\d+(\.?_?\d+)+)/i; var a = [{ test: [/googlebot/i], describe: function (e) { var t = { name: 'Googlebot' }; var r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/opera/i], describe: function (e) { var t = { name: 'Opera' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/opr\/|opios/i], describe: function (e) { var t = { name: 'Opera' }; var r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/SamsungBrowser/i], describe: function (e) { var t = { name: 'Samsung Internet for Android' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/Whale/i], describe: function (e) { var t = { name: 'NAVER Whale Browser' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/MZBrowser/i], describe: function (e) { var t = { name: 'MZ Browser' }; var r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/focus/i], describe: function (e) { var t = { name: 'Focus' }; var r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/swing/i], describe: function (e) { var t = { name: 'Swing' }; var r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/coast/i], describe: function (e) { var t = { name: 'Opera Coast' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function (e) { var t = { name: 'Opera Touch' }; var r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/yabrowser/i], describe: function (e) { var t = { name: 'Yandex Browser' }; var r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/ucbrowser/i], describe: function (e) { var t = { name: 'UC Browser' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/Maxthon|mxios/i], describe: function (e) { var t = { name: 'Maxthon' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/epiphany/i], describe: function (e) { var t = { name: 'Epiphany' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/puffin/i], describe: function (e) { var t = { name: 'Puffin' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/sleipnir/i], describe: function (e) { var t = { name: 'Sleipnir' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/k-meleon/i], describe: function (e) { var t = { name: 'K-Meleon' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/micromessenger/i], describe: function (e) { var t = { name: 'WeChat' }; var r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/qqbrowser/i], describe: function (e) { var t = { name: /qqbrowserlite/i.test(e) ? 'QQ Browser Lite' : 'QQ Browser' }; var r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/msie|trident/i], describe: function (e) { var t = { name: 'Internet Explorer' }; var r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/\sedg\//i], describe: function (e) { var t = { name: 'Microsoft Edge' }; var r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/edg([ea]|ios)/i], describe: function (e) { var t = { name: 'Microsoft Edge' }; var r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/vivaldi/i], describe: function (e) { var t = { name: 'Vivaldi' }; var r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/seamonkey/i], describe: function (e) { var t = { name: 'SeaMonkey' }; var r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/sailfish/i], describe: function (e) { var t = { name: 'Sailfish' }; var r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e); return r && (t.version = r), t } }, { test: [/silk/i], describe: function (e) { var t = { name: 'Amazon Silk' }; var r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/phantom/i], describe: function (e) { var t = { name: 'PhantomJS' }; var r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/slimerjs/i], describe: function (e) { var t = { name: 'SlimerJS' }; var r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function (e) { var t = { name: 'BlackBerry' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/(web|hpw)[o0]s/i], describe: function (e) { var t = { name: 'WebOS Browser' }; var r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/bada/i], describe: function (e) { var t = { name: 'Bada' }; var r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/tizen/i], describe: function (e) { var t = { name: 'Tizen' }; var r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/qupzilla/i], describe: function (e) { var t = { name: 'QupZilla' }; var r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/firefox|iceweasel|fxios/i], describe: function (e) { var t = { name: 'Firefox' }; var r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/electron/i], describe: function (e) { var t = { name: 'Electron' }; var r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/MiuiBrowser/i], describe: function (e) { var t = { name: 'Miui' }; var r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/chromium/i], describe: function (e) { var t = { name: 'Chromium' }; var r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/chrome|crios|crmo/i], describe: function (e) { var t = { name: 'Chrome' }; var r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/GSA/i], describe: function (e) { var t = { name: 'Google Search' }; var r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: function (e) { var t = !e.test(/like android/i); var r = e.test(/android/i); return t && r }, describe: function (e) { var t = { name: 'Android Browser' }; var r = i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/playstation 4/i], describe: function (e) { var t = { name: 'PlayStation 4' }; var r = i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/safari|applewebkit/i], describe: function (e) { var t = { name: 'Safari' }; var r = i.default.getFirstMatch(s, e); return r && (t.version = r), t } }, { test: [/.*/i], describe: function (e) { var t = e.search('\\(') !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /; return { name: i.default.getFirstMatch(t, e), version: i.default.getSecondMatch(t, e) } } }]; t.default = a, e.exports = t.default }, 93: function (e, t, r) { 'use strict'; t.__esModule = !0, t.default = void 0; var n; var i = (n = r(17)) && n.__esModule ? n : { default: n }; var s = r(18); var a = [{ test: [/Roku\/DVP/], describe: function (e) { var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e); return { name: s.OS_MAP.Roku, version: t } } }, { test: [/windows phone/i], describe: function (e) { var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e); return { name: s.OS_MAP.WindowsPhone, version: t } } }, { test: [/windows /i], describe: function (e) { var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e); var r = i.default.getWindowsVersionName(t); return { name: s.OS_MAP.Windows, version: t, versionName: r } } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function (e) { var t = { name: s.OS_MAP.iOS }; var r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e); return r && (t.version = r), t } }, { test: [/macintosh/i], describe: function (e) { var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, '.'); var r = i.default.getMacOSVersionName(t); var n = { name: s.OS_MAP.MacOS, version: t }; return r && (n.versionName = r), n } }, { test: [/(ipod|iphone|ipad)/i], describe: function (e) { var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, '.'); return { name: s.OS_MAP.iOS, version: t } } }, { test: function (e) { var t = !e.test(/like android/i); var r = e.test(/android/i); return t && r }, describe: function (e) { var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e); var r = i.default.getAndroidVersionName(t); var n = { name: s.OS_MAP.Android, version: t }; return r && (n.versionName = r), n } }, { test: [/(web|hpw)[o0]s/i], describe: function (e) { var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e); var r = { name: s.OS_MAP.WebOS }; return t && t.length && (r.version = t), r } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function (e) { var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e); return { name: s.OS_MAP.BlackBerry, version: t } } }, { test: [/bada/i], describe: function (e) { var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e); return { name: s.OS_MAP.Bada, version: t } } }, { test: [/tizen/i], describe: function (e) { var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e); return { name: s.OS_MAP.Tizen, version: t } } }, { test: [/linux/i], describe: function () { return { name: s.OS_MAP.Linux } } }, { test: [/CrOS/], describe: function () { return { name: s.OS_MAP.ChromeOS } } }, { test: [/PlayStation 4/], describe: function (e) { var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e); return { name: s.OS_MAP.PlayStation4, version: t } } }]; t.default = a, e.exports = t.default }, 94: function (e, t, r) { 'use strict'; t.__esModule = !0, t.default = void 0; var n; var i = (n = r(17)) && n.__esModule ? n : { default: n }; var s = r(18); var a = [{ test: [/googlebot/i], describe: function () { return { type: 'bot', vendor: 'Google' } } }, { test: [/huawei/i], describe: function (e) { var t = i.default.getFirstMatch(/(can-l01)/i, e) && 'Nova'; var r = { type: s.PLATFORMS_MAP.mobile, vendor: 'Huawei' }; return t && (r.model = t), r } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function () { return { type: s.PLATFORMS_MAP.tablet, vendor: 'Nexus' } } }, { test: [/ipad/i], describe: function () { return { type: s.PLATFORMS_MAP.tablet, vendor: 'Apple', model: 'iPad' } } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function () { return { type: s.PLATFORMS_MAP.tablet, vendor: 'Apple', model: 'iPad' } } }, { test: [/kftt build/i], describe: function () { return { type: s.PLATFORMS_MAP.tablet, vendor: 'Amazon', model: 'Kindle Fire HD 7' } } }, { test: [/silk/i], describe: function () { return { type: s.PLATFORMS_MAP.tablet, vendor: 'Amazon' } } }, { test: [/tablet(?! pc)/i], describe: function () { return { type: s.PLATFORMS_MAP.tablet } } }, { test: function (e) { var t = e.test(/ipod|iphone/i); var r = e.test(/like (ipod|iphone)/i); return t && !r }, describe: function (e) { var t = i.default.getFirstMatch(/(ipod|iphone)/i, e); return { type: s.PLATFORMS_MAP.mobile, vendor: 'Apple', model: t } } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function () { return { type: s.PLATFORMS_MAP.mobile, vendor: 'Nexus' } } }, { test: [/[^-]mobi/i], describe: function () { return { type: s.PLATFORMS_MAP.mobile } } }, { test: function (e) { return e.getBrowserName(!0) === 'blackberry' }, describe: function () { return { type: s.PLATFORMS_MAP.mobile, vendor: 'BlackBerry' } } }, { test: function (e) { return e.getBrowserName(!0) === 'bada' }, describe: function () { return { type: s.PLATFORMS_MAP.mobile } } }, { test: function (e) { return e.getBrowserName() === 'windows phone' }, describe: function () { return { type: s.PLATFORMS_MAP.mobile, vendor: 'Microsoft' } } }, { test: function (e) { var t = Number(String(e.getOSVersion()).split('.')[0]); return e.getOSName(!0) === 'android' && t >= 3 }, describe: function () { return { type: s.PLATFORMS_MAP.tablet } } }, { test: function (e) { return e.getOSName(!0) === 'android' }, describe: function () { return { type: s.PLATFORMS_MAP.mobile } } }, { test: function (e) { return e.getOSName(!0) === 'macos' }, describe: function () { return { type: s.PLATFORMS_MAP.desktop, vendor: 'Apple' } } }, { test: function (e) { return e.getOSName(!0) === 'windows' }, describe: function () { return { type: s.PLATFORMS_MAP.desktop } } }, { test: function (e) { return e.getOSName(!0) === 'linux' }, describe: function () { return { type: s.PLATFORMS_MAP.desktop } } }, { test: function (e) { return e.getOSName(!0) === 'playstation 4' }, describe: function () { return { type: s.PLATFORMS_MAP.tv } } }, { test: function (e) { return e.getOSName(!0) === 'roku' }, describe: function () { return { type: s.PLATFORMS_MAP.tv } } }]; t.default = a, e.exports = t.default }, 95: function (e, t, r) { 'use strict'; t.__esModule = !0, t.default = void 0; var n; var i = (n = r(17)) && n.__esModule ? n : { default: n }; var s = r(18); var a = [{ test: function (e) { return e.getBrowserName(!0) === 'microsoft edge' }, describe: function (e) { if (/\sedg\//i.test(e)) return { name: s.ENGINE_MAP.Blink }; var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e); return { name: s.ENGINE_MAP.EdgeHTML, version: t } } }, { test: [/trident/i], describe: function (e) { var t = { name: s.ENGINE_MAP.Trident }; var r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: function (e) { return e.test(/presto/i) }, describe: function (e) { var t = { name: s.ENGINE_MAP.Presto }; var r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: function (e) { var t = e.test(/gecko/i); var r = e.test(/like gecko/i); return t && !r }, describe: function (e) { var t = { name: s.ENGINE_MAP.Gecko }; var r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }, { test: [/(apple)?webkit\/537\.36/i], describe: function () { return { name: s.ENGINE_MAP.Blink } } }, { test: [/(apple)?webkit/i], describe: function (e) { var t = { name: s.ENGINE_MAP.WebKit }; var r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e); return r && (t.version = r), t } }]; t.default = a, e.exports = t.default } })) }))
    /***/ },

  /***/ '3c4e':
  /***/ function (module, exports, __webpack_require__) {
    'use strict'

    var isMergeableObject = function isMergeableObject (value) {
      return isNonNullObject(value) &&
		!isSpecial(value)
    }

    function isNonNullObject (value) {
      return !!value && typeof value === 'object'
    }

    function isSpecial (value) {
      var stringValue = Object.prototype.toString.call(value)

      return stringValue === '[object RegExp]' ||
		stringValue === '[object Date]' ||
		isReactElement(value)
    }

    // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
    var canUseSymbol = typeof Symbol === 'function' && Symbol.for
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7

    function isReactElement (value) {
      return value.$$typeof === REACT_ELEMENT_TYPE
    }

    function emptyTarget (val) {
      return Array.isArray(val) ? [] : {}
    }

    function cloneUnlessOtherwiseSpecified (value, options) {
      return (options.clone !== false && options.isMergeableObject(value))
        ? deepmerge(emptyTarget(value), value, options)
        : value
    }

    function defaultArrayMerge (target, source, options) {
      return target.concat(source).map(function (element) {
        return cloneUnlessOtherwiseSpecified(element, options)
      })
    }

    function getMergeFunction (key, options) {
      if (!options.customMerge) {
        return deepmerge
      }
      var customMerge = options.customMerge(key)
      return typeof customMerge === 'function' ? customMerge : deepmerge
    }

    function getEnumerableOwnPropertySymbols (target) {
      return Object.getOwnPropertySymbols
        ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
          return Object.propertyIsEnumerable.call(target, symbol)
        })
        : []
    }

    function getKeys (target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
    }

    function propertyIsOnObject (object, property) {
      try {
        return property in object
      } catch (_) {
        return false
      }
    }

    // Protects from prototype poisoning and unexpected merging up the prototype chain.
    function propertyIsUnsafe (target, key) {
      return propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
		!(Object.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
			Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    }

    function mergeObject (target, source, options) {
      var destination = {}
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function (key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options)
        })
      }
      getKeys(source).forEach(function (key) {
        if (propertyIsUnsafe(target, key)) {
          return
        }

        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options)
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options)
        }
      })
      return destination
    }

    function deepmerge (target, source, options) {
      options = options || {}
      options.arrayMerge = options.arrayMerge || defaultArrayMerge
      options.isMergeableObject = options.isMergeableObject || isMergeableObject
      // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
      // implementations can use it. The caller may not replace it.
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified

      var sourceIsArray = Array.isArray(source)
      var targetIsArray = Array.isArray(target)
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray

      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options)
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options)
      } else {
        return mergeObject(target, source, options)
      }
    }

    deepmerge.all = function deepmergeAll (array, options) {
      if (!Array.isArray(array)) {
        throw new Error('first argument should be an array')
      }

      return array.reduce(function (prev, next) {
        return deepmerge(prev, next, options)
      }, {})
    }

    var deepmerge_1 = deepmerge

    module.exports = deepmerge_1
    /***/ },

  /***/ '58ca':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict';
    /* WEBPACK VAR INJECTION */(function (global) {
      /* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('3c4e')
      /* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__)
      /**
 * vue-meta v2.4.0
 * (c) 2020
 * - Declan de Wet
 * - Sébastien Chopin (@Atinux)
 * - Pim (@pimlie)
 * - All the amazing contributors
 * @license MIT
 */

      var version = '2.4.0'

      function _typeof (obj) {
        '@babel/helpers - typeof'

        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
          _typeof = function (obj) {
            return typeof obj
          }
        } else {
          _typeof = function (obj) {
            return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
          }
        }

        return _typeof(obj)
      }

      function _defineProperty (obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          obj[key] = value
        }

        return obj
      }

      function ownKeys (object, enumerableOnly) {
        var keys = Object.keys(object)

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })
          }
          keys.push.apply(keys, symbols)
        }

        return keys
      }

      function _objectSpread2 (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key])
            })
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
            })
          }
        }

        return target
      }

      function _toConsumableArray (arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
      }

      function _arrayWithoutHoles (arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr)
      }

      function _iterableToArray (iter) {
        if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter)
      }

      function _unsupportedIterableToArray (o, minLen) {
        if (!o) return
        if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
        var n = Object.prototype.toString.call(o).slice(8, -1)
        if (n === 'Object' && o.constructor) n = o.constructor.name
        if (n === 'Map' || n === 'Set') return Array.from(o)
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
      }

      function _arrayLikeToArray (arr, len) {
        if (len == null || len > arr.length) len = arr.length

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

        return arr2
      }

      function _nonIterableSpread () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }

      function _createForOfIteratorHelper (o, allowArrayLike) {
        var it

        if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') {
            if (it) o = it
            var i = 0

            var F = function () {}

            return {
              s: F,
              n: function () {
                if (i >= o.length) {
                  return {
                    done: true
                  }
                }
                return {
                  done: false,
                  value: o[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: F
            }
          }

          throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }

        var normalCompletion = true
        var didErr = false
        var err
        return {
          s: function () {
            it = o[Symbol.iterator]()
          },
          n: function () {
            var step = it.next()
            normalCompletion = step.done
            return step
          },
          e: function (e) {
            didErr = true
            err = e
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return()
            } finally {
              if (didErr) throw err
            }
          }
        }
      }

      /**
 * checks if passed argument is an array
 * @param  {any}  arg - the object to check
 * @return {Boolean} - true if `arg` is an array
 */
      function isArray (arg) {
        return Array.isArray(arg)
      }
      function isUndefined (arg) {
        return typeof arg === 'undefined'
      }
      function isObject (arg) {
        return _typeof(arg) === 'object'
      }
      function isPureObject (arg) {
        return _typeof(arg) === 'object' && arg !== null
      }
      function isFunction (arg) {
        return typeof arg === 'function'
      }
      function isString (arg) {
        return typeof arg === 'string'
      }

      function hasGlobalWindowFn () {
        try {
          return !isUndefined(window)
        } catch (e) {
          return false
        }
      }
      var hasGlobalWindow = hasGlobalWindowFn()

      var _global = hasGlobalWindow ? window : global

      var console = _global.console || {}
      function warn (str) {
        /* istanbul ignore next */
        if (!console || !console.warn) {
          return
        }

        console.warn(str)
      }
      var showWarningNotSupported = function showWarningNotSupported () {
        return warn('This vue app/component has no vue-meta configuration')
      }

      /**
 * These are constant variables used throughout the application.
 */
      // set some sane defaults
      var defaultInfo = {
        title: undefined,
        titleChunk: '',
        titleTemplate: '%s',
        htmlAttrs: {},
        bodyAttrs: {},
        headAttrs: {},
        base: [],
        link: [],
        meta: [],
        style: [],
        script: [],
        noscript: [],
        __dangerouslyDisableSanitizers: [],
        __dangerouslyDisableSanitizersByTagID: {}
      }
      var rootConfigKey = '_vueMeta' // This is the name of the component option that contains all the information that
      // gets converted to the various meta tags & attributes for the page.

      var keyName = 'metaInfo' // This is the attribute vue-meta arguments on elements to know which it should
      // manage and which it should ignore.

      var attribute = 'data-vue-meta' // This is the attribute that goes on the `html` tag to inform `vue-meta`
      // that the server has already generated the meta tags for the initial render.

      var ssrAttribute = 'data-vue-meta-server-rendered' // This is the property that tells vue-meta to overwrite (instead of append)
      // an item in a tag list. For example, if you have two `meta` tag list items
      // that both have `vmid` of "description", then vue-meta will overwrite the
      // shallowest one with the deepest one.

      var tagIDKeyName = 'vmid' // This is the key name for possible meta templates

      var metaTemplateKeyName = 'template' // This is the key name for the content-holding property

      var contentKeyName = 'content' // The id used for the ssr app

      var ssrAppId = 'ssr' // How long meta update

      var debounceWait = 10 // How long meta update

      var waitOnDestroyed = true
      var defaultOptions = {
        keyName: keyName,
        attribute: attribute,
        ssrAttribute: ssrAttribute,
        tagIDKeyName: tagIDKeyName,
        contentKeyName: contentKeyName,
        metaTemplateKeyName: metaTemplateKeyName,
        waitOnDestroyed: waitOnDestroyed,
        debounceWait: debounceWait,
        ssrAppId: ssrAppId
      } // might be a bit ugly, but minimizes the browser bundles a bit

      var defaultInfoKeys = Object.keys(defaultInfo) // The metaInfo property keys which are used to disable escaping

      var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]] // List of metaInfo property keys which are configuration options (and dont generate html)

      var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], 'changed'].concat(disableOptionKeys) // List of metaInfo property keys which only generates attributes and no tags

      var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]] // HTML elements which support the onload event

      var tagsSupportingOnload = ['link', 'style', 'script'] // HTML elements which dont have a head tag (shortened to our needs)
      // see: https://www.w3.org/TR/html52/document-metadata.html

      var tagsWithoutEndTag = ['base', 'meta', 'link'] // HTML elements which can have inner content (shortened to our needs)

      var tagsWithInnerContent = ['noscript', 'script', 'style'] // Attributes which are inserted as childNodes instead of HTMLAttribute

      var tagAttributeAsInnerContent = ['innerHTML', 'cssText', 'json']
      var tagProperties = ['once', 'skip', 'template'] // Attributes which should be added with data- prefix

      var commonDataAttributes = ['body', 'pbody'] // from: https://github.com/kangax/html-minifier/blob/gh-pages/src/htmlminifier.js#L202

      var booleanHtmlAttributes = ['allowfullscreen', 'amp', 'amp-boilerplate', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible']

      var batchId = null
      function triggerUpdate (_ref, rootVm, hookName) {
        var debounceWait = _ref.debounceWait

        // if an update was triggered during initialization or when an update was triggered by the
        // metaInfo watcher, set initialized to null
        // then we keep falsy value but know we need to run a triggerUpdate after initialization
        if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === 'watcher')) {
          rootVm[rootConfigKey].initialized = null
        }

        if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
          // batch potential DOM updates to prevent extraneous re-rendering
          // eslint-disable-next-line no-void
          batchUpdate(function () {
            return void rootVm.$meta().refresh()
          }, debounceWait)
        }
      }
      /**
 * Performs a batched update.
 *
 * @param  {(null|Number)} id - the ID of this update
 * @param  {Function} callback - the update to perform
 * @return {Number} id - a new ID
 */

      function batchUpdate (callback, timeout) {
        timeout = timeout === undefined ? 10 : timeout

        if (!timeout) {
          callback()
          return
        }

        clearTimeout(batchId)
        batchId = setTimeout(function () {
          callback()
        }, timeout)
        return batchId
      }

      /*
 * To reduce build size, this file provides simple polyfills without
 * overly excessive type checking and without modifying
 * the global Array.prototype
 * The polyfills are automatically removed in the commonjs build
 * Also, only files in client/ & shared/ should use these functions
 * files in server/ still use normal js function
 */
      function find (array, predicate, thisArg) {
        if (!Array.prototype.find) {
          // idx needs to be a Number, for..in returns string
          for (var idx = 0; idx < array.length; idx++) {
            if (predicate.call(thisArg, array[idx], idx, array)) {
              return array[idx]
            }
          }

          return
        }

        return array.find(predicate, thisArg)
      }
      function findIndex (array, predicate, thisArg) {
        if (!Array.prototype.findIndex) {
          // idx needs to be a Number, for..in returns string
          for (var idx = 0; idx < array.length; idx++) {
            if (predicate.call(thisArg, array[idx], idx, array)) {
              return idx
            }
          }

          return -1
        }

        return array.findIndex(predicate, thisArg)
      }
      function toArray (arg) {
        if (!Array.from) {
          return Array.prototype.slice.call(arg)
        }

        return Array.from(arg)
      }
      function includes (array, value) {
        if (!Array.prototype.includes) {
          for (var idx in array) {
            if (array[idx] === value) {
              return true
            }
          }

          return false
        }

        return array.includes(value)
      }

      var querySelector = function querySelector (arg, el) {
        return (el || document).querySelectorAll(arg)
      }
      function getTag (tags, tag) {
        if (!tags[tag]) {
          tags[tag] = document.getElementsByTagName(tag)[0]
        }

        return tags[tag]
      }
      function getElementsKey (_ref) {
        var body = _ref.body
        var pbody = _ref.pbody
        return body ? 'body' : pbody ? 'pbody' : 'head'
      }
      function queryElements (parentNode, _ref2, attributes) {
        var appId = _ref2.appId
        var attribute = _ref2.attribute
        var type = _ref2.type
        var tagIDKeyName = _ref2.tagIDKeyName
        attributes = attributes || {}
        var queries = [''.concat(type, '[').concat(attribute, '="').concat(appId, '"]'), ''.concat(type, '[data-').concat(tagIDKeyName, ']')].map(function (query) {
          for (var key in attributes) {
            var val = attributes[key]
            var attributeValue = val && val !== true ? '="'.concat(val, '"') : ''
            query += '[data-'.concat(key).concat(attributeValue, ']')
          }

          return query
        })
        return toArray(querySelector(queries.join(', '), parentNode))
      }
      function removeElementsByAppId (_ref3, appId) {
        var attribute = _ref3.attribute
        toArray(querySelector('['.concat(attribute, '="').concat(appId, '"]'))).map(function (el) {
          return el.remove()
        })
      }
      function removeAttribute (el, attributeName) {
        el.removeAttribute(attributeName)
      }

      function hasMetaInfo (vm) {
        vm = vm || this
        return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]))
      } // a component is in a metaInfo branch when itself has meta info or one of its (grand-)children has

      function inMetaInfoBranch (vm) {
        vm = vm || this
        return vm && !isUndefined(vm[rootConfigKey])
      }

      function pause (rootVm, refresh) {
        rootVm[rootConfigKey].pausing = true
        return function () {
          return resume(rootVm, refresh)
        }
      }
      function resume (rootVm, refresh) {
        rootVm[rootConfigKey].pausing = false

        if (refresh || refresh === undefined) {
          return rootVm.$meta().refresh()
        }
      }

      function addNavGuards (rootVm) {
        var router = rootVm.$router // return when nav guards already added or no router exists

        if (rootVm[rootConfigKey].navGuards || !router) {
          /* istanbul ignore next */
          return
        }

        rootVm[rootConfigKey].navGuards = true
        router.beforeEach(function (to, from, next) {
          pause(rootVm)
          next()
        })
        router.afterEach(function () {
          rootVm.$nextTick(function () {
            var _resume = resume(rootVm)
            var metaInfo = _resume.metaInfo

            if (metaInfo && isFunction(metaInfo.afterNavigation)) {
              metaInfo.afterNavigation(metaInfo)
            }
          })
        })
      }

      var appId = 1
      function createMixin (Vue, options) {
        // for which Vue lifecycle hooks should the metaInfo be refreshed
        var updateOnLifecycleHook = ['activated', 'deactivated', 'beforeMount']
        var wasServerRendered = false // watch for client side component updates

        return {
          beforeCreate: function beforeCreate () {
            var _this2 = this

            var rootKey = '$root'
            var $root = this[rootKey]
            var $options = this.$options
            var devtoolsEnabled = Vue.config.devtools
            Object.defineProperty(this, '_hasMetaInfo', {
              configurable: true,
              get: function get () {
                // Show deprecation warning once when devtools enabled
                if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
                  warn('VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead')
                  $root[rootConfigKey].deprecationWarningShown = true
                }

                return hasMetaInfo(this)
              }
            })

            if (this === $root) {
              $root.$once('hook:beforeMount', function () {
                wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute('data-server-rendered') // In most cases when you have a SSR app it will be the first app thats gonna be
                // initiated, if we cant detect the data-server-rendered attribute from Vue but we
                // do see our own ssrAttribute then _assume_ the Vue app with appId 1 is the ssr app
                // attempted fix for #404 & #562, but we rly need to refactor how we pass appIds from
                // ssr to the client

                if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
                  var htmlTag = getTag({}, 'html')
                  wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute)
                }
              })
            } // Add a marker to know if it uses metaInfo
            // _vnode is used to know that it's attached to a real component
            // useful if we use some mixin to add some meta tags (like nuxt-i18n)

            if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
              return
            }

            if (!$root[rootConfigKey]) {
              $root[rootConfigKey] = {
                appId: appId
              }
              appId++

              if (devtoolsEnabled && $root.$options[options.keyName]) {
                // use nextTick so the children should be added to $root
                this.$nextTick(function () {
                  // find the first child that lists fnOptions
                  var child = find($root.$children, function (c) {
                    return c.$vnode && c.$vnode.fnOptions
                  })

                  if (child && child.$vnode.fnOptions[options.keyName]) {
                    warn('VueMeta has detected a possible global mixin which adds a '.concat(options.keyName, ' property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead'))
                  }
                })
              }
            } // to speed up updates we keep track of branches which have a component with vue-meta info defined
            // if _vueMeta = true it has info, if _vueMeta = false a child has info

            if (!this[rootConfigKey]) {
              this[rootConfigKey] = true
              var parent = this.$parent

              while (parent && parent !== $root) {
                if (isUndefined(parent[rootConfigKey])) {
                  parent[rootConfigKey] = false
                }

                parent = parent.$parent
              }
            } // coerce function-style metaInfo to a computed prop so we can observe
            // it on creation

            if (isFunction($options[options.keyName])) {
              $options.computed = $options.computed || {}
              $options.computed.$metaInfo = $options[options.keyName]

              if (!this.$isServer) {
                // if computed $metaInfo exists, watch it for updates & trigger a refresh
                // when it changes (i.e. automatically handle async actions that affect metaInfo)
                // credit for this suggestion goes to [Sébastien Chopin](https://github.com/Atinux)
                this.$on('hook:created', function () {
                  this.$watch('$metaInfo', function () {
                    triggerUpdate(options, this[rootKey], 'watcher')
                  })
                })
              }
            } // force an initial refresh on page load and prevent other lifecycleHooks
            // to triggerUpdate until this initial refresh is finished
            // this is to make sure that when a page is opened in an inactive tab which
            // has throttled rAF/timers we still immediately set the page title

            if (isUndefined($root[rootConfigKey].initialized)) {
              $root[rootConfigKey].initialized = this.$isServer

              if (!$root[rootConfigKey].initialized) {
                if (!$root[rootConfigKey].initializedSsr) {
                  $root[rootConfigKey].initializedSsr = true
                  this.$on('hook:beforeMount', function () {
                    var $root = this[rootKey] // if this Vue-app was server rendered, set the appId to 'ssr'
                    // only one SSR app per page is supported

                    if (wasServerRendered) {
                      $root[rootConfigKey].appId = options.ssrAppId
                    }
                  })
                } // we use the mounted hook here as on page load

                this.$on('hook:mounted', function () {
                  var $root = this[rootKey]

                  if ($root[rootConfigKey].initialized) {
                    return
                  } // used in triggerUpdate to check if a change was triggered
                  // during initialization

                  $root[rootConfigKey].initializing = true // refresh meta in nextTick so all child components have loaded

                  this.$nextTick(function () {
                    var _$root$$meta$refresh = $root.$meta().refresh()
                    var tags = _$root$$meta$refresh.tags
                    var metaInfo = _$root$$meta$refresh.metaInfo // After ssr hydration (identifier by tags === false) check
                    // if initialized was set to null in triggerUpdate. That'd mean
                    // that during initilazation changes where triggered which need
                    // to be applied OR a metaInfo watcher was triggered before the
                    // current hook was called
                    // (during initialization all changes are blocked)

                    if (tags === false && $root[rootConfigKey].initialized === null) {
                      this.$nextTick(function () {
                        return triggerUpdate(options, $root, 'init')
                      })
                    }

                    $root[rootConfigKey].initialized = true
                    delete $root[rootConfigKey].initializing // add the navigation guards if they havent been added yet
                    // they are needed for the afterNavigation callback

                    if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
                      addNavGuards($root)
                    }
                  })
                }) // add the navigation guards if requested

                if (options.refreshOnceOnNavigation) {
                  addNavGuards($root)
                }
              }
            }

            this.$on('hook:destroyed', function () {
              var _this = this

              // do not trigger refresh:
              // - when user configured to not wait for transitions on destroyed
              // - when the component doesnt have a parent
              // - doesnt have metaInfo defined
              if (!this.$parent || !hasMetaInfo(this)) {
                return
              }

              delete this._hasMetaInfo
              this.$nextTick(function () {
                if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
                  triggerUpdate(options, _this.$root, 'destroyed')
                  return
                } // Wait that element is hidden before refreshing meta tags (to support animations)

                var interval = setInterval(function () {
                  if (_this.$el && _this.$el.offsetParent !== null) {
                    /* istanbul ignore next line */
                    return
                  }

                  clearInterval(interval)
                  triggerUpdate(options, _this.$root, 'destroyed')
                }, 50)
              })
            }) // do not trigger refresh on the server side

            if (this.$isServer) {
              /* istanbul ignore next */
              return
            } // no need to add this hooks on server side

            updateOnLifecycleHook.forEach(function (lifecycleHook) {
              _this2.$on('hook:'.concat(lifecycleHook), function () {
                triggerUpdate(options, this[rootKey], lifecycleHook)
              })
            })
          }
        }
      }

      function setOptions (options) {
        // combine options
        options = isObject(options) ? options : {} // The options are set like this so they can
        // be minified by terser while keeping the
        // user api intact
        // terser --mangle-properties keep_quoted=strict

        /* eslint-disable dot-notation */

        return {
          keyName: options['keyName'] || defaultOptions.keyName,
          attribute: options['attribute'] || defaultOptions.attribute,
          ssrAttribute: options['ssrAttribute'] || defaultOptions.ssrAttribute,
          tagIDKeyName: options['tagIDKeyName'] || defaultOptions.tagIDKeyName,
          contentKeyName: options['contentKeyName'] || defaultOptions.contentKeyName,
          metaTemplateKeyName: options['metaTemplateKeyName'] || defaultOptions.metaTemplateKeyName,
          debounceWait: isUndefined(options['debounceWait']) ? defaultOptions.debounceWait : options['debounceWait'],
          waitOnDestroyed: isUndefined(options['waitOnDestroyed']) ? defaultOptions.waitOnDestroyed : options['waitOnDestroyed'],
          ssrAppId: options['ssrAppId'] || defaultOptions.ssrAppId,
          refreshOnceOnNavigation: !!options['refreshOnceOnNavigation']
        }
        /* eslint-enable dot-notation */
      }
      function getOptions (options) {
        var optionsCopy = {}

        for (var key in options) {
          optionsCopy[key] = options[key]
        }

        return optionsCopy
      }

      function ensureIsArray (arg, key) {
        if (!key || !isObject(arg)) {
          return isArray(arg) ? arg : []
        }

        if (!isArray(arg[key])) {
          arg[key] = []
        }

        return arg
      }

      var serverSequences = [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/"/g, '&quot;'], [/'/g, '&#x27;']]
      var clientSequences = [[/&/g, '&'], [/</g, '<'], [/>/g, '>'], [/"/g, '"'], [/'/g, "'"]] // sanitizes potentially dangerous characters

      function escape (info, options, escapeOptions, escapeKeys) {
        var tagIDKeyName = options.tagIDKeyName
        var _escapeOptions$doEsca = escapeOptions.doEscape
        var doEscape = _escapeOptions$doEsca === void 0 ? function (v) {
          return v
        } : _escapeOptions$doEsca
        var escaped = {}

        for (var key in info) {
          var value = info[key] // no need to escape configuration options

          if (includes(metaInfoOptionKeys, key)) {
            escaped[key] = value
            continue
          } // do not use destructuring for disableOptionKeys, it increases transpiled size
          // due to var checks while we are guaranteed the structure of the cb

          var disableKey = disableOptionKeys[0]

          if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
            // this info[key] doesnt need to escaped if the option is listed in __dangerouslyDisableSanitizers
            escaped[key] = value
            continue
          }

          var tagId = info[tagIDKeyName]

          if (tagId) {
            disableKey = disableOptionKeys[1] // keys which are listed in __dangerouslyDisableSanitizersByTagID for the current vmid do not need to be escaped

            if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
              escaped[key] = value
              continue
            }
          }

          if (isString(value)) {
            escaped[key] = doEscape(value)
          } else if (isArray(value)) {
            escaped[key] = value.map(function (v) {
              if (isPureObject(v)) {
                return escape(v, options, escapeOptions, true)
              }

              return doEscape(v)
            })
          } else if (isPureObject(value)) {
            escaped[key] = escape(value, options, escapeOptions, true)
          } else {
            escaped[key] = value
          }

          if (escapeKeys) {
            var escapedKey = doEscape(key)

            if (key !== escapedKey) {
              escaped[escapedKey] = escaped[key]
              delete escaped[key]
            }
          }
        }

        return escaped
      }
      function escapeMetaInfo (options, info, escapeSequences) {
        escapeSequences = escapeSequences || [] // do not use destructuring for seq, it increases transpiled size
        // due to var checks while we are guaranteed the structure of the cb

        var escapeOptions = {
          doEscape: function doEscape (value) {
            return escapeSequences.reduce(function (val, seq) {
              return val.replace(seq[0], seq[1])
            }, value)
          }
        }
        disableOptionKeys.forEach(function (disableKey, index) {
          if (index === 0) {
            ensureIsArray(info, disableKey)
          } else if (index === 1) {
            for (var key in info[disableKey]) {
              ensureIsArray(info[disableKey], key)
            }
          }

          escapeOptions[disableKey] = info[disableKey]
        }) // begin sanitization

        return escape(info, options, escapeOptions)
      }

      function applyTemplate (_ref, headObject, template, chunk) {
        var component = _ref.component
        var metaTemplateKeyName = _ref.metaTemplateKeyName
        var contentKeyName = _ref.contentKeyName

        if (template === true || headObject[metaTemplateKeyName] === true) {
          // abort, template was already applied
          return false
        }

        if (isUndefined(template) && headObject[metaTemplateKeyName]) {
          template = headObject[metaTemplateKeyName]
          headObject[metaTemplateKeyName] = true
        } // return early if no template defined

        if (!template) {
          // cleanup faulty template properties
          delete headObject[metaTemplateKeyName]
          return false
        }

        if (isUndefined(chunk)) {
          chunk = headObject[contentKeyName]
        }

        headObject[contentKeyName] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk)
        return true
      }

      function _arrayMerge (_ref, target, source) {
        var component = _ref.component
        var tagIDKeyName = _ref.tagIDKeyName
        var metaTemplateKeyName = _ref.metaTemplateKeyName
        var contentKeyName = _ref.contentKeyName
        // we concat the arrays without merging objects contained in,
        // but we check for a `vmid` property on each object in the array
        // using an O(1) lookup associative array exploit
        var destination = []

        if (!target.length && !source.length) {
          return destination
        }

        target.forEach(function (targetItem, targetIndex) {
          // no tagID so no need to check for duplicity
          if (!targetItem[tagIDKeyName]) {
            destination.push(targetItem)
            return
          }

          var sourceIndex = findIndex(source, function (item) {
            return item[tagIDKeyName] === targetItem[tagIDKeyName]
          })
          var sourceItem = source[sourceIndex] // source doesnt contain any duplicate vmid's, we can keep targetItem

          if (sourceIndex === -1) {
            destination.push(targetItem)
            return
          } // when sourceItem explictly defines contentKeyName or innerHTML as undefined, its
          // an indication that we need to skip the default behaviour or child has preference over parent
          // which means we keep the targetItem and ignore/remove the sourceItem

          if (contentKeyName in sourceItem && sourceItem[contentKeyName] === undefined || 'innerHTML' in sourceItem && sourceItem.innerHTML === undefined) {
            destination.push(targetItem) // remove current index from source array so its not concatenated to destination below

            source.splice(sourceIndex, 1)
            return
          } // we now know that targetItem is a duplicate and we should ignore it in favor of sourceItem
          // if source specifies null as content then ignore both the target as the source

          if (sourceItem[contentKeyName] === null || sourceItem.innerHTML === null) {
            // remove current index from source array so its not concatenated to destination below
            source.splice(sourceIndex, 1)
            return
          } // now we only need to check if the target has a template to combine it with the source

          var targetTemplate = targetItem[metaTemplateKeyName]

          if (!targetTemplate) {
            return
          }

          var sourceTemplate = sourceItem[metaTemplateKeyName]

          if (!sourceTemplate) {
            // use parent template and child content
            applyTemplate({
              component: component,
              metaTemplateKeyName: metaTemplateKeyName,
              contentKeyName: contentKeyName
            }, sourceItem, targetTemplate) // set template to true to indicate template was already applied

            sourceItem.template = true
            return
          }

          if (!sourceItem[contentKeyName]) {
            // use parent content and child template
            applyTemplate({
              component: component,
              metaTemplateKeyName: metaTemplateKeyName,
              contentKeyName: contentKeyName
            }, sourceItem, undefined, targetItem[contentKeyName])
          }
        })
        return destination.concat(source)
      }
      var warningShown = false
      function merge (target, source, options) {
        options = options || {} // remove properties explicitly set to false so child components can
        // optionally _not_ overwrite the parents content
        // (for array properties this is checked in arrayMerge)

        if (source.title === undefined) {
          delete source.title
        }

        metaInfoAttributeKeys.forEach(function (attrKey) {
          if (!source[attrKey]) {
            return
          }

          for (var key in source[attrKey]) {
            if (key in source[attrKey] && source[attrKey][key] === undefined) {
              if (includes(booleanHtmlAttributes, key) && !warningShown) {
                warn('VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details')
                warningShown = true
              }

              delete source[attrKey][key]
            }
          }
        })
        return deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(target, source, {
          arrayMerge: function arrayMerge (t, s) {
            return _arrayMerge(options, t, s)
          }
        })
      }

      function getComponentMetaInfo (options, component) {
        return getComponentOption(options || {}, component, defaultInfo)
      }
      /**
 * Returns the `opts.option` $option value of the given `opts.component`.
 * If methods are encountered, they will be bound to the component context.
 * If `opts.deep` is true, will recursively merge all child component
 * `opts.option` $option values into the returned result.
 *
 * @param  {Object} opts - options
 * @param  {Object} opts.component - Vue component to fetch option data from
 * @param  {Boolean} opts.deep - look for data in child components as well?
 * @param  {Function} opts.arrayMerge - how should arrays be merged?
 * @param  {String} opts.keyName - the name of the option to look for
 * @param  {Object} [result={}] - result so far
 * @return {Object} result - final aggregated result
 */

      function getComponentOption (options, component, result) {
        result = result || {}

        if (component._inactive) {
          return result
        }

        options = options || {}
        var _options = options
        var keyName = _options.keyName
        var $metaInfo = component.$metaInfo
        var $options = component.$options
        var $children = component.$children // only collect option data if it exists

        if ($options[keyName]) {
          // if $metaInfo exists then [keyName] was defined as a function
          // and set to the computed prop $metaInfo in the mixin
          // using the computed prop should be a small performance increase
          // because Vue caches those internally
          var data = $metaInfo || $options[keyName] // only merge data with result when its an object
          // eg it could be a function when metaInfo() returns undefined
          // dueo to the or statement above

          if (isObject(data)) {
            result = merge(result, data, options)
          }
        } // collect & aggregate child options if deep = true

        if ($children.length) {
          $children.forEach(function (childComponent) {
            // check if the childComponent is in a branch
            // return otherwise so we dont walk all component branches unnecessarily
            if (!inMetaInfoBranch(childComponent)) {
              return
            }

            result = getComponentOption(options, childComponent, result)
          })
        }

        return result
      }

      var callbacks = []
      function isDOMComplete (d) {
        return (d || document).readyState === 'complete'
      }
      function addCallback (query, callback) {
        if (arguments.length === 1) {
          callback = query
          query = ''
        }

        callbacks.push([query, callback])
      }
      function addCallbacks (_ref, type, tags, autoAddListeners) {
        var tagIDKeyName = _ref.tagIDKeyName
        var hasAsyncCallback = false
        tags.forEach(function (tag) {
          if (!tag[tagIDKeyName] || !tag.callback) {
            return
          }

          hasAsyncCallback = true
          addCallback(''.concat(type, '[data-').concat(tagIDKeyName, '="').concat(tag[tagIDKeyName], '"]'), tag.callback)
        })

        if (!autoAddListeners || !hasAsyncCallback) {
          return hasAsyncCallback
        }

        return addListeners()
      }
      function addListeners () {
        if (isDOMComplete()) {
          applyCallbacks()
          return
        } // Instead of using a MutationObserver, we just apply

        /* istanbul ignore next */

        document.onreadystatechange = function () {
          applyCallbacks()
        }
      }
      function applyCallbacks (matchElement) {
        callbacks.forEach(function (args) {
          // do not use destructuring for args, it increases transpiled size
          // due to var checks while we are guaranteed the structure of the cb
          var query = args[0]
          var callback = args[1]
          var selector = ''.concat(query, '[onload="this.__vm_l=1"]')
          var elements = []

          if (!matchElement) {
            elements = toArray(querySelector(selector))
          }

          if (matchElement && matchElement.matches(selector)) {
            elements = [matchElement]
          }

          elements.forEach(function (element) {
            /* __vm_cb: whether the load callback has been called
       * __vm_l: set by onload attribute, whether the element was loaded
       * __vm_ev: whether the event listener was added or not
       */
            if (element.__vm_cb) {
              return
            }

            var onload = function onload () {
              /* Mark that the callback for this element has already been called,
         * this prevents the callback to run twice in some (rare) conditions
         */
              element.__vm_cb = true
              /* onload needs to be removed because we only need the
         * attribute after ssr and if we dont remove it the node
         * will fail isEqualNode on the client
         */

              removeAttribute(element, 'onload')
              callback(element)
            }
            /* IE9 doesnt seem to load scripts synchronously,
       * causing a script sometimes/often already to be loaded
       * when we add the event listener below (thus adding an onload event
       * listener has no use because it will never be triggered).
       * Therefore we add the onload attribute during ssr, and
       * check here if it was already loaded or not
       */

            if (element.__vm_l) {
              onload()
              return
            }

            if (!element.__vm_ev) {
              element.__vm_ev = true
              element.addEventListener('load', onload)
            }
          })
        })
      }

      // instead of adding it to the html

      var attributeMap = {}
      /**
 * Updates the document's html tag attributes
 *
 * @param  {Object} attrs - the new document html attributes
 * @param  {HTMLElement} tag - the HTMLElement tag to update with new attrs
 */

      function updateAttribute (appId, options, type, attrs, tag) {
        var _ref = options || {}
        var attribute = _ref.attribute

        var vueMetaAttrString = tag.getAttribute(attribute)

        if (vueMetaAttrString) {
          attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString))
          removeAttribute(tag, attribute)
        }

        var data = attributeMap[type] || {}
        var toUpdate = [] // remove attributes from the map
        // which have been removed for this appId

        for (var attr in data) {
          if (data[attr] !== undefined && appId in data[attr]) {
            toUpdate.push(attr)

            if (!attrs[attr]) {
              delete data[attr][appId]
            }
          }
        }

        for (var _attr in attrs) {
          var attrData = data[_attr]

          if (!attrData || attrData[appId] !== attrs[_attr]) {
            toUpdate.push(_attr)

            if (attrs[_attr] !== undefined) {
              data[_attr] = data[_attr] || {}
              data[_attr][appId] = attrs[_attr]
            }
          }
        }

        for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
          var _attr2 = _toUpdate[_i]
          var _attrData = data[_attr2]
          var attrValues = []

          for (var _appId in _attrData) {
            Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]))
          }

          if (attrValues.length) {
            var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? '' : attrValues.filter(function (v) {
              return v !== undefined
            }).join(' ')
            tag.setAttribute(_attr2, attrValue)
          } else {
            removeAttribute(tag, _attr2)
          }
        }

        attributeMap[type] = data
      }

      /**
 * Updates the document title
 *
 * @param  {String} title - the new title of the document
 */
      function updateTitle (title) {
        if (!title && title !== '') {
          return
        }

        document.title = title
      }

      /**
 * Updates meta tags inside <head> and <body> on the client. Borrowed from `react-helmet`:
 * https://github.com/nfl/react-helmet/blob/004d448f8de5f823d10f838b02317521180f34da/src/Helmet.js#L195-L245
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} type - the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - a representation of what tags changed
 */

      function updateTag (appId, options, type, tags, head, body) {
        var _ref = options || {}
        var attribute = _ref.attribute
        var tagIDKeyName = _ref.tagIDKeyName

        var dataAttributes = commonDataAttributes.slice()
        dataAttributes.push(tagIDKeyName)
        var newElements = []
        var queryOptions = {
          appId: appId,
          attribute: attribute,
          type: type,
          tagIDKeyName: tagIDKeyName
        }
        var currentElements = {
          head: queryElements(head, queryOptions),
          pbody: queryElements(body, queryOptions, {
            pbody: true
          }),
          body: queryElements(body, queryOptions, {
            body: true
          })
        }

        if (tags.length > 1) {
          // remove duplicates that could have been found by merging tags
          // which include a mixin with metaInfo and that mixin is used
          // by multiple components on the same page
          var found = []
          tags = tags.filter(function (x) {
            var k = JSON.stringify(x)
            var res = !includes(found, k)
            found.push(k)
            return res
          })
        }

        tags.forEach(function (tag) {
          if (tag.skip) {
            return
          }

          var newElement = document.createElement(type)

          if (!tag.once) {
            newElement.setAttribute(attribute, appId)
          }

          Object.keys(tag).forEach(function (attr) {
            /* istanbul ignore next */
            if (includes(tagProperties, attr)) {
              return
            }

            if (attr === 'innerHTML') {
              newElement.innerHTML = tag.innerHTML
              return
            }

            if (attr === 'json') {
              newElement.innerHTML = JSON.stringify(tag.json)
              return
            }

            if (attr === 'cssText') {
              if (newElement.styleSheet) {
                /* istanbul ignore next */
                newElement.styleSheet.cssText = tag.cssText
              } else {
                newElement.appendChild(document.createTextNode(tag.cssText))
              }

              return
            }

            if (attr === 'callback') {
              newElement.onload = function () {
                return tag[attr](newElement)
              }

              return
            }

            var _attr = includes(dataAttributes, attr) ? 'data-'.concat(attr) : attr

            var isBooleanAttribute = includes(booleanHtmlAttributes, attr)

            if (isBooleanAttribute && !tag[attr]) {
              return
            }

            var value = isBooleanAttribute ? '' : tag[attr]
            newElement.setAttribute(_attr, value)
          })
          var oldElements = currentElements[getElementsKey(tag)] // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

          var indexToDelete
          var hasEqualElement = oldElements.some(function (existingTag, index) {
            indexToDelete = index
            return newElement.isEqualNode(existingTag)
          })

          if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
            oldElements.splice(indexToDelete, 1)
          } else {
            newElements.push(newElement)
          }
        })
        var oldElements = []

        for (var _type in currentElements) {
          Array.prototype.push.apply(oldElements, currentElements[_type])
        } // remove old elements

        oldElements.forEach(function (element) {
          element.parentNode.removeChild(element)
        }) // insert new elements

        newElements.forEach(function (element) {
          if (element.hasAttribute('data-body')) {
            body.appendChild(element)
            return
          }

          if (element.hasAttribute('data-pbody')) {
            body.insertBefore(element, body.firstChild)
            return
          }

          head.appendChild(element)
        })
        return {
          oldTags: oldElements,
          newTags: newElements
        }
      }

      /**
 * Performs client-side updates when new meta info is received
 *
 * @param  {Object} newInfo - the meta info to update to
 */

      function updateClientMetaInfo (appId, options, newInfo) {
        options = options || {}
        var _options = options
        var ssrAttribute = _options.ssrAttribute
        var ssrAppId = _options.ssrAppId // only cache tags for current update

        var tags = {}
        var htmlTag = getTag(tags, 'html') // if this is a server render, then dont update

        if (appId === ssrAppId && htmlTag.hasAttribute(ssrAttribute)) {
          // remove the server render attribute so we can update on (next) changes
          removeAttribute(htmlTag, ssrAttribute) // add load callbacks if the

          var addLoadListeners = false
          tagsSupportingOnload.forEach(function (type) {
            if (newInfo[type] && addCallbacks(options, type, newInfo[type])) {
              addLoadListeners = true
            }
          })

          if (addLoadListeners) {
            addListeners()
          }

          return false
        } // initialize tracked changes

        var tagsAdded = {}
        var tagsRemoved = {}

        for (var type in newInfo) {
          // ignore these
          if (includes(metaInfoOptionKeys, type)) {
            continue
          }

          if (type === 'title') {
            // update the title
            updateTitle(newInfo.title)
            continue
          }

          if (includes(metaInfoAttributeKeys, type)) {
            var tagName = type.substr(0, 4)
            updateAttribute(appId, options, type, newInfo[type], getTag(tags, tagName))
            continue
          } // tags should always be an array, ignore if it isnt

          if (!isArray(newInfo[type])) {
            continue
          }

          var _updateTag = updateTag(appId, options, type, newInfo[type], getTag(tags, 'head'), getTag(tags, 'body'))
          var oldTags = _updateTag.oldTags
          var newTags = _updateTag.newTags

          if (newTags.length) {
            tagsAdded[type] = newTags
            tagsRemoved[type] = oldTags
          }
        }

        return {
          tagsAdded: tagsAdded,
          tagsRemoved: tagsRemoved
        }
      }

      var appsMetaInfo
      function addApp (rootVm, appId, options) {
        return {
          set: function set (metaInfo) {
            return setMetaInfo(rootVm, appId, options, metaInfo)
          },
          remove: function remove () {
            return removeMetaInfo(rootVm, appId, options)
          }
        }
      }
      function setMetaInfo (rootVm, appId, options, metaInfo) {
        // if a vm exists _and_ its mounted then immediately update
        if (rootVm && rootVm.$el) {
          return updateClientMetaInfo(appId, options, metaInfo)
        } // store for later, the info
        // will be set on the first refresh

        appsMetaInfo = appsMetaInfo || {}
        appsMetaInfo[appId] = metaInfo
      }
      function removeMetaInfo (rootVm, appId, options) {
        if (rootVm && rootVm.$el) {
          var tags = {}

          var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys)
          var _step

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var type = _step.value
              var tagName = type.substr(0, 4)
              updateAttribute(appId, options, type, {}, getTag(tags, tagName))
            }
          } catch (err) {
            _iterator.e(err)
          } finally {
            _iterator.f()
          }

          return removeElementsByAppId(options, appId)
        }

        if (appsMetaInfo[appId]) {
          delete appsMetaInfo[appId]
          clearAppsMetaInfo()
        }
      }
      function getAppsMetaInfo () {
        return appsMetaInfo
      }
      function clearAppsMetaInfo (force) {
        if (force || !Object.keys(appsMetaInfo).length) {
          appsMetaInfo = undefined
        }
      }

      /**
 * Returns the correct meta info for the given component
 * (child components will overwrite parent meta info)
 *
 * @param  {Object} component - the Vue instance to get meta info from
 * @return {Object} - returned meta info
 */

      function getMetaInfo (options, info, escapeSequences, component) {
        options = options || {}
        escapeSequences = escapeSequences || []
        var _options = options
        var tagIDKeyName = _options.tagIDKeyName // Remove all "template" tags from meta
        // backup the title chunk in case user wants access to it

        if (info.title) {
          info.titleChunk = info.title
        } // replace title with populated template

        if (info.titleTemplate && info.titleTemplate !== '%s') {
          applyTemplate({
            component: component,
            contentKeyName: 'title'
          }, info, info.titleTemplate, info.titleChunk || '')
        } // convert base tag to an array so it can be handled the same way
        // as the other tags

        if (info.base) {
          info.base = Object.keys(info.base).length ? [info.base] : []
        }

        if (info.meta) {
          // remove meta items with duplicate vmid's
          info.meta = info.meta.filter(function (metaItem, index, arr) {
            var hasVmid = !!metaItem[tagIDKeyName]

            if (!hasVmid) {
              return true
            }

            var isFirstItemForVmid = index === findIndex(arr, function (item) {
              return item[tagIDKeyName] === metaItem[tagIDKeyName]
            })
            return isFirstItemForVmid
          }) // apply templates if needed

          info.meta.forEach(function (metaObject) {
            return applyTemplate(options, metaObject)
          })
        }

        return escapeMetaInfo(options, info, escapeSequences)
      }

      /**
 * When called, will update the current meta info with new meta info.
 * Useful when updating meta info as the result of an asynchronous
 * action that resolves after the initial render takes place.
 *
 * Credit to [Sébastien Chopin](https://github.com/Atinux) for the suggestion
 * to implement this method.
 *
 * @return {Object} - new meta info
 */

      function refresh (rootVm, options) {
        options = options || {} // make sure vue-meta was initiated

        if (!rootVm[rootConfigKey]) {
          showWarningNotSupported()
          return {}
        } // collect & aggregate all metaInfo $options

        var rawInfo = getComponentMetaInfo(options, rootVm)
        var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm)
        var appId = rootVm[rootConfigKey].appId
        var tags = updateClientMetaInfo(appId, options, metaInfo) // emit "event" with new info

        if (tags && isFunction(metaInfo.changed)) {
          metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved)
          tags = {
            addedTags: tags.tagsAdded,
            removedTags: tags.tagsRemoved
          }
        }

        var appsMetaInfo = getAppsMetaInfo()

        if (appsMetaInfo) {
          for (var additionalAppId in appsMetaInfo) {
            updateClientMetaInfo(additionalAppId, options, appsMetaInfo[additionalAppId])
            delete appsMetaInfo[additionalAppId]
          }

          clearAppsMetaInfo(true)
        }

        return {
          vm: rootVm,
          metaInfo: metaInfo,
          // eslint-disable-line object-shorthand
          tags: tags
        }
      }

      /**
 * Generates tag attributes for use on the server.
 *
 * @param  {('bodyAttrs'|'htmlAttrs'|'headAttrs')} type - the type of attributes to generate
 * @param  {Object} data - the attributes to generate
 * @return {Object} - the attribute generator
 */

      function attributeGenerator (options, type, data, _ref) {
        var addSsrAttribute = _ref.addSsrAttribute

        var _ref2 = options || {}
        var attribute = _ref2.attribute
        var ssrAttribute = _ref2.ssrAttribute

        var attributeStr = ''

        for (var attr in data) {
          var attrData = data[attr]
          var attrValues = []

          for (var appId in attrData) {
            attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId])))
          }

          if (attrValues.length) {
            attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? ''.concat(attr) : ''.concat(attr, '="').concat(attrValues.join(' '), '"')
            attributeStr += ' '
          }
        }

        if (attributeStr) {
          attributeStr += ''.concat(attribute, '="').concat(encodeURI(JSON.stringify(data)), '"')
        }

        if (type === 'htmlAttrs' && addSsrAttribute) {
          return ''.concat(ssrAttribute).concat(attributeStr ? ' ' : '').concat(attributeStr)
        }

        return attributeStr
      }

      /**
 * Generates title output for the server
 *
 * @param  {'title'} type - the string "title"
 * @param  {String} data - the title text
 * @return {Object} - the title generator
 */
      function titleGenerator (options, type, data, generatorOptions) {
        var _ref = generatorOptions || {}
        var ln = _ref.ln

        if (!data) {
          return ''
        }

        return '<'.concat(type, '>').concat(data, '</').concat(type, '>').concat(ln ? '\n' : '')
      }

      /**
 * Generates meta, base, link, style, script, noscript tags for use on the server
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - the tag generator
 */

      function tagGenerator (options, type, tags, generatorOptions) {
        var _ref = options || {}
        var ssrAppId = _ref.ssrAppId
        var attribute = _ref.attribute
        var tagIDKeyName = _ref.tagIDKeyName

        var _ref2 = generatorOptions || {}
        var appId = _ref2.appId
        var _ref2$isSSR = _ref2.isSSR
        var isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR
        var _ref2$body = _ref2.body
        var body = _ref2$body === void 0 ? false : _ref2$body
        var _ref2$pbody = _ref2.pbody
        var pbody = _ref2$pbody === void 0 ? false : _ref2$pbody
        var _ref2$ln = _ref2.ln
        var ln = _ref2$ln === void 0 ? false : _ref2$ln

        var dataAttributes = [tagIDKeyName].concat(_toConsumableArray(commonDataAttributes))

        if (!tags || !tags.length) {
          return ''
        } // build a string containing all tags of this type

        return tags.reduce(function (tagsStr, tag) {
          if (tag.skip) {
            return tagsStr
          }

          var tagKeys = Object.keys(tag)

          if (tagKeys.length === 0) {
            return tagsStr // Bail on empty tag object
          }

          if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
            return tagsStr
          }

          var attrs = tag.once ? '' : ' '.concat(attribute, '="').concat(appId || (isSSR === false ? '1' : ssrAppId), '"') // build a string containing all attributes of this tag

          for (var attr in tag) {
            // these attributes are treated as children on the tag
            if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
              continue
            }

            if (attr === 'callback') {
              attrs += ' onload="this.__vm_l=1"'
              continue
            } // these form the attribute list for this tag

            var prefix = ''

            if (dataAttributes.includes(attr)) {
              prefix = 'data-'
            }

            var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr)

            if (isBooleanAttr && !tag[attr]) {
              continue
            }

            attrs += ' '.concat(prefix).concat(attr) + (isBooleanAttr ? '' : '="'.concat(tag[attr], '"'))
          }

          var json = ''

          if (tag.json) {
            json = JSON.stringify(tag.json)
          } // grab child content from one of these attributes, if possible

          var content = tag.innerHTML || tag.cssText || json // generate tag exactly without any other redundant attribute
          // these tags have no end tag

          var hasEndTag = !tagsWithoutEndTag.includes(type) // these tag types will have content inserted

          var hasContent = hasEndTag && tagsWithInnerContent.includes(type) // the final string for this specific tag

          return ''.concat(tagsStr, '<').concat(type).concat(attrs).concat(!hasContent && hasEndTag ? '/' : '', '>') + (hasContent ? ''.concat(content, '</').concat(type, '>') : '') + (ln ? '\n' : '')
        }, '')
      }

      /**
 * Converts a meta info property to one that can be stringified on the server
 *
 * @param  {String} type - the type of data to convert
 * @param  {(String|Object|Array<Object>)} data - the data value
 * @return {Object} - the new injector
 */

      function generateServerInjector (options, metaInfo, globalInjectOptions) {
        var serverInjector = {
          data: metaInfo,
          extraData: undefined,
          addInfo: function addInfo (appId, metaInfo) {
            this.extraData = this.extraData || {}
            this.extraData[appId] = metaInfo
          },
          callInjectors: function callInjectors (opts) {
            var m = this.injectors // only call title for the head

            return (opts.body || opts.pbody ? '' : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts)
          },
          injectors: {
            head: function head (ln) {
              return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
                ln: ln
              }))
            },
            bodyPrepend: function bodyPrepend (ln) {
              return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
                ln: ln,
                pbody: true
              }))
            },
            bodyAppend: function bodyAppend (ln) {
              return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
                ln: ln,
                body: true
              }))
            }
          }
        }

        var _loop = function _loop (type) {
          if (metaInfoOptionKeys.includes(type)) {
            return 'continue'
          }

          serverInjector.injectors[type] = {
            text: function text (injectOptions) {
              var addSsrAttribute = injectOptions === true
              injectOptions = _objectSpread2(_objectSpread2({
                addSsrAttribute: addSsrAttribute
              }, globalInjectOptions), injectOptions)

              if (type === 'title') {
                return titleGenerator(options, type, serverInjector.data[type], injectOptions)
              }

              if (metaInfoAttributeKeys.includes(type)) {
                var attributeData = {}
                var data = serverInjector.data[type]

                if (data) {
                  var appId = injectOptions.isSSR === false ? '1' : options.ssrAppId

                  for (var attr in data) {
                    attributeData[attr] = _defineProperty({}, appId, data[attr])
                  }
                }

                if (serverInjector.extraData) {
                  for (var _appId in serverInjector.extraData) {
                    var _data = serverInjector.extraData[_appId][type]

                    if (_data) {
                      for (var _attr in _data) {
                        attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]))
                      }
                    }
                  }
                }

                return attributeGenerator(options, type, attributeData, injectOptions)
              }

              var str = tagGenerator(options, type, serverInjector.data[type], injectOptions)

              if (serverInjector.extraData) {
                for (var _appId2 in serverInjector.extraData) {
                  var _data2 = serverInjector.extraData[_appId2][type]
                  var extraStr = tagGenerator(options, type, _data2, _objectSpread2({
                    appId: _appId2
                  }, injectOptions))
                  str = ''.concat(str).concat(extraStr)
                }
              }

              return str
            }
          }
        }

        for (var type in defaultInfo) {
          var _ret = _loop(type)

          if (_ret === 'continue') continue
        }

        return serverInjector
      }

      /**
 * Converts the state of the meta info object such that each item
 * can be compiled to a tag string on the server
 *
 * @vm {Object} - Vue instance - ideally the root component
 * @return {Object} - server meta info with `toString` methods
 */

      function inject (rootVm, options, injectOptions) {
        // make sure vue-meta was initiated
        if (!rootVm[rootConfigKey]) {
          showWarningNotSupported()
          return {}
        } // collect & aggregate all metaInfo $options

        var rawInfo = getComponentMetaInfo(options, rootVm)
        var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm) // generate server injector

        var serverInjector = generateServerInjector(options, metaInfo, injectOptions) // add meta info from additional apps

        var appsMetaInfo = getAppsMetaInfo()

        if (appsMetaInfo) {
          for (var additionalAppId in appsMetaInfo) {
            serverInjector.addInfo(additionalAppId, appsMetaInfo[additionalAppId])
            delete appsMetaInfo[additionalAppId]
          }

          clearAppsMetaInfo(true)
        }

        return serverInjector.injectors
      }

      function $meta (options) {
        options = options || {}
        /**
   * Returns an injector for server-side rendering.
   * @this {Object} - the Vue instance (a root component)
   * @return {Object} - injector
   */

        var $root = this.$root
        return {
          getOptions: function getOptions$1 () {
            return getOptions(options)
          },
          setOptions: function setOptions (newOptions) {
            var refreshNavKey = 'refreshOnceOnNavigation'

            if (newOptions && newOptions[refreshNavKey]) {
              options.refreshOnceOnNavigation = !!newOptions[refreshNavKey]
              addNavGuards($root)
            }

            var debounceWaitKey = 'debounceWait'

            if (newOptions && debounceWaitKey in newOptions) {
              var debounceWait = parseInt(newOptions[debounceWaitKey])

              if (!isNaN(debounceWait)) {
                options.debounceWait = debounceWait
              }
            }

            var waitOnDestroyedKey = 'waitOnDestroyed'

            if (newOptions && waitOnDestroyedKey in newOptions) {
              options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey]
            }
          },
          refresh: function refresh$1 () {
            return refresh($root, options)
          },
          inject: function inject$1 (injectOptions) {
            return inject($root, options, injectOptions)
          },
          pause: function pause$1 () {
            return pause($root)
          },
          resume: function resume$1 () {
            return resume($root)
          },
          addApp: function addApp$1 (appId) {
            return addApp($root, appId, options)
          }
        }
      }

      function generate (rawInfo, options) {
        options = setOptions(options)
        var metaInfo = getMetaInfo(options, rawInfo, serverSequences)
        var serverInjector = generateServerInjector(options, metaInfo)
        return serverInjector.injectors
      }

      /**
 * Plugin install function.
 * @param {Function} Vue - the Vue constructor.
 */

      function install (Vue, options) {
        if (Vue.__vuemeta_installed) {
          return
        }

        Vue.__vuemeta_installed = true
        options = setOptions(options)

        Vue.prototype.$meta = function () {
          return $meta.call(this, options)
        }

        Vue.mixin(createMixin(Vue, options))
      }

      var index = {
        version: version,
        install: install,
        generate: function generate$1 (metaInfo, options) {
          return generate(metaInfo, options)
        },
        hasMetaInfo: hasMetaInfo
      }

      /* harmony default export */ __webpack_exports__.a = (index)
      /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__('c8ba')))
    /***/ },

  /***/ '8c4f':
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* unused harmony export NavigationFailureType */
    /* unused harmony export RouterLink */
    /* unused harmony export RouterView */
    /* unused harmony export START_LOCATION */
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function () { return VueRouter$1 })
    /* unused harmony export isNavigationFailure */
    /* unused harmony export version */
    /*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */
    /*  */

    function assert (condition, message) {
      if (!condition) {
        throw new Error(('[vue-router] ' + message))
      }
    }

    function warn (condition, message) {
      if (!condition) {
        typeof console !== 'undefined' && console.warn(('[vue-router] ' + message))
      }
    }

    function extend (a, b) {
      for (var key in b) {
        a[key] = b[key]
      }
      return a
    }

    /*  */

    var encodeReserveRE = /[!'()*]/g
    var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16) }
    var commaRE = /%2C/g

    // fixed encodeURIComponent which is more conformant to RFC3986:
    // - escapes [!'()*]
    // - preserve commas
    var encode = function (str) {
      return encodeURIComponent(str)
        .replace(encodeReserveRE, encodeReserveReplacer)
        .replace(commaRE, ',')
    }

    function decode (str) {
      try {
        return decodeURIComponent(str)
      } catch (err) {
        if (false) {}
      }
      return str
    }

    function resolveQuery (
      query,
      extraQuery,
      _parseQuery
    ) {
      if (extraQuery === void 0) extraQuery = {}

      var parse = _parseQuery || parseQuery
      var parsedQuery
      try {
        parsedQuery = parse(query || '')
      } catch (e) {
        false && false
        parsedQuery = {}
      }
      for (var key in extraQuery) {
        var value = extraQuery[key]
        parsedQuery[key] = Array.isArray(value)
          ? value.map(castQueryParamValue)
          : castQueryParamValue(value)
      }
      return parsedQuery
    }

    var castQueryParamValue = function (value) { return (value == null || typeof value === 'object' ? value : String(value)) }

    function parseQuery (query) {
      var res = {}

      query = query.trim().replace(/^(\?|#|&)/, '')

      if (!query) {
        return res
      }

      query.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=')
        var key = decode(parts.shift())
        var val = parts.length > 0 ? decode(parts.join('=')) : null

        if (res[key] === undefined) {
          res[key] = val
        } else if (Array.isArray(res[key])) {
          res[key].push(val)
        } else {
          res[key] = [res[key], val]
        }
      })

      return res
    }

    function stringifyQuery (obj) {
      var res = obj
        ? Object.keys(obj)
          .map(function (key) {
            var val = obj[key]

            if (val === undefined) {
              return ''
            }

            if (val === null) {
              return encode(key)
            }

            if (Array.isArray(val)) {
              var result = []
              val.forEach(function (val2) {
                if (val2 === undefined) {
                  return
                }
                if (val2 === null) {
                  result.push(encode(key))
                } else {
                  result.push(encode(key) + '=' + encode(val2))
                }
              })
              return result.join('&')
            }

            return encode(key) + '=' + encode(val)
          })
          .filter(function (x) { return x.length > 0 })
          .join('&')
        : null
      return res ? ('?' + res) : ''
    }

    /*  */

    var trailingSlashRE = /\/?$/

    function createRoute (
      record,
      location,
      redirectedFrom,
      router
    ) {
      var stringifyQuery = router && router.options.stringifyQuery

      var query = location.query || {}
      try {
        query = clone(query)
      } catch (e) {}

      var route = {
        name: location.name || (record && record.name),
        meta: (record && record.meta) || {},
        path: location.path || '/',
        hash: location.hash || '',
        query: query,
        params: location.params || {},
        fullPath: getFullPath(location, stringifyQuery),
        matched: record ? formatMatch(record) : []
      }
      if (redirectedFrom) {
        route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery)
      }
      return Object.freeze(route)
    }

    function clone (value) {
      if (Array.isArray(value)) {
        return value.map(clone)
      } else if (value && typeof value === 'object') {
        var res = {}
        for (var key in value) {
          res[key] = clone(value[key])
        }
        return res
      } else {
        return value
      }
    }

    // the starting route that represents the initial state
    var START = createRoute(null, {
      path: '/'
    })

    function formatMatch (record) {
      var res = []
      while (record) {
        res.unshift(record)
        record = record.parent
      }
      return res
    }

    function getFullPath (
      ref,
      _stringifyQuery
    ) {
      var path = ref.path
      var query = ref.query; if (query === void 0) query = {}
      var hash = ref.hash; if (hash === void 0) hash = ''

      var stringify = _stringifyQuery || stringifyQuery
      return (path || '/') + stringify(query) + hash
    }

    function isSameRoute (a, b, onlyPath) {
      if (b === START) {
        return a === b
      } else if (!b) {
        return false
      } else if (a.path && b.path) {
        return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && (onlyPath ||
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query))
      } else if (a.name && b.name) {
        return (
          a.name === b.name &&
      (onlyPath || (
        a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params))
      )
        )
      } else {
        return false
      }
    }

    function isObjectEqual (a, b) {
      if (a === void 0) a = {}
      if (b === void 0) b = {}

      // handle null value #1566
      if (!a || !b) { return a === b }
      var aKeys = Object.keys(a).sort()
      var bKeys = Object.keys(b).sort()
      if (aKeys.length !== bKeys.length) {
        return false
      }
      return aKeys.every(function (key, i) {
        var aVal = a[key]
        var bKey = bKeys[i]
        if (bKey !== key) { return false }
        var bVal = b[key]
        // query values can be null and undefined
        if (aVal == null || bVal == null) { return aVal === bVal }
        // check nested equality
        if (typeof aVal === 'object' && typeof bVal === 'object') {
          return isObjectEqual(aVal, bVal)
        }
        return String(aVal) === String(bVal)
      })
    }

    function isIncludedRoute (current, target) {
      return (
        current.path.replace(trailingSlashRE, '/').indexOf(
          target.path.replace(trailingSlashRE, '/')
        ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
      )
    }

    function queryIncludes (current, target) {
      for (var key in target) {
        if (!(key in current)) {
          return false
        }
      }
      return true
    }

    function handleRouteEntered (route) {
      for (var i = 0; i < route.matched.length; i++) {
        var record = route.matched[i]
        for (var name in record.instances) {
          var instance = record.instances[name]
          var cbs = record.enteredCbs[name]
          if (!instance || !cbs) { continue }
          delete record.enteredCbs[name]
          for (var i$1 = 0; i$1 < cbs.length; i$1++) {
            if (!instance._isBeingDestroyed) { cbs[i$1](instance) }
          }
        }
      }
    }

    var View = {
      name: 'RouterView',
      functional: true,
      props: {
        name: {
          type: String,
          default: 'default'
        }
      },
      render: function render (_, ref) {
        var props = ref.props
        var children = ref.children
        var parent = ref.parent
        var data = ref.data

        // used by devtools to display a router-view badge
        data.routerView = true

        // directly use parent context's createElement() function
        // so that components rendered by router-view can resolve named slots
        var h = parent.$createElement
        var name = props.name
        var route = parent.$route
        var cache = parent._routerViewCache || (parent._routerViewCache = {})

        // determine current view depth, also check to see if the tree
        // has been toggled inactive but kept-alive.
        var depth = 0
        var inactive = false
        while (parent && parent._routerRoot !== parent) {
          var vnodeData = parent.$vnode ? parent.$vnode.data : {}
          if (vnodeData.routerView) {
            depth++
          }
          if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
            inactive = true
          }
          parent = parent.$parent
        }
        data.routerViewDepth = depth

        // render previous view if the tree is inactive and kept-alive
        if (inactive) {
          var cachedData = cache[name]
          var cachedComponent = cachedData && cachedData.component
          if (cachedComponent) {
            // #2301
            // pass props
            if (cachedData.configProps) {
              fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps)
            }
            return h(cachedComponent, data, children)
          } else {
            // render previous empty view
            return h()
          }
        }

        var matched = route.matched[depth]
        var component = matched && matched.components[name]

        // render empty node if no matched route or no config component
        if (!matched || !component) {
          cache[name] = null
          return h()
        }

        // cache component
        cache[name] = { component: component }

        // attach instance registration hook
        // this will be called in the instance's injected lifecycle hooks
        data.registerRouteInstance = function (vm, val) {
          // val could be undefined for unregistration
          var current = matched.instances[name]
          if (
            (val && current !== vm) ||
        (!val && current === vm)
          ) {
            matched.instances[name] = val
          }
        }

        // also register instance in prepatch hook
        // in case the same component instance is reused across different routes
        ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
          matched.instances[name] = vnode.componentInstance
        }

        // register instance in init hook
        // in case kept-alive component be actived when routes changed
        data.hook.init = function (vnode) {
          if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
          ) {
            matched.instances[name] = vnode.componentInstance
          }

          // if the route transition has already been confirmed then we weren't
          // able to call the cbs during confirmation as the component was not
          // registered yet, so we call it here.
          handleRouteEntered(route)
        }

        var configProps = matched.props && matched.props[name]
        // save route and configProps in cache
        if (configProps) {
          extend(cache[name], {
            route: route,
            configProps: configProps
          })
          fillPropsinData(component, data, route, configProps)
        }

        return h(component, data, children)
      }
    }

    function fillPropsinData (component, data, route, configProps) {
      // resolve props
      var propsToPass = data.props = resolveProps(route, configProps)
      if (propsToPass) {
        // clone to prevent mutation
        propsToPass = data.props = extend({}, propsToPass)
        // pass non-declared props as attrs
        var attrs = data.attrs = data.attrs || {}
        for (var key in propsToPass) {
          if (!component.props || !(key in component.props)) {
            attrs[key] = propsToPass[key]
            delete propsToPass[key]
          }
        }
      }
    }

    function resolveProps (route, config) {
      switch (typeof config) {
        case 'undefined':
          return
        case 'object':
          return config
        case 'function':
          return config(route)
        case 'boolean':
          return config ? route.params : undefined
        default:
          if (false) {}
      }
    }

    /*  */

    function resolvePath (
      relative,
      base,
      append
    ) {
      var firstChar = relative.charAt(0)
      if (firstChar === '/') {
        return relative
      }

      if (firstChar === '?' || firstChar === '#') {
        return base + relative
      }

      var stack = base.split('/')

      // remove trailing segment if:
      // - not appending
      // - appending to trailing slash (last segment is empty)
      if (!append || !stack[stack.length - 1]) {
        stack.pop()
      }

      // resolve relative path
      var segments = relative.replace(/^\//, '').split('/')
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i]
        if (segment === '..') {
          stack.pop()
        } else if (segment !== '.') {
          stack.push(segment)
        }
      }

      // ensure leading slash
      if (stack[0] !== '') {
        stack.unshift('')
      }

      return stack.join('/')
    }

    function parsePath (path) {
      var hash = ''
      var query = ''

      var hashIndex = path.indexOf('#')
      if (hashIndex >= 0) {
        hash = path.slice(hashIndex)
        path = path.slice(0, hashIndex)
      }

      var queryIndex = path.indexOf('?')
      if (queryIndex >= 0) {
        query = path.slice(queryIndex + 1)
        path = path.slice(0, queryIndex)
      }

      return {
        path: path,
        query: query,
        hash: hash
      }
    }

    function cleanPath (path) {
      return path.replace(/\/(?:\s*\/)+/g, '/')
    }

    var isarray = Array.isArray || function (arr) {
      return Object.prototype.toString.call(arr) == '[object Array]'
    }

    /**
 * Expose `pathToRegexp`.
 */
    var pathToRegexp_1 = pathToRegexp
    var parse_1 = parse
    var compile_1 = compile
    var tokensToFunction_1 = tokensToFunction
    var tokensToRegExp_1 = tokensToRegExp

    /**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
    var PATH_REGEXP = new RegExp([
      // Match escaped characters that would otherwise appear in future matches.
      // This allows the user to escape special characters that won't transform.
      '(\\\\.)',
      // Match Express-style parameters and un-named parameters with a prefix
      // and optional suffixes. Matches appear as:
      //
      // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
      // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
      // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
      '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
    ].join('|'), 'g')

    /**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
    function parse (str, options) {
      var tokens = []
      var key = 0
      var index = 0
      var path = ''
      var defaultDelimiter = options && options.delimiter || '/'
      var res

      while ((res = PATH_REGEXP.exec(str)) != null) {
        var m = res[0]
        var escaped = res[1]
        var offset = res.index
        path += str.slice(index, offset)
        index = offset + m.length

        // Ignore already escaped sequences.
        if (escaped) {
          path += escaped[1]
          continue
        }

        var next = str[index]
        var prefix = res[2]
        var name = res[3]
        var capture = res[4]
        var group = res[5]
        var modifier = res[6]
        var asterisk = res[7]

        // Push the current path onto the tokens.
        if (path) {
          tokens.push(path)
          path = ''
        }

        var partial = prefix != null && next != null && next !== prefix
        var repeat = modifier === '+' || modifier === '*'
        var optional = modifier === '?' || modifier === '*'
        var delimiter = res[2] || defaultDelimiter
        var pattern = capture || group

        tokens.push({
          name: name || key++,
          prefix: prefix || '',
          delimiter: delimiter,
          optional: optional,
          repeat: repeat,
          partial: partial,
          asterisk: !!asterisk,
          pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
        })
      }

      // Match any characters still remaining.
      if (index < str.length) {
        path += str.substr(index)
      }

      // If the path exists, push it onto the end.
      if (path) {
        tokens.push(path)
      }

      return tokens
    }

    /**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
    function compile (str, options) {
      return tokensToFunction(parse(str, options), options)
    }

    /**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
    function encodeURIComponentPretty (str) {
      return encodeURI(str).replace(/[\/?#]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    /**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
    function encodeAsterisk (str) {
      return encodeURI(str).replace(/[?#]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    /**
 * Expose a method for transforming tokens into the path function.
 */
    function tokensToFunction (tokens, options) {
      // Compile all the tokens into regexps.
      var matches = new Array(tokens.length)

      // Compile all the patterns before compilation.
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === 'object') {
          matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
        }
      }

      return function (obj, opts) {
        var path = ''
        var data = obj || {}
        var options = opts || {}
        var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i]

          if (typeof token === 'string') {
            path += token

            continue
          }

          var value = data[token.name]
          var segment

          if (value == null) {
            if (token.optional) {
              // Prepend partial segment prefixes.
              if (token.partial) {
                path += token.prefix
              }

              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to be defined')
            }
          }

          if (isarray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
            }

            if (value.length === 0) {
              if (token.optional) {
                continue
              } else {
                throw new TypeError('Expected "' + token.name + '" to not be empty')
              }
            }

            for (var j = 0; j < value.length; j++) {
              segment = encode(value[j])

              if (!matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
              }

              path += (j === 0 ? token.prefix : token.delimiter) + segment
            }

            continue
          }

          segment = token.asterisk ? encodeAsterisk(value) : encode(value)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += token.prefix + segment
        }

        return path
      }
    }

    /**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
    function escapeString (str) {
      return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
    }

    /**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
    function escapeGroup (group) {
      return group.replace(/([=!:$\/()])/g, '\\$1')
    }

    /**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
    function attachKeys (re, keys) {
      re.keys = keys
      return re
    }

    /**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
    function flags (options) {
      return options && options.sensitive ? '' : 'i'
    }

    /**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
    function regexpToRegexp (path, keys) {
      // Use a negative lookahead to match only capturing groups.
      var groups = path.source.match(/\((?!\?)/g)

      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: null,
            delimiter: null,
            optional: false,
            repeat: false,
            partial: false,
            asterisk: false,
            pattern: null
          })
        }
      }

      return attachKeys(path, keys)
    }

    /**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
    function arrayToRegexp (path, keys, options) {
      var parts = []

      for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source)
      }

      var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

      return attachKeys(regexp, keys)
    }

    /**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
    function stringToRegexp (path, keys, options) {
      return tokensToRegExp(parse(path, options), keys, options)
    }

    /**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
    function tokensToRegExp (tokens, keys, options) {
      if (!isarray(keys)) {
        options = /** @type {!Object} */ (keys || options)
        keys = []
      }

      options = options || {}

      var strict = options.strict
      var end = options.end !== false
      var route = ''

      // Iterate over the tokens and create our regexp string.
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]

        if (typeof token === 'string') {
          route += escapeString(token)
        } else {
          var prefix = escapeString(token.prefix)
          var capture = '(?:' + token.pattern + ')'

          keys.push(token)

          if (token.repeat) {
            capture += '(?:' + prefix + capture + ')*'
          }

          if (token.optional) {
            if (!token.partial) {
              capture = '(?:' + prefix + '(' + capture + '))?'
            } else {
              capture = prefix + '(' + capture + ')?'
            }
          } else {
            capture = prefix + '(' + capture + ')'
          }

          route += capture
        }
      }

      var delimiter = escapeString(options.delimiter || '/')
      var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

      // In non-strict mode we allow a slash at the end of match. If the path to
      // match already ends with a slash, we remove it for consistency. The slash
      // is valid at the end of a path match, not in the middle. This is important
      // in non-ending mode, where "/test/" shouldn't match "/test//route".
      if (!strict) {
        route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
      }

      if (end) {
        route += '$'
      } else {
        // In non-ending mode, we need the capturing groups to match as much as
        // possible by using a positive lookahead to the end or next path segment.
        route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
      }

      return attachKeys(new RegExp('^' + route, flags(options)), keys)
    }

    /**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
    function pathToRegexp (path, keys, options) {
      if (!isarray(keys)) {
        options = /** @type {!Object} */ (keys || options)
        keys = []
      }

      options = options || {}

      if (path instanceof RegExp) {
        return regexpToRegexp(path, /** @type {!Array} */ (keys))
      }

      if (isarray(path)) {
        return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
      }

      return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
    }
    pathToRegexp_1.parse = parse_1
    pathToRegexp_1.compile = compile_1
    pathToRegexp_1.tokensToFunction = tokensToFunction_1
    pathToRegexp_1.tokensToRegExp = tokensToRegExp_1

    /*  */

    // $flow-disable-line
    var regexpCompileCache = Object.create(null)

    function fillParams (
      path,
      params,
      routeMsg
    ) {
      params = params || {}
      try {
        var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path))

        // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
        // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
        if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch }

        return filler(params, { pretty: true })
      } catch (e) {
        if (false) {}
        return ''
      } finally {
        // delete the 0 if it was added
        delete params[0]
      }
    }

    /*  */

    function normalizeLocation (
      raw,
      current,
      append,
      router
    ) {
      var next = typeof raw === 'string' ? { path: raw } : raw
      // named target
      if (next._normalized) {
        return next
      } else if (next.name) {
        next = extend({}, raw)
        var params = next.params
        if (params && typeof params === 'object') {
          next.params = extend({}, params)
        }
        return next
      }

      // relative params
      if (!next.path && next.params && current) {
        next = extend({}, next)
        next._normalized = true
        var params$1 = extend(extend({}, current.params), next.params)
        if (current.name) {
          next.name = current.name
          next.params = params$1
        } else if (current.matched.length) {
          var rawPath = current.matched[current.matched.length - 1].path
          next.path = fillParams(rawPath, params$1, ('path ' + (current.path)))
        } else if (false) {}
        return next
      }

      var parsedPath = parsePath(next.path || '')
      var basePath = (current && current.path) || '/'
      var path = parsedPath.path
        ? resolvePath(parsedPath.path, basePath, append || next.append)
        : basePath

      var query = resolveQuery(
        parsedPath.query,
        next.query,
        router && router.options.parseQuery
      )

      var hash = next.hash || parsedPath.hash
      if (hash && hash.charAt(0) !== '#') {
        hash = '#' + hash
      }

      return {
        _normalized: true,
        path: path,
        query: query,
        hash: hash
      }
    }

    /*  */

    // work around weird flow bug
    var toTypes = [String, Object]
    var eventTypes = [String, Array]

    var noop = function () {}

    var warnedCustomSlot
    var warnedTagProp
    var warnedEventProp

    var Link = {
      name: 'RouterLink',
      props: {
        to: {
          type: toTypes,
          required: true
        },
        tag: {
          type: String,
          default: 'a'
        },
        custom: Boolean,
        exact: Boolean,
        exactPath: Boolean,
        append: Boolean,
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: {
          type: String,
          default: 'page'
        },
        event: {
          type: eventTypes,
          default: 'click'
        }
      },
      render: function render (h) {
        var this$1$1 = this

        var router = this.$router
        var current = this.$route
        var ref = router.resolve(
          this.to,
          current,
          this.append
        )
        var location = ref.location
        var route = ref.route
        var href = ref.href

        var classes = {}
        var globalActiveClass = router.options.linkActiveClass
        var globalExactActiveClass = router.options.linkExactActiveClass
        // Support global empty active class
        var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass
        var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass
        var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass
        var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass

        var compareTarget = route.redirectedFrom
          ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
          : route

        classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath)
        classes[activeClass] = this.exact || this.exactPath
          ? classes[exactActiveClass]
          : isIncludedRoute(current, compareTarget)

        var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null

        var handler = function (e) {
          if (guardEvent(e)) {
            if (this$1$1.replace) {
              router.replace(location, noop)
            } else {
              router.push(location, noop)
            }
          }
        }

        var on = { click: guardEvent }
        if (Array.isArray(this.event)) {
          this.event.forEach(function (e) {
            on[e] = handler
          })
        } else {
          on[this.event] = handler
        }

        var data = { class: classes }

        var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      })

        if (scopedSlot) {
          if (false) {}
          if (scopedSlot.length === 1) {
            return scopedSlot[0]
          } else if (scopedSlot.length > 1 || !scopedSlot.length) {
            if (false) {}
            return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
          }
        }

        if (false) {}

        if (this.tag === 'a') {
          data.on = on
          data.attrs = { href: href, 'aria-current': ariaCurrentValue }
        } else {
          // find the first <a> child and apply listener and href
          var a = findAnchor(this.$slots.default)
          if (a) {
            // in case the <a> is a static node
            a.isStatic = false
            var aData = (a.data = extend({}, a.data))
            aData.on = aData.on || {}
            // transform existing events in both objects into arrays so we can push later
            for (var event in aData.on) {
              var handler$1 = aData.on[event]
              if (event in on) {
                aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1]
              }
            }
            // append new listeners for router-link
            for (var event$1 in on) {
              if (event$1 in aData.on) {
                // on[event] is always a function
                aData.on[event$1].push(on[event$1])
              } else {
                aData.on[event$1] = handler
              }
            }

            var aAttrs = (a.data.attrs = extend({}, a.data.attrs))
            aAttrs.href = href
            aAttrs['aria-current'] = ariaCurrentValue
          } else {
            // doesn't have <a> child, apply listener to self
            data.on = on
          }
        }

        return h(this.tag, data, this.$slots.default)
      }
    }

    function guardEvent (e) {
      // don't redirect with control keys
      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
      // don't redirect when preventDefault called
      if (e.defaultPrevented) { return }
      // don't redirect on right click
      if (e.button !== undefined && e.button !== 0) { return }
      // don't redirect if `target="_blank"`
      if (e.currentTarget && e.currentTarget.getAttribute) {
        var target = e.currentTarget.getAttribute('target')
        if (/\b_blank\b/i.test(target)) { return }
      }
      // this may be a Weex event which doesn't have this method
      if (e.preventDefault) {
        e.preventDefault()
      }
      return true
    }

    function findAnchor (children) {
      if (children) {
        var child
        for (var i = 0; i < children.length; i++) {
          child = children[i]
          if (child.tag === 'a') {
            return child
          }
          if (child.children && (child = findAnchor(child.children))) {
            return child
          }
        }
      }
    }

    var _Vue

    function install (Vue) {
      if (install.installed && _Vue === Vue) { return }
      install.installed = true

      _Vue = Vue

      var isDef = function (v) { return v !== undefined }

      var registerInstance = function (vm, callVal) {
        var i = vm.$options._parentVnode
        if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
          i(vm, callVal)
        }
      }

      Vue.mixin({
        beforeCreate: function beforeCreate () {
          if (isDef(this.$options.router)) {
            this._routerRoot = this
            this._router = this.$options.router
            this._router.init(this)
            Vue.util.defineReactive(this, '_route', this._router.history.current)
          } else {
            this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
          }
          registerInstance(this, this)
        },
        destroyed: function destroyed () {
          registerInstance(this)
        }
      })

      Object.defineProperty(Vue.prototype, '$router', {
        get: function get () { return this._routerRoot._router }
      })

      Object.defineProperty(Vue.prototype, '$route', {
        get: function get () { return this._routerRoot._route }
      })

      Vue.component('RouterView', View)
      Vue.component('RouterLink', Link)

      var strats = Vue.config.optionMergeStrategies
      // use the same hook merging strategy for route hooks
      strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
    }

    /*  */

    var inBrowser = typeof window !== 'undefined'

    /*  */

    function createRouteMap (
      routes,
      oldPathList,
      oldPathMap,
      oldNameMap,
      parentRoute
    ) {
      // the path list is used to control path matching priority
      var pathList = oldPathList || []
      // $flow-disable-line
      var pathMap = oldPathMap || Object.create(null)
      // $flow-disable-line
      var nameMap = oldNameMap || Object.create(null)

      routes.forEach(function (route) {
        addRouteRecord(pathList, pathMap, nameMap, route, parentRoute)
      })

      // ensure wildcard routes are always at the end
      for (var i = 0, l = pathList.length; i < l; i++) {
        if (pathList[i] === '*') {
          pathList.push(pathList.splice(i, 1)[0])
          l--
          i--
        }
      }

      if (false) { var pathNames, found }

      return {
        pathList: pathList,
        pathMap: pathMap,
        nameMap: nameMap
      }
    }

    function addRouteRecord (
      pathList,
      pathMap,
      nameMap,
      route,
      parent,
      matchAs
    ) {
      var path = route.path
      var name = route.name
      if (false) {}

      var pathToRegexpOptions =
    route.pathToRegexpOptions || {}
      var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict)

      if (typeof route.caseSensitive === 'boolean') {
        pathToRegexpOptions.sensitive = route.caseSensitive
      }

      var record = {
        path: normalizedPath,
        regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
        components: route.components || { default: route.component },
        alias: route.alias
          ? typeof route.alias === 'string'
            ? [route.alias]
            : route.alias
          : [],
        instances: {},
        enteredCbs: {},
        name: name,
        parent: parent,
        matchAs: matchAs,
        redirect: route.redirect,
        beforeEnter: route.beforeEnter,
        meta: route.meta || {},
        props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
      }

      if (route.children) {
        // Warn if route is named, does not redirect and has a default child route.
        // If users navigate to this route by name, the default child will
        // not be rendered (GH Issue #629)
        if (false) {}
        route.children.forEach(function (child) {
          var childMatchAs = matchAs
            ? cleanPath((matchAs + '/' + (child.path)))
            : undefined
          addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs)
        })
      }

      if (!pathMap[record.path]) {
        pathList.push(record.path)
        pathMap[record.path] = record
      }

      if (route.alias !== undefined) {
        var aliases = Array.isArray(route.alias) ? route.alias : [route.alias]
        for (var i = 0; i < aliases.length; ++i) {
          var alias = aliases[i]
          if (false) {}

          var aliasRoute = {
            path: alias,
            children: route.children
          }
          addRouteRecord(
            pathList,
            pathMap,
            nameMap,
            aliasRoute,
            parent,
            record.path || '/' // matchAs
          )
        }
      }

      if (name) {
        if (!nameMap[name]) {
          nameMap[name] = record
        } else if (false) {}
      }
    }

    function compileRouteRegex (
      path,
      pathToRegexpOptions
    ) {
      var regex = pathToRegexp_1(path, [], pathToRegexpOptions)
      if (false) { var keys }
      return regex
    }

    function normalizePath (
      path,
      parent,
      strict
    ) {
      if (!strict) { path = path.replace(/\/$/, '') }
      if (path[0] === '/') { return path }
      if (parent == null) { return path }
      return cleanPath(((parent.path) + '/' + path))
    }

    /*  */

    function createMatcher (
      routes,
      router
    ) {
      var ref = createRouteMap(routes)
      var pathList = ref.pathList
      var pathMap = ref.pathMap
      var nameMap = ref.nameMap

      function addRoutes (routes) {
        createRouteMap(routes, pathList, pathMap, nameMap)
      }

      function addRoute (parentOrRoute, route) {
        var parent = (typeof parentOrRoute !== 'object') ? nameMap[parentOrRoute] : undefined
        // $flow-disable-line
        createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent)

        // add aliases of parent
        if (parent && parent.alias.length) {
          createRouteMap(
            // $flow-disable-line route is defined if parent is
            parent.alias.map(function (alias) { return ({ path: alias, children: [route] }) }),
            pathList,
            pathMap,
            nameMap,
            parent
          )
        }
      }

      function getRoutes () {
        return pathList.map(function (path) { return pathMap[path] })
      }

      function match (
        raw,
        currentRoute,
        redirectedFrom
      ) {
        var location = normalizeLocation(raw, currentRoute, false, router)
        var name = location.name

        if (name) {
          var record = nameMap[name]
          if (false) {}
          if (!record) { return _createRoute(null, location) }
          var paramNames = record.regex.keys
            .filter(function (key) { return !key.optional })
            .map(function (key) { return key.name })

          if (typeof location.params !== 'object') {
            location.params = {}
          }

          if (currentRoute && typeof currentRoute.params === 'object') {
            for (var key in currentRoute.params) {
              if (!(key in location.params) && paramNames.indexOf(key) > -1) {
                location.params[key] = currentRoute.params[key]
              }
            }
          }

          location.path = fillParams(record.path, location.params, ('named route "' + name + '"'))
          return _createRoute(record, location, redirectedFrom)
        } else if (location.path) {
          location.params = {}
          for (var i = 0; i < pathList.length; i++) {
            var path = pathList[i]
            var record$1 = pathMap[path]
            if (matchRoute(record$1.regex, location.path, location.params)) {
              return _createRoute(record$1, location, redirectedFrom)
            }
          }
        }
        // no match
        return _createRoute(null, location)
      }

      function redirect (
        record,
        location
      ) {
        var originalRedirect = record.redirect
        var redirect = typeof originalRedirect === 'function'
          ? originalRedirect(createRoute(record, location, null, router))
          : originalRedirect

        if (typeof redirect === 'string') {
          redirect = { path: redirect }
        }

        if (!redirect || typeof redirect !== 'object') {
          if (false) {}
          return _createRoute(null, location)
        }

        var re = redirect
        var name = re.name
        var path = re.path
        var query = location.query
        var hash = location.hash
        var params = location.params
        query = re.hasOwnProperty('query') ? re.query : query
        hash = re.hasOwnProperty('hash') ? re.hash : hash
        params = re.hasOwnProperty('params') ? re.params : params

        if (name) {
          // resolved named direct
          var targetRecord = nameMap[name]
          if (false) {}
          return match({
            _normalized: true,
            name: name,
            query: query,
            hash: hash,
            params: params
          }, undefined, location)
        } else if (path) {
          // 1. resolve relative redirect
          var rawPath = resolveRecordPath(path, record)
          // 2. resolve params
          var resolvedPath = fillParams(rawPath, params, ('redirect route with path "' + rawPath + '"'))
          // 3. rematch with existing query and hash
          return match({
            _normalized: true,
            path: resolvedPath,
            query: query,
            hash: hash
          }, undefined, location)
        } else {
          if (false) {}
          return _createRoute(null, location)
        }
      }

      function alias (
        record,
        location,
        matchAs
      ) {
        var aliasedPath = fillParams(matchAs, location.params, ('aliased route with path "' + matchAs + '"'))
        var aliasedMatch = match({
          _normalized: true,
          path: aliasedPath
        })
        if (aliasedMatch) {
          var matched = aliasedMatch.matched
          var aliasedRecord = matched[matched.length - 1]
          location.params = aliasedMatch.params
          return _createRoute(aliasedRecord, location)
        }
        return _createRoute(null, location)
      }

      function _createRoute (
        record,
        location,
        redirectedFrom
      ) {
        if (record && record.redirect) {
          return redirect(record, redirectedFrom || location)
        }
        if (record && record.matchAs) {
          return alias(record, location, record.matchAs)
        }
        return createRoute(record, location, redirectedFrom, router)
      }

      return {
        match: match,
        addRoute: addRoute,
        getRoutes: getRoutes,
        addRoutes: addRoutes
      }
    }

    function matchRoute (
      regex,
      path,
      params
    ) {
      var m = path.match(regex)

      if (!m) {
        return false
      } else if (!params) {
        return true
      }

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = regex.keys[i - 1]
        if (key) {
          // Fix #1994: using * with props: true generates a param named 0
          params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i]
        }
      }

      return true
    }

    function resolveRecordPath (path, record) {
      return resolvePath(path, record.parent ? record.parent.path : '/', true)
    }

    /*  */

    // use User Timing api (if present) for more accurate key precision
    var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date

    function genStateKey () {
      return Time.now().toFixed(3)
    }

    var _key = genStateKey()

    function getStateKey () {
      return _key
    }

    function setStateKey (key) {
      return (_key = key)
    }

    /*  */

    var positionStore = Object.create(null)

    function setupScroll () {
      // Prevent browser scroll behavior on History popstate
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
      // Fix for #1585 for Firefox
      // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
      // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
      // window.location.protocol + '//' + window.location.host
      // location.host contains the port and location.hostname doesn't
      var protocolAndPath = window.location.protocol + '//' + window.location.host
      var absolutePath = window.location.href.replace(protocolAndPath, '')
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, window.history.state)
      stateCopy.key = getStateKey()
      window.history.replaceState(stateCopy, '', absolutePath)
      window.addEventListener('popstate', handlePopState)
      return function () {
        window.removeEventListener('popstate', handlePopState)
      }
    }

    function handleScroll (
      router,
      to,
      from,
      isPop
    ) {
      if (!router.app) {
        return
      }

      var behavior = router.options.scrollBehavior
      if (!behavior) {
        return
      }

      if (false) {}

      // wait until re-render finishes before scrolling
      router.app.$nextTick(function () {
        var position = getScrollPosition()
        var shouldScroll = behavior.call(
          router,
          to,
          from,
          isPop ? position : null
        )

        if (!shouldScroll) {
          return
        }

        if (typeof shouldScroll.then === 'function') {
          shouldScroll
            .then(function (shouldScroll) {
              scrollToPosition((shouldScroll), position)
            })
            .catch(function (err) {
              if (false) {}
            })
        } else {
          scrollToPosition(shouldScroll, position)
        }
      })
    }

    function saveScrollPosition () {
      var key = getStateKey()
      if (key) {
        positionStore[key] = {
          x: window.pageXOffset,
          y: window.pageYOffset
        }
      }
    }

    function handlePopState (e) {
      saveScrollPosition()
      if (e.state && e.state.key) {
        setStateKey(e.state.key)
      }
    }

    function getScrollPosition () {
      var key = getStateKey()
      if (key) {
        return positionStore[key]
      }
    }

    function getElementPosition (el, offset) {
      var docEl = document.documentElement
      var docRect = docEl.getBoundingClientRect()
      var elRect = el.getBoundingClientRect()
      return {
        x: elRect.left - docRect.left - offset.x,
        y: elRect.top - docRect.top - offset.y
      }
    }

    function isValidPosition (obj) {
      return isNumber(obj.x) || isNumber(obj.y)
    }

    function normalizePosition (obj) {
      return {
        x: isNumber(obj.x) ? obj.x : window.pageXOffset,
        y: isNumber(obj.y) ? obj.y : window.pageYOffset
      }
    }

    function normalizeOffset (obj) {
      return {
        x: isNumber(obj.x) ? obj.x : 0,
        y: isNumber(obj.y) ? obj.y : 0
      }
    }

    function isNumber (v) {
      return typeof v === 'number'
    }

    var hashStartsWithNumberRE = /^#\d/

    function scrollToPosition (shouldScroll, position) {
      var isObject = typeof shouldScroll === 'object'
      if (isObject && typeof shouldScroll.selector === 'string') {
        // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
        // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
        var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
          ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
          : document.querySelector(shouldScroll.selector)

        if (el) {
          var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {}
          offset = normalizeOffset(offset)
          position = getElementPosition(el, offset)
        } else if (isValidPosition(shouldScroll)) {
          position = normalizePosition(shouldScroll)
        }
      } else if (isObject && isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll)
      }

      if (position) {
        // $flow-disable-line
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({
            left: position.x,
            top: position.y,
            // $flow-disable-line
            behavior: shouldScroll.behavior
          })
        } else {
          window.scrollTo(position.x, position.y)
        }
      }
    }

    /*  */

    var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })()

    function pushState (url, replace) {
      saveScrollPosition()
      // try...catch the pushState call to get around Safari
      // DOM Exception 18 where it limits to 100 pushState calls
      var history = window.history
      try {
        if (replace) {
          // preserve existing history state as it could be overriden by the user
          var stateCopy = extend({}, history.state)
          stateCopy.key = getStateKey()
          history.replaceState(stateCopy, '', url)
        } else {
          history.pushState({ key: setStateKey(genStateKey()) }, '', url)
        }
      } catch (e) {
        window.location[replace ? 'replace' : 'assign'](url)
      }
    }

    function replaceState (url) {
      pushState(url, true)
    }

    // When changing thing, also edit router.d.ts
    var NavigationFailureType = {
      redirected: 2,
      aborted: 4,
      cancelled: 8,
      duplicated: 16
    }

    function createNavigationRedirectedError (from, to) {
      return createRouterError(
        from,
        to,
        NavigationFailureType.redirected,
        ('Redirected when going from "' + (from.fullPath) + '" to "' + (stringifyRoute(
          to
        )) + '" via a navigation guard.')
      )
    }

    function createNavigationDuplicatedError (from, to) {
      var error = createRouterError(
        from,
        to,
        NavigationFailureType.duplicated,
        ('Avoided redundant navigation to current location: "' + (from.fullPath) + '".')
      )
      // backwards compatible with the first introduction of Errors
      error.name = 'NavigationDuplicated'
      return error
    }

    function createNavigationCancelledError (from, to) {
      return createRouterError(
        from,
        to,
        NavigationFailureType.cancelled,
        ('Navigation cancelled from "' + (from.fullPath) + '" to "' + (to.fullPath) + '" with a new navigation.')
      )
    }

    function createNavigationAbortedError (from, to) {
      return createRouterError(
        from,
        to,
        NavigationFailureType.aborted,
        ('Navigation aborted from "' + (from.fullPath) + '" to "' + (to.fullPath) + '" via a navigation guard.')
      )
    }

    function createRouterError (from, to, type, message) {
      var error = new Error(message)
      error._isRouter = true
      error.from = from
      error.to = to
      error.type = type

      return error
    }

    var propertiesToLog = ['params', 'query', 'hash']

    function stringifyRoute (to) {
      if (typeof to === 'string') { return to }
      if ('path' in to) { return to.path }
      var location = {}
      propertiesToLog.forEach(function (key) {
        if (key in to) { location[key] = to[key] }
      })
      return JSON.stringify(location, null, 2)
    }

    function isError (err) {
      return Object.prototype.toString.call(err).indexOf('Error') > -1
    }

    function isNavigationFailure (err, errorType) {
      return (
        isError(err) &&
    err._isRouter &&
    (errorType == null || err.type === errorType)
      )
    }

    /*  */

    function runQueue (queue, fn, cb) {
      var step = function (index) {
        if (index >= queue.length) {
          cb()
        } else {
          if (queue[index]) {
            fn(queue[index], function () {
              step(index + 1)
            })
          } else {
            step(index + 1)
          }
        }
      }
      step(0)
    }

    /*  */

    function resolveAsyncComponents (matched) {
      return function (to, from, next) {
        var hasAsync = false
        var pending = 0
        var error = null

        flatMapComponents(matched, function (def, _, match, key) {
          // if it's a function and doesn't have cid attached,
          // assume it's an async component resolve function.
          // we are not using Vue's default async resolving mechanism because
          // we want to halt the navigation until the incoming component has been
          // resolved.
          if (typeof def === 'function' && def.cid === undefined) {
            hasAsync = true
            pending++

            var resolve = once(function (resolvedDef) {
              if (isESModule(resolvedDef)) {
                resolvedDef = resolvedDef.default
              }
              // save resolved on async factory in case it's used elsewhere
              def.resolved = typeof resolvedDef === 'function'
                ? resolvedDef
                : _Vue.extend(resolvedDef)
              match.components[key] = resolvedDef
              pending--
              if (pending <= 0) {
                next()
              }
            })

            var reject = once(function (reason) {
              var msg = 'Failed to resolve async component ' + key + ': ' + reason
              false && false
              if (!error) {
                error = isError(reason)
                  ? reason
                  : new Error(msg)
                next(error)
              }
            })

            var res
            try {
              res = def(resolve, reject)
            } catch (e) {
              reject(e)
            }
            if (res) {
              if (typeof res.then === 'function') {
                res.then(resolve, reject)
              } else {
                // new syntax in Vue 2.3
                var comp = res.component
                if (comp && typeof comp.then === 'function') {
                  comp.then(resolve, reject)
                }
              }
            }
          }
        })

        if (!hasAsync) { next() }
      }
    }

    function flatMapComponents (
      matched,
      fn
    ) {
      return flatten(matched.map(function (m) {
        return Object.keys(m.components).map(function (key) {
          return fn(
            m.components[key],
            m.instances[key],
            m, key
          )
        })
      }))
    }

    function flatten (arr) {
      return Array.prototype.concat.apply([], arr)
    }

    var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol'

    function isESModule (obj) {
      return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
    }

    // in Webpack 2, require.ensure now also returns a Promise
    // so the resolve/reject functions may get called an extra time
    // if the user uses an arrow function shorthand that happens to
    // return that Promise.
    function once (fn) {
      var called = false
      return function () {
        var args = []; var len = arguments.length
        while (len--) args[len] = arguments[len]

        if (called) { return }
        called = true
        return fn.apply(this, args)
      }
    }

    /*  */

    var History = function History (router, base) {
      this.router = router
      this.base = normalizeBase(base)
      // start with a route object that stands for "nowhere"
      this.current = START
      this.pending = null
      this.ready = false
      this.readyCbs = []
      this.readyErrorCbs = []
      this.errorCbs = []
      this.listeners = []
    }

    History.prototype.listen = function listen (cb) {
      this.cb = cb
    }

    History.prototype.onReady = function onReady (cb, errorCb) {
      if (this.ready) {
        cb()
      } else {
        this.readyCbs.push(cb)
        if (errorCb) {
          this.readyErrorCbs.push(errorCb)
        }
      }
    }

    History.prototype.onError = function onError (errorCb) {
      this.errorCbs.push(errorCb)
    }

    History.prototype.transitionTo = function transitionTo (
      location,
      onComplete,
      onAbort
    ) {
      var this$1$1 = this

      var route
      // catch redirect option https://github.com/vuejs/vue-router/issues/3201
      try {
        route = this.router.match(location, this.current)
      } catch (e) {
        this.errorCbs.forEach(function (cb) {
          cb(e)
        })
        // Exception should still be thrown
        throw e
      }
      var prev = this.current
      this.confirmTransition(
        route,
        function () {
          this$1$1.updateRoute(route)
          onComplete && onComplete(route)
          this$1$1.ensureURL()
          this$1$1.router.afterHooks.forEach(function (hook) {
            hook && hook(route, prev)
          })

          // fire ready cbs once
          if (!this$1$1.ready) {
            this$1$1.ready = true
            this$1$1.readyCbs.forEach(function (cb) {
              cb(route)
            })
          }
        },
        function (err) {
          if (onAbort) {
            onAbort(err)
          }
          if (err && !this$1$1.ready) {
            // Initial redirection should not mark the history as ready yet
            // because it's triggered by the redirection instead
            // https://github.com/vuejs/vue-router/issues/3225
            // https://github.com/vuejs/vue-router/issues/3331
            if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
              this$1$1.ready = true
              this$1$1.readyErrorCbs.forEach(function (cb) {
                cb(err)
              })
            }
          }
        }
      )
    }

    History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
      var this$1$1 = this

      var current = this.current
      this.pending = route
      var abort = function (err) {
        // changed after adding errors with
        // https://github.com/vuejs/vue-router/pull/3047 before that change,
        // redirect and aborted navigation would produce an err == null
        if (!isNavigationFailure(err) && isError(err)) {
          if (this$1$1.errorCbs.length) {
            this$1$1.errorCbs.forEach(function (cb) {
              cb(err)
            })
          } else {
            if (false) {}
            console.error(err)
          }
        }
        onAbort && onAbort(err)
      }
      var lastRouteIndex = route.matched.length - 1
      var lastCurrentIndex = current.matched.length - 1
      if (
        isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
      ) {
        this.ensureURL()
        if (route.hash) {
          handleScroll(this.router, current, route, false)
        }
        return abort(createNavigationDuplicatedError(current, route))
      }

      var ref = resolveQueue(
        this.current.matched,
        route.matched
      )
      var updated = ref.updated
      var deactivated = ref.deactivated
      var activated = ref.activated

      var queue = [].concat(
        // in-component leave guards
        extractLeaveGuards(deactivated),
        // global before hooks
        this.router.beforeHooks,
        // in-component update hooks
        extractUpdateHooks(updated),
        // in-config enter guards
        activated.map(function (m) { return m.beforeEnter }),
        // async components
        resolveAsyncComponents(activated)
      )

      var iterator = function (hook, next) {
        if (this$1$1.pending !== route) {
          return abort(createNavigationCancelledError(current, route))
        }
        try {
          hook(route, current, function (to) {
            if (to === false) {
              // next(false) -> abort navigation, ensure current URL
              this$1$1.ensureURL(true)
              abort(createNavigationAbortedError(current, route))
            } else if (isError(to)) {
              this$1$1.ensureURL(true)
              abort(to)
            } else if (
              typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
            ) {
              // next('/') or next({ path: '/' }) -> redirect
              abort(createNavigationRedirectedError(current, route))
              if (typeof to === 'object' && to.replace) {
                this$1$1.replace(to)
              } else {
                this$1$1.push(to)
              }
            } else {
              // confirm transition and pass on the value
              next(to)
            }
          })
        } catch (e) {
          abort(e)
        }
      }

      runQueue(queue, iterator, function () {
        // wait until async components are resolved before
        // extracting in-component enter guards
        var enterGuards = extractEnterGuards(activated)
        var queue = enterGuards.concat(this$1$1.router.resolveHooks)
        runQueue(queue, iterator, function () {
          if (this$1$1.pending !== route) {
            return abort(createNavigationCancelledError(current, route))
          }
          this$1$1.pending = null
          onComplete(route)
          if (this$1$1.router.app) {
            this$1$1.router.app.$nextTick(function () {
              handleRouteEntered(route)
            })
          }
        })
      })
    }

    History.prototype.updateRoute = function updateRoute (route) {
      this.current = route
      this.cb && this.cb(route)
    }

    History.prototype.setupListeners = function setupListeners () {
      // Default implementation is empty
    }

    History.prototype.teardown = function teardown () {
      // clean up event listeners
      // https://github.com/vuejs/vue-router/issues/2341
      this.listeners.forEach(function (cleanupListener) {
        cleanupListener()
      })
      this.listeners = []

      // reset current history route
      // https://github.com/vuejs/vue-router/issues/3294
      this.current = START
      this.pending = null
    }

    function normalizeBase (base) {
      if (!base) {
        if (inBrowser) {
          // respect <base> tag
          var baseEl = document.querySelector('base')
          base = (baseEl && baseEl.getAttribute('href')) || '/'
          // strip full URL origin
          base = base.replace(/^https?:\/\/[^\/]+/, '')
        } else {
          base = '/'
        }
      }
      // make sure there's the starting slash
      if (base.charAt(0) !== '/') {
        base = '/' + base
      }
      // remove trailing slash
      return base.replace(/\/$/, '')
    }

    function resolveQueue (
      current,
      next
    ) {
      var i
      var max = Math.max(current.length, next.length)
      for (i = 0; i < max; i++) {
        if (current[i] !== next[i]) {
          break
        }
      }
      return {
        updated: next.slice(0, i),
        activated: next.slice(i),
        deactivated: current.slice(i)
      }
    }

    function extractGuards (
      records,
      name,
      bind,
      reverse
    ) {
      var guards = flatMapComponents(records, function (def, instance, match, key) {
        var guard = extractGuard(def, name)
        if (guard) {
          return Array.isArray(guard)
            ? guard.map(function (guard) { return bind(guard, instance, match, key) })
            : bind(guard, instance, match, key)
        }
      })
      return flatten(reverse ? guards.reverse() : guards)
    }

    function extractGuard (
      def,
      key
    ) {
      if (typeof def !== 'function') {
        // extend now so that global mixins are applied.
        def = _Vue.extend(def)
      }
      return def.options[key]
    }

    function extractLeaveGuards (deactivated) {
      return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
    }

    function extractUpdateHooks (updated) {
      return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
    }

    function bindGuard (guard, instance) {
      if (instance) {
        return function boundRouteGuard () {
          return guard.apply(instance, arguments)
        }
      }
    }

    function extractEnterGuards (
      activated
    ) {
      return extractGuards(
        activated,
        'beforeRouteEnter',
        function (guard, _, match, key) {
          return bindEnterGuard(guard, match, key)
        }
      )
    }

    function bindEnterGuard (
      guard,
      match,
      key
    ) {
      return function routeEnterGuard (to, from, next) {
        return guard(to, from, function (cb) {
          if (typeof cb === 'function') {
            if (!match.enteredCbs[key]) {
              match.enteredCbs[key] = []
            }
            match.enteredCbs[key].push(cb)
          }
          next(cb)
        })
      }
    }

    /*  */

    var HTML5History = /* @__PURE__ */(function (History) {
      function HTML5History (router, base) {
        History.call(this, router, base)

        this._startLocation = getLocation(this.base)
      }

      if (History) HTML5History.__proto__ = History
      HTML5History.prototype = Object.create(History && History.prototype)
      HTML5History.prototype.constructor = HTML5History

      HTML5History.prototype.setupListeners = function setupListeners () {
        var this$1$1 = this

        if (this.listeners.length > 0) {
          return
        }

        var router = this.router
        var expectScroll = router.options.scrollBehavior
        var supportsScroll = supportsPushState && expectScroll

        if (supportsScroll) {
          this.listeners.push(setupScroll())
        }

        var handleRoutingEvent = function () {
          var current = this$1$1.current

          // Avoiding first `popstate` event dispatched in some browsers but first
          // history route not updated since async guard at the same time.
          var location = getLocation(this$1$1.base)
          if (this$1$1.current === START && location === this$1$1._startLocation) {
            return
          }

          this$1$1.transitionTo(location, function (route) {
            if (supportsScroll) {
              handleScroll(router, route, current, true)
            }
          })
        }
        window.addEventListener('popstate', handleRoutingEvent)
        this.listeners.push(function () {
          window.removeEventListener('popstate', handleRoutingEvent)
        })
      }

      HTML5History.prototype.go = function go (n) {
        window.history.go(n)
      }

      HTML5History.prototype.push = function push (location, onComplete, onAbort) {
        var this$1$1 = this

        var ref = this
        var fromRoute = ref.current
        this.transitionTo(location, function (route) {
          pushState(cleanPath(this$1$1.base + route.fullPath))
          handleScroll(this$1$1.router, route, fromRoute, false)
          onComplete && onComplete(route)
        }, onAbort)
      }

      HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
        var this$1$1 = this

        var ref = this
        var fromRoute = ref.current
        this.transitionTo(location, function (route) {
          replaceState(cleanPath(this$1$1.base + route.fullPath))
          handleScroll(this$1$1.router, route, fromRoute, false)
          onComplete && onComplete(route)
        }, onAbort)
      }

      HTML5History.prototype.ensureURL = function ensureURL (push) {
        if (getLocation(this.base) !== this.current.fullPath) {
          var current = cleanPath(this.base + this.current.fullPath)
          push ? pushState(current) : replaceState(current)
        }
      }

      HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
        return getLocation(this.base)
      }

      return HTML5History
    }(History))

    function getLocation (base) {
      var path = window.location.pathname
      var pathLowerCase = path.toLowerCase()
      var baseLowerCase = base.toLowerCase()
      // base="/a" shouldn't turn path="/app" into "/a/pp"
      // https://github.com/vuejs/vue-router/issues/3555
      // so we ensure the trailing slash in the base
      if (base && ((pathLowerCase === baseLowerCase) ||
    (pathLowerCase.indexOf(cleanPath(baseLowerCase + '/')) === 0))) {
        path = path.slice(base.length)
      }
      return (path || '/') + window.location.search + window.location.hash
    }

    /*  */

    var HashHistory = /* @__PURE__ */(function (History) {
      function HashHistory (router, base, fallback) {
        History.call(this, router, base)
        // check history fallback deeplinking
        if (fallback && checkFallback(this.base)) {
          return
        }
        ensureSlash()
      }

      if (History) HashHistory.__proto__ = History
      HashHistory.prototype = Object.create(History && History.prototype)
      HashHistory.prototype.constructor = HashHistory

      // this is delayed until the app mounts
      // to avoid the hashchange listener being fired too early
      HashHistory.prototype.setupListeners = function setupListeners () {
        var this$1$1 = this

        if (this.listeners.length > 0) {
          return
        }

        var router = this.router
        var expectScroll = router.options.scrollBehavior
        var supportsScroll = supportsPushState && expectScroll

        if (supportsScroll) {
          this.listeners.push(setupScroll())
        }

        var handleRoutingEvent = function () {
          var current = this$1$1.current
          if (!ensureSlash()) {
            return
          }
          this$1$1.transitionTo(getHash(), function (route) {
            if (supportsScroll) {
              handleScroll(this$1$1.router, route, current, true)
            }
            if (!supportsPushState) {
              replaceHash(route.fullPath)
            }
          })
        }
        var eventType = supportsPushState ? 'popstate' : 'hashchange'
        window.addEventListener(
          eventType,
          handleRoutingEvent
        )
        this.listeners.push(function () {
          window.removeEventListener(eventType, handleRoutingEvent)
        })
      }

      HashHistory.prototype.push = function push (location, onComplete, onAbort) {
        var this$1$1 = this

        var ref = this
        var fromRoute = ref.current
        this.transitionTo(
          location,
          function (route) {
            pushHash(route.fullPath)
            handleScroll(this$1$1.router, route, fromRoute, false)
            onComplete && onComplete(route)
          },
          onAbort
        )
      }

      HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
        var this$1$1 = this

        var ref = this
        var fromRoute = ref.current
        this.transitionTo(
          location,
          function (route) {
            replaceHash(route.fullPath)
            handleScroll(this$1$1.router, route, fromRoute, false)
            onComplete && onComplete(route)
          },
          onAbort
        )
      }

      HashHistory.prototype.go = function go (n) {
        window.history.go(n)
      }

      HashHistory.prototype.ensureURL = function ensureURL (push) {
        var current = this.current.fullPath
        if (getHash() !== current) {
          push ? pushHash(current) : replaceHash(current)
        }
      }

      HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
        return getHash()
      }

      return HashHistory
    }(History))

    function checkFallback (base) {
      var location = getLocation(base)
      if (!/^\/#/.test(location)) {
        window.location.replace(cleanPath(base + '/#' + location))
        return true
      }
    }

    function ensureSlash () {
      var path = getHash()
      if (path.charAt(0) === '/') {
        return true
      }
      replaceHash('/' + path)
      return false
    }

    function getHash () {
      // We can't use window.location.hash here because it's not
      // consistent across browsers - Firefox will pre-decode it!
      var href = window.location.href
      var index = href.indexOf('#')
      // empty path
      if (index < 0) { return '' }

      href = href.slice(index + 1)

      return href
    }

    function getUrl (path) {
      var href = window.location.href
      var i = href.indexOf('#')
      var base = i >= 0 ? href.slice(0, i) : href
      return (base + '#' + path)
    }

    function pushHash (path) {
      if (supportsPushState) {
        pushState(getUrl(path))
      } else {
        window.location.hash = path
      }
    }

    function replaceHash (path) {
      if (supportsPushState) {
        replaceState(getUrl(path))
      } else {
        window.location.replace(getUrl(path))
      }
    }

    /*  */

    var AbstractHistory = /* @__PURE__ */(function (History) {
      function AbstractHistory (router, base) {
        History.call(this, router, base)
        this.stack = []
        this.index = -1
      }

      if (History) AbstractHistory.__proto__ = History
      AbstractHistory.prototype = Object.create(History && History.prototype)
      AbstractHistory.prototype.constructor = AbstractHistory

      AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
        var this$1$1 = this

        this.transitionTo(
          location,
          function (route) {
            this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route)
            this$1$1.index++
            onComplete && onComplete(route)
          },
          onAbort
        )
      }

      AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
        var this$1$1 = this

        this.transitionTo(
          location,
          function (route) {
            this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route)
            onComplete && onComplete(route)
          },
          onAbort
        )
      }

      AbstractHistory.prototype.go = function go (n) {
        var this$1$1 = this

        var targetIndex = this.index + n
        if (targetIndex < 0 || targetIndex >= this.stack.length) {
          return
        }
        var route = this.stack[targetIndex]
        this.confirmTransition(
          route,
          function () {
            var prev = this$1$1.current
            this$1$1.index = targetIndex
            this$1$1.updateRoute(route)
            this$1$1.router.afterHooks.forEach(function (hook) {
              hook && hook(route, prev)
            })
          },
          function (err) {
            if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
              this$1$1.index = targetIndex
            }
          }
        )
      }

      AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
        var current = this.stack[this.stack.length - 1]
        return current ? current.fullPath : '/'
      }

      AbstractHistory.prototype.ensureURL = function ensureURL () {
        // noop
      }

      return AbstractHistory
    }(History))

    /*  */

    var VueRouter = function VueRouter (options) {
      if (options === void 0) options = {}

      if (false) {}
      this.app = null
      this.apps = []
      this.options = options
      this.beforeHooks = []
      this.resolveHooks = []
      this.afterHooks = []
      this.matcher = createMatcher(options.routes || [], this)

      var mode = options.mode || 'hash'
      this.fallback =
    mode === 'history' && !supportsPushState && options.fallback !== false
      if (this.fallback) {
        mode = 'hash'
      }
      if (!inBrowser) {
        mode = 'abstract'
      }
      this.mode = mode

      switch (mode) {
        case 'history':
          this.history = new HTML5History(this, options.base)
          break
        case 'hash':
          this.history = new HashHistory(this, options.base, this.fallback)
          break
        case 'abstract':
          this.history = new AbstractHistory(this, options.base)
          break
        default:
          if (false) {}
      }
    }

    var prototypeAccessors = { currentRoute: { configurable: true } }

    VueRouter.prototype.match = function match (raw, current, redirectedFrom) {
      return this.matcher.match(raw, current, redirectedFrom)
    }

    prototypeAccessors.currentRoute.get = function () {
      return this.history && this.history.current
    }

    VueRouter.prototype.init = function init (app /* Vue component instance */) {
      var this$1$1 = this

      false &&
    false

      this.apps.push(app)

      // set up app destroyed handler
      // https://github.com/vuejs/vue-router/issues/2639
      app.$once('hook:destroyed', function () {
        // clean out app from this.apps array once destroyed
        var index = this$1$1.apps.indexOf(app)
        if (index > -1) { this$1$1.apps.splice(index, 1) }
        // ensure we still have a main app or null if no apps
        // we do not release the router so it can be reused
        if (this$1$1.app === app) { this$1$1.app = this$1$1.apps[0] || null }

        if (!this$1$1.app) { this$1$1.history.teardown() }
      })

      // main app previously initialized
      // return as we don't need to set up new history listener
      if (this.app) {
        return
      }

      this.app = app

      var history = this.history

      if (history instanceof HTML5History || history instanceof HashHistory) {
        var handleInitialScroll = function (routeOrError) {
          var from = history.current
          var expectScroll = this$1$1.options.scrollBehavior
          var supportsScroll = supportsPushState && expectScroll

          if (supportsScroll && 'fullPath' in routeOrError) {
            handleScroll(this$1$1, routeOrError, from, false)
          }
        }
        var setupListeners = function (routeOrError) {
          history.setupListeners()
          handleInitialScroll(routeOrError)
        }
        history.transitionTo(
          history.getCurrentLocation(),
          setupListeners,
          setupListeners
        )
      }

      history.listen(function (route) {
        this$1$1.apps.forEach(function (app) {
          app._route = route
        })
      })
    }

    VueRouter.prototype.beforeEach = function beforeEach (fn) {
      return registerHook(this.beforeHooks, fn)
    }

    VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
      return registerHook(this.resolveHooks, fn)
    }

    VueRouter.prototype.afterEach = function afterEach (fn) {
      return registerHook(this.afterHooks, fn)
    }

    VueRouter.prototype.onReady = function onReady (cb, errorCb) {
      this.history.onReady(cb, errorCb)
    }

    VueRouter.prototype.onError = function onError (errorCb) {
      this.history.onError(errorCb)
    }

    VueRouter.prototype.push = function push (location, onComplete, onAbort) {
      var this$1$1 = this

      // $flow-disable-line
      if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
        return new Promise(function (resolve, reject) {
          this$1$1.history.push(location, resolve, reject)
        })
      } else {
        this.history.push(location, onComplete, onAbort)
      }
    }

    VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
      var this$1$1 = this

      // $flow-disable-line
      if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
        return new Promise(function (resolve, reject) {
          this$1$1.history.replace(location, resolve, reject)
        })
      } else {
        this.history.replace(location, onComplete, onAbort)
      }
    }

    VueRouter.prototype.go = function go (n) {
      this.history.go(n)
    }

    VueRouter.prototype.back = function back () {
      this.go(-1)
    }

    VueRouter.prototype.forward = function forward () {
      this.go(1)
    }

    VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
      var route = to
        ? to.matched
          ? to
          : this.resolve(to).route
        : this.currentRoute
      if (!route) {
        return []
      }
      return [].concat.apply(
        [],
        route.matched.map(function (m) {
          return Object.keys(m.components).map(function (key) {
            return m.components[key]
          })
        })
      )
    }

    VueRouter.prototype.resolve = function resolve (
      to,
      current,
      append
    ) {
      current = current || this.history.current
      var location = normalizeLocation(to, current, append, this)
      var route = this.match(location, current)
      var fullPath = route.redirectedFrom || route.fullPath
      var base = this.history.base
      var href = createHref(base, fullPath, this.mode)
      return {
        location: location,
        route: route,
        href: href,
        // for backwards compat
        normalizedTo: location,
        resolved: route
      }
    }

    VueRouter.prototype.getRoutes = function getRoutes () {
      return this.matcher.getRoutes()
    }

    VueRouter.prototype.addRoute = function addRoute (parentOrRoute, route) {
      this.matcher.addRoute(parentOrRoute, route)
      if (this.history.current !== START) {
        this.history.transitionTo(this.history.getCurrentLocation())
      }
    }

    VueRouter.prototype.addRoutes = function addRoutes (routes) {
      if (false) {}
      this.matcher.addRoutes(routes)
      if (this.history.current !== START) {
        this.history.transitionTo(this.history.getCurrentLocation())
      }
    }

    Object.defineProperties(VueRouter.prototype, prototypeAccessors)

    var VueRouter$1 = VueRouter

    function registerHook (list, fn) {
      list.push(fn)
      return function () {
        var i = list.indexOf(fn)
        if (i > -1) { list.splice(i, 1) }
      }
    }

    function createHref (base, fullPath, mode) {
      var path = mode === 'hash' ? '#' + fullPath : fullPath
      return base ? cleanPath(base + '/' + path) : path
    }

    // We cannot remove this as it would be a breaking change
    VueRouter.install = install
    VueRouter.version = '3.6.5'
    VueRouter.isNavigationFailure = isNavigationFailure
    VueRouter.NavigationFailureType = NavigationFailureType
    VueRouter.START_LOCATION = START

    if (inBrowser && window.Vue) {
      window.Vue.use(VueRouter)
    }

    var version = '3.6.5'
    /***/ },

  /***/ c8ba:
  /***/ function (module, exports) {
    var g

    // This works in non-strict mode
    g = (function () {
      return this
    })()

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function('return this')()
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === 'object') g = window
    }

    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}

    module.exports = g
    /***/ },

  /***/ ed09:
  /***/ function (module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /* unused harmony export EffectScope */
    /* unused harmony export computed */
    /* unused harmony export createApp */
    /* unused harmony export createRef */
    /* unused harmony export customRef */
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function () { return Plugin })
    /* unused harmony export defineAsyncComponent */
    /* unused harmony export defineComponent */
    /* unused harmony export del */
    /* unused harmony export effectScope */
    /* unused harmony export getCurrentInstance */
    /* unused harmony export getCurrentScope */
    /* unused harmony export h */
    /* unused harmony export inject */
    /* unused harmony export isRaw */
    /* unused harmony export isReactive */
    /* unused harmony export isReadonly */
    /* unused harmony export isRef */
    /* unused harmony export markRaw */
    /* unused harmony export nextTick */
    /* unused harmony export onActivated */
    /* unused harmony export onBeforeMount */
    /* unused harmony export onBeforeUnmount */
    /* unused harmony export onBeforeUpdate */
    /* unused harmony export onDeactivated */
    /* unused harmony export onErrorCaptured */
    /* unused harmony export onMounted */
    /* unused harmony export onScopeDispose */
    /* unused harmony export onServerPrefetch */
    /* unused harmony export onUnmounted */
    /* unused harmony export onUpdated */
    /* unused harmony export provide */
    /* unused harmony export proxyRefs */
    /* unused harmony export reactive */
    /* unused harmony export readonly */
    /* unused harmony export ref */
    /* unused harmony export set */
    /* unused harmony export shallowReactive */
    /* unused harmony export shallowReadonly */
    /* unused harmony export shallowRef */
    /* unused harmony export toRaw */
    /* unused harmony export toRef */
    /* unused harmony export toRefs */
    /* unused harmony export triggerRef */
    /* unused harmony export unref */
    /* unused harmony export useAttrs */
    /* unused harmony export useCSSModule */
    /* unused harmony export useCssModule */
    /* unused harmony export useSlots */
    /* unused harmony export version */
    /* unused harmony export warn */
    /* unused harmony export watch */
    /* unused harmony export watchEffect */
    /* unused harmony export watchPostEffect */
    /* unused harmony export watchSyncEffect */
    /******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p] }
      return extendStatics(d, b)
    }

    function __extends (d, b) {
      if (typeof b !== 'function' && b !== null) { throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null') }
      extendStatics(d, b)
      function __ () { this.constructor = d }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
    }

    var __assign = function () {
      __assign = Object.assign || function __assign (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
      return __assign.apply(this, arguments)
    }

    function __values (o) {
      var s = typeof Symbol === 'function' && Symbol.iterator; var m = s && o[s]; var i = 0
      if (m) return m.call(o)
      if (o && typeof o.length === 'number') {
        return {
          next: function () {
            if (o && i >= o.length) o = void 0
            return { value: o && o[i++], done: !o }
          }
        }
      }
      throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
    }

    function __read (o, n) {
      var m = typeof Symbol === 'function' && o[Symbol.iterator]
      if (!m) return o
      var i = m.call(o); var r; var ar = []; var e
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
      } catch (error) { e = { error: error } } finally {
        try {
          if (r && !r.done && (m = i.return)) m.call(i)
        } finally { if (e) throw e.error }
      }
      return ar
    }

    function __spreadArray (to, from, pack) {
      if (pack || arguments.length === 2) {
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i)
            ar[i] = from[i]
          }
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from))
    }

    /**
 * Displays a warning message (using console.error) with a stack trace if the
 * function is called inside of active component.
 *
 * @param message warning message to be displayed
 */
    function warn$1 (message) {
      var _a
      warn(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy)
    }

    var activeEffectScope
    var effectScopeStack = []
    var EffectScopeImpl = /** @class */ (function () {
      function EffectScopeImpl (vm) {
        this.active = true
        this.effects = []
        this.cleanups = []
        this.vm = vm
      }
      EffectScopeImpl.prototype.run = function (fn) {
        if (this.active) {
          try {
            this.on()
            return fn()
          } finally {
            this.off()
          }
        } else if ((false)) {}
      }
      EffectScopeImpl.prototype.on = function () {
        if (this.active) {
          effectScopeStack.push(this)
          activeEffectScope = this
        }
      }
      EffectScopeImpl.prototype.off = function () {
        if (this.active) {
          effectScopeStack.pop()
          activeEffectScope = effectScopeStack[effectScopeStack.length - 1]
        }
      }
      EffectScopeImpl.prototype.stop = function () {
        if (this.active) {
          this.vm.$destroy()
          this.effects.forEach(function (e) { return e.stop() })
          this.cleanups.forEach(function (cleanup) { return cleanup() })
          this.active = false
        }
      }
      return EffectScopeImpl
    }())
    var EffectScope = /** @class */ (function (_super) {
      __extends(EffectScope, _super)
      function EffectScope (detached) {
        if (detached === void 0) { detached = false }
        var _this = this
        var vm = undefined
        withCurrentInstanceTrackingDisabled(function () {
          vm = defineComponentInstance(getVueConstructor())
        })
        _this = _super.call(this, vm) || this
        if (!detached) {
          recordEffectScope(_this)
        }
        return _this
      }
      return EffectScope
    }(EffectScopeImpl))
    function recordEffectScope (effect, scope) {
      var _a
      scope = scope || activeEffectScope
      if (scope && scope.active) {
        scope.effects.push(effect)
        return
      }
      // destroy on parent component unmounted
      var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy
      vm && vm.$on('hook:destroyed', function () { return effect.stop() })
    }
    function effectScope (detached) {
      return new EffectScope(detached)
    }
    function getCurrentScope () {
      return activeEffectScope
    }
    function onScopeDispose (fn) {
      if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn)
      } else if ((false)) {}
    }
    /**
 * @internal
 **/
    function getCurrentScopeVM () {
      var _a, _b
      return ((_a = getCurrentScope()) === null || _a === void 0 ? void 0 : _a.vm) || ((_b = getCurrentInstance()) === null || _b === void 0 ? void 0 : _b.proxy)
    }
    /**
 * @internal
 **/
    function bindCurrentScopeToVM (vm) {
      if (!vm.scope) {
        var scope_1 = new EffectScopeImpl(vm.proxy)
        vm.scope = scope_1
        vm.proxy.$on('hook:destroyed', function () { return scope_1.stop() })
      }
      return vm.scope
    }

    var vueDependency = undefined
    try {
      var requiredVue = __webpack_require__('2b0e')
      if (requiredVue && isVue(requiredVue)) {
        vueDependency = requiredVue
      } else if (requiredVue &&
        'default' in requiredVue &&
        isVue(requiredVue.default)) {
        vueDependency = requiredVue.default
      }
    } catch (_a) {
    // not available
    }
    var vueConstructor = null
    var currentInstance = null
    var currentInstanceTracking = true
    var PluginInstalledFlag = '__composition_api_installed__'
    function isVue (obj) {
      return obj && isFunction(obj) && obj.name === 'Vue'
    }
    function isVueRegistered (Vue) {
    // resolve issue: https://github.com/vuejs/composition-api/issues/876#issue-1087619365
      return vueConstructor && hasOwn(Vue, PluginInstalledFlag)
    }
    function getVueConstructor () {
      if ((false)) {}
      return vueConstructor
    }
    // returns registered vue or `vue` dependency
    function getRegisteredVueOrDefault () {
      var constructor = vueConstructor || vueDependency
      if ((false)) {}
      return constructor
    }
    function setVueConstructor (Vue) {
    // @ts-ignore
      if (false) {}
      vueConstructor = Vue
      Object.defineProperty(Vue, PluginInstalledFlag, {
        configurable: true,
        writable: true,
        value: true
      })
    }
    /**
 * For `effectScope` to create instance without populate the current instance
 * @internal
 **/
    function withCurrentInstanceTrackingDisabled (fn) {
      var prev = currentInstanceTracking
      currentInstanceTracking = false
      try {
        fn()
      } finally {
        currentInstanceTracking = prev
      }
    }
    function setCurrentInstance (instance) {
      if (!currentInstanceTracking) { return }
      var prev = currentInstance
      prev === null || prev === void 0 ? void 0 : prev.scope.off()
      currentInstance = instance
      currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope.on()
    }
    function getCurrentInstance () {
      return currentInstance
    }
    var instanceMapCache = new WeakMap()
    function toVue3ComponentInstance (vm) {
      if (instanceMapCache.has(vm)) {
        return instanceMapCache.get(vm)
      }
      var instance = {
        proxy: vm,
        update: vm.$forceUpdate,
        type: vm.$options,
        uid: vm._uid,
        // $emit is defined on prototype and it expected to be bound
        emit: vm.$emit.bind(vm),
        parent: null,
        root: null // to be immediately set
      }
      bindCurrentScopeToVM(instance)
      // map vm.$props =
      var instanceProps = [
        'data',
        'props',
        'attrs',
        'refs',
        'vnode',
        'slots'
      ]
      instanceProps.forEach(function (prop) {
        proxy(instance, prop, {
          get: function () {
            return vm['$'.concat(prop)]
          }
        })
      })
      proxy(instance, 'isMounted', {
        get: function () {
          // @ts-expect-error private api
          return vm._isMounted
        }
      })
      proxy(instance, 'isUnmounted', {
        get: function () {
          // @ts-expect-error private api
          return vm._isDestroyed
        }
      })
      proxy(instance, 'isDeactivated', {
        get: function () {
          // @ts-expect-error private api
          return vm._inactive
        }
      })
      proxy(instance, 'emitted', {
        get: function () {
          // @ts-expect-error private api
          return vm._events
        }
      })
      instanceMapCache.set(vm, instance)
      if (vm.$parent) {
        instance.parent = toVue3ComponentInstance(vm.$parent)
      }
      if (vm.$root) {
        instance.root = toVue3ComponentInstance(vm.$root)
      }
      return instance
    }

    var toString = function (x) { return Object.prototype.toString.call(x) }
    function isNative (Ctor) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
    }
    var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys)
    var noopFn = function (_) { return _ }
    function proxy (target, key, _a) {
      var get = _a.get; var set = _a.set
      Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: get || noopFn,
        set: set || noopFn
      })
    }
    function def (obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      })
    }
    function hasOwn (obj, key) {
      return Object.hasOwnProperty.call(obj, key)
    }
    function assert (condition, msg) {
      if (!condition) {
        throw new Error('[vue-composition-api] '.concat(msg))
      }
    }
    function isPrimitive (value) {
      return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean')
    }
    function isArray (x) {
      return Array.isArray(x)
    }
    var objectToString = Object.prototype.toString
    var toTypeString = function (value) {
      return objectToString.call(value)
    }
    var isMap = function (val) {
      return toTypeString(val) === '[object Map]'
    }
    var isSet = function (val) {
      return toTypeString(val) === '[object Set]'
    }
    var MAX_VALID_ARRAY_LENGTH = 4294967295 // Math.pow(2, 32) - 1
    function isValidArrayIndex (val) {
      var n = parseFloat(String(val))
      return (n >= 0 &&
        Math.floor(n) === n &&
        isFinite(val) &&
        n <= MAX_VALID_ARRAY_LENGTH)
    }
    function isObject (val) {
      return val !== null && typeof val === 'object'
    }
    function isPlainObject (x) {
      return toString(x) === '[object Object]'
    }
    function isFunction (x) {
      return typeof x === 'function'
    }
    function isUndef (v) {
      return v === undefined || v === null
    }
    function warn (msg, vm) {
      var Vue = getRegisteredVueOrDefault()
      if (!Vue || !Vue.util) { console.warn('[vue-composition-api] '.concat(msg)) } else { Vue.util.warn(msg, vm) }
    }
    function logError (err, vm, info) {
      if ((false)) {}
      if (typeof window !== 'undefined' && typeof console !== 'undefined') {
        console.error(err)
      } else {
        throw err
      }
    }
    /**
 * Object.is polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 * */
    function isSame (value1, value2) {
      if (value1 === value2) {
        return value1 !== 0 || 1 / value1 === 1 / value2
      } else {
        return value1 !== value1 && value2 !== value2
      }
    }

    function getCurrentInstanceForFn (hook, target) {
      target = target || getCurrentInstance()
      if (false) {}
      return target
    }
    function defineComponentInstance (Ctor, options) {
      if (options === void 0) { options = {} }
      var silent = Ctor.config.silent
      Ctor.config.silent = true
      var vm = new Ctor(options)
      Ctor.config.silent = silent
      return vm
    }
    function isComponentInstance (obj) {
      var Vue = getVueConstructor()
      return Vue && obj instanceof Vue
    }
    function createSlotProxy (vm, slotName) {
      return function () {
        var args = []
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i]
        }
        if (!vm.$scopedSlots[slotName]) {
          if ((false)) {}
          return
        }
        return vm.$scopedSlots[slotName].apply(vm, args)
      }
    }
    function resolveSlots (slots, normalSlots) {
      var res
      if (!slots) {
        res = {}
      } else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized
      } else {
        res = {}
        for (var key in slots) {
          if (slots[key] && key[0] !== '$') {
            res[key] = true
          }
        }
      }
      // expose normal slots on scopedSlots
      for (var key in normalSlots) {
        if (!(key in res)) {
          res[key] = true
        }
      }
      return res
    }
    var vueInternalClasses
    var getVueInternalClasses = function () {
      if (!vueInternalClasses) {
        var vm = defineComponentInstance(getVueConstructor(), {
          computed: {
            value: function () {
              return 0
            }
          }
        })
        // to get Watcher class
        var Watcher = vm._computedWatchers.value.constructor
        // to get Dep class
        var Dep = vm._data.__ob__.dep.constructor
        vueInternalClasses = {
          Watcher: Watcher,
          Dep: Dep
        }
        vm.$destroy()
      }
      return vueInternalClasses
    }

    function createSymbol (name) {
      return hasSymbol ? Symbol.for(name) : name
    }
    var WatcherPreFlushQueueKey = createSymbol('composition-api.preFlushQueue')
    var WatcherPostFlushQueueKey = createSymbol('composition-api.postFlushQueue')
    // must be a string, symbol key is ignored in reactive
    var RefKey = 'composition-api.refKey'

    var accessModifiedSet = new WeakMap()
    var rawSet = new WeakMap()
    var readonlySet = new WeakMap()

    /**
 * Set a property on an object. Adds the new property, triggers change
 * notification and intercept it's subsequent access if the property doesn't
 * already exist.
 */
    function set$1 (target, key, val) {
      var Vue = getVueConstructor()
      // @ts-expect-error https://github.com/vuejs/vue/pull/12132
      var _a = Vue.util; var warn = _a.warn; var defineReactive = _a.defineReactive
      if (false) {}
      var ob = target.__ob__
      function ssrMockReactivity () {
        // in SSR, there is no __ob__. Mock for reactivity check
        if (ob && isObject(val) && !hasOwn(val, '__ob__')) {
          mockReactivityDeep(val)
        }
      }
      if (isArray(target)) {
        if (isValidArrayIndex(key)) {
          target.length = Math.max(target.length, key)
          target.splice(key, 1, val)
          ssrMockReactivity()
          return val
        } else if (key === 'length' && val !== target.length) {
          target.length = val
          ob === null || ob === void 0 ? void 0 : ob.dep.notify()
          return val
        }
      }
      if (key in target && !(key in Object.prototype)) {
        target[key] = val
        ssrMockReactivity()
        return val
      }
      if (target._isVue || (ob && ob.vmCount)) {
        (false) &&
            false
        return val
      }
      if (!ob) {
        target[key] = val
        return val
      }
      defineReactive(ob.value, key, val)
      // IMPORTANT: define access control before trigger watcher
      defineAccessControl(target, key, val)
      ssrMockReactivity()
      ob.dep.notify()
      return val
    }

    var _isForceTrigger = false
    function isForceTrigger () {
      return _isForceTrigger
    }
    function setForceTrigger (v) {
      _isForceTrigger = v
    }

    var RefImpl = /** @class */ (function () {
      function RefImpl (_a) {
        var get = _a.get; var set = _a.set
        proxy(this, 'value', {
          get: get,
          set: set
        })
      }
      return RefImpl
    }())
    function createRef (options, isReadonly, isComputed) {
      if (isReadonly === void 0) { isReadonly = false }
      if (isComputed === void 0) { isComputed = false }
      var r = new RefImpl(options)
      // add effect to differentiate refs from computed
      if (isComputed) { r.effect = true }
      // seal the ref, this could prevent ref from being observed
      // It's safe to seal the ref, since we really shouldn't extend it.
      // related issues: #79
      var sealed = Object.seal(r)
      if (isReadonly) { readonlySet.set(sealed, true) }
      return sealed
    }
    function ref (raw) {
      var _a
      if (isRef(raw)) {
        return raw
      }
      var value = reactive((_a = {}, _a[RefKey] = raw, _a))
      return createRef({
        get: function () { return value[RefKey] },
        set: function (v) { return (value[RefKey] = v) }
      })
    }
    function isRef (value) {
      return value instanceof RefImpl
    }
    function unref (ref) {
      return isRef(ref) ? ref.value : ref
    }
    function toRefs (obj) {
      if (false) {}
      if (!isPlainObject(obj)) { return obj }
      var ret = {}
      for (var key in obj) {
        ret[key] = toRef(obj, key)
      }
      return ret
    }
    function customRef (factory) {
      var version = ref(0)
      return createRef(factory(function () { return void version.value }, function () {
        ++version.value
      }))
    }
    function toRef (object, key) {
      if (!(key in object)) { set$1(object, key, undefined) }
      var v = object[key]
      if (isRef(v)) { return v }
      return createRef({
        get: function () { return object[key] },
        set: function (v) { return (object[key] = v) }
      })
    }
    function shallowRef (raw) {
      var _a
      if (isRef(raw)) {
        return raw
      }
      var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a))
      return createRef({
        get: function () { return value[RefKey] },
        set: function (v) { return (value[RefKey] = v) }
      })
    }
    function triggerRef (value) {
      if (!isRef(value)) { return }
      setForceTrigger(true)
      value.value = value.value
      setForceTrigger(false)
    }
    function proxyRefs (objectWithRefs) {
      var _a, e_1, _b
      if (isReactive(objectWithRefs)) {
        return objectWithRefs
      }
      var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a))
      def(value, RefKey, value[RefKey], false)
      var _loop_1 = function (key) {
        proxy(value, key, {
          get: function () {
            if (isRef(value[RefKey][key])) {
              return value[RefKey][key].value
            }
            return value[RefKey][key]
          },
          set: function (v) {
            if (isRef(value[RefKey][key])) {
              return (value[RefKey][key].value = unref(v))
            }
            value[RefKey][key] = unref(v)
          }
        })
      }
      try {
        for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
          var key = _d.value
          _loop_1(key)
        }
      } catch (e_1_1) { e_1 = { error: e_1_1 } } finally {
        try {
          if (_d && !_d.done && (_b = _c.return)) _b.call(_c)
        } finally { if (e_1) throw e_1.error }
      }
      return value
    }

    var SKIPFLAG = '__v_skip'
    function isRaw (obj) {
      var _a
      return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a[SKIPFLAG]))
    }
    function isReactive (obj) {
      var _a
      return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a[SKIPFLAG]))
    }
    /**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */
    function setupAccessControl (target) {
      if (!isPlainObject(target) ||
        isRaw(target) ||
        isArray(target) ||
        isRef(target) ||
        isComponentInstance(target) ||
        accessModifiedSet.has(target)) { return }
      accessModifiedSet.set(target, true)
      var keys = Object.keys(target)
      for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i])
      }
    }
    /**
 * Auto unwrapping when access property
 */
    function defineAccessControl (target, key, val) {
      if (key === '__ob__') { return }
      if (isRaw(target[key])) { return }
      var getter
      var setter
      var property = Object.getOwnPropertyDescriptor(target, key)
      if (property) {
        if (property.configurable === false) {
          return
        }
        getter = property.get
        setter = property.set
        if ((!getter || setter) /* not only have getter */ &&
            arguments.length === 2) {
          val = target[key]
        }
      }
      setupAccessControl(val)
      proxy(target, key, {
        get: function getterHandler () {
          var value = getter ? getter.call(target) : val
          // if the key is equal to RefKey, skip the unwrap logic
          if (key !== RefKey && isRef(value)) {
            return value.value
          } else {
            return value
          }
        },
        set: function setterHandler (newVal) {
          if (getter && !setter) { return }
          // If the key is equal to RefKey, skip the unwrap logic
          // If and only if "value" is ref and "newVal" is not a ref,
          // the assignment should be proxied to "value" ref.
          if (key !== RefKey && isRef(val) && !isRef(newVal)) {
            val.value = newVal
          } else if (setter) {
            setter.call(target, newVal)
            val = newVal
          } else {
            val = newVal
          }
          setupAccessControl(newVal)
        }
      })
    }
    function observe (obj) {
      var Vue = getRegisteredVueOrDefault()
      var observed
      if (Vue.observable) {
        observed = Vue.observable(obj)
      } else {
        var vm = defineComponentInstance(Vue, {
          data: {
            $$state: obj
          }
        })
        observed = vm._data.$$state
      }
      // in SSR, there is no __ob__. Mock for reactivity check
      if (!hasOwn(observed, '__ob__')) {
        mockReactivityDeep(observed)
      }
      return observed
    }
    /**
 * Mock __ob__ for object recursively
 */
    function mockReactivityDeep (obj, seen) {
      var e_1, _a
      if (seen === void 0) { seen = new Set() }
      if (seen.has(obj) || hasOwn(obj, '__ob__') || !Object.isExtensible(obj)) { return }
      def(obj, '__ob__', mockObserver(obj))
      seen.add(obj)
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value
          var value = obj[key]
          if (!(isPlainObject(value) || isArray(value)) ||
                isRaw(value) ||
                !Object.isExtensible(value)) {
            continue
          }
          mockReactivityDeep(value, seen)
        }
      } catch (e_1_1) { e_1 = { error: e_1_1 } } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b)
        } finally { if (e_1) throw e_1.error }
      }
    }
    function mockObserver (value) {
      if (value === void 0) { value = {} }
      return {
        value: value,
        dep: {
          notify: noopFn,
          depend: noopFn,
          addSub: noopFn,
          removeSub: noopFn
        }
      }
    }
    function createObserver () {
      return observe({}).__ob__
    }
    function shallowReactive (obj) {
      var e_2, _a
      if (!isObject(obj)) {
        if ((false)) {}
        return obj
      }
      if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj
      }
      var observed = observe(isArray(obj) ? [] : {})
      var ob = observed.__ob__
      var _loop_1 = function (key) {
        var val = obj[key]
        var getter
        var setter
        var property = Object.getOwnPropertyDescriptor(obj, key)
        if (property) {
          if (property.configurable === false) {
            return 'continue'
          }
          getter = property.get
          setter = property.set
        }
        proxy(observed, key, {
          get: function getterHandler () {
            var _a;
            (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.depend()
            return val
          },
          set: function setterHandler (newVal) {
            var _a
            if (getter && !setter) { return }
            if (!isForceTrigger() && val === newVal) { return }
            if (setter) {
              setter.call(obj, newVal)
            } else {
              val = newVal
            }
            (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.notify()
          }
        })
      }
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value
          _loop_1(key)
        }
      } catch (e_2_1) { e_2 = { error: e_2_1 } } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b)
        } finally { if (e_2) throw e_2.error }
      }
      return observed
    }
    /**
 * Make obj reactivity
 */
    function reactive (obj) {
      if (!isObject(obj)) {
        if ((false)) {}
        return obj
      }
      if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj
      }
      var observed = observe(obj)
      setupAccessControl(observed)
      return observed
    }
    /**
 * Make sure obj can't be a reactive
 */
    function markRaw (obj) {
      if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
        return obj
      }
      // set the vue observable flag at obj
      var ob = createObserver()
      ob[SKIPFLAG] = true
      def(obj, '__ob__', ob)
      // mark as Raw
      rawSet.set(obj, true)
      return obj
    }
    function toRaw (observed) {
      var _a
      if (isRaw(observed) || !Object.isExtensible(observed)) {
        return observed
      }
      return ((_a = observed === null || observed === void 0 ? void 0 : observed.__ob__) === null || _a === void 0 ? void 0 : _a.value) || observed
    }

    function isReadonly (obj) {
      return readonlySet.has(obj)
    }
    /**
 * **In @vue/composition-api, `reactive` only provides type-level readonly check**
 *
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
    function readonly (target) {
      if (false) {} else {
        readonlySet.set(target, true)
      }
      return target
    }
    function shallowReadonly (obj) {
      var e_1, _a
      if (!isObject(obj)) {
        if ((false)) {}
        return obj
      }
      if (!(isPlainObject(obj) || isArray(obj)) ||
        (!Object.isExtensible(obj) && !isRef(obj))) {
        return obj
      }
      var readonlyObj = isRef(obj)
        ? new RefImpl({})
        : isReactive(obj)
          ? observe({})
          : {}
      var source = reactive({})
      var ob = source.__ob__
      var _loop_1 = function (key) {
        var val = obj[key]
        var getter
        var property = Object.getOwnPropertyDescriptor(obj, key)
        if (property) {
          if (property.configurable === false && !isRef(obj)) {
            return 'continue'
          }
          getter = property.get
        }
        proxy(readonlyObj, key, {
          get: function getterHandler () {
            var value = getter ? getter.call(obj) : val
            ob.dep.depend()
            return value
          },
          set: function (v) {
            if ((false)) {}
          }
        })
      }
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value
          _loop_1(key)
        }
      } catch (e_1_1) { e_1 = { error: e_1_1 } } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b)
        } finally { if (e_1) throw e_1.error }
      }
      readonlySet.set(readonlyObj, true)
      return readonlyObj
    }

    /**
 * Delete a property and trigger change if necessary.
 */
    function del (target, key) {
      var Vue = getVueConstructor()
      var warn = Vue.util.warn
      if (false) {}
      if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1)
        return
      }
      var ob = target.__ob__
      if (target._isVue || (ob && ob.vmCount)) {
        (false) &&
            false
        return
      }
      if (!hasOwn(target, key)) {
        return
      }
      delete target[key]
      if (!ob) {
        return
      }
      ob.dep.notify()
    }

    var genName = function (name) { return 'on'.concat(name[0].toUpperCase() + name.slice(1)) }
    function createLifeCycle (lifeCyclehook) {
      return function (callback, target) {
        var instance = getCurrentInstanceForFn(genName(lifeCyclehook), target)
        return (instance &&
            injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback))
      }
    }
    function injectHookOption (Vue, instance, hook, val) {
      var options = instance.proxy.$options
      var mergeFn = Vue.config.optionMergeStrategies[hook]
      var wrappedHook = wrapHookCall(instance, val)
      options[hook] = mergeFn(options[hook], wrappedHook)
      return wrappedHook
    }
    function wrapHookCall (instance, fn) {
      return function () {
        var args = []
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i]
        }
        var prev = getCurrentInstance()
        setCurrentInstance(instance)
        try {
          return fn.apply(void 0, __spreadArray([], __read(args), false))
        } finally {
          setCurrentInstance(prev)
        }
      }
    }
    var onBeforeMount = createLifeCycle('beforeMount')
    var onMounted = createLifeCycle('mounted')
    var onBeforeUpdate = createLifeCycle('beforeUpdate')
    var onUpdated = createLifeCycle('updated')
    var onBeforeUnmount = createLifeCycle('beforeDestroy')
    var onUnmounted = createLifeCycle('destroyed')
    var onErrorCaptured = createLifeCycle('errorCaptured')
    var onActivated = createLifeCycle('activated')
    var onDeactivated = createLifeCycle('deactivated')
    var onServerPrefetch = createLifeCycle('serverPrefetch')

    var fallbackVM
    function flushPreQueue () {
      flushQueue(this, WatcherPreFlushQueueKey)
    }
    function flushPostQueue () {
      flushQueue(this, WatcherPostFlushQueueKey)
    }
    function hasWatchEnv (vm) {
      return vm[WatcherPreFlushQueueKey] !== undefined
    }
    function installWatchEnv (vm) {
      vm[WatcherPreFlushQueueKey] = []
      vm[WatcherPostFlushQueueKey] = []
      vm.$on('hook:beforeUpdate', flushPreQueue)
      vm.$on('hook:updated', flushPostQueue)
    }
    function getWatcherOption (options) {
      return __assign({
        immediate: false,
        deep: false,
        flush: 'pre'
      }, options)
    }
    function getWatchEffectOption (options) {
      return __assign({
        flush: 'pre'
      }, options)
    }
    function getWatcherVM () {
      var vm = getCurrentScopeVM()
      if (!vm) {
        if (!fallbackVM) {
          fallbackVM = defineComponentInstance(getVueConstructor())
        }
        vm = fallbackVM
      } else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm)
      }
      return vm
    }
    function flushQueue (vm, key) {
      var queue = vm[key]
      for (var index = 0; index < queue.length; index++) {
        queue[index]()
      }
      queue.length = 0
    }
    function queueFlushJob (vm, fn, mode) {
    // flush all when beforeUpdate and updated are not fired
      var fallbackFlush = function () {
        vm.$nextTick(function () {
          if (vm[WatcherPreFlushQueueKey].length) {
            flushQueue(vm, WatcherPreFlushQueueKey)
          }
          if (vm[WatcherPostFlushQueueKey].length) {
            flushQueue(vm, WatcherPostFlushQueueKey)
          }
        })
      }
      switch (mode) {
        case 'pre':
          fallbackFlush()
          vm[WatcherPreFlushQueueKey].push(fn)
          break
        case 'post':
          fallbackFlush()
          vm[WatcherPostFlushQueueKey].push(fn)
          break
        default:
          assert(false, 'flush must be one of ["post", "pre", "sync"], but got '.concat(mode))
          break
      }
    }
    function createVueWatcher (vm, getter, callback, options) {
      var index = vm._watchers.length
      // @ts-ignore: use undocumented options
      vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before
      })
      return vm._watchers[index]
    }
    // We have to monkeypatch the teardown function so Vue will run
    // runCleanup() when it tears down the watcher on unmounted.
    function patchWatcherTeardown (watcher, runCleanup) {
      var _teardown = watcher.teardown
      watcher.teardown = function () {
        var args = []
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i]
        }
        _teardown.apply(watcher, args)
        runCleanup()
      }
    }
    function createWatcher (vm, source, cb, options) {
      var _a
      if (false) {}
      var flushMode = options.flush
      var isSync = flushMode === 'sync'
      var cleanup
      var registerCleanup = function (fn) {
        cleanup = function () {
          try {
            fn()
          } catch (
            // FIXME: remove any
            error) {
            logError(error, vm, 'onCleanup()')
          }
        }
      }
      // cleanup before running getter again
      var runCleanup = function () {
        if (cleanup) {
          cleanup()
          cleanup = null
        }
      }
      var createScheduler = function (fn) {
        if (isSync ||
        /* without a current active instance, ignore pre|post mode */ vm ===
                fallbackVM) {
          return fn
        }
        return function () {
          var args = []
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i]
          }
          return queueFlushJob(vm, function () {
            fn.apply(void 0, __spreadArray([], __read(args), false))
          }, flushMode)
        }
      }
      // effect watch
      if (cb === null) {
        var running_1 = false
        var getter_1 = function () {
          // preventing the watch callback being call in the same execution
          if (running_1) {
            return
          }
          try {
            running_1 = true
            source(registerCleanup)
          } finally {
            running_1 = false
          }
        }
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
          deep: options.deep || false,
          sync: isSync,
          before: runCleanup
        })
        patchWatcherTeardown(watcher_1, runCleanup)
        // enable the watcher update
        watcher_1.lazy = false
        var originGet = watcher_1.get.bind(watcher_1)
        // always run watchEffect
        watcher_1.get = createScheduler(originGet)
        return function () {
          watcher_1.teardown()
        }
      }
      var deep = options.deep
      var isMultiSource = false
      var getter
      if (isRef(source)) {
        getter = function () { return source.value }
      } else if (isReactive(source)) {
        getter = function () { return source }
        deep = true
      } else if (isArray(source)) {
        isMultiSource = true
        getter = function () {
          return source.map(function (s) {
            if (isRef(s)) {
              return s.value
            } else if (isReactive(s)) {
              return traverse(s)
            } else if (isFunction(s)) {
              return s()
            } else {
              (false) &&
                        false
              return noopFn
            }
          })
        }
      } else if (isFunction(source)) {
        getter = source
      } else {
        getter = noopFn;
        (false) &&
            false
      }
      if (deep) {
        var baseGetter_1 = getter
        getter = function () { return traverse(baseGetter_1()) }
      }
      var applyCb = function (n, o) {
        if (!deep &&
            isMultiSource &&
            n.every(function (v, i) { return isSame(v, o[i]) })) { return }
        // cleanup before running cb again
        runCleanup()
        return cb(n, o, registerCleanup)
      }
      var callback = createScheduler(applyCb)
      if (options.immediate) {
        var originalCallback_1 = callback
        // `shiftCallback` is used to handle the first sync effect run.
        // The subsequent callbacks will redirect to `callback`.
        var shiftCallback_1 = function (n, o) {
          shiftCallback_1 = originalCallback_1
          // o is undefined on the first call
          return applyCb(n, isArray(n) ? [] : o)
        }
        callback = function (n, o) {
          return shiftCallback_1(n, o)
        }
      }
      // @ts-ignore: use undocumented option "sync"
      var stop = vm.$watch(getter, callback, {
        immediate: options.immediate,
        deep: deep,
        sync: isSync
      })
      // Once again, we have to hack the watcher for proper teardown
      var watcher = vm._watchers[vm._watchers.length - 1]
      // if the return value is reactive and deep:true
      // watch for changes, this might happen when new key is added
      if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
        watcher.value.__ob__.dep.addSub({
          update: function () {
            // this will force the source to be reevaluated and the callback
            // executed if needed
            watcher.run()
          }
        })
      }
      patchWatcherTeardown(watcher, runCleanup)
      return function () {
        stop()
      }
    }
    function watchEffect (effect, options) {
      var opts = getWatchEffectOption(options)
      var vm = getWatcherVM()
      return createWatcher(vm, effect, null, opts)
    }
    function watchPostEffect (effect) {
      return watchEffect(effect, { flush: 'post' })
    }
    function watchSyncEffect (effect) {
      return watchEffect(effect, { flush: 'sync' })
    }
    // implementation
    function watch (source, cb, options) {
      var callback = null
      if (isFunction(cb)) {
        // source watch
        callback = cb
      } else {
        // effect watch
        if ((false)) {}
        options = cb
        callback = null
      }
      var opts = getWatcherOption(options)
      var vm = getWatcherVM()
      return createWatcher(vm, source, callback, opts)
    }
    function traverse (value, seen) {
      if (seen === void 0) { seen = new Set() }
      if (!isObject(value) || seen.has(value) || rawSet.has(value)) {
        return value
      }
      seen.add(value)
      if (isRef(value)) {
        traverse(value.value, seen)
      } else if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          traverse(value[i], seen)
        }
      } else if (isSet(value) || isMap(value)) {
        value.forEach(function (v) {
          traverse(v, seen)
        })
      } else if (isPlainObject(value)) {
        for (var key in value) {
          traverse(value[key], seen)
        }
      }
      return value
    }

    // implement
    function computed (getterOrOptions) {
      var vm = getCurrentScopeVM()
      var getter
      var setter
      if (isFunction(getterOrOptions)) {
        getter = getterOrOptions
      } else {
        getter = getterOrOptions.get
        setter = getterOrOptions.set
      }
      var computedSetter
      var computedGetter
      if (vm && !vm.$isServer) {
        var _a = getVueInternalClasses(); var Watcher_1 = _a.Watcher; var Dep_1 = _a.Dep
        var watcher_1
        computedGetter = function () {
          if (!watcher_1) {
            watcher_1 = new Watcher_1(vm, getter, noopFn, { lazy: true })
          }
          if (watcher_1.dirty) {
            watcher_1.evaluate()
          }
          if (Dep_1.target) {
            watcher_1.depend()
          }
          return watcher_1.value
        }
        computedSetter = function (v) {
          if (false) {}
          if (setter) {
            setter(v)
          }
        }
      } else {
        // fallback
        var computedHost_1 = defineComponentInstance(getVueConstructor(), {
          computed: {
            $$state: {
              get: getter,
              set: setter
            }
          }
        })
        vm && vm.$on('hook:destroyed', function () { return computedHost_1.$destroy() })
        computedGetter = function () { return computedHost_1.$$state }
        computedSetter = function (v) {
          if (false) {}
          computedHost_1.$$state = v
        }
      }
      return createRef({
        get: computedGetter,
        set: computedSetter
      }, !setter, true)
    }

    var NOT_FOUND = {}
    function resolveInject (provideKey, vm) {
      var source = vm
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          return source._provided[provideKey]
        }
        source = source.$parent
      }
      return NOT_FOUND
    }
    function provide (key, value) {
      var _a
      var vm = (_a = getCurrentInstanceForFn('provide')) === null || _a === void 0 ? void 0 : _a.proxy
      if (!vm) { return }
      if (!vm._provided) {
        var provideCache_1 = {}
        proxy(vm, '_provided', {
          get: function () { return provideCache_1 },
          set: function (v) { return Object.assign(provideCache_1, v) }
        })
      }
      vm._provided[key] = value
    }
    function inject (key, defaultValue, treatDefaultAsFactory) {
      var _a
      if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false }
      var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy
      if (!vm) {
        (false) &&
            false
        return
      }
      if (!key) {
        (false) && false
        return defaultValue
      }
      var val = resolveInject(key, vm)
      if (val !== NOT_FOUND) {
        return val
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue)
          ? defaultValue()
          : defaultValue
      } else if ((false)) {}
    }

    var EMPTY_OBJ = (false)
      ? undefined
      : {}
    var useCssModule = function (name) {
      var _a
      if (name === void 0) { name = '$style' }
      var instance = getCurrentInstance()
      if (!instance) {
        (false) && false
        return EMPTY_OBJ
      }
      var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name]
      if (!mod) {
        (false) &&
            false
        return EMPTY_OBJ
      }
      return mod
    }
    /**
 * @deprecated use `useCssModule` instead.
 */
    var useCSSModule = useCssModule

    function createApp (rootComponent, rootProps) {
      if (rootProps === void 0) { rootProps = undefined }
      var V = getVueConstructor()
      var mountedVM = undefined
      var provide = {}
      var app = {
        config: V.config,
        use: V.use.bind(V),
        mixin: V.mixin.bind(V),
        component: V.component.bind(V),
        provide: function (key, value) {
          provide[key] = value
          return this
        },
        directive: function (name, dir) {
          if (dir) {
            V.directive(name, dir)
            return app
          } else {
            return V.directive(name)
          }
        },
        mount: function (el, hydrating) {
          if (!mountedVM) {
            mountedVM = new V(__assign(__assign({ propsData: rootProps }, rootComponent), { provide: __assign(__assign({}, provide), rootComponent.provide) }))
            mountedVM.$mount(el, hydrating)
            return mountedVM
          } else {
            if ((false)) {}
            return mountedVM
          }
        },
        unmount: function () {
          if (mountedVM) {
            mountedVM.$destroy()
            mountedVM = undefined
          } else if ((false)) {}
        }
      }
      return app
    }

    var nextTick = function nextTick () {
      var _a
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args)
    }

    var fallbackCreateElement
    var createElement = function createElement () {
      var _a
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      var instance = (this === null || this === void 0 ? void 0 : this.proxy) || ((_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy)
      if (!instance) {
        (false) &&
            false
        if (!fallbackCreateElement) {
          fallbackCreateElement = defineComponentInstance(getVueConstructor()).$createElement
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args)
      }
      return instance.$createElement.apply(instance, args)
    }

    function useSlots () {
      return getContext().slots
    }
    function useAttrs () {
      return getContext().attrs
    }
    function getContext () {
      var i = getCurrentInstance()
      if (false) {}
      return i.setupContext
    }

    function set (vm, key, value) {
      var state = (vm.__composition_api_state__ =
        vm.__composition_api_state__ || {})
      state[key] = value
    }
    function get (vm, key) {
      return (vm.__composition_api_state__ || {})[key]
    }
    var vmStateManager = {
      set: set,
      get: get
    }

    function asVmProperty (vm, propName, propValue) {
      var props = vm.$options.props
      if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        if (isRef(propValue)) {
          proxy(vm, propName, {
            get: function () { return propValue.value },
            set: function (val) {
              propValue.value = val
            }
          })
        } else {
          proxy(vm, propName, {
            get: function () {
              if (isReactive(propValue)) {
                propValue.__ob__.dep.depend()
              }
              return propValue
            },
            set: function (val) {
              propValue = val
            }
          })
        }
        if ((false)) {}
      } else if ((false)) {}
    }
    function updateTemplateRef (vm) {
      var rawBindings = vmStateManager.get(vm, 'rawBindings') || {}
      if (!rawBindings || !Object.keys(rawBindings).length) { return }
      var refs = vm.$refs
      var oldRefKeys = vmStateManager.get(vm, 'refs') || []
      for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index]
        var setupValue = rawBindings[key]
        if (!refs[key] && setupValue && isRef(setupValue)) {
          setupValue.value = null
        }
      }
      var newKeys = Object.keys(refs)
      var validNewKeys = []
      for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index]
        var setupValue = rawBindings[key]
        if (refs[key] && setupValue && isRef(setupValue)) {
          setupValue.value = refs[key]
          validNewKeys.push(key)
        }
      }
      vmStateManager.set(vm, 'refs', validNewKeys)
    }
    function afterRender (vm) {
      var stack = [vm._vnode]
      while (stack.length) {
        var vnode = stack.pop()
        if (vnode) {
          if (vnode.context) { updateTemplateRef(vnode.context) }
          if (vnode.children) {
            for (var i = 0; i < vnode.children.length; ++i) {
              stack.push(vnode.children[i])
            }
          }
        }
      }
    }
    function updateVmAttrs (vm, ctx) {
      var e_1, _a
      if (!vm) {
        return
      }
      var attrBindings = vmStateManager.get(vm, 'attrBindings')
      if (!attrBindings && !ctx) {
        // fix 840
        return
      }
      if (!attrBindings) {
        var observedData = reactive({})
        attrBindings = { ctx: ctx, data: observedData }
        vmStateManager.set(vm, 'attrBindings', attrBindings)
        proxy(ctx, 'attrs', {
          get: function () {
            return attrBindings === null || attrBindings === void 0 ? void 0 : attrBindings.data
          },
          set: function () {
            (false) &&
                    false
          }
        })
      }
      var source = vm.$attrs
      var _loop_1 = function (attr) {
        if (!hasOwn(attrBindings.data, attr)) {
          proxy(attrBindings.data, attr, {
            get: function () {
              // to ensure it always return the latest value
              return vm.$attrs[attr]
            }
          })
        }
      }
      try {
        for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var attr = _c.value
          _loop_1(attr)
        }
      } catch (e_1_1) { e_1 = { error: e_1_1 } } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b)
        } finally { if (e_1) throw e_1.error }
      }
    }
    function resolveScopedSlots (vm, slotsProxy) {
      var parentVNode = vm.$options._parentVnode
      if (!parentVNode) { return }
      var prevSlots = vmStateManager.get(vm, 'slots') || []
      var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots)
      // remove staled slots
      for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index]
        if (!curSlots[key]) {
          delete slotsProxy[key]
        }
      }
      // proxy fresh slots
      var slotNames = Object.keys(curSlots)
      for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index]
        if (!slotsProxy[key]) {
          slotsProxy[key] = createSlotProxy(vm, key)
        }
      }
      vmStateManager.set(vm, 'slots', slotNames)
    }
    function activateCurrentInstance (instance, fn, onError) {
      var preVm = getCurrentInstance()
      setCurrentInstance(instance)
      try {
        return fn(instance)
      } catch (
      // FIXME: remove any
        err) {
        if (onError) {
          onError(err)
        } else {
          throw err
        }
      } finally {
        setCurrentInstance(preVm)
      }
    }

    function mixin (Vue) {
      Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function () {
          afterRender(this)
        },
        beforeUpdate: function () {
          updateVmAttrs(this)
        },
        updated: function () {
          afterRender(this)
        }
      })
      /**
     * Vuex init hook, injected into each instances init hooks list.
     */
      function functionApiInit () {
        var vm = this
        var $options = vm.$options
        var setup = $options.setup; var render = $options.render
        if (render) {
          // keep currentInstance accessible for createElement
          $options.render = function () {
            var _this = this
            var args = []
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i]
            }
            return activateCurrentInstance(toVue3ComponentInstance(vm), function () {
              return render.apply(_this, args)
            })
          }
        }
        if (!setup) {
          return
        }
        if (!isFunction(setup)) {
          if ((false)) {}
          return
        }
        var data = $options.data
        // wrapper the data option, so we can invoke setup before data get resolved
        $options.data = function wrappedData () {
          initSetup(vm, vm.$props)
          return isFunction(data)
            ? data.call(vm, vm)
            : data || {}
        }
      }
      function initSetup (vm, props) {
        if (props === void 0) { props = {} }
        var setup = vm.$options.setup
        var ctx = createSetupContext(vm)
        var instance = toVue3ComponentInstance(vm)
        instance.setupContext = ctx
        // fake reactive for `toRefs(props)`
        def(props, '__ob__', createObserver())
        // resolve scopedSlots and slots to functions
        resolveScopedSlots(vm, ctx.slots)
        var binding
        activateCurrentInstance(instance, function () {
          // make props to be fake reactive, this is for `toRefs(props)`
          binding = setup(props, ctx)
        })
        if (!binding) { return }
        if (isFunction(binding)) {
          // keep typescript happy with the binding type.
          var bindingFunc_1 = binding
          // keep currentInstance accessible for createElement
          vm.$options.render = function () {
            resolveScopedSlots(vm, ctx.slots)
            return activateCurrentInstance(instance, function () { return bindingFunc_1() })
          }
          return
        } else if (isObject(binding)) {
          if (isReactive(binding)) {
            binding = toRefs(binding)
          }
          vmStateManager.set(vm, 'rawBindings', binding)
          var bindingObj_1 = binding
          Object.keys(bindingObj_1).forEach(function (name) {
            var bindingValue = bindingObj_1[name]
            if (!isRef(bindingValue)) {
              if (!isReactive(bindingValue)) {
                if (isFunction(bindingValue)) {
                  var copy_1 = bindingValue
                  bindingValue = bindingValue.bind(vm)
                  Object.keys(copy_1).forEach(function (ele) {
                    bindingValue[ele] = copy_1[ele]
                  })
                } else if (!isObject(bindingValue)) {
                  bindingValue = ref(bindingValue)
                } else if (hasReactiveArrayChild(bindingValue)) {
                  // creates a custom reactive properties without make the object explicitly reactive
                  // NOTE we should try to avoid this, better implementation needed
                  customReactive(bindingValue)
                }
              } else if (isArray(bindingValue)) {
                bindingValue = ref(bindingValue)
              }
            }
            asVmProperty(vm, name, bindingValue)
          })
          return
        }
        if ((false)) {}
      }
      function customReactive (target, seen) {
        if (seen === void 0) { seen = new Set() }
        if (seen.has(target)) { return }
        if (!isPlainObject(target) ||
            isRef(target) ||
            isReactive(target) ||
            isRaw(target)) { return }
        var Vue = getVueConstructor()
        // @ts-expect-error https://github.com/vuejs/vue/pull/12132
        var defineReactive = Vue.util.defineReactive
        Object.keys(target).forEach(function (k) {
          var val = target[k]
          defineReactive(target, k, val)
          if (val) {
            seen.add(val)
            customReactive(val, seen)
          }
        })
      }
      function hasReactiveArrayChild (target, visited) {
        if (visited === void 0) { visited = new Map() }
        if (visited.has(target)) {
          return visited.get(target)
        }
        visited.set(target, false)
        if (isArray(target) && isReactive(target)) {
          visited.set(target, true)
          return true
        }
        if (!isPlainObject(target) || isRaw(target) || isRef(target)) {
          return false
        }
        return Object.keys(target).some(function (x) {
          return hasReactiveArrayChild(target[x], visited)
        })
      }
      function createSetupContext (vm) {
        var ctx = { slots: {} }
        var propsPlain = [
          'root',
          'parent',
          'refs',
          'listeners',
          'isServer',
          'ssrContext'
        ]
        var methodReturnVoid = ['emit']
        propsPlain.forEach(function (key) {
          var srcKey = '$'.concat(key)
          proxy(ctx, key, {
            get: function () { return vm[srcKey] },
            set: function () {
              (false) &&
                        false
            }
          })
        })
        updateVmAttrs(vm, ctx)
        methodReturnVoid.forEach(function (key) {
          var srcKey = '$'.concat(key)
          proxy(ctx, key, {
            get: function () {
              return function () {
                var args = []
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i]
                }
                var fn = vm[srcKey]
                fn.apply(vm, args)
              }
            }
          })
        })
        if (false) {}
        return ctx
      }
    }

    /**
 * Helper that recursively merges two data objects together.
 */
    function mergeData (from, to) {
      if (!from) { return to }
      if (!to) { return from }
      var key
      var toVal
      var fromVal
      var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from)
      for (var i = 0; i < keys.length; i++) {
        key = keys[i]
        // in case the object is already observed...
        if (key === '__ob__') { continue }
        toVal = to[key]
        fromVal = from[key]
        if (!hasOwn(to, key)) {
          to[key] = fromVal
        } else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            !isRef(toVal) &&
            isPlainObject(fromVal) &&
            !isRef(fromVal)) {
          mergeData(fromVal, toVal)
        }
      }
      return to
    }
    function install (Vue) {
      if (isVueRegistered(Vue)) {
        if ((false)) {}
        return
      }
      if ((false)) {}
      Vue.config.optionMergeStrategies.setup = function (parent, child) {
        return function mergedSetupFn (props, context) {
          return mergeData(isFunction(parent) ? parent(props, context) || {} : undefined, isFunction(child) ? child(props, context) || {} : undefined)
        }
      }
      setVueConstructor(Vue)
      mixin(Vue)
    }
    var Plugin = {
      install: function (Vue) { return install(Vue) }
    }

    // implementation, close to no-op
    function defineComponent (options) {
      return options
    }

    function defineAsyncComponent (source) {
      if (isFunction(source)) {
        source = { loader: source }
      }
      var loader = source.loader; var loadingComponent = source.loadingComponent; var errorComponent = source.errorComponent; var _a = source.delay; var delay = _a === void 0 ? 200 : _a; var timeout = source.timeout // undefined = never times out
      var _b = source.suspensible // undefined = never times out
      var suspensible = _b === void 0 ? false : _b // in Vue 3 default is true
      var userOnError = source.onError
      if (false) {}
      var pendingRequest = null
      var retries = 0
      var retry = function () {
        retries++
        pendingRequest = null
        return load()
      }
      var load = function () {
        var thisRequest
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                  .catch(function (err) {
                    err = err instanceof Error ? err : new Error(String(err))
                    if (userOnError) {
                      return new Promise(function (resolve, reject) {
                        var userRetry = function () { return resolve(retry()) }
                        var userFail = function () { return reject(err) }
                        userOnError(err, userRetry, userFail, retries + 1)
                      })
                    } else {
                      throw err
                    }
                  })
                  .then(function (comp) {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                      return pendingRequest
                    }
                    if (false) {}
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                      comp = comp.default
                    }
                    if (false) {}
                    return comp
                  })))
      }
      return function () {
        var component = load()
        return {
          component: component,
          delay: delay,
          timeout: timeout,
          error: errorComponent,
          loading: loadingComponent
        }
      }
    }

    var version = '1.7.2'
    // auto install when using CDN
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(Plugin)
    }
    /***/ }

}])
