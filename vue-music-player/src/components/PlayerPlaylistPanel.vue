<template>
  <v-card height="300">
    <v-list>
      <v-list-item
        v-for="(track, index) in playList"
        :key="track.title"
        v-show="track.display"
      >
        <v-list-item-content
          @click="selectTrack(track)"
          @dblclick="playTrack()"
        >
          <v-list-item-title
            >{{ index }} {{ track.artist }} -
            {{ track.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-spacer></v-spacer>
        {{ track.howl.duration() }}
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    playList: Array,
    selectedTrack: Object,
  },

  methods: {
    selectTrack(track) {
      this.$emit("selecttrack", track);
    },

    playTrack(index) {
      this.$emit("playtrack", index);
    },
  },
};
</script>

<style></style>
