import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../views/HomePage.vue"
import ProjectPage from "../views/ProjectPage.vue"
import LibraryPage from "../views/LibraryPage.vue"
// import TeamPage from "../views/TeamPage.vue"
import ContactUsPage from "../views/ContactUs.vue"


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
        path: '/library',
        name: 'Library',
        component: LibraryPage,
    },
    {
        path: '/contactus',
        name: 'ContactUsPage',
        component: ContactUsPage,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router