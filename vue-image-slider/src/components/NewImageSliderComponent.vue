<template>
  <v-row align="center" justify="center">
    <v-col cols="=12" align="center" align-self="center" min-height="600">
      <transition name="fade-slide">
        <div v-for="index in [currentIndex]" :key="index">
          <v-img
            max-height="600"
            max-width="1200"
            :lazy-src="imageAkaliBorrada[0]"
            :src="currentImg"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="blue lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
      </transition>
    </v-col>
    <v-col cols="12">
      <v-slider
        :prepend-icon="
          play ? 'mdi-pause-circle-outline' : 'mdi-play-circle-outline'
        "
        @click:prepend="startSlide"
        v-model="currentIndex"
        hide-details
        min="0"
        :max="endImg"
        step="1"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NewImageSliderComponent",
  props: {
    item: {
      type: Object,
    },
  },
  data: () => ({
    play: false,
    timer: undefined,
    currentIndex: undefined,
    images: [],
    imagesBorrado: [],
    imageAkali: [
      require("@/assets/Akali-Ronin-Yoshimitsu.png"),
      require("@/assets/akali-1.jpg"),
      require("@/assets/akali-2.jpg"),
      require("@/assets/akali-3.jpg"),
    ],
    imageAkaliBorrada: [require("../assets/Akali-Ronin-Borrada.png")],
    imageJujutsu: [
      require("@/assets/jujutsu_kaisen.jpeg"),
      require("@/assets/jujutsu-kaisen-1.jpg"),
      require("@/assets/jujutsu-kaisen-2.jpg"),
      require("@/assets/jujutsu-kaisen-3.jpg"),
    ],
    imagePain: [
      require("@/assets/pain-1.jpg"),
      require("@/assets/pain-2.jpg"),
      require("@/assets/pain-3.jpg"),
      require("@/assets/pain-4.jpg"),
    ],
    imageBatman: [
      require("@/assets/the-batman.jpg"),
      require("@/assets/batman-1.jpg"),
      require("@/assets/batman-2.jpg"),
      require("@/assets/batman-3.jpg"),
    ],
  }),
  watch: {
    item(value) {
      if (value) {
        this.play = false;
        this.clearAnimationInterval();
        this.currentIndex = 0;
        this.verifyItem();
      }
    },
  },
  mounted() {
    this.verifyItem();
  },

  computed: {
    startImg() {
      return 0;
    },
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },

    currentImgBorrado() {
      return this.imagesBorrado[
        Math.abs(this.currentIndex) % this.imagesBorrado.length
      ];
    },

    endImg() {
      return this.images.length - 1;
    },
  },

  methods: {
    verifyItem() {
      if (this.item.text === "Akali") {
        this.images = [...this.imageAkali];
      } else if (this.item.text === "Jujutsu Kaisen") {
        this.images = [...this.imageJujutsu];
      } else if (this.item.text === "Pain") {
        this.images = [...this.imagePain];
      } else if (this.item.text === "Batman") {
        this.images = [...this.imageBatman];
      }
    },
    startSlide() {
      this.play = !this.play;
      if (this.play) {
        this.timer = setInterval(() => {
          if (this.currentIndex == this.endImg) {
            this.currentIndex = this.startImg;
          } else {
            this.currentIndex += 1;
          }
        }, 2000);
      } else {
        this.clearAnimationInterval();
      }
    },

    next() {
      this.currentIndex += 1;
    },

    clearAnimationInterval() {
      clearInterval(this.timer);
      this.play = false;
    },

    /*changePlayer() {
        this.play = !this.play;
        if(this.play) {
            this.timer = 
        }
    }*/
  },
};
</script>

<style>
img {
  height: 600px;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
