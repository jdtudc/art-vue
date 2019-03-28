<h2 id="alert">Alert 警告提示</h2>

### 代码演示

:::demo 基础用法 | 根据 type 属性自动添加不同图表，自定义name为desc的slot增加描述内容。
```html
<template>
    <art-alert type="success">一段成功文案</art-alert>
    <art-alert type="warning">一段警示文案</art-alert>
    <art-alert type="error">一段报错文案</art-alert>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

### 警告提示API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| type | String | 类型: `1 对话框` `2 提示框` `3 插件使用错误提示框` | 否 | `2` |

---

<h2 id="card">Card 卡片</h2>

### 代码演示

:::demo 基础用法 | 阴影和卡片圆角大小要固定 | 自定义其他内容，可以结合其他组件一起使用，较为灵活
```html
<template>
    <art-card active>
        <h4>今日消费</h4>
        <h2>8,335,146.58</h2>
        <p>同比昨日<span class="down">-0.34%</span></p>
    </art-card>
    <art-card>
        <h4>今日点击率</h4>
        <h2>2.36%</h2>
        <p>同比昨日<span>2.78%</span></p>
    </art-card>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

### 卡片API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| active | Boolean | 是否需要激活 | 否 | `false` |

---

<h2 id="modal">Modal 对话框</h2>

### 代码演示

:::demo 基础用法 | 通过控制属性 show 来显示 / 隐藏对话框。
```html
<template>
    <art-button @click="toggleModal1">显示对话框</art-button>
    <art-modal :show="modal1.show" title="对话框标题" @on-cancel="toggleModal1" @on-save="toggleModal1">
        <p style="padding: 40px 20px; font-size: 14px;">自定义内容，所有内容均会传入Modal</p>
    </art-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: {
                    show: "false",
                }
            }
        },
        methods: {
            toggleModal1 () {
                this.modal1.show = !this.modal1.show;
            }
        }
    }
</script>
```
:::

:::demo 不带关闭的确认对话框 | 只提供一个确定按钮。
```html
<template>
    <art-button type="blue" @click="toggleModal2">成功</art-button>
    <art-modal :show="modal2.show" :type="'1'" result-title="这里是成功文案" result-status="success" @on-cancel="toggleModal2" @on-finish="toggleModal2">描述文案</art-modal>
    <art-button type="blue" @click="toggleModal3">警告</art-button>
    <art-modal :show="modal3.show" :type="'1'" result-title="这里是警告文案" result-status="warning" @on-cancel="toggleModal3" @on-finish="toggleModal3"></art-modal>
    <art-button type="blue" @click="toggleModal4">失败</art-button>
    <art-modal :show="modal4.show" :type="'1'" result-title="这里是失败文案" result-status="error" @on-cancel="toggleModal4" @on-finish="toggleModal4"></art-modal>
    <art-button type="blue" @click="showModalPlugin">插件形式调用</art-button>
</template>
<script>
    import Modal from 'art-vue/components/modal/modal'
    export default {
        data () {
            return {
                modal2: {
                    show: "false",
                },
                modal3: {
                    show: "false",
                },
                modal4: {
                    show: "false",
                }
            }
        },
        methods: {
            showModalPlugin() {
                Modal.show("自定义错误提示内容", () => {
                    alert("点击了自定义事件")
                })
            },
            toggleModal2 () {
                this.modal2.show = !this.modal2.show;
            },
            toggleModal3 () {
                this.modal3.show = !this.modal3.show;
            },
            toggleModal4 () {
                this.modal4.show = !this.modal4.show;
            }
        }
    }
</script>
```
:::

:::demo 自定义按钮和内容
```html
<template>
    <art-button type="blue" @click="toggleModal5">自定义按钮且遮罩不可点击</art-button>
    <art-modal :show="modal5.show" :type="'1'" result-title="自定义弹框标题" result-status="success">
        您可以去 <a href="javascript:;">新增计划</a>，或去 <a href="javascript:;">单元管理</a>添加此创意
        <art-button type="main" size="large" @click="toggleModal5" slot="result-btn">完成</art-button>
        <art-button type="minor" size="large" @click="toggleModal5" slot="result-btn">取消</art-button>
    </art-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal5: {
                    show: "false",
                }
            }
        },
        methods: {
            toggleModal5 () {
                this.modal5.show = !this.modal5.show;
            }
        }
    }
</script>
```
:::

