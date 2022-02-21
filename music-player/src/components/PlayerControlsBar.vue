<template>
  <div>
    <v-toolbar flat height="90">
      <v-spacer></v-spacer>
      <v-btn outlined fab small color="light-blue" @click="skipTrack('prev')">
        <v-icon>mdi-previous</v-icon>
      </v-btn>
      <v-btn outlined fab small color="light-blue" @click="stopTrack">
        <v-icon>mdi-stop</v-icon>
      </v-btn>
      <v-btn outlined fab small color="light-blue" @click="playTrack">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn outlined fab small color="light-blue" @click="skipTrack('next')">
        <v-icon>mdi-next</v-icon>
      </v-btn>
      <v-btn flat icon @click="toggleLoop">
        <v-icon color="light-blue" v-if="this.loop">mdi-repeat-one</v-icon>
        <v-icon color="blue-grey" v-eslse>mdi-repeat-one</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat icon @click="toggleMute">
        <template v-if="!this.muted">
          <v-icon v-if="this.volume >= 0.5">mdi-volume-up</v-icon>
          <v-icon v-else-if="this.volume > 0">mdi-volume-down</v-icon>
          <v-icon v-else>mdi-volume-mute</v-icon>
        </template>
        <v-icon v-show="this.muted">mdi-volume-off</v-icon>
      </v-btn>
      <v-btn flat icon @click="toggleShuffle">
        <v-icon color="light-blue" v-if="this.shuffle">mdi-shuffle</v-icon>
        <v-icon color="blue-grey" v-else>mdi-shuffle</v-icon>
      </v-btn>
      <v-slider
        v-model="volume"
        @input="updateVolume(volume)"
        max="1"
        step="0.1"
      ></v-slider>
    </v-toolbar>
    <v-toolbar flat height="40">
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
  name: "PlayerControlsBar",
  data: () => ({
    volume: 0,
    muted: false,
    loop: false,
    shuffle: false,
    progress: 0,
  }),
  computed: {
    trackProgress() {
      return this.progress * 100;
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

    skipTrack(direction) {
      this.$emit("skiptrack", direction);
    },

    updateVolume(volume) {
      console.log(volume);
    },

    toggleMute() {
      this.muted = !this.muted;
      console.log(this.muted);
    },

    toggleLoop() {
      this.$emit("toggleloop", !this.loop);
    },
    toggleShuffle() {
      this.$emit("toggleShuffle", !this.shuffle);
    },
    updateSeek(event) {
      let el = document.querySelector(".v-progress-linear"),
        mousePos = event.offsetX,
        elWidth = el.clientWidth,
        percents = (mousePos / elWidth) * 100;
      this.$emit("updateSeek", percents);
    },
  },
};
</script>

<style></style>
