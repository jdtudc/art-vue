<h2 id="input">Input 输入框</h2>

### 代码演示

:::demo 基础用法 | 基本用法，可以使用 v-model 实现数据的双向绑定。 | 可以直接设置 style 来改变输入框的宽度，默认 100%。
```html
<template>
    <art-input placeholder="请输入姓名"></art-input>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 尺寸 | 输入框有三种尺寸：大、默认（中）、小 | 通过设置 size 为 large 和 small 设置为大和小尺寸，不设置为默认（中）尺寸。
```html
<template>
    <art-input size="large" placeholder="大尺寸"></art-input>
    <art-input placeholder="默认尺寸"></art-input>
    <art-input size="small" placeholder="小尺寸"></art-input>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 带单位的输入框 | 有时需要加单位说明输入内容的,，单位放置输入框尾部。
```html
<template>
    <art-input placeholder="" unit="元"></art-input>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 禁用状态 | 通过添加disabled属性可设置为不可用状态。
```html
<template>
    <art-input placeholder="斯嘉丽" disabled></art-input>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 状态反馈 | 如果需要验证的输入，给一个反馈正确的状态 | 如果输入内容不正确，提示报错。
```html
<template>
    <art-input placeholder="请输入手机号" value="138001001123" status="success"></art-input>
    <art-input placeholder="请输入手机号" status="error" error-pos="right" error-text="手机号不能为空"></art-input>
    <br />
    <art-input placeholder="请输入姓名" status="error" error-text="错误信息"></art-input>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 无框输入 | 无框输入一般应用在搜索。
```html
<template>
    <art-input placeholder="请输入姓名" :border="false" icon="//storage.360buyimg.com/static-res/tech/jrv/1.0.0/input/search.png" icon-pos="left"></art-input>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 自定义图标/位置 | 任何参数都可以组合使用。
```html
<template>
     <art-input placeholder="请输入姓名" :clear="true" icon="//storage.360buyimg.com/static-res/tech/jrv/1.0.0/input/search.png"></art-input>
</template>
<script>
    export default {
    }
</script>
```
:::

### 输入框API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| type | String | 输入框type: `text` `password` | 否 | `text` |
| size | String | 输入框尺寸: `large` `small` `middle` | 否 | `middle` |
| status | String | 输入框状态: `success` `error` `search` | 否 | `middle` |
| errorPos | String | 错误提示位置，默认下方，可设置为右侧 `right` | 否 | - |
| errorText | String | 错误提示文案 | 否 | - |
| errorStyle | String | 错误文案样式，主要用来自定义宽度 | 否 | - |
| unit | String | 单位 | 否 | - |
| icon | String | 图标链接 | 否 | - |
| iconPos | String | 图标位置: `left` `right` | 否 | `right` |
| clear | Boolean | 输入内容后，是否显示清除按钮 | 否 | `false` |
| border | Boolean | 是否需要边框 | 否 | `true` |
| value | String\|Number | 输入框value | 否 | - |
| name | String | 输入框name | 否 | - |
| placeholder | String | 输入框placeholder | 否 | - |
| autocomplete | Boolean | 输入框autocomplete | 否 | `false` |
| readonly | Boolean | 输入框readonly | 否 | `false` |
| disabled | Boolean | 输入框disabled | 否 | `false` |
| autofocus | Boolean | 输入框autofocus | 否 | `false` |
| maxlength | Number | 输入框maxlength | 否 | - |
| minlength | Number | 输入框minlength | 否 | - |

#### 事件：

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| input | input触发 | Stirng\|Number | 输入框value |
| enter | 键盘enter触发 | Object | Event |
| keyup | keyup触发 | Object | Event |
| keydown | keydown触发 | Object | Event |
| keypress | keypress触发 | Object | Event |
| click | click触发 | Object | Event |
| focus | focus触发 | Object | Event |
| blur | blur触发 | Object | Event |
| change | change触发 | - | - |
| clearValue | change触发 | - | - |

---

<h2 id="textarea">Textarea 多行输入框</h2>

### 代码演示

:::demo 基础用法 | 设置 autoSize 属性可以让宽高自适应 | 样式和事件可参考 Input 输入框
```html
<template>
    <art-textarea :auto-size="{minRows: 2, maxRows: 3}" placeholder="最小2行,最大3行"></art-textarea>
    <art-textarea :disabled="true" placeholder="禁用"></art-textarea>
</template>
<script>
    export default {
    }
</script>
```
:::

