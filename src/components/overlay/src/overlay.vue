<template>
  <div class="art-overlay" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "artOverlay",
    props: {
      unclickable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick () {
        !this.unclickable && this.$emit("on-click")
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_overlay.scss';
</style>
