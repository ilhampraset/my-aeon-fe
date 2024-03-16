import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/About.vue'
const routes = [
    {
        path: '/',
        name: 'About',
        component: Home
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
    },
    {
        path: '/users/:id',
        name: 'UserDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserDetail.vue')
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router