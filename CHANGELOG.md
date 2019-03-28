## 更新日志

项目遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范

### v2.0.0

`2019-03-28`

- feat: 基于 FinDesign 拓展为 Art Vue

### v1.2.12 && v1.2.13

`2019-01-11`

- fix: 修复 jrv-vue.css 未自动同步更新的问题

### v1.2.11

`2019-01-10`

- fix: 修复 input 组件初始值为数值0时不显示清空的问题
- fix: 修复 calendar 组件选择范围重置无效的问题

### v1.2.10

`2019-01-10`

- fix: 修复 calendar 组件部分六周月份显示不全问题和清空未重置值的问题

### v1.2.9

`2018-12-21`

- fix: 修复 backtop 组件部分浏览器获取高度不准确问题
- fix: 修复 input 组件在小尺寸中图标不居中问题

### v1.2.8

`2018-11-15`

- fix: 优化 innerscroll 指令的体验

### v1.2.7

`2018-11-08`

- fix: backtop 组件路径引用 Backtop -> backtop

### v1.2.6

`2018-10-16`

- feature: calendar 组件支持动态响应 date/dateRange

### v1.2.5

`2018-10-11`

- chore: checkbox/radio 组件中 value 更换为非必填项

### v1.2.4

`2018-09-10`

- fix: 修复 pagination 组件中分页器不响应动态 total 的问题

### v1.2.3

`2018-08-30`

- fix: 修复特殊边界判断问题

### v1.2.0 && v1.2.1 && v1.2.2

`2018-08-28`

- feature: 增加指令 lazyload 和 view
- chore: 优化 Backtop 组件，增加动画效果

### v1.1.5 && v1.1.6

`2018-07-30`

- feature: 内置滚动条 innerscroll 支持拖动

### v1.1.4

`2018-07-12`

- feature: Menu 组件内部增加选中方法
- chore: 优化 Tree 组件

### v1.1.3

`2018-07-09`

- chore: Calendar 组件支持从后往前选择日期，支持点击同一天两次选中单天

### v1.1.2

`2018-06-28`

- fix: Tree 组件点击图标进行展开收起时推送点击事件导致可能的选中项变动

### v1.1.1

`2018-05-29`

- chore: Radio/Checkbox 组件增加禁用选中状态，Checkbox 组件增加非全选状态

### v1.1.0

`2018-05-29`

- feature: 增加 Slider 组件

### v1.0.13

`2018-05-15`

- fix: select 组件支持监听数据变动对应渲染

### v1.0.12

`2018-05-10`

- chore: modal 组件增加 type 为 2 时标题 slot

### v1.0.10 && v1.0.11

`2018-05-09`

- feature: chart 组件增加堆积折线图

### v1.0.9

`2018-05-07`

- fix: 修复 calendar 组件选择单日中默认提示文案配置无效的问题

### v1.0.8

`2018-04-28`

- chore: timeline 组件 changlog 类型支持配置链接
- fix: 修复 chart 组件中的中国城市地图不显示的问题

### v1.0.7

`2018-04-26`

- feature: chart 组件增加中国省份地图以及中国城市地图

### v1.0.5 && v1.0.6

`2018-04-26`

- fix: 修复 layout 组件无内边距时外边距异常的问题

### v1.0.4

`2018-04-26`

- feature: 增加生成 jrv-vue.css 脚本

### v1.0.3

`2018-04-18`

- fix: 修复 checkbox/radio 组件同时具有 active/disabled 属性时样式异常的问题

### v1.0.2

`2018-04-02`

- chore: 优化 tootip 组件样式
- fix: 修复 select 组件 disabled 状态下 hover 文字变色bug

### v1.0.1

`2018-03-29`

- fix: 修复选择器组件点击箭头无效的bug；辅助组件增加内容插槽

### v1.0.0

`2018-03-26`

- release: FIN DESIGN 品牌正式对外发布

### v0.5.4

`2018-03-23`

- chore: 优化left-nav 组件横向排列样式

### v0.5.3

`2018-03-22`

- chore: left-nav 组件支持横向排列

### v0.5.2

`2018-03-16`

