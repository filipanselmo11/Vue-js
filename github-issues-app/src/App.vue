<template>
  <v-app>
    <v-card class="overlflow-hidden">
      <v-app-bar absolute color="black">
        <v-toolbar-title>Vue Js</v-toolbar-title>
      </v-app-bar>
    </v-card>
    <br />
    <hr />
    <br />
    <hr>
    <br>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
