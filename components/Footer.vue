<template>
	<div class="bg-gray flex">
		<div class="container m-auto py-1 flex flex-row flex-wrap ">
			<template v-for="(section, index) in links">
				<div v-bind:key="`${section}-${index}`" class="flex-grow">
					<p class="text-red-600">{{ section.title }}</p>
					<div class="flex flex-col flex-wrap">
						<template  v-for="(link, index) in section.links">
							<nuxt-link
								:to="link.to"
								v-bind:key="`${link.title}-${index}`"
								class="text-white hover:text-blue"
							>
							{{ link.title }}
							</nuxt-link>
						</template>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					title: "Guerre de l'anneau",
					color: "",
					links: [
						{
							title: "Chronologie",
							color: "text-blue-600",
							to: "/chronologie",
						},
						{
							title: "Combats",
							color: "text-red-600",
							to: "/combats",
						},
						{
							title: "Diplomatie",
							color: "text-yellow-600",
							to: "/diplomatie",
						},
						{
							title: "Vidéos",
							color: "text-orange-600",
							to: "/bande-annonce",
						},
						{
							title: "Inscription",
							color: "text-indigo-600",
							to: "/inscription",
						},
						{
							title: "Règles",
							color: "text-pink-600",
							to: "/regles",
						},
						{
							title: "Bâtiments",
							color: "text-teal-600",
							to: "/batiments",
						},
						{
							title: "Statistiques",
							color: "text-purple-600",
							to: "/statistiques",
						},
					],
				},
				{
					title: "GDA Admins",
					color: "",
					links: [
						{
							title: "Héros",
							color: "text-blue-600",
							to: "/heros",
						},
						{
							title: "Ordres",
							color: "text-blue-600",
							to: "/ordres",
						},
						{
							title: "Scène",
							color: "text-blue-600",
							to: "/scene",
						},
					],
				},
				{
					title: "Third Age",
					color: "",
					links: [
						{
							title: "Carte",
							color: "text-blue-600",
							to: "/third_age/",
						},
					],
				},
				{
					title: "Seigneur d'or",
					color: "",
					links: [
						{
							title: "Carte",
							color: "text-blue-600",
							to: "/le_seigneur_d_or/",
						},
					],
				},
				{
					title: "Autre",
					color: "",
					links: [
						{
							title: "Credits",
							color: "text-blue-600",
							to: "/",
						},
					],
				},
			],
		};
	}
}
</script>

<style scoped>

</style>
