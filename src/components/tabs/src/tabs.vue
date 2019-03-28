<template>
  <div class="art-tabs">
    <div class="art-tabs-wrap clearfix">
      <div class="art-tabs-tab" :class="{'art-tabs-tab_active': tab.active, 'art-tabs-tab_disabled': tab.disabled}" v-for="tab in data" @click="!tab.disabled && handleClick(tab)">{{tab.value}}</div>
      <div class="art-tabs-extend" v-if="hasExtend" v-clickoutside="handleClickoutside">
        <div class="art-tabs-extend-switch" @click="extendClick">
          <slot name="switch"><i class="icon-ellipsis"></i></slot>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import clickoutside from '../../../directives/clickoutside'

  export default {
    name: 'artTabs',
    props: {
      data: {
        type: Array,
        default: () => { return [];}
      },
      hasExtend: Boolean,
    },
    data () {
      return {
      }
    },
    methods: {
      extendClick () {
        this.$emit("on-extend-click")
      },
      handleClick (tab) {
        this.$emit("on-click",tab)
      },
	    handleClickoutside () {
      	this.$emit("on-click-outside")
      },
    },
	directives: {
	  clickoutside
	}
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_tabs.scss';
</style>