### 多行输入框API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| size | String | 尺寸: `large` `small` `middle` | 否 | `middle` |
| value | String | 绑定value值 | 否 | - |
| name | String | 输入框name | 否 | - |
| placeholder | String | 输入框placeholder | 否 | - |
| autocomplete | Boolean | 输入框autocomplete | 否 | `false` |
| readonly | Boolean | 输入框readonly | 否 | `false` |
| disabled | Boolean | 输入框disabled | 否 | `false` |
| autofocus | Boolean | 输入框autofocus | 否 | `false` |
| maxlength | Number | 输入框maxlength | 否 | - |
| rows | Number | 行数 | 否 | `2` |
| spellcheck | Boolean | 是否开启拼写检查 | 否 | `false` |
| autoSize | Number \| Object | 是否自动适应宽高，如果设置为 `Object`，则可配置 `minRows` 和 `maxRows` | 否 | `true` |

#### 事件：

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| input | input触发 | Stirng | 输入框value |
| enter | 键盘enter触发 | Object | Event |
| keyup | keyup触发 | Object | Event |
| keydown | keydown触发 | Object | Event |
| keypress | keypress触发 | Object | Event |
| click | click触发 | Object | Event |
| focus | focus触发 | Object | Event |
| blur | blur触发 | Object | Event |
| change | input触发 | - | - |

---

<h2 id="radio">Radio 单选框</h2>

### 代码演示

:::demo 基础用法 | Radio的内容将内嵌到最后。
```html
<template>
    <art-radio :value="radio.value" :active="radio.active" :disabled="radio.disabled" v-for="radio in radioData" :key="radio.id" @click.native="!radio.disabled && clickRadio(radio)"></art-radio>
</template>
<script>
    export default {
        data () {
            return {
                radioData: [
                    {"id": "0001", "value": "web", "active": false, "disabled": false},
                    {"id": "0002", "value": "iOS应用", "active": true, "disabled": false},
                    {"id": "0003", "value": "Android应用", "active": false, "disabled": true},
                    {"id": "0004", "value": "混合应用", "active": true, "disabled": true}
                ]
            }
        },
        methods: {
            clickRadio (item) {
                this.radioData.forEach((radio) => {
                    if(radio.id === item.id) {
                        radio.active = true;
                    } else {
                        radio.active = false;
                    }
                })
            }
        }
    }
</script>
```
:::

### 单选框API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| value | String | 单选框value | 是 | - |
| active | Boolean | 是否选中 | 否 | `false` |
| disabled | Boolean | 是否禁用 | 否 | `false` |

### 事件

> 考虑到数据均由外部传入，不推送事件，可以在外部自行定义，比如：`@click.native='doSth'`

---

<h2 id="checkbox">Checkbox 多选框</h2>

### 代码演示

:::demo 基础用法 | Checkbox的内容将内嵌到最后。
```html
<template>
    <art-checkbox :value="checkbox.value" :active="checkbox.active" :disabled="checkbox.disabled" :partial="checkbox.partial" v-for="checkbox in checkboxData" :key="checkbox.id" @click.native="!checkbox.disabled && clickCheckbox(checkbox)"></art-checkbox>
</template>
<script>
    export default {
        data () {
            return {
                checkboxData: [
                    {"id": "0001", "value": "2G", "active": false, "disabled": false},
                    {"id": "0002", "value": "3G", "active": true, "disabled": false},
                    {"id": "0003", "value": "4G", "active": false, "disabled": true},
                    {"id": "0004", "value": "5G", "active": true, "disabled": true},
                    {"id": "0005", "value": "6G", "active": true, "disabled": false, "partial": true}
                ]
            }
        },
        methods: {
            clickCheckbox (item) {
                item.active = !item.active;
            }
        }
    }
</script>
```
:::

### 多选框API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| value | String | 多选框value | 是 | - |
| active | Boolean | 是否选中 | 否 | `false` |
| disabled | Boolean | 是否禁用 | 否 | `false` |
| partial | Boolean | 未全部选中 | 否 | `false` |

### 事件

> 考虑到数据均由外部传入，不推送事件，可以在外部自行定义，比如：`@click.native='doSth'`

