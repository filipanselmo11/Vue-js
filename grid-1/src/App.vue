<template>
  <v-app>
    <v-main>
      <flex-wrap></flex-wrap>
    </v-main>
  </v-app>
</template>

<script>
import FlexWrap from './components/FlexWrap.vue';

export default {
  name: "App",
  components: {FlexWrap},
  data: () => ({}),
};
</script>
