webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/CountdownTimer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CountdownTimer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/helpers.js */ \"./src/lib/helpers.js\");\n/* harmony import */ var _TrailerModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrailerModal.vue */ \"./src/components/TrailerModal.vue\");\n/* harmony import */ var _NavigationBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationBar.vue */ \"./src/components/NavigationBar.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'countdown-timer',\n  props: ['timerIsLarge', 'endDate', 'film', 'ticketsUrl', 'shadowColor'],\n  data: function data() {\n    return {\n      currentTime: Math.trunc(new Date().getTime() / 1000),\n      endTime: Math.trunc(Date.parse(this.endDate) / 1000),\n      getCurrentWebpage: window.location,\n      filmWallpaper: \"'/dist/Assets/\" + this.film.wallpaper + \"'\"\n    };\n  },\n  methods: {\n    playTrailer: function playTrailer(film) {\n      Object(_lib_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"renderTrailer\"])(film);\n    },\n    getMessageByTimer: function getMessageByTimer(days, hours, minutes) {\n      var message = days + \" Days, \" + hours + \" Hours, \" + minutes + \" Minutes Until \" + this.film.name + \"! \";\n      return message.replace(' ', '%20').replace(',', '+').replace('!', '%21');\n    },\n    getMessage: function getMessage(msg) {\n      return msg.replace(' ', '%20').replace(',', '+').replace('!', '%21');\n    }\n  },\n  computed: {\n    days: function days() {\n      return Math.trunc((this.endTime - this.currentTime) / 3600 / 24);\n    },\n    hours: function hours() {\n      return Math.trunc((this.endTime - this.currentTime) / 3600) % 24;\n    },\n    minutes: function minutes() {\n      return Math.trunc((this.endTime - this.currentTime) / 60) % 60;\n    },\n    seconds: function seconds() {\n      return (this.endTime - this.currentTime) % 60;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    window.setInterval(function () {\n      _this.currentTime = Math.trunc(new Date().getTime() / 1000);\n    }, 1000);\n  },\n  components: {\n    TrailerModal: _TrailerModal_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    NavigationBar: _NavigationBar_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/CountdownTimer.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})