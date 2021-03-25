<template>
	<nav class="container flex flex-wrap m-5 mx-auto items-center justify-evenly text-2xl bg-gray border-2 border-orange-500 border-opacity-75 hover:border-orange-600">
		<nuxt-link class="animate-pulse p-2 hover:bg-gray-900" to="/">
			<object type="image/svg+xml" data="/img/pages/logo.svg" style="width:40px;pointer-events: none;"/>
		</nuxt-link>
		<template v-for="(link, index) in this.links">
			<nuxt-link
				class="p-4 hover:text-white hover:bg-gray-900"
				:to="link.to"
				v-bind:key="index"
				:class="link.color">
				{{ link.title }}
			</nuxt-link>
		</template>
		<a class="p-2 hover:bg-gray-900" target="_blank" href="http://bit.ly/LaTerreduMilieu">
			<object type="image/svg+xml" data="/img/pages/discord.svg" style="width:40px;pointer-events: none;"/>
		</a>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{ to: "/chronologie", title: "Chronologie", color: "text-blue-600" },
				{ to: "/combats", title: "Combats", color: "text-red-600" },
				{ to: "/diplomatie", title: "Diplomatie", color: "text-yellow-600" },
				{ to: "/bande-annonce", title: "Vidéos", color: "text-orange-600" },
				{ to: "/inscription", title: "Inscription", color: "text-indigo-600" },
				{ to: "/regles", title: "Règles", color: "text-pink-600" },
				{ to: "/batiments", title: "Bâtiments", color: "text-teal-600" },
				{ to: "/statistiques", title: "Statistiques", color: "text-purple-600" },
			]
		};
	}
}
</script>

<style scoped>
a {
	font-family: "Albertus";
}
</style>
