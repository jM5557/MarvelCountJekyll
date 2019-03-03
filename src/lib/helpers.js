import Vue from 'vue';

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

	new Vue({
	  el: '#' + el_id,
	  render: (h) =>  { return h(el_component) }
	});
}

export { 
	getImageWithLocalPath,
	renderComponentIfElementExists 
}