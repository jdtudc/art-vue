<template>
  <div class="art-chart_radar1">
    <div class="art-chart_radar1-result" v-if="curOption && result">
      <ul>
        <li v-for="(data, index) in curOption.series[0].data">
          <p>{{data.name}}</p>
          <p class="font-dinB" v-if="curOption.points">{{curOption.points[index]}}</p>
        </li>
      </ul>
    </div>
    <div class="art-chart_radar1-canvas"></div>
  </div>
</template>

<script>
	import echarts from 'echarts/lib/echarts'
	import 'echarts/lib/chart/radar'

  export default {
    name: 'artChart_radar1',
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
			    let indicator = this.option.indicator;

			    if(indicator && data) {
            option = {
	            radar: {
		            name: {
			            textStyle: {
				            color: '#bec1ca'
			            }
		            },
		            nameGap: 10,
		            splitNumber: 4,
		            center: ["50%", 130],
		            radius: 100,
		            silent: true,
		            axisLine: {
			            lineStyle: {
				            color: '#f0f2f5'
			            }
		            },
		            splitLine: {
			            lineStyle: {
				            color: '#f0f2f5'
			            }
		            },
		            splitArea: {
			            areaStyle: {
				            color: 'transparent',
			            }
		            },
		            indicator: indicator
	            },
	            series: [{
		            type: 'radar',
		            symbolSize: 0,
		            silent: true,
                data: []
              }],
	            // 自己计算的分数
	            points: [],
            };
            for(let i = 0; i < data.length; i++) {
            	if(i === 0) {
		            option.series[0].data.push({
			            value : data[i].data,
			            name : data[i].name,
			            lineStyle: {
				            normal: {
					            color: '#0074ff',
					            shadowBlur: 6,
					            shadowOffsetY: 3,
					            shadowColor: 'rgba(0,116,255,0.4)'
				            }
			            },
			            areaStyle: {
				            normal: {
					            color: '#0074ff',
					            opacity: 0.1
				            }
			            },
		            })
              } else {
            		option.series[0].data.push({
			            value : data[i].data,
			            name : data[i].name,
			            lineStyle: {
				            normal: {
					            color: '#0bdba8',
					            shadowBlur: 6,
					            shadowOffsetY: 3,
					            shadowColor: 'rgba(11,219,168,0.4)'
				            }
			            },
			            areaStyle: {
				            normal: {
					            color: '#0bdba8',
					            opacity: 0.1
				            }
			            },
		            })
              }
            }

				    let perfect = Number(this.option.perfect) || option.radar.indicator[0].max || 0;
				    let arr = []; // 总值数组
				    for(let i = 0; i < option.series[0].data.length; i++) {
					    arr[i] = 0;
					    for(let j = 0; j < option.series[0].data[i].value.length; j++) {
						    arr[i] += option.series[0].data[i].value[j] / option.radar.indicator[j].max;
					    }
				    }
				    option.points = arr.map(function (item) {
					    return (perfect * item/option.radar.indicator.length).toFixed(1);
				    });

			    } else {
				    console.error("Error: 入参数据有误，请确认 indicator 和 data 为合理的数组");
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
	    }
    },
    watch: {
	    option (newVal, val) {
	    	this.init();
      }
    },
    components: {},
  }
</script>
