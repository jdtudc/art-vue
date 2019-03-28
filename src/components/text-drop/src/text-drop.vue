<template>
    <div class="art-text-drop" v-clickoutside="close" @mouseenter="open" @mouseleave="close">
        <span class="art-text-drop-result" :class="{'art-text-drop-result_active': showDropdown}" :title="showTitle && selectedText">{{selectedText}}</span>
        <div class="art-text-drop-box" :class="!autoWidth && 'art-text-drop-box_inherit'" v-if="showDropdown">
            <art-dropdown :data="dropData" :autoWidth="autoWidth" @on-choose="todoSth" :size="size"></art-dropdown>
        </div>
    </div>
</template>

<script>
  import ArtDropdown from '../../dropdown/index'
  import clickoutside from '../../../directives/clickoutside'

  export default {
	name: 'artTextDrop',
	props: {
	  dropData: {
		type: Array,
		default: () => {
		  return []
		}
	  },
	  size: {
		type: String,
		default: 'small'
	  },
	  showTitle: {
		type: Boolean,
		default: false
	  },
	  defaultText: {
		type: String,
		default: '请选择'
	  },
	  autoWidth: {
		type: Boolean,
		default: true
	  },
	},
	data() {
	  return {
		selectedText: '',
		showDropdown: false,
		delayLock: false
	  }
	},
	created() {
	  let self = this
	  this.selectedText = this.defaultText;
	  this.dropData.forEach((item, i, arr) => {
		item.active && (self.selectedText = item.value)
	  })
	},
	methods: {
	  todoSth(tab) {
		this.dropData.forEach((item, i, arr) => {
		  item.active = false
		});
		tab.active = true;

		this.selectedText = tab.value;
		this.showDropdown = false;

		this.$emit('on-choose', tab)
	  },
	  close() {
		if (!this.delayLock) {
		  this.showDropdown = false;
		  this.delayLock = true;
		  let timer = setTimeout(() => {
			this.delayLock = false;
			clearTimeout(timer);
		  }, 200)
		}
	  },
	  open() {
		if (!this.delayLock) {
		  this.showDropdown = true;
		  this.delayLock = true;
		  let timer = setTimeout(() => {
			this.delayLock = false;
			clearTimeout(timer);
		  }, 200)
		}
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
    @import '../../../styles/components/_text-drop.scss';
</style>
