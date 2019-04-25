webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Timeline.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_movies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/movies.js */ \"./src/data/movies.js\");\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/helpers.js */ \"./src/lib/helpers.js\");\n/* harmony import */ var _TimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimelineItem.vue */ \"./src/components/TimelineItem.vue\");\n/* harmony import */ var _SearchBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar.vue */ \"./src/components/SearchBar.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'timeline-item',\n  props: [],\n  data: function data() {\n    return {\n      movieList: _data_movies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movieList,\n      selectedMovie: _data_movies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movieList[_data_movies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movieList.length - 1],\n      selectedView: 'grid-view'\n    };\n  },\n  methods: {\n    toggleView: function toggleView() {\n      if (this.selectedView == 'grid-view') {\n        this.selectedView = 'timeline-view';\n        return;\n      }\n\n      this.selectedView = 'grid-view';\n    },\n    getPosterUrl: _lib_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"getImageWithLocalPath\"]\n  },\n  components: {\n    TimelineItem: _TimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Timeline.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Timeline.vue?vue&type=template&id=7f3aebf1&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline.vue?vue&type=template&id=7f3aebf1& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"timeline-wrapper\" } }, [\n    _c(\"div\", { staticClass: \"toggle-view-wrapper\" }, [\n      _vm._v(\"\\n\\t\\tGrid\\n\\t\\t\"),\n      _c(\"button\", {\n        class:\n          _vm.selectedView == \"grid-view\" ? \"toggle-view\" : \"toggle-view on\",\n        on: {\n          click: function($event) {\n            return _vm.toggleView()\n          }\n        }\n      }),\n      _vm._v(\"\\n\\n\\t\\tTimeline\\n\\t\")\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"ul\",\n      { class: _vm.selectedView },\n      _vm._l(_vm.movieList, function(movie) {\n        return _c(\n          \"li\",\n          {\n            key: movie.id,\n            style:\n              \"background-image: url('\" + _vm.getPosterUrl(movie.poster) + \"');\"\n          },\n          [_c(\"TimelineItem\", { attrs: { movie: movie } })],\n          1\n        )\n      }),\n      0\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Timeline.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})