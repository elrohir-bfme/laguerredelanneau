<template>
<div class="container flex flex-col mx-auto w-full items-center justify-center">
    <div class="px-4 py-5 sm:px-6 w-1/2 border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Listes des matchs
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
            Cliquer pour récupérer le replay
        </p>
    </div>

    <div class="flex items-center justify-center bg-gray-900 p-4 rounded">
	<div class="col-span-12">
		<div class="overflow-auto lg:overflow-visible ">
			<table class="table text-gray-400 border-separate space-y-6 text-sm">
				<thead class="bg-gray-800 text-gray-500">
					<tr>
						<th class="p-3">Numéro</th>
						<th class="p-3 text-left">Version</th>
						<th class="p-3 text-left">Type</th>
						<th class="p-3 text-left">Equipe</th>
						<th class="p-3 text-left">Victoire</th>
						<th class="p-3 text-left">Défaite</th>
						<th class="p-3 text-left">Replay</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(replay, index) in replays" :key="replay.id" class="bg-gray-800">
                        <td class="p-3 font-bold">
							#{{index}}
						</td>
                        <td class="p-3">
                            <img v-if="replay.version === 'BFME2'" class="h-8 w-8  object-cover" src="~assets/wars/bfme2.png" alt="unsplash image">
                            <img v-if="replay.version === 'ROTWK'" class="h-8 w-8  object-cover" src="~assets/wars/rotwk.png" alt="unsplash image">
							
						</td>
						<td class="p-3">
							<div class="flex align-items-center">
								<div class="ml-3">
									<div class="">{{replay.rang}}</div>
									<div class="text-gray-500">{{replay.type}}</div>
									<div class="text-gray-500">{{replay.bo}}</div>
								</div>
							</div>
						</td>
						<td class="p-3">
                            <div class="flex align-items-center">
                                <div class="ml-3">
									<div><span class="bg-green-400 text-gray-50 rounded-md px-2">{{replay.team_victoire}}</span></div>
									<div class="text-center">VS</div>
									<div><span class="bg-red-400 text-gray-50 rounded-md px-2">{{replay.team_defaite}}</span></div>
								</div>
							</div>
						</td>
						
                        <td class="p-3">
							<div v-for="player in replay.players_clans_victoire" :key="player.id" class="flex align-items-center">
								<div class="ml-3">
									<div class=""><span class="font-bold">{{player.name}} </span>({{player.victory}}/{{player.defeat}})</div>
								</div>
							</div>
						</td>

                        <td class="p-3">
							<div v-for="player in replay.players_clans_defaite" :key="player.id" class="flex align-items-center">
								<div class="ml-3">
									<div class=""><span class="font-bold">{{player.name}} </span>({{player.victory}}/{{player.defeat}})</div>
								</div>
							</div>
						</td>
						
						<td class="p-3 ">
                            <div v-for="(replay, index) in replay.replays" :key="replay.id" class="flex align-items-center">
								<div class="ml-3">
                                    <a target="_blank" :href="replay.replay" class="text-gray-400 hover:text-gray-100 mr-2">
                                        <i class="text-base">Replay {{index}}</i>
                                    </a>
                                </div>
                            </div>
						</td>
					</tr>
					
				</tbody>
			</table>
		</div>
	</div>
</div>
</div>


</template>

<script>
export default {
  layout: "wars",
    data() {
        return {
        loading: false,
        replays: []
        }
    },
    async fetch() {
      this.loading = true;
      this.replays =  await this.$strapi.find('replays-clans')
      this.loading = false;
    },
}
</script>

<style>
	.table {
		border-spacing: 0 15px;
	}

	i {
		font-size: 1rem !important;
	}

	.table tr {
		border-radius: 20px;
	}

	tr td:nth-child(n+7),
	tr th:nth-child(n+7) {
		border-radius: 0 .625rem .625rem 0;
	}

	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: .625rem 0 0 .625rem;
	}
</style>