import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/list/index.vue'),
  },
]

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router
