<template>
  <div id="icon-chart-1"></div>
</template>

<script>
import Highcharts from "highcharts";
export default {
  mounted() {
    this.dataSource();
  },

  methods: {
    dataSource() {
      Highcharts.chart("icon-chart-1", {
        xAxis: {
          categories: ["Jan", "Feb", "Mar"],
        },

        series: [
          {
            type: "scatter",
            data: [29.9, 71.5, 106.4],
            marker: {
              symbol:
                "url(https://www.shareicon.net/data/32x32/2016/05/07/761418_polygon_512x512.png)",
              width: 40,
              height: 40,
            },
            dataLabels: {
              enabled: true,
              color: "#FFF",
              y: 12,
            },
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>