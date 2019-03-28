<template>
  <transition :name="trans">
    <div class="art-backtop" v-if="showBackTop" @click="handleClick">
      <slot>
        <span class="art-backtop-icon"></span>
      </slot>
    </div>
  </transition>
</template>
<script>
	export default {
		name: "artBacktop",
    props: {
			trans: {
				type: String,
        default: 'fade'
      },
      distance: {
				type: Number,
        default: 200
      },
      custom: {
				type: Boolean,
        default: false,
      },
      show: {
	      type: Boolean,
	      default: false,
      }
    },
    data () {
      return {
      	showBackTop: this.show,
	      handleScroll: (event) => {
		      let top = document.body.scrollTop || document.documentElement.scrollTop;
		      if(top >= this.distance) {
		      	this.showBackTop = true;
          } else {
			      this.showBackTop = false;
          }
	      },
        timer: null
      }
    },
		mounted () {
      !this.custom && window.addEventListener("scroll", this.handleScroll)
		},
		destroyed () {
			!this.custom && window.removeEventListener("resize", this.handleScroll)
		},
    methods: {
	    handleClick () {
	    	if (!this.timer) {
					this.timer = setInterval(() => {
						const top = document.body.scrollTop || document.documentElement.scrollTop;
						const speed = top / 4;
						if (document.body.scrollTop !== 0) {
							document.body.scrollTop -= speed;
						}else {
							document.documentElement.scrollTop -= speed;
						}
						if (top === 0) {
							clearInterval(this.timer);
							this.timer = null
						}
					}, 30);
				}
        this.$emit("on-click");
      }
    },
    watch: {
	    show (newVal) {
	    	this.showBackTop = newVal;
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_backtop.scss';
</style>
