<template>
    <div class="container mx-auto">
        <h1 class="text-white text-center text-3xl">Voici la page Statistiques</h1>
        

        <div v-if="this.nbFactionElfe" class="w-3/6 mx-auto p-4">
          <ChartDoughnutBase :chart-data="chartData" />
        </div>

        <!-- <div class="w-3/6 mx-auto p-4 bg-gray-900">
          <ChartBarBase :chart-data="chartDataBar" />
        </div> -->

        
        <!-- <Chart/> -->
        <vue-good-table
        class="m-4"
        :columns="columns"
        :rows="rows"
        :line-numbers="true"
        theme="nocturnal"
        :search-options="{
            enabled: true,
            placeholder: 'Rechercher',
        }"
        :sort-options="{
            enabled: true,
            initialSortBy: {field: 'nom', type: 'asc'}
        }"
        >
        <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'faction'">
            <span :class="props.row.color">{{props.row.faction}}</span> 
            </span>
        </template>
        </vue-good-table>
    </div>
</template>

<script>
export default {
  name: 'Statistiques',
  data(){
    return {
      chartData: null,
      chartDataBar: null,
      nbFactionElfe: 0,
      nbFactionRohan: 0,
      nbFactionGondor: 0,
      nbFactionNain: 0,
      nbFactionMordor: 0,
      nbFactionIsengard: 0,
      nbFactionGobelin: 0,
      nbFactionAngmar: 0,
      nbFactionMercenaire: 0,
      columns: [
        {
          label: 'Nom',
          field: 'nom',
        },
        {
          label: 'Faction',
          field: 'faction',
          type: 'string',
        },
        {
          label: 'Victoire',
          field: 'win',
          type: 'number'
        },
        {
          label: 'Défaite',
          field: 'lose',
          type: 'number'
        },
      ],
      rows: [
        // { nom:"John", faction: "Elfe", win: 42, lose: 3 },
        // { nom:"Jane", faction: "Nain", win: 4, lose: 4 },
        // { nom:"Susan", faction: "Mordor", win: 6, lose: 2 },
        // { nom:"Chris", faction: "Gobelin", win: 8, lose: 9 },
        // { nom:"Dan", faction: "Nain", win: 2, lose: 1 },
        // { nom:"John", faction: "Isengard", win: 9, lose: 0 },
      ],
    };
  },
   methods: {
    fillData() {
      this.chartData = {
        labels: ["Elfe", "Rohan", "Gondor", "Nain", "Mordor", "Isengard", "Gobelin", "Angmar", "Mercenaire"],
        datasets: [
          {
            backgroundColor: ["#0bff00", "#00bfff", "#1e90ff", "#fffc00", "#db5461", "#ffffff", "#ff6f00" , "#c500ff", "#83858C"],
            borderColor: ["#636564", "#636564", "#636564", "#636564", "#636564", "#636564", "#636564", "#636564", "#636564"],
            // hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"],
            data: [
              this.nbFactionElfe, 
              this.nbFactionRohan, 
              this.nbFactionGondor, 
              this.nbFactionNain, 
              this.nbFactionMordor, 
              this.nbFactionIsengard, 
              this.nbFactionGobelin, 
              this.nbFactionAngmar, 
              this.nbFactionMercenaire]
          }
        ]
      };
    },
    fillDataBar() {
      this.chartDataBar = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            backgroundColor: "#de98ab",
            borderColor: "#0c0306",
            data: [1, 3, 5, 7, 2, 4, 6],
            label: "Bar"
          },
          {
            backgroundColor: "#98ddde",
            borderColor: "#030c0c",
            data: [1, 5, 2, 6, 3, 7, 4],
            label: "Baz"
          }
        ]
      };
    }
  },
  async fetch() {
      this.loaded = false
      this.players = await this.$http.$get('https://api.npoint.io/38a2899b98818d89418c');

      for (let key in this.players) {

        var obj = this.players[key];

        if(obj.hasOwnProperty("players") && obj.players.length > 0) {
            let obj2 = JSON.parse(JSON.stringify(obj['players']))

            for (let player in obj2) {
                let faction = "Mercenaire";
                let color = "text-white";
                switch (obj2[player]['faction']) {
                    case 1:
                        faction = "Elfe",
                        color = "text-teal-500",
                        this.nbFactionElfe += 1
                    break;
                    case 2:
                        faction = "Rohan",
                        color = "text-green-500",
                        this.nbFactionRohan += 1
                    break;
                    case 3:
                        faction = "Gondor",
                        color = "text-blue-500",
                        this.nbFactionGondor += 1
                    break;
                    case 4:
                        faction = "Nain",
                        color = "text-yellow-500",
                        this.nbFactionNain += 1
                    break;
                    case 5:
                        faction = "Mordor",
                        color = "text-red-500",
                        this.nbFactionMordor += 1
                    break;
                    case 6:
                        faction = "Isengard",
                        color = "text-gray-500",
                        this.nbFactionIsengard += 1
                    break;
                    case 7:
                        faction = "Gobelin",
                        color = "text-orange-500",
                        this.nbFactionGobelin += 1
                    break;
                    case 8:
                        faction = "Angmar",
                        color = "text-purple-500",
                        this.nbFactionAngmar += 1
                    break;
                    default:
                        faction = "Mercenaire",
                        color = "text-gray-500",
                        this.nbFactionMercenaire += 1
                    break;
                }

                let newPlayer = {
                    "nom": obj2[player]['name'],
                    "faction": faction,
                    "win": obj2[player]['win'],
                    "lose": obj2[player]['lose'],
                    "color": color
                }
                this.rows.push(newPlayer);
            }

            
        }
      }
      
      this.fillData();
      this.fillDataBar();
    },
};
</script>