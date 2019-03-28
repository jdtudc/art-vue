<template>
    <div class="art-button-drop" :class="ctrlActive && 'art-button-drop_active'" @mouseenter="enter"
         @mouseleave="leave">
        <art-button :type="this.ctrlActive ? 'main' : 'text'" size="small" @click="clickBtn">
            <slot></slot>
        </art-button>
        <i class="art-button-arr" :class="showDropdown && 'art-ext'"></i>
        <div class="art-button-drop-box">
            <art-dropdown :data="dropData" v-if="showDropdown" @on-choose="todoSth" :size="'small'"></art-dropdown>
        </div>
    </div>
</template>

<script>
  import ArtButton from '../../button/index'
  import ArtDropdown from '../../dropdown/index'

  export default {
	name: 'artButtonDrop',
	props: {
	  dropData: {
		type: Array,
		default: () => {
		  return []
		}
	  },
	  active: {
		type: Boolean,
		default: false
	  }
	},
	data() {
	  return {
		prefixCls: 'art-button-drop',
		showDropdown: false,
		ctrlActive: this.active
	  }
	},
	methods: {
	  clickBtn() {         // click 是按钮点击，列表点击走的是on-choose
		this.$emit('click')
	  },
	  todoSth(tab) {
		this.$emit('on-choose', tab)
	  },
	  leave() {
		this.ctrlActive = this.active
		this.toggleDropdown()
	  },
	  enter() {
		this.ctrlActive = true
		this.toggleDropdown()
	  },
	  toggleDropdown() {
		this.showDropdown = !this.showDropdown
	  }
	},
	components: {
	  ArtButton,
	  ArtDropdown
	},
  }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_button-drop.scss';
</style>
