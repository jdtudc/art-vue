<template>
  <div class="art-card" :class="[active && 'art-card_active']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'artCard',
    props: {
    	active: {
    		type: Boolean,
        default: false
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_card.scss';
</style>
