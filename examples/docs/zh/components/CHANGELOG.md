## 更新日志

项目遵循 [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/) 语义化版本规范

<art-timeline type="changelog" v-for="(log, index) in changeLog" :key="index" :log="log"></art-timeline>

> 以下为Beta版，建议更新

<art-timeline type="changelog" v-for="(log, index) in betaChangeLog" :key="index" :log="log"></art-timeline>

---

<script>
    export default {
        data() {
            return {
                changeLog: [{
                   version: "2.0.0", date: "2019-03-28", status: 'success', changeList: [{
                        "type": "release", "desc": "基于 FinDesign 拓展为 Art Vue",
                    }]
                }],

                // Beta 数据
                betaChangeLog: [{
                   version: "1.2.12 & 1.2.13", date: "2019-01-11", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复 art-vue.css 未自动同步更新的问题",
                    }]
                }, {
                   version: "1.2.11", date: "2019-01-10", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复 input 组件初始值为数值0时不显示清空的问题",
                    }, {
                        "type": "fix", "desc": "修复 calendar 组件选择范围重置无效的问题",
                    }]
                }, {
                   version: "1.2.10", date: "2019-01-10", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复 calendar 组件部分六周月份显示不全问题和清空未重置值的问题",
                    }]
                }, {
                   version: "1.2.9", date: "2018-12-21", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复 backtop 组件部分浏览器获取高度不准确问题",
                    }, {
                        "type": "fix", "desc": "修复 input 组件在小尺寸中图标不居中问题",
                    }]
                }, {
                   version: "1.2.8", date: "2018-11-15", status: 'success', changeList: [{
                        "type": "fix", "desc": "优化 innerscroll 指令的体验",
                    }]
                }, {
                   version: "1.2.7", date: "2018-11-08", status: 'success', changeList: [{
                        "type": "fix", "desc": "backtop 组件路径引用 Backtop -> backtop",
                    }]
                }, {
                   version: "1.2.6", date: "2018-10-16", status: 'success', changeList: [{
                        "type": "feature", "desc": "calendar 组件支持动态响应 date/dateRange",
                    }]
                }, {
                   version: "1.2.5", date: "2018-10-11", status: 'success', changeList: [{
                        "type": "chore", "desc": "checkbox/radio 组件中 value 更换为非必填项",
                    }]
                }, {
                   version: "1.2.4", date: "2018-09-10", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复 pagination 组件中分页器不响应动态 total 的问题",
                    }]
                }, {
                   version: "1.2.3", date: "2018-08-30", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复特殊边界判断问题",
                    }]
                }, {
                   version: "1.2.0 & 1.2.1 & 1.2.2", date: "2018-08-28", status: 'success', changeList: [{
                        "type": "feature", "desc": "增加指令 lazyload 和 view",
                    }, {
                        "type": "chore", "desc": "优化 Backtop 组件，增加动画效果"
                    }]
                }, {
                   version: "1.1.5 & 1.1.6", date: "2018-07-30", status: 'success', changeList: [{
                        "type": "feature", "desc": "内置滚动条 innerscroll 支持拖动",
                    }]
                }, {
                   version: "1.1.4", date: "2018-07-12", status: 'success', changeList: [{
                        "type": "feature", "desc": "Menu 组件内部增加选中方法",
                    }, {
                        "type": "chore", "desc": "优化 Tree 组件"
                    }]
                }, {
                   version: "1.1.3", date: "2018-07-09", status: 'success', changeList: [{
                        "type": "chore", "desc": "Calendar 组件支持从后往前选择日期，支持点击同一天两次选中单天", "issueHref": "//git.jd.com/udc-public/jrv/issues/10", "issueNo": 10
                   }]
                }, {
                   version: "1.1.2", date: "2018-06-28", status: 'success', changeList: [{
                        "type": "fix", "desc": "Tree 组件点击图标进行展开收起时推送点击事件导致可能的选中项变动", "issueHref": "//git.jd.com/udc-public/jrv/issues/9", "issueNo": 9
                   }]
                }, {
                   version: "1.1.1", date: "2018-05-29", status: 'success', changeList: [{
                        "type": "chore", "desc": "Radio/Checkbox 组件增加禁用选中状态，Checkbox 组件增加非全选状态"
                    }]
                }, {
                   version: "1.1.0", date: "2018-05-29", status: 'success', changeList: [{
                        "type": "feature", "desc": "增加 Slider 组件"
                    }]
                }, {
                   version: "1.0.13", date: "2018-05-15", status: 'success', changeList: [{
                        "type": "fix", "desc": "select 组件支持监听数据变动对应渲染", "issueHref": "//git.jd.com/udc-public/jrv/issues/8", "issueNo": 8
                    }]
                }, {
                   version: "1.0.12", date: "2018-05-10", status: 'success', changeList: [{
                        "type": "chore", "desc": "modal 组件增加 type 为 2 时标题 slot", "issueHref": "//git.jd.com/udc-public/jrv/issues/7", "issueNo": 7
                    }]
                }, {
                   version: "1.0.10 && 1.0.11", date: "2018-05-09", status: 'success', changeList: [{
                        "type": "feature", "desc": "chart 组件增加堆积折线图"
                    }]
                }, {
                   version: "1.0.9", date: "2018-05-07", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复 calendar 组件选择单日中默认提示文案配置无效的问题", "issueHref": "//git.jd.com/udc-public/jrv/issues/5", "issueNo": 5
                    }]
                }, {
                   version: "1.0.8", date: "2018-04-28", status: 'success', changeList: [{
                        "type": "chore", "desc": "timeline 组件 changlog 类型支持配置链接",
                    }, {
                        "type": "fix", "desc": "chart 组件增加中国省份地图以及中国城市地图", "issueHref": "//git.jd.com/udc-public/jrv/issues/2", "issueNo": 2
                    }]
                }, {
                   version: "1.0.7", date: "2018-04-26", status: 'success', changeList: [{
                        "type": "feature", "desc": "chart 组件增加中国省份地图以及中国城市地图"
                    }]
                }, {
                   version: "1.0.5 && 1.0.6", date: "2018-04-26", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复 layout 组件无内边距时外边距异常的问题"
                    }]
                }, {
                   version: "1.0.4", date: "2018-04-26", status: 'success', changeList: [{
                        "type": "feature", "desc": "增加生成 art-vue.css 脚本"
                    }]
                }, {
                   version: "1.0.3", date: "2018-04-18", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复 checkbox/radio 组件同时具有 active/disabled 属性时样式异常的问题"
                    }]
                }, {
                   version: "1.0.2", date: "2018-04-02", status: 'success', changeList: [{
                        "type": "chore", "desc": "优化 tootip 组件样式",
                    }, {
                        "type": "fix", "desc": "修复 select 组件 disabled 状态下 hover 文字样式"
                    }]
                }, {
                   version: "1.0.1", date: "2018-03-29", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复选择器组件点击箭头无效的bug；辅助组件增加内容插槽"
                    }]
                }, {
                   version: "1.0.0", date: "2018-03-26", status: 'success', changeList: [{
                        "type": "release", "desc": "FIN DESIGN 品牌正式对外发布"
                    }]
                }, {
                   version: "0.5.4", date: "2018-03-23", status: 'success', changeList: [{
                        "type": "chore", "desc": "优化left-nav 组件横向排列样式"
                    }]
                }, {
                   version: "0.5.3", date: "2018-03-22", status: 'success', changeList: [{
                        "type": "chore", "desc": "left-nav 组件支持横向排列"
                    }]
                }, {
                   version: "0.5.2", date: "2018-03-16", status: 'success', changeList: [{
                        "type": "chore", "desc": "优化 timeline 组件 changelog 类型样式"
                    }]
                }, {
                   version: "0.5.1", date: "2018-03-13", status: 'success', changeList: [{
                        "type": "feature", "desc": "统一品牌标识，由 art-PRO 替换为 FIN DESIGN"
                    }]
                }, {
                   version: "0.5.0", date: "2018-03-08", status: 'success', changeList: [{
                        "type": "feature", "desc": "支持单文件组件按需引入"
                    }]
                }, {
                   version: "0.4.1", date: "2018-02-23", status: 'success', changeList: [{
                        "type": "chore", "desc": "优化loadingbar组件"
                    }]
                }, {
                    version: "0.4.0", date: "2018-01-24", status: 'success', changeList: [{
                        "type": "feature", "desc": "增加layout布局"
                    }, {
                        "type": "feature", "desc": "增加backtop组件"
                    }, {
                        "type": "feature", "desc": "增加chart组件"
                    }, {
                        "type": "feature", "desc": "增加tooltip组件"
                    }, {
                        "type": "chore", "desc": "优化button组件中线框按钮的按下样式"
                    }]
                }, {
                    version: "0.3.0", date: "2018-01-16", status: 'success', changeList: [{
                        "type": "feature", "desc": "增加textarea组件"
                    }, {
                        "type": "feature", "desc": "增加timeline组件"
                    }]
                }, {
                    version: "0.2.1", date: "2018-01-15", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复page/pageSize中border在FF下显示异常的问题"
                    }]
                }, {
                    version: "0.2.0", date: "2018-01-12", status: 'success', changeList: [{
                        "type": "feature", "desc": "增加alert/badge/card/tag四个组件"
                    }, {
                        "type": "chore", "desc": "优化内置滚动条指令"
                    }, {
                        "type": "fix", "desc": "修复分页页数不更新的问题"
                    }]
                }, {
                    version: "0.1.3", date: "2018-01-05", status: 'success', changeList: [{
                        "type": "fix", "desc": "修复text-drop组件选中项在设置宽度情况下不溢出异常的问题"
                    }]
                }, {
                    version: "0.1.2", date: "2018-01-02", status: 'success', changeList: [{
                        "type": "chore", "desc": "Modal组件以插件形式调用时增加回调函数配置，并且重置提示内容"
                    }]
                }, {
                    version: "0.1.1", date: "2017-12-29", status: 'success', changeList: [{
                        "type": "chore", "desc": "优化button/input样式"
                    }, {
                        "type": "chore", "desc": "优化breadcrumb/countdown/loading-bar"
                    }, {
                        "type": "fix", "desc": "left-nav点击激活项异常的问题"
                    }]
                }, {
                    version: "0.1.0", date: "2017-12-27", status: 'success', changeList: [{
                        "type": "release", "desc": "对外提供支持。已拥有 20 个组件，均已在京东金融业务中使用"
                    }]
                },
                {
                    version: "0.0.34", date: "2017-12-19", status: 'disabled', changeList: [{
                        "type": "fix", "desc": "innerscroll;text-drop"
                    }]
                }, {
                    version: "0.0.33", date: "2017-12-12", status: 'disabled', changeList: [{
                        "type": "fix", "desc": "innerscroll;leftNav"
                    }, {
                        "type": "chore", "desc": "优化使用dropdown组件中间隙mouseleave的问题"
                    }]
                }, {
                    version: "0.0.32 & 0.0.31", date: "2017-12-09", status: 'disabled', changeList: [{
                        "type": "fix", "desc": "pagination;textDrop"
                    }]
                }, {
                    version: "0.0.30", date: "2017-12-09", status: 'disabled', disabled: [{
                        "type": "feature", "desc": "增加calendar组件点击外部收起功能"
                    }]
                }, {
                    version: "0.0.29", date: "2017-12-09", status: 'disabled', changeList: [{
                        "type": "feature", "desc": "增加内置滚动和点击外部指令;增加text-drop组件"
                    }, {
                        "type": "fix", "desc": "优化与dropdown相关组件"
                    }]
                }, {
                    version: "0.0.28", date: "2017-12-08", status: 'disabled', changeList: [{
                        "type": "fix", "desc": "scss compiler"
                    }]
                }, {
                    version: "0.0.27", date: "2017-12-05", status: 'disabled', changeList: [{
                        "type": "feature", "desc": "art-left-nav组件支持数据响应"
                    }]
                }, {
                    version: "0.0.26 & 0.0.25", date: "2017-12-05", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "art-dropdown组件样式优化"
                    }]
                }, {
                    version: "0.0.24", date: "2017-12", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "art-modal组件样式优化"
                    }]
                }, {
                    version: "0.0.23", date: "2017-12", status: 'disabled', changeList: [{
                        "type": "feature", "desc": "增加art-loading-bar的插件，建议全局使用，暂不推荐组件方式使用"
                    }, {
                        "type": "feature", "desc": "增加art-modal的插件调用方式，目前只支持错误异常类型type: 3"
                    }]
                }, {
                    version: "0.0.22 & 0.0.21", date: "2017-12", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "art-calendar增加快捷导航的回调，对外推送quick-select事件"
                    }]
                }, {
                    version: "0.0.20", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "art-calendar增加方法setDate，可外部设置时间"
                    }]
                }, {
                    version: "0.0.19", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "fix", "desc": "修复art-calendar组件默认设置时间戳 展示问题"
                    }]
                }, {
                    version: "0.0.18", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "art-auxi组件增加显示优化，只有需要时候才显示容器"
                    }, {
                        "type": "chore", "desc": "art-page组件优化为仅在页数大于1的时候才显示"
                    }]
                }, {
                    version: "0.0.17", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "feature", "desc": "增加辅助art-auxi组件"
                    }, {
                        "type": "chore", "desc": "art-modal组件样式优化"
                    }]
                }, {
                    version: "0.0.16 & 0.0.15", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "art-button-drop组合组件优化，增加button点击回调"
                    }]
                }, {
                    version: "0.0.14", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "art-breadcrumb组件优化，增加不可点击项配置，增加当前项点击不跳转配置"
                    }]
                }, {
                    version: "0.0.13", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "art-radio组件增加slot节点"
                    }]
                }, {
                    version: "0.0.12", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "优化page-size组件"
                    }]
                }, {
                    version: "0.0.11 & 0.0.10", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "fix", "desc": "修复build报错"
                    }, {
                        "type": "fix", "desc": "修复小bug"
                    }]
                }, {
                    version: "0.0.9", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "优化button组件样式，增加种类"
                    }]
                }, {
                    version: "0.0.8", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "fix", "desc": "修复left-nav组件父级选中配置问题"
                    }]
                }, {
                    version: "0.0.7", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "left-nav组件支持展开和选中配置"
                    }, {
                        "type": "chore", "desc": "优化日期组件宽度识别"
                    }, {
                        "type": "chore", "desc": "优化input组件样式"
                    }]
                }, {
                    version: "0.0.6", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "page-size组件UI调整优化"
                    }]
                }, {
                    version: "0.0.5 & 0.0.4 & 0.0.3", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "calendar组件UI调整优化"
                    }]
                }, {
                    version: "0.0.2", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "chore", "desc": "tabs组件样式调整，激活项下方不在有边框"
                    }, {
                        "type": "chore", "desc": "calendar组件增加 自定义 禁止选中日期的功能，参数为disabeldDate"
                    }]
                }, {
                    version: "0.0.1", date: "2017-11", status: 'disabled', changeList: [{
                        "type": "build", "desc": "内部项目使用。已拥有 20+ 个组件"
                    }]
                }],
            }
        }
    }
</script>


