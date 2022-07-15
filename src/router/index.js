import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Subnet from '../views/Subnet.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/subnet',
        component: Subnet,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
