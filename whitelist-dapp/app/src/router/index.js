import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path:"/whitelist-1",
        name: "WhiteList-1",
        component: () => import("../views/WhiteList-1.vue")
    },
    {
        path:"/whitelist-2",
        name: "WhiteList-2",
        component: () => import("../views/WhiteList-2.vue")
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router