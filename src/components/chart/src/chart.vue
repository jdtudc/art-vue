<template>
  <div class="art-chart" :style="{'min-height': chartId === 'radar1' && '260px'}">
    <component :is="curChart" :option="option" :custom="custom"></component>
    <art-auxi :loading="loading" :error="error" :none="none" @on-retry="retry" v-if="auxi && (!loading || !error || !none)"></art-auxi>
  </div>
</template>

<script>
  import ArtAuxi from '../../auxi'

  export default {
    name: 'artChart',
    props: {
      chartId: {
      	type: String,
        require: true
      },
      auxi: {
      	type: Boolean,
        default: false,
      },
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
      option: {
      	type: Object,
        require: true,
      },
      custom: {
      	type: Boolean,
        default: false
      },
    },
    data () {
    	return {
		    curChart: 'art-chart_' + this.chartId,
      }
    },
    methods: {
	    retry () {
		    this.auxi && this.$emit("on-retry")
	    },
    },
    components: {
	    ArtAuxi,
	    // 面积占比图
	    'art-chart_pie1':  () => import('./chart_pie1.vue'),
      // 柱状占比图
	    'art-chart_bar1':  () => import('./chart_bar1.vue'),
	    // 自定义形状柱状占比图
	    'art-chart_bar2':  () => import('./chart_bar2.vue'),
      // 叠加柱状图
	    'art-chart_bar3':  () => import('./chart_bar3.vue'),
	    // 双项柱状图
	    'art-chart_bar4':  () => import('./chart_bar4.vue'),
	    // 一般柱状图
	    'art-chart_bar5':  () => import('./chart_bar5.vue'),
      // 一般饼图
	    'art-chart_pie2':  () => import('./chart_pie2.vue'),
	    // 一般雷达图
	    'art-chart_radar1':  () => import('./chart_radar1.vue'),
      // 一般折线图
	    'art-chart_line1':  () => import('./chart_line1.vue'),
      // 占比折线图
	    'art-chart_line2':  () => import('./chart_line2.vue'),
	    // 对比折线图
	    'art-chart_line3':  () => import('./chart_line3.vue'),
			// 堆积折线图
			'art-chart_line4':  () => import('./chart_line4.vue'),
			// 省份地图
			'art-chart_map1':  () => import('./chart_map1.vue'),
			// 城市地图
			'art-chart_map2':  () => import('./chart_map2.vue'),
    },
    watch: {
	    option: {
	    	handler: function () {

		    },
	    	deep: true,
      }
    },
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_chart.scss';
</style>
