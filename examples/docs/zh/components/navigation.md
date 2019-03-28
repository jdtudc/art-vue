<h2 id="menu">Menu 导航菜单</h2>

### 代码演示

:::demo 顶部导航 | 顶部导航菜单 | active用来选中菜单。
```html
<template>
    <art-left-nav :data="navData2" horizontal></art-left-nav>
</template>
<script>
    export default {
        data () {
            return {
                 navData2: [{
                    title: 'nav1',
                    active: true
                 }, {
                    title: 'nav2'
                 }, {
                    title: 'nav3'
                 }],
            }
        }
    }
</script>
```
:::

:::demo 侧栏导航 | 垂直导航菜单，可以内嵌子菜单。 | active用来选中指定子菜单，expand用来展开指定子菜单。
```html
<template>
    <art-left-nav :data="navData" @click="" style="width:220px"></art-left-nav>
</template>
<script>
    export default {
        data () {
            return {
                 navData: [{
                     title: '投放数据1',
                     icon: '//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon1.png',
                     expand: false,
                     list: [{
                         title: '受众分析1_1',

                     }, {
                         title: '报表分析1_2'
                     }]
                 }, {
                     title: '投放数据2',
                     icon: '//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon1.png',
                     expand: true,
                     list: [{
                         title: '受众分析2_1',
                         expand: true,
                         list: [{
                             title: '2-1-1'
                         }, {
                             active: true,
                             title: '2-1-2'
                         }]
                     }, {
                         title: '报表分析2_2'
                     }]
                 }, {
                     title: '人群库3',
                     icon: '//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon1.png',
                 }],
            }
        }
    }
</script>
```
:::

### 侧边导航API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| data | Array [`title[String]` `icon[String]` `expand[Boolean]` `active[Boolean]` `list[Array]`] | 控件数据，`list`格式同`data`，但不能配置图标 | 是 | - |
| type | String | 控件类型：`tree 树形`，默认其他 | 否 | - |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| click | 选中任意一项触发事件 | {Object} {Number} {Array}] | 返回三个参数，第一个为选中项参数，第二个为选中项下标，第三个为修改后的`data`数据 |

---

---

<h2 id="tabs">Tabs 标签页</h2>

### 代码演示

:::demo 基础用法 | active用于标识当前激活的是哪一项，默认激活第一项。
```html
<template>
    <art-tabs :data="tabsData" @on-click="clickTab"></art-tabs>
</template>
<script>
    export default {
        data () {
            return {
                tabsData: [
                    {"id": "0001", "value": "激活态显示", "active": true, "idx": 0},
                    {"id": "0003", "value": "可选显示", "idx": 2},
                    {"id": "0002", "value": "不可选显示", "disabled": true, "idx": 1},
                ]
            }
        },
        methods: {
            clickTab (tab) {
                this.tabsData.forEach((item) => {
                    if(item.id === tab.id) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                })
            },
        }
    }
</script>
```
:::

:::demo 多选项标签用法 | 显示不下的标签隐藏到“...”内，点击触发标签。 | 所有内容都将作为slot传入，示例为结合下拉组件使用。
```html
<template>
    <art-tabs :data="tabsData" :has-extend="true" @on-extend-click="clickTabsExtend" @on-click-outside="clickTabsOutside">
      <div class="dropdown-box" style="position: absolute; left: 5px; top: 24px; z-index:2">
        <art-dropdown :data="dropData" v-if="showTabsExtend" @on-choose="chooseExtendTag"></art-dropdown>
      </div>
    </art-tabs>
</template>
<script>
    export default {
        data () {
            return {
                showTabsExtend: false,
                dropData: [
                  {"id": "0004", "value": "可选拓展项", "idx": 0},
                  {"id": "0005", "value": "激活态拓展项", "active": true, "idx": 1},
                  {"id": "0006", "value": "不可选拓展项", "disabled": true, "idx": 2},
                  {"id": "0007", "value": "可选拓展项", "idx": 3},
                  {"id": "0008", "value": "可选拓展项", "idx": 4},
                  {"id": "0009", "value": "可选拓展项", "idx": 5},
                  {"id": "0010", "value": "可选拓展项", "idx": 6},
                ],
            }
        },
        methods: {
            clickTabsExtend () {
                this.showTabsExtend = !this.showTabsExtend;
            },
            clickTabsOutside () {
                this.showTabsExtend = false;
            },
            chooseExtendTag (tab) {
                console.log("您选中的是" + JSON.stringify(tab));
                this.showTabsExtend = false;
            },
        }
    }
</script>
```
:::

