<template>
  <div class="container">
    <div class="well">
      <filter-component></filter-component>
    </div>
    <div class="row">
      <div class="col-md-6">
        <countries-component></countries-component>
      </div>
      <div class="col-md-6">
        <languages-component></languages-component>
      </div>
    </div>
  </div>
</template>

<script>
import CountriesComponent from './charts/CountriesComponent.vue';
import FilterComponent from "./components/FilterComponent.vue";
import LanguagesComponent from './charts/LanguagesComponent.vue';
import axios from 'axios';

const http = axios.create();

export default {
  components: {CountriesComponent, FilterComponent, LanguagesComponent },
  name: "App",
  mounted() {
    http.get(require('./data/MOCK_DATA.json')).then(response => {
      this.$store.commit('SET_LIST', response.data);
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
