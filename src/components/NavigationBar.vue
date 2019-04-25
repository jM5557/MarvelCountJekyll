<template>
	<nav id="navigation-wrapper">

		<a href = "/" class = "logo-top"></a>

		<div id = "menu-content-wrapper" :class = "displayMenu ? 'on' : 'off'">

			<a href = "/characters">Characters</a>
			<a href="/about">About</a>
		
		</div>

		<button :class = "(displayMenu) ? 'on hamburger-menu' : 'hamburger-menu'" v-on:click = "displayMenu = !displayMenu"></button>
	</nav>
</template>

<script>

export default {
	name: 'navigation-bar',

	data () {
		return {
			displayMenu: false
		}
	}
}

</script>

<style lang="scss">

</style>