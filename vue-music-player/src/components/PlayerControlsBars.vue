<template>
  <div>
    <v-toolbar height="90">
      <v-spacer></v-spacer>
      <v-btn outlined fab small color="light-blue" @click="stopTrack">
        <v-icon>mdi-stop</v-icon>
      </v-btn>
      <v-btn outlined fab small color="light-blue" @click="playTrack">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn outlined fab small color="light-blue" @click="pauseTrack">
        <v-icon>mdi-pause</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-toolbar height="40">
      <v-progress-linear
        height="40"
        v-model="trackProgress"
        @click="updateSeek($event)"
      ></v-progress-linear>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "PlayerControlsBars",
  data: () => ({
    progress: undefined,
  }),
  computed: {
    trackProgress() {
      const res = this.progress * 100;
      console.log(res);
      return res;
    },
  },
  methods: {
    playTrack(index) {
      this.$emit("playtrack", index);
    },

    pauseTrack() {
      this.$emit("pausetrack");
    },

    stopTrack() {
      this.$emit("stoptrack");
    },

    updateSeek(event) {
      let el = document.querySelector(".v-progress-linear__buffer");
      let mousePos = event.offsetX;
      let elWidth = el.clientWidth;
      let percents = (mousePos / elWidth) * 100;

      this.$emit("updateseek", percents);
    },
  },
};
</script>

<style></style>
