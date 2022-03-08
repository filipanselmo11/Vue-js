<template>
  <div>
    <v-slider
      class="meu-slider"
      @change="setPosition()"
      :value="trackProgress"
      v-model="percetange"
      thumb-label
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    progress: undefined,
    percetange: undefined,
  }),

  computed: {
    trackProgress() {
      return this.progress * 100;
    },
  },

  methods: {
    setPosition() {
      console.log("SET POSITION", this.percetange);
    },
  },
};
</script>

<style scoped>

.meu-slider {
    position: center;
}

</style>
