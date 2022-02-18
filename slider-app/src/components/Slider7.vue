<template>
  <v-card>
      <v-card-text>
          <v-slider v-model="value" step="20" thumb-label ticks></v-slider>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
    data:() => ({
        value: 0,
    })
}
</script>

<style>

</style>