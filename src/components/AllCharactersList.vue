<template>
	<div id = "all-chars" class = "all_characters_list page-item">

		<ul class = "character-list" :style = "(selectedCharacter === null) ? 'display: block' : 'display: none' ">
			
			<li v-for = "character in CharacterList" 
				:key =  "character.id"
				v-on:click = "setSelectedCharacter(character)"
			>
				<div class = "character-inner-wrapper">	
					<span class = "character-thumb"
						:style = "'background-image: url(\'' + getCharacterImagePath(character.comparison.film.imageUrl) + '\');'"

					>
					</span>
					<div class = "character-details">
						<h2>
							{{ character.name }}
						</h2>
					</div>
				</div>

			</li>

		</ul>

		<div 
			v-if = "selectedCharacter" 
			class = "character-item"
		>
			<div 
				v-on:click="selectedCharacter = null"
				class = "close-btn"
			>
				Return &times;
			</div>

			<ComparisonItem 
				:item = "selectedCharacter" 
				:handleCharacterClick = "setSelectedCharacter"
			/>

		</div>
	</div>
</template>

<script>

	let CharacterList = require('./../../_data/characters.json');

	import { getImageWithLocalPath } from './../lib/helpers.js';
	import ComparisonItem from './ComparisonItem';
	
	export default {

		name: 'all-characters-list',

		data () {
			return {
				CharacterList: CharacterList.characterList,
				selectedCharacter: null
			}
		},

		methods: {

			setSelectedCharacter: function (character) {
			
				if (this.selectedCharacter !== null
					&& this.selectedCharacter.id === character.id) {

					this.selectedCharacter = null;
					return;

				}

				window.scrollTo(0, 0);

				this.selectedCharacter = character;			
			},

			getCharacterImagePath: getImageWithLocalPath

		},

		components: {
			ComparisonItem
		}

	}

</script>

