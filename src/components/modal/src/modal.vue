<template>
  <div class="art-modal" :class="[isIE && 'ie']" v-show="show">
    <transition :name="overlayTransition">
      <art-overlay v-show="overlay && show" @on-click="type != '2' && overlayClose && cancel()"></art-overlay>
    </transition>
    <div class="art-modal-wrap-box">
      <transition :name="modalTransition">
        <div class="art-modal-wrap" v-show="show">
          <div class="art-modal-result" v-if="type == '1'">
            <div class="art-modal-result-content">
              <slot name="result-icon"><i class="art-modal-result-icon" :class="'art-modal-result-icon_' + resultStatus"></i></slot>
              <slot name="result-title"><p class="art-modal-result-title"><b>{{resultTitle}}</b></p></slot>
              <p class="art-modal-result-desc"><slot></slot></p>
            </div>
            <div class="art-modal-result-btn">
              <div class="art-modal-btn clearfix">
                <slot name="result-btn">
                  <art-button type="main" size="large" @click="finish">完成</art-button>
                </slot>
              </div>
            </div>
          </div>
          <div v-if="type == '2'">
            <div class="art-modal-header" v-if="title">
              <slot name="header-title"><p class="art-modal-title">{{title}}</p></slot>
              <div class="art-modal-header-btn" v-if="showHeaderBtn" @click="cancel">
                <slot name="header-btn">
                  <span class="header-btn" href="javascript:;"></span>
                </slot>
              </div>
            </div>
            <div class="art-modal-body">
              <slot></slot>
            </div>
            <div class="art-modal-footer">
              <slot name="footer">
                <div class="art-modal-btn clearfix">
                  <art-button type="main" size="large" @click="save">保存</art-button>
                  <art-button type="minor" size="large" @click="cancel">取消</art-button>
                </div>
              </slot>
            </div>
          </div>
          <div class="art-modal-result" v-if="type == '3'">
            <div class="art-modal-result-content">
              <slot name="result-icon"><i class="art-modal-result-icon art-modal-result-icon_error"></i></slot>
              <slot name="result-title"><p class="art-modal-result-title"><b>{{errorText}}</b></p></slot>
              <p class="art-modal-result-desc"><slot></slot></p>
            </div>
            <div class="art-modal-result-btn">
              <div class="art-modal-btn clearfix">
                <art-button type="main" size="large" @click="close">确定</art-button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import ArtOverlay from '../../overlay'
  import ArtButton from '../../button'

  export default {
    name: 'artModal',
    props: {
      overlay: {
        type: Boolean,
        default: true
      },
      overlayClose: {
        type: Boolean,
        default: true
      },
      overlayTransition: {
        type: String,
        default: "fade"
      },
      modalTransition: {
        type: String,
        default: "scale"
      },
      show: Boolean,
      type: {
        type: String,
        default: "2",
      },
      showHeaderBtn: {
        type: Boolean,
        default: true
      },
      title: String,
      resultStatus: String,
      resultTitle: String,
	    errorText: {
      	type: String,
        default: '网络异常，请稍后重试'
      },
	    errorFn: Function
    },
    data () {
      return {
	      isIE: false,
      }
    },
    created () {
    	const ua = window.navigator.userAgent;
	    const isOpera = ua.indexOf("Opera") > -1; //判断是否Opera浏览器
	    this.isIE = ((ua.indexOf("compatible") > -1 && ua.indexOf("MSIE") > -1) || (ua.indexOf("Trident") > -1 && ua.indexOf("Windows") > -1)) && !isOpera; //判断是否IE浏览
    },
    methods: {
      cancel () {
        this.$emit("on-cancel");
      },
      finish () {
        this.$emit("on-finish");
      },
      save () {
        this.$emit("on-save");
      },
	    close () {
      	this.show = false;
      	if(this.type == "3" && this.errorFn) {
		      this.errorFn();
        }
      },
    },
    components: {
    	ArtOverlay,
    	ArtButton,
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_modal.scss';
</style>
