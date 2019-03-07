<template>
	<div id = "comparison-item-wrapper">
		<div id = "comparison-item-inner-wrapper">
			<div id = "comp-a" :style = "'background-image: url(\'' + getFileName(item.comparison.film.imageUrl) + '\');'" class = "comp-item">
			</div>

			<div id = "comp-b" :style = "'background-image: url(\'' + getFileName(item.comparison.comic.imageUrl) + '\');'" class = "comp-item">
			</div>
		</div>

		<div id = "comparison-item-stats">

			<p class = "main-stats name">
				{{ item.name }}
			</p>

			<p class = "main-stats alias">
				{{ item.alias }}
			</p>

			<ul>
				<li v-for = "movie in moviesWithCharacter" class = "movies main-stats">
					{{ movie.name }}
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	import { getImageWithLocalPath } from './../lib/helpers.js';
	import MovieList from './../data/movies.js';

	export default {
		name: 'comparison-item',
		
		props: [ 'item' ],

		data () {
			return {
				movieList: []
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
			getFileName: getImageWithLocalPath
		}
	}
</script>