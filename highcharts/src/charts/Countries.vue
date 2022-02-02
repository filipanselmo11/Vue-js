<template>
  <div id="container-for-countries"></div>
</template>

<script>
/* eslint-disable */
import _ from "lodash";
import { mapState } from "vuex";
import Highcharts from "highcharts";
export default {
  computed: mapState({
    list: (state) => state.list,
  }),

  watch: {
    list() {
      this.dataSource();
    },
  },

  methods: {
    /**
     * Utilziado para ler a lista e calcular a fonte de dados do gráfico
     */
    dataSource() {
      /**
       * 1 - Extrair os paises V
       * 2 - Contar a quantidade de ocorrencias de cada um
       * 3 - Transformar objetos em arrays
       * 4 - Ordenar do maior para o menor
       */

      const countries = this.list.map(item => item.country);

      const base = _(countries)
        .countBy()
        .map((value, key) => ({key, value}))
        .orderBy(["value"], ["desc"])
        .value();

      const categories = base.map((item) => item.key);

      const values = base.map((item) => item.value);

      this.setup({ categories, values });
    },

    setup(obj) {
      const { categories, values } = obj;

      Highcharts.chart("container-for-countries", {
        chart: {
          type: "column",
        },
        title: {
          text: "Countries",
        },
        subtitle: {
          text: "Source: codecasts.com.br",
        },
        xAxis: {
          categories: categories,
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

    /**
     * Para montar o gráfico e exibi-lo na tela
     */
  },
};
</script>

<style></style>
