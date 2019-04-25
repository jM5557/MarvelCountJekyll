import Vue from 'vue';
import Vuex from 'vuex';
import vueScrollTo from 'vue-scrollto';

import NavigationBar from './components/NavigationBar.vue';

import App from './App.vue';
import AllCharactersList from './components/AllCharactersList.vue';
import Comparison from './components/Comparison.vue';
import Evolution from './components/Evolution.vue';

import FooterComponent from './components/FooterComponent.vue';

import { renderComponentIfElementExists } from './lib/helpers.js';

Vue.use(vueScrollTo);

let APP_ROOTS = [
	
	{
		el: '#app-home',
		component: App
	},

	{
		el: '#app-compare',
		component: Comparison
	},

	{
		el: '#app-all-characters',
		component: AllCharactersList
	}

];


let renderComponent = function (app_el, app_component) {

	if ( document.getElementById(app_el) ) {
	
		new Vue({
			el: '#' + app_el,
			render: (h) =>  { return h(app_component) }
		});

	}

}

if ( document.getElementById('app-home') ) {
	
	new Vue({
		el: '#app-home',
		render: (h) =>  { return h(App) }
	});

}

renderComponentIfElementExists ('app-comparison', Comparison);

renderComponentIfElementExists ('app-characters-all', AllCharactersList);

renderComponentIfElementExists ('app-nav', NavigationBar);

renderComponentIfElementExists ('app-footer', FooterComponent);

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();