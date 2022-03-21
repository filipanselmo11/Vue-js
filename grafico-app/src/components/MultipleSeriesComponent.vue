<template>
  <div id="container"></div>
</template>

<script>
import Highcharts from "highcharts";
export default {
  data: () => ({
    seriesOptions: [],
    seriesCounter: 0,
    names: ["MSFT", "AAPL", "GOOG"],
  }),

  mounted() {
    this.dataSource();
  },

  methods: {
    dataSource() {
      Highcharts.chart("container", {
        rangeSelector: {
          selected: 4,
        },
        yAxis: {
          labels: {
            formatter() {
              return (this.value > 0 ? " + " : "") + this.value + "%";
            },
          },
          plotLines: [
            {
              value: 0,
              width: 2,
              color: "silver",
            },
          ],
        },
        plotOptions: {
          series: {
            compare: "percent",
            showInNavigator: true,
          },
        },
        tooltip: {
          pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}*)<br/>',
          valueDecimals: 2,
          split: true,
        },

        series: this.seriesOptions,
      });
    },

    success(data) {
      var name = this.url.match(/(msft|aapl|goog)/)[0].toUpperCase();
      var i = this.names.indexOf(name);
      this.seriesOptions[i] = {
        name: name,
        data: data,
      };
      this.seriesCounter += 1;
      if (this.seriesCounter === this.names.length) {
        this.dataSource();
      }
    },
    getData() {},
  },
};
</script>

<style>
#container {
  height: 400px;
  min-width: 310px;
}
</style>