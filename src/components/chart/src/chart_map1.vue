<template>
  <div class="art-chart_map1">
    <div class="art-chart_map1-result" v-if="option">
      <ul>
        <li class="clearfix" v-for="(item, index) in option.list.slice(0,option.number || 8)">
          <span v-text="(index + 1)"></span>
          <span v-text="item.name"></span>
          <span v-text="item.value"></span>
        </li>
      </ul>
    </div>
    <div class="art-chart_map1-canvas">
      <china-map :isCity="false" :data="option" :url="option.url" :tooltipFn="option.tooltipFn"></china-map>
    </div>
  </div>
</template>

<script>
	import ChinaMap from '../../../components/chinaMap'

  export default {
    name: 'artChart_map1',
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
