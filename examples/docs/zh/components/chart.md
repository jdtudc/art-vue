## 使用须知

若无申明，则默认表示依赖 `echarts >=3.7.2`

使用模版工程开发的项目已预先配置好了，无须单独安装依赖；如非模版工程开发，请自行引入依赖 `npm install echarts --save`

> 项目在 echart 3.7.2 版本中运行通过，其他低版本请对比 option 变动，或者完全自定义 option

---

<h2 id="sexRingChart">性别占比环形图(不依赖 ECharts)</h2>

### 代码演示

:::demo 性别占比环形图 | 该图表不依赖 echarts | 配合 art-auxi 可以满足复杂场景
```html
<template>
    <art-chart chart-id="pie1" :option="pie1Opt" :auxi="true" :error="auxiOpt.error" :none="auxiOpt.none" :loading="auxiOpt.loading" @on-retry="retry"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                pie1Opt: null,
                auxiOpt: {
                    error: true,
                    none: false,
                    loading: false
                }
            }
        },
        methods: {
            retry () {
                this.auxiOpt = {
                    error: false,
                    none: false,
                    loading: true
                }
                // 模拟发请求，2秒后出结果
                let timer = setTimeout(() => {
                    this.auxiOpt = {
                        error: false,
                        none: false,
                        loading: false
                    }
                    this.pie1Opt = {
                         outer: 150,
                         inner: 80,
                         other: 20
                     }
                    clearTimeout(timer);
                },2000)
            },
        }
    }
</script>
```
:::

### 性别占比环形图API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| chartId | String | 表Id | 是 | - |
| auxi | Boolean | 是否需要辅助工具 | 否 | `false` |
| error | Boolean | 开启辅助工具时生效，辅助工具是否为错误状态 | 否 | `false` |
| none | Boolean | 开启辅助工具时生效，辅助工具是否为空状态 | 否 | `false` |
| loading | Boolean | 开启辅助工具时生效，辅助工具是否为加载中状态 | 否 | `false` |
| option | Object | 表配置对象 | 是 | - |
| option[outer] | Number | 外圈人数 | 否 | `0` |
| option[inner] | Number | 内圈人数 | 否 | `0` |
| option[other] | Number | 其他人数 | 否 | `0` |
| option[color] | Array | 特殊颜色配置数组，配置不同颜色则会使用渐变 | 否 | `[["#0074ff", "#6fb1ff"],["#ff3f80", "#ff5d94"]]` |
| option[width] | Number | 宽度 | 否 | `200` |
| option[height] | Number | 高度 | 否 | `200` |
| option[lineWidth] | Number | 环宽 | 否 | `15` |
| option[startArc] | Number | 开始角度，水平为0 | 否 | `-90` |
| option[bgColor] | String | 环底色 | 否 | `#f6f8fc` |
| option[spacing] | Number | 环间距 | 否 | `25` |
| option[legend] | Boolean | 是否展示 legend | 否 | `true` |
| option[compare] | Boolean | 是否展示中心文案 | 否 | `true` |
| option[resize] | Boolean | 是否 resize 刷新 | 否 | `true` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-retry | 开启辅助工具时生效，点击重试触发事件 | - | - |

---

<h2 id="barChart">柱状图</h2>

### 代码演示

:::demo 一般柱状图
```html
<template>
    <art-chart chart-id="bar5" :option="bar1Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                bar1Opt: {
                    dataAxis: ["15以下","16-25","26-35","35-45","46-55","56以上"],
                    data: [100,200,300,200,100,50],
                }
            }
        }
    }
</script>
```
:::

:::demo 占比柱状图
```html
<template>
    <art-chart chart-id="bar1" :option="bar1Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                bar1Opt: {
                    dataAxis: ["15以下","16-25","26-35","35-45","46-55","56以上"],
                    data: [100,200,300,200,100,50],
                }
            }
        }
    }
</script>
```
:::

:::demo 占比特殊柱状图
```html
<template>
    <art-chart chart-id="bar2" :option="bar2Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                bar2Opt: {
                    dataAxis: ["3c","电商","服装","家具","美妆","汽车","食品","图书"],
                    data: [250,200,100,150,3000,47,100,68],
                }
            }
        }
    }
</script>
```
:::

