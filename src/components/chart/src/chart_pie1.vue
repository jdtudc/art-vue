<template>
  <div class="art-chart_pie1" :style="{'width': width + 'px', 'height': height + 'px'}">
    <div class="art-chart_pie1-center-text" v-if="compare">
      <div v-if="outer > inner && outer > other">
        <p>男性用户</p>
        <p>占比较大</p>
      </div>
      <div v-else-if="inner > outer && inner > other">
        <p>女性用户</p>
        <p>占比较大</p>
      </div>
      <div v-else-if="other > outer && other > inner">
        <p>其他用户</p>
        <p>占比较大</p>
      </div>
      <div v-else-if="outer === inner">
        <p>男女用户</p>
        <p>占比一致</p>
      </div>
    </div>
    <div class="art-chart_pie1-legend" v-if="legend">
      <p><i></i><span>男性占比</span><strong>{{outerPer || '0.00'}}%</strong></p>
      <p><i></i><span>女性占比</span><strong>{{innerPer || '0.00'}}%</strong></p>
      <p><i></i><span>其他占比</span><strong>{{otherPer || '0.00'}}%</strong></p>
    </div>
    <div class="art-chart_pie1-canvas">
      <canvas :width="2 * width" :height="2 * height" :style="{'width': width + 'px', 'height': height + 'px'}"></canvas>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'artChart_pie1',
    props: {
    	option: {
    		type: Object,
        require: true,
      }
    },
    data () {
    	return {
    		outer: null,
		    outerPer: null,
    		inner: null,
		    innerPer: null,
		    other: null,
		    otherPer: null,

    		color: null,
        width: null,
		    height: null,
		    lineWidth: null,
		    startArc: null,
		    legend: null,
		    compare: null,
		    bgColor: null,
        spacing: null,
        resize: null,

        safeMargin: 10,

        handleResize: () => {
          this.init();
        }
      }
    },
    mounted () {
	    this.reset();
	    this.$nextTick(() => {
		    this.init();
	    });

	    if(this.resize) {
		    window.addEventListener("resize", this.handleResize)
      }
    },
	  destroyed () {
		  if(this.resize) {
			  window.removeEventListener("resize", this.handleResize)
		  }
    },
    methods: {
    	init () {
		    this.outerPer = (this.outer + this.inner + this.other) ? 100 * this.outer / (this.outer + this.inner + this.other) : 0;
		    this.innerPer = (this.outer + this.inner + this.other) ? 100 * this.inner / (this.outer + this.inner + this.other) : 0;
		    this.otherPer = (this.outer + this.inner + this.other) ? 100 * this.other / (this.outer + this.inner + this.other) : 0;
        this.drawChart(this.outerPer,this.innerPer)
      },
      reset () {
    		if(!this.option) { return false;}
    		this.outer = this.option.outer || 0;
    		this.inner = this.option.inner || 0;
    		this.other = this.option.other || 0;

	      this.color = this.option.color || [["#0074ff", "#6fb1ff"],["#ff3f80", "#ff5d94"]];
	      this.width = this.option.width || 200;
	      this.height = this.option.height || 200;
	      this.lineWidth = this.option.lineWidth || 15;
	      this.startArc = this.option.startArc || -90;
	      this.legend = this.option.legend || true;
	      this.compare = this.option.compare || true;
	      this.bgColor = this.option.bgColor || "#f6f8fc";
	      this.spacing = this.option.spacing || 25;
	      this.resize = this.option.resize || true;
      },
    	drawChart(outerPer, innerPer) {
		    if(outerPer == 0 && innerPer == 0) { return false;}
		    let self = this;
		    let colorArr = self.color;

		    let requestAni = window.requestAnimationFrame ||
			    window.webkitRequestAnimationFrame ||
			    window.mozRequestAnimationFrame ||
			    window.oRequestAnimationFrame ||
			    window.msRequestAnimationFrame ||
			    function (callback) {
				    return setTimeout(callback, 1000 / 60);
			    };
		    let cancelAni = window.cancelAnimationFrame ||
			    window.webkitCancelAnimationFrame ||
			    window.mozCancelAnimationFrame ||
			    window.oCancelAnimationFrame ||
			    window.msCancelAnimationFrame ||
			    function (ani) {
				    clearTimeout(ani);
			    };

		    let chart = this.$el.lastChild;
		    let canvas = chart.children[0];
		    let w = this.width;
		    let he = this.height;
		    let linew = this.lineWidth * 2;

		    let circle = {x: w, y: he, r: .74 * w};
		    let ctx = null;
		    ctx = canvas.getContext("2d");

		    let startArc = 2 * Math.PI * this.startArc / 360; // 显示角度
		    let times = 30;
		    let index = 0;

		    draw();

		    function draw() {
			    let myReq = requestAni(step);

			    function step() {
				    index++;
				    if (index >= times) {
					    cancelAni(myReq);
					    drawSingle();
					    return;
				    }
				    drawSingle();
				    myReq = requestAni(step);
			    }
		    }

		    function drawSingle() {
			    clear();
			    drawBg();
			    drawBig();
			    drawSmall();
		    }

		    function drawBg() {
			    // 背景
			    ctx.save();
			    ctx.lineWidth = linew;
			    ctx.beginPath();
//			    ctx.arc(circle.x, circle.y, (circle.x + circle.r) / 2, startArc, startArc + 2 * Math.PI, false);
//			    ctx.arc(circle.x, circle.y, (circle.x + circle.r) / 2 - 50, startArc, startArc + 2 * Math.PI, false);
			    ctx.arc(circle.x, circle.y, circle.x - self.safeMargin - linew/2, startArc, startArc + 2 * Math.PI, false);
			    ctx.arc(circle.x, circle.y, 200 - self.safeMargin - linew/2 - self.spacing * 2, startArc, startArc + 2 * Math.PI, false);

			    ctx.strokeStyle = self.bgColor;
			    ctx.lineCap = "round";
			    ctx.stroke();
			    ctx.restore();
		    }

		    function drawBig() {
			    ctx.save();
			    ctx.lineWidth = linew;
			    ctx.beginPath();
			    ctx.arc(circle.x, circle.y, circle.x - self.safeMargin - linew/2, startArc, (startArc + (index / times) * 2 * Math.PI * outerPer / 100), false);
//			    ctx.arc(circle.x, circle.y, (circle.x + circle.r) / 2, startArc, (startArc + (index / times) * 2 * Math.PI * outerPer / 100), false);
			    let grad = ctx.createLinearGradient(circle.x - circle.r, circle.y - circle.r, (circle.x + circle.r) / 2, circle.y + circle.r);
			    grad.addColorStop(0, colorArr[0][0]);
			    grad.addColorStop(1, colorArr[0][1]);
			    ctx.strokeStyle = grad;
			    ctx.lineCap = "round";
			    ctx.shadowBlur = 6;
			    ctx.shadowColor = "rgba(0, 116, 255, 0.4)";
			    ctx.shadowOffsetX = 0; // 阴影Y轴偏移
			    ctx.shadowOffsetY = 3; // 阴影X轴偏移
			    ctx.stroke();
			    ctx.restore();
		    }
		    function drawSmall() {
			    ctx.save();
			    ctx.lineWidth = linew;
			    ctx.beginPath();
			    ctx.arc(circle.x, circle.y, 200 - self.safeMargin - linew/2 - self.spacing * 2, startArc, (startArc + (index / times) * 2 * Math.PI * innerPer / 100), false);
//			    ctx.arc(circle.x, circle.y, (circle.x + circle.r) / 2 - 50, startArc, (startArc + (index / times) * 2 * Math.PI * innerPer / 100), false);
			    let grad = ctx.createLinearGradient(circle.x - circle.r, circle.y - circle.r, (circle.x + circle.r) / 2 - 50, circle.y + circle.r);
			    grad.addColorStop(0, colorArr[1][0]);
			    grad.addColorStop(1, colorArr[1][1]);
			    ctx.strokeStyle = grad;
			    ctx.lineCap = "round";
			    ctx.shadowBlur = 6;
			    ctx.shadowColor = "rgba(255, 63, 128, 0.4)";
			    ctx.shadowOffsetX = 0; // 阴影Y轴偏移
			    ctx.shadowOffsetY = 3; // 阴影X轴偏移
			    ctx.stroke();
			    ctx.restore();
		    }

		    function clear() {
			    ctx.clearRect(0, 0, canvas.width, canvas.height);
		    }
      },
	    _draw (chart, option) {
		    chart.setOption(option, true);
		    return chart;
	    },
    },
    watch: {
	    option (newVal, val) {
	    	this.reset();
	    	this.init();
      }
    },
    components: {},
  }
</script>
