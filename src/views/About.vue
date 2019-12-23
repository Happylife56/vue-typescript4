<template>
  <div class="about">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about {
  box-sizing: border-box;
  li {
    height: 200px;
    @include flex-type(center, center);
  }
}
</style>
