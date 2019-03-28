<template>
  <div
    :class="['art-textarea', 'art-textarea_' + size, disabled && 'art-textarea_disabled']">
        <textarea
          class="art-textarea-original"
          :style="textareaStyles"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          :spellcheck="spellcheck"
          ref="textarea"
          :disabled="disabled"
          :rows="rows"
          :maxlength="maxlength"
          :readonly="readonly"
          :name="name"
          :value="currentValue"
          :autofocus="autofocus"
          @keyup.enter="handleEnter"
          @keyup="handleKeyup"
          @keypress="handleKeypress"
          @keydown="handleKeydown"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @click="handleClick"
        />
  </div>
</template>

<script>
  import calcTextareaHeight from '../../../utils/calcTextareaHeight'

  export default {
		name: 'artTextarea',
		props: {
			value: String,
			name: String,
			placeholder: String,
			autocomplete: {
				type: Boolean,
				default: false
			},
			readonly: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			autofocus: {
				type: Boolean,
				default: false
			},
			maxlength: Number,
			size: {
				type: String,
				default: 'middle'
			},
			rows: {
				type: Number,
        default: 2
      },
			spellcheck: {
				type: Boolean,
				default: false
			},
			autoSize: {
				type: [Boolean, Object],
        default: true
      }
		},
		computed: {},
		data() {
			return {
				currentValue: this.value,
				textareaStyles: {}
			}
		},
		watch: {
			value(val) {
				this.setCurrentValue(val)
			}
		},
		mounted() {
			const autoSize = this.autoSize;
			if (!autoSize) {
				return false;
			}
			const minRows = autoSize.minRows;
			const maxRows = autoSize.maxRows;
			this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
		},
		methods: {
			handleEnter(event) {
				this.$emit('enter', event)
			},
			handleKeydown(event) {
				this.$emit('keydown', event)
			},
			handleKeypress(event) {
				this.$emit('keypress', event)
			},
			handleKeyup(event) {
				this.$emit('keyup', event)
			},
			handleClick(event) {
				this.$emit('click', event)
			},
			handleFocus(event) {
				this.$emit('focus', event)
			},
			handleBlur(event) {
				this.$emit('blur', event)
			},
			handleInput(event) {
				let value = event.target.value
				this.setCurrentValue(value)
				this.$emit('input', value)
				this.$emit('change', event)
			},
			setCurrentValue(value) {
				if (value === this.currentValue) return
				this.currentValue = value
			},
			focus() {
				this.$refs.textarea.focus()
			},
			blur() {
				this.$refs.textarea.blur()
			},
			clickError(event) {
				event.stopPropagation();
			}
		}
	}
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_textarea.scss';
</style>
