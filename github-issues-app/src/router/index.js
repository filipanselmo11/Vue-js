import Vue from 'vue';

import VueRouter from 'vue-router';

import GithubIssues from '../components/GithubIssues.vue';

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'GithubIssues',
        component: GithubIssues,
    }
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router