:::demo 双项柱状图 | 数据请传入占比
```html
<template>
    <art-chart chart-id="bar4" :option="bar4Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                bar4Opt: {
                    dataAxis: ["2018-01-19","2018-01-20","2018-01-21"],
                    data: [{
                        "name": "广告渠道",
                        "data": [5.26,35,,63.16]
                    }, {
                       "name": "其他渠道",
                       "data": [62.26,100,17.65]
                   }],
                }
            }
        }
    }
</script>
```
:::

:::demo 叠加柱状图
```html
<template>
    <art-chart chart-id="bar3" :option="bar3Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                bar3Opt: {
                    dataAxis: ["00:00","01:00","02:00","03:00","04:00","05:00"],
                    data: [{
                        "name": "广告渠道",
                        "data": [1069,131,27,500,400,300]
                    }, {
                       "name": "其他渠道",
                       "data": [58,389,27,74,200,100,50]
                   }],
                }
            }
        }
    }
</script>
```
:::

### 柱状图API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| chartId | String | 表Id | 是 | - |
| auxi | Boolean | 是否需要辅助工具 | 否 | `false` |
| error | Boolean | 开启辅助工具时生效，辅助工具是否为错误状态 | 否 | `false` |
| none | Boolean | 开启辅助工具时生效，辅助工具是否为空状态 | 否 | `false` |
| loading | Boolean | 开启辅助工具时生效，辅助工具是否为加载中状态 | 否 | `false` |
| custom | Boolean | 是否使用自定义 option | 否 | `false` |
| option | Object | 表配置对象。如果使用自定义 option ，[参考配置](//echarts.baidu.com/option.html) | 是 | - |
| option[dataAxis] | Array | 非自定义 option 时的图表横轴数据 | 是 | - |
| options[data] | Array | 非自定义 option 时的图表数据 | 是 | - |
| options[limit] | Number | 非自定义 option 时的缩放最大显示数量 | 否 | `10` |
| option[resize] | Boolean | 是否resize刷新 | 否 | `true` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-retry | 开启辅助工具时生效，点击重试触发事件 | - | - |

---

<h2 id="pieChart">饼图</h2>

### 代码演示

:::demo 一般柱状图
```html
<template>
    <art-chart chart-id="pie2" :option="pie2Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                pie2Opt: {
                    dataAxis: ["站内流量","站外流量","线下流量","其它"],
                    data: [450,250,200,100]
                }
            }
        }
    }
</script>
```
:::

### 饼图API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| chartId | String | 表Id | 是 | - |
| auxi | Boolean | 是否需要辅助工具 | 否 | `false` |
| error | Boolean | 开启辅助工具时生效，辅助工具是否为错误状态 | 否 | `false` |
| none | Boolean | 开启辅助工具时生效，辅助工具是否为空状态 | 否 | `false` |
| loading | Boolean | 开启辅助工具时生效，辅助工具是否为加载中状态 | 否 | `false` |
| custom | Boolean | 是否使用自定义 option | 否 | `false` |
| option | Object | 表配置对象。如果使用自定义 option ，[参考配置](//echarts.baidu.com/option.html) | 是 | - |
| option[dataAxis] | Array | 非自定义 option 时的图表维度数据 | 是 | - |
| options[data] | Array | 非自定义 option 时的图表数据 | 是 | - |
| options[legend] | Boolean | 非自定义 option 时是否显示中间legend | 否 | `true` |
| options[result] | Boolean | 非自定义 option 时是否显示排序结果 | 否 | `true` |
| option[resize] | Boolean | 是否resize刷新 | 否 | `true` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-retry | 开启辅助工具时生效，点击重试触发事件 | - | - |

---

<h2 id="radarChart">雷达图</h2>

### 代码演示

:::demo 一般柱状图
```html
<template>
    <art-chart chart-id="radar1" :option="radar1Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                radar1Opt: {
                    indicator: [
                      { name: '参与人数', max: 5},
                      { name: '活动转化', max: 5},
                      { name: '吸引力指数', max: 5},
                      { name: '羊毛指数', max: 5},
                      { name: '访问量', max: 5}
                    ],
                    data: [{
                        "name": "该活动综合得分",
                        "data": [4.2, 4, 4.4, 3.8, 4]
                    }, {
                       "name": "同类活动平均得分",
                       "data": [3.4, 2, 5, 4, 4]
                   }],
                }
            }
        }
    }
</script>
```
:::

### 雷达图API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| chartId | String | 表Id | 是 | - |
| auxi | Boolean | 是否需要辅助工具 | 否 | `false` |
| error | Boolean | 开启辅助工具时生效，辅助工具是否为错误状态 | 否 | `false` |
| none | Boolean | 开启辅助工具时生效，辅助工具是否为空状态 | 否 | `false` |
| loading | Boolean | 开启辅助工具时生效，辅助工具是否为加载中状态 | 否 | `false` |
| custom | Boolean | 是否使用自定义 option | 否 | `false` |
| option | Object | 表配置对象。如果使用自定义 option ，[参考配置](//echarts.baidu.com/option.html) | 是 | - |
| option[indicator] | Array[`name[String]` `max[Number]`] | 非自定义 option 时的图表维度数据 | 是 | - |
| options[data] | Array | 非自定义 option 时的图表数据 | 是 | - |
| options[perfect] | Number \| String | 非自定义 option 时满分数值 | 否 | `indicator 中第一项的 max 值` |
| options[result] | Boolean | 非自定义 option 时是否显示排序结果 | 否 | `true` |
| option[resize] | Boolean | 是否resize刷新 | 否 | `true` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-retry | 开启辅助工具时生效，点击重试触发事件 | - | - |

---

<h2 id="lineChart">折线图</h2>

### 代码演示

:::demo 一般折线图
```html
<template>
    <art-chart chart-id="line1" :option="line1Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                line1Opt: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "总花费",
                        data: [500.9,4200.9,4000.9,3500.9,5267.9,7200.9, 6400.9]
                    }],
                },
            }
        }
    }
</script>
```
:::

:::demo 多数据折线图
```html
<template>
    <art-chart chart-id="line1" :option="line1Opt_2"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                line1Opt_2: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "活动花费",
                        data: [1500.9,14200.9,24000.9,13500.9,5267.9,17200.9, 6400.9]
                    }, {
                       name: "其它花费",
                       data: [500.9,4200.9,4000.9,3500.9,15267.9,7200.9, 16400.9]
                    }],
                },
            }
        }
    }
</script>
```
:::

:::demo 占比折线图 | 数据请传入占比
```html
<template>
    <art-chart chart-id="line2" :option="line2Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                line2Opt: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "总花费",
                        data: [10,15,35,80,66,22, 11]
                    }],
                },
            }
        }
    }
</script>
```
:::

:::demo 对比折线图 | 目前只支持两条数据对比 | 缺省设为 null 即可
```html
<template>
    <art-chart chart-id="line3" :option="line3Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                line3Opt: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "今日浏览",
                        data: [0, 2, 6, 0, 0, 1, null]
                    }, {
                       name: "昨日浏览",
                       data: [0, 0, 4, 10, 3, 1, 2]
                   }],
                },
            }
        }
    }
</script>
```
:::

:::demo 堆积折线图
```html
<template>
    <art-chart chart-id="line4" :option="line4Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                line4Opt: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26","10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "已成交",
                        data: [10, 20, 60, 10, 10, 10, 20, 10, 20, 60, 10, 10, 10, 20]
                    }, {
                        name: "待成交",
                        data: [0, 0, 4, 10, 3, 1, 2, 0, 0, 4, 10, 3, 1, 2]
                    }, {
                        name: "已外呼",
                        data: [10, 20, 60, 10, 10, 10, 20, 10, 20, 60, 10, 10, 10, 20]
                    }],
                },
            }
        }
    }
</script>
```
:::

### 折线图API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| chartId | String | 表Id | 是 | - |
| auxi | Boolean | 是否需要辅助工具 | 否 | `false` |
| error | Boolean | 开启辅助工具时生效，辅助工具是否为错误状态 | 否 | `false` |
| none | Boolean | 开启辅助工具时生效，辅助工具是否为空状态 | 否 | `false` |
| loading | Boolean | 开启辅助工具时生效，辅助工具是否为加载中状态 | 否 | `false` |
| custom | Boolean | 是否使用自定义 option | 否 | `false` |
| option | Object | 表配置对象。如果使用自定义 option ，[参考配置](//echarts.baidu.com/option.html) | 是 | - |
| option[dataAxis] | Array[`name[String]` `data[Array]`] | 非自定义 option 时的图表维度数据 | 是 | - |
| options[data] | Array | 非自定义 option 时的图表数据 | 是 | - |
| options[limit] | Number | 非自定义 option 时的缩放最大显示数量 | 否 | `10` |
| option[resize] | Boolean | 是否resize刷新 | 否 | `true` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-retry | 开启辅助工具时生效，点击重试触发事件 | - | - |

---

<h2 id="mapChart">中国地图</h2>

### 代码演示

:::demo 省份地图
```html
<template>
    <art-chart chart-id="map1" :option="map1Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                map1Opt: {
                    list: [
                        {name: "江苏", value: 735},
                        {name: "湖北", value: 381},
                        {name: "广西", value: 354},
                        {name: "新疆", value: 286},
                        {name: "河北", value: 286},
                        {name: "广东", value: 286},
                        {name: "浙江", value: 136},
                        {name: "北京", value: 122},
                        {name: "山东", value: 95},
                        {name: "福建", value: 7224}
                    ]
                },
            }
        }
    }
</script>
```
:::

:::demo 城市地图
```html
<template>
    <art-chart chart-id="map2" :option="map2Opt"></art-chart>
</template>
<script>
    export default {
        data () {
            return {
                map2Opt: {
                    list: [
                        {name: "成都市", value: 735},
                        {name: "武汉市", value: 381},
                        {name: "南宁市", value: 354},
                        {name: "南昌市", value: 286},
                        {name: "郑州市", value: 286},
                        {name: "广州市", value: 286},
                        {name: "杭州市", value: 136},
                        {name: "北京市", value: 122},
                        {name: "济南市", value: 95},
                        {name: "厦门市", value: 7224}
                    ]
                },
            }
        }
    }
</script>
```
:::

### 中国地图API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| chartId | String | 表Id | 是 | - |
| auxi | Boolean | 是否需要辅助工具 | 否 | `false` |
| error | Boolean | 开启辅助工具时生效，辅助工具是否为错误状态 | 否 | `false` |
| none | Boolean | 开启辅助工具时生效，辅助工具是否为空状态 | 否 | `false` |
| loading | Boolean | 开启辅助工具时生效，辅助工具是否为加载中状态 | 否 | `false` |
| custom | Boolean | 是否使用自定义 option | 否 | `false` |
| option | Object | 地图数据对象 | 是 | - |
| option[list] | Array[`name[String]` `value[Number]`] | 图表数据 | 是 | - |
| option[number] | Number | 需要显示排名的条数，为0为不显示 | 否 | `8` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-retry | 开启辅助工具时生效，点击重试触发事件 | - | - |

---

### 附录

图表组件id枚举值，目前统一为长度6的字符串。可对照 [Echarts Demo](//echarts.baidu.com/examples/index.html)

| 枚举值 | 参数说明 |
| :-------- | :--------| :--------| :--------| :--------|
| line{id} | Line图 |
| bar{id} | Bar图 |
| pie{id} | Pie图 |
| scatter{id} | Scatter图 |
| map{id} | Map图 |
| candlestick{id} | Candlestick图 |
| radar{id} | Radar图 |
| boxplot{id} | Boxplot图 |
| heatmap{id} | Heatmap图 |
| graph{id} | Graph图 |
| tree{id} | Tree图 |
| treemap{id} | Treemap图 |
| sunburst{id} | Sunburst图 |
| parallel{id} | Parallel图 |
| sankey{id} | Sankey图 |
| funnel{id} | Funnel图 |
| gauge{id} | Gauge图 |
| pictorialBar{id} | PictorialBar图 |
| themeRiver{id} | ThemeRiver图 |
| calendar{id} | Calendar图 |
| custom{id} | Custom图 |
| dataset{id} | Dataset图 |

---

<script>
    export default {
        data () {
            return {
                pie1Opt: null,
                auxiOpt: {
                    error: true,
                    none: false,
                    loading: false
                },

                bar1Opt: {
                    dataAxis: ["15以下","16-25","26-35","35-45","46-55","56以上"],
                    data: [100,200,300,200,100,50],
                },

                bar2Opt: {
                    dataAxis: ["3c","电商","服装","家具","美妆","汽车","食品","图书"],
                    data: [250,200,100,150,3000,47,100,68],
                },
                bar3Opt: {
                    dataAxis: ["00:00","01:00","02:00","03:00","04:00","05:00"],
                    data: [{
                        "name": "广告渠道",
                        "data": [1069,131,27,500,400,300]
                    }, {
                       "name": "其他渠道",
                       "data": [58,389,27,74,200,100,50]
                   }],
                },
                bar4Opt: {
                    dataAxis: ["2018-01-19","2018-01-20","2018-01-21"],
                    data: [{
                        "name": "广告渠道",
                        "data": [5.26,35,63.16]
                    }, {
                       "name": "其他渠道",
                       "data": [62.26,100,17.65]
                   }],
                },
                pie2Opt: {
                    dataAxis: ["站内流量","站外流量","线下流量","其它"],
                    data: [450,250,200,100]
                },
                radar1Opt: {
                    indicator: [
                      { name: '参与人数', max: 5},
                      { name: '活动转化', max: 5},
                      { name: '吸引力指数', max: 5},
                      { name: '羊毛指数', max: 5},
                      { name: '访问量', max: 5}
                    ],
                    data: [{
                        "name": "该活动综合得分",
                        "data": [4.2, 4, 4.4, 3.8, 4]
                    }, {
                       "name": "同类活动平均得分",
                       "data": [3.4, 2, 5, 4, 4]
                   }],
                },
                line1Opt: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "总花费",
                        data: [500.9,4200.9,4000.9,3500.9,5267.9,7200.9, 6400.9]
                    }],
                },
                line1Opt_2: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "活动花费",
                        data: [1500.9,14200.9,24000.9,13500.9,5267.9,17200.9, 6400.9]
                    }, {
                       name: "其它花费",
                       data: [500.9,4200.9,4000.9,3500.9,15267.9,7200.9, 16400.9]
                   }],
                },
                line2Opt: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "总花费",
                        data: [10,15,35,80,66,22, 11]
                    }],
                },
                line3Opt: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "今日浏览",
                        data: [0, 2, 6, 0, 0, 1, null]
                    }, {
                       name: "昨日浏览",
                       data: [0, 0, 4, 10, 3, 1, 2]
                   }],
                },
                line4Opt: {
                    dataAxis: ["10-20","10-21","10-22","10-23","10-24","10-25","10-26","10-20","10-21","10-22","10-23","10-24","10-25","10-26"],
                    data: [{
                        name: "已成交",
                        data: [10, 20, 60, 10, 10, 10, 20, 10, 20, 60, 10, 10, 10, 20]
                    }, {
                        name: "待成交",
                        data: [0, 0, 4, 10, 3, 1, 2, 0, 0, 4, 10, 3, 1, 2]
                    }, {
                        name: "已外呼",
                        data: [10, 20, 60, 10, 10, 10, 20, 10, 20, 60, 10, 10, 10, 20]
                    }],
                },
                map1Opt: {
                    list: [
                        {name: "江苏", value: 735},
                        {name: "湖北", value: 381},
                        {name: "广西", value: 354},
                        {name: "新疆", value: 286},
                        {name: "河北", value: 286},
                        {name: "广东", value: 286},
                        {name: "浙江", value: 136},
                        {name: "北京", value: 122},
                        {name: "山东", value: 95},
                        {name: "福建", value: 7224}
                    ]
                },
                map2Opt: {
                    list: [
                        {name: "成都市", value: 735},
                        {name: "武汉市", value: 381},
                        {name: "南宁市", value: 354},
                        {name: "南昌市", value: 286},
                        {name: "郑州市", value: 286},
                        {name: "广州市", value: 286},
                        {name: "杭州市", value: 136},
                        {name: "北京市", value: 122},
                        {name: "济南市", value: 95},
                        {name: "厦门市", value: 7224}
                    ]
                },
            }
        },
        created(){
        },
        methods: {
            retry () {
                this.auxiOpt = {
                    error: false,
                    none: false,
                    loading: true
                }
                // 模拟发请求，2秒后出结果
                let timer = setTimeout(() => {
                    this.auxiOpt = {
                        error: false,
                        none: false,
                        loading: false
                    }
                    this.pie1Opt = {
                         outer: 150,
                         inner: 80,
                         other: 20
                     }
                    clearTimeout(timer);
                },2000)
            },
        }
    }
</script>
