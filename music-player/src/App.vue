<template>
  <v-app dark>
    <v-content>
      <v-container>
        <player-title-bar></player-title-bar>
        <player-controls-bar
          @playtrack="play"
          @pausetrack="pause"
          @stoptrack="stop"
          @skiptrack="skip"
          @toggleloop="toggleloop"
          @toggleShuffle="toggleShuffle"
        ></player-controls-bar>
        <player-playlist-panel></player-playlist-panel>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PlayerControlsBar from "./components/PlayerControlsBar.vue";
import PlayerPlaylistPanel from "./components/PlayerPlaylistPanel.vue";
import PlayerTitleBar from "./components/PlayerTitleBar.vue";
export default {
  components: { PlayerTitleBar, PlayerPlaylistPanel, PlayerControlsBar },
};
</script>

<style></style>
