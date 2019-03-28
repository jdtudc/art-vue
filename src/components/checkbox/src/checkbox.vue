<template>
  <label class="art-checkbox"
         :class="{'art-checkbox_active': active, 'art-checkbox_disabled': disabled, 'art-checkbox_noval': !value, 'art-checkbox_partial': partial}">
    <span class="art-checkbox-icon"></span>
    <span class="art-checkbox-value" v-if="value" v-text="value"></span>
    <slot></slot>
  </label>
</template>

<script>
	export default {
		name: 'artCheckbox',
		props: {
			value: [String, Number],
			disabled: {
				type: Boolean,
				default: false
			},
			partial: {
				type: Boolean,
				default: false
			},
			active: {
				type: Boolean,
				default: false
			}
		},
		methods: {}
	}
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_checkbox.scss';
</style>