### 标签页API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| data | Array[`value[String 必传]` `active[Boolean 默认false]` `disabled[Boolean 默认false]`] | 标签数据 | 是 | - |
| hasExtend | Boolean | 是否有隐藏项，如果有，所有内容都将作为隐藏项，参考示例 | 否 | `false` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-click | 点击标签项触发 | {Object} | 入参`data`中的点击项 |
| on-extend-click | 点击“...”触发 | - | - |
| on-click-outside | 只有当`hasExtend:true`时存在，点击隐藏内容外部触发，一般做收起操作 | - | - |

---

<h2 id="page">Page 分页</h2>

### 代码演示

:::demo 基础用法 | 基本的分页，页数过多时会自动折叠。
```html
<template>
    <art-page :total="paginationData.length" :page-size="pageSize" :fast-size="10" :now="pageNow" @on-change="changePage"></art-page>
</template>
<script>
    export default {
        data () {
            return {
                pageSize: 20,
                pageNow: 1,
                paginationData: new Array(22).fill(0).map((_, index) => {
                    { id: String(index + 1)}
                })
            }
        },
        methods: {
            changePage(page) {
                this.pageNow = page
            }
        }
    }
</script>
```
:::

:::demo 加改变器用法 | 改变每页显示条目数。 | 当只有1页内容时，分页会自动隐藏。
```html
<template>
    <art-pagination :total="paginationData.length" :page-size="pageSize2" :fast-size="10" :now="pageNow2" :data="pageControllerData2" @on-change="changePage2" @on-choose="choosePageSize2"></art-pagination>
</template>
<script>
    export default {
        data () {
            return {
                pageSize2: 20,
                pageNow2: 1,
                paginationData: new Array(22).fill(0).map((_, index) => {
                    { id: String(index + 1)}
                }),
                pageControllerData2: [
                    {num: 20, idx: 0, value: "20 条/页", active: true},
                    {num: 50, idx: 1, value: "50 条/页", active: false},
                    {num: 100, idx: 2, value: "100 条/页", active: false, disabled: true},
                    {num: 200, idx: 3, value: "200 条/页", active: false},
                    {num: 1, idx: 4, value: "1 条/页", active: false},
                ]
            }
        },
        methods: {
            choosePageSize2(pageSize) {
                this.pageSize2 = pageSize.num;
                this.pageControllerData2.forEach((item) => {
                    if(item.num == pageSize.num) {
                        item.active = true;
                  } else {
                        item.active = false;
                  }
                })
            },
            changePage2(page) {
                this.pageNow2 = page
            }
        }
    }
</script>
```
:::

:::demo 改变器单独使用
```html
<template>
    <art-page-size :total="22" :data="pageControllerData3" @on-choose="choosePageSize3"></art-page-size>
</template>
<script>
    export default {
        data () {
            return {
                pageControllerData3: [
                    {num: 20, idx: 0, value: "20 条/页", active: true},
                    {num: 50, idx: 1, value: "50 条/页", active: false},
                    {num: 100, idx: 2, value: "100 条/页", active: false, disabled: true},
                    {num: 200, idx: 3, value: "200 条/页", active: false},
                    {num: 1, idx: 4, value: "1 条/页", active: false},
                ]
            }
        },
        methods: {
            choosePageSize(pageSize) {
                this.pageControllerData3.forEach((item, index) => {
                    if(item.idx == pageSize.idx) {
                        item.active = true;
                  } else {
                        item.active = false;
                  }
                })
            }
        }
    }
</script>
```
:::

### 分页器API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| now | Number | 分页使用参数，当前页 | 否 | `1` |
| pageSize | Number | 分页使用参数，每页显示数量 | 否 | `10` |
| fastSize | Number | 分页使用参数，快速切换页数 | 否 | `5` |
| total | Number | 数量控制和分页共用参数，总条数 | 是 | - |
| data | Array[`value[String 必传]` `num[Number 必传]` `active[Boolean 默认false]` `disabled[Boolean 默认false]`] | 数量控制使用参数，数量控制数据 | 是 | - |
| transAni | String | 数量控制使用参数，动画名称，默认向下淡出，如修改需定义样式 | 否 | `fade-in-move-in-up` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-change | 分页事件，点击页数触发 | {Number} | 选中的是第几页 |
| on-choose | 数量控制事件，点击数量控制选项触发 | {Object} | 入参`data`中的点击项 |

