import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'

export interface IUserState {
  usrName: string
}

@Module({ name: 'user', namespaced: true })
export default class UserModule extends VuexModule implements IUserState {
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

