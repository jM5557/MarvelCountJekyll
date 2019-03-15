import Vue from 'vue';
import Vuex from 'vuex';
import vueScrollTo from 'vue-scrollto';

import NavigationBar from './components/NavigationBar.vue';

import App from './App.vue';
import Comparison from './components/Comparison.vue';
import Evolution from './components/Evolution.vue';

import FooterComponent from './components/FooterComponent.vue';

import { renderComponentIfElementExists } from './lib/helpers.js';

import { store } from './Store.js';

Vue.use(vueScrollTo);

if ( document.getElementById('app-home') ) {
	
	new Vue({
		el: '#app-home',
		store,
		render: (h) =>  { return h(App) }
	});

}

if ( document.getElementById('app-comparison') ) {
	
	new Vue({
		el: '#app-comparison',
		store,
		render: (h) =>  { return h(Comparison) }
	});

}

renderComponentIfElementExists ('app-nav', NavigationBar);

renderComponentIfElementExists ('app-evolution', Evolution);

renderComponentIfElementExists ('app-footer', FooterComponent);