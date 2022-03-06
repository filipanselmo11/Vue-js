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
          <new-image-slider-component :item="imageList[imageSelected]"></new-image-slider-component>
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
  }),
};
</script>

<style></style>
