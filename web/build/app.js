(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./app/Resources/assets/js/app.js":
/*!****************************************!*\
  !*** ./app/Resources/assets/js/app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _vue_checkVueComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vue/checkVueComponent */ "./src/ExampleBundle/Resources/vue/checkVueComponent.vue");
__webpack_require__(/*! ../sass/example.scss */ "./src/ExampleBundle/Resources/assets/sass/example.scss");
/* Load Vue */




window.addEventListener('load', function () {
  // instantiate Vue
  new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    el: '#site',
    components: {
      VueCheckComponent: _vue_checkVueComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvUmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL0V4YW1wbGVCdW5kbGUvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4YW1wbGVCdW5kbGUvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWU/OTE0MiIsIndlYnBhY2s6Ly8vLi9zcmMvRXhhbXBsZUJ1bmRsZS9SZXNvdXJjZXMvdnVlL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT81NDExIiwid2VicGFjazovLy8uL3NyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy9hc3NldHMvanMvZXhhbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXhhbXBsZUJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL3Nhc3MvZXhhbXBsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL3NyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlPzZhN2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4YW1wbGVCdW5kbGUvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWU/OGIxYyIsIndlYnBhY2s6Ly8vLi9zcmMvRXhhbXBsZUJ1bmRsZS9SZXNvdXJjZXMvdnVlL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT9iMzY1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiVnVlIiwiZWwiLCJjb21wb25lbnRzIiwiVnVlQ2hlY2tDb21wb25lbnQiLCJtb3VudGVkIiwiJHJlZnMiLCJ2dWVDaGVjayIsImlubmVyVGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUFBLG1CQUFPLENBQUMsOERBQUQsQ0FBUDtBQUVBOzs7Ozs7O0FBS0FBLG1CQUFPLENBQUMsd0hBQUQsQ0FBUCxDOzs7Ozs7Ozs7OztBQ2pCQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQUxBO0FBTUEsU0FOQSxxQkFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkEsRzs7Ozs7Ozs7Ozs7QUNMQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQQUE7QUFBQUE7QUFBQUE7QUFBQUEsbUJBQU8sQ0FBQyxvRkFBRCxDQUFQO0FBRUE7OztBQUNBO0FBQ0E7QUFFQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQ3hDO0FBQ0EsTUFBSUMsMkNBQUosQ0FBUTtBQUNKQyxNQUFFLEVBQUUsT0FEQTtBQUVKQyxjQUFVLEVBQUU7QUFBQ0MsdUJBQWlCLEVBQWpCQSw4REFBaUJBO0FBQWxCLEtBRlI7QUFHSkMsV0FISSxxQkFHTTtBQUNOLFdBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsU0FBcEIsR0FBZ0MsR0FBaEM7QUFDSDtBQUxHLEdBQVIsRUFGd0MsQ0FVeEM7O0FBQ0FDLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsU0FBcEMsR0FBZ0QsR0FBaEQ7QUFFSCxDQWJELEU7Ozs7Ozs7Ozs7O0FDTkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDM0I7QUFDTDtBQUNhOzs7QUFHN0U7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsdUZBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsNlBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBdVYsQ0FBZ0Isb1hBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBJbmNsdWRlIHNhc3NcbiAqIFRvIG1ha2Ugd2VicGFjayBjb21waWxlIGFuZCBwdWJsaXNoIHNvbWV0aGluZywganVzdCByZXF1aXJlKClcbiAqIG9yIGltcG9ydCBpdC4gSW4gdGhpcyBjYXNlIGEgU0FTUyBmaWxlLiBXZWJwYWNrIHdpbGwgY29tcGlsZSBhIHNlcGFyYXRlIGNzcyBmaWxlXG4gKiBldmVuIHRob3VnaCBpdCBpcyBpbmNsdWRlZCBoZXJlXG4gKlxuICogWW91IGNhbiBhbHNvIHVzZSAoaW5zdGVhZCBvZiB0aGUgcmVxdWlyZSgpIGJlbG93KVxuICogLmFkZFN0eWxlRW50cnkoJ2FwcCcsICcuL2FwcC9SZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3MnKVxuICogaW4gd2VicGFjay5jb25maWcuanMuIEl0J3MgY29tbWVudGVkIG5vdy4gV2hhdGV2ZXIgeW91IGxpa2UuXG4gKi9cbnJlcXVpcmUoJy4uL3Nhc3MvYXBwLnNjc3MnKTtcblxuLypcbiAqIHJlcXVpcmUgb3IgaW1wb3J0IHRoZSBidW5kbGUgYXNzZXRzXG4gKiBOb3RlIHRoYXQgeW91IGNhbiBhbHNvIGFkZCBhIG5ldyBlbnRyeSBpbiB3ZWJwYWNrLmNvbmZpZy5qcyAtIHRoaXMgd2lsIHJlc3VsdCBpbiBhIHNlcGFyYXRlIGZpbGUgaW4gL3B1YmxpYy9idWlsZFxuICogdG9kbzogY2hlY2sgaWYgdGhpcyBjYW4gYmUgZG9uZSBhdXRvbWF0aWMgdXBvbiBidW5kbGUgcmVnaXN0cmF0aW9uXG4gKi9cbnJlcXVpcmUoJy4uLy4uLy4uLy4uL3NyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy9hc3NldHMvanMvZXhhbXBsZS5qcycpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiPHRlbXBsYXRlPlxuICAgIDxzcGFuIGNsYXNzPVwiZGlzcGxheVwiPnt7IGNoZWNrIH19PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hlY2s6ICfinIUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lzV29ya2luZycsIHtpc1dvcmtpbmc6IHRydWV9KTtcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC8qIFRoZXNlIHN0eWxlcyBhcmUgYWxzbyBpbmNsdWRlZCBpbiB0aGUgJ21haW4nIGNzcyBmaWxlICovXG4gICAgLmRpc3BsYXkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuXG48L3N0eWxlPlxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5XCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNoZWNrKSldKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInJlcXVpcmUoJy4uL3Nhc3MvZXhhbXBsZS5zY3NzJylcblxuLyogTG9hZCBWdWUgKi9cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVDaGVja0NvbXBvbmVudCBmcm9tICcuLi8uLi92dWUvY2hlY2tWdWVDb21wb25lbnQnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIC8vIGluc3RhbnRpYXRlIFZ1ZVxuICAgIG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNzaXRlJyxcbiAgICAgICAgY29tcG9uZW50czoge1Z1ZUNoZWNrQ29tcG9uZW50fSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMudnVlQ2hlY2suaW5uZXJUZXh0ID0gJ+KchSc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHNob3cgdGhhdCBKUyBpcyB3b3JraW5nXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWNoZWNrJykuaW5uZXJIVE1MID0gJ+KchSc7XG5cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTg1OTM5ODAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9uYXRoYW4vUHJvamVjdHMvYml0ZmFjdG9yeS9waW1jb3JlLmFzc2V0cy9waW1jb3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk4NTkzOTgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk4NTkzOTgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk4NTkzOTgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTg1OTM5ODAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTg1OTM5ODAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9FeGFtcGxlQnVuZGxlL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ODU5Mzk4MCZcIiJdLCJzb3VyY2VSb290IjoiIn0=