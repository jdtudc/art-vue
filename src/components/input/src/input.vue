<template>
    <div
        :class="[prefixCls, prefixCls + '_' + size, disabled? prefixCls+'_disabled' : '', statusAndPosCls, unit? prefixCls+'_unit' : '', border?'':prefixCls+'_noborder', errorPos === 'right'&& prefixCls + '_error-right']">
        <input
            :style="unitPadding"
            :class="prefixCls+'-original'"
            :type="type"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            ref="input"
            :disabled="disabled"
            :maxlength="maxlength"
            :readonly="readonly"
            :name="name"
            :value="currentValue"
            :number="number"
            :autofocus="autofocus"
            @keyup.enter="handleEnter"
            @keyup="handleKeyup"
            @keypress="handleKeypress"
            @keydown="handleKeydown"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
            @change="handleChange"
            @click="handleClick"
        />
        <!-- error 图片 -->
        <i v-if="status==='error'" :class="prefixCls+'-icon-err'"></i>
        <!-- 用户自定义图片：最大20*20 -->
        <i v-else :class="prefixCls+'-icon'" :style="icon?'background-image:url(' + icon + ')':''"></i>
        <!-- 清除按钮 -->
        <i v-if="clear && (currentValue || currentValue === 0)" :class="prefixCls+'-clear'" @click="clearValue"></i>
        <span :class="prefixCls+'-unit'" v-if="status!=='error' && unit" ref="unit">{{unit}}</span>
        <div :class="prefixCls+'-error-text'" v-if="status==='error' && errorText" :style="errorStyle" @click="clickError">{{errorText}}
        </div>
    </div>
</template>

<script>
    import util from "../../../utils/util.js"

    const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
    const MOZ_HACK_REGEXP = /^moz([A-Z])/

    // 连字符转为驼峰
    function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter
        }).replace(MOZ_HACK_REGEXP, 'Moz$1')
    }

    // 数组里边查找下标
    function findIndexInArr(n, arr) {
        if (Array.indexOf) {
            return arr.indexOf(n)
        } else {
            for (let i = 0, len = arr.length; i < len; i++) {
                let item = arr[i]
                if (item === n) {
                    return i
                }
            }
            return -1
        }
    }

    function getStyle(element, styleName) {
        if (!element || !styleName) return null

        styleName = camelCase(styleName)
        if (styleName === 'float') {
            styleName = 'cssFloat'
        }

        try {
            const computed = document.defaultView.getComputedStyle(element, '')
            return element.style[styleName] || computed ? computed[styleName] : null
        } catch (e) {
            return element.style[styleName]
        }
    }

    let projectPrefix = 'art-'
    /*let camelCase = Util.camelCase
    let findIndexInArr = Util.findIndexInArr
    let getStyle = Util.getStyle*/
    const prefixCls = `${projectPrefix}input`

    export default {
        name: camelCase(prefixCls),
        props: {
            type: {
                type: String,
                default: 'text'
            },

            errorPos: String,  // 错误文案的位置  "默认下边", "right"- 右边，不占位，默认最大宽度200px
            errorText: String,
            errorStyle: String, // error 文案样式，主要用来自定义宽度

            unit: String,
            icon: String,
            iconPos: {
                type: String,
            },
            // 输入内容后，是否显示清除按钮
            clear: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: true
            },

            number: '',
            value: [String, Number],
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
            status: String,
        },
        computed: {
            statusAndPosCls() {
                let arr = ['right', 'left']
                let statusArr = ['error', 'success', 'search']

                let status = this.status
                let statusCls = ''
                let pos = findIndexInArr(this.iconPos, arr) > -1 ? this.iconPos : ''
                let posCls = pos ? prefixCls + '_icon-' + pos : ''
                if (this.clear) {
                    posCls += ' ' + prefixCls + '_icon-right'
                }

                if (findIndexInArr(status, statusArr) > -1) {
                    posCls = prefixCls + '_icon-' + arr[0]
                    statusCls = prefixCls + '_' + status
                }
                return [posCls, statusCls]
            }
        },
        data() {
            return {
                prefixCls: prefixCls,
                currentValue: this.value,
                unitPadding: ''
            }
        },
        watch: {
            value(val) {
                this.setCurrentValue(val)
            }
        },

        mounted() {
            // 带单位的
            let unitEl = this.$refs.unit
            let w = parseInt(getStyle(unitEl, 'width'))
            let pl = parseInt(getStyle(unitEl, 'padding-left'))
            let pr = parseInt(getStyle(unitEl, 'padding-right'))
            let sum = w + pl + pr
            if (/^\d+$/gmi.test(sum)) {
                this.unitPadding = 'padding-right:' + sum + 'px'
            }
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
                /*if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                 this.dispatch('FormItem', 'on-form-blur', this.currentValue)
                 }*/
            },
            handleInput(event) {
                let value = event.target.value
                //if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value);
                this.setCurrentValue(value)
                this.$emit('input', value)
                this.$emit('change', event)
            },
            handleChange(event) {
                this.$emit('change', event)
            },
            setCurrentValue(value) {
                if (value === this.currentValue) return
                this.currentValue = value
                /*this.$nextTick(() => {
                 this.resizeTextarea()
                 })
                  if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                 this.dispatch('FormItem', 'on-form-change', value)
                 }*/
            },
            focus() {
                this.$refs.input.focus()
            },
            blur() {
                this.$refs.input.blur()
            },

            clickError(event) {
                event.stopPropagation();
            },

            clearValue() {
                this.setCurrentValue('')
                this.$emit('input', '')
                this.$emit('change', '')
                this.$emit('clearValue', '')
            }
        }
    }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_input.scss';
</style>
