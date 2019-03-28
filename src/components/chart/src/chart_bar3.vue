<template>
  <div class="art-chart_bar3">
    <div class="art-chart_bar3-canvas"></div>
  </div>
</template>

<script>
	import echarts from 'echarts/lib/echarts'
	import 'echarts/lib/chart/bar';
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/dataZoom';

  export default {
    name: 'artChart_bar3',
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
    		let self = this;
    		let option;
    		if(this.custom) { // 完全使用自定义配置
			    option = this.option;
		    } else {
    			let lineColorArr = ["#0074ff", "#cadfff"];



			    let data = this.option.data;
			    let dataAxis = this.option.dataAxis;
			    let total = [];
			    let series = [];

			    if(dataAxis && data) {
			    	for(let j = 0; j < dataAxis.length; j++) {
			    		total.push(0);
            }
			    	for(let i = 0; i < data.length; i++) {
					    if(i === 0) {
						    series.push({
							    name: data[i].name,
							    type: "bar",
							    itemStyle: {
								    normal: {
									    color: {
										    type: 'linear',
										    x: 0,
										    y: 0,
										    x2: 0,
										    y2: 1,
										    colorStops: [{
											    offset: 0, color: 'rgba(107,174,255,1)' // 0% 处的颜色
										    }, {
											    offset: 1, color: 'rgba(0,116,255,1)' // 100% 处的颜色
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
                  z: 3,
							    data: data[i].data,
						    })
					    } else {
						    series.push({
							    name: data[i].name,
							    type: "bar",
                  barGap: "-100%",
							    itemStyle: {
								    normal: {
									    color: '#cadfff',
									    barBorderRadius: [2,2,0,0],
								    },
								    emphasis: {
									    color: '#cadfff',
								    }
							    },
							    barMaxWidth: 24,
							    data: total,
						    })
					    }
					    for(let k = 0; k < dataAxis.length; k++) {
					    	total[k] += data[i].data[k]
              }
            }

            let sort = JSON.parse(JSON.stringify(total)).sort((a, b) => {
			    		return b - a;
            });

				    option = {
					    tooltip: {
						    trigger: 'axis',
						    axisPointer: { // 坐标轴指示器，坐标轴触发有效
							    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
							    shadowStyle: {
								    color: 'transparent'
							    },
						    },
						    padding: 0,
						    backgroundColor: 'rgba(40,48,57,0.9)',
						    textStyle: {
							    color: "#fff",
							    fontSize: 12,
						    },
						    formatter: function (params, ticket, callback) {
							    let str = "";
							    let title = "";
							    params.forEach(function (item, index, arr) {
								    title = item.axisValue;
								    if(item.seriesIndex === 1) {
									    str += '<li> <i style="background-color:' + lineColorArr[index] + '"> </i>' + item.seriesName + " "+ data[item.seriesIndex].data[item.dataIndex] + '</li>'
                    } else {
									    str += '<li> <i style="background-color:' + lineColorArr[index] + '"> </i>' + item.seriesName + " "+ item.data + '</li>'
                    }
							    });
							    let html = '<div class="art-chart_bar3-tooltip"><h6>' + title + '</h6><ul>' + str + '</ul></div>';
							    return html
						    },
					    },
					    legend: {
						    show: false,
					    },
					    grid: {
						    containLabel: true,
						    left: 0,
						    top: 5,
						    right: 0,
						    bottom: 5,
					    },
					    xAxis: {
						    show: true,
						    type: 'category',
						    axisLine: {     // x 轴
							    onZero: false,
							    lineStyle: {
								    color: 'transparent'
							    }
						    },
						    axisTick: {
							    length: 4,
							    lineStyle: {
								    color: '#f0f2f5'
							    }
						    },
						    axisLabel: {
							    color: '#9297a7',
							    align: 'center'
						    },
						    splitLine: {
							    lineStyle: {
								    type: 'dashed',
								    color: '#f0f2f5'
							    }
						    },
						    axisPointer: {
							    label: {
								    show: false
							    }
						    },
						    data: dataAxis,
					    },
					    yAxis: {
						    type: 'value',
						    min: 0,
						    max: sort[0] ? self.getMaxValue(sort[0]).max : 0,
						    interval: sort[0] ? self.getMaxValue(sort[0]).max/5 : 0,
						    axisPointer: {
							    label: {
								    show: false,
							    }
						    },
						    axisLine: {
							    show: false
						    },
						    axisTick: {  // 刻度
							    show: false
						    },
						    axisLabel: {
							    color: '#bec1ca',
							    formatter: function (value, index) {
								    if(value >= 10000) {
									    return Math.round(value/10000) + "W";
								    } else {
									    return Math.round(value);
								    }
							    }
						    },
						    splitLine: {
							    lineStyle: {
								    color: '#f0f2f5'
							    }
						    }
					    },
					    series: series
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
				    console.error("Error: 入参数据有误，请传入正确的 dataAxis 和 data ");
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
	    // 取图表上限值
	    getMaxValue (value) {
		    value = parseFloat(value).toFixed(2);
		    let length = value.length -5;
		    let intNum = value/parseFloat("10e" + length);
		    let add = 0;
		    if(parseInt(intNum) == Math.round(intNum)) {  // 说明第二位数字小于5
			    add = parseFloat("5e" + length)
		    } else {
			    add = parseFloat("10e" + length)
		    }
		    return {max: Math.ceil((parseFloat(value) + add)/add) * add, length: length};
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
