<template>
  <v-row>
    <v-col cols="12">
      <v-sheet class="mx-auto" max-width="700">
        <v-slide-group multiple show-arrows>
          <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
            <v-btn
              class="mx-2"
              :input-value="active"
              active-class="purple white--text"
              depressed
              rounded
              @click="toggle"
              >Options {{ n }}</v-btn
            >
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
    <!--Active Class-->
    <v-col cols="12">
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
    <!--Center Active Custom Icons-->
    <v-col cols="12">
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group
          v-model="model"
          class="pa-4"
          prev-icon="mdi-minus"
          next-icon="mdi-plus"
          show-arrows
        >
          <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
    <!---Mandatory--->
    <v-col cols="12">
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group v-model="model" class="pa-4" mandatory show-arrows>
          <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
    <!----Multiple---->
    <v-col cols="12">
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group v-model="model1" class="pa-4" multiple show-arrows>
          <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  />
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
    <!----Pseudo Carousel---->
    <v-col cols="12">
      <v-sheet class="mx auto" elevation="8" max-width="800">
        <v-slide-group v-model="model2" class="pa-4" show-arrows>
          <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>

        <v-expand-transition>
            <v-sheet v-if="model2 != null" height="200" tile>
                <v-row class="fill-height" align="center" justify="center">
                    <h3 class="text-h6">
                        Selected {{ model }}
                    </h3>
                </v-row>
            </v-sheet>
        </v-expand-transition>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    model: null,
    model1: [],
    model2: null,
  }),
};
</script>

<style></style>
