<template>
  <div id="icon-chart-2"></div>
</template>

<script>
/*eslint-disable*/
import Highcharts from "highcharts";
export default {
  mounted() {
    this.dataSource();
  },

  methods: {
    dataSource() {
      const svgIcon = `<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"></path></svg>`;

      Highcharts.chart(
        "icon-chart-2",
        {
          chart: {
            type: "column",
          },
          series: [
            {
              name: "Year 1800",
              data: [-10700, 45000, 45000, -20300, 20000],
              zones: [
                {
                  value: 100,
                  color: "orange",
                },
                {
                  value: 500,
                  color: "black",
                },
                {
                  color: "blue",
                },
              ],
            },
          ],
        },
        function () {
          var chart = this,
            leftOffset = chart.plotLeft,
            topOffset = chart.plotTop,
            series = chart.series[0],
            xAxis = series.xAxis,
            yAxis = series.yAxis,
            points = series.points;

          points.forEach(function (point) {
            var x = xAxis.toPixels(point.x) - leftOffset,
              y = yAxis.toPixels(point.y) - topOffset,
              toCenter = point.shapeArgs.height / 2;

            toCenter = point.y > 0 ? toCenter : -toCenter;

            var halfWidth = 11;
            chart.renderer
              .path()
              .attr({
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z",
                transform:
                  "translate(" + (x - halfWidth) + "," + (y - toCenter) + ")",
                fill: "#b45",
                stroke: "black",
                "stroke-width": 1,
                zIndex: 10,
              })
              .add(series.group);
          });
        }
      );
    },
  },
};
</script>

<style>
</style>