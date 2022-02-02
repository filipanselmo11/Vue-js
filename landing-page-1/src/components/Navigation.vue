<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary dark>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">Calango</v-list-item-title>
            </v-list-item-content>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense> 

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark class="px-15">
        <v-toolbar-title>
            <v-spacer/>
        </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
