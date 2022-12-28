import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../views/HomePage.vue"
import ProjectPage from "../views/ProjectPage.vue"
import PlayGround from "../views/PlayGround.vue"
import TeamPage from "../views/TeamPage.vue"


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/project',
        name: 'ProjectInfo',
        component: ProjectPage,
    },
    {
        path: '/playground',
        name: 'NFTPlayground',
        component: PlayGround,
    },
    {
        path: '/team',
        name: 'TeamInfo',
        component: TeamPage,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router