---

<h2 id="breadcrumb">Breadcrumb 面包屑</h2>

### 代码演示

:::demo 基础用法 | 最基础的用法，通过设置Array中数据的path属性添加链接。
```html
<template>
    <art-breadcrumb :s-p-a="false" :data="breadcrumbData"></art-breadcrumb>
</template>
<script>
    export default {
        data () {
            return {
                breadcrumbData: [
                  {id: "0001", value: "京东金融", idx: 0, path: "https://jr.jd.com"},
                  {id: "0002", value: "京东金融", idx: 1, path: "https://jr.jd.com"},
                  {id: "0003", value: "京东金融", active: true, idx: 2, path: "https://jr.jd.com"},
                  {id: "0004", value: "京东金融", disabled: true, idx: 3, path: "https://jr.jd.com"},
                ]
            }
        }
    }
</script>
```
:::

:::demo 自定义点击事件
```html
<template>
    <art-breadcrumb :custom-click="true" :data="breadcrumbData" @on-click="clickBreadcrumb"></art-breadcrumb>
</template>
<script>
    export default {
        data () {
            return {
                breadcrumbData: [
                  {id: "0001", value: "京东金融", active: false, idx: 0, path: "https://jr.jd.com"},
                  {id: "0002", value: "京东金融", active: false, idx: 1, path: "https://jr.jd.com"},
                  {id: "0003", value: "京东金融", active: true, idx: 2, path: "https://jr.jd.com"},
                  {id: "0004", value: "京东金融", active: false, disabled: true, idx: 3, path: "https://jr.jd.com"},
                ]
            }
        },
        methods: {
            clickBreadcrumb (breadcrumb) {
                this.breadcrumbData.forEach((item) => {
                    if(item.id === breadcrumb.id) {
                        item.active = true;
                  } else {
                        item.active = false;
                  }
                })
            }
        }
    }
</script>
```
:::

### 面包屑API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| data | Array[`value[String 必传]` `active[Boolean 默认false]` `disabled[Boolean 默认false]`] | 面包屑数据 | 是 | - |
| customClick | Boolean | 是否需要自定义点击事件 | 否 | `false` |
| SPA | Boolean | 是否单页应用，在非自定义点击事件生效 | 否 | `true` |
| history | Boolean | 是否增加history，在非自定义点击事件生效 | 否 | `true` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-click | 非自定义点击事件且未配置路径时，点击都将触发该事件 | {Object} {Object} | 第一个参数是入参`data`中的点击项，第二个参数是Event |

---

<h2 id="steps">Steps 步骤条</h2>

### 代码演示

:::demo 基础用法 | 配置active和finish属性来改变当前步骤状态。 | 配置desc属性来增加描述。
```html
<template>
    <art-steps :data="stepsData" style="margin-bottom: 40px"></art-steps>
    <art-steps :data="stepsData2"></art-steps>
</template>
<script>
    export default {
        data () {
            return {
                stepsData: [
                    {id: "0001", title: "已完成", desc: "", finish: true},
                    {id: "0002", title: "进行中", desc: "", active: true},
                    {id: "0003", title: "待进行", desc: ""},
                ],
                stepsData2: [
                    {id: "0001", title: "已完成", desc: "我是描述", finish: true},
                    {id: "0002", title: "进行中", desc: "我是描述", active: true},
                    {id: "0003", title: "待进行", desc: "我是描述"},
                ],
            }
        }
    }
</script>
```
:::

:::demo 垂直方向 | 配置direction属性来改变方向。
```html
<template>
    <art-steps :data="stepsData" direction="vertical" style="height: 255px; width: 150px; display: inline-block;"></art-steps>
    <art-steps :data="stepsData2" direction="vertical" style="height: 255px; width: 150px; display: inline-block;"></art-steps>
</template>
<script>
    export default {
        data () {
            return {
                stepsData: [
                    {id: "0001", title: "已完成", desc: "我是描述", finish: true},
                    {id: "0002", title: "进行中", desc: "", active: true},
                    {id: "0003", title: "待进行", desc: ""},
                ],
                stepsData2: [
                    {id: "0001", title: "已完成", desc: "我是描述", finish: true},
                    {id: "0002", title: "进行中", desc: "我是描述", active: true},
                    {id: "0003", title: "待进行", desc: "我是描述"},
                ],
            }
        }
    }
</script>
```
:::

