<template>
  <div>
    <div>
      <v-container fluid>
        <v-row justify="space-around">
          <v-col cols="5">
            <div class="text-h6 mb-1">Default (cover)</div>
            <div class="subheading">Matching</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.7"
            ></v-img>
            <div class="subheading pt-4">Too High</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="2"
            ></v-img>
            <div class="subheading pt-4">Too low</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.4"
            ></v-img>
          </v-col>

          <v-col cols="5">
            <div class="text-h6 mb-1">Contain</div>
            <div class="subheading">Matching</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.7"
              contain
            ></v-img>
            <div class="subheading pt-4">Too high</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="2"
              contain
            ></v-img>
            <div class="subheading pt-4">Too low</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.4"
              contain
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <br />
    <div>
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>