---

<h2 id="switch">Switch 开关</h2>

### 代码演示

:::demo 基本 | 基本用法，状态切换时会触发事件。
```html
<template>
    <art-switch :auto-switch="true"></art-switch>
    <art-switch :active="true" :auto-switch="true"></art-switch>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 文字用法 | 自定义内容，建议使用1个汉字。
```html
<template>
    <art-switch :auto-switch="true">
        <div slot="open">开</div>
        <div slot="close">关</div>
    </art-switch>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 异步用法 | 开启或关闭需要调用接口处理。 | 示例中点击1秒后将切换
```html
<template>
    <art-switch :active="switchActive" :auto-switch="false" @on-change="changeSwitch">
        <div slot="open">是</div>
        <div slot="close">否</div>
    </art-switch>
</template>
<script>
    export default {
        data () {
            return {
                switchActive: false
            }
        },
        methods: {
            changeSwitch () {
                let timer = setTimeout(() => {
                    this.switchActive = !this.switchActive;
                    clearTimeout(timer);
                },1000)
            }
        }
    }
</script>
```
:::

### 开关API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| active | Boolean | 是否打开 | 否 | `false` |
| autoSwitch | Boolean | 是否自动切换 | 否 | `false` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-change | 切换时候触发 | Boolean | 当前开关状态 |

---

<h2 id="countdown">倒计时</h2>

### 代码演示

:::demo 表格中的倒计时
```html
<template>
    <art-countdown :total="10" :remain="10">剩余10天</art-countdown>
    <art-countdown :total="10" :remain="8">剩余8天</art-countdown>
    <art-countdown :total="10" :remain="9" :warn="true">剩余2天</art-countdown>
    <art-countdown :percentage="20" :warn="true">剩余20%</art-countdown>
</template>
<script>
    export default {
    }
</script>
```
:::

### 倒计时API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| warn | Boolean | 是否需要警示 | 否 | `false` |
| total | Number | 总数，需与`remain`配合使用 | 否 | - |
| remain | Number | 剩余数 | 否 | - |
| percentage | Number | 剩余百分比，单独使用，优先级高于`total` `remain` | 否 | - |

---


<h2 id="table">Table 表格</h2>

### 演示1

<div class="art-table table1">
    <table cellspacing="0" cellpadding="0">
        <tr>
            <th>计划名称</th>
            <th>投放时间/截止时间</th>
            <th>组</th>
            <th>每日预算</th>
            <th>今日消费</th>
            <th>投放状态</th>
            <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" @mouseenter="enterTr(item)" @mouseleave="leaveTr(item)">
            <td>{{item.name}}</td>
            <td>
                <span>{{item.startTime}} / {{item.endTime}}</span>
                <art-countdown :total="item.countDown.total"
                               :remain="item.countDown.remain"
                               :warn="item.countDown.warn">
                    {{item.countDown.text}}
                </art-countdown>
            </td>
            <td>{{item.count}}</td>
            <td>{{item.budget}}</td>
            <td :class="item.sum<100 && 'red'">{{item.sum}}</td>
            <td>
                <art-switch :active="item.status === 1" @on-change="switchClick(item, index)">
                    <p slot="open">开</p>
                    <p slot="close">关</p>
                </art-switch>
            </td>
            <td>
                <art-btn-drop v-if="btnDropData && btnDropData.length > 0" :dropData="btnDropData"
                              :type="item.btnType || 0" :theme="item.btnTheme"></art-btn-drop>
            </td>
        </tr>
    </table>
</div>

### 演示2

