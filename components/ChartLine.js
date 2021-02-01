import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ["chartDataBar"],
  data() {
    return {
      options: {
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        },
        responsive: true
      }
    };
  },
  mounted() {
    this.renderChart(this.chartDataBar, this.options);
  }
};