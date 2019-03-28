<template>
    <button
        :class="[prefixCls, icon && size=='small'?'':prefixCls + '_'+size, icon?prefixCls+'_main':prefixCls + '_'+type, !border && prefixCls+'_nobor']"
        :disabled="disabled" @click="handleClick" @mouseenter="enter" @mouseleave="leave">
        <img v-if="icon" :class="prefixCls+'-icon'" :src="icon" alt="">
        <span :class="prefixCls+'-text'"><slot></slot></span>
    </button>
</template>

<script>
    const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
    const MOZ_HACK_REGEXP = /^moz([A-Z])/

    // 连字符转为驼峰
    function camelCase (name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter
        }).replace(MOZ_HACK_REGEXP, 'Moz$1')
    }

    let projectPrefix = 'art-'
    const prefixCls = `${projectPrefix}button`

    export default {
        name: camelCase(prefixCls),
        props: {
            type: {
                type: String,
                default: 'main'
            },
            size: {type: String, default: 'middle'},
            icon: String,
            disabled: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: true
            }
        },
        computed: {},
        data () {
            return {
                prefixCls: prefixCls
            }
        },
        methods: {
            handleClick(event){
                this.$emit('click', event)
            },
            enter(event){
                this.$emit('mouseenter', event)
            },
            leave(event){
                this.$emit('mouseleave', event)
            }
        }
    }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_button.scss';
</style>
