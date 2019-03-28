<template>
  <div class="art-slider" :class="[confined && 'art-slider_confined', disabled && 'art-slider_disabled']">
    <div class="art-slider-inner" ref="inner">
      <div class="art-slider-track" :style="{width: `${percent}%`}"></div>
      <div class="art-slider-handler" ref="slider" :style="{left: `${percent}%`}" @mousedown.self="handleDown">
        <transition :name="tooltipTrans">
          <div class="art-slider-tooltip" v-if="showTooltip">
            <slot name="tooltip">{{this.percent + '%'}}</slot>
          </div>
        </transition>
      </div>
    </div>
    <div class="art-slider-info" v-if="info">
      <span class="art-slider-value"><slot name="min">{{min}}</slot></span>
      <span class="art-slider-value"><slot name="max">{{max}}</slot></span>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'art-slider',
		props: {
			// 禁止切换
      disabled: {
      	type: Boolean,
        default: false
      },
			// 显示文字信息
      info: {
      	type: Boolean,
        default: true
      },
      // 最小值
      min: {
      	type: Number,
        default: 0
      },
			// 最大值
			max: {
				type: Number,
				default: 100
			},
			// 初始值
      value: {
      	type: Number,
        require: true
      },
      // 限制范围
      limit: Array,
      // 提示动画
			tooltipTrans: {
      	type: String,
        default: 'slider-fade'
      }
		},
    data () {
			return {
				showTooltip: false,
				percent: 0,
        totalLen: 0,
				startLeft: 0,
        startX: 0,
        moved: false,
        limitMin: 0,
        limitMax: 0,
      }
    },
    created () {
      this.init()
    },
		mounted () {
			const $inner = this.$refs.inner
      this.totalLen = $inner.offsetWidth
		},
    methods: {
			init () {
				this.limitMin = this.min
        this.limitMax = this.max
				if (this.limit && this.limit.length === 2) {
					let sortArr = this.limit.sort((a, b) => {
						return parseInt(a) - parseInt(b)
					})
          this.limitMin = parseInt(sortArr[0]) > this.limitMin ? parseInt(sortArr[0]) : this.limitMin
					this.limitMax = parseInt(sortArr[1]) < this.limitMax ? parseInt(sortArr[1]) : this.limitMax
        }
        if (!(this.value >= this.limitMin && this.value <= this.limitMax)) {
          console.error(`初始值应该在${this.limitMin} - ${this.limitMax}之间`)
        } else {
          let per = parseInt(100 * (this.value - this.min) / (this.max - this.min))
          per = per < 0 ? 0 : per > 100 ? 100 : per
          this.percent = per
        }
      },
			handleDown (event) {
				if (this.disabled) return
				event.preventDefault()

				this.moved = false;
        const $handler = this.$refs.slider
				this.startLeft = parseInt($handler.style.left)
				this.startX = event.clientX
				this.showTooltip = true

				window.addEventListener("mousemove", this.handleMove)
        window.addEventListener("mouseup", this.handleUp)
      },
			handleMove (event) {
				this.moved = true;
        this.showTooltip = true
        let movePer = parseInt(100 * (event.clientX - this.startX) / this.totalLen)
				let endPer = this.startLeft + movePer
        if (movePer > 0) {
        	if (endPer > parseInt(100 * (this.limitMax - this.min)/(this.max -this.min))) { // 大于上限所占百分比
        		endPer = parseInt(100 * (this.limitMax - this.min)/(this.max -this.min))
          }
        } else {
					if (endPer < parseInt(100 * (this.limitMin - this.min)/(this.max -this.min))) { // 小于下限所占百分比
						endPer = parseInt(100 * (this.limitMin - this.min)/(this.max -this.min))
					}
        }

        this.percent = endPer
        this.$emit('on-change', this.percent, this.min + parseInt((this.max - this.min) * this.percent / 100))
      },
			handleUp (event) {
				this.showTooltip = false
				if (this.moved) {
					this.moved = false
					this.$emit('on-after-change', this.percent, this.min + parseInt((this.max - this.min) * this.percent / 100))
				}
				window.removeEventListener("mousemove", this.handleMove)
				window.removeEventListener("mouseup", this.handleUp)
      },
    },
    destroyed () {
//			const $handler = $(this.$refs.slider)
//			$handler.off("touchstart").off("touchmove")
		},
		watch: {
			value () {
				this.init()
      }
    },
    computed: {
			confined () {
				return (this.limitMax !== this.max && this.percent === this.limitMax) || (this.limitMin !== this.min && this.percent === this.limitMin)
      },
    }
	}
</script>
<style type="text/scss" lang="scss">
  @import "../../../styles/components/slider";
</style>
