<template>
  <v-card>
      <v-card-text>
          <v-slider v-model="value" step="10"></v-slider>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
    data:() => ({
        value: 10,
    })
}
</script>

<style>

</style>