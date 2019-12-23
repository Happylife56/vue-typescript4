<template>
  <div class="navbar">
    <p>头部</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Navbar'
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  border-bottom: 1px solid $borderDivColor;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