<div class="art-table table2">
    <table cellspacing="0" cellpadding="0">
        <tr>
            <th>
                <art-checkbox :value="checkAllData.value"
                              :active="checkAllData.active"
                              :disabled="checkAllData.disabled"
                              name="checkall"
                              @click.native="checkAll"></art-checkbox>
            </th>
            <th>计划名称</th>
            <th>投放时间/截止时间</th>
            <th>每日预算</th>
            <th>今日消费</th>
            <th>投放状态</th>
            <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list1" @mouseenter="enterTr(item)" @mouseleave="leaveTr(item)">
            <td>
                <art-checkbox :value="item.check.value"
                              :active="item.check.active"
                              :disabled="item.check.disabled"
                              name="checkItem"
                              @click.native="toggleItem(item)"></art-checkbox>
            </td>
            <td>{{item.name}}</td>
            <td>
                <span>{{item.startTime}} / {{item.endTime}}</span>
                <art-countdown :total="item.countDown.total"
                               :remain="item.countDown.remain"
                               :warn="item.countDown.warn">
                    {{item.countDown.text}}
                </art-countdown>
            </td>
            <td>{{item.budget}}</td>
            <td :class="item.sum<100 && 'red'">{{item.sum}}</td>
            <td>
                <art-switch :active="item.status === 1" @on-change="switchClick(item, index)">
                    <p slot="open">开</p>
                    <p slot="close">关</p>
                </art-switch>
            </td>
            <td>
                <art-btn-drop v-if="btnDropData && btnDropData.length > 0" :dropData="btnDropData"
                              :type="item.btnType || 0" :theme="item.btnTheme"></art-btn-drop>
            </td>
        </tr>
    </table>
</div>

---

<h2 id="select">Select 选择器</h2>

### 代码演示

:::demo 基本 | 只能单选，value必传。| 可以配置是否宽度自适应。 | 可以给 Select 添加 style 样式，比如宽度。
```html
<template>
    <art-input-drop :drop-data="dropData" default-text="请选择" :auto-width="false" style="width:300px;"></art-input-drop>
    <art-input-drop :drop-data="dropData" default-text="请选择" style="width:300px;"></art-input-drop>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

:::demo 尺寸 | 通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。
```html
<template>
    <art-input-drop :drop-data="dropData" default-text="请选择" size="large" :auto-width="false" style="width:150px;"></art-input-drop>
    <art-input-drop :drop-data="dropData" default-text="请选择" :auto-width="false" style="width:150px;"></art-input-drop>
    <art-input-drop :drop-data="dropData" default-text="请选择" size="small" :auto-width="false" style="width:150px;"></art-input-drop>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

:::demo 禁用状态 | 通过设置disabled属性禁用选择器。 | 通过给dropData设置disabled禁用某一项
```html
<template>
    <art-input-drop :drop-data="dropData" disabled default-text="请选择" size="large" :auto-width="false" style="width:150px;"></art-input-drop>
    <art-input-drop :drop-data="dropData" default-text="请选择" :auto-width="false" style="width:150px;"></art-input-drop>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

:::demo 状态反馈 | 如有异常，可设置status属性反馈。
```html
<template>
    <art-input-drop :drop-data="dropData" default-text="请选择" :auto-width="false" status="error" error-pos="right" error-text="错误信息"></art-input-drop>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

### 选择器API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| dropData | Array[`value[String 必传]` `active[Boolean 默认false]` `disabled[Boolean 默认false]` `title[String]`] | 下拉列表数据 | 是 | - |
| size | String | 尺寸: `large` `small` `middle` | 否 | `middle` |
| border | Boolean | 是否需要边框 | 否 | `true` |
| autoWidth | Boolean | 是否宽度自适应 | 否 | `true` |
| defaultText | String | 默认提示文案 | 否 | `请选择` |
| disabled | Boolean | 是否禁用 | 否 | `false` |
| status | String | 状态: `error` | 否 | - |
| errorPos | String | 错误提示位置，默认下方，可设置为右侧 `right` | 否 | - |
| errorText | String | 错误提示文案 | 否 | - |
| errorStyle | String | 错误文案样式，主要用来自定义宽度 | 否 | - |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-choose | 选中的时候触发 | Object | 入参`dropData`中的点击项 |

---

<h2 id="dropdown">Dropdown 下拉框</h2>

### 代码演示

:::demo 基本 | 只能单选，value必传。| 可以配置是否宽度自适应。 | 可以给 Select 添加 style 样式，比如宽度。
```html
<template>
    <art-text-drop :drop-data="dropData" default-text="请选择" :auto-width="false"></art-text-drop>
    <art-text-drop :drop-data="dropData" default-text="请选择"></art-text-drop>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

:::demo 尺寸 | 通过设置size属性为large和middle将输入框设置为大和中尺寸，不设置为默认（小）尺寸。
```html
<template>
    <art-text-drop :drop-data="dropData" default-text="请选择" size="middle"></art-text-drop>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

