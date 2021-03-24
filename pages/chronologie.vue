<template>
	<section class="container mx-auto pb-8">

		<h1 class="mx-auto sm:text-3xl text-3xl text-center font-medium title-font mb-4 text-gray-300">Chronologie de la Guerre de l'Anneau</h1>
		<h2 class="mx-auto lg:w-2/3 text-2xl text-center body-font leading-relaxed text-gray-600 ">Suivez les évènements et les prises de territoire dans cette lutte incessante !</h2>

		<div>
			<p class="mx-auto mt-8 mb-8 w-full text-2xl text-center text-gray-200">Carte Vierge</p>
			<img class="mx-auto border-orange-500 border-2" src="/img/pages/chronologie/empty.png">
		</div>

		<template v-for="(tour, index) in tours">
			<div v-bind:key="index">
				<p class="mx-auto mt-8 mb-8 w-full text-2xl text-center text-gray-200">{{ `${tour.name} (${tour.preparation ? formatDate(tour.start) + " - " + formatDate(tour.end) : formatDate(tour.start) })` }}</p>
				<img class="mx-auto border-orange-500 border-2" :src="tour.img">
			</div>
		</template>

		<!--

			<p class="mx-auto mt-8 mb-4 w-full text-2xl text-center text-gray-200">Annonce de l'Alliance ! 26 Janvier 2021</p>
			<div class="mx-auto mt-8 mb-4">
		 		<blockquote class="twitter-tweet" data-lang="fr" data-theme="dark">
					<p lang="fr" dir="ltr">Si vous n&#39;avez pas suivi l&#39;annonce !<br><br>Information importante pour la Guerre de l&#39;anneau ! <a href="https://t.co/TGurXNT4MM">pic.twitter.com/TGurXNT4MM</a></p>&mdash; Elrohir (@Elrohir_BFME) <a href="https://twitter.com/Elrohir_BFME/status/1354102280883154947?ref_src=twsrc%5Etfw">26 janvier 2021</a>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</div>

		-->
	</section>
</template>

<script>
export default {
	head: {
		title: "Chronologie - La Guerre de l'Anneau",
  	},
	data() {
		return {
			tours: [],
		};
	},
	methods: {
		formatDate(date) {
			return new Intl
				.DateTimeFormat("fr-FR", {
					day: "numeric",
					month: "long",
				})
				.format(new Date(date));
		}
	},
	async fetch() {
		this.tours = (await this.$http.$get("/api/tours.json"))
			.filter(tour => new Date() > new Date(tour.end)); // only take turns that are over
	}
}
</script>

<style>

</style>
