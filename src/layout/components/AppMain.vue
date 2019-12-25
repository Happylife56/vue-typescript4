<template>
  <section class="app-main" :class="{'app-auto':appType === 'admin'}">
    <el-scrollbar wrap-class="appmain-wrapper" view-class="appmain-view" wrap-style="overflow-x: hidden;" view-style="background-color: white;" v-if="appType !== 'admin'">
      <transition name=" fade-transform" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </el-scrollbar>
    <transition name=" fade-transform" mode="out-in" v-else>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Action, Mutation } from 'vuex-class'

@Component({
  name: 'AppMain'
})
export default class extends Vue {
  @State('appType', { namespace: 'app' }) appType!: string
  @Mutation('TEST', { namespace: 'user' }) TEST: any

  list: Array<string> = []

  mounted() {
    this.$nextTick(() => {})
    this.TEST('2656565689')
    console.log(this.appType)
  }
}
</script>

<style lang="scss">
.app-main,
.el-scrollbar {
  flex: 1;
  background-color: $backgroundColor;
  @include flex-column();
}
.app-main {
  .el-scrollbar {
    background-color: #fff;
  }
}
.app-auto {
  overflow: auto;
}
</style>
