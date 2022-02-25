<template>
  <v-container>
    <v-card>
        <v-btn dark depressed fab @click="toggle">
            <v-icon>
                {{ playing ? 'mdi-pause': 'mdi-play' }}
            </v-icon>
        </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    progress: 0,
    interval: null,
    playing: false,
    ArrayData: [
        {n: 10, text: "Imagem 1"},
        {n: 20, text: "Imagem 2"},
        {n: 30, text: "Imagem 3"},
        {n: 40, text: "Imagem 4"},
        
    ]
  }),

  methods: {
      dec() {
          this.progress--;
      },

      inc(){
          this.progress++;
      },

      toggle() {
          this.playing = !this.playing;
      }
  }
};
</script>

<style></style>