### 对话框API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| overlay | Boolean | 是否需要遮罩 | 否 | `true` |
| overlayClose | Boolean | 点击遮罩是否需要触发取消事件 | 否 | `true` |
| overlayTransition | String | 遮罩动画名称，默认内置渐隐，如修改需定义样式 | 否 | `fade` |
| modalTransition | String | 对话框动画名称，默认内置缩放，如修改需定义样式 | 否 | `scale` |
| show | Boolean | 是否显示对话框 | 是 | - |
| resultStatus | String | type为`1`特有，状态：`success 成功` `warning 警告` `error 错误` | 是 | - |
| resultTitle | String | type为`1`特有，对话框标题 | 是 | - |
| type | String | 类型: `1 对话框` `2 提示框` `3 插件使用错误提示框` | 否 | `2` |
| showHeaderBtn | Boolean | type为`2`特有，是否需要右上角关闭 | 否 | `true` |
| title | String | type为`2`特有，对话框标题 | 是 | - |
| errorText | String | type为`3`特有，对话框提示内容 | 否 | `网络异常，请稍后重试` |
| errorFn | String | type为`3`特有，对话框点击确认回调 | 否 | - |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-cancel | 点击取消按钮/关闭按钮/遮罩触发的取消事件 | - | - |
| on-finish | type为`1`特有，点击完成按钮触发的取消事件 | - | - |
| on-save | type为`2`特有，点击保存按钮触发的取消事件 | - | - |

### 插槽

| 插槽名称 | 插槽说明 |
| :-------- | :--------|
| result-icon | type为`1`和`3`特有，结果图标区域配置 |
| result-title | type为`1`和`3`特有，结果标题区域配置 |
| result-btn | type为`1`和`3`特有，结果按钮区域配置 |
| header-title | type为`2`特有，头部标题区域配置 |
| header-btn | type为`2`特有，头部按钮区域配置 |
| footer | type为`2`特有，footer 按钮区域配置 |

---

<h2 id="badge">Badge 徽标数</h2>

### 代码演示

:::demo 基础用法 | 最简单的使用方法 | 可以通过 bgColor 配置颜色
```html
<template>
    <div class="demo-badge-1">
        <art-badge count="3"></art-badge>
    </div>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

:::demo 小圆点 | 提示用户哪些内容是心得没有浏览点击过的
```html
<template>
    <div class="demo-badge-2">
        <div class="art-badge-example active">
            通知
        </div>
        <div class="art-badge-example">
            公告
            <art-badge dot></art-badge>
        </div>
    </div>
    <div class="demo-badge-3">
        <div class="demo-badge-3-item"><art-badge dot></art-badge>「广告营销」广告主审核 60 条</div>
        <div class="demo-badge-3-item">「广告营销」创意审核 13 条</div>
    </div>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

:::demo 封顶数字 | 通过设置 limit 属性设置一个上限值，当超过时，会显示 ${limit}+
```html
<template>
    <div class="demo-badge-1">
        <art-badge count="100" limit="99"></art-badge>
    </div>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

### 徽标数API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| dot | Boolean | 是否设置为小圆点类型 | 否 | `false` |
| count | Number \| String | 显示数字 | 是 | - |
| limit | Number \| String | 封顶数字 | 否 | `99` |
| bgColor | String | 背景颜色，可以是 red 或者 #f0f0f0 | 否 | - |

---

<h2 id="tag">Tag 标签</h2>

### 代码演示

:::demo 基础用法 | 六种不同的颜色。对应不同的提示等级，按照应用场景选择使用
```html
<template>
    <art-tag>标签一</art-tag>
    <art-tag level="2">标签二</art-tag>
    <art-tag level="3">标签三</art-tag>
    <art-tag level="4">标签四</art-tag>
    <art-tag level="5">标签五</art-tag>
    <art-tag level="6">标签六</art-tag>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

### 标签API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| level | String \| Number | 提示等级，提供1-6，可自定义 | 否 | `1` |

---

<h2 id="tooltip">Tooltip 文字提示</h2>

### 代码演示

:::demo 基础用法 | 最简单的用法 | 注意 <code>Tooltip</code> 内的文本使用了 <code>white-space: nowrap</code> ，即不自动换行，如需展示很多内容并自动换行时，建议给内容 <code>slot</code> 增加样式 <code>white-space: normal</code>
```html
<template>
    <art-tooltip content="我是提示语"><p style="color: #0074ff; font-size: 14px; font-weight: bold;">当鼠标经过这段文字时，会显示一个气泡框</p></art-tooltip>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

:::demo 自定义内容 | 可以通过 <code>slot="content"</code> 的方式设置提示内容
```html
<template>
    <art-tooltip>
        <art-button type="minor">按钮</art-button>
        <div slot="content">
            <p>内容</p>
            <p>内容二</p>
        </div>
    </art-tooltip>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

