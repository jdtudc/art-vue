<template>
  <div class="art-chart_pie2">
    <div class="art-chart_pie2-legend" v-if="curOption && legend">
      <p>{{curOption.dataAxis[0]}}</p>
      <p>{{curOption.series[0].data[0] + '%'}}</p>
    </div>
    <div class="art-chart_pie2-result" v-if="curOption && result">
      <ul>
        <li v-for="(origin, idx) in curOption.series[0].data">
          <i :style="{'background': curOption.color[idx]}"></i><span>{{curOption.dataAxis[idx]}}</span><span>{{origin + '%'}}</span>
        </li>
      </ul>
    </div>
    <div class="art-chart_pie2-canvas"></div>
  </div>
</template>

<script>
	import echarts from 'echarts/lib/echarts'
	import 'echarts/lib/chart/pie';

  export default {
    name: 'artChart_pie2',
    props: {
    	option: {
    		type: Object,
        require: true,
      },
      custom: {
    		type: Boolean,
        default: false
      },
    },
    data () {
    	return {
        $chart: null,
        curOption: null,
        resize: null,
        legend: this.option.legend || true,
        result: this.option.result || true,
        handleResize: () => {
          if(this.$chart) {
	          this.$chart.clear();
	          this.$chart.resize();
          } else {
          	this.$chart = echarts.init(this.$el.lastChild)
          }
          this._draw(this.$chart, this.curOption)
        }
      }
    },
    mounted () {
	    this.$nextTick(() => {
		    this.init();
	    });

	    this.resize = this.option.resize || true;

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
    		let self = this;
    		let option;
    		if(this.custom) { // 完全使用自定义配置
			    option = this.option;
		    } else {
			    let data = this.option.data;
			    let dataAxis = this.option.dataAxis;

			    if(dataAxis && data && (dataAxis.length === data.length)) {
            data = data.sort((a, b) => {
            	return b - a;
            });

            option = {
	            grid: {
		            containLabel: true,
		            width: 200,
		            height: 200,
	            },
	            dataAxis: dataAxis,
	            series: [{
		            type:'pie',
		            radius: [60, 95],
		            avoidLabelOverlap: false,
		            label: {
			            normal: {
				            show: false,
			            },
			            emphasis: {
				            show: false,
			            }
		            },
		            labelLine: {
			            normal: {
				            show: false
			            }
		            },
		            data: data,
		            itemStyle: {
			            normal: {
				            shadowColor: 'rgba(0,116,255,0.4)',
				            shadowOffsetY: 3,
				            shadowBlur: 6,
			            }
		            },
	            }],
	            color: self.getColorConfig(data),
	            silent: true,
	            hoverOffset: 0,
            }

            let total = 0;
            for(let i = 0; i < data.length; i++) {
            	total += data[i];
            }

				    let limit = this.option.limit || 7;
            option.series[0].data.forEach((item, idx) => {
              if(idx < limit) {
                option.series[0].data[idx] = (total === 0) ? 0 : Number((100 * item / total).toFixed(2));
              } else {
                option.series[0].data[limit - 1] += (total === 0) ? 0 : Number((100 * item / total).toFixed(2));
              }
            })

            option.series[0].data = option.series[0].data.slice(0, limit);

			    } else {
				    console.error("Error: 入参数据有误，请确认 dataAxis 和 data 为长度相等的数组");
			    }
        }

        this.curOption = option;
        this.drawChart();

	    },
      drawChart () {
    		!this.$chart && (this.$chart = echarts.init(this.$el.lastChild));
        this._draw(this.$chart, this.curOption)
      },
	    _draw (chart, option) {
		    chart.setOption(option, true);
		    return chart;
	    },
      // 获取颜色配置表
	    getColorConfig (arr) {
		    let colorArr = ['#0074ff','#5094ff','#2dc4ff','#2de9ff','#0bdba8','#2bf1ae','#464f59'];
		    if(arr) {
			    if(arr.length === 2) {
				    colorArr = ['#0074ff','#0bdba8'];
			    }
			    if(arr.length === 3) {
				    colorArr = ['#0074ff','#5094ff','#0bdba8'];
			    }
			    if(arr.length === 4) {
				    colorArr = ['#0074ff','#5094ff','#2dc4ff','#0bdba8'];
			    }
			    if(arr.length === 5) {
				    colorArr = ['#0074ff','#5094ff','#2dc4ff','#0bdba8', '#464f59'];
			    }
			    if(arr.length === 6) {
				    colorArr = ['#0074ff','#5094ff','#2dc4ff','#2de9ff','#0bdba8', '#464f59'];
			    }
			    if(arr.length === 7) {
				    colorArr = ['#0074ff','#5094ff','#2dc4ff','#2de9ff','#0bdba8','#2bf1ae','#464f59'];
			    }
			    return colorArr;
		    } else {
			    return [];
			    console.error("获取颜色配置失败")
		    }
	    },
    },
    watch: {
	    option (newVal, val) {
	    	this.init();
      }
    },
    components: {},
  }
</script>
