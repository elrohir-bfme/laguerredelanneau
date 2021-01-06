import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ["chartData"],
  data() {
    return {
      options: {
        responsive: true
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};