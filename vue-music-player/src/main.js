import Vue from 'vue'
import Player from './Player.vue'
import vuetify from './plugins/vuetify'




Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(Player)
}).$mount('#app')
