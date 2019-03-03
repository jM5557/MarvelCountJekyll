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
				<li v-for = "movie in item.movies" class = "movies main-stats">
					{{ movie }}
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	import { getImageWithLocalPath } from './../lib/helpers.js';

	export default {
		name: 'comparison-item',
		
		props: [ 'item' ],

		data () {
			return {

			}
		},

		methods: {
			getFileName: getImageWithLocalPath
		}
	}
</script>