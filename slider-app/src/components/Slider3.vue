<template>
  <v-container>
    <v-col cols="12">
      <v-slider v-model="value" vertical label="Regular" />
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Slider3",
  data: () => ({
    value: 100,
  }),
};
</script>

<style></style>
