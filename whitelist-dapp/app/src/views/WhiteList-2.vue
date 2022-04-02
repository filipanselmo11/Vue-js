<template>
  <div>
    <h1 class="text-center">White List 2</h1>
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="address"
        label="Address"
        required
      ></v-text-field>
      <v-btn @click="verifyUserAddress" color="orange" class="mr-4" text>Verify Address</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data:() => ({
    address: undefined,
  }),
  computed: {
    ...mapGetters("drizzle", ["drizzleInstance"]),
  },

  methods: {
    async verifyUserAddress() {
      try {
        let x = await this.drizzleInstance.contracts.Whitelist.methods.verifyUser(this.address).call({
          from: '0x1fadFDa74b739228f4c09b87A1d120d1E61932f0'
        });
        console.log("X ", x);
      } catch(error){
        console.log(error);
      }
    },
    /*async getUserAddress() {
      try{
        let res = await this.drizzleInstance.contracts.Whitelist.methods.getUser.cacheSend(this.address);
        console.log("RES ",res);
      } catch(error){
        console.log(error);
      }
    }*/
  }
};
</script>

<style>
</style>