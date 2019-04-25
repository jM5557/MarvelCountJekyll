<template>
	<div v-if = "selectedMovie !== null && videoIsPlaying"  id = "trailer-modal-wrapper">
		<div class="movie-meta">
			<h2>{{ selectedMovie.name }}</h2>
				<tr></tr>
			<h5>{{ selectedMovie.releaseDate }}</h5>

			<img :alt = "selectedMovie.name + ' Poster' " :src = "getFileName(selectedMovie.poster)" />  

			<button class= "hide-player" v-on:click = "hidePlayer()">
				Go Back
			</button>
		</div>

		<div class = "iframe-wrapper">
			
			<iframe :src = "getTrailerEmbedUrl()" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

		</div>
	</div>
</template>

<script>

	export default {
		name: 'trailer-modal',

		/*
		*
		* `selectedMovie` Object - the movie whose trailer is being played
		*
		*/

		props: ['selectedMovie'],

		data () {
			return {

				videoIsPlaying: true

			}
		},

		watch: {

			selectedMovie (newVal, oldVal) {

				this.videoIsPlaying = true;

			}

		},

		methods: {

			hidePlayer: function () {

				this.videoIsPlaying = !this.videoIsPlaying;

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

			getFileName: function (image_filename, sub_folder) {

				if ( typeof sub_folder === "undefined" ) {
					return require('./../assets/images/' + image_filename);
				}

				return require('./../assets/images/' + sub_folder + image_filename );
			}

		}
	}
</script>