import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import AppModule from './modules/app'
import UserModule from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: AppModule,
    user: UserModule
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage// 修改存储的状态
    })
  ] // 状态持久化
})
