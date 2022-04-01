<template>
  <v-row justify="center">
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" v-bind="attrs" v-on="on" text>
            Adding more Adressess
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="orange" dark> Add More Adressess </v-toolbar>
            <v-card-text>
              <!--<div class="text-h2 pa-12">Add More Address</div>-->
              <v-form @submit.prevent="onSubmit" ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="address" label="New Address" required></v-text-field>
                  <v-btn type="submit" color="orange" class="mr-4" text>Add</v-btn>
              </v-form>
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
import { mapGetters } from "vuex";
export default {
    name: "Modal",
    data:() => ({
        valid: true,
        address: '',
    }),

    computed: {
        ...mapGetters("drizzle", ["drizzleInstance"]),
    },

    methods: {
        async onSubmit() {
            try {
                await this.drizzleInstance.contracts.Whitelist.methods.addUser.cacheSend(
                    this.address
                );
            } catch(error){
                console.log(error);
            }
        }
    },
};
</script>

<style>
</style>