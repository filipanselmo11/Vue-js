<template>
  <v-row align="center" justify="center">
    <v-col cols="12" align="center" align-self="center">
      <v-card-title class="center">I am the Vengeance</v-card-title>
      <v-card-subtitle>The Batman</v-card-subtitle>
      <v-card-actions>
        <v-slide-group v-model="buttonSelect">
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
      <v-img
        max-height="980"
        max-width="632"
        :src="require('../assets/the batman- i am the revenge.jpeg')"
      />
    </v-col>
  </v-row>
  <!---
    
  -->
</template>

<script>
export default {
  data: () => ({
    buttonSelect: 0,
    buttonList: [
      {
        text: "I",
      },
      {
        text: "The",
      },
      {
        text: "Vengeance",
      },
    ],
  }),
};
</script>

<style>
.center {
  align-content: center;
  text-align: center !important;
  color: red;
  font-family: "Times New Roman", Times, serif;
}
</style>
