<template>
  <div class="art-auxi" v-if="none || error || loading">
    <transition name="fade-in">
      <div class="art-auxi-none" v-if="none">
        <i></i>
        <slot name="none"><p>暂无数据</p></slot>
      </div>
    </transition>
    <transition name="fade-in">
      <div class="art-auxi-error" v-if="error">
        <i></i>
        <slot name="error"><p>数据有异常，<a href="javascript:;" @click="handlerClick">请点击重试</a></p></slot>
      </div>
    </transition>
    <transition name="fade-in">
      <div class="art-auxi-loading" v-if="loading"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'artAuxi',
    props: {
      none: {
        type: Boolean,
        default: false
      },
      error: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      handlerClick () {
        this.$emit("on-retry")
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_auxi.scss';
</style>