:::demo 禁用状态 | 通过给dropData设置disabled禁用某一项
```html
<template>
    <art-text-drop :drop-data="dropData" default-text="请选择"></art-text-drop>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

:::demo 溢出提示 | 一般用于固定宽度显示不全增加title提示。
```html
<template>
    <art-text-drop :drop-data="dropData" :show-title="true" :auto-width="false"></art-text-drop>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

### 下拉框API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| dropData | Array[`value[String 必传]` `active[Boolean 默认false]` `disabled[Boolean 默认false]` `title[String]`] | 下拉列表数据 | 是 | - |
| size | String | 尺寸: `large` `small` `middle` | 否 | `small` |
| autoWidth | Boolean | 是否宽度自适应 | 否 | `true` |
| showTitle | Boolean | 溢出时是否需要显示title | 否 | `false` |
| defaultText | String | 默认提示文案 | 否 | `请选择` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-choose | 选中的时候触发 | Boolean | 入参`dropData`中的点击项 |

---

<h2 id="dropdown-list">DropList 下拉列表</h2>

### 代码演示

:::demo 基本 | 下拉框和选择器中的下拉列表组件，可按需求灵活封装使用。 | 可以通过size属性设置尺寸，默认为middle。
```html
<template>
    <art-dropdown :data="dropData" @on-choose=""></art-dropdown>
</template>
<script>
    export default {
        data () {
            return {
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: true},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ]
            }
        }
    }
</script>
```
:::

### 下拉列表API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| data | Array[`value[String 必传]` `active[Boolean 默认false]` `disabled[Boolean 默认false]` `title[String]`] | 下拉列表数据 | 是 | - |
| size | String | 尺寸: `large` `small` `middle` | 否 | `middle` |
| maxLength | Number | 超过多少条开始滚动 | 否 | `5` |
| transAni | String | 出现动画名称，默认内置向下淡出，如修改需定义样式 | 否 | `fade-in-move-in-up` |
| autoWidth | Boolean | 是否宽度自适应 | 否 | `true` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-choose | 选中的时候触发 | Boolean | 入参`data`中的点击项 |

---

<h2 id="datePicker">DatePicker 日期选择器</h2>

### 代码演示

:::demo 单日选择器 | 可以通过placeholder设置默认显示文案 | 可以通过date设置默认选中日期，接收任何正确的日期格式，比如2017/12/27 或 1510800537378 都可以
```html
<template>
    <art-calendar placeholder="请选择日期"></art-calendar>
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

:::demo 范围选择器 | 可以通过placeholder设置默认显示文案 | 可以通过dateRange设置默认选中范围，接收任何正确的日期格式，比如["2017/12/27", "2017/12/28"] 或 [1510800537378,1510900537378] 都可以
```html
<template>
    <art-calendar type="range" :date-range="[1510800537378, 1511318937378]" :disabled-date="disabledDate"></art-calendar>
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

:::demo 快捷菜单 | 通过设置leftNav显示快捷菜单，默认内置三个
```html
<template>
    <art-calendar type="range" :left-nav="true"></art-calendar>
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

:::demo 禁用日期 | 通过设置disabledDate来配置不可选日期
```html
<template>
    <art-calendar type="range" :disabled-date="disabledDate" :left-nav="true"></art-calendar>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            disabledDate (day) {
                return (day.day == 14 || day.day == 15)
            },
        }
    }
</script>
```
:::

### 日期选择器API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| show | Boolean | 是否默认打开 | 否 | `false` |
| leftNav | Boolean | 是否需要快捷菜单 | 否 | `false` |
| type | String | 类型: `range 范围` `default 单日` | 否 | `default` |
| pos | String | 对齐方式: `left` `right` | 否 | `left` |
| date | String\|Number | 日期，可以传入`new Data`的日期格式都可以 | 否 | - |
| dateRange | Array | 日期范围，可以传入`new Data`的日期格式都行 | 否 | - |
| disabledDate | Function[day] | 不可选日期范围，返回true或false | 否 | - |
| format | String | 日期显示格式 | 否 | `yyyy/MM/dd` |
| placeholder | String | 默认显示文案 | 否 | `请选择日期` |
| status | String | (单日选择)选择框状态: `error` | 否 | - |
| errorPos | String | (单日选择)错误提示位置，默认下方，可设置为右侧 `right` | 否 | - |
| errorText | String | (单日选择)错误提示文案 | 否 | - |
| errorStyle | String | (单日选择)错误文案样式，主要用来自定义宽度 | 否 | - |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| quick-select | 点击快捷菜单时候触发 | Object\|Array [`year[String]` `month[String]` `day[String]` `ts[Number]`] | 如果是选择范围，返回`Array`；如果是选择单日，返回`Object` |
| select | 如果是选择范围，将在两个都选择正确后触发；如果是选择单日，选中后触发 | Object\|Array [`year[String]` `month[String]` `day[String]` `ts[Number]`] | 如果是选择范围，返回`Array`；如果是选择单日，返回`Object` |

---

<h2 id="slider">Slider 滑动条</h2>

### 代码演示

:::demo 基本 | 通过设置 value 设置初始值 | 通过设置 disabled 禁用滑块
```html
<template>
    <art-slider :value="sliderValue"></art-slider>
