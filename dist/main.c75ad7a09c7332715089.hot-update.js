webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Evolution.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Evolution.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_characters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/characters.js */ \"./src/data/characters.js\");\n/* harmony import */ var _EvolutionItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvolutionItem.vue */ \"./src/components/EvolutionItem.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvar createNewBox = function createNewBox() {\n  var MyPartial = Vue.extend({});\n  window.partial = new MyPartial({\n    template: '#partial',\n    data: function data() {\n      return {\n        txt: 'This is partial'\n      };\n    },\n    methods: {\n      print: function print() {\n        console.log('this.txt : ' + this.txt);\n        console.log('main.txt : ' + main.txt);\n      }\n    }\n  });\n  window.partial.$mount().$appendTo('body');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Evolution',\n  data: function data() {\n    return {\n      characterList: _data_characters_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].characterList\n    };\n  },\n  components: {\n    EvolutionItem: _EvolutionItem_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Evolution.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})