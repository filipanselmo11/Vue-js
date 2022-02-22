<template>
  <v-system-bar window>
      <v-menu>
          <v-btn small right>
              <span>headset</span>
          </v-btn>
          <v-list>
              <v-list-tile @click="dialog = true">
                  <v-list-tile-title>About</v-list-tile-title>
              </v-list-tile>
              <v-dialog v-model="dialog" max-width="300">
                  <v-card>
                      <v-card-title>
                          <h2>Vue Music Player</h2>
                      </v-card-title>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn flat @click="dialog = false">Ok</v-btn>
                      </v-card-actions>
                  </v-card>
              </v-dialog>
          </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      VUE MUSIC PLAYER
      <v-spacer></v-spacer>
      <!--<v-icon>remove</v-icon>
      <v-icon>remove</v-icon>
      <v-icon>remove</v-icon>-->
  </v-system-bar>
</template>

<script>
export default {
    name: "PlayerTitleBar",
    data:() => ({
        dialog: false,
    })
}
</script>

<style>

</style>