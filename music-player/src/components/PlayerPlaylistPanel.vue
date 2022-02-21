<template>
  <v-card height="330">
    <v-list>
      <v-list-tile
        v-for="(track, index) in playList"
        :key="track.title"
        v-show="track.display"
      >
        <v-list-tile-content @click="selectTrack(track)">
          {{ index }} {{ track.artist }} - {{ track.title }}
          <br/>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    playList: [
      { title: "Vermilion pt 2", artist: "Slipknot", display: true },
      { title: "Dona Mariana", artist: "Pinduca", display: true },
      { title: "Sessions", artist: "Chris Cornell", display: true },
    ],
    track: null,
  }),

  methods: {
    selectTrack(track) {
      this.$emit("selecttrack", track);
    },
  },
};
</script>

<style></style>
