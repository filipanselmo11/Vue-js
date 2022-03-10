<template>
  <div id="container-for-countries"></div>
</template>

<script>
import _ from "lodash";
import Highcharts from "highcharts";
import BaseComponent from "./BaseComponent.vue";
export default {
  extends: BaseComponent,

  methods: {
    //Utilizado para ler a lista e calcular a fonte de dados do gráfico
    dataSource() {
      //Extrair os paises
      //Contar a quantidade de ocorrencias
      //Transformar objetos em arrays
      //Ordernar do maior para o menor

   

      const countries = this.localList.map((item) => item.country);

      const base = _(countries)
        .countBy()
        .map((value, key) => ({ value, key }))
        .orderBy(["value"], "desc")
        .value(); //categoria e dados

      const categories = base.map((item) => item.key);

      const values = base.map((item) => item.value);

      if(this.chart === null){
        this.chart = this.setup({ categories, values });
      } else {
        this.chart.series[0].setData(values);
      }

      
    },
    //Montar o gráfico e exibi-lo na tela, só pode ser chamado quando a fonte de dados estiver pronta
    setup(obj) {
      const { categories, values } = obj;
      return Highcharts.chart("container-for-countries", {
        chart: {
          type: "column",
        },
        title: {
          text: "Countries",
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
  },
};
</script>

<style>
</style>