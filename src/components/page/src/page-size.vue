<template>
    <div class="art-page-size">
        <div class="art-page-size-wrap" v-clickoutside="close">
            <div class="art-page-size-now" :class="{'art-page-size-now_open': show}" @click="toggle">
                <span class="art-page-size-result"><i>{{num}}</i>条/页</span>
            </div>
            <div class="art-page-size-box">
                <art-dropdown :data="data" :transAni="transAni" v-if="show" @on-choose="choose" :size="'small'"></art-dropdown>
            </div>
        </div>
        <div class="art-page-size-total">共<i class="total">{{total}}</i>条</div>
    </div>
</template>

<script>
  import ArtDropdown from '../../dropdown/index'
  import clickoutside from '../../../directives/clickoutside'

  export default {
	name: 'artPageSize',
	props: {
	  total: [String, Number],
	  data: {
		type: Array,
		require: true,
	  },
	  transAni: {
		type: String,
		default: 'fade-in-move-in-up'
	  },
	},
	data() {
	  return {
		show: false,
		num: null,
	  }
	},
	created() {
	  for (let i = 0; i < this.data.length; i++) {
		if (this.data[i].active) {
		  this.num = this.data[i].num;
		}
	  }
	},
	methods: {
	  choose(tab) {
		this.show = !this.show;
		this.num = tab.num;
		this.$emit("on-choose", tab)
	  },
	  toggle() {
		this.show = !this.show;
	  },
	  close() {
		this.show = false;
	  }
	},
	components: {
	  ArtDropdown
	},
	directives: {
	  clickoutside
	}
  }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_page-size.scss';
</style>
