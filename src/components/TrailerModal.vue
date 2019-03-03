<template>
	<div v-if = "startPlaying"  id = "trailer-modal-wrapper">
		<div class="movie-meta">
			<h2>{{ selectedMovie.name }}</h2>
				<tr></tr>
			<h5>{{ selectedMovie.releaseDate }}</h5>

			<img :alt = "selectedMovie.name + ' Poster' " :src = "getImageWithLocalPath(selectedMovie.poster)" />  

			<button class= "hide-player" v-on:click = "hidePlayer()">
				Return to TimeLine
			</button>
		</div>

		<div class = "iframe-wrapper">
			<iframe :src = "getTrailerEmbedUrl()" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
	</div>
</template>

<script>
	import { getImageWithLocalPath } from './../lib/helpers.js';

	export default {
		name: 'trailer-modal',

		/* 
		*
		* Two properties passed down from parent.
		*
		* `selectedMovie` Object the movie who's trailer is being played
		*
		* `startPlaying` Boolean determines if player modal should be opened
		*
		*/

		props: ['selectedMovie', 'startPlaying'],

		data () {
			return {

			}
		},

		methods: {


			hidePlayer: function () {
				if ( this.startPlaying ) {

					this.$emit('hide-player');

					return;

				} else {
					return;
				}
			},

			/*
			*
			* Removes the video id from the video, strippping away any
			* extra parameters if present.
			*
			* @return String embed url of the selected video for use
			* in the iframe
			*
			*/ 
			getTrailerEmbedUrl : function () {

				var fullUrl = this.selectedMovie.trailerUrl.indexOf('v=');

				if (fullUrl != -1) {

					var trailerStartIndex = fullUrl + 2;

				}

				else {

					/*
					*
					* For use with trailers in shortened format like so:
					* 	https://youtu.be/DIfgxIv5xmk
					*/

					var shortUrl = this.selectedMovie.trailerUrl.indexOf('.be/');

					if (shortUrl != -1) {

						var trailerStartIndex = shortUrl + 3;

					}

				}

				var trailerEndIndex = this.selectedMovie.trailerUrl.indexOf('&');

				if ( trailerEndIndex == -1 ) {

					trailerEndIndex = this.selectedMovie.trailerUrl.length;

				}

				return 'https://youtube.com/embed/' + this.selectedMovie.trailerUrl.slice(trailerStartIndex, trailerEndIndex);
			},

			getImageWithLocalPath: getImageWithLocalPath

		}
	}
</script>