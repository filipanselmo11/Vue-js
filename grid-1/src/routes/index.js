import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: () => import('../views/About.vue') },
        { path: '/grid', name: 'grid', component: () => import('../views/Grid.vue') },
        { path: '/grid2', name: 'grid2', component: () => import('../views/Grid2.vue') },
    ]
});