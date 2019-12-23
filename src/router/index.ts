import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import layout from '@/layout/index.vue'

import collectRoutes from './modules/collect'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: layout,
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      },
      collectRoutes
    ]
  },
  {
    path: '/redirect',
    component: layout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
