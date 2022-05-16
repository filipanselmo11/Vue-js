import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', redrect: { name: 'transformers-content', params: { name: 'optimus-prime' } } },
    {
        path: '/transformers',
        name: 'transformers',
        component: () => import('../components/TransformersComponent.vue'),
        props: { sidebar: false },
        children: [
            { path: ':name', name: 'transformers-content', component: () => import('../components/TransformersContentComponent.vue') }
        ],
    },
    { path: '/game-of-thrones', name: 'game-of-thrones', component: () => import('../components/GotComponent.vue') },
    { path: '*', name: 'error-404', component: 'error404' }
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;