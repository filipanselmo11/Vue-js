<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!--<v-slider v-model="sound" prepend-icon="mdi-plus"></v-slider>-->
        <v-slider
          v-model="zoom"
          prepend-icon="mdi-minus"
          append-icon="mdi-plus"
          @click:append="zoomIn"
          @click:prepend="zoomOut"
        ></v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Slider2",
  data: () => ({
    sound: 0,
    zoom: 100,
  }),

  methods: {
    zoomOut() {
      this.zoom = this.zoom - 10 || 0;
      console.log(this.zoom);
    },

    zoomIn() {
      this.zoom = this.zoom + 10 || 100;
      console.log(this.zoom);
    },
  },
};
</script>

<style></style>
