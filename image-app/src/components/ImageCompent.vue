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
              :src="buttonContent[buttonSelected].image1[buttonSelected].image"
            />
            <v-img
              v-else-if="buttonContent[buttonSelected].text === 'Botao-2'"
              max-height="600"
              max-width="890"
              :src="buttonContent[buttonSelected].image2[buttonSelected].image"
            />

            <v-img
              v-else-if="buttonContent[buttonSelected].text === 'Botao-3'"
              max-height="600"
              max-width="890"
              :src="buttonContent[buttonSelected].image3[buttonSelected].image"
            />
            <v-img
              v-else
              max-height="600"
              max-width="890"
              :src="buttonContent[buttonSelected].image1[buttonSelected].image"
            />
          </v-card-text>

          <br />
          <v-btn @click="changePlayer">
            <v-icon>
              {{
                playing
                  ? "mdi-pause-circle-outline"
                  : "mdi-play-circle-outline "
              }}
            </v-icon>
          </v-btn>
          <v-slider
            v-if="buttonContent[buttonSelected].text === 'Botao-1'"
            color="secondary lighten-1"
            v-model="currentTimeAtSlider"
            hide-details
            min="0"
            :max="endButtonContent"
            step="1"
            :thumb-label="playing ? 'always' : ''"
          >
            <template v-slot:prepend>
              <span class="ml-1 mt-1">
                {{ buttonContent[endButtonContent].image1 }}
              </span>
            </template>
            <!--<template v-slot:thumb-label="{ value }">
              <v-chip label color="secondary lighten-1">
                <strong>
                  {{
                    buttonContent[inverseButtonContentIndex(value)].image1[inverseButtonContentIndex(value)].text
                  }}
                </strong>
              </v-chip>
            </template>-->
            <!--<template v-slot:append>
              <span class="mt-1">
                {{
                  buttonContent[startButtonContent].image1[startButtonContent].text
                }}
              </span>
            </template>-->
          </v-slider>
          <v-slider
            v-else-if="buttonContent[buttonSelected].text === 'Botao-2'"
            color="secondary lighten-1"
            v-model="currentTimeAtSlider"
            hide-details
            min="0"
            :max="endButtonContent"
            step="1"
            :thumb-label="playing ? 'always' : ''"
          >
            <template v-slot:prepend>
              <span class="ml-1 mt-1">
                {{ buttonContent[endButtonContent].image2 }}
              </span>
            </template>
          </v-slider>
          <v-slider
            v-else-if="buttonContent[buttonSelected].text === 'Botao-3'"
            color="secondary lighten-1"
            v-model="currentTimeAtSlider"
            hide-details
            min="0"
            :max="endButtonContent"
            step="1"
            :thumb-label="playing ? 'always' : ''"
          >
            <template v-slot:prepend>
              <span class="ml-1 mt-1">
                {{ buttonContent[endButtonContent].image3[1] }}
              </span>
            </template>
          </v-slider>
          <v-slider
            v-else
            color="secondary lighten-1"
            v-model="currentTimeAtSlider"
            hide-details
            min="0"
            :max="endButtonContent"
            step="1"
            :thumb-label="playing ? 'always' : ''"
          >
            <template v-slot:prepend>
              <span class="ml-1 mt-1">
                {{ buttonContent[endButtonContent].image1 }}
              </span>
            </template>
          </v-slider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ImageCompent",
  data: () => ({
    currentTimeAtSlider: undefined,
    buttonContentSelect: undefined,
    interval: undefined,
    playing: false,
    buttonSelected: 0,
    buttonContent: [
      {
        text: "Botao-1",
        image1: [
          "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg",
        ],
      },
      {
        text: "Botao-2",
        image2: [
          "https://c4.wallpaperflare.com/wallpaper/133/969/139/artwork-nature-landscape-fantasy-art-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/214/442/543/digital-art-son-goku-dragon-ball-dragon-ball-z-island-hd-wallpaper-thumb.jpg",
        ],
      },
      {
        text: "Botao-3",
        image3: [
          "https://c4.wallpaperflare.com/wallpaper/914/746/419/abstract-digital-art-minimalism-simple-background-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/642/695/642/anime-demon-slayer-kimetsu-no-yaiba-giyuu-tomioka-hd-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/975/421/110/windows-10-black-4k-8k-wallpaper-thumb.jpg",
          "https://c4.wallpaperflare.com/wallpaper/116/412/889/naruto-anime-uchiha-itachi-hd-wallpaper-thumb.jpg",
        ],
      },
    ],
  }),

  watch: {
    currentTimeAtSlider(value) {
      this.changeButtonContent(value);
    },
  },

  buttonContent(value) {
    if (value) {
      this.init();
    }
  },

  mounted() {
    this.init();
  },

  computed: {
    startButtonContent() {
      return 0;
    },

    endButtonContent() {
      return this.buttonContent.length - 1;
    },
  },

  methods: {
    init() {
      this.currentTimeAtSlider =
        this.buttonContent && this.buttonContent.length
          ? this.buttonContent.length - 1
          : undefined;
      this.buttonContentSelect =
        this.buttonContent && this.buttonContent.length
          ? this.buttonContent[0]
          : undefined;
    },

    changePlayer() {
      this.playing = !this.playing;
      if (this.playing) {
        this.interval = setInterval(() => {
          if (this.currentTimeAtSlider == this.endButtonContent) {
            this.currentTimeAtSlider = this.startButtonContent;
          } else {
            this.clearAnimationInterval();
          }
        });
      }
    },

    changeButtonContent(value) {
      const buttonContet =
        this.buttonContent[this.inverseButtonContentIndex(value)];
      this.buttonContentSelect = buttonContet;
      this.$emit("changeButtonContent", buttonContet);
    },

    changeButtonContentSelect(value) {
      if (!this.playing) {
        this.currentTimeAtSlider = this.inverseButtonContentIndex(
          this.buttonContent.findIndex((item) => item.image == value.image)
        );
      }
    },

    inverseButtonContentIndex(index) {
      return this.buttonContent.length - 1 - index;
    },

    clearAnimationInterval() {
      clearInterval(this.interval);
      this.playing = false;
    },
  },
};
</script>

<style scoped></style>
