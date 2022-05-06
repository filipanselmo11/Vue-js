<template>
  <account-info :username='user.username' @changeUsername="changeUsername($event)"></account-info>
</template>

<script>
import AccountInfo from './AccountInfo.vue'
export default {
    name: "ProfilePage",
  components: { AccountInfo },
  data:() => ({
      user: 'matt',
  }),

  methods: {
      changeUsername(username){
          this.user.username = username;
      }
  },

}
</script>

<style>

</style>