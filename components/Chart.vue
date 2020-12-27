<template>
    <highchart :options="chartOptions"></highchart>  
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          backgroundColor: "#18191c"
        },
        exporting: {
          enabled: false
        },
          title: {
            text: 'My custom title',
            style: {
              color: '#efefef'
            }
        },
        subtitle: {
            text: 'My custom subtitle',
            style: {
              color: '#efefef'
            }
        },
        tooltip: {
            backgroundColor: '#FCFFC5',
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 3
        },
        series: [
          {
            data: [
              {
                name: "ROHAN",
                y: 42,
                color: '#0BFF00',
              },
              {
                name: "ELFE",
                y: 60,
                color: '#00BFFF',
              },
              {
                name: "GONDOR",
                y: 30,
                color: '#1E90FF',
              },
              {
                name: "NAIN",
                y: 42,
                color: '#FFFC00',
              },
              {
                name: "MORDOR",
                y: 60,
                color: '#DB5461',
              },
              {
                name: "ISENGARD",
                y: 30,
                color: '#3A3A3A',
              },
              {
                name: "GOBELIN",
                y: 60,
                color: '#FF6F00',
              },
              {
                name: "ANGMAR",
                y: 30,
                color: '#C500FF',
              }
            ]
          }
        ],
        legend: {
          style: {
            color: '#efefef'
          },
          itemStyle: {
            color: '#efefef'
          },
          itemHoverStyle: {
            color: 'grey'
          }
        },
      }
    };
  },
};
</script>

<style scoped>

.highcharts-text-outline{
  color: aqua;
}

</style>
