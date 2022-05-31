<template>
  <div>
    <v-toolbar text>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text--uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="grey lighten-4">
    <v-list-item v-for="(item, index) in items" :key="index" router :to="item.route">
        <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { text: "Dashboard", icon: "mdi-view-dashboard", route: '/'},
      { text: "My Projects", icon: "mdi-folder", route: '/projects' },
      { text: "Team", icon: "mdi-account", route: '/team' },
    ],
  }),
};
</script>

<style></style>
