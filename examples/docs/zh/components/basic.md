<h2 id="color">Color 色彩</h2>

### 主色

B1为京东来客的主色调，常用于交互态强化和视觉优化；B2常用于 hover；B3常用于 active。

<div class="art-row clearfix">
  <div class="art-color-item" style="background-color: #0074ff;">
    <p class="color-name">B1</p>
    <p class="color-value">#0074ff</p>
  </div>
  <div class="art-color-item" style="background-color: #006def;">
    <p class="color-name">B2</p>
    <p class="color-value">#006def</p>
  </div>
  <div class="art-color-item" style="background-color: #0064da;">
    <p class="color-name">B3</p>
    <p class="color-value">#0064da</p>
  </div>
</div>

### 辅助色

辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。

<div class="art-row clearfix">
  <div class="art-color-item" style="background-color: #0bdba8;">
    <p class="color-name">辅色1</p>
    <p class="color-value">#0bdba8</p>
  </div>
  <div class="art-color-item" style="background-color: #ffb540;">
    <p class="color-name">辅色2</p>
    <p class="color-value">#ffb540</p>
  </div>
  <div class="art-color-item" style="background-color: #f52f3e;">
    <p class="color-name">辅色3</p>
    <p class="color-value">#f52f3e</p>
  </div>
</div>

### 中性色

中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。

<div class="art-row clearfix">
  <div class="art-color-item" style="background-color: #283039;">
    <p class="color-name">标题</p>
    <p class="color-value">#283039</p>
  </div>
  <div class="art-color-item" style="background-color: #727682;">
    <p class="color-name">正文</p>
    <p class="color-value">#727682</p>
  </div>
  <div class="art-color-item" style="background-color: #bec1ca;">
    <p class="color-name">图标/辅助文字</p>
    <p class="color-value">#bec1ca</p>
  </div>
  <div class="art-color-item art-color-item_dark" style="background-color: #f0f2f5;">
    <p class="color-name">边框/分割线</p>
    <p class="color-value">#f0f2f5</p>
  </div>
  <div class="art-color-item art-color-item_dark" style="background-color: #ecf0f9;">
    <p class="color-name">菜单选中背景</p>
    <p class="color-value">#ecf0f9</p>
  </div>
  <div class="art-color-item art-color-item_dark" style="background-color: #f6f8fc;">
    <p class="color-name">背景</p>
    <p class="color-value">#f6f8fc</p>
  </div>
</div>

---

<h2 id="font">Font 字体</h2>

### 概述

<div class="art-row">
  <p class="art-font-desc">
    <strong>Windows 平台下字体：</strong>
    <span>中文字体使用「微软雅黑 Microsoft YaHei」，英文、数字字体使用「Segoe UI」，系统没有「Segoe UI」,前端样式字体回退选择使用「Arial」显示英文和数字，Segoe UI 和微软雅黑都是从 Windows Vista 开始提供的为 ClearType 优化的字体，原则上这两款字体总是同时存在。</span>
  </p>
  <p class="art-font-desc">
      <strong>macOS 与 IOS 平台下字体：</strong>
      <span>中文字体使用「苹方 PingFang」，英文、数字字体使用「SanFrancisco」。</span>
    </p>
</div>

<div class="art-row">
  <p class="art-font-item clearfix" style="font-size: 18px; color: #283039;">
    <span>标题1</span>
    <span>微软雅黑 标准 18px </span>
    <span>User Experience Regular 18px</span>
  </p>
  <p class="art-font-item clearfix" style="font-size: 16px; color: #727682;">
      <span>标题2</span>
      <span>微软雅黑 标准 16px </span>
      <span>User Experience Regular 16px</span>
    </p>
    <p class="art-font-item clearfix" style="font-size: 14px; color: #727682;">
      <span>标题3</span>
      <span>微软雅黑 14px </span>
      <span>User Experience Regular 14px</span>
    </p>
    <p class="art-font-item clearfix" style="font-size: 12px; color: #727682;">
      <span>内文</span>
      <span>微软雅黑 12px </span>
      <span>User Experience Regular 12px</span>
    </p>
    <p class="art-font-item clearfix" style="font-size: 12px; color: #bec1ca;">
      <span>辅助</span>
      <span>微软雅黑 12px </span>
      <span>User Experience Regular 12px</span>
    </p>
