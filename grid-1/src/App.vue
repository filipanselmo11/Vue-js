<template>
  <v-app>
    <v-main>
      <justify-component></justify-component>
      <br/>
      <align-component></align-component>
    </v-main>
  </v-app>
</template>

<script>
import AlignComponent from './components/AlignComponent.vue';
import JustifyComponent from './components/JustifyComponent.vue';

export default {
  name: 'App',
  components: {JustifyComponent, AlignComponent},
  data: () => ({
    //
  }),
};
</script>
