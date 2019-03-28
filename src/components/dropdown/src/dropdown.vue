<template>
    <transition :name="transAni">
        <div v-innerscroll="data" class="art-dropdown" :class="[size && 'art-dropdown_' + size, !autoWidth && 'art-dropdown_inherit']" :style="boxStyle">
            <div class="art-dropdown-list">
                <div class="art-dropdown-item" :class="{'art-dropdown-item_active': item.active, 'art-dropdown-item_disabled': item.disabled}" v-for="item in data"
                     @click="!item.disabled && handleClick(item)" :title="item.title">
                    <slot>{{item.value}}</slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  import innerscroll from '../../../directives/innerscroll'

  export default {
	name: 'artDropdown',
	props: {
	  data: {
		type: Array,
		default: () => {
		  return [];
		}
	  },
	  // 超过多少个开始滚动
	  maxLength: {
		type: Number,
		default: 5,
	  },
	  transAni: {
		type: String,
		default: 'fade-in-move-in-up'
	  },
	  size: {
		type: String,
		default: 'middle'
	  }, // 'small' or 'medium' or 'large'
	  // 是否宽度自适应
	  autoWidth: {
		type: Boolean,
		default: true
	  }
	},
	methods: {
	  handleClick(tab) {
		this.show = false;
		this.$emit("on-choose", tab)
	  }
	},
	computed: {
	  boxStyle() {
		let lineH = 32, mt = 8;
		if (this.size == 'small') {
		  lineH = 26;
		  mt = 4;
		}
		if (this.size == 'middle') {
		  lineH = 32;
		  mt = 8;
		}
		if (this.size == 'large') {
		  lineH = 40;
		  mt = 12;
		}
		let maxH = this.maxLength * lineH + mt * (this.maxLength - 1) + 20;
		return {
		  'max-height': maxH + 'px'
		}
	  }
	},
	directives: {
	  innerscroll
	}
  }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_dropdown.scss';
</style>
