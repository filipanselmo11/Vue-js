<template>
  <div id="nomes"></div>
</template>

<script>
import _ from "lodash";
import Highcharts from "highcharts";
import { mapState } from "vuex";
import axios from "axios";

const http = axios.create();

export default {
  computed: mapState({
    lista: (state) => state.lista,
  }),

  watch: {
    lista() {
      this.dataSource();
    },
  },

  mounted() {
    http.get("../data/MOCK_DATA.json").then((response) => {
      console.log(response.data);
    });
  },

  methods: {
    dataSource() {
      const nomes = this.lista.map((item) => item.fNome);

      const base = _(nomes)
        .countBy()
        .map((value, key) => ({ value, key }))
        .orderBy(["value"], "desc")
        .value();

      const categorias = base.map((item) => item.key);

      const values = base.map((item) => item.value);

      this.setup({ categorias, values });
    },

    setup(obj) {
      const { categorias, values } = obj;
      Highcharts.chart("nomes", {
        chart: {
          type: "column",
        },
        title: {
          text: "First Nomes",
        },
        xAxis: {
          categories: categorias,
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Quantidade",
          },
        },
        series: [
          {
            name: "Quantidade",
            data: values,
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>