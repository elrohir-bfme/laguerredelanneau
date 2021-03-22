<template>
	<div :class="`card flex flex-col items-center justify-center bg-${ getColor() } hover:bg-${ getColor('hover') } text-${ getColor('text') } p-4 shadow rounded-lg`">
		<div class="inline-flex shadow-lg rounded-full overflow-hidden h-40 w-40">
			<span class="h-full w-full">
				<img :src="`/img/factions/${  faction.id  }.png`" alt="" class="faction-icon h-full w-full"/>
				<img src="/img/pages/index/cross.png" v-if="faction.death" class="cross" />
			</span>
		</div>

		<h2 :class="`mt-4 font-bold text-center text-xl text-${ getColor('subtitle') } text-opacity-75`" v-if="!faction.death">Chef de la {{ faction.name }}</h2>
		<h6 class="mt-2 text-xl font-bold text-center underline" v-if="!faction.death">{{ faction.chief }}</h6>
		<h2 :class="`mt-4 text-center font-bold text-xl text-${ getColor('subtitle') } text-opacity-75`" v-if="faction.death">{{ faction.name }} Morte</h2>

		<ul class="flex flex-row mt-4 space-x-1" v-if="!faction.death">
			<li>
				<span :class="`flex rounded-full bg-${ getColor('tags') } uppercase px-2 py-1 text-xs mr-1`">{{ faction.capital }}
                	<img src="/img/pages/index/faction card/house.svg" class="icon ml-2" />
              	</span>
            </li>
            <li>
              	<span :class="`flex rounded-full bg-${ getColor('tags') } uppercase px-2 py-1 text-xs mr-1`">{{ faction.money }}
                	<img src="/img/pages/index/faction card/coin.svg" class="icon ml-2" />
              	</span>
            </li>
		</ul>
		<ul class="flex flex-row mt-4 space-x-1" v-if="!faction.death">
            <li>
              	<span :class="`flex rounded-full bg-${ getColor('tags') } uppercase px-2 py-1 text-xs mr-1`">{{ faction.regions.length }} Territoires
                	<img src="/img/pages/index/faction card/flag.svg" class="icon ml-2" />
              	</span>
			</li>
            <li>
              	<span :class="`flex rounded-full bg-${ getColor('tags') } uppercase px-2 py-1 text-xs mr-1`">{{ faction.players.length }} Joueurs
					<img src="/img/pages/index/map legend/smiley.svg" class="icon ml-2" />
				</span>
			</li>
		</ul>
		<!--
		<ul class="flex flex-row mt-4 space-x-1" :v-if="!faction.death">
			<span :class="`flex rounded-full bg-${ getColor() } uppercase px-4 py-1 text-xs mr-1`">{{ getWinRate() }}</span>
		</ul>
		-->
		<h6 class="mt-2 text-xl font-bold underline" v-if="faction.death">{{ faction.death }}</h6>

	</div>
</template>

<script>
export default {
	name: "FactionCard",
	props: {
		faction: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getColor(type = "default") {
			const colors = [
				undefined,
				{
					color: "teal",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					color: "green",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					color: "blue",
					default: "600",
					hover: "800",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					color: "yellow",
					default: "700",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "800",
				},
				{
					color: "red",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					color: "gray",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					color: "orange",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					color: "purple",
					default: "700",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
			];
			
			return `${ colors[this.faction.id].color }-${ colors[this.faction.id][type] }`;
		},
		getWinRate() {
			return `${ faction.win }/${ faction.loose } (${ Math.round(faction.win / faction.loose) * 100 } % de victoires)`;
		},
	},
}
</script>

<style scoped>
.cross {
	height: inherit;
	width: inherit;
	position: relative;
	top: -100%;
}

.icon {
	height: 20px;
	width: 20px;
}
</style>
