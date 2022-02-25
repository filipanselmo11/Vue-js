<template>
  <v-card class="mx-auto" max-width="600">
      <v-toolbar flat dense>
          <v-toolbar-title>
              <span class="subheading">Metronome</span>
          </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
          <v-row class="mb-4" justify="space-between">
              <v-col class="text-left">
                  <span class="text-h2 font-weight-light" v-text="bpm">BPM</span>
                  <v-fade-transition>
                      <v-avatar
                        v-if="playing"
                        :color="color"
                        :style="{animationDuration: animationDuration}"
                        class="mb-1 v-avatar--metronome"
                        size="12"></v-avatar>
                  </v-fade-transition>
              </v-col>
              <v-col class="text-right">
                  <v-btn :color="color" dark depressed fab @click="toggle">
                      <v-icon large>
                          {{ playing ? 'mdi-pause' : 'mdi-play' }}
                      </v-icon>
                  </v-btn>
              </v-col>
          </v-row>

          <v-slider
            v-model="bpm"
            :color="color"
            track-color="grey"
            always-dirt
            min="40"
            max="218">
                <template v-slot:prepend>
                    <v-icon :color="color" @click="decrement">
                        mdi-minus
                    </v-icon>
                </template>
                <template v-slot:append>
                    <v-icon :color="color" @click="increment">
                        mdi-plus
                    </v-icon>
                </template>
            </v-slider>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    bpm: 40,
    interval: null,
    playing: false,
  }),

  computed: {
    color() {
      if (this.bpm < 100) return "indigo";
      if (this.bpm < 125) return "teal";
      if (this.bpm < 140) return "green";
      if (this.bpm < 175) return "orange";
      return "red";
    },

    animationDuration() {
      return `${60 / this.bpm}s`;
    },
  },

  methods: {
    decrement() {
      this.bpm--;
    },

    increment() {
      this.bpm++;
    },

    toggle() {
      this.playing = !this.playing;
    },
  },
};
</script>

<style scoped>
@keyframes metronome-example {
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}

.v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
</style>
