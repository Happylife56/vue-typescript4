import { RouteConfig } from 'vue-router'
const collectRoutes: RouteConfig = {
  path: '/collect',
  name: 'collect',
  component: () => import(/* webpackChunkName: "collect" */ '@/views/collect/index.vue')
}
export default collectRoutes
