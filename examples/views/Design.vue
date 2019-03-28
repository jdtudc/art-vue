<template>
  <div class="art-site-design">
    <div class="art-site-design-header">
      <header class="clearfix">
        <a class="art-site-design-header-logo" href="/">
          <img src="static/logo.png" alt="logo">
        </a>
        <div class="art-site-design-header-menu">
          <a :class="[menu.active && 'active']" href="javascript:;" v-for="(menu, index) in menuData" :key="index" v-text="menu.name" @click="menu.path && pushTo(menu.path)"></a>
        </div>
      </header>
      <div class="art-site-design-header-endnote">
        <span v-text="endnote"></span>
      </div>
    </div>
    <div class="art-site-design-wrap">
      <transition name="fade-in">
        <div class="art-site-design-nav" v-if="endnote" :class="[needFixed && 'art-site-design-nav_fixed']" :style="styles">
          <nav :class="[nav.name === curNav && 'active']" v-for="(nav, index) in navData">
            <p @click="pushTo(nav.path)">{{nav.id ? (nav.endnote + '.' + nav.name) : nav.name}}</p>
            <ul v-if="nav.name === curNav">
              <li v-for="(subNav, idx) in nav.subNavData" v-text="subNav.name"
                  @click="pushTo(subNav.path)"></li>
            </ul>
          </nav>
        </div>
      </transition>
      <div class="art-site-design-cont">
        <div class="art-markdown art-design-wiki">
          <transition name="multi-fade-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <div class="footer">
      <footer>
        <div class="footer-wrap">
          <div class="footer-cont">
            <div class="row no-gutter">
              <div class="col-6">
                <div class="ft-title">相关资源</div>
                <div class="ft-cont">
                  <ul>
                    <li><a target="_blank" href="https://vuep.artfe.club">Art Vue Pro</a></li>
                    <li><a target="_blank" href="https://vuem.artfe.club">Art Vue Mobile</a></li>
                    <li><a href="#/components/summary#download">FinDesign 设计源文件</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-6">
                <div class="ft-title">帮助</div>
                <div class="ft-cont">
                  <ul>
                    <li><a target="_blank" href="https://www.npmjs.com/package/art-vue">NPM</a></li>
                    <li><a href="#/components/changelog">更新记录</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-6">
                <div class="ft-title">联系我们</div>
                <div class="ft-cont">
                  <ul>
                    <li><a href="mailto:mcchen.club@gmail.com">陈嘉豪&lt;mcchen.club@gmail.com&gt;</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-6">
                <div class="ft-title">更多产品</div>
                <div class="ft-cont">
                  <ul>
                    <li><a target="_blank" href="https://monitor.artfe.club" title="极简小程序错误监控平台">ArtMonitor</a></li>
                    <li><a target="_blank" href="https://doc.artfe.club" title="新一代高效接口文档平台">ArtDoc</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p class="copyright">Copyright (c) 2018-present    by McChen&lt;mcchen.club@gmail.com&gt;</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
	import config from '../json/config.json'

	export default {
		data() {
			return {
				menuData: [
					{name: "组件", path: "/components/summary", active: false},
					{name: "设计语言", active: true}
				],
				navData: config.designData,
				curNav: null,
				endnote: null,
				needFixed: false,
				styles: null,
				clearScroll: false,
			}
		},
		mounted() {
			let timer = setTimeout(() => {
				let sTop = document.documentElement.scrollTop || document.body.scrollTop;
				let pageH = document.body.clientHeight;
				let navH = 0
				if (document.getElementsByClassName("art-site-components-nav").length > 0) {
					navH = document.getElementsByClassName("art-site-components-nav")[0].clientHeight
				}
				if (sTop < 105) {
					this.needFixed = false
					this.styles = {top: '0px'}
				} else if (sTop < pageH - 630 - navH) {
					this.needFixed = true
					this.styles = {top: '60px'}
				} else {
					this.needFixed = false
					this.styles = {top: 'auto', bottom: '120px'}
				}
				clearTimeout(timer)
			},50)
			window.onscroll = () => {
				if (!this.clearScroll) {
					let sTop = document.documentElement.scrollTop || document.body.scrollTop;
					let pageH = document.body.clientHeight;
					let navH = 0
					if (document.getElementsByClassName("art-site-design-nav").length > 0) {
						navH = document.getElementsByClassName("art-site-design-nav")[0].clientHeight
					}
					if (sTop < 105) {
						this.needFixed = false
						this.styles = {top: '0px'}
					} else if (sTop < pageH - 630 - navH) {
						this.needFixed = true
						this.styles = {top: '60px'}
					} else {
						this.needFixed = false
						this.styles = {top: 'auto', bottom: '120px'}
					}
				}
			}
		},
		destroyed() {
			this.clearScroll = true;
		},
		watch: {
			'$route': function (to, from) {
				this.curNav = to.name;
				document.title = to.name + ' - FIN DESIGN';
				this.navData.forEach((item) => {
					if (item.name === this.curNav) {
						this.endnote = item.endnote;
					}
				});
			}
		},
		methods: {
			pushTo(path) {
				this.$router.push({path: path})
			},
		},
		computed: {
		},
		components: {}
	}
