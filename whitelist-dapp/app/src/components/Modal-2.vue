<template>
  <v-row justify="center">
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" v-bind="attrs" v-on="on" text>
            View Adressess
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="orange" dark> New Adressess </v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Addressesses</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text color="orange" @click="dialog.value = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>