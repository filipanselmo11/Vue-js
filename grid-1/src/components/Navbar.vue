<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer != drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="grey">
        <span>Sign Out</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer absolute temporary v-model="drawer" class="indigo">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="white--text">dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-tile class="white--text">Dashboard</v-list-tile-tile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    links: [
       {icon: 'dashboard', text: 'Dashboard', route: '/'},
       {icon: 'folder', text: 'Projects', route: '/projects'},
       {icon: 'person', text: 'Team', route: '/team'}, 
    ]
  }),
};
</script>

<style></style>
