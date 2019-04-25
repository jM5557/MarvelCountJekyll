webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/style.scss":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
false,

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
false,

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
false,

/***/ "./scss/style.scss":
false,

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue_scrollto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-scrollto */ \"./node_modules/vue-scrollto/vue-scrollto.js\");\n/* harmony import */ var vue_scrollto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_scrollto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavigationBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavigationBar.vue */ \"./src/components/NavigationBar.vue\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _components_AllCharactersList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AllCharactersList.vue */ \"./src/components/AllCharactersList.vue\");\n/* harmony import */ var _components_Comparison_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Comparison.vue */ \"./src/components/Comparison.vue\");\n/* harmony import */ var _components_Evolution_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Evolution.vue */ \"./src/components/Evolution.vue\");\n/* harmony import */ var _components_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/FooterComponent.vue */ \"./src/components/FooterComponent.vue\");\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/helpers.js */ \"./src/lib/helpers.js\");\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_scrollto__WEBPACK_IMPORTED_MODULE_2___default.a);\nvar APP_ROOTS = [{\n  el: '#app-home',\n  component: _App_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  el: '#app-compare',\n  component: _components_Comparison_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, {\n  el: '#app-all-characters',\n  component: _components_AllCharactersList_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}];\n\nvar renderComponent = function renderComponent(app_el, app_component) {\n  if (document.getElementById(app_el)) {\n    new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      el: '#' + app_el,\n      render: function render(h) {\n        return h(app_component);\n      }\n    });\n  }\n};\n\nif (document.getElementById('app-home')) {\n  new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    el: '#app-home',\n    render: function render(h) {\n      return h(_App_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    }\n  });\n}\n\nObject(_lib_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"renderComponentIfElementExists\"])('app-comparison', _components_Comparison_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nObject(_lib_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"renderComponentIfElementExists\"])('app-characters-all', _components_AllCharactersList_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nObject(_lib_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"renderComponentIfElementExists\"])('app-nav', _components_NavigationBar_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nObject(_lib_helpers_js__WEBPACK_IMPORTED_MODULE_9__[\"renderComponentIfElementExists\"])('app-footer', _components_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]); // Opt-in to Webpack hot module replacement\n\nif (true) module.hot.accept();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

})