</script>
<style type="text/scss" lang="scss">
  @import '../../src/styles/index';

  .art-site-design {
    &-header {
      position: relative;
      padding: 48px 6.25% 20px;
      min-height: 120px;
      box-sizing: border-box;
      header {
        position: relative;
      }
      &-logo {
        display: block;
        img {
          vertical-align: top;
        }
      }
      &-menu {
        position: absolute;
        right: 120px;
        top: 3px;
        a {
          position: relative;
          display: inline-block;
          line-height: 25px;
          font-size: $sizeMedium;
          padding: 14px 0;
          color: $main;
          margin-left: 48px;
          &:first-child {
            margin-left: 0;
          }
          &:after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            height: 3px;
            width: 0;
            transition: all $animateTime;
            transform: translate(-50%, 0);
            background-color: $blue;
          }
        }
        a.active, a:hover {
          color: $blue;
          &:after {
            width: 32px;
          }
        }
      }
      &-endnote {
        position: absolute;
        right: 0;
        top: 120px;
        height: 22px;
        width: 6.25%;
        span {
          position: absolute;
          right: calc(100% - 2px);
          color: $mainWeak;
          font-size: $sizeMedium;
          line-height: 22px;
          text-align: right;
          letter-spacing: 4px;
          white-space: nowrap;
        }
        &:after {
          content: "";
          position: absolute;
          display: block;
          left: 10px;
          right: 0;
          top: 10.5px;
          height: 1px;
          background: $borderColor;
        }
      }
    }
    &-wrap {
      position: relative;
      padding: 0 6.25%;
      margin-top: 48px;
    }
    &-nav {
      position: absolute;
      width: 170px;
      &_fixed {
        position: fixed;
      }
      nav {
        margin-top: 30px;
        &:first-child {
          margin-top: 0;
        }
        p, li {
          font-size: $sizeNormal;
          line-height: 20px;
          color: $mainWeak;
          white-space: nowrap;
          cursor: pointer;
        }
        ul {
          position: relative;
          border-left: 2px solid $borderColor;
          padding-left: 20px;
          margin-top: 24px;
          li {
            margin-top: 22px;
            line-height: 20px;
            &:first-child {
              margin-top: 0;
            }
          }
        }
        &.active {
          p {
            color: $mainStrong;
            font-weight: bold;
          }
          li {
            color: $main;
          }
        }
      }
    }
    &-cont {
      margin-left: 170px;
      .art-markdown {
        padding: 0 120px;
        .art-row {
          .art-color-item {
            float: left;
            width: calc((100% - 72px) / 3);
            margin-left: 30px;
            margin-top: 20px;
            padding: 16px 18px 14px;
            border-radius: $borderRadius;
            &:nth-child(3n+1) {
              margin-left: 0;
            }
            .color-name, .color-value {
              line-height: 30px;
              font-weight: bold;
              color: #ffffff;
              margin-top: 0;
            }
            .color-name {
              font-size: 24px;
            }
            .color-value {
              font-size: $sizeMedium;
            }
            &_dark {
              .color-name, .color-value {
                color: $mainStrong;
              }
            }
          }
          .art-font-desc {
            font-size: 0;
            margin-top: 5px;
            strong, span {
              font-size: $sizeNormal;
              color: $main;
              line-height: 2;
            }
            &:nth-child(1) {
              margin-top: 10px;
            }
          }
          .art-font-item {
            line-height: 18px;
            margin-top: 45px;
            font-size: 0;
            &:nth-child(1) {
              margin-top: 55px;
            }
            span {
              display: inline-block;
              padding-left: 30px;
              white-space: nowrap;
            }
            span:nth-child(1) {
              max-width: 190px;
              width: 20%;
            }
            span:nth-child(2) {
              max-width: 250px;
              width: 30%;
            }
            span:nth-child(3) {
            }
          }
          .art-icon-eg {
            float: left;
            width: 360px;
            height: 360px;
            background: url("//storage.360buyimg.com/static-res/tech/jrv/site/eg-icon.png") no-repeat center center;
            margin-top: 40px;
          }
          .art-icon-list {
            float: left;
            margin-left: 50px;
            padding-left: 0;
            width: calc(100% - 420px);
            margin-top: 40px;
            li {
              float: left;
              position: relative;
              display: inline-block;
              text-align: center;
              margin-bottom: 40px;
              margin-left: 50px;
              min-width: 4em;
              p {
                position: relative;
                display: inline-block;
                color: $main;
                font-size: $sizeSmall;
                padding: 26px 0 5px;
                margin-top: 0;
                i {
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  margin: 0 auto;
                  width: 20px;
                  height: 20px;
                  background-position: left top;
                  background-repeat: no-repeat;
                  background-size: 100%;
                  transition: all $animateTime ease;
                }
              }
              &:hover {
                p {
                  i {
                    background-position: left -20px;
                  }
                }
              }
            }
          }
        }

        // 表格
        .table1 {
          margin-top: 30px;
          th, td {
            &.red {
              color: $red;
            }
            &:nth-of-type(1) {
              width: 12%;
            }
            &:nth-of-type(2) {
              width: 36%;
              min-width: 310px;
            }
            &:nth-of-type(3) {
              width: 6%;
              text-align: center;
              padding-left: 0;
            }
            &:nth-of-type(4) {
              width: 12%;
              text-align: right;
            }
            &:nth-of-type(5) {
              width: 10%;
              text-align: right;
            }
            &:nth-of-type(6) {
              width: 8%;
              text-align: center;
            }
            &:nth-of-type(7) {
              text-align: center;
              padding-left: 0;
            }
          }
          td {
            &.red {
              color: $red;
            }
            &:nth-of-type(2) {
              font-size: 0;
              span, .art-countdown {
                font-size: 12px;
                display: inline-block;
                vertical-align: middle;
              }
              .art-countdown {
                width: 120px;
                margin-left: 10px;
              }
            }
            &:nth-of-type(4), &:nth-of-type(5) {
              font-weight: bold;
            }
          }
        }
        .table2 {
          margin-top: 30px;
          th, td {
            &:nth-of-type(1) {
              padding-left: 30px;
              .art-checkbox {
                margin-right: 10px;
              }
            }
            &:nth-of-type(2) {
              width: 12%;
              padding-left: 0;
            }
            &:nth-of-type(3) {
              width: 36%;
              padding-left: 0;
              min-width: 290px;
            }
            &:nth-of-type(4) {
              width: 10%;
              text-align: right;
            }
            &:nth-of-type(5) {
              width: 12%;
              text-align: right;
            }
            &:nth-of-type(6) {
              width: 8%;
              text-align: right;
            }
            &:nth-of-type(7) {
              text-align: center;
            }
          }
          td {
            &.red {
              color: $red;
            }
            &:nth-of-type(3) {
              font-size: 0;
              span, .art-countdown {
                font-size: 12px;
                display: inline-block;
                vertical-align: middle;
              }
              .art-countdown {
                width: 120px;
                margin-left: 10px;
              }
            }
            &:nth-of-type(5), &:nth-of-type(6) {
              font-weight: bold;
            }
          }
        }

        // 卡片展示
        .art-card {
          min-height: 164px;
          h4 {
            font-size: 16px;
            padding-bottom: 15px;
            font-weight: normal;
          }
          h2 {
            font-size: 32px;
            font-family: DIN-BOLD;
            padding-bottom: 20px;
            color: $mainStrong;
          }
          p {
            position: absolute;
            bottom: 0;
            left: 30px;
            right: 30px;
            height: 50px;
            line-height: 50px;
            border-top: 1px solid $borderColor;
            font-size: 12px;
            // 默认up，向上
            span {
              margin-left: 22px;
              display: inline-block;
              position: relative;
              color: $red;
              &:before {
                position: absolute;
                content: "";
                left: -12px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                height: 0;
                width: 0;
                border-width: 4px;
                border-color: transparent transparent $red transparent;
                border-style: solid;
                transform: translateY(-2px);
              }
            }
            .down {
              color: $green;
              &:before {
                transform: translateY(2px);
                border-color: $green transparent transparent transparent;
              }
            }
          }
          &_active {
            h2 {
              color: #fff;
            }
          }
        }

        // badge示例
        .art-badge-example {
          position: relative;
          font-size: $sizeMedium;
          text-align: center;
          width: 50px;
          height: 32px;
          color: $mainStrong;
        }

        // download
        .art-download {
          margin-top: 36px;
          .btn-download {
            float: left;
            position: relative;
            display: block;
            width: 130px;
            height: 130px;
            background-color: #ffffff;
            border: 1px solid $borderColor;
            margin-left: 20px;
            @include mm();
            .icon {
              display: block;
              width: 68px;
              height: 68px;
            }
            .icon-ps {
              background-image: url("//storage.360buyimg.com/static-res/tech/jrv/site/icon/icon-ps.png");
            }
            .icon-sketch {
              background-image: url("//storage.360buyimg.com/static-res/tech/jrv/site/icon/icon-sketch.png");
            }
            .icon-axure {
              background-image: url("//storage.360buyimg.com/static-res/tech/jrv/site/icon/icon-axure.png");
            }
            &:first-child {
              margin-left: 0;
            }
            .mask {
              background-color: $bg;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              .icon-download {
                display: block;
                width: 40px;
                height: 48px;
                margin: 25px auto 0;
                background-image: url("//storage.360buyimg.com/static-res/tech/jrv/site/icon/icon-download.png");
              }
              .tips {
                font-size: $sizeSmall;
                color: $main;
                text-align: center;
                line-height: 16px;
                letter-spacing: 0;
                margin-top: 16px;
              }
            }
            &:hover {
              .mask {
                opacity: 1;
                transition: all $animateTime;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1799px) {
    .art-design-wiki {
      .compare-list {
        .compare-box { width: 100%!important; margin-top: 3 * $base!important;
          &:first-child { margin-top: 0!important;}
        }
      }
    }
  }
</style>