</div>

---

<h2 id="button">Button 按钮</h2>

### 代码演示

:::demo 按钮类型 | 按钮分为 主要按钮、幽灵按钮、次要按钮、文字按钮、警示按钮，根据页面需要放置不同按钮。
```html
<template>
    <art-button type="main">主要按钮</art-button>
    <art-button type="blue">幽灵按钮</art-button>
    <art-button type="minor">次要按钮</art-button>
    <art-button type="text">文字按钮</art-button>
    <art-button type="red">警示按钮</art-button>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 图标按钮 | 通过设置 icon 属性在 Button 内嵌入一个 Icon，或者直接在 Button 内使用 Icon 组件。 | 使用 Button 的 icon 属性，图标位置将在最左边
```html
<template>
    <art-button type="text" size="large" icon="//storage.360buyimg.com/static-res/tech/jrv/1.0.0/button/plus.png">
        添加计划
    </art-button>
    <art-button type="text" size="small" icon="//storage.360buyimg.com/static-res/tech/jrv/1.0.0/button/plus.png">
        添加计划
    </art-button>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 按钮尺寸 | 按钮有三种尺寸：大、默认（中）、小 | 通过设置 size 为 large 和 small 将按钮设置为大和小尺寸，不设置为默认（中）尺寸
```html
<template>
    <art-button type="main" size="large">大号尺寸</art-button>
    <art-button type="main">默认尺寸</art-button>
    <art-button type="main" size="small">小号尺寸</art-button>
</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 禁用状态 | 通过添加 disabled 属性可将按钮设置为不可用状态。
```html
<template>
    <art-button type="main">默认状态</art-button>
    <art-button disabled type="main">禁用状态</art-button>
    <br />
    <art-button type="blue">默认状态</art-button>
    <art-button disabled type="blue">禁用状态</art-button>
    <br />
    <art-button type="minor">默认状态</art-button>
    <art-button disabled type="minor">禁用状态</art-button>
    <br />
    <art-button type="text">默认状态</art-button>
    <art-button disabled type="text">禁用状态</art-button>


</template>
<script>
    export default {
    }
</script>
```
:::

:::demo 下拉式按钮 | 这种按钮多数出现再表格的操作里，当有多种操作要一起展示，例如编辑、删除、分组，这三个操作我们判断编辑为高频操作，就默认展示编辑，其他操作隐藏到下拉菜单里展示。
```html
<template>
    <art-btn-drop :drop-data="dropdownData" :type="0" theme="blue"></art-btn-drop>
    <art-btn-drop :drop-data="dropdownData" :type="1"></art-btn-drop>
    <art-btn-drop :drop-data="[{'id': 1, 'value': '支付'},{'id': 2, 'value': '删除'},{'id': 3, 'value': '分组'}]" :type="1" theme="red"></art-btn-drop>
</template>
<script>
    export default {
        data() {
            return {
                dropdownData: [
                    {'id': 1, 'value': '编辑'},
                    {'id': 2, 'value': '删除'},
                    {'id': 3, 'value': '分组'},
                ],
            }
        },
        created(){
            let self = this;
            setTimeout(()=>{
                self.type1 = 1;
            });
        },
    }
