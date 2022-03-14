import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lista: [],
    },

    mutations: {
        SET_LISTA(state, obj) {
            state.lista = obj;
        }
    }
})