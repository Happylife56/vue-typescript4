<template>
  <div class="app-wrapper clearfix ">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { AppMain, Navbar, Sidebar } from './components'
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
@Component({
  components: { Sidebar, Navbar, AppMain }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}
.main-container {
  flex: 1;
  transition: margin-left 0.28s;
  @include flex-column();
  position: relative;
}
.sidebar-container {
  transition: width 0.28s;
  height: 100%;
  z-index: 1001;
  overflow: hidden;
}
</style>
