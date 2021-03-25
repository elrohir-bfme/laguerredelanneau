<template>
  <div class="mt-8 w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
	<div class="container px-5 pt-4 pb-10 mx-auto">
	<div class="flex flex-col text-center w-full mb-4">
		<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white underline">L'équipe de la Guerre de l'Anneau</h1>
		<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Si vous avez des questions, hésitez pas à demander des renseignements sur le Discord.</p>
		</div>
		<div class="flex flex-wrap -m-2">

			<template v-for="(person, index) in staff">
				<ReglesStaff
					:name="person.name"
					:img="person.img"
					:description="person.description"
					v-bind:key="index"
				/>
			</template>

		</div>
	</div>
	<h3 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center underline">Les règles de la Guerre de l'Anneau</h3>
	<div class="videoWrapper">
		<iframe src="https://drive.google.com/file/d/1wF5UgAA9WF8Xz_yZuiyntXJCX0XJEIuE/preview"></iframe>
	</div>
  </div>
</template>

<script>
export default {
	head: {
		title: "Règles - La Guerre de l'Anneau",
  	},
	data() {
		return {
			staff: [
				{
					name: "Orval",
					img: "https://i.pinimg.com/736x/f3/be/f8/f3bef8292b9159e55e18383f13b94e10.jpg",
					description: "Notre Manwë de la GDA",
				},
				{
					name: "Hasgardien",
					img: "https://em.wattpad.com/ff9ecbd90b9ddad801e4494d0171da715eac9d65/687474703a2f2f7374617469632e636f6d696376696e652e636f6d2f75706c6f6164732f6f726967696e616c2f31313131382f3131313138343037382f343737343130392d393836353038313338352d74686f722e2e6a7067?s=fit&h=360&w=360&q=80",
					description: "Vala de la GDA (Rédacteur des règles)",
				},
				{
					name: "Aragornanus",
					img: "https://cdn.discordapp.com/avatars/535135573757657101/89402e4256ce366f091c4d74860eec03.webp?size=1024",
					description: "Gestionnaire de la trésorerie",
				},
				{
					name: "Dudu",
					img: "https://cdn.discordapp.com/avatars/219909217996374017/f2c9544e4e030669e9eabab315728b2d.png?size=128",
					description: "Mappeur de la GDA",
				},
				{
					name: "TK",
					img: "https://cdn.discordapp.com/avatars/178955618483175425/6bf773d864a3b5de5678d21e601a5674.webp?size=1024",
					description: "Notre développeur Nain",
				},
				{
					name: "Elrohir",
					img: "https://cdn.discordapp.com/avatars/487661875346276352/67f66b8f323220bf027c4c55d924dcb1.webp?size=1024",
					description: "L'Iluvatar de la GDA",
				},
				{
					name: "Tothor",
					img: "https://cdn.discordapp.com/attachments/646433288596226078/813389259008376842/tothororomeavecuncor.jpg",
					description: "La mascotte de la GDA",
				},
				{
					name: "Toinou",
					img: "https://cdn.discordapp.com/attachments/646838305702281236/813478162037473310/telechargement_2.jpg",
					description: "Notre incroyable mappeur",
				},
			],
		};
	},
}
</script>

<style scoped>

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
