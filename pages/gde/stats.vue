<template>
    <highchart v-if="!loading && territory.length > 0" :options="chartOptions" />
</template>

<script>
export default {
  data() {
    return {
        loading: true,
        map: [],
        territory: [],
        nbTerritoireArnor: 0,
        nbTerritoireRohan: 0,
        nbTerritoireElfe: 0,
        nbTerritoireGondor: 0,
        nbTerritoireNain: 0,
        nbTerritoireMordor: 0,
        nbTerritoireIsengard: 0,
        nbTerritoireGobelin: 0,
        nbTerritoireAngmar: 0,
        nbPlayerArnor: 0,
        nbPlayerRohan: 0,
        nbPlayerElfe: 0,
        nbPlayerGondor: 0,
        nbPlayerNain: 0,
        nbPlayerMordor: 0,
        nbPlayerIsengard: 0,
        nbPlayerGobelin: 0,
        nbPlayerAngmar: 0,
        chartOptions: {}
    };
  },
    async fetch() {
    this.loading = true;
    this.map = await this.$http.$get(
      "https://api.npoint.io/2eeb1bea715cd907d7bc"
    );
    

    for (var key in this.map) {
      var obj = this.map[key];

      for (let prop in obj) {
        if (!obj.hasOwnProperty(prop)) continue;

        switch (obj[prop]) {
          case "#ff85ee":
          case "#FF85EE":
            this.nbTerritoireArnor += 1;
            break;
          case "#0bff00":
          case "#0BFF00":
            this.nbTerritoireRohan += 1;
            break;

          case "#00e3ff":
          case "#00E3FF":
            this.nbTerritoireElfe += 1;
            break;

          case "#093aff":
          case "#093AFF":
            this.nbTerritoireGondor += 1;
            break;

          case "#fffc00":
          case "#FFFC00":
            this.nbTerritoireNain += 1;
            break;

          case "#ff3636":
          case "#FF3636":
            this.nbTerritoireMordor += 1;
            break;

          case "#ffffff":
          case "#FFFFFF":
            this.nbTerritoireIsengard += 1;
            break;

          case "#ff6f00":
          case "#FF6F00":
            this.nbTerritoireGobelin += 1;
            break;

          case "#c500ff":
          case "#C500FF":
            this.nbTerritoireAngmar += 1;
            break;
          default:
            break;
        }
      }

      if (obj.hasOwnProperty("players") && obj.players.length > 0) {
        let obj2 = JSON.parse(JSON.stringify(obj["players"]));
        for (var player in obj2) {
          switch (obj2[player]["faction"]) {
            case 1:
              this.nbPlayerArnor += 1;
              this.nbPlayers += 1;
              this.winArnor += obj2[player]["win"];
              this.loseArnor += obj2[player]["lose"];
              break;
            case 2:
              this.nbPlayerGondor += 1;
              this.nbPlayers += 1;
              this.winGondor += obj2[player]["win"];
              this.loseGondor += obj2[player]["lose"];
              break;
            case 3:
              this.nbPlayerRohan += 1;
              this.nbPlayers += 1;
              this.winRohan += obj2[player]["win"];
              this.loseRohan += obj2[player]["lose"];
              break;
            case 4:
              this.nbPlayerElfe += 1;
              this.nbPlayers += 1;
              this.winElfe += obj2[player]["win"];
              this.loseElfe += obj2[player]["lose"];
              break;
            case 5:
              this.nbPlayerNain += 1;
              this.nbPlayers += 1;
              this.winNain += obj2[player]["win"];
              this.loseNain += obj2[player]["lose"];
              break;
            case 6:
              this.nbPlayerMordor += 1;
              this.nbPlayers += 1;
              this.winMordor += obj2[player]["win"];
              this.loseMordor += obj2[player]["lose"];
              break;
            case 7:
              this.nbPlayerIsengard += 1;
              this.nbPlayers += 1;
              this.winIsengard += obj2[player]["win"];
              this.loseIsengard += obj2[player]["lose"];
              break;
            case 8:
              this.nbPlayerGobelin += 1;
              this.nbPlayers += 1;
              this.winGobelin += obj2[player]["win"];
              this.loseGobelin += obj2[player]["lose"];
              break;
            case 9:
              this.nbPlayerAngmar += 1;
              this.nbPlayers += 1;
              this.winAngmar += obj2[player]["win"];
              this.loseAngmar += obj2[player]["lose"];
              break;
            default:
              break;
          }
        }
      }
    }



    this.territory = [
        {
            name: "Arnor",
            y: this.nbTerritoireArnor
        },
        {
            name: "Rohan",
            y: this.nbTerritoireRohan
        },
        {
            name: "Gondor",
            y: this.nbTerritoireGondor
        },
        {
            name: "Elfe",
            y: this.nbTerritoireElfe
        },
        {
            name: "Nain",
            y: this.nbTerritoireNain
        },
        {
            name: "Mordor",
            y: this.nbTerritoireMordor
        },
        {
            name: "Isengard",
            y: this.nbTerritoireIsengard
        },
        {
            name: "Gobelin",
            y: this.nbTerritoireGobelin
        },
        {
            name: "Angmar",
            y: this.nbTerritoireAngmar
        },
    ]
    this.chartOptions = {
           chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Territoires'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.territory
        }]
      }
    this.loading = false;
  },
};
</script>