### 步骤条API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| data | Array[`title[String]` `desc[String]` `active[Boolean 默认false]` `finish[Boolean 默认false]`] | 步骤条数据 | 是 | - |
| direction | String | 步骤条方向：`horizontal 水平` `vertical 垂直` | 否 | `horizontal` |

---

<h2 id="timeline">Timeline 时间轴</h2>

### 代码演示

:::demo 基础用法 | 最简单定义一个时间轴的用法。
```html
<template>
    <art-timeline>
        <p class="time" style="font-size: 20px">2017</p>
        <p class="cont" style="font-size: 14px; margin-top:5px;">2017大事件</p>
    </art-timeline>
    <art-timeline>
        <p class="time" style="font-size: 20px">2016</p>
        <p class="cont" style="font-size: 14px; margin-top:5px;">2016大事件</p>
    </art-timeline>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
```
:::

:::demo icon状态 | 提供 success 、 error 和 disabled 三种，默认是 disabled
```html
<template>
    <art-timeline status="success">
        <p class="time" style="font-size: 20px">2017</p>
        <p class="cont" style="font-size: 14px; margin-top:5px;">2017大事件</p>
    </art-timeline>
    <art-timeline status="error">
        <p class="time" style="font-size: 20px">2016</p>
        <p class="cont" style="font-size: 14px; margin-top:5px;">2016大事件</p>
    </art-timeline>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
```
:::

:::demo 特殊用法 | 专为changelog定义使用
```html
<template>
    <art-timeline type="changelog" v-for="(log, index) in changeLog" :key="index" :log="log"></art-timeline>
</template>
<script>
    export default {
        data () {
            return {
                changeLog: [{
                    version: "0.2.1", date: "2018-01-15", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复page/pageSize中border在FF下显示异常的问题"
                    }]
                }, {
                    version: "0.2.0", date: "2017-01-12", status: 'success', changeList: [{
                        "type": "feature", "desc": "增加alert/badge/card/tag四个组件"
                    }, {
                        "type": "chore", "desc": "优化内置滚动条指令"
                    }, {
                        "type": "fix", "desc": "修复分页页数不更新的问题"
                    }]
                }]
            }
        }
    }
</script>
```
:::

### 时间轴API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| status | String | 时间轴状态：`success 成功` `error 错误` `disabled 禁用` | 否 | `disabled` |
| type | String | 时间轴类型：`changelog 定制使用` | 否 | - |
| log | Object[`version[String]` `date[String]` `status[String]` `changeList[Array[type[String] desc[String]]]` `issueHref[String]` `issueNo[Number]`]  |  `type` 为 `changelog` 时使用 | 否 | - |

---

