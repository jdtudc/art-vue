<template>
    <ul>
        <li v-for="(item,index) in list"
            :class="[ item.list ? 'art-left-nav-parent-level': 'art-left-nav-last-level', item.active ? 'art-left-nav_active' : '', item.expand? 'art-left-nav_ext':'']"
            :title="item.title">
            <a href="javascript:;" @click="clickFn($event, item, index)">
                <i class="art-left-nav-icon" v-if="item.icon || (istree)"
                   :style="item.icon && !istree?'background-image:url(' + item.icon + ')':''"></i>{{item.title}}</a>
            <art-left-nav-ul v-if="item.list" :list="item.list" :istree="istree" @click="nodeClick"></art-left-nav-ul>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'artLeftNavUl',
        props: {
            list: [Array],
            istree: Boolean
        },
        data() {
            return {}
        },

        created() {
        },

        methods: {
            clickFn(event, item, index) {
                let tar = event.target
                let exp = false;
                if (this.istree) {
                    if (tar.tagName.toLowerCase() === 'i') {
                        item.expand = !item.expand;
                        this.$emit('click', item, index, {exp: true});
                        return;
                    }
                } else {
                    if (item.list) {  // 有子元素
                        item.expand = !item.expand;
                        exp = true;
                    }
                }
                this.$emit('click', item, index, {exp: exp});
            },
            nodeClick(item, index, flag) {
                this.$emit('click', item, index, flag)
            }
        },
        computed: {},
        components: {}
    }
</script>

