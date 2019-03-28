<template>
    <div class="art-switch" :class="{'art-switch_active': (autoSwitch?checked:active)}" @click="toggle">
        <div class="art-switch-inner">
            <slot name="open" v-if="(autoSwitch?checked:active)"></slot>
            <slot name="close" v-if="!(autoSwitch?checked:active)"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'artSwitch',
        props: {
            active: {
                type: Boolean,
                default: false
            },
            // 是否自动切换
            autoSwitch: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                checked: false,
            }
        },
        created () {
            this.checked = this.active;
        },
        methods: {
            toggle () {
                this.autoSwitch && ( this.checked = !this.checked);
                this.$emit("on-change", this.checked)
            }
        }
    }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_switch.scss';
</style>
