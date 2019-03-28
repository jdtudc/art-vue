<template>
  <transition name="loading-fade">
    <div class="art-loading-bar" :style="barStyle" v-show="show">
      <div class="art-loading-bar-inner" :style="{'width': innerWidth, 'background-color': [status == 'success' && successBg, status == 'fail' && failBg,],}" :class="{'art-loading-bar-inner_success': status == 'success', 'art-loading-bar-inner_fail': status == 'fail'}"></div>
    </div>
  </transition>
</template>
<script>
	export default {
		name: "artLoadingBar",
    data () {
      return {
        percent: 0,
        status: 'success',
        show: false,
        barBg: 'transparent',
        successBg: null,
        failBg: null,
      }
    },
    computed: {
	    barStyle () {
		    return {
			    backgroundColor: `${this.barBg}`,
		    }
      },
	    innerWidth () {
	    	return this.percent + '%';
      },
    },
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_loading-bar.scss';
</style>
