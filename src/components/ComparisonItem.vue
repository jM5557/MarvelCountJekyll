<template>
	<div id = "comparison-item-wrapper">
		<div id = "comparison-item-inner-wrapper"

			:style = "'background-image: url(\'' + getFileName(selectedImgToDisplay) + '\');'"

		>

			<div class = "toggle-view-wrapper">
				
				MCU

				<button v-on:click="toggleViewMode()" 
						:class = "(viewMode == 'MCU') ? 'toggle-view' : 'toggle-view on' ">
				</button>

				Comic

			</div>
		</div>

		<div id = "comparison-item-stats">

			<p class = "main-stats name">
				{{ item.name }}
			</p>

			<p class = "main-stats alias">
				{{ item.alias }}
			</p>

			<div class = "char-content-wrapper right">

				<h2>Appearances</h2>

				<ul class="related-movies">
					<li 
						v-for = "movie in moviesWithCharacter" 
						
						class = "movies main-stats"
						
						v-on:click = "setSelectedMovie(movie)"


					>
						<div

							class = "related-movie-thumb"
						
							:style = "'background-image: url(\'' + getFileName(movie.poster) + '\');'"

						>	

						</div>

						<h3>
							{{ movie.name }}
						</h3>
					</li>
				</ul>
			</div>

			<RelatedCharacterList 
				:item = "item" 
				:handleCharacterClick = "handleCharacterClick" 
			/>

		</div>
	</div>
</template>

<script>
	import { getImageWithLocalPath, renderTrailer } from './../lib/helpers.js';

	import MovieList from './../data/movies.js';

	import RelatedCharacterList from './RelatedCharacterList';


	export default {
		name: 'comparison-item',
		
		props: [ 'item', 'handleCharacterClick' ],

		data () {
			return {
				movieList: [],

				selectedImgToDisplay: this.item.comparison.film.imageUrl,

				viewMode: 'MCU',

				selectedMovie: null
			}
		},

		watch: {
			
    		item (newValue, oldValue) {
      			
    			this.selectedImgToDisplay = newValue.comparison.film.imageUrl;

    			if (this.viewMode !== 'MCU') 
    				this.viewMode = 'MCU';

    		}
		},

		computed: {
			moviesWithCharacter: function () {
				
				let temp = [];

				for (var i = 0; i < MovieList.movieList.length; i++) {

					for (var j = 0; j < MovieList.movieList[i].characterID.length; j++) {

						if (MovieList.movieList[i].characterID[j] == this.item.id) {

							temp.push(MovieList.movieList[i]);

						}

					}

				}

				return temp;

			}
		},

		methods: {

			setSelectedMovie: function (movie) {

				this.selectedMovie = movie; 

				renderTrailer(movie);

			},


			toggleViewMode: function () {

				if (this.viewMode === 'MCU') {

					this.viewMode = 'COMIC';
					this.selectedImgToDisplay = this.item.comparison.comic.imageUrl;

				} else {


					this.viewMode = 'MCU';
					this.selectedImgToDisplay = this.item.comparison.film.imageUrl;

				}

			},

			getFileName: getImageWithLocalPath
		},

		updated () {

			this.$nextTick(function () {
			    
			    

			});

		},

		components: {
			RelatedCharacterList
		}
	}
</script>