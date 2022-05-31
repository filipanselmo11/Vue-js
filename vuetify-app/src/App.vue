<template>
  <v-app class="grey lighten-1">
    <navbar-component></navbar-component>
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  name: "App",
  components: { NavbarComponent },
  data: () => ({
    //
  }),
};
</script>
