<template>
  <v-snackbar :value="value" light>
    <span>
      <slot></slot>
    </span>

    <v-progress-linear
      absolute
      bottom
      :value="Math.floor(100 * (currentTime / timeout))"></v-progress-linear>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    timeout: {
      default: 5 * 1000,
    },

    value: {
      default: false,
    },
  },
  data: () => ({
    currentTime: 0,
  }),

  methods: {
    syncPbar() {
      setTimeout(() => {
        this.currentTime += 100;
        if (this.timeout <= this.currentTime) {
          setTimeout(() => {
            this.$emit("input", false);
            this.currentTime = 0;
          }, 500);
        } else {
          this.syncPbar();
        }
      }, 100);
    },
  },
  watch: {
    value(v) {
      if (v) this.syncPbar();
    },
  },
};
</script>

<style></style>
