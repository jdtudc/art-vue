<h2 id="backtop">BackTop 返回顶部</h2>

### 代码演示

:::demo 基础用法 | 最简单的用法，也可以自定义样式，限制宽高：40px * 40px。
```html
<template>
    <p style="font-size: 14px; font-weight: bold; color: #283039;">向下滑动页面，右侧底部可以看到返回顶部的按钮</p>
    <art-backtop></art-backtop>
</template>
<script>
    export default {
        data () {
        }
    }
</script>
```
:::

### 返回顶部API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| show | Boolean | 是否显示返回顶部 | 否 | `false` |
| trans | String | 显隐动画，默认内置 `fade` ，如需自定义请定义动画样式 | 否 | `fade` |
| distance | Number | 滚动高度达到该值将显示，如果设置了 `custom` ，将不生效 | 否 | `200` |
| custom | Boolean | 是否完全自定义 | 否 | `false` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-click | 点击按钮触发回调，默认会直接滚动到顶部，如果需要自定义滚动效果，则配置 `custom` 去除默认事件 | - | - |

---

<h2 id="auxi">Auxi 辅助</h2>

### 代码演示

:::demo 基础用法 | 通过none/error/loading属性控制需要展示的内容，建议最多配置一个true，需要多个时引多个组件解决。
```html
<template>
    <div style="position:relative; min-height: 150px;">
        <art-auxi :none="false" :error="false" :loading="true"></art-auxi>
    </div>
    <div style="position:relative; min-height: 150px;">
        <art-auxi :none="auxiData.none" :error="auxiData.error" :loading="auxiData.loading" @on-retry="clickAuxiRetry"></art-auxi>
    </div>
    <div style="position:relative; min-height: 150px;">
        <art-auxi :none="true" :error="false" :loading="false"></art-auxi>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                auxiData: {
                    none: false,
                    error: true,
                    loading: false,
                }
            }
        },
        methods: {
            clickAuxiRetry () {
                this.auxiData.none = false;
                this.auxiData.error = false;
                this.auxiData.loading = true;

                let timer = setTimeout(() => {
                    this.auxiData.loading = false;
                    this.auxiData.error = true;
                    clearTimeout(timer);
                },2000)
            }
        }
    }
</script>
```
:::

:::demo 自定义提示内容 | 通过 none/error 插槽设置自定义文字内容。
```html
<template>
    <div style="position:relative; min-height: 150px;">
        <art-auxi :none="auxiData.none" :error="auxiData.error" :loading="auxiData.loading">
            <p slot="error">网络开小差了，<a href="javascript:;" @click="clickAuxiRetry">请点击重试~</a></p>
        </art-auxi>
    </div>
    <div style="position:relative; min-height: 150px;">
        <art-auxi :none="true" :error="false" :loading="false">
            <p slot="none">内容正在建设中...</p>
        </art-auxi>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                auxiData: {
                    none: false,
                    error: true,
                    loading: false,
                }
            }
        },
        methods: {
            clickAuxiRetry () {
                this.auxiData.none = false;
                this.auxiData.error = false;
                this.auxiData.loading = true;

                let timer = setTimeout(() => {
                    this.auxiData.loading = false;
                    this.auxiData.error = true;
                    clearTimeout(timer);
                },2000)
            }
        }
    }
</script>
```
:::

### 辅助API

#### Props：

| 参数名称 | 参数类型 | 参数说明 | 是否必传 | 默认值 |
| :-------- | :--------| :--------| :--------| :--------|
| none | Boolean | 是否显示无数据辅助提示 | 否 | `false` |
| error | Boolean | 是否显示错误辅助提示 | 否 | `false` |
| loading | Boolean | 是否显示加载中辅助提示 | 否 | `false` |

### 事件

| 事件名称 | 事件说明 | 返回参数类型 | 返回参数说明 |
| :-------- | :--------| :--------| :--------|
| on-retry | 点击错误中的重试触发事件 | - | - |

---

<h2 id="loadingBar">LoadingBar 加载进度</h2>

### 代码演示

:::demo 基础用法
```html
<template>
    <art-button type="blue" @click="loadingConfig">进度条样式配置，成黑底蓝条</art-button>
    <art-button type="blue" @click="loadingStart">进度条加载开始</art-button>
    <art-button type="blue" @click="loadingUpdate">进度条进度设置</art-button>
    <art-button type="blue" @click="loadingFinish">进度条加载完成</art-button>
    <art-button type="blue" @click="loadingError">进度条加载错误</art-button>
</template>
<script>
    import loadingBar from '../../../../src/components/loading-bar/loading-bar'

    export default {
        data () {
            return {
            }
        },
        methods: {
            loadingConfig () {
                loadingBar.config({
                    barBg: 'black',
                    successBg: 'blue',
                    failBg: 'red'
                });
            },
            loadingStart () {
                loadingBar.start();
            },
            loadingUpdate () {
                loadingBar.update(60);
            },
            loadingFinish () {
                loadingBar.finish();
            },
            loadingError () {
                loadingBar.error();
            },
        }
    }
</script>
```
:::

---

<script>
    import loadingBar from '../../../../src/components/loading-bar/loading-bar'
    export default {
        data () {
            return {
                auxiData: {
                    none: false,
                    error: true,
                    loading: false
                }
            }
        },
        methods: {
            clickAuxiRetry () {
                this.auxiData.none = false;
                this.auxiData.error = false;
                this.auxiData.loading = true;

                let timer = setTimeout(() => {
                    this.auxiData.loading = false;
                    this.auxiData.error = true;
                    clearTimeout(timer);
                },2000)
            },
            loadingConfig () {
                loadingBar.config({
                    barBg: 'black',
                    successBg: 'blue',
                    failBg: 'red'
                });
            },
            loadingStart () {
                loadingBar.start();
            },
            loadingUpdate () {
                loadingBar.update(60);
            },
            loadingFinish () {
                loadingBar.finish();
            },
            loadingError () {
                loadingBar.error();
            },
        }
    }
</script>
