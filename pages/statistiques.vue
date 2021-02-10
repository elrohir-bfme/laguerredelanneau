<template>
    <div class="container mx-auto bg-lotr rounded-lg">
        <h1 class="text-white text-center text-3xl pt-4">Voici la page Statistiques</h1>
        

        <h2 class="text-white text-center text-2xl pt-4">Répartitions des joueurs de l'évènement</h2>

        <div v-if="this.nbFactionElfe" class="w-3/6 mx-auto p-4">
          <ChartDoughnutBase :chart-data="chartData" />
        </div>

        <h3 class="text-white text-center text-2xl pt-4">Répartition du nombre de territoire par faction</h3>

        <div class="w-3/6 mx-auto p-4 bg-gray-900">
          <ChartBarBase :chart-data="chartDataBar" />
        </div>

        <h4 class="text-white text-center text-2xl pt-4">Tableau statistique des joueurs</h4>

        
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
            initialSortBy: {field: 'nom', type: 'asc', field: 'win', type: 'desc'}
        }"
        >
        <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'faction'">
              <span :class="props.row.color">{{props.row.faction}}</span> 
            </span>
            <span v-else-if="props.column.field == 'ratio'">
              <span class="float-right">{{props.row.ratio}}</span>
            </span>
            <span v-else>
              {{props.formattedRow[props.column.field]}}
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
      nbTerritoireRohan: 0,
      nbTerritoireElfe: 0,
      nbTerritoireGondor: 0,
      nbTerritoireNain: 0,
      nbTerritoireMordor: 0,
      nbTerritoireIsengard: 0,
      nbTerritoireGobelin: 0,
      nbTerritoireAngmar: 0,
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
        {
          label: 'Ratio de victoire',
          field: 'ratio',
          type: 'string'
        }
        
      ],
      rows: [
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
              this.nbFactionMercenaire
              ]
          }
        ]
      };
    },
    fillDataBar() {
      this.chartDataBar = {
        labels: ["Elfe", "Rohan", "Gondor", "Nain", "Mordor", "Isengard", "Gobelin", "Angmar"],
        datasets: [
          {
            backgroundColor: ["#0bff00", "#00bfff", "#1e90ff", "#fffc00", "#db5461", "#ffffff", "#ff6f00" , "#c500ff"],
            borderColor: ["#636564", "#636564", "#636564", "#636564", "#636564", "#636564", "#636564", "#636564"],
            data: [
              this.nbTerritoireElfe, 
              this.nbTerritoireRohan, 
              this.nbTerritoireGondor, 
              this.nbTerritoireNain, 
              this.nbTerritoireMordor, 
              this.nbTerritoireIsengard, 
              this.nbTerritoireGobelin, 
              this.nbTerritoireAngmar,
              this.nbTerritoireAngmar,
            ],
            label: "Nombre de Territoires"
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

        for (let prop in obj) {
          if (!obj.hasOwnProperty(prop)) continue;

          switch (obj[prop]) {
            case '#0bff00':
            case '#0BFF00':
              this.nbTerritoireRohan += 1;
              break;

            case '#00bfff':
            case '#00BFFF':
              this.nbTerritoireElfe += 1;
              break;

            case '#1e90ff':
            case '#1E90FF':
              this.nbTerritoireGondor += 1;
              break;

            case '#fffc00':
            case '#FFFC00':
              this.nbTerritoireNain += 1;
              break;

            case '#db5461':
            case '#DB5461':
              this.nbTerritoireMordor += 1;
              break;

            case '#ffffff':
            case '#FFFFFF':
              this.nbTerritoireIsengard += 1;
              break;

            case '#ff6f00':
            case '#FF6F00':
              this.nbTerritoireGobelin += 1;
              break;

            case '#c500ff':
            case '#C500FF':
              this.nbTerritoireAngmar += 1;
              break;
            default:
              break;
          }
        }
        
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

                let newPlayer = {}
                if(obj2[player]['lose'] > 0 || obj2[player]['win'] > 0)
                  {
                    console.log(Math.round(obj2[player]['win']/ (obj2[player]['lose']+ obj2[player]['win']) * 100))
                    newPlayer = {
                        "nom": obj2[player]['name'],
                        "faction": faction,
                        "win": obj2[player]['win'],
                        "lose": obj2[player]['lose'],
                        "color": color,
                        "ratio": Math.round(obj2[player]['win']/ (obj2[player]['lose']+ obj2[player]['win']) * 100) + "%"
                    }
                  }
                else {
                  newPlayer = {
                      "nom": obj2[player]['name'],
                      "faction": faction,
                      "win": obj2[player]['win'],
                      "lose": obj2[player]['lose'],
                      "color": color,
                      "ratio": "Aucune partie joué"
                  }
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

<style scoped>

.bg-lotr {
  background-color: #18191c;
}

</style>
