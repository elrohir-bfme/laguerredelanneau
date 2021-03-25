<template>
    <div class="mt-8 bg-lotr container mx-auto rounded-3xl text-white">
    <h1 class="text-3xl sm:text-4xl text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center underline">Bandes Annonce 💙</h1>
    <h2 class="text-2xl sm:text-3xl text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">Incroyable réalisation d'Eternal !</h2>

	<template v-for="(video, index) in videos">
		<div v-bind:key="index">
		<h3 class="text-2xl sm:text-3xl text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ video.title }}</h3>
			<div v-for="(url, i) in video.urls" v-bind:key="i" class="videoWrapper m-8 z-0">
				<iframe width="560" height="315" :src="url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
	</template>

    </div>
</template>

<script>
export default {
	head: {
		title: "Vidéos - La Guerre de l'Anneau",
  	},
	data() {
		return {
			videos: [
				{
					title: "BANDE ANNONCE DES ELFES",
					urls: [
						"https://www.youtube.com/embed/EjE0rTCj93g",
					],
				},
				{
					title: "BANDE ANNONCE DE L'ANGMAR",
					urls: [
						"https://www.youtube.com/embed/byFQ0Q9Ys0g",
						"https://www.youtube.com/embed/valuTOJq6zo",
					],
				},
				{
					title: "BANDE ANNONCE DU GONDOR",
					urls: [
						"https://www.youtube.com/embed/3dzgilTe_H0",
					],
				},
				{
					title: "BANDE ANNONCE DES NAINS",
					urls: [
						"https://www.youtube.com/embed/LzVyI4V4R8c",
						"https://www.youtube.com/embed/m1Uer6Ki_Q0",
						"https://www.youtube.com/embed/OIHHOVdSym8",
						"https://www.youtube.com/embed/_YywU1QGHOo",
					],
				},
				{
					title: "BANDE ANNONCE DES GOBELINS",
					urls: [
						"https://www.youtube.com/embed/08jagT__o00",
					],
				},
				{
					title: "BANDE ANNONCE DU ROHAN",
					urls: [
						"https://www.youtube.com/embed/7iQpc1kQfw8",
					],
				},
			],
		};
	}
}
</script>

<style scoped>

.bg-lotr {
  background-color: #18191c;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
