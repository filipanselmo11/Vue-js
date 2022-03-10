<template>
  <div id="container-for-languages"></div>
</template>

<script>
import BaseComponent from "./BaseComponent.vue";
import _ from 'lodash';
import Highcharts from 'highcharts';

export default {
  extends: BaseComponent,

  methods: {
    dataSource() {
      const languages = this.localList.map(item => item.language);
      const base = _(languages).countBy().map((y, name) => ({y, name})).orderBy(['y'], ['desc']).value();
      const subset = base.slice(0, 10);
      const total = subset.reduce((acc, item) => {
        return acc + item.y;
      }, 0);

      const finalData = subset.map(item => {
        item.y = (item.y / total) * 100;
        return item;
      })
      if(this.chart === null) {
        this.chart = this.setUp({ finalData });
      } else {
        this.chart.series[0].setData(finalData);
      }
    },
    setUp(obj) {

      const { finalData } = obj;

      return Highcharts.chart("container-for-languages", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: "Idiomas",
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
            name: "Percentual",
            colorByPoint: true,
            data: finalData,
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>