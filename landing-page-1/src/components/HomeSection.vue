<template>
  <section id="hero">
    <v-parallax
      dark
      src="https://as1.ftcdn.net/v2/jpg/01/14/47/12/1000_F_114471291_nbYCT471AB0Ck6Wingz7YVCRFlUhdUvG.jpg"
      height="750"
    >
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">Vuetify.JS</h1>
              <h1 class="font-weight-light">Lorem ipsum dolor sit amet</h1>
              <v-btn roundend outlined large dark class="mt-5">
                Saiba mais
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
                <v-hover v-slot:default="{ hover }">
                    <v-card class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover}">
                        <v-img></v-img>
                        <h1>Alguma coisa</h1>
                    </v-card>
                </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
