(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./app/Resources/assets/js/app.js":
/*!****************************************!*\
  !*** ./app/Resources/assets/js/app.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var buefy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buefy */ "./node_modules/buefy/dist/esm/index.js");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buefy/dist/buefy.css */ "./node_modules/buefy/dist/buefy.css");
/* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Include sass
 * To make webpack compile and publish something, just require()
 * or import it. In this case a SASS file. Webpack will compile a separate css file
 * even though it is included here
 *
 * You can also use (instead of the require() below)
 * .addStyleEntry('app', './app/Resources/assets/sass/app.scss')
 * in webpack.config.js. It's commented now. Whatever you like.
 */
__webpack_require__(/*! ../sass/app.scss */ "./app/Resources/assets/sass/app.scss");
/**
 * Include additional dependencies
 */




/*
 * require or import the bundle assets
 * Note that you can also add a new entry in webpack.config.js - this wil result in a separate file in /public/build
 * todo: check if this can be done automatic upon bundle registration
 */

__webpack_require__(/*! ../../../../src/ExampleBundle/Resources/assets/js/example.js */ "./src/ExampleBundle/Resources/assets/js/example.js");

/***/ }),

/***/ "./app/Resources/assets/sass/app.scss":
/*!********************************************!*\
  !*** ./app/Resources/assets/sass/app.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      check: '✅'
    };
  },
  mounted: function mounted() {
    this.$emit('isWorking', {
      isWorking: true
    });
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=template&id=98593980&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=template&id=98593980& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("span", { staticClass: "display" }, [_vm._v(_vm._s(_vm.check))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/ExampleBundle/Resources/assets/js/example.js":
/*!**********************************************************!*\
  !*** ./src/ExampleBundle/Resources/assets/js/example.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var buefy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buefy */ "./node_modules/buefy/dist/esm/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _vue_checkVueComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue/checkVueComponent */ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue");


__webpack_require__(/*! ../sass/example.scss */ "./src/ExampleBundle/Resources/assets/sass/example.scss");
/* Load Vue */




/* Use Buefy in Vue */

vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(buefy__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.addEventListener('load', function () {
  // instantiate Vue
  new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
    el: '#site',
    components: {
      VueCheckComponent: _vue_checkVueComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
    },
    mounted: function mounted() {
      this.$refs.vueCheck.innerText = '✅';
    }
  }); // show that JS is working

  document.getElementById('js-check').innerHTML = '✅';
});

/***/ }),

/***/ "./src/ExampleBundle/Resources/assets/sass/example.scss":
/*!**************************************************************!*\
  !*** ./src/ExampleBundle/Resources/assets/sass/example.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue":
/*!***************************************************************!*\
  !*** ./src/ExampleBundle/Resources/vue/checkVueComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkVueComponent_vue_vue_type_template_id_98593980___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkVueComponent.vue?vue&type=template&id=98593980& */ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=template&id=98593980&");
