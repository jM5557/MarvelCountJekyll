<template>
	<div 
		:class = " (timerIsLarge) ? 'large-timer timer-wrapper' : 'small-timer timer-wrapper'" 
		:style = " { 
			background: 'url(' +  filmWallpaper + ') no-repeat center top 0px', 
			backgroundSize: 'cover'

		} "
	>
		<slot name = "navbar"></slot>

		<div :class = "(days < 3) ? 'inner-wrapper timer-warning' : 'inner-wrapper'"
		>
			<img alt = "Latest Film Logo" 
				:src = " '/dist/Assets/' + film.logo " 
			/>
			
			<a class = "get-tickets-link" 
				v-if = "(days < 1
					&& hours < 1
					&& minutes < 1
					&& seconds < 1)"
				:href = "ticketsUrl"
			>
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

			<button 

				v-on:click="playTrailer(film)"

				class = 'trailer-btn'

				:style=" 'box-shadow: inset 68px 0px 80px -25px ' + shadowColor "

			>
				Latest Trailer
			</button>
			
		</div>

		<div 
			class = "scroll-notify center" 
			v-scroll-to="'#next-timer'"

			v-if="timerIsLarge"
		>
			<p>scroll</p>
			<p class = "scroll-icon"></p>
		</div>

		<a 
			:href="'https://twitter.com/share?url=' + getCurrentWebpage + '&text=' + getMessageByTimer(days, hours, minutes) " 
			
			class="twitter-share-button twitter-icon" 
			data-show-count="false"
			
			v-if = "(
				timerIsLarge 
				&& days > 1
				&& hours > 1
				&& minutes > 1
				&& seconds > 1
			)"
		>
			
		</a>

		<a 
			:href="'https://twitter.com/share?url=' + getCurrentWebpage + '&text=' + getMessage('Captain Marvel is out in theaters!') " 
			
			class="twitter-share-button twitter-icon" 
			data-show-count="false"
			
			v-else-if="timerIsLarge"
		>
			
		</a>

		<a 
			:href="'https://www.reddit.com/submit?styled=off&url=' + getCurrentWebpage + '&title=' + getMessageByTimer(days, hours, minutes)" 
			class = "reddit-icon"

			v-if = "(
				timerIsLarge 
				&& days > 1
				&& hours > 1
				&& minutes > 1
				&& seconds > 1
			)"
		>
		</a>

		<a 
			:href="'https://www.reddit.com/submit?styled=off&url=' + getCurrentWebpage + '&title=' + getMessage('Captain Marvel is out in theaters!')" 
			class = "reddit-icon"

			v-else-if="timerIsLarge"
		>
		</a>
	</div>
</template>

<script>

	import { renderTrailer } from './../lib/helpers.js';

	import NavigationBar from './NavigationBar.vue';

	export default {
		name: 'countdown-timer',

		props: ['timerIsLarge', 'endDate', 'film', 'ticketsUrl', 'shadowColor'],

		data () {
			return {
				currentTime: Math.trunc((new Date()).getTime() / 1000),

				endTime: Math.trunc(Date.parse(this.endDate) / 1000),

				getCurrentWebpage: window.location,

				filmWallpaper: "'/dist/Assets/" + this.film.wallpaper + "'"
			}
		},

		methods: {

			playTrailer: function (film) {
				
				renderTrailer(film);
				
			},

			getMessageByTimer: function (days, hours, minutes) {

				var message = days + " Days, " + hours + " Hours, "
					+ minutes + " Minutes Until "
					+ this.film.name + "! ";

				return message.replace(' ', '%20').replace(',', '+').replace('!', '%21');
				
			},

			getMessage: function (msg) {

				return msg.replace(' ', '%20').replace(',', '+').replace('!', '%21');

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
			NavigationBar
		}
	}
</script>