<template>
  <div class="art-alert" :class="['art-alert_' + type]">
    <div class="art-alert-cont">
      <i class="art-alert-icon" :class="['art-alert-icon_' + type]"></i>
      <p class="art-alert-title"><slot></slot></p>
      <p class="art-alert-desc"><slot name="desc"></slot></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'artAlert',
    props: {
      type: {
        type: String,
        default: 'success'  // success | warning | error
      }
    },
    methods: {
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_alert.scss';
</style>
