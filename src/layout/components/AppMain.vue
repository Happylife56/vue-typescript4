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
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'AppMain'
})
export default class extends Vue {
  get appType() {
    return AppModule.appType
  }
  mounted() {
    this.$nextTick(() => {})
    UserModule.setTest()
    // console.log(UserModule)
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
