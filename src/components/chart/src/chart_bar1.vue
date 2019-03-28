<template>
  <div class="art-chart_bar1">
    <div class="art-chart_bar1-canvas"></div>
  </div>
</template>

<script>
	import echarts from 'echarts/lib/echarts'
	import 'echarts/lib/chart/bar';
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/dataZoom';

  export default {
    name: 'artChart_bar1',
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
    		let option;
    		if(this.custom) { // 完全使用自定义配置
			    option = this.option;
		    } else {
			    let data = this.option.data;
			    let dataAxis = this.option.dataAxis;

			    if(dataAxis && data && (dataAxis.length === data.length)) {
				    let dataPer = [];
				    let total = 0;
				    for(let i = 0; i < data.length; i++) {
					    total += data[i] || 0
				    }
				    data.forEach((val, idx) => {
					    dataPer[idx] = total === 0 ? 0 : parseFloat((100 * val / total).toFixed(2))
				    });

				    let sortData = JSON.parse(JSON.stringify(dataPer)).sort((a, b) => {
					    return b - a;
				    });

				    option = {
					    grid: {
						    containLabel: true,
						    left: 0,
						    top: 5,
						    right: 0,
						    bottom: 5,
					    },
					    tooltip: {
						    trigger: 'item',
						    padding: 15,
						    backgroundColor: 'rgba(40,48,57,0.9)',
						    textStyle: {
							    color: "#fff",
							    fontSize: 12,
						    },

					    },
					    xAxis: {
						    data: dataAxis,
						    axisLabel: {
							    textStyle: {
								    color: '#bec1ca',
								    fontSize: 12
							    }
						    },
						    axisTick: {
							    show: false
						    },
						    axisLine: {
							    show: false
						    },
					    },
					    yAxis: {
						    axisLine: {
							    show: false
						    },
						    axisTick: {
							    show: false
						    },
						    axisLabel: {
							    textStyle: {
								    color: '#bec1ca'
							    },
							    formatter: '{value}%'
						    },
						    max: (sortData[0] && sortData[0] < 50) ? 50 : 100,
						    interval: (sortData[0] && sortData[0] < 50) ? 10 : 20,
						    splitLine: {
							    lineStyle: {
								    color: '#f0f2f5'
							    }
						    },
					    },
					    series: [
						    {
							    type: 'bar',
							    itemStyle: {
								    normal: {
									    color: {
										    type: 'linear',
										    x: 0,
										    y: 0,
										    x2: 0,
										    y2: 1,
										    colorStops: [{
											    offset: 0, color: 'rgb(111,177,255)' // 0% 处的颜色
										    }, {
											    offset: 1, color: 'rgb(0,116,255)' // 100% 处的颜色
										    }],
										    globalCoord: false // 缺省为 false
									    },
									    barBorderRadius: 2,
									    shadowBlur: 4,
									    shadowColor: 'rgba(0,116,255,0.4)',
									    shadowOffsetY: 3
								    },
							    },
							    barMaxWidth: 24,
							    data: dataPer,
							    tooltip: {
								    backgroundColor: 'transparent',
								    padding: 0,
								    position: function (point, params, dom, rect, size) {
									    return 'top'
								    },
								    formatter: function (params, ticket, callback) {
									    let str = '<div class="art-chart_bar1-tooltip"><p>占比 ' + params.data + '%</p></div>';
									    return str
								    }
							    }
						    }
					    ]
				    };

				    let limit = this.option.limit || 10;
				    if(this.option.zoom && option.xAxis.data.length > limit) {  // 需要缩放
					    option.dataZoom = [
						    {
							    type: "slider",
							    showDetail: false,
							    dataBackground: {
								    lineStyle: {
									    color: 'transparent'
								    },
								    areaStyle: {
									    color: 'transparent'
								    },
							    },
							    fillerColor: '#c1c4cc',
							    borderColor: 'transparent',
							    handleSize: 0,
							    xAxisIndex: 0,
							    start: Math.floor(100 - 900/option.xAxis.data.length),
							    end: 100,
							    minValueSpan: 9,
//				      maxValueSpan: 9,
							    zoomLock: true,
							    height: 4,
							    bottom: 0
						    },
						    {
							    type: 'inside',
							    xAxisIndex: 0,
							    start: Math.floor(100 - 900/option.xAxis.data.length),
							    end: 100,
							    minValueSpan: 9,
//				      maxValueSpan: 9,
						    }
					    ];
				    }

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
    },
    watch: {
	    option (newVal, val) {
	    	this.init();
      }
    },
    components: {},
  }
</script>
