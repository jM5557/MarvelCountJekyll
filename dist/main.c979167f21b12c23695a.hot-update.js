webpackHotUpdate("main",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/AllCharactersList.vue?vue&type=template&id=2f2ab5a9&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AllCharactersList.vue?vue&type=template&id=2f2ab5a9& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"all_characters_list page-item\",\n      attrs: { id: \"all-chars\" }\n    },\n    [\n      _c(\n        \"ul\",\n        {\n          staticClass: \"character-list\",\n          style:\n            _vm.selectedCharacter === null ? \"display: block\" : \"display: none\"\n        },\n        _vm._l(_vm.CharacterList, function(character) {\n          return _c(\n            \"li\",\n            {\n              key: character.id,\n              on: {\n                click: function($event) {\n                  return _vm.setSelectedCharacter(character)\n                }\n              }\n            },\n            [\n              _c(\"div\", { staticClass: \"character-inner-wrapper\" }, [\n                _c(\"span\", {\n                  staticClass: \"character-thumb\",\n                  style:\n                    \"background-image: url('\" +\n                    _vm.getCharacterImagePath(\n                      character.comparison.film.imageUrl\n                    ) +\n                    \"');\"\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"character-details\" }, [\n                  _c(\"h2\", [\n                    _vm._v(\n                      \"\\n\\t\\t\\t\\t\\t\\t\" + _vm._s(character.name) + \"\\n\\t\\t\\t\\t\\t\"\n                    )\n                  ])\n                ])\n              ])\n            ]\n          )\n        }),\n        0\n      ),\n      _vm._v(\" \"),\n      _vm.selectedCharacter\n        ? _c(\n            \"div\",\n            { staticClass: \"character-item\" },\n            [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"close-btn\",\n                  on: {\n                    click: function($event) {\n                      _vm.selectedCharacter = null\n                    }\n                  }\n                },\n                [_vm._v(\"\\n\\t\\t\\tReturn ×\\n\\t\\t\")]\n              ),\n              _vm._v(\" \"),\n              _c(\"ComparisonItem\", {\n                attrs: {\n                  item: _vm.selectedCharacter,\n                  handleCharacterClick: _vm.setSelectedCharacter\n                }\n              })\n            ],\n            1\n          )\n        : _vm._e(),\n      _vm._v(\" \"),\n      [_c(\"div\", [_vm._v(\"Foobar\")])]\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/AllCharactersList.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})