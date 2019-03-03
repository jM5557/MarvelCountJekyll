<template>
	<div>
		<h3>{{ movie.name }}</h3>
			<tr></tr>
		<h5>{{ movie.releaseDate }}</h5>
	</div>
</template>

<script>
	export default {
		name: 'timeline-item',

		props: ['movie'],

		data () {
			return {

			}
		}
	}
</script>