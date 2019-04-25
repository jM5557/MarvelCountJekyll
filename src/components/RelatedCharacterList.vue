<template>
	<div class = "char-content-wrapper left">

		<h2>Related Characters</h2>

		<div class="related-character-wrapper">
			
			<span class = "related-character-thumb" 
				v-for = "character in getRelatedCharacters"
				v-on:click = "handleCharacterClick(character)"
			>
				
				<div class = "related-thumb"
					:style = "'background-image: url(\'' + getImageWithLocalPath(character.comparison.film.imageUrl) + '\');'"

				>
				</div>


				<h3>{{ character.name }}</h3>
			</span>

		</div>

	</div>

</template>

<script>

	let CharacterList = require('./../data/characters.json');
	
	import MovieList from './../data/movies.js';
	import { getImageWithLocalPath } from './../lib/helpers.js';

	
	export default {

		name: 'related-character-list',

		props: ['item', 'handleCharacterClick'],

		data () {
			return {

				characterList: CharacterList.characterList,

				movieList: MovieList.movieList

			}
		},

		methods: {

			getImageWithLocalPath: getImageWithLocalPath

		},

		computed: {

			getRelatedFilmCharacters () {
								
				let temp = [];

				for (var i = 0; i < MovieList.movieList.length; i++) {

					for (var j = 0; j < MovieList.movieList[i].characterID.length; j++) {

						if (MovieList.movieList[i].characterID[j] == this.item.id) {

							temp.push(MovieList.movieList[i].characterID.filter( (c, index) => { return c != this.item.id }));

						}

					}

				}

				return temp;

			},

			getRelatedCharacters () {

				let temp = [];
				let cList = this.getRelatedFilmCharacters;

				for (let i = 0; i < CharacterList.characterList.length; i++) {

					for (let j = 0; j < cList.length; j++) {

						for (let k = 0; k < cList[j].length; k++) {

							if (CharacterList.characterList[i].id == cList[j][k]) {

								temp.push(CharacterList.characterList[i]);

							}

						}

					}

				}

				return Array.from(new Set(temp))

			}


		}


	}

</script>