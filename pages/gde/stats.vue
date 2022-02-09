<template>
  <div>
    <highchart
      v-if="!loading && territory.length > 0"
      :options="chartOptions"
    />
    <highchart
      v-if="!loading && territory.length > 0"
      :options="chartOptions2"
    />
    <highchart
      v-if="!loading && territory.length > 0"
      :options="chartOptions3"
    />
    <highchart
      v-if="!loading && territory.length > 0"
      :options="chartOptions4"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      map: [],
      territory: [],
      territoryAlliance: [],
      players: [],
      playersAlliance: [],
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
      chartOptions: {},
      chartOptions2: {},
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
              break;
            case 2:
              this.nbPlayerGondor += 1;
              this.nbPlayers += 1;
              break;
            case 3:
              this.nbPlayerRohan += 1;
              this.nbPlayers += 1;
              break;
            case 4:
              this.nbPlayerElfe += 1;
              this.nbPlayers += 1;
              break;
            case 5:
              this.nbPlayerNain += 1;
              this.nbPlayers += 1;
              break;
            case 6:
              this.nbPlayerMordor += 1;
              this.nbPlayers += 1;
              break;
            case 7:
              this.nbPlayerIsengard += 1;
              this.nbPlayers += 1;
              break;
            case 8:
              this.nbPlayerGobelin += 1;
              this.nbPlayers += 1;
              break;
            case 9:
              this.nbPlayerAngmar += 1;
              this.nbPlayers += 1;
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
        y: this.nbTerritoireArnor,
      },
      {
        name: "Rohan",
        y: this.nbTerritoireRohan,
      },
      {
        name: "Gondor",
        y: this.nbTerritoireGondor,
      },
      {
        name: "Elfe",
        y: this.nbTerritoireElfe,
      },
      {
        name: "Nain",
        y: this.nbTerritoireNain,
      },
      {
        name: "Mordor",
        y: this.nbTerritoireMordor,
      },
      {
        name: "Isengard",
        y: this.nbTerritoireIsengard,
      },
      {
        name: "Gobelin",
        y: this.nbTerritoireGobelin,
      },
      {
        name: "Angmar",
        y: this.nbTerritoireAngmar,
      },
    ];
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Territoires",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: this.territory,
        },
      ],
    };

    this.territoryAlliance = [
      {
        name: "BIEN",
        y:
          this.nbTerritoireArnor +
          this.nbTerritoireGondor +
          this.nbTerritoireRohan +
          this.nbTerritoireNain +
          this.nbTerritoireElfe,
      },
      {
        name: "MAL",
        y:
          this.nbTerritoireMordor +
          this.nbTerritoireIsengard +
          this.nbTerritoireGobelin +
          this.nbTerritoireAngmar,
      },
    ];

    this.chartOptions2 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Territoires",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: this.territoryAlliance,
        },
      ],
    };



    this.players = [
      {
        name: "Arnor",
        y: this.nbPlayerArnor
      },
            {
        name: "Gondor",
        y: this.nbPlayerGondor
      },
    {
        name: "Rohan",
        y: this.nbPlayerRohan
      },
    {
        name: "Elfe",
        y: this.nbPlayerElfe
      },
    {
        name: "Nain",
        y:this.nbPlayerNain,
      },
      {
        name: "Mordor",
        y: this.nbPlayerMordor
      },
      {
        name: "Isengard",
        y: this.nbPlayerIsengard
      },
      {
        name: "Gobelin",
        y: this.nbPlayerGobelin
      },
      {
        name: "Angmar",
        y: this.nbPlayerAngmar,
      },
    ];

        this.chartOptions3 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Joueurs",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: this.players,
        },
      ],
    };

    this.playersAlliance = [
      {
        name: "BIEN",
        y:
          this.nbPlayerArnor +
          this.nbPlayerGondor +
          this.nbPlayerRohan +
          this.nbPlayerElfe +
          this.nbPlayerNain,
      },
      {
        name: "MAL",
        y:
          this.nbPlayerMordor +
          this.nbPlayerIsengard +
          this.nbPlayerGobelin +
          this.nbPlayerAngmar,
      },
    ];

    this.chartOptions4 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Joueurs Alliances",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: this.playersAlliance,
        },
      ],
    };

    this.loading = false;
  },
};
</script>