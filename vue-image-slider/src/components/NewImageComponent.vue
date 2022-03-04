<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card-actions>
          <v-slide-group v-model="imageSelected">
            <v-slide-item
              v-for="(item, index) in imageList"
              :key="index"
              v-slot="{ active, toggle }"
            >
              <v-btn
                large
                rounded
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
            v-if="imageList[imageSelected].text === 'Akali'"
            max-height="600"
            max-width="890"
            :src="imageAkali[0]"
          />
          <v-img
            v-else-if="imageList[imageSelected].text === 'Jujutsu Kaisen'"
            max-height="600"
            max-width="890"
            :src="imageJujutsu[0]"
          />
          <v-img
            v-else-if="imageList[imageSelected].text === 'Pain'"
            max-height="600"
            max-width="890"
            :src="imagePain[0]"
          />

          <v-img
            v-else-if="imageList[imageSelected].text === 'Batman'"
            max-height="600"
            max-width="890"
            :src="imageBatman[0]"
          />

          <br />
          <new-image-slider-component :images="imageAkali">
          </new-image-slider-component>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewImageSliderComponent from "./NewImageSliderComponent.vue";
export default {
  components: { NewImageSliderComponent },

  data: () => ({
    imageSelected: 0,
    imageList: [
      { text: "Akali" },
      { text: "Jujutsu Kaisen" },
      { text: "Pain" },
      { text: "Batman" },
    ],
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
};
</script>

<style></style>
