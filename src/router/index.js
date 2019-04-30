import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from '../components/Pages/page1.vue'
import PageTwo from '../components/Pages/page2.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "PageOne",
        component: PageOne
    },
    {
        path: '/page2',
        name: "PageTwo",
        component: PageTwo
    }
]

const router = new VueRouter({
    routes
})

export default router