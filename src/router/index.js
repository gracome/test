import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '@/views/login.vue'
import registration from '@/views/registration.vue'
import resetPassword from '@/views/resetPassword.vue'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/',
    name: 'login',
    component: login

  },

  {
    path: '/register',
    name: 'registration',
    component: registration
  },

  {
    path: '/reset_password',
    name: 'resetPassword',
    component: resetPassword
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
