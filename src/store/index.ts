import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { IAppState } from './modules/app'
import { IUserState } from './modules/user'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState;
  users: IUserState;
}


// export default new Vuex.Store<IRootState>({})

export default new Vuex.Store<IRootState>({
  plugins: [
    createPersistedState({
      key: 'app',
      storage: window.sessionStorage// 修改存储的状态
    })
  ] // 状态持久化
})
