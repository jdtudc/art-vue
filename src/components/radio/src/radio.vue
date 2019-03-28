<template>
  <label class="art-radio" :class="{'art-radio_active': active, 'art-radio_disabled': disabled}">
    <span class="art-radio-icon"></span>
    <span class="art-radio-value" v-if="value" v-text="value"></span>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'artRadio',
    props: {
      value: [String, Number],
      disabled: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_radio.scss';
</style>
