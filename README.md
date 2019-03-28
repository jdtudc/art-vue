<div align=center>
    <img width="172" title="ArtVue - A component libraries for middle-back development built on Vue 2.x forked from FinDesign" alt="ArtVue - A component libraries for middle-back development built on Vue 2.x forked from FinDesign" src="static/logo.png"/>
</div>

# art-vue [![art-vue](https://img.shields.io/npm/v/art-vue.svg?style=flat-square)](https://www.npmjs.org/package/art-vue) [![NPM downloads](https://img.shields.io/npm/dt/art-vue.svg?style=flat-square)](https://npmjs.org/package/art-vue)

A component libraries for middle-back development built on Vue 2.x(forked from [FinDesign](https://findesign.jd.com))

## Git

- [Git Repo](https://github.com/artFE/art-vue.git)

## Demo

- [Demo](https://vue.artfe.club)

## Install

```bash
$ npm install art-vue --save
```

## Use

```javascript
import art from 'art-vue'
Vue.use(art)
```

```Html
<art-calendar type="range" :dateRange="['2017/08/01','2017/10/08']" placeholder="选择日期" :leftNav="true" @select="select"></art-calendar>
```

## Build

```bash
npm run build-styles
cd src
npm publish
```

## Components

- art-alert
- art-auxi
- art-backtop
- art-badge
- art-breadcrumb
- art-btn-drop
- art-button
- art-button-drop(Deprecated)
- art-calendar
- art-card
- art-chart
- art-checkbox
- art-countdown
- art-dropdown
- art-input
- art-input-drop
- art-left-nav
- art-loading-bar
- art-modal
- art-overlay
- art-pagination
- art-page
- art-page-size
- art-radio
- art-slider
- art-steps
- art-switch
- art-tabs
- art-tag
- art-textarea
- art-text-drop
- art-timeline
- art-tooltip

## Directives

- clickoutside
- innerscroll
- lazyload
- view

## Issues

[Issues](https://github.com/artFE/art-vue/issues)

## Contribute

[Contribute](https://github.com/artFE/art-vue/blob/master/CONTRIBUTE.md)

## Changelog

[Changelog](https://github.com/artFE/art-vue/blob/master/CHANGELOG.md)

## License

[MIT](https://github.com/artFE/art-vue/blob/master/LICENSE.md)
