<template>
	<div id = "timeline-wrapper">
		<div class = "toggle-view-wrapper">
			Grid
			<button v-on:click="toggleView()" :class = "(selectedView == 'grid-view') ? 'toggle-view' : 'toggle-view on' ">
			</button>

			Timeline
		</div>

		<ul :class = "selectedView">


			<li v-for = "movie in movieList"
				:key = "movie.id"
				v-on:click = "setSelectedMovie(movie)"
				:style = "'background-image: url(\'' + getPosterUrl(movie.poster) + '\');'"
			>
				<TimelineItem
					:movie = "movie"
				>
				</TimelineItem>
			</li>

		</ul>
	</div>
</template>

<script>
	import MovieList from './../data/movies.js';

	import { getImageWithLocalPath, renderTrailer } from './../lib/helpers.js';

	import TimelineItem from './TimelineItem.vue';
	import SearchBar from './SearchBar.vue';

	export default {
		name: 'timeline-item',

		props: [],

		data () {
			return {
				
				movieList: MovieList.movieList,

				selectedMovie: MovieList.movieList[MovieList.movieList.length - 1],

				selectedView: 'grid-view'
			}
		},

		methods: {

			setSelectedMovie: function (movie) {
				
				renderTrailer(movie);

			},

			toggleView: function () {
				if (this.selectedView == 'grid-view') {
					this.selectedView = 'timeline-view';

					return;
				}

				this.selectedView = 'grid-view';
			},

			getPosterUrl: getImageWithLocalPath

		},

		components: {
			TimelineItem
		}
	}
</script>