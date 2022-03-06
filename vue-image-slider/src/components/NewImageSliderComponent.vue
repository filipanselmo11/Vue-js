<template>
  <v-row align="center" justify="center">
    <v-col cols="=12" align="center" align-self="center" min-height="600">
    <div v-for="index in [currentIndex]" :key="index">
      <v-img max-height="600" max-width="1200" :src="currentImg">
      </v-img>
    </div>
    </v-col>
    <v-col cols="12">
    <v-slider
      :prepend-icon="play ? 'mdi-pause-circle-outline' : 'mdi-play-circle-outline'"
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
    images:[],
     imageAkali: [
      require("@/assets/Akali-Ronin-Yoshimitsu.png"),
      require("@/assets/akali-1.jpg"),
      require("@/assets/akali-2.jpg"),
      require("@/assets/akali-3.jpg"),
    ],
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
  watch:{
   item(value){
     if(value){
       this.play = false
       this.clearAnimationInterval();
       this.currentIndex = 0
       this.verifyItem()
       } 
  }
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

    endImg() {
      return this.images.length - 1;
    },
  },

  methods: {
    verifyItem(){
    if(this.item.text === 'Akali'){
      this.images = [...this.imageAkali]
    } else if(this.item.text === 'Jujutsu Kaisen'){
      this.images = [...this.imageJujutsu]
    } else if(this.item.text === 'Pain'){
      this.images = [...this.imagePain]
    } else if(this.item.text === 'Batman'){
      this.images = [...this.imageBatman]
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
</style>
