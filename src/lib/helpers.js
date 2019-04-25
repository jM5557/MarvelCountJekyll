import Vue from 'vue';

import store from './../Store.js';

import TrailerModal from './../components/TrailerModal.vue';

const renderTrailer = function (vid) {

	let temp = Vue.extend({

	  template: '<TrailerModal :selectedMovie = "movie" />',
	  
	  data: function () {

	  	return {

	  		movie: vid

	  	}

	  },

	  components: {

		TrailerModal

	  }


	});
	 
	var component = new temp().$mount();
	document.body.appendChild(component.$el);

}

const getImageWithLocalPath = function (image_filename, sub_folder) {

	if ( typeof sub_folder === "undefined" ) {
		return require('./../assets/images/' + image_filename);
	}

	return require('./../assets/images/' + sub_folder + image_filename );
}

/* 
*
* Helper function. Renders component if the container element exists.
* 
* @param `el_id` String HTML Element ID where component will
* be rendered.
*
* @param `el_component` Object Vue Component to render.
*
*/
const renderComponentIfElementExists = function (el_id, el_component) {

	if ( !document.getElementById(el_id) ) {
		return;
	}

	return new Vue({
	  el: '#' + el_id,
	  store,
	  render: (h) =>  { return h(el_component) }
	});
}

export { 
	renderTrailer,
	getImageWithLocalPath,
	renderComponentIfElementExists
}