/* harmony import */ var _checkVueComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkVueComponent.vue?vue&type=script&lang=js& */ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkVueComponent.vue?vue&type=style&index=0&lang=css& */ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkVueComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkVueComponent_vue_vue_type_template_id_98593980___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkVueComponent_vue_vue_type_template_id_98593980___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ExampleBundle/Resources/vue/checkVueComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkVueComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkVueComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=template&id=98593980&":
/*!**********************************************************************************************!*\
  !*** ./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=template&id=98593980& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_template_id_98593980___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkVueComponent.vue?vue&type=template&id=98593980& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ExampleBundle/Resources/vue/checkVueComponent.vue?vue&type=template&id=98593980&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_template_id_98593980___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_template_id_98593980___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["./app/Resources/assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvUmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL0V4YW1wbGVCdW5kbGUvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4YW1wbGVCdW5kbGUvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWU/OTE0MiIsIndlYnBhY2s6Ly8vLi9zcmMvRXhhbXBsZUJ1bmRsZS9SZXNvdXJjZXMvdnVlL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT81NDExIiwid2VicGFjazovLy8uL3NyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy9hc3NldHMvanMvZXhhbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXhhbXBsZUJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL3Nhc3MvZXhhbXBsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL3NyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlPzZhN2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4YW1wbGVCdW5kbGUvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWU/OGIxYyIsIndlYnBhY2s6Ly8vLi9zcmMvRXhhbXBsZUJ1bmRsZS9SZXNvdXJjZXMvdnVlL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT9iMzY1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJWdWUiLCJ1c2UiLCJCdWVmeSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbCIsImNvbXBvbmVudHMiLCJWdWVDaGVja0NvbXBvbmVudCIsIm1vdW50ZWQiLCIkcmVmcyIsInZ1ZUNoZWNrIiwiaW5uZXJUZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQUEsbUJBQU8sQ0FBQyw4REFBRCxDQUFQO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUlBOzs7Ozs7QUFLQUEsbUJBQU8sQ0FBQyx3SEFBRCxDQUFQLEM7Ozs7Ozs7Ozs7O0FDekJBLHVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0tBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTEE7QUFNQSxTQU5BLHFCQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQSxHOzs7Ozs7Ozs7OztBQ0xBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUFBLG1CQUFPLENBQUMsb0ZBQUQsQ0FBUDtBQUVBOzs7QUFDQTtBQUNBO0FBRUE7O0FBQ0FDLDJDQUFHLENBQUNDLEdBQUosQ0FBUUMsNkNBQVI7QUFFQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQ3hDO0FBQ0EsTUFBSUosMkNBQUosQ0FBUTtBQUNKSyxNQUFFLEVBQUUsT0FEQTtBQUVKQyxjQUFVLEVBQUU7QUFBQ0MsdUJBQWlCLEVBQWpCQSw4REFBaUJBO0FBQWxCLEtBRlI7QUFHSkMsV0FISSxxQkFHTTtBQUNOLFdBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsU0FBcEIsR0FBZ0MsR0FBaEM7QUFDSDtBQUxHLEdBQVIsRUFGd0MsQ0FVeEM7O0FBQ0FDLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsU0FBcEMsR0FBZ0QsR0FBaEQ7QUFFSCxDQWJELEU7Ozs7Ozs7Ozs7O0FDWEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDM0I7QUFDTDtBQUNhOzs7QUFHN0U7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsdUZBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsNlBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBdVYsQ0FBZ0Isb1hBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBJbmNsdWRlIHNhc3NcbiAqIFRvIG1ha2Ugd2VicGFjayBjb21waWxlIGFuZCBwdWJsaXNoIHNvbWV0aGluZywganVzdCByZXF1aXJlKClcbiAqIG9yIGltcG9ydCBpdC4gSW4gdGhpcyBjYXNlIGEgU0FTUyBmaWxlLiBXZWJwYWNrIHdpbGwgY29tcGlsZSBhIHNlcGFyYXRlIGNzcyBmaWxlXG4gKiBldmVuIHRob3VnaCBpdCBpcyBpbmNsdWRlZCBoZXJlXG4gKlxuICogWW91IGNhbiBhbHNvIHVzZSAoaW5zdGVhZCBvZiB0aGUgcmVxdWlyZSgpIGJlbG93KVxuICogLmFkZFN0eWxlRW50cnkoJ2FwcCcsICcuL2FwcC9SZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3MnKVxuICogaW4gd2VicGFjay5jb25maWcuanMuIEl0J3MgY29tbWVudGVkIG5vdy4gV2hhdGV2ZXIgeW91IGxpa2UuXG4gKi9cbnJlcXVpcmUoJy4uL3Nhc3MvYXBwLnNjc3MnKTtcblxuLyoqXG4gKiBJbmNsdWRlIGFkZGl0aW9uYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBCdWVmeSBmcm9tICdidWVmeSdcbmltcG9ydCAnYnVlZnkvZGlzdC9idWVmeS5jc3MnXG5cblxuXG4vKlxuICogcmVxdWlyZSBvciBpbXBvcnQgdGhlIGJ1bmRsZSBhc3NldHNcbiAqIE5vdGUgdGhhdCB5b3UgY2FuIGFsc28gYWRkIGEgbmV3IGVudHJ5IGluIHdlYnBhY2suY29uZmlnLmpzIC0gdGhpcyB3aWwgcmVzdWx0IGluIGEgc2VwYXJhdGUgZmlsZSBpbiAvcHVibGljL2J1aWxkXG4gKiB0b2RvOiBjaGVjayBpZiB0aGlzIGNhbiBiZSBkb25lIGF1dG9tYXRpYyB1cG9uIGJ1bmRsZSByZWdpc3RyYXRpb25cbiAqL1xucmVxdWlyZSgnLi4vLi4vLi4vLi4vc3JjL0V4YW1wbGVCdW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9qcy9leGFtcGxlLmpzJyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCI8dGVtcGxhdGU+XG4gICAgPHNwYW4gY2xhc3M9XCJkaXNwbGF5XCI+e3sgY2hlY2sgfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGVjazogJ+KchSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaXNXb3JraW5nJywge2lzV29ya2luZzogdHJ1ZX0pO1xuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLyogVGhlc2Ugc3R5bGVzIGFyZSBhbHNvIGluY2x1ZGVkIGluIHRoZSAnbWFpbicgY3NzIGZpbGUgKi9cbiAgICAuZGlzcGxheSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG5cbjwvc3R5bGU+XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXlcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY2hlY2spKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IEJ1ZWZ5IGZyb20gXCJidWVmeVwiO1xuXG5yZXF1aXJlKCcuLi9zYXNzL2V4YW1wbGUuc2NzcycpXG5cbi8qIExvYWQgVnVlICovXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWVDaGVja0NvbXBvbmVudCBmcm9tICcuLi8uLi92dWUvY2hlY2tWdWVDb21wb25lbnQnXG5cbi8qIFVzZSBCdWVmeSBpbiBWdWUgKi9cblZ1ZS51c2UoQnVlZnkpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIC8vIGluc3RhbnRpYXRlIFZ1ZVxuICAgIG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNzaXRlJyxcbiAgICAgICAgY29tcG9uZW50czoge1Z1ZUNoZWNrQ29tcG9uZW50fSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMudnVlQ2hlY2suaW5uZXJUZXh0ID0gJ+KchSc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHNob3cgdGhhdCBKUyBpcyB3b3JraW5nXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWNoZWNrJykuaW5uZXJIVE1MID0gJ+KchSc7XG5cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTg1OTM5ODAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9uYXRoYW4vUHJvamVjdHMvYml0ZmFjdG9yeS9waW1jb3JlLmFzc2V0cy9waW1jb3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk4NTkzOTgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk4NTkzOTgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk4NTkzOTgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTg1OTM5ODAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTg1OTM5ODAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ODU5Mzk4MCZcIiJdLCJzb3VyY2VSb290IjoiIn0=