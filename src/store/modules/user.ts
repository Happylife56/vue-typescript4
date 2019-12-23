import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  usrName: string
}

@Module({ dynamic: true, store, name: 'user', namespaced: true })
class User extends VuexModule implements IUserState {
  usrName = 'test'

  @Mutation
  public TEST(name: string) {
    this.usrName = name
  }

  @Action
  public setTest() {
    this.TEST('test')
  }

}

export const UserModule = getModule(User)
