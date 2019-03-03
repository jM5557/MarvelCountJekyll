<template>
	<div id = "searchBar-wrapper">
		<label>
			<p>Search</p>
			<input type="text" id="searchBar" v-model="searchArray"/>
		</label>

		<div v-if="resultsArray.length > 0" id = "searchResult">
			<p v-for="result in resultsArray">
				{{ result[propToSearchBy] }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'search-bar',

		props: ['arrayToSearch', 'propToSearchBy'],

		data () {
			return {

				resultsArray: [],

				searchArray: null

			}
		},

		watch: {
			searchArray: function (newSearch, oldSearch) {
				if (newSearch.length < 2) {
					this.resultsArray = [];

					return;
				}

				this.resultsArray = this.arrayToSearch.filter( item => item[this.propToSearchBy].toLowerCase().indexOf(newSearch.toLowerCase()) != -1);
			}
		},

		computed: {

		}
	}
</script>