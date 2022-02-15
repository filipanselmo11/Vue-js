<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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

    <v-main>
      <!--<Component3/>-->
      <!--<Component5/>-->
      <!--<Component6/>-->
      <!--<Component7/>-->
      <!--<Component8 />-->
      <!--<Component9 />-->
      <!--<Component10 />-->
      <!--<Component11 />-->
      <!--<Component12 />-->
      <!--<Component13 />-->
      <!--<Component14 />-->
      <!--<Component15 />-->
      <!--<Component16 />-->
      <Component17 />
      <!--<Component4/>-->
      <!--<Component2/>-->
      <!---<Component1/>--->
      <!--<HelloWorld/>-->
    </v-main>
  </v-app>
</template>

<script>
//import Component1 from './components/Component1.vue';
//import Component2 from './components/Component2.vue';
//import Component3 from './components/Component3.vue';
//import Component4 from './components/Component4.vue';
//import Component5 from './components/Component5.vue';
//import Component6 from './components/Component6.vue';
//import Component7 from './components/Component7.vue';
//import Component8 from "./components/Component8.vue";
//import Component9 from "./components/Component9.vue";
//import Component10 from "./components/Component10.vue"
//import Component11 from "./components/Component11.vue"
//import Component12 from "./components/Component12.vue"
//import Component13 from "./components/Component13.vue"
//import Component14 from "./components/Component14.vue"
//import Component15 from "./components/Component15.vue"
//import Component16 from "./components/Component16.vue";
import Component17 from "./components/Component17.vue";
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    //HelloWorld,
    //Component1
    //Component2
    //Component3
    //Component4
    //Component5
    //Component6
    //Component7
    //Component8,
    //Component9,
    //Component10,
    //Component11,
    //Component12,
    //Component13,
    //Component14,
    //Component15,
    //Component16,
    Component17
    
  },

  data: () => ({
    //
  }),
};
</script>
