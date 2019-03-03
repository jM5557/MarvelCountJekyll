<template>
	
	<div :class = "(selectedView == 'select') ? 'evolution-item-wrapper select' : 'evolution-item-wrapper'" >
		<button class = "toggle-view toggle-view-btn" v-on:click = "toggleView()">
			View: {{ (selectedView == 'select') ? 'Select' : 'Grid' }}
		</button>

		<button 
			v-if = "selectedView == 'select'"
			:class = "(displayItemSelectMenu) ? 'on hamburger-menu' : 'hamburger-menu'" 
			v-on:click = "displayItemSelectMenu = !displayItemSelectMenu"
		></button>
		
		<div v-if = "selectedView == 'select'" :style = "'background-image: url(\'' + getImage(selectedEvolutionItem.imageUrl) + '\');'" :class="imageClass">

			<span class = "year">{{ selectedEvolutionItem.year }}</span>

			<button class = "prev ctrl" v-on:click = "navigatePrev">Prev</button>
			<button class = "next ctrl" v-on:click = "navigateNext">Next</button>

		</div>

		<ul 
			v-if = "(selectedView != 'select' || displayItemSelectMenu)"
			:class = "(selectedView == 'select') ? 'evolution-inner-item-wrapper select toggle-menu' : 'evolution-inner-item-wrapper'"
		>
			<li v-for = "(evolutionItem, index) in character.evolution"

			:class = "(selectedView == 'select' && evolutionItem.id == selectedEvolutionItem.id) ? 'evolution-inner-item selected' : 'evolution-inner-item'"

			:style = "( selectedView == 'grid') ? 'background-image: url(\'' + getImage(evolutionItem.imageUrl) + '\');' : ''"

			:key = "evolutionItem.id"

			v-on:click = "( selectedView == 'select' ) ? setSelectedEvolutionItem(index) : ''"
			>
				<div class = "item-meta">
					
					<p class = "name"> {{ evolutionItem.name }}</p>

					<p class = "year"> {{ evolutionItem.year }} </p>

				</div>

			</li>
		</ul>
			

	</div>

</template>

<script>
	import { getImageWithLocalPath } from './../lib/helpers.js';

	export default {
		name: 'evolution-item',

		props: [ 'character' ],

		data () {

			return {
				selectedEvolutionItem: this.character.evolution[0],

				selectedView: 'select',

				pos: 0,

				displayItemSelectMenu: false,

				imageClass: 'selected-item'
			}

		},

		methods: {

			getImage: getImageWithLocalPath,

			setSelectedEvolutionItem: function (index) {

				this.pos = index;
				this.selectedEvolutionItem = this.character.evolution[index];

				this.imageClass = 'selected-item loading';

				window.setTimeout(() => {
					this.imageClass = 'selected-item';
				}, 500);
			},

			toggleView: function () {

				if ( this.selectedView == 'grid') {
					this.selectedView = 'select';
					this.displayItemSelectMenu = false
				}

				else {
					this.selectedView = 'grid';
				}
			},

			navigatePrev: function () {
			

				if (this.pos == 0) {

					this.pos = this.character.evolution.length - 1;
				}

				else {
					this.pos--;
				}

				this.setSelectedEvolutionItem(this.pos);
			},

			navigateNext: function () {
				if (this.pos == this.character.evolution.length - 1) {
					this.pos = 0;
				}

				else {
					this.pos++;
				}

				this.setSelectedEvolutionItem(this.pos);
			}

		}
	}
</script>