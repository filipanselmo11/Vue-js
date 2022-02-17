<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card-title>Imagens</v-card-title>
        <v-card-subtitle>Conheças as imagens</v-card-subtitle>
        <v-card-actions>
          <v-slide-group show arrows>
            <v-slide-item
              v-for="index in imageItems"
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
                {{ index.name }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-card-actions>
        <v-slide-item v-for="(image, i) in images" :key="i">
            <v-card-text>
                <v-img :src="image.image"/>
            </v-card-text>
        </v-slide-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    imageItems: [
      { name: "Imagem1" },
      { name: "Imagem2" },
      { name: "Imagem3" },
      { name: "Imagem4" },
    ],

    images: [
      {
        image:
          "https://picsum.photos/id/1/200/300",
      },
      {
        image:
          "https://picsum.photos/id/100/200/300",
      },
      {
        image:
          "https://picsum.photos/id/1002/200/300",
      },
      {
        image:
          "https://picsum.photos/id/1019/200/300",
      },
    ],
  }),
};
</script>

<style></style>
