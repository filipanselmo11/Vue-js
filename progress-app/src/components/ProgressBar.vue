<template>
  <div>
    <v-progress-linear height="20" v-model="progress"></v-progress-linear>
    <br />
    <v-btn @click="updateValue">
      <v-icon>mdi-play</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    progress: 0,
    value: '',
  }),

  methods: {
    updateValue() {
      this.value = this.progress++;
    },
  },
};
</script>
<style></style>