- chore: 优化 timeline 组件 changelog 类型样式

### v0.5.1

`2018-03-13`

- feature: 统一品牌标识，由 JRV-PRO 替换为 FIN DESIGN

### v0.5.0

`2018-03-08`

- feature: 支持单文件组件按需引入

### v0.4.1

`2018-02-23`

- chore: 优化loadingbar组件

### v0.4.0

`2018-01-24`

- feature: 增加layout布局
- feature: 增加backtop组件
- feature: 增加chart组件
- feature: 增加tooltip组件
- chore: 优化button组件中线框按钮的按下样式

### v0.3.0

`2018-01-16`

- feature: 增加textarea组件
- feature: 增加timeline组件

### v0.2.1

`2018-01-15`

- fix: 修复page/pageSize中border在FF下显示异常的问题

### v0.2.0

`2018-01-12`

- feature: 增加alert/badge/card/tag四个组件
- chore: 优化内置滚动条指令
- fix: 修复分页页数不更新的问题

### v0.1.3

`2018-01-05`

- fix: 修复text-drop组件选中项在设置宽度情况下不溢出异常的问题

### v0.1.2

`2018-01-02`

- chore: Modal组件以插件形式调用时增加回调函数配置，并且重置提示内容

### v0.1.1

`2017-12-29`

- fix: left-nav点击激活项异常的问题
- chore: 优化button/input样式
- chore: 优化breadcrumb/countdown/loading-bar

### v0.1.0

`2017-12-27`

- 对外提供支持
- 已拥有`20`个组件，均已在京东金融业务中使用

---

> 以下为Beta版，建议更新

### v0.0.34

- fix: innerscroll;text-drop

### v0.0.33

- fix: innerscroll;leftNav
- chore: 优化使用dropdown组件中间隙mouseleave的问题

### v0.0.31&v0.0.32

- fix: pagination;textDrop

### v0.0.30

- add: 增加calendar组件点击外部收起功能

### v0.0.29

- add: 增加内置滚动和点击外部指令;增加text-drop组件
- fix: 优化与dropdown相关组件

### v0.0.28

- fix: scss compiler

### v0.0.27

- jrv-left-nav组件支持数据响应

### v0.0.25&v0.0.26

- jrv-dropdown组件样式优化

### v0.0.24

- jrv-modal组件样式优化

### v0.0.23

- 增加jrv-loading-bar的插件，建议全局使用，暂不推荐组件方式使用
- 增加jrv-modal的插件调用方式，目前只支持错误异常类型type: 3

### v0.0.21&v0.0.22

- jrv-calendar增加快捷导航的回调，对外推送quick-select事件

### v0.0.20

- jrv-calendar增加方法setDate，可外部设置时间

### v0.0.19

- 修复jrv-calendar组件默认设置时间戳 展示问题

### v0.0.18

- jrv-auxi组件增加显示优化，只有需要时候才显示容器
- jrv-page组件优化为仅在页数大于1的时候才显示

### v0.0.17

- 增加辅助jrv-auxi组件
- jrv-modal组件样式优化

### v0.0.15 & v0.0.16

- jrv-button-drop组合组件优化，增加button点击回调

### v0.0.14

- jrv-breadcrumb组件优化，增加不可点击项配置，增加当前项点击不跳转配置

### v0.0.13

- jrv-radio组件增加slot节点

### v0.0.12

- 优化page-size组件

### v0.0.10 & v0.0.11

- 修复build报错
- 修复小bug

### v0.0.9

- 优化button组件样式，增加种类

### v0.0.8

- 修复left-nav组件父级选中配置问题

### v0.0.7

- left-nav组件支持展开和选中配置
- 优化日期组件宽度识别
- 优化input组件样式

### v0.0.6

- page-size组件UI调整优化

### v0.0.3 & v0.0.4 & v0.0.5

- calendar组件UI调整优化

### v0.0.2

- tabs组件样式调整，激活项下方不在有边框
- calendar组件增加 自定义 禁止选中日期的功能，参数为disabeldDate

### v0.0.1

- 正式投入使用
- 已拥有`20+`个组件
