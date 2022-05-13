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
var mixin = {
  methods: {
    getUsers() {
      var url = "http://jsonplaceholder.typicode.com/users";
      this.$http
        .get(url)
        .then(
          function (response) {
            this.users = response.body;
          },
          function (e) {
            this.response.status = "error";
            console.log(e);
          }
        )
        .finally(function () {
          this.loader.users = false;
        });
    },
  },
};
export default {
  name: "AjaxComponent",
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