</template>
<script>
    export default {
        data () {
            return {
                sliderValue: 0
            }
        }
    }
</script>
```
:::

:::demo 自定义刻度 | 通过设置 min/max 设置刻度
```html
<template>
    <art-slider :value="sliderValue1" :min="50" :max="200" @on-change=changeSlider1>
        <p slot="tooltip">百分比：{{sliderPer1}}%，数值：{{sliderValue1}}</p>
    </art-slider>
</template>
<script>
    export default {
        data () {
            return {
                sliderValue1: 100,
                sliderPer1: parseInt(100 * (100 - 50)/(200 - 50))
            }
        },
        methods: {
            changeSlider1 (per, val) {
                this.sliderPer1 = per
                this.sliderValue1 = val
            },
        },
    }
</script>
```
:::

:::demo 上下限 | 通过设置 limit 设置上下限
```html
<template>
    <art-slider :value="sliderValue2" :limit=[20,80]></art-slider>
</template>
<script>
    export default {
        data () {
            return {
                sliderValue2: 30
            }
        }
    }
</script>
```
:::

### 滑动条API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| disabled | Boolean | 是否禁用 | 否 | `false` |
| info | Boolean | 是否显示文字刻度 | 否 | `true` |
| min | Number | 最小刻度 | 否 | `0` |
| max | Number | 最大刻度 | 否 | `100` |
| value | Number | 初始值 | 是 | - |
| limit | Array[Number, Number] | 长度为2的数组，设置可选上下限 | 否 | - |
| tooltipTrans | String | 提示出现动画 | 否 | `slider-fade` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-change | 滑动滑块时触发(mousemove) | Number | 返回百分比和值两个参数 |
| on-after-change | 滑动结束时触发(mouseup) | Number | 返回百分比和值两个参数 |

---

<script>
    export default {
        data () {
            return {
                radioData: [
                    {"id": "0001", "value": "web", "active": false, "disabled": false, "slot": "<span style='font-size:12px;color:red; position: absolute; left: 24px; top: 16px; white-space: nowrap;'>自定义</span>"},
                    {"id": "0002", "value": "iOS应用", "active": true, "disabled": false},
                    {"id": "0003", "value": "Android应用", "active": false, "disabled": true},
                    {"id": "0004", "value": "混合应用", "active": true, "disabled": true}
                ],
                checkboxData: [
                    {"id": "0001", "value": "2G", "active": false, "disabled": false, "slot": "<span style='font-size:12px;color:red; position: absolute; left: 24px; top: 16px; white-space: nowrap;'>自定义</span>"},
                    {"id": "0002", "value": "3G", "active": true, "disabled": false},
                    {"id": "0003", "value": "4G", "active": false, "disabled": true},
                    {"id": "0004", "value": "5G", "active": true, "disabled": true},
                    {"id": "0005", "value": "6G", "active": true, "disabled": false, "partial": true}
                ],
                switchActive: false,
                dropData: [
                    {'id': '0002', 'value': '问题2：你养的第一只宠物叫什么名字第一只宠物叫什么名字', title: '我是提示', 'idx': 0, active: false},
                    {'id': '0003', 'value': '问题3：你养的第一只宠物叫什么名字', 'idx': 1, active: false},
                    {'id': '0004', 'value': '问题4：你养的第一只宠物叫什么名字', 'idx': 2, active: false, disabled: true},
                    {'id': '0005', 'value': '问题5：你养的第一只宠物叫什么名字', 'idx': 3, active: false},
                    {'id': '0006', 'value': '问题6：你养的第一只宠物叫什么名字', 'idx': 4, active: false},
                    {'id': '0007', 'value': '问题7：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0008', 'value': '问题8：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0009', 'value': '问题9：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                    {'id': '0010', 'value': '问题10：你养的第一只宠物叫什么名字', 'idx': 5, active: false},
                ] ,

                // 表格 start
                list: [],
                list1: [],
                btnDropData: [{'id': 0, 'value': '编辑'}, {'id': 1, 'value': '删除'}],
                checkAllData: {id: "0001", value: "", idx: 0, active: false},  // 选择全部
                // 表格 end

                sliderValue: 0,
                sliderValue1: 100,
                sliderPer1: parseInt(100 * (100 - 50)/(200 - 50)),
                sliderValue2: 30
            }
        },
        created(){
            this.list = [{
                "budget": "10,000.00",
                "name": "测试计划1",
                "count": 2,
                "startTime": "2018-01-01",
                "endTime": "2018-01-10",
                "status": 1,
                "sum": "98.00",
                "countDown": {
                    "total": 10,
                    "remain": 5,
                    "warn": false,
                    "text": "剩余5天"
                },
                "btnType": 1,
                "btnTheme": "red",
            },{
                  "budget": "10,000.00",
                  "name": "测试计划1",
                  "count": 2,
                  "startTime": "2018-01-01",
                  "endTime": "2018-01-10",
                  "status": 0,
                  "sum": "123.00",
                  "countDown": {
                      "total": 10,
                      "remain": 4,
                      "warn": true,
                      "text": "剩余4天"
                  },
                  "btnType": 0,
                  "btnTheme": "blue",
              }];
            this.list1 = [{
                "budget": "10,000.00",
                "name": "测试计划1",
                "count": 2,
                "startTime": "2018-01-01",
                "endTime": "2018-01-10",
                "status": 0,
                "sum": "72.00",
                "countDown": {
                    "total": 10,
                    "remain": 5,
                    "warn": false,
                    "text": "剩余5天"
                },
                "btnType": 1,
                "btnTheme": "red",
                "check": {
                    value: "",
                    active: false,
                    disabled: false,
                }
            }, {
                "budget": "10,000.00",
                "name": "测试计划1",
                "count": 2,
                "startTime": "2018-01-01",
                "endTime": "2018-01-10",
                "status": 1,
                "sum": "123.00",
                "countDown": {
                    "total": 10,
                    "remain": 2,
                    "warn": true,
                    "text": "剩余2天"
                },
                "btnType": 0,
                "btnTheme": "blue",
                "check": {
                    value: "",
                    active: false,
                    disabled: false,
                }
            }];
        },
        methods: {
            clickRadio (item) {
                this.radioData.forEach((radio) => {
                    if(radio.id === item.id) {
                        radio.active = true;
                    } else {
                        radio.active = false;
                    }
                })
            },
            clickCheckbox (item) {
                item.active = !item.active;
            },
            changeSwitch () {
                let timer = setTimeout(() => {
                    this.switchActive = !this.switchActive;
                    clearTimeout(timer);
                },1500)
            },
            disabledDate (day) {
                return (day.day == 14 || day.day == 15)
            },
            // table start
            // 鼠标移入移出 tr
            enterTr(item) {
                item._btnType = item.btnType;
                item._btnType !== 1 && (item.btnType = 1);
            },
            leaveTr(item) {
                item._btnType === 0 && (item.btnType = 0);
            },
            // 切换投放状态
            switchClick(item) {
                item.status = 1 - item.status;
            },
            // 选中某一行
            toggleItem(item) {
                item.check.active = !item.check.active;
                let len = this.list1.length;
                let chkLen = 0;
                this.list1.forEach((obj,i)=>{
                    obj.check.active && (chkLen++);
                });
               this.checkAllData.active = len === chkLen;
            },
            checkAll(){
                let checked = this.checkAllData.active;
                this.checkAllData.active = !checked;
                this.list1.forEach((item,i)=>{
                    item.check.active = !checked;
                });
            },
            // table end

            changeSlider1 (per, val) {
                this.sliderPer1 = per
                this.sliderValue1 = val
            },
        }
    }
</script>
