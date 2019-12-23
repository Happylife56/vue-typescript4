import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

/**
 * @param {opened} 侧边栏是否开启
 * @param {appType} 项目类型
 * @description appType:{ PC：ERP端 admin：后台 }
 * @param {token} token
 * @param {tokenExpire} token 是否过期
 * @param {quitShift} 是否交班
 */
export interface IAppState {
  opened: boolean;
  appType: string;
  token: string;
  tokenExpire: boolean;
  quitShift: boolean
}

@Module({ name: 'app', namespaced: true })
export default class AppModule extends VuexModule implements IAppState {
  public opened: boolean = true
  public appType = 'admin'
  public token = ''
  public tokenExpire = false
  public quitShift = false

  @Mutation
  private OPEN_CLOSE_SIDEBAR(bool: boolean) {
    this.opened = bool
  }
  // 设置token
  @Mutation
  public SET_TOKEN(token: string) {
    this.token = token
  }
  // 设置token的状态
  @Mutation
  public SET_TOKEN_STATE(bool: boolean) {
    this.tokenExpire = bool
  }
  // 设置是否交班
  @Mutation SET_QUIT_SHIFT(bool: boolean) {
    this.quitShift = bool
  }

  @Action
  public SetSideBar(bool: boolean) {
    this.OPEN_CLOSE_SIDEBAR(bool)
  }
}

