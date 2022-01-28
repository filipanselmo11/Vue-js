import Vue from 'vue';
import VueRouter from 'vue-router';
import Inbox from "../views/Inbox.vue";
import SystemBar from "../views/SystemBar.vue";
import AccessibleMap from "../views/AccessibleMap.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Inbox",
        component: Inbox,
    },
    {
        path: "/system",
        name: "SystemBar",
        component: SystemBar,
    },
    {
        path: "/map",
        name: "AccessibleMap",
        component: AccessibleMap,
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router