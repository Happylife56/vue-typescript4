import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import layout from '@/layout/index.vue'

// 导入modules
const requireModule = require.context('./modules', true, /\.ts$/)
const routerModule = requireModule.keys().map(key => requireModule(key).default)

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
      ...routerModule
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
