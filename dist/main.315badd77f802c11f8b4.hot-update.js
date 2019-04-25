webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Timeline.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_movies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/movies.js */ \"./src/data/movies.js\");\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/helpers.js */ \"./src/lib/helpers.js\");\n/* harmony import */ var _TimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimelineItem.vue */ \"./src/components/TimelineItem.vue\");\n/* harmony import */ var _SearchBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar.vue */ \"./src/components/SearchBar.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'timeline-item',\n  props: [],\n  data: function data() {\n    return {\n      movieList: _data_movies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movieList,\n      selectedMovie: _data_movies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movieList[_data_movies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movieList.length - 1],\n      selectedView: 'grid-view'\n    };\n  },\n  methods: {\n    setSelectedMovie: function setSelectedMovie(movie) {\n      Object(_lib_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"renderTrailer\"])(movie);\n    },\n    toggleView: function toggleView() {\n      if (this.selectedView == 'grid-view') {\n        this.selectedView = 'timeline-view';\n        return;\n      }\n\n      this.selectedView = 'grid-view';\n    },\n    getPosterUrl: _lib_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"getImageWithLocalPath\"]\n  },\n  components: {\n    TimelineItem: _TimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Timeline.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})