:::demo 位置 | 组件提供了12个不同方向显示 <code>Tooltip</code> ，具体配置可查看API
```html
<template>
    <div class="row flex-center">
      <div class="col-6">
        <art-tooltip content="Top Left 文字提示" placement="top-left">
            <art-button type="minor">上左</art-button>
        </art-tooltip>
      </div>
      <div class="col-6">
        <art-tooltip content="Top 文字提示" placement="top">
            <art-button type="minor">上边</art-button>
        </art-tooltip>
      </div>
      <div class="col-6">
        <art-tooltip content="Top Right 文字提示" placement="top-right">
            <art-button type="minor">上右</art-button>
        </art-tooltip>
      </div>
    </div>
    <div class="row flex-between">
      <div class="col-6">
        <art-tooltip content="Left Top 文字提示" placement="left-top">
            <art-button type="minor">左上</art-button>
        </art-tooltip>
      </div>
      <div class="col-6">
        <art-tooltip content="Right Top 文字提示" placement="right-top">
            <art-button type="minor">右上</art-button>
        </art-tooltip>
      </div>
    </div>
    <div class="row flex-between">
      <div class="col-6">
        <art-tooltip content="Left 文字提示" placement="left">
            <art-button type="minor">左边</art-button>
        </art-tooltip>
      </div>
      <div class="col-6">
        <art-tooltip content="Right 文字提示" placement="right">
            <art-button type="minor">右边</art-button>
        </art-tooltip>
      </div>
    </div>
    <div class="row flex-between">
      <div class="col-6">
        <art-tooltip content="Left Bottom 文字提示" placement="left-bottom">
            <art-button type="minor">左下</art-button>
        </art-tooltip>
      </div>
      <div class="col-6">
        <art-tooltip content="Right Bottom 文字提示" placement="right-bottom">
            <art-button type="minor">右下</art-button>
        </art-tooltip>
      </div>
    </div>
    <div class="row flex-center">
      <div class="col-6">
        <art-tooltip content="Bottom Left 文字提示" placement="bottom-left">
            <art-button type="minor">下左</art-button>
        </art-tooltip>
      </div>
      <div class="col-6">
        <art-tooltip content="Bottom 文字提示" placement="bottom">
            <art-button type="minor">下边</art-button>
        </art-tooltip>
      </div>
      <div class="col-6">
        <art-tooltip content="Bottom Right 文字提示" placement="bottom-right">
            <art-button type="minor">下右</art-button>
        </art-tooltip>
      </div>
    </div>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

### 文字提示API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| trans | String | 提示框显隐动画名称，默认内置了 `fade` ，如需自定义则需自己定义动画样式 | 否 | `fade` |
| show | Boolean | 是否默认显示弹框 | 否 | `false` |
| content | String \| Number | 显示的内容 | 否 | - |
| placement | String | 提示框出现的位置，可选值为 `top` `top-left` `top-right` `left` `left-top` `left-bottom` `bottom` `bottom-left` `bottom-right` `right` `right-top` `right-bottom` | 否 | `top` |

---

<h2 id="tree">Tree 树形控件</h2>

### 代码演示

:::demo 树形图 | 最简单的用法，展示可选中，默认展开功能。
```html
<template>
    <art-left-nav :data="navData" type="tree" @click="clickNav" style="width:220px"></art-left-nav>
</template>
<script>
    export default {
        data () {
            return {
                 navData: [{
                     title: '投放数据1',
                     icon: '//storage.360buyimg.com/static-res/tech/jrv/1.0.0/temp/nav_icon.png',
                     expand: false,
                     list: [{
                         title: '受众分析1_1',

                     }, {
                         title: '报表分析1_2'
                     }]
                 }, {
                     title: '投放数据2',
                     icon: '//storage.360buyimg.com/static-res/tech/jrv/1.0.0/temp/nav_icon.png',
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
                     icon: '//storage.360buyimg.com/static-res/tech/jrv/1.0.0/temp/nav_icon.png',
                 }],
            }
        },
        methods: {
            clickNav (item, index, list) {
                this.navData = list;
            }
        }
    }
</script>
```
:::

### 树形控件API

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

<script>
    import Modal from '../../../../src/components/modal/modal'
    export default {
        data() {
            return {
                modal1: {
                    show: false,
                },
                modal2: {
                    show: false,
                },
                modal3: {
                    show: false,
                },
                modal4: {
                    show: false,
                },
                modal5: {
                    show: false,
                },
                navData: [{
                     title: '投放数据1',
                     icon: '//storage.360buyimg.com/static-res/tech/jrv/1.0.0/temp/nav_icon.png',
                     expand: false,
                     list: [{
                         title: '受众分析1_1',

                     }, {
                         title: '报表分析1_2'
                     }]
                 }, {
                     title: '投放数据2',
                     icon: '//storage.360buyimg.com/static-res/tech/jrv/1.0.0/temp/nav_icon.png',
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
                     icon: '//storage.360buyimg.com/static-res/tech/jrv/1.0.0/temp/nav_icon.png',
                 }],
            }
        },
        methods: {
            showModalPlugin() {
                Modal.show("自定义错误提示内容", () => {
                    alert("触发自定义事件")
                })
            },
            toggleModal1() {
                this.modal1.show = !this.modal1.show
            },
            toggleModal2() {
                this.modal2.show = !this.modal2.show
            },
            toggleModal3() {
                this.modal3.show = !this.modal3.show
            },
            toggleModal4() {
                this.modal4.show = !this.modal4.show
            },
            toggleModal5() {
                this.modal5.show = !this.modal5.show
            },
            clickNav (item, index, list) {
                this.navData = list;
            }
        }
    }
</script>
