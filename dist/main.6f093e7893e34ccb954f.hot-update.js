webpackHotUpdate("main",{

/***/ "./src/lib/helpers.js":
/*!****************************!*\
  !*** ./src/lib/helpers.js ***!
  \****************************/
/*! exports provided: getImageWithLocalPath, renderComponentIfElementExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImageWithLocalPath\", function() { return getImageWithLocalPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderComponentIfElementExists\", function() { return renderComponentIfElementExists; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Store.js */ \"./src/Store.js\");\n/* harmony import */ var _components_TrailerModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/TrailerModal.vue */ \"./src/components/TrailerModal.vue\");\n\n\n\n\nvar renderTrailer = function renderTrailer(vid) {\n  var temp = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    template: '<TrailerModal :selectedMovie = \"movie\" />',\n    data: function data() {\n      return {\n        movie: vid\n      };\n    },\n    components: {\n      TrailerModal: _components_TrailerModal_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n  });\n  var component = new temp().$mount();\n  document.body.appendChild(component.$el);\n};\n\nvar getImageWithLocalPath = function getImageWithLocalPath(image_filename, sub_folder) {\n  if (typeof sub_folder === \"undefined\") {\n    return __webpack_require__(\"./src/assets/images sync recursive ^\\\\.\\\\/.*$\")(\"./\" + image_filename);\n  }\n\n  return __webpack_require__(\"./src/assets/images sync recursive ^\\\\.\\\\/.*$\")(\"./\" + sub_folder + image_filename);\n};\n/* \n*\n* Helper function. Renders component if the container element exists.\n* \n* @param `el_id` String HTML Element ID where component will\n* be rendered.\n*\n* @param `el_component` Object Vue Component to render.\n*\n*/\n\n\nvar renderComponentIfElementExists = function renderComponentIfElementExists(el_id, el_component) {\n  if (!document.getElementById(el_id)) {\n    return;\n  }\n\n  return new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    el: '#' + el_id,\n    store: _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    render: function render(h) {\n      return h(el_component);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/lib/helpers.js?");

/***/ })

})