</script>
```
:::

<script>
    export default {
        data() {
            return {
                dropdownData: [
                    {'id': 1, 'value': '编辑'},
                    {'id': 2, 'value': '删除'},
                    {'id': 3, 'value': '分组'},
                ],
            }
        }
    }
</script>

### 按钮API(非下拉式)

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| type | String | 按钮类型: `main` `blue` `minor` `text` `empty` | 否 | `main` |
| size | String | 按钮尺寸: `large` `small` `middle` | 否 | `middle` |
| disabled | Boolean | 是否禁用按钮 | 否 | `false` |
| border | Boolean | 是否需要边框 | 否 | `true` |
| icon | String | Icon链接 | 否 | - |

#### 事件：

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| click | 点击触发 | Object | Event |
| mouseenter | 鼠标滑上触发 | Object | Event |
| mouseleave | 鼠标滑上触发 | Object | Event |

### 下拉式按钮API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| dropData | Array[`value必传`,`title可按需传`] | 下拉列表数据 | `true` | - |
| type | Number | 显示类型： `0: 文字` `1: 按钮` | `false` | `0` |
| theme | String | 主题： `blue` `red` | `false` | `blue` |

#### 事件：

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-choose | 选中某一项出发 | Object | 入参`dropData`中的某一项 |

---

<h2 id="icon">Icon 图标</h2>

### 示例

以下是全尺寸比例高宽网格图，可以作为不同形状图标的参考

使用建议：基于设计示例，前端自主决策使用 `iconfont` 或 `background-image` 形式实现

<div class="art-row clearfix">
  <div class="art-icon-eg"></div>
  <ul class="art-icon-list clearfix">
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/user/nav/icon1.png)"></i>用户中心</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/user/nav/icon2.png)"></i>安全设置</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/user/nav/icon3.png)"></i>权限管理</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/user/nav/icon4.png)"></i>资产总览</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/user/nav/icon5.png)"></i>订单管理</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/user/nav/icon6.png)"></i>交易明细</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon1.png)"></i>概览</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/daplatform/icon/nav-adv.png)"></i>广告报表</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/daplatform/icon/nav-dmp.png)"></i>DMP</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon2.png)"></i>投放数据</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon3.png)"></i>创意库</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon4.png)"></i>投放管理</p></li>
    <li><p><i style="background-image:url(//storage.360buyimg.com/static-res/tech/adv/1.0.0/index/icon5.png)"></i>广告主管理</p></li>
  </ul>
</div>

---

<h2 id="layout">Layout 布局</h2>

### 概述

我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。

为了满足复杂场景，我们采用的是 `24栅格` 系统。

### Flex 布局

该栅格化系统内部是通过 `flexbox` 实现的，支持 `flex` 布局，可以自定义子元素在父节点内的对齐方式、排序方式等。

[查看Flex 布局兼容性](https://caniuse.com/#search=flex)

:::demo 基础栅格 | 使用单一的 <code>row</code> 和 多个 <code>col</code> 组合，创建基础的栅格布局 | 所有 <code>col</code> 必须放在 <code>row</code> 内
```html
<template>
    <div class="row art-row no-gutter">
      <div class="col-12"><div class="art-box-row" style="background-color: #0074ff;">col-12</div></div>
      <div class="col-12"><div class="art-box-row" style="background-color: #0064da;">col-12</div></div>
    </div>
    <div class="row art-row no-gutter">
      <div class="col-8"><div class="art-box-row" style="background-color: #0074ff;">col-8</div></div>
      <div class="col-8"><div class="art-box-row" style="background-color: #0064da;">col-8</div></div>
      <div class="col-8"><div class="art-box-row" style="background-color: #0074ff;">col-8</div></div>
    </div>
    <div class="row art-row no-gutter">
      <div class="col-6"><div class="art-box-row" style="background-color: #0074ff;">col-6</div></div>
      <div class="col-6"><div class="art-box-row" style="background-color: #0064da;">col-6</div></div>
      <div class="col-6"><div class="art-box-row" style="background-color: #0074ff;">col-6</div></div>
      <div class="col-6"><div class="art-box-row" style="background-color: #0064da;">col-6</div></div>
    </div>
</template>
```
:::

:::demo 栅格间隔 | <code>col</code> 块之间增加间隔，默认添加间隔，如不需要间隔，可添加 <code>class="no-gutter"</code>
```html
<template>
    <div class="row art-row">
      <div class="col-12"><div class="art-box-row" style="background-color: #0074ff;">col-12</div></div>
      <div class="col-12"><div class="art-box-row" style="background-color: #0064da;">col-12</div></div>
    </div>
    <div class="row art-row">
      <div class="col-8"><div class="art-box-row" style="background-color: #0074ff;">col-8</div></div>
      <div class="col-8"><div class="art-box-row" style="background-color: #0064da;">col-8</div></div>
      <div class="col-8"><div class="art-box-row" style="background-color: #0074ff;">col-8</div></div>
    </div>
    <div class="row art-row">
      <div class="col-6"><div class="art-box-row" style="background-color: #0074ff;">col-6</div></div>
      <div class="col-6"><div class="art-box-row" style="background-color: #0064da;">col-6</div></div>
      <div class="col-6"><div class="art-box-row" style="background-color: #0074ff;">col-6</div></div>
      <div class="col-6"><div class="art-box-row" style="background-color: #0064da;">col-6</div></div>
    </div>
