<template>
  <div id="container"></div>
</template>

<script>
import Highcharts from "highcharts";

export default {
  data: () => ({
    seriesOptions: [],
    seriesCounter: 0,
    names: [],
  }),

  mounted: {
  },

  methods: {
    createChart() {
      Highcharts.chart("container", {
        chart: {
          backgroundColor: "transparent",
        },
        legend: {
          enabled: true,
          itemStyle: { color: "#FFFFFF" },
          itemHoverStyle: { color: "#979797" },
        },
        xAxis: {
          type: "datetime",
          labels: {
            style: { color: "#FFFFFF" },
          },
        },
        yAxis: {
          gridLineWidth: 1,
          gridLineColor: "#2D324F",
          labels: {
            format: "{value}",
            style: { color: "#FFFFFF" },
          },
        },
        plotOptions: {
          series: {
            marker: { enabled: true },
          },
        },
        colors: ["#0071B0", "#FF9F00", "#FFFFFF"],
        opposite: true,
        reversed: true,
        series: this.seriesOptions,
      });
    },

    success(data){
        let name = this.url.match(/(msft|appl|goog)/)[0].toUpperCase();
        let i = this.names.indexOf(name);
        this.seriesOptions[i] = {
            name: name,
            data: data
        };
        this.seriesCounter += 1;
        if(this.seriesCounter === this.names.length){
            this.createChart();
        }
    },
  },
};
</script>

<style>
</style>