<template>
  <v-card>
    <div v-for="(index) in imageCustom1" :key="index">
      {{ index.text }}
    </div>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-slider
              v-model="customImage1"
              label="Custom Image 1"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="customImage1"
                  class="mt-0 pt-0"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    customImage1: undefined,
    imageCustom1: [
      {
        text: "Image 0",
        image:
          "https://www.wallpaperflare.com/digital-digital-art-artwork-illustration-abstract-neon-wallpaper-gjjgo",
      },
      {
        text: "Image 1",
        image:
          "https://www.wallpaperflare.com/windows-11-windows-10-minimalism-wallpaper-ybzns",
      },
      {
        text: "Image 2",
        image:
          "https://www.wallpaperflare.com/man-near-torii-gate-wallpaper-gray-temple-wallpaper-landscape-wallpaper-cqg",
      },
      {
        text: "Image 3",
        image:
          "https://www.wallpaperflare.com/cherry-blossom-tree-on-cliff-digital-wallpaper-cherry-blossom-on-cliff-mountain-wallpaper-gn",
      },
    ],
  }),
};
</script>

<style></style>
