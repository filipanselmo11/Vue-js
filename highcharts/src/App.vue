<template>
  <div class="container">
    <div class="well">
      <Filters></Filters>
    </div>
    <div class="row">
      <div class="col-md-6">
        <Countries></Countries>
      </div>
      <div class="col-md-6">
        <!--<Languages></Languages>-->
      </div>
    </div>
  </div>
</template>

<script>
import Countries from "./charts/Countries.vue";
//import Languages from "./charts/Languages.vue";
import Filters from "./components/Filters.vue";
import axios from "axios";

const http = axios.create();

export default {
  name: "App",
  components: { Countries, /*Languages*/ Filters },
  mounted() {
    http
      .get(
        "https://raw.githubusercontent.com/filipanselmo11/DadosJSON/master/MOCK_DATA.json"
      )
      .then((response) => {
        this.$store.commit("SET_LIST", response.data);
      });
  },
};
</script>

<style></style>
