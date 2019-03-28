## ArtVue 介绍

从 [FinDesign](https://findesign.jd.com) 中 Fork 出来单独维护的组件库

### FinDesign

在研发中台产品过程中，会出现不同的设计规范和实现方式，但页面跟组件会出现大量相似的，给设计师和工程师带来很多重复工作量，降低了产品的研发效率。作为一家金融科技公司，应该有一套自己的设计组件解决方案，我们（UDC部）经过项目实践和总结，沉淀出中台设计语言 `Fin Design`。

目的在于统一中台项目的前端 UI 设计，减少不必要的设计差异和实现成本，释放设计和前端的研发资源。`Fin Design` 是面向后台数据的，基于数据的传入，与组件相关的初始化数据是可自由配置的，接口形态决定了组件的展示和功能。

### 版本

[![art-vue](https://img.shields.io/npm/v/art-vue.svg)](https://www.npmjs.org/package/art-vue) [![NPM downloads](https://img.shields.io/npm/dt/art-vue.svg)](https://npmjs.org/package/art-vue)

### 组件列表

<p>
    <img width="1050" title="Fin Design 组件列表" alt="Art Vue 组件列表" src="//storage.360buyimg.com/static-res/tech/jrv/site/coms.png"/>
</p>

### 建议或意见

如果您在使用`Fin Design`的过程中遇到任何问题，或者有任何建议，都欢迎给我们提 [Issue](https://github.com/artFE/art-vue/issues) 或者 [Pull Request](https://github.com/artFE/art-vue/pulls)

### 贡献

- [陈嘉豪&lt;mcchen.club@gmail.com&gt;](https://github.com/ChenJiaH)

- [孙超&lt;sunchao5@jd.com&gt;](https://github.com/sun2dan)

- 如果您也想参与进来，请遵循 [开发原则](https://github.com/artFE/art-vue/blob/master/CONTRIBUTE.md)

---

<h2 id="download">安装与下载</h2>

### 使用 `npm` 安装

推荐使用 `npm` 的方式进行开发，享受 `node` 生态圈和 webpack 工具链带来的便利。通过 `npm` 安装的模块包，我们可以轻松的使用 `import` 或者 `require` 的方式引用

<div class="art-wiki-code">

```bash
$ npm install art-vue --save
```

</div>

### 下载设计源文件

<div class="art-download clearfix">
    <a class="btn-download" href="//storage.360buyimg.com/static-res/tech/jrv/origin/FinDesign_PSD.rar">
        <i class="icon icon-ps"></i>
        <div class="mask">
            <i class="icon-download"></i>
            <p class="tips">下载 psd 格式</p>
        </div>
    </a>
    <a class="btn-download" href="//storage.360buyimg.com/static-res/tech/jrv/origin/FinDesign_Sketch.sketch">
        <i class="icon icon-sketch"></i>
        <div class="mask">
            <i class="icon-download"></i>
            <p class="tips">下载 sketch 格式</p>
        </div>
    </a>
    <a class="btn-download" href="//storage.360buyimg.com/static-res/tech/jrv/origin/FinDesign_Axure.rplib">
        <i class="icon icon-axure"></i>
        <div class="mask">
            <i class="icon-download"></i>
            <p class="tips">下载 rp 格式</p>
        </div>
    </a>
</div>

---

## 快速上手

### 使用前准备

> 在使用之前，推荐学习 `Vue` 和 `ES2015` ，并正确配置 `Node.js` v6.x 或以上版本

### 基于模版工程开发

我们提供了一个模版工程，可以通过 [art-cli](https://github.com/artFE/art-cli) 工具快速获取，完成项目初始化

首先需要对 art-cli 进行安装，如果您之前已经安装过，可以跳过此步。

<div class="art-wiki-code">

```Bash
git clone https://github.com/artFE/art-cli.git
cd art-cli && npm install
npm link
```

</div>

然后拉取[模版商店](https://github.com/artFE/art-templates)中 `art-vue-pro_tpl` 模块

<div class="art-wiki-code">

```Bash
artcli init
Template name: art-vue-pro_tpl
Project name: 您要创建的项目名称
```

</div>

> 注意：window下请使用 Git Bah或者其他工具代替 cmd

当然，如果您不想使用 `art-cli` 工具，也可以直接从上述模版商店 clone 项目到本地

<div class="art-wiki-code">

```Bash
git clone https://github.com/artFE/art-templates.git myProject && cd myProject && git checkout art-vue-pro_tpl
```

</div>

### 标准开发

#### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件，如果是通过脚手架创建的项目，一般是 `main.js`

<div class="art-wiki-code">

```Javascript
import art from 'art-vue'
Vue.use(art)
```

</div>

#### 单个组件按需使用

一般用在单 `vue` 文件中

可以通过以下的写法来按需加载组件

<div class="art-wiki-code">

```Javascript
import Button from 'art-vue/components/button'
Vue.component('artButton', Button);
```

</div>


如果你使用了babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载。首先安装，并修改 `.babelrc` 文件：

<div class="art-wiki-code">

```JSON
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "art-vue",
    "libraryDirectory": "components"
  }]]
}
```

</div>

然后按需引入组件，就可以减小体积了：

<div class="art-wiki-code">

```Html
<template>
    <art-button size="large">查看Demo</art-button>
    <art-calendar type="range" :dateRange="['2017/08/01','2017/10/08']" placeholder="选择日期" :leftNav="true" @select=""></art-calendar>
</template>
<script>
    import {Button, Calendar} from 'art-vue'
    export default {
        data () {
            return {}
        },
        components: {
            artButton: Button,
            artCalendar: Calendar,
        }
    }
</script>
```

</div>

---

## 注意

### 使用webpack打包压缩

如果开启压缩的话，需要先将 `Art Vue` 中js编译成es5才可成功压缩。

<div class="art-wiki-code">

```Javascript
    {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/art-vue')],
    },
```

</div>

---

## 协议

[MIT](https://github.com/artFE/art-vue/blob/master/LICENSE)

<p style="margin-top: 0">Copyright (c) 2017-present, artFE</p>

---
