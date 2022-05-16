import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/transformers',
        name: 'transformers',
        component: () => import('../components/TransformersComponent.vue'),
        children: [
            { path: ':name', name: 'transformers-content', component: () => import('../components/TransformersContentComponent.vue') }
        ],
    },
    { path: '/game-of-thrones', name: 'game-of-thrones', component: () => import('../components/GotComponent.vue') },
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;