<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <br/>

    <v-main>
      <slot-component/>
    </v-main>
  </v-app>
</template>

<script>
import SlotComponent from './components/SlotComponent.vue';

//import Progress6 from './components/ReversedBar.vue';
//import ToolbarLoader from './components/ToolbarLoader.vue';
//import Progress5 from './components/Progress5.vue';
//import Progress4 from './components/Progress4.vue';
//import Progress3 from './components/Progress3.vue';
//import Progress2 from './components/Progress2.vue';

//import Progress1 from './components/Progress1.vue';
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    SlotComponent
    //Progress6,
    //ToolbarLoader,
    //Progress5
    //Progress4
    //Progress3
    //Progress2
    //Progress1
    //HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
