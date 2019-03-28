<template>
  <div class="art-tag" :class="['art-tag_level' + level]">
    <div class="art-tag-cont">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'artTag',
    props: {
      level: {
      	type: [Number,String],
        default: 1
      }
    },
    methods: {
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_tag.scss';
</style>
