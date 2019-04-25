webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ComparisonItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ComparisonItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/helpers.js */ \"./src/lib/helpers.js\");\n/* harmony import */ var _data_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/movies.js */ \"./src/data/movies.js\");\n/* harmony import */ var _RelatedCharacterList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelatedCharacterList */ \"./src/components/RelatedCharacterList.vue\");\n/* harmony import */ var _TrailerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrailerModal */ \"./src/components/TrailerModal.vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvar renderTrailer = function renderTrailer(vid) {\n  var MyComponent = vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].extend({\n    template: '<TrailerModal :selectedMovie = \"selectedMovie\" />',\n    methods: {\n      world: function world() {\n        console.log('world');\n      }\n    },\n    component: {\n      TrailerModal: _TrailerModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n  });\n  var component = new MyComponent().$mount();\n  document.body.appendChild(component.$el);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'comparison-item',\n  props: ['item', 'handleCharacterClick'],\n  data: function data() {\n    return {\n      movieList: [],\n      selectedImgToDisplay: this.item.comparison.film.imageUrl,\n      viewMode: 'MCU',\n      selectedMovie: null\n    };\n  },\n  watch: {\n    item: function item(newValue, oldValue) {\n      this.selectedImgToDisplay = newValue.comparison.film.imageUrl;\n      if (this.viewMode !== 'MCU') this.viewMode = 'MCU';\n    }\n  },\n  computed: {\n    moviesWithCharacter: function moviesWithCharacter() {\n      var temp = [];\n\n      for (var i = 0; i < _data_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieList.length; i++) {\n        for (var j = 0; j < _data_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieList[i].characterID.length; j++) {\n          if (_data_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieList[i].characterID[j] == this.item.id) {\n            temp.push(_data_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movieList[i]);\n          }\n        }\n      }\n\n      return temp;\n    }\n  },\n  methods: {\n    setSelectedMovie: function setSelectedMovie(movie) {\n      this.selectedMovie = movie;\n    },\n    toggleViewMode: function toggleViewMode() {\n      if (this.viewMode === 'MCU') {\n        this.viewMode = 'COMIC';\n        this.selectedImgToDisplay = this.item.comparison.comic.imageUrl;\n      } else {\n        this.viewMode = 'MCU';\n        this.selectedImgToDisplay = this.item.comparison.film.imageUrl;\n      }\n    },\n    getFileName: _lib_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"getImageWithLocalPath\"]\n  },\n  components: {\n    RelatedCharacterList: _RelatedCharacterList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/ComparisonItem.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})