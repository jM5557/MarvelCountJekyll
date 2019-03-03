<template>
	<div id = "comparison-wrapper">

		<div id = "comparison-menu-toggle" v-on:click = "displayMenu" :class = "menuIsVisible ? 'on hamburger-menu has_text' : 'hamburger-menu has_text'">Choose A Hero</div>

		<ul id = "comparison-menu" v-if="menuIsVisible" class = "toggle-menu">
			<li v-for="(character, index) in characterList" v-on:click="setSelectedCharacter(character)" :class = "(character == selectedCharacter) ? 'selected' : ''">
				{{ character.name }}
			</li>
			<li>
				<p class = "disclaimer">More Heroes Coming Soon...</p>
			</li>
		</ul>

		<div id = "comparison-inner-wrapper">
			<ComparisonItem :item = "selectedCharacter" ></ComparisonItem>
		</div>
	</div>
</template>

<script>
	import CharacterList from './../data/characters.js';
	import ComparisonItem from './ComparisonItem.vue';

	export default {
		name: 'comparison',

		data () {
			return {
				characterList: CharacterList.characterList,

				selectedCharacter: CharacterList.characterList[0],

				menuIsVisible: false
			}
		},

		methods: {
			setSelectedCharacter: function (character) {
			
				this.selectedCharacter = character;
			
			},

			displayMenu : function () {
				this.menuIsVisible = !this.menuIsVisible;
			}
		},

		components: {
			ComparisonItem
		}
	}
</script>