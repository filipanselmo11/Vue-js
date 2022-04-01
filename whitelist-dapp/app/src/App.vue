<template>
  <v-app>
    <v-main>
      <div v-if="isDrizzleInitialized">
        <router-view></router-view>
      </div>
      <div v-else>
        <loading-animation></loading-animation>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingAnimation from "./components/LoadingAnimation.vue";


export default {
  components: { LoadingAnimation},
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("drizzle", ["isDrizzleInitialized"]),
  },
};
</script>
