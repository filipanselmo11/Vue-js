<template>
  <v-container>
    <v-col cols="12">
      <!--<v-slider v-model="value" thumb-label="always" />-->
      <v-slider v-model="value" thumb-label="always">
          <template v-slot:thumb-label="{value}">
              {{ value }}
          </template>
      </v-slider>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Slider4",
  data: () => ({
    value: 100,
  }),
};
</script>

<style></style>
