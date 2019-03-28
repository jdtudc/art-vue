<template>
    <div :class="['art-left-nav' , istree? 'art-left-nav-tree': '', horizontal?'art-left-nav_horizontal' : '']">
        <ul v-if="horizontal">
            <li :class="item.active && 'art-left-nav_active'" v-for="(item,index) in formatList"
                @click="horClick(item, index)"><a href="javascript:;">{{item.title}}</a></li>
        </ul>
        <art-left-nav-ul v-else :list="formatList" @click="clickFn" :istree="istree"></art-left-nav-ul>
    </div>
</template>

<script>
    import ArtLeftNavUl from './left-nav-ul.vue'

    const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
    const MOZ_HACK_REGEXP = /^moz([A-Z])/

    // 连字符转为驼峰
    function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter
        }).replace(MOZ_HACK_REGEXP, 'Moz$1')
    }

    //let camelCase = Util.camelCase
    const prefixCls = 'art-left-nav'
    //let prevTreeNode = {} // 上次点击的树节点

    export default {
        name: camelCase(prefixCls),
        props: {
            data: Array,
            horizontal: Boolean,
            type: String
        },
        watch: {
            data: {
                handler: function () {
                    this.init()
                },
                deep: true
            }
        },
        data() {
            return {
                lastLevelList: [],
                formatList: [],
                allList: [],
                istree: this.type === 'tree'
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                let self = this
                let list = this.data
                let resultList = []
                this.lastLevelList = []
                this.formatList = []
                this.allList = []
                this.istree = this.horizontal ? false : this.istree

                if (this.horizontal) {
                    for (let i = 0, len = list.length; i < len; i++) {
                        let item = JSON.parse(JSON.stringify(list[i]))
                        item.active = list[i].active;
                        this.formatList.push(item)
                    }
                    return;
                }

                let istree = this.istree

                // 数据copy出来
                for (let i = 0, len = list.length; i < len; i++) {
                    let item = JSON.parse(JSON.stringify(list[i]))
                    resultList.push(item)
                }
                let arrIdx = 0
                let curActiveItem = null

                // 挨个初始化
                main(resultList, 0)
                this.allList = resultList

                if (!istree && curActiveItem) {   // 默认，非树形结构才会给父元素添加active
                    let obj = this.createMap(curActiveItem)
                    this.addActive(this.allList, obj)
                    curActiveItem.active = true
                }

                this.$emit('init', this.formatList)

                function main(par, count, parId) {
                    parId = parId || 0
                    par._id = parId
                    let list = par.list || par
                    list.forEach(function (item, index, arr) {
                        let list = item.list
                        item.expand = !!item.expand
                        item.active = !!item.active
                        item.index = arrIdx++
                        item._id = parId + '_' + index

                        if (list) {
                            main(item, 1, item._id)
                        } else {
                            self.lastLevelList.push(item)
                        }

                        if (item.active) {
                            if (istree) {
                                //prevTreeNode = item
                            } else {    // 非树形结构
                                curActiveItem = item
                            }
                        }
                        count === 0 && self.formatList.push(item)
                    })
                }
            },
            createMap(item) {
                let cid = item._id
                let nums = cid.split('_')
                let obj = {}
                let res = []
                for (let i = 0, len = nums.length; i < len; i++) {
                    res.push(nums[i])
                    let key = res.join('_')
                    key !== cid && (obj[key] = true)
                }
                return obj
            },

            // 给父元素添加active
            addActive(list, obj) {
                let self = this
                list.forEach(function (n, index, arr) {
                    n.active = false
                    let pid = n._id
                    if (obj[pid]) {    // 0_0_0_1 => 0_0_0 / 0_0
                        n.active = true
                    }
                    n.list && self.addActive(n.list, obj)
                })
            },

            // 点击回调 // 两种类型下的展开收起操作都只往外推click事件，不做其他操作
            clickFn(item, index, flag) {
                flag = flag || {};
                if (flag.exp) return this.$emit('click', item, index, this.formatList, {expand: true});

                if (!this.istree) {  // 当前选中，父级也要加 active
                    let obj = this.createMap(item);
                    this.addActive(this.allList, obj)
                } else {                 // 其他所有的active需要去掉
                    /*prevTreeNode.active = false
                    prevTreeNode = item*/
                    this.clearTree();
                }
                item.active = true
                !flag.noTriggerClick && this.$emit('click', item, index, this.formatList)
            },

            // 清空tree类型中所有的active
            clearTree() {
                let self = this
                let list = this.formatList;
                for (let i1 = 0, len = list.length; i1 < len; i1++) {
                    let first = list[i1];
                    let firstList = first.list || [];
                    first.active = false;
                    for (let i2 = 0, len = firstList.length; i2 < len; i2++) {
                        let second = firstList[i2];
                        let secondList = firstList[i2].list || [];
                        second.active = false;
                        for (let i3 = 0, len = secondList.length; i3 < len; i3++) {
                            let third = secondList[i3];
                            third.active = false;
                        }
                    }
                }
            },

            // ids - 类型为数组，长度最多为3，格式为[id1, id2, id3]，分别对应三个等级需要选中的id；
            // 该数组描述的是一个选项的坐标，[id1, id2, id3]表示查找 id1下id2下的id3，如果id1下没有id2，或者id2下没有id3，则不选中；
            // 如果同级中没有重复的id，则父级id可设为空，["", "", id3]；
            // 示例：如果要选中第二级某项，则数组为：[1, 2] 或 ["", 2]；
            // isTriggerClick - 是否触发点击回调，true -- 选中+触发click回调
            selectItem(ids, isTriggerClick) {
                if (!ids || ids.length === 0) return;
                let self = this;
                let list = this.formatList;
                let idLen = ids.length;
                let selectedItem = null;
                let selectedIndex = -1;
                let id1 = ids[0], id2 = ids[1], id3 = ids[2];

                for (let i1 = 0, len = list.length; i1 < len; i1++) {
                    let first = list[i1];
                    let firstList = first.list || [];
                    let firstSame = id1.toString() === first.id.toString();
                    if (idLen === 1) {
                        if (!firstSame) continue;
                        selectedItem = first;
                        selectedIndex = i1;
                        break;
                    }

                    for (let i2 = 0, len = firstList.length; i2 < len; i2++) {
                        let second = firstList[i2];
                        let secondList = firstList[i2].list || [];
                        let secondSame = id2.toString() === second.id.toString();
                        if (idLen === 2) {
                            let flag2 = (id1 && firstSame || !id1) && secondSame;
                            if (!flag2) continue;
                            selectedItem = second;
                            selectedIndex = i2;
                            first.expand = true;
                            break;
                        }
                        // type= 2  group
                        for (let i3 = 0, len = secondList.length; i3 < len; i3++) {
                            let third = secondList[i3];
                            if (idLen === 3) {
                                let flag3 = (id1 && firstSame || !id1) && (id2 && secondSame || !id2) && id3.toString() === third.id.toString();
                                if (!flag3) continue;
                                selectedItem = third;
                                selectedIndex = i3;
                                first.expand = true;
                                second.expand = true;
                                break;
                            }
                        }
                    }
                }
                selectedItem && this.clickFn(selectedItem, selectedIndex, {noTriggerClick: !(isTriggerClick === true)})
                return this.formatList;
            },

            // 水平菜单点击
            horClick(item, index) {
                this.formatList.forEach((obj, i) => {
                    obj.active = false;
                });
                item.active = true;
                this.$emit('click', item, index, this.formatList)
            }
        },
        components: {
            ArtLeftNavUl
        },
    }
</script>
<style type="text/scss" lang="scss">
    @import '../../../styles/components/_left-nav.scss';
</style>
