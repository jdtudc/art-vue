<template>
  <div class="art-tooltip" :class="[placement && 'art-tooltip_' + placement]" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="art-tooltip-trigger" ref="trigger">
      <slot></slot>
    </div>
    <transition :name="trans" @after-leave="doDestory">
      <div class="art-tooltip-popper" v-if="showTooltip" ref="popper">
        <div class="art-tooltip-popper-arrow"></div>
        <div class="art-tooltip-popper-cont">
          <slot name="content">
            <div v-text="content"></div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'artTooltip',
    props: {
	    trans: {
	    	type: String,
        default: 'fade'
      },
	    content: String,
	    placement: {
		    type: String,
		    default: 'top'
	    },
	    show: {
		    type: Boolean,
		    default: false
	    }
    },
    data () {
    	return {
    		showTooltip: this.show,
        position: {
    			top: 0,
          left: 0
        },
        timer: null,
      }
    },
    methods: {
	    showPopper () {
		    this.showTooltip = true
		    this.setPopperPosition()
	    },
	    hidePopper () {
		    this.showTooltip = false
	    },
	    handleMouseEnter () {
		    this.showPopper()
		    clearTimeout(this._timer)
	    },
	    handleMouseLeave () {
		    this._timer = setTimeout(() => {
			    this.hidePopper()
		    }, 200)
	    },
	    setPopperPosition () {
		    this.$nextTick(() => {
			    const popper = this.$refs.popper
			    const trigger = this.$refs.trigger

			    switch (this.placement) {
				    case 'top' :
					    this.position.left = trigger.offsetLeft - (popper.offsetWidth / 2) + (trigger.offsetWidth / 2)
					    this.position.top = trigger.offsetTop - popper.offsetHeight
					    break
				    case 'top-left':
					    this.position.left = trigger.offsetLeft
					    this.position.top = trigger.offsetTop - popper.offsetHeight
					    break
				    case 'top-right':
					    this.position.left = trigger.offsetLeft + trigger.offsetWidth - popper.offsetWidth
					    this.position.top = trigger.offsetTop - popper.offsetHeight
					    break
				    case 'left':
					    this.position.left = trigger.offsetLeft - popper.offsetWidth
					    this.position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popper.offsetHeight / 2)
					    break
				    case 'left-top':
					    this.position.left = trigger.offsetLeft - popper.offsetWidth
					    this.position.top = trigger.offsetTop
					    break
				    case 'left-bottom':
					    this.position.left = trigger.offsetLeft - popper.offsetWidth
					    this.position.top = trigger.offsetTop + trigger.offsetHeight - popper.offsetHeight
					    break
				    case 'right':
					    this.position.left = trigger.offsetLeft + trigger.offsetWidth
					    this.position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popper.offsetHeight / 2)
					    break
				    case 'right-top':
					    this.position.left = trigger.offsetLeft + trigger.offsetWidth
					    this.position.top = trigger.offsetTop
					    break
				    case 'right-bottom':
					    this.position.left = trigger.offsetLeft + trigger.offsetWidth
					    this.position.top = trigger.offsetTop + trigger.offsetHeight - popper.offsetHeight
					    break
				    case 'bottom':
					    this.position.left = trigger.offsetLeft - (popper.offsetWidth / 2) + (trigger.offsetWidth / 2)
					    this.position.top = trigger.offsetTop + trigger.offsetHeight
					    break
				    case 'bottom-left':
					    this.position.left = trigger.offsetLeft
					    this.position.top = trigger.offsetTop + trigger.offsetHeight
					    break
				    case 'bottom-right':
					    this.position.left = trigger.offsetLeft + trigger.offsetWidth - popper.offsetWidth
					    this.position.top = trigger.offsetTop + trigger.offsetHeight
					    break
				    default:
					    // if user set wrong placement, then use default 'top'
					    this.position.left = trigger.offsetLeft - (popper.offsetWidth / 2) + (trigger.offsetWidth / 2)
					    this.position.top = trigger.offsetTop - popper.offsetHeight
					    break
			    }

			    popper.style.top = `${this.position.top}px`
			    popper.style.left = `${this.position.left}px`
		    })
	    },
	    doDestory () {
		    if (this._trigger) {
			    $(this._trigger).off()
		    }
	    }
    },
    watch: {
    	show (newVal) {
    		this.showTooltip = newVal;
      },
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_tooltip.scss';
</style>
