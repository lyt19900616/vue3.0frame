import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/mutation',
    name: 'Mutation',
    component: () => import('../views/Mutation')
  },
  {
    path: '/action',
    name: 'Action',
    component: () => import('../views/Action')
  },
  {
    path: '/module',
    name: 'Module',
    component: () => import('../views/Module')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
