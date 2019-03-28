<template>
  <div class="art-site">
    <router-view></router-view>
    <art-backtop></art-backtop>
  </div>
</template>
<script>
	export default {
		data () {
			return {
				showFooter: false
      }
    },
    mounted () {
			let timer = setTimeout(() =>{
				this.showFooter = true
        clearTimeout(timer)
      },20)
    },
	}
</script>
<style type="text/scss" lang="scss">
  @import '../src/styles/index';
  @import './style/markdown';
  @import './style/hl.css';
  @import './style/font/iconfont.css';

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    min-width: 1366px;
    overflow-x: hidden;
  }

  .art-site {
    box-sizing: border-box;
    position: relative;
    min-height: 100vh;
    .demo-list {
      li {
        display: inline-block;
        padding: 10px;
      }
    }
    .footer { width: 100%; background-color: #1a1f24;
      &-wrap { width: 87.5%; margin: 0 auto; height: 450px;}
      &-cont { position: relative; height: 100%; padding-top: 80px; color: $white;
        .ft-title { width: 180px; margin: 0 auto; font-size: $sizeMedium; white-space: nowrap; padding-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1);}
        .ft-cont { width: 180px; margin: 0 auto;
          ul { margin-top: 19px;
            li a { display: block; color: $white; opacity: 0.7; font-size: $sizeNormal; line-height: 36px; transition: all $animateTime; white-space: nowrap;
              &:hover { color: $blue;}
            }
          }
        }
        .copyright { position: absolute; left: calc(12.5% - 90px); bottom: 27px; white-space: nowrap; font-size: $sizeNormal; line-height: 36px; color: $white; opacity: 0.2;}
      }
    }
    // fade
    .fade-in-enter-active, .fade-in-leave-active {
      transition: opacity $animateTime;
    }
    .fade-in-enter, .fade-in-leave-to
      /* .list-leave-active for below version 2.1.8 */
    {
      opacity: 0;
    }
    // multi-fade
    .multi-fade-in-leave-active {
      display: none;
    }
    .multi-fade-in-enter-active {
      transition: opacity 0.5s;
    }
    .multi-fade-in-enter
      /* .list-leave-active for below version 2.1.8 */
    {
      opacity: 0;
    }
  }
</style>
