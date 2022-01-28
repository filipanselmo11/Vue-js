import Vue from 'vue';
import App from './App.vue';
import {Plugin} from 'vue2-storage';

Vue.use(Plugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
