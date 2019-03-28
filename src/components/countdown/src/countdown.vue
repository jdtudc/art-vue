<template>
    <div class="art-countdown" :class="{'art-countdown_warn': warn}">
        <div class="art-countdown-line">
            <div class="art-countdown-line-inner" :style="{'width': percent}"></div>
        </div>
        <div class="art-countdown-remain" :id="id" v-if="warn"
             :style="isOverflow?{'left':'0', 'right':'auto'}:{'right': percent}">
            <div class="art-countdown-remain-span"></div>
            <div class="art-countdown-remain-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'artCountdown',
        props: {
            warn: {
                type: Boolean,
                default: false,
            },
            total: Number,
            remain: Number,
            percentage: Number,
        },
        data() {
            return {
                totalPage: 1,
                curPage: 1,
                isOverflow: false, // 左侧是否超出容器
                id: "cd_" + this.getRandom(16),
            }
        },
        mounted() {
            let el = document.getElementById(this.id);
            if (!el) return;
            let left = el.offsetLeft;
            this.isOverflow = left < 0;
        },

        methods: {
            getRandom(len) {
                let result = [];
                let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789-_';
                for (let i = 0; i < len; i++) {
                    let index = Math.floor(Math.random() * str.length);
                    result.push(str[index]);
                }
                return result.join('');
            },
        },
        computed: {
            percent() {
                return this.percentage >= 0 ? `${this.percentage}%` : `${(this.remain / this.total) * 100}%`;
            },
        },
    }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_countdown.scss';
</style>
