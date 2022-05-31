import Vue from 'vue';
import Router from 'vue-router';
import DashboardComponent from './views/DashboardComponent.vue';
import ProjectsComponent from './views/ProjectsComponent.vue';
import TeamComponent from './views/TeamComponent.vue';
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardComponent
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsComponent
        },
        {
            path: '/team',
            name: 'team',
            component: TeamComponent
        },
    ]
})