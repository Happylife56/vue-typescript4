import Vue, { DirectiveOptions } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/element.js'
import './styles/normalize.css'
import router from './router'
import store from './store'
import * as filters from './filters'
import { directives } from './directives'
// 设置全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, (filters as { [key: string]: Function })[key])
})
// 设置自定义指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key])
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
