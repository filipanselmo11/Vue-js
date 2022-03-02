<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Image App</v-card-title>
          <v-card-actions>
            <v-slide-group v-model="buttonSelected">
              <v-slide-item
                v-for="(item, index) in buttonContent"
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
              v-if="buttonContent[buttonSelected].text === 'Botao-1'"
              max-height="600"
              max-width="890"
              :src="buttonFeature[0]"
            />
            <v-img
              v-else-if="buttonContent[buttonSelected].text === 'Botao-2'"
              max-height="600"
              max-width="890"
              :src="buttonFeature[3]"
            />

            <v-img
              v-else-if="buttonContent[buttonSelected].text === 'Botao-3'"
              max-height="600"
              max-width="890"
              :src="buttonFeature[7]"
            />
          </v-card-text>

          <br />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ImageCompent",
  data: () => ({
    buttonContentSelect: undefined,
    buttonSelected: 0,
    buttonContent: ["Botao-1", "Botao-2", "Botao-3"],
    buttonFeature: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
      "https://c4.wallpaperflare.com/wallpaper/163/392/912/map-wold-map-technology-world-wallpaper-preview.jpg",
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1638291792853-5ab967de3611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://c4.wallpaperflare.com/wallpaper/551/801/266/map-world-map-wallpaper-preview.jpg",
      "https://images.unsplash.com/photo-1594492691731-3d7974140624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1584974292709-5c2f0619971b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
  }),
};
</script>

<style scoped></style>
