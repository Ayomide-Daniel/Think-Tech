import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Article from '../views/Article.vue'
import Classify from '../views/Classify.vue'
import Admin from '../views/Admin.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [{
        path: '*',
        component: PageNotFound
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/admin/:page?',
        name: 'adimin',
        props: true,
        component: Admin
    },
    {
        path: '/:title?',
        name: 'article',
        props: true,
        component: Article
    },
    {
        path: '/:type?/:name',
        name: 'classify',
        props: true,
        component: Classify
    },
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes
})

export default router