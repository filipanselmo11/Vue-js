import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            primary: '#9652ff',
            success: '3cd1c2',
            info: 'ffaac2',
            error: 'f83e70'
        },
    },
});
