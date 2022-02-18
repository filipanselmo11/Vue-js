<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card-title> App </v-card-title>
        <v-card-subtitle> App </v-card-subtitle>
        <v-card-actions>
          <v-slide-group show-arrows="false" v-model="buttonSelected">
            <v-slide-item
              v-for="(item, index) in buttonList"
              :key="index"
              v-slot="{ active, toggle }"
            >
              <v-btn
                large
                rounded
                outlined
                class="mr-2"
                :input-value="active"
                active-class="secondary white--text"
                @click="toggle"
              >
                {{ item.text }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-card-actions>
        <v-card-text>
          <v-img
            max-height="600"
            max-width="890"
            :src="buttonList[buttonSelected].image"
          />
        </v-card-text>
      </v-col>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="600">
          <v-toolbar flat dense>
            <v-toolbar-title>
              <span class="subheading">Metronome</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text>
            <v-row class="mb-4" justify="space-between">
              <v-col class="text-left">
                <span class="text-h2 font-weight-light" v-text="bpm"></span>
              </v-col>
              <v-slider
                v-model="bpm"
                :color="color"
                track-color="grey"
                always-dirty
                min="40"
                max="218"
              >
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
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    bpm: 20,
    interval: null,
    buttonSelected: 0,
    buttonList: [
      {
        text: "Buttom-1",
        image:
          "https://c4.wallpaperflare.com/wallpaper/930/1009/127/the-flash-dc-comics-superhero-wallpaper-preview.jpg",
        red: 25,
      },

      {
        text: "Buttom-2",
        image:
          "https://c4.wallpaperflare.com/wallpaper/867/851/700/actor-the-series-superman-comics-wallpaper-preview.jpg",
        green: 15,
      },

      {
        text: "Buttom-3",
        image:
          "https://c4.wallpaperflare.com/wallpaper/802/324/887/batman-why-so-serious-8k-popular-quotes-wallpaper-preview.jpg",
        blue: 78,
      },

      {
        text: "Buttom-4",
        image:
          "https://c4.wallpaperflare.com/wallpaper/276/238/554/naruto-anime-naruto-akatsuki-naruto-hand-sign-naruto-shippuuden-naruto-the-last-hd-wallpaper-preview.jpg",
        yellow: 90,
      },
    ],
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
  },
};
</script>

<style>
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
