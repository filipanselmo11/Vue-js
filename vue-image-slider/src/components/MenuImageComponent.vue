<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-slide-group v-model="imageSelected">
          <v-slide-item
            v-for="(item, index) in imageList"
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
            <v-img max-height="600" max-width="890" :src="images[imageSelected]"/>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MenuImageComponent",
  props: {
    imageList: {
      type: Array,
    },
    images: {
      type: Array,
    },
  },

  data: () => ({
    imageSelected: undefined,
  }),
};
</script>

<style></style>