<script>
    export default {
        data() {
            return {
                changeLog: [{
                    version: "0.2.1", date: "2018-01-15", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复page/pageSize中border在FF下显示异常的问题"
                    }]
                }, {
                    version: "0.1.0", date: "2017-01-12", status: 'success', changeList: [{
                        "type": "feature", "desc": "增加alert/badge/card/tag四个组件"
                    }, {
                        "type": "chore", "desc": "优化内置滚动条指令"
                    }, {
                        "type": "fix", "desc": "修复分页页数不更新的问题"
                    }]
                }],
                navData2: [{
                    title: 'nav1',
                    active: true
                 }, {
                    title: 'nav2'
                 }, {
                    title: 'nav3'
                 }],
                navData: [{
                     title: '投放数据1',
                     icon: '//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon1.png',
                     expand: false,
                     list: [{
                         title: '受众分析1_1',

                     }, {
                         title: '报表分析1_2'
                     }]
                 }, {
                     title: '投放数据2',
                     icon: '//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon1.png',
                     expand: true,
                     list: [{
                         title: '受众分析2_1',
                         expand: true,
                         list: [{
                             title: '2-1-1'
                         }, {
                             active: true,
                             title: '2-1-2'
                         }]
                     }, {
                         title: '报表分析2_2'
                     }]
                 }, {
                     title: '人群库3',
                     icon: '//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon1.png',
                 }],
                tabsData: [
                    {"id": "0001", "value": "激活态显示", "active": true, "idx": 0},
                    {"id": "0003", "value": "可选显示", "idx": 2},
                    {"id": "0002", "value": "不可选显示", "disabled": true, "idx": 1},
                ],
                showTabsExtend: false,
                dropData: [
                  {"id": "0004", "value": "可选拓展项", "idx": 0},
                  {"id": "0005", "value": "激活态拓展项", "active": true, "idx": 1},
                  {"id": "0006", "value": "不可选拓展项", "disabled": true, "idx": 2},
                  {"id": "0007", "value": "可选拓展项", "idx": 3},
                  {"id": "0008", "value": "可选拓展项", "idx": 4},
                  {"id": "0009", "value": "可选拓展项", "idx": 5},
                  {"id": "0010", "value": "可选拓展项", "idx": 6},
                ],
                pageSize: 20,
                pageSize2: 20,
                pageNow: 1,
                pageNow2: 1,
                paginationData: new Array(22).fill(0).map((_, index) => {
                    { id: String(index + 1)}
                }),
                pageControllerData: [
                    {num: 20, idx: 0, value: "20 条/页", active: true},
                    {num: 50, idx: 1, value: "50 条/页", active: false},
                    {num: 100, idx: 2, value: "100 条/页", active: false, disabled: true},
                    {num: 200, idx: 3, value: "200 条/页", active: false},
                    {num: 1, idx: 4, value: "1 条/页", active: false},
                ],
                pageControllerData2: [
                    {num: 20, idx: 0, value: "20 条/页", active: true},
                    {num: 50, idx: 1, value: "50 条/页", active: false},
                    {num: 100, idx: 2, value: "100 条/页", active: false, disabled: true},
                    {num: 200, idx: 3, value: "200 条/页", active: false},
                    {num: 1, idx: 4, value: "1 条/页", active: false},
                ],
                pageControllerData3: [
                    {num: 20, idx: 0, value: "20 条/页", active: true},
                    {num: 50, idx: 1, value: "50 条/页", active: false},
                    {num: 100, idx: 2, value: "100 条/页", active: false, disabled: true},
                    {num: 200, idx: 3, value: "200 条/页", active: false},
                    {num: 1, idx: 4, value: "1 条/页", active: false},
                ],
                breadcrumbData: [
                    {id: "0001", value: "京东金融", active: false, idx: 0, path: "https://jr.jd.com"},
                    {id: "0002", value: "京东金融", active: false, idx: 1, path: "https://jr.jd.com"},
                    {id: "0003", value: "京东金融", active: true, idx: 2, path: "https://jr.jd.com"},
                ],
                 stepsData: [
                    {id: "0001", title: "已完成", desc: "", finish: true},
                    {id: "0002", title: "进行中", desc: "", active: true},
                    {id: "0003", title: "待进行", desc: ""},
                ],
                stepsData2: [
                    {id: "0001", title: "已完成", desc: "我是描述", finish: true},
                    {id: "0002", title: "进行中", desc: "我是描述", active: true},
                    {id: "0003", title: "待进行", desc: "我是描述"},
                ],
            }
        },
        methods: {
             clickTab (tab) {
                this.tabsData.forEach((item) => {
                    if(item.id === tab.id) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                })
            },
            clickTabsExtend () {
                this.showTabsExtend = !this.showTabsExtend;
            },
            clickTabsOutside () {
                this.showTabsExtend = false;
            },
            chooseExtendTag (tab) {
                console.log("您选中的是" + JSON.stringify(tab));
                this.showTabsExtend = false;
            },
            choosePageSize(pageSize) {
                this.pageSize = pageSize.num;
                this.pageControllerData.forEach((item) => {
                    if(item.num === pageSize.num) {
                        item.active = true;
                  } else {
                        item.active = false;
                  }
                })
            },
            choosePageSize2(pageSize) {
                this.pageSize2 = pageSize.num;
                this.pageControllerData2.forEach((item) => {
                    if(item.num === pageSize.num) {
                        item.active = true;
                  } else {
                        item.active = false;
                  }
                })
            },
            choosePageSize3(pageSize) {
                this.pageControllerData3.forEach((item, index) => {
                    if(item.idx == pageSize.idx) {
                        item.active = true;
                  } else {
                        item.active = false;
                  }
                })
            },
            changePage(page) {
                this.pageNow = page
            },
            changePage2(page) {
                this.pageNow2 = page
            },
            clickBreadcrumb (breadcrumb) {
                this.breadcrumbData.forEach((item) => {
                    if(item.id === breadcrumb.id) {
                        item.active = true;
                  } else {
                        item.active = false;
                  }
                })
            }
        }
    }
</script>
