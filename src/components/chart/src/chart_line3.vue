<template>
  <div class="art-chart_line3">
    <div class="art-chart_line3-canvas"></div>
  </div>
</template>

<script>
	import echarts from 'echarts/lib/echarts'
	import 'echarts/lib/chart/line';
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/dataZoom';

  export default {
    name: 'artChart_line3',
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
			    let data = this.option.data;
			    let dataAxis = this.option.dataAxis;
			    let lineColorArr = self.getColorConfig(data);

			    if(dataAxis && data && data.length === 2) {
				    let max = 0;
				    for(let i = 0; i < data.length; i++) {
					    for(let j = 0; j < data[i].data.length; j++) {
						    if(data[i].data[j] > max) {
							    max = data[i].data[j];
						    }
					    }
				    }

				    option = {
					    grid: {
						    containLabel: true,
						    left: 0,
						    top: 5,
						    right: 0,
						    bottom: 5,
					    },
					    tooltip: {
						    trigger: 'axis',
						    axisPointer: {
							    type: 'line',
							    lineStyle: {
								    type: "dashed",
								    color: "#9297a7"
							    }
						    },
						    padding: 0,
						    backgroundColor: "rgba(40,48,57,0.9)",
						    textStyle: {
							    color: "#fff",
							    fontSize: 12,
						    },
						    formatter: function (params, ticket, callback) {
							    let str = "";
							    let title = "";
							    params.forEach(function (item, index, arr) {
								    title = item.axisValue;
								    let tip = (item.data || item.data === 0) ? item.data : '暂无数据'
                    str += '<li> <i style="background-color:' + lineColorArr[index] + '"> </i>' + item.seriesName + " "+ tip + '</li>'
							    });
							    let html = '<div class="art-chart_line3-tooltip"><h6>' + title + '</h6><ul>' + str + '</ul></div>';
							    return html
						    }
					    },
					    legend: {
						    show: false
					    },
					    xAxis: {
						    data: dataAxis,
						    axisLabel: {
							    color: "#bec1ca",
							    align: 'center',
						    },
						    axisTick: {
							    length: 4,
							    lineStyle: {
								    color: "#f0f2f5"
							    }
						    },
						    axisLine: {     // x 轴
							    onZero: false,
							    lineStyle: {
								    color: 'transparent'
							    }
						    },
						    splitLine: {
							    lineStyle: {
								    type: 'dashed',
								    color: "#f0f2f5"
							    }
						    },
						    axisPointer: {
							    label: {
								    show: false
							    }
						    },
					    },
					    yAxis: {
						    type: 'value',
						    min: 0,
                max: self.getMaxValue(max).max,
                interval: self.getMaxValue(max).max / 5,
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
							    color: "#bec1ca",
							    formatter: function (value, index) {
								    if(value >= 10000) {
									    return Math.round(value/1000) + "K";
								    } else {
									    return Math.round(value);
								    }
							    }
						    },
						    splitLine: {
							    lineStyle: {
								    color: "#f0f2f5"
							    }
						    }
					    },
					    series: []
				    };

				    for(let i = 0; i < data.length; i++) {
				    	if(i === 0) {
				    		option.series.push({
							    name: data[i].name,
							    type: 'line',
							    smooth: true,
							    //showSymbol: false,
							    symbolSize: 0,
							    lineStyle: {
								    normal: {
									    color: '#0074ff',
									    shadowBlur: 6,
									    shadowOffsetY: 3,
									    shadowColor: 'rgba(0,116,255,0.4)',
									    width: 4
								    }
							    },
							    areaStyle: {
								    normal: {
									    color: {
										    type: 'linear',
										    x: 0,
										    y: 0,
										    x2: 0,
										    y2: 1,
										    colorStops: [{
											    offset: 0, color: 'rgba(0,116,255,0.15)' // 0% 处的颜色
										    }, {
											    offset: 1, color: 'rgba(0,116,255,0)' // 100% 处的颜色
										    }],
										    globalCoord: false // 缺省为 false
									    }
								    }
							    },
							    data: data[i].data,
							    z: 3
                })
              } else {
						    option.series.push({
							    name: data[i].name,
							    type: 'line',
							    smooth: true,
							    //showSymbol: false,
							    symbolSize: 0,
							    lineStyle: {
								    normal: {
									    type: 'dashed',
									    color: '#bec1ca',
									    width: 2
								    }
							    },
							    data: data[i].data
						    })
					    }
            }

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
				    console.error("Error: 入参数据有误，请确认 dataAxis 和 data 数组的数据，目前只支持 data 长度为2做对比");
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
      // 色值转换rgba
	    hexToRgba (hex, opacity) {
		    let sColor = hex.toLowerCase();
		    //十六进制颜色值的正则表达式
		    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
		    // 如果是16进制颜色
		    if (sColor && reg.test(sColor)) {
			    if (sColor.length === 4) {
				    let sColorNew = "#";
				    for (let i = 1; i < 4; i += 1) {
					    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
				    }
				    sColor = sColorNew;
			    }
			    //处理六位的颜色值
			    let sColorChange = [];
			    for (let i = 1; i < 7; i += 2) {
				    sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
			    }
			    return "rgba(" + sColorChange.join(",") + ", " + opacity + ")";
		    }
		    return sColor;
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
