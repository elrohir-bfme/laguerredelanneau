<template>
	<div :class="`card flex flex-col items-center justify-center bg-${ getColor() } hover:bg-${ getColor('hover') } text-${ getColor('text') } p-4 shadow rounded-lg`">
		<div class="inline-flex shadow-lg rounded-full overflow-hidden h-40 w-40">
			<span class="h-full w-full">
				<img :src="`/img/factions/${ faction.id }.png`" alt="" class="faction-icon h-full w-full"/>
				<img src="/img/pages/index/cross.png" v-if="faction.death" class="cross" />
			</span>
		</div>

		<template v-if="!faction.death">
			<h2 :class="`my-4 font-bold text-center text-xl text-${ getColor('subtitle') } text-opacity-75`">Chef de la {{ faction.name }}</h2>
			<h6 class="my-4 mt-0 text-xl font-bold text-center underline">{{ faction.chief }}</h6>
			<div class="flex flex-row flex-wrap gap-1 justify-center">
				<IndexTag
					:text="faction.capital"
					iconPath="/img/pages/index/faction card/house.svg"
					:backgroundColor="'bg-' + getColor('tags')"
				/>
				<IndexTag
					:text="faction.money"
					iconPath="/img/pages/index/faction card/coin.svg"
					:backgroundColor="'bg-' + getColor('tags')"
				/>
				<IndexTag
					:text="`${ faction.regions.length } Territoires`"
					iconPath="/img/pages/index/faction card/flag.svg"
					:backgroundColor="'bg-' + getColor('tags')"
				/>
				<IndexTag
					:text="`${ faction.players.length } Joueurs`"
					iconPath="/img/pages/index/map legend/smiley.svg"
					:backgroundColor="'bg-' + getColor('tags')"
				/>
				<!--
					<IndexTag
						:text="getWinRate()"
						:backgroundColor="'bg-' + getColor('tags')"
					/>
				-->
			</div>
		</template>
		<template v-else>
			<h2 :class="`my-4 text-center font-bold text-xl text-${ getColor('subtitle') } text-opacity-75`">{{ faction.name }} Morte</h2>
			<h6 class="mt-2 text-xl font-bold underline" v-if="faction.death">{{ faction.death }}</h6>
		</template>

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
				{
					faction_id: 1,
					color: "green",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					faction_id: 2,
					color: "teal",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					faction_id: 3,
					color: "blue",
					default: "600",
					hover: "800",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					faction_id: 4,
					color: "yellow",
					default: "700",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "800",
				},
				{
					faction_id: 5,
					color: "red",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					faction_id: 6,
					color: "gray",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					faction_id: 7,
					color: "orange",
					default: "800",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
				{
					faction_id: 8,
					color: "purple",
					default: "700",
					hover: "900",
					subtitle: "300",
					text: "100",
					tags: "700",
				},
			];
			const c = colors.find(color => color.faction_id === this.faction.id);
			return `${ c.color }-${ c[type] }`;
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
</style>
