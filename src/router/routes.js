

import Home from '@/views/home.vue'
import Login from '@/views/login'
import NotFound from '@/views/not-found.vue'


export const routes = [
    // home page 
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // login page
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {}
    },
    // about page
    {
        path: '/introduce',
        name: 'Introduce',
        component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
    },
    // NotFound
    {
        name: 'not-found',
        component: NotFound,
        path: '/:pathMatch(.*)*' // 取代 * (使用自定义的 regex 参数)

    }
]
