(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./app/Resources/assets/js/app.js":
/*!****************************************!*\
  !*** ./app/Resources/assets/js/app.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _vue_checkVueComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vue/checkVueComponent */ "./app/Resources/vue/checkVueComponent.vue");
/*
 * Include sass
 * To make webpack compile and publish something, just require()
 * or import it. In this case a SASS file. Webpack will compile a separate css file
 * even though it is included here
 */
__webpack_require__(/*! ../sass/app.scss */ "./app/Resources/assets/sass/app.scss");
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

/***/ "./app/Resources/assets/sass/app.scss":
/*!********************************************!*\
  !*** ./app/Resources/assets/sass/app.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/Resources/vue/checkVueComponent.vue":
/*!*************************************************!*\
  !*** ./app/Resources/vue/checkVueComponent.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkVueComponent_vue_vue_type_template_id_77bc6540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkVueComponent.vue?vue&type=template&id=77bc6540& */ "./app/Resources/vue/checkVueComponent.vue?vue&type=template&id=77bc6540&");
/* harmony import */ var _checkVueComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkVueComponent.vue?vue&type=script&lang=js& */ "./app/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkVueComponent.vue?vue&type=style&index=0&lang=css& */ "./app/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkVueComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkVueComponent_vue_vue_type_template_id_77bc6540___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkVueComponent_vue_vue_type_template_id_77bc6540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/Resources/vue/checkVueComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./app/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./checkVueComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./app/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./checkVueComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/Resources/vue/checkVueComponent.vue?vue&type=template&id=77bc6540&":
/*!********************************************************************************!*\
  !*** ./app/Resources/vue/checkVueComponent.vue?vue&type=template&id=77bc6540& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_template_id_77bc6540___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./checkVueComponent.vue?vue&type=template&id=77bc6540& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/Resources/vue/checkVueComponent.vue?vue&type=template&id=77bc6540&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_template_id_77bc6540___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkVueComponent_vue_vue_type_template_id_77bc6540___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./app/Resources/vue/checkVueComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/Resources/vue/checkVueComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/Resources/vue/checkVueComponent.vue?vue&type=template&id=77bc6540&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/Resources/vue/checkVueComponent.vue?vue&type=template&id=77bc6540& ***!
  \**************************************************************************************************************************************************************************************************************/
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



/***/ })

},[["./app/Resources/assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvUmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlPzdiNmUiLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlPzg5NTYiLCJ3ZWJwYWNrOi8vLy4vYXBwL1Jlc291cmNlcy92dWUvY2hlY2tWdWVDb21wb25lbnQudnVlP2QwZTMiLCJ3ZWJwYWNrOi8vL2FwcC9SZXNvdXJjZXMvdnVlL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWU/YTNjMSIsIndlYnBhY2s6Ly8vLi9hcHAvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWU/ZTMxZCJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlZ1ZSIsImVsIiwiY29tcG9uZW50cyIsIlZ1ZUNoZWNrQ29tcG9uZW50IiwibW91bnRlZCIsIiRyZWZzIiwidnVlQ2hlY2siLCJpbm5lclRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU1BQSxtQkFBTyxDQUFDLDhEQUFELENBQVA7QUFFQTs7O0FBQ0E7QUFHQTtBQUVBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVk7QUFDeEM7QUFDQSxNQUFJQywyQ0FBSixDQUFRO0FBQ0pDLE1BQUUsRUFBRSxPQURBO0FBRUpDLGNBQVUsRUFBRTtBQUFDQyx1QkFBaUIsRUFBakJBLDhEQUFpQkE7QUFBbEIsS0FGUjtBQUdKQyxXQUhJLHFCQUdNO0FBQ04sV0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxTQUFwQixHQUFnQyxHQUFoQztBQUNIO0FBTEcsR0FBUixFQUZ3QyxDQVV4Qzs7QUFDQUMsVUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxTQUFwQyxHQUFnRCxHQUFoRDtBQUVILENBYkQsRTs7Ozs7Ozs7Ozs7QUNkQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUMzQjtBQUNMO0FBQ2E7OztBQUc3RTtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx1RkFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQiw2UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUEyVSxDQUFnQixvWEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0tBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTEE7QUFNQSxTQU5BLHFCQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQSxHOzs7Ozs7Ozs7OztBQ0xBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBJbmNsdWRlIHNhc3NcbiAqIFRvIG1ha2Ugd2VicGFjayBjb21waWxlIGFuZCBwdWJsaXNoIHNvbWV0aGluZywganVzdCByZXF1aXJlKClcbiAqIG9yIGltcG9ydCBpdC4gSW4gdGhpcyBjYXNlIGEgU0FTUyBmaWxlLiBXZWJwYWNrIHdpbGwgY29tcGlsZSBhIHNlcGFyYXRlIGNzcyBmaWxlXG4gKiBldmVuIHRob3VnaCBpdCBpcyBpbmNsdWRlZCBoZXJlXG4gKi9cbnJlcXVpcmUoJy4uL3Nhc3MvYXBwLnNjc3MnKVxuXG4vKiBMb2FkIFZ1ZSAqL1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuXG5cbmltcG9ydCBWdWVDaGVja0NvbXBvbmVudCBmcm9tICcuLi8uLi92dWUvY2hlY2tWdWVDb21wb25lbnQnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpbnN0YW50aWF0ZSBWdWVcbiAgICBuZXcgVnVlKHtcbiAgICAgICAgZWw6ICcjc2l0ZScsXG4gICAgICAgIGNvbXBvbmVudHM6IHtWdWVDaGVja0NvbXBvbmVudH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnZ1ZUNoZWNrLmlubmVyVGV4dCA9ICfinIUnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRoYXQgSlMgaXMgd29ya2luZ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1jaGVjaycpLmlubmVySFRNTCA9ICfinIUnO1xuXG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YmM2NTQwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbmF0aGFuL1Byb2plY3RzL2JpdGZhY3RvcnkvcGltY29yZS5hc3NldHMvcGltY29yZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3N2JjNjU0MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3N2JjNjU0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3N2JjNjU0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YmM2NTQwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3YmM2NTQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhcHAvUmVzb3VyY2VzL3Z1ZS9jaGVja1Z1ZUNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrVnVlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGVja1Z1ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tWdWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3YmM2NTQwJlwiIiwiPHRlbXBsYXRlPlxuICAgIDxzcGFuIGNsYXNzPVwiZGlzcGxheVwiPnt7IGNoZWNrIH19PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hlY2s6ICfinIUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lzV29ya2luZycsIHtpc1dvcmtpbmc6IHRydWV9KTtcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC8qIFRoZXNlIHN0eWxlcyBhcmUgYWxzbyBpbmNsdWRlZCBpbiB0aGUgJ21haW4nIGNzcyBmaWxlICovXG4gICAgLmRpc3BsYXkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuXG48L3N0eWxlPlxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5XCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNoZWNrKSldKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=