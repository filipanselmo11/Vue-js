<template>
  <v-app>
    <div>
      <v-toolbar dark prominent src="./assets/Batman-pantera-negra.png">
        <v-toolbar-title>DC Marvel APP</v-toolbar-title>
      </v-toolbar>
    </div>
    <br/>
    <br/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
