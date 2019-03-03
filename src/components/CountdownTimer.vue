<template>
	<div id = "timer-wrapper">
		<div id = "timer-inner-wrapper" :class = "(days < 3) ? 'timer-warning' : ''">
			<img alt = "Latest Film Logo" src = "./../assets/images/logo-latest.png" />
			
			<a class = "get-tickets-link" 
			v-if = "(days < 1
				&& hours < 1
				&& minutes < 1
				&& seconds < 1)"
				:href = "ticketsUrl">
				Get Tickets Now
			</a>

			<div class = "timer-content" v-else>
				<div>
					<p class = "lbl">DAYS</p>
					<p class = "num">{{ days }}</p>
				</div>

				<div>
					<p class = "lbl">
						HOURS
					</p>
					<p class="num">
						{{ hours }}
					</p>
				</div>

				<div>
					<p class = "lbl">
						MINUTES
					</p>
					<p class="num">
						{{ minutes }}
					</p>
				</div>

				<div>
					<p class = "lbl">
						SECONDS
					</p>
					<p class="num">
						{{ seconds }}
					</p>
				</div>
			</div>

			<button v-on:click="playTrailer(film, !trailerIsPlaying)" class = 'trailer-btn'>Latest Trailer</button>
			
		</div>
	
			

		<NavigationBar></NavigationBar>

		<div class = "scroll-notify center" v-scroll-to="'#timeline-main'">
			<p>scroll</p>
			<p class = "scroll-icon"></p>
		</div>

		<a :href="'https://twitter.com/share?url=' + getCurrentWebpage + '&text=' + getTweetMessage(days, hours, minutes) " class="twitter-share-button twitter-icon" data-show-count="false"></a>

		<a :href="'https://www.reddit.com/submit?styled=off&url=' + getCurrentWebpage + '&title=' + getTweetMessage(days, hours, minutes)" class = "reddit-icon">
		</a>
	</div>
</template>

<script>
	import TrailerModal from './TrailerModal.vue';
	import NavigationBar from './NavigationBar.vue';

	export default {
		name: 'countdown-timer',

		props: ['endDate', 'film', 'ticketsUrl'],

		data () {
			return {
				currentTime: Math.trunc((new Date()).getTime() / 1000),

				endTime: Math.trunc(Date.parse(this.endDate) / 1000),

				trailerIsPlaying: false,

				getCurrentWebpage: window.location
			}
		},

		methods: {

			playTrailer: function (film, trailerIsPlaying) {
				
				this.$emit('set-modal-meta', {
					selectedMovie: film,
					trailerIsPlaying: trailerIsPlaying
				} );
			},

			getTweetMessage: function (days, hours, minutes) {

				var message = days + " Days, " + hours + " Hours, "
					+ minutes + " Minutes Until "
					+ this.film.name + "! ";

				return message.replace(' ', '%20').replace(',', '+').replace('!', '%21');
				
			}
		},

		computed: {

			days: function () {
				return Math.trunc((this.endTime - this.currentTime) / 3600 / 24);
			},

			hours: function () {
				return Math.trunc((this.endTime - this.currentTime) / 3600) % 24;
			},

			minutes: function () {
				return Math.trunc((this.endTime - this.currentTime) / 60) % 60; 
			},

			seconds: function () {
				return (this.endTime - this.currentTime) % 60;
			}

		},

		mounted: function ()  {
			window.setInterval(() => {
		        this.currentTime = Math.trunc((new Date()).getTime() / 1000);
		    }, 1000);
		},

		components: {
			TrailerModal,
			NavigationBar
		}
	}
</script>