webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CountdownTimer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CountdownTimer.vue */ \"./src/components/CountdownTimer.vue\");\n/* harmony import */ var _components_NavigationBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavigationBar.vue */ \"./src/components/NavigationBar.vue\");\n/* harmony import */ var _components_Timeline_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Timeline.vue */ \"./src/components/Timeline.vue\");\n/* harmony import */ var _data_movies_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/movies.js */ \"./src/data/movies.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app',\n  data: function data() {\n    return {\n      MovieList: _data_movies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      featuredFilm: _data_movies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].movieList.find(function (m, i) {\n        return m.id === _data_movies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].featuredFilm.id;\n      }),\n      subFilm: _data_movies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].movieList.find(function (m, i) {\n        return m.id === _data_movies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].otherFeatured.id;\n      })\n    };\n  },\n  methods: {},\n  components: {\n    CountdownTimer: _components_CountdownTimer_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    NavigationBar: _components_NavigationBar_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Timeline: _components_Timeline_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})