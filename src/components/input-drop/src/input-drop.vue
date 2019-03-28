<template>
  <div class="art-input-drop"
       :class="[ctrlActive && 'art-input-drop_active', status==='error' && 'art-input-drop_err']"
       v-clickoutside="close">
    <art-input :size="size" :border="border" readonly :placeholder="defaultText" :value="selectedText"
               :disabled="disabled"
               @click="clickFn" :status="status" :errorPos="errorPos" :errorText="errorText"
               :errorStyle="errorStyle"></art-input>
    <i class="art-input-arr" :class="showDropdown && 'art-ext'"></i>
    <div class="art-input-drop-box" :class="!autoWidth && 'art-input-drop-box_inherit'">
      <art-dropdown :data="dropData" v-if="showDropdown" :autoWidth="autoWidth" @on-choose="todoSth"
                    :size="'middle'"></art-dropdown>
    </div>
  </div>
</template>

<script>
	import ArtInput from '../../input/index'
	import ArtDropdown from '../../dropdown/index'
	import clickoutside from '../../../directives/clickoutside'

	export default {
		name: 'artInputDrop',
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
			},
			size: {
				type: String,
				default: 'middle'
			},
			border: {
				type: Boolean,
				default: true
			},
			defaultText: {
				type: String,
				default: '请选择'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			errorPos: String,  // 错误文案的位置  "默认下边", "right"- 右边，不占位，默认最大宽度200px
			errorText: String,
			errorStyle: String, // error 文案样式，主要用来自定义宽度
			status: String,
			autoWidth: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				selectedText: '',
				prefixCls: 'art-input-drop',
				showDropdown: false,
				ctrlActive: this.active
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				let self = this
        this.selectedText = '';
				this.dropData.forEach((item, i, arr) => {
					item.active && (self.selectedText = item.value)
				})
			},
			todoSth(tab) {
				this.dropData.forEach((item, i, arr) => {
					item.active = false
				})
				tab.active = true

				this.selectedText = tab.value

				this.ctrlActive = false
				this.showDropdown = false

				//this.status = ""; // 选择过一次肯定就不会触发error类型了
				this.$emit('on-choose', tab)
			},
			clickFn() {
				this.ctrlActive = !this.ctrlActive
				this.showDropdown = !this.showDropdown
			},
			close() {
				this.showDropdown = false;
			},
		},
		watch: {
			dropData: {
				handler: function () {
					this.init()
				},
				deep: true
			}
		},
		components: {
			ArtInput,
			ArtDropdown
		}
		,
		directives: {
			clickoutside
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_input-drop.scss';
</style>
