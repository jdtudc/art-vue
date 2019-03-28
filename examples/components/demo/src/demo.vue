<template>
  <div class="art-site-com-demo clearfix" :style="innerStyle">
    <div class="art-site-com-demo-effect-box">
      <div class="art-site-com-demo-effect">
        <slot name="demo"></slot>
      </div>
      <div class="art-site-com-demo-info">
        <slot name="info"></slot>
      </div>
    </div>
    <div class="art-site-com-demo-code-box" :class="[extendCode && 'art-site-com-demo-code-box_extend']">
      <slot name="source-code"></slot>
      <i class="btn-copy" title="复制代码" ref="clip"></i>
      <i class="btn-zoom" title="查看代码" @click="zoom"></i>
      <span class="code-mask" :class="[extendCode && 'code-mask_extend']">
        <i @click="toggleCode"></i>
      </span>
    </div>
  </div>
</template>

<script>
  import Clipboard from 'clipboard'
  export default {
    name: 'demo',
    data () {
    	return {
    		extendCode: false,
		    innerStyle: {}
      }
    },
    mounted () {
      this.$nextTick(() => {
	      this.innerStyle = this.calcH();
      });
      let code = this.$slots['source-code'][0] && this.$slots['source-code'][0].elm && this.$slots['source-code'][0].elm.innerText;
	    let clipboard = new Clipboard(this.$refs.clip, {
		    text: function () {
			    return code
		    }
	    });
	    clipboard.on('success', function(e) {
		    alert("复制成功！");
		    e.clearSelection();
		    clipboard.destroy();
	    });
	    clipboard.on('error', function(e) {
		    alert("复制异常！")
	    });
    },
    methods: {
	    toggleCode () {
    		this.extendCode = !this.extendCode;
		    this.innerStyle = this.calcH();
	    },
	    zoom () {
	    	alert("该功能正在开发中...")
      },
      calcH () {
	      let minH = 240;
	      let calcH, leftH, rightH;
	      if(this.extendCode) { // 展开
		      if(this.$el && this.$el.children.length >= 2) {
			      leftH = this.$el.children[0].clientHeight;
			      rightH = this.$el.children[1].children[0].clientHeight + 40;
			      calcH = leftH > rightH ? leftH : rightH;
		      }
		      return {
			      'height': `${calcH}px`
		      }
	      } else {  // 收起
		      if(this.$el && this.$el.children[0]) {
			      calcH = this.$el.children[0].clientHeight;
		      }
		      return calcH > minH ? {
			      'height': `${calcH}px`
		      } : {
			      'height': `${minH}px`
		      }
	      }
      },
    },
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../../src/styles/common/var';
  .art-site-com-demo { position: relative; margin-top: 20px; border: 1px solid $borderColor; border-radius: 4px; transition: all $animateTime * 2;
    &:before { content: ""; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; background-color: $borderColor;}
    &-effect-box { float: left; width: 50%; padding: 30px 30px 24px;}
    &-effect { font-size: 0;
      p { margin-top: 0;}
      ul, li { margin: 0; padding: 0; list-style: none;}
      .art-radio, .art-checkbox { display: inline-block;}
      .art-button, .art-input, .art-btn-drop, .art-radio, .art-checkbox, .art-switch, .art-countdown, .art-input-drop, .art-text-drop, .art-calendar, .art-left-nav, .art-tabs, .art-pagination, .art-page, .art-page-size, .art-breadcrumb, .art-steps, .art-dropdown, .art-card , .art-tag, .art-textarea, .art-chart, .art-tooltip, .art-alert { margin-right: 10px; margin-bottom: 20px;}
      .art-row { margin-bottom: 12px; background-color: $bg;}
      .art-row-desc { margin-bottom: 10px; color: $main; font-size: $sizeNormal;}
      .art-box-row { height: 36px; line-height: 36px; color: #ffffff; text-align: center; font-size: $sizeNormal;}
      .art-input-drop {
        .art-input { margin: 0;}
      }
      .art-text-drop { display: inline-block;}
      .art-calendar {
        .art-cal-header .art-cal-result { left: 0; right: auto;}
        .art-cal-cont { z-index: 3;}
      }
      .art-modal {
        .art-button { margin-bottom: 0;}
      }
      .art-auxi {
        p { margin-top: 30px;}
      }
      .art-alert {
        .art-alert-desc { display: none;}
      }
      .art-badge_dot { margin: 0;}
      .art-tooltip {
        .art-button { margin-right: 0; margin-bottom: 0;}
      }
      .art-chart_pie2-result { left: 240px;}
      .art-chart_map1-canvas, .art-chart_map2-canvas { width: 280px; height: 220px;}
      .art-chart_map1-result, .art-chart_map2-result { left: 310px; top: 0;}

      .art-pagination { display: inline-block;}

      .art-slider { margin-bottom: 20px;}

      .demo-badge-1 { position: relative; width: 42px; height: 42px; border-radius: 50%; background-color: #f6f8fc; margin-bottom: 20px;
        .art-badge { position: absolute; right: -4px; top: -4px;}
      }
      .demo-badge-2 { position: relative; display: flex; padding: 0 20px;
        .art-badge-example { position: relative; border-bottom: 1px solid $borderColor;}
        .art-badge-example.active { color: #0074ff;
          &:after { content: ""; position: absolute; left: 50%; bottom: 0; margin-left: -8px; width: 16px; height: 2px; background-color: #0074ff;}
        }
        .art-badge { position: absolute; right: -4px; top: -4px;}
      }
      .demo-badge-3 { position: relative; margin-top: 10px; padding: 0 15px; margin-bottom: 20px;
        .demo-badge-3-item { position: relative; line-height: 2; font-size: $sizeNormal;}
        .art-badge { left: -10px; right: auto; top: 50%; margin-top: -2px;}
      }
    }
    &-info {
      h4 { font-size: $sizeNormal; margin-top: 10px; margin-bottom: 10px; font-weight: bold; color: $mainStrong;}
      p { font-size: $sizeNormal; line-height: 2; color: $main;}
    }
    &-code-box { float: left; width: 50%; height: 100%; padding: 20px 30px; overflow: hidden;
      &_extend { padding: 20px 30px 40px;}
      .btn-copy { position: absolute; top: 10px; right: 10px; display: block; width: 17px; height: 18px; background: url("//storage.360buyimg.com/static-res/tech/jrv/site/icon/icon-copy.png") no-repeat center center; cursor: pointer;}
      .btn-zoom { position: absolute; top: 11px; right: 37px; display: block; width: 16px; height: 16px; background: url("//storage.360buyimg.com/static-res/tech/jrv/site/icon/icon-zoom.png") no-repeat center center; cursor: pointer;}
      .code-mask { position: absolute; bottom: 0; left: calc(50% + 1px); right: 1px; height: 30px; background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%); pointer-events: none;
        i { position: absolute; bottom: 8px; left: 50%; margin-left: -7px; display: block; width: 14px; height: 8px; background: url("//storage.360buyimg.com/static-res/tech/jrv/site/icon/icon-arrow.png") no-repeat center center; transition: all $animateTime; cursor: pointer; pointer-events: auto;}
        &_extend {
          i { transform: rotate(180deg);}
        }
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .art-site-com-demo {
      &-effect {
        .art-chart_radar1-result, .art-chart_map1-result, .art-chart_map2-result { display: none;}
      }
    }
  }
</style>
