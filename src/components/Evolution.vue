<template>
	<div id = "evolution-wrapper">
		
		<EvolutionItem 
			v-for = "character in characterList" 
			:character = "character"
			:key = "character.id" >
		</EvolutionItem>

		<h6 class = "disclaimer">More Heroes Coming Soon...</h6>
	</div>
</template>

<script>
	import CharacterList from './../data/characters.js';
	import EvolutionItem from './EvolutionItem.vue';

	export default {
		name: 'Evolution',

		data () {

			return {

				characterList: CharacterList.characterList

			}

		},

		components: {
			EvolutionItem
		}
	}
</script>