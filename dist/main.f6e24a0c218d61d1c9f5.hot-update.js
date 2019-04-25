webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Comparison.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Comparison.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_characters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/characters.js */ \"./src/data/characters.js\");\n/* harmony import */ var _ComparisonItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComparisonItem.vue */ \"./src/components/ComparisonItem.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'comparison',\n  data: function data() {\n    return {\n      characterList: _data_characters_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].characterList,\n      selectedCharacter: null,\n      menuIsVisible: false\n    };\n  },\n  methods: {\n    setSelectedCharacter: function setSelectedCharacter(character) {\n      this.selectedCharacter = character;\n    },\n    displayMenu: function displayMenu() {\n      this.menuIsVisible = !this.menuIsVisible;\n    }\n  },\n  components: {\n    ComparisonItem: _ComparisonItem_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Comparison.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})