<template>
  <v-app dark>
    <v-main>
      <v-container>
        <v-card height="300" :class="{ playList }">
          <player-title-bar></player-title-bar>
          <player-controls-bars
            @playtrack="play"
            @pausetrack="pause"
            @stoptrack="stop"
            @updateseek="setSeek"
          ></player-controls-bars>
          <player-playlist-panel
            :playList="playList"
            :selectedTrack="selectedTrack"
            @selecttrack="selectTrack"
            :class="[
              { selected: track === selectedTrack },
              { even: index % 2 == 0 },
            ]"
          ></player-playlist-panel>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PlayerTitleBar from "./components/PlayerTitleBar.vue";

import { Howl } from "howler";
import PlayerPlaylistPanel from "./components/PlayerPlaylistPanel.vue";
import PlayerControlsBars from "./components/PlayerControlsBars.vue";

export default {
  components: { PlayerTitleBar, PlayerPlaylistPanel, PlayerControlsBars },
  name: "App",

  data: () => ({
    playing: false,
    index: 0,
    selectedTrack: null,
    playList: [
      {
        title: "in my bag",
        artist: "Billy Marchiafava",
        howl: null,
        display: true,
      },
      {
        title: "Leveledup",
        artist: "Billy Marchiafava",
        howl: null,
        display: true,
      },
      {
        title: "Gold Digger",
        artist: "Kanye West - Jamie Foxx",
        howl: null,
        display: true,
      },
      { title: "(sic)", artist: "Slipknot", howl: null, display: true },
      { title: "Stoopid", artist: "Snot", howl: null, display: true },
      { title: "Fly", artist: "Sugar Ray", howl: null, display: true },
    ],
  }),

  created() {
    this.playList.forEach((track) => {
      let file = track.title.replace(/\s/g, "_");
      track.howl = new Howl({
        src: [`./playlist/${file}.mp3`],
      });
    });
  },

  computed: {
    currentTrack() {
      return this.playList[this.index];
    },
  },

  methods: {
    selectTrack(track) {
      this.selectedTrack = track;
    },

    play(index) {
      let selectedTrackIndex = this.playList.findIndex(
        (track) => track === this.selectedTrack
      );

      if (typeof index === "number") {
        //index = index;
      } else if (this.selectedTrack) {
        if (this.selectedTrack != this.currentTrack) {
          this.stop();
        }
        index = selectedTrackIndex;
      } else {
        index = this.index;
      }

      let track = this.playList[index].howl;

      if (track.playing()) {
        return;
      } else {
        track.play();
      }

      this.selectedTrack = this.playList[index];
      this.playing = true;
      this.index = index;
    },

    pause() {
      this.currentTrack.howl.pause();
      this.playing = false;
    },

    stop() {
      this.currentTrack.howl.stop();
      this.playing = false;
    },

    setSeek(percents) {
      let track = this.currentTrack.howl;

      if(track.playing()) {
        track.seek((track.duration() / 100) * percents)
      }
    }
  },
};
</script>

<style scoped>
.selected {
  background-color: orange !important;
}
.even {
  background-color: #505050;
}
.playlist {
  overflow: auto;
}
</style>
