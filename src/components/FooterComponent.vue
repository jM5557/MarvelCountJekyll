<template>
	<footer>


		<div id = "hero-obj" 
			:style = " 'background-image: url(\'' + getImageWithLocalPath(choiceCharacter.imageUrl) + '\');' "
		>
			<span id = "hero-obj-name">
				{{ choiceCharacter.name }}
			</span>
		</div>

		<div id = "official-links" class = "link-list">
			<h4>Official Links</h4>

			<ul>
				<li>
					<a href="https://marvel.com/">
						<span class="marvel-site-icon icon"></span>

						Marvel.com
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/user/MARVEL">
						<span class = "youtube-icon icon"></span>MarvelEntertainment YT
					</a>
				</li>
				<li>
					<a href="https://twitter.com/marvel">
						<span class = "twitter-icon icon"></span>
	
						Marvel Twitter
					</a>
				</li>
			</ul>
		</div>

		<div id="social-media-links" class = "link-list social">
			<h4>
				Connect With Us
			</h4>
			<ul>
				<li>
					<a  href="https://twitter.com/MarvelCount">
						<span class = "twitter-icon icon"></span>
	

						Our Twitter
					</a>
				</li>
				<li>
					<a href="https://instagram.com/MarvelCountInsta">
						<span class = "instagram-icon icon"></span>
						
						Our Instagram
					</a>
				</li>
			</ul>
			<p>
				<a href="https://twitter.com/MarvelStudios/status/988611114656190464">
					<h5>
						Thanos Demands Your Silence
					</h5>
					<h6>Don't Spoil It For Others.</h6>
				</a>
			</p>
		</div>

		<div id="disclaimer">
			<p>This is a fanmade website, created as tribute to Marvel Studios' Cinematic Universe</p>
				<tr></tr>
			<p>We are not affiliated with Marvel or the Marvel trademark in any way, shape or form</p>
		</div>

		<div id = "subfooter">

			<a href="about">About Us</a>
			<a href="contact">Contact</a>

		</div>

	</footer>
</template>

<script>
	import { getImageWithLocalPath } from './../lib/helpers.js';

	export default {
		name: 'footer-component',

		data () {
			return {
				characterChoices: [{
					id: 1,

					name: 'Iron Man',

					imageUrl: 'iron-man-render.png'
				},

				{
					id: 2,

					name: 'The Hulk',

					imageUrl: 'hulk-render.png'
				},

				{
					id: 3,

					name: 'Captain America',

					imageUrl: 'captain-america-render.png'
				},

				{
					id: 4,

					name: 'Thor',

					imageUrl: 'thor-render.png'
				}],

				choiceIndex: 0,

				choiceCharacter: {
					id: 1,

					name: 'Iron Man',

					imageUrl: 'iron-man-render.png'
				}
			}
		},

		methods: {
			getImageWithLocalPath: getImageWithLocalPath
		},

		mounted: function () {

			// Randomizes the index of the hero to be used in the footer on page-load

			var max = Math.floor(this.characterChoices.length - 1);
			var min = 0;

			this.choiceIndex = Math.floor( Math.random() * (max - min + 1) ) + min;

			this.choiceCharacter = this.characterChoices[this.choiceIndex]
		
		}


	}
	
</script>