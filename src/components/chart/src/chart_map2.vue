<template>
  <div class="art-chart_map2">
    <div class="art-chart_map2-result" v-if="option">
      <ul>
        <li class="clearfix" v-for="(item, index) in option.list.slice(0,option.number || 8)">
          <span v-text="(index + 1)"></span>
          <span v-text="item.name"></span>
          <span v-text="item.value"></span>
        </li>
      </ul>
    </div>
    <div class="art-chart_map2-canvas">
      <china-map :isCity="true" :data="option" :url="option.url" :tooltipFn="option.tooltipFn"></china-map>
    </div>
  </div>
</template>

<script>
	import ChinaMap from '../../../components/chinaMap'

  export default {
    name: 'artChart_map2',
    props: {
			option: {
    		type: Object,
        require: true,
      }
    },
		components: {
			ChinaMap
		}
  }
</script>
