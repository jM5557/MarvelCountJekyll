import Vue from 'vue';
import vueScrollTo from 'vue-scrollto';

import NavigationBar from './components/NavigationBar.vue';

import App from './App.vue';
import Comparison from './components/Comparison.vue';
import Evolution from './components/Evolution.vue';

import FooterComponent from './components/FooterComponent.vue';

import { renderComponentIfElementExists } from './lib/helpers.js';

Vue.use(vueScrollTo);

renderComponentIfElementExists ('app-nav', NavigationBar);

renderComponentIfElementExists ('app-home', App);
renderComponentIfElementExists ('app-comparison', Comparison);
renderComponentIfElementExists ('app-evolution', Evolution);

renderComponentIfElementExists ('app-footer', FooterComponent);