</template>
```
:::

:::demo 左右偏移 | 列与列额之间可以通过 <code>offset</code>设置偏移 | 例如： <code>col-offset-4</code> ，意思是向右偏移4个长度单元
```html
<template>
    <div class="row art-row">
      <div class="col-8"><div class="art-box-row" style="background-color: #0074ff;">col-8</div></div>
      <div class="col-8 col-offset-4"><div class="art-box-row" style="background-color: #0064da;">col-8 col-offset-4</div></div>
    </div>
    <div class="row art-row">
      <div class="col-6 col-offset-6"><div class="art-box-row" style="background-color: #0074ff;">col-6 col-offset-6</div></div>
      <div class="col-6 col-offset-6"><div class="art-box-row" style="background-color: #0064da;">col-6 col-offset-6</div></div>
    </div>
    <div class="row art-row">
      <div class="col-12 col-offset-6"><div class="art-box-row" style="background-color: #0074ff;">col-12 col-offset-6</div></div>
    </div>
</template>
```
:::

:::demo Flex 布局 | 子元素通过设置 <code>flex-start</code> <code>flex-center</code> <code>flex-end</code> <code>flex-top</code> <code>flex-middle</code> <code>flex-bottom</code> <code>flex-around</code> <code>flex-between</code> ，定义其在父节点中的排列方式
```html
<template>
    <p class="art-row-desc">flex-start</p>
    <div class="row art-row no-gutter flex-start">
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
    </div>
    <p class="art-row-desc">flex-center</p>
    <div class="row art-row no-gutter flex-center">
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
    </div>
    <p class="art-row-desc">flex-end</p>
    <div class="row art-row no-gutter flex-end">
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
    </div>
    <p class="art-row-desc">flex-around</p>
    <div class="row art-row no-gutter flex-around">
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
    </div>
    <p class="art-row-desc">flex-between</p>
    <div class="row art-row no-gutter flex-between">
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da;">col-4</div></div>
    </div>
    <p class="art-row-desc">flex-top</p>
    <div class="row art-row flex-top">
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da; height: 80px; line-height: 80px">col-4</div></div>
    </div>
    <p class="art-row-desc">flex-middle</p>
    <div class="row art-row flex-middle">
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da; height: 80px; line-height: 80px">col-4</div></div>
    </div>
    <p class="art-row-desc">flex-bottom</p>
    <div class="row art-row flex-bottom">
      <div class="col-4"><div class="art-box-row" style="background-color: #0074ff;">col-4</div></div>
      <div class="col-4"><div class="art-box-row" style="background-color: #0064da; height: 80px; line-height: 80px">col-4</div></div>
    </div>
</template>
```
:::

### 类名说明

| classname | 说明 |
| :-------- | :--------|
| .no-gutter | 默认 `col` 之间会设置 `8px` 间隔，添加该类型去除默认间隔 |
| .row | 包含 `col` 的容器 |
| .row.reverse | 反向排列子元素 |
| .flex | 使用 `flexbox` 布局 |
| .flex-start | 子元素水平方向按起点方向排列 |
| .flex-center | 子元素水平方向居中排列 |
| .flex-end | 子元素水平方向按终点方向排列 |
| .flex-around | 子元素水平方向间隔相等排列 |
| .flex-between | 子元素水平方向两端对齐，间隔相等排列 |
| .flex-top | 子元素垂直方向顶部对齐 |
| .flex-middle | 子元素垂直方向居中对齐 |
| .flex-bottom | 子元素垂直方向底部对齐 |

---





