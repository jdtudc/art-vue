<template>
    <div class="art-btn-drop" v-if="dropData && dropData.length > 0"
         :class="[type === 1 && 'art-btn-drop_btn', 'art-btn-drop_'+theme]">
        <p class="art-btn-drop-main">{{dropData && dropData.length > 0 ? dropData[0].value : ""}}</p>
        <ul class="art-btn-drop-box">
            <li v-for="item in dropData" @click="clickFn(item)" :title="item.title">{{item.value}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'artBtnDrop',
        props: {
            type: {     // 类型： 0 - 文字，1-按钮
                type: Number,
                default: 0
            },
            theme: {  // 主题 blue/不传 - 蓝色，red - 红色
                type: String,
                default: "blue"
            },
            dropData: {
                type: Array,
                default: () => {
                    return []
                }
            },
        },
        data() {
            return {}
        },
        methods: {
            clickFn(item) {
                this.$emit('on-choose', item)
            },
        }
    }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_btn-drop.scss';
</style>
