<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <button @click.stop.prevent="getUsers" class="btn btn-success">GET USERS</button>

    <div v-if="response.status == 'error'" class="alert alert-danger">
      {{ response.msg }}
    </div>

    <div v-if="loader.users" class="">Carregando Users</div>

    <ul>
      <li v-for="(index, user) in users" :key="index">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
var mixin = {
  methods: {
    getUsers() {
      this.loader.users = true;
      var url = "http://jsonplaceholder.typicode.com/users";
      var vm = this;
      axios.get(url).then(function (r) {
        vm.users = r.data;
        vm.loader.users = false;
      });
    },
  },
};
export default {
  name: "AxiosComponent",
  mixins: [mixin],
  data: () => ({
    titulo: "VUE JS ZAO",
    users: [],
    loader: {
      users: false,
    },
    response: {
      msg: "Erro ao conectar",
      status: "",
    },
  }),
};
</script>

<style></style>
