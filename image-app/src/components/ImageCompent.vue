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
              :src="buttonContent[buttonSelected].image1[0].image"
            />
            <v-img
              v-else-if="buttonContent[buttonSelected].text === 'Botao-2'"
              max-height="600"
              max-width="890"
              :src="buttonContent[buttonSelected].image2[0].image"
            />

            <v-img
              v-else-if="buttonContent[buttonSelected].text === 'Botao-3'"
              max-height="600"
              max-width="890"
              :src="buttonContent[buttonSelected].image3[0].image"
            />
            <v-img
              v-else
              max-height="600"
              max-width="890"
              :src="buttonContent[buttonSelected].image1[0].image"
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
          <!--<v-slider
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
            <template v-slot:thumb-label="{ value }">
              <v-chip label color="secondary lighten-1">
                <strong>
                  {{
                    buttonContent[inverseButtonContentIndex(value)].image1[inverseButtonContentIndex(value)].text
                  }}
                </strong>
              </v-chip>
            </template>
            <template v-slot:append>
              <span class="mt-1">
                {{
                  buttonContent[startButtonContent].image1[startButtonContent].text
                }}
              </span>
            </template>
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
          </v-slider>-->
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
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
          "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
        ],
      },
      {
        text: "Botao-2",
        image2: [
          "https://c4.wallpaperflare.com/wallpaper/163/392/912/map-wold-map-technology-world-wallpaper-preview.jpg",
          "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
          "https://images.unsplash.com/photo-1638291792853-5ab967de3611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        ],
      },
      {
        text: "Botao-3",
        image3: [
          "https://c4.wallpaperflare.com/wallpaper/551/801/266/map-world-map-wallpaper-preview.jpg",
          "https://images.unsplash.com/photo-1594492691731-3d7974140624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
          "https://images.unsplash.com/photo-1584974292709-5c2f0619971b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
