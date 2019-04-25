webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/TrailerModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TrailerModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'trailer-modal',\n\n  /*\n  *\n  * `selectedMovie` Object - the movie whose trailer is being played\n  *\n  */\n  props: ['selectedMovie', 'getImageWithLocalPath'],\n  data: function data() {\n    return {\n      videoIsPlaying: true\n    };\n  },\n  watch: {\n    selectedMovie: function selectedMovie(newVal, oldVal) {\n      this.videoIsPlaying = true;\n    }\n  },\n  methods: {\n    hidePlayer: function hidePlayer() {\n      this.videoIsPlaying = !this.videoIsPlaying;\n    },\n\n    /*\n    *\n    * Removes the video id from the video, strippping away any\n    * extra parameters if present.\n    *\n    * @return String embed url of the selected video for use\n    * in the iframe\n    *\n    */\n    getTrailerEmbedUrl: function getTrailerEmbedUrl() {\n      var fullUrl = this.selectedMovie.trailerUrl.indexOf('v=');\n\n      if (fullUrl != -1) {\n        var trailerStartIndex = fullUrl + 2;\n      } else {\n        /*\n        *\n        * For use with trailers in shortened format like so:\n        * \thttps://youtu.be/DIfgxIv5xmk\n        */\n        var shortUrl = this.selectedMovie.trailerUrl.indexOf('.be/');\n\n        if (shortUrl != -1) {\n          var trailerStartIndex = shortUrl + 3;\n        }\n      }\n\n      var trailerEndIndex = this.selectedMovie.trailerUrl.indexOf('&');\n\n      if (trailerEndIndex == -1) {\n        trailerEndIndex = this.selectedMovie.trailerUrl.length;\n      }\n\n      return 'https://youtube.com/embed/' + this.selectedMovie.trailerUrl.slice(trailerStartIndex, trailerEndIndex);\n    },\n    getFileName: undefined.getImageWithLocalPath\n  }\n});\n\n//# sourceURL=webpack:///./src/components/TrailerModal.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})