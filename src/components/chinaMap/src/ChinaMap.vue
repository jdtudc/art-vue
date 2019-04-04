<template>
  <div :id="id" class="chart-china"></div>
</template>

<script>
	// 引入基本模板
	import echarts from 'echarts/lib/echarts'
	// 引入提示框和title组件
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/legendScroll'
  import 'echarts/map/js/china'

	import geoJson from "../china.json";

	// 最后一个：南海诸岛/地图背景色
	let colors = ["#0bdba8", "#0074ff", "#a4cdff", "#e6f1ff", "#a4cdff"];
	let cityLocateData = [];

	export default {
		name: '',
		props: {
			isCity: {
				type: Boolean,
				default: false
			},
			tooltipFn: Function,
			data: Object,
      url: {
				type: String,
        default: "//biw.jd.com/MarketingCloud/provinceCity.do"
      }
		},
		data() {
			return {
				id: "china_" + getRandomStr(12),
				isBg: false, // 是否绘制为背景，城市数据或没有数据的时候显示
			}
		},
		mounted() {
			if (!this.isCity) {  // 如果是省份地图，dom元素存在之后再绘制
        this.draw();
			} else {
				this.$nextTick(() => {
					if (this.isCity) {
						this.getData();
					}
        });
      }
		},
		watch: {
			data: function (oldVal, newVal) {
				this.refresh();
			}
		},
		methods: {

			// 刷新
			refresh() {
				if (this.isCity) {
					this.getData();
				} else {
					this.draw();
				}
			},

			// 绘制入口
			draw() {
				let self = this;
				let data = this.data;
				if (!data) return;
				let isCity = this.isCity;
				let cityData = {}, provList = [];
				let color = colors[3];   // 省份地图的时候，南海诸岛颜色深一些？

				if (isCity) {
					color = colors[3];
					cityData = this.formatCityData(data, {});
				}
				provList = this.formatProvData(data);

				let ele = document.getElementById(self.id);
				if(!ele) return;
				let myChart = echarts.init(ele);
				if (!myChart) {
					return console.error("未找到地图的dom元素，id:" + self.id);
				}
				echarts.registerMap('china', geoJson);
				let option = {
					tooltip: {
						trigger: 'item',
						padding: 0,
						backgroundColor: 'transparent',
						textStyle: {},
						extraCssText: "pointer-events: none;",
						formatter: function (params, id, fn) {
							let idx = params.dataIndex;
							let val = params.value;
							if (idx === -1 || isNaN(val)) return;
							let defaultTxt = params.data.name + " NO." + (idx + 1);
							let cont = (self.tooltipFn && self.tooltipFn(params)) || defaultTxt;
							return '<div class="china-tooltip">' + cont + '</div>';
						},
						position: function (pos, params, dom, rect, size) {
							return 'inside';
						}
					},
					geo: {
						map: 'china',
						itemStyle: {
							normal: {
								areaColor: 'transparent',
								borderColor: 'transparent'
							},
							emphasis: {
								areaColor: 'transparent'
							}
						},
						silent: true
					},
					series: [
						{
							name: '',
							type: 'map',
							mapType: 'china',
							roam: false,
							right: 0,
							left: 0,
							top: 0,
							itemStyle: {
								normal: {
									label: {show: false},
									areaColor: color,
									borderWidth: .5,
									borderColor: "#f0f2f5" //f0f2f5
								},
								emphasis: {
									label: {show: false},
									areaColor: color,
									borderColor: "#f0f2f5"
								}
							},
							data: provList
						},
						{
							name: '城市占比',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							showEffectOn: 'emphasis',
							rippleEffect: {
								period: 4,
								scale: 1.5,
								brushType: 'fill'
							},
							data: cityData.list,
							symbolSize: function (value, params) {
								if (!isCity) return;
								let c = cityData;
								let minv = c.minVal;
								let sizes = c.size;
								return sizes[0] + (value[2] - minv) / ((c.maxVal - minv) / sizes[1]);
							},
							tooltip: {
								trigger: 'item',
								backgroundColor: 'transparent',
								padding: 0,
								position: function (point, params, dom, rect, size) {
									return 'top'
								},
								formatter: function (params, id, fn) {
									let idx = params.dataIndex;
									if (idx === -1) return;
									let defaultTxt = params.data.name + " NO." + (idx + 1);
									let cont = (self.tooltipFn && self.tooltipFn(params)) || defaultTxt;
									return '<div class="china-tooltip">' + cont + '</div>';
								},
							},
							itemStyle: {
								normal: {
									color: function (params) {
										if (params.dataIndex < 3) {
											return {
												type: 'radial',
												x: .5,
												y: .5,
												r: .5,
												colorStops: [{
													offset: 0, color: 'rgba(11,219,168,.01)'
												}, {
													offset: .79, color: 'rgba(11,219,168,.4)'
												}, {
													offset: .8, color: 'rgba(11,219,168,.4)'
												}, {
													offset: .96, color: 'rgba(11,219,168,.6)'
												}, {
													offset: 1, color: 'rgba(11,219,168,1)'
												}],
												globalCoord: false // 缺省为 false
											}
										} else {
											return {
												type: 'radial',
												x: .5,
												y: .5,
												r: .5,
												colorStops: [{
													offset: 0, color: 'rgba(0,116,255,.01)'
												}, {
													offset: .79, color: 'rgba(0,116,255,.4)'
												}, {
													offset: .8, color: 'rgba(0,116,255,.4)'
												}, {
													offset: .96, color: 'rgba(0,116,255,.6)'
												}, {
													offset: 1, color: 'rgba(0,116,255,1)'
												}],
												globalCoord: false // 缺省为 false
											}
										}
									},
									shadowColor: 'rgba(0,116,255,0.2)',
									shadowBlue: 2,
									shadowOffsetY: 1
								}
							}
						}
					]
				};

				if (this.isBg) {
					option.tooltip.formatter = function () {
					};
				}
				myChart.setOption(option);
			},

			// 格式化省份数据
			formatProvData(result) {
				let list = result.list;
				let isCity = this.isCity;
				this.isBg = isCity;
				if (!isCity && (!list || list.length === 0)) {   // 省份没数据
					list = this.getMockData();
					this.isBg = true;
				}
				list.sort(function (a, b) {
					return b.value - a.value;
				});
				for (let i = 0, len = list.length; i < len; i++) {
					let item = list[i];
					let idx = 3;
					if (i < 1) {
						idx = 0;
					} else if (i < 10) {
						idx = 1;
					} else if (i < 20) {
						idx = 2;
					} else {
						idx = 3;
					}
					if (this.isBg) {
						idx = 3;
					}
					let color = colors[idx];
					item.itemStyle = {
						normal: { // 默认背景色
							areaColor: color,
							borderColor: "#fff"
						},
						emphasis: { // 悬浮颜色
							areaColor: color,
							borderColor: "#fff"
						}
					}
				}
				return list;
			},

			// 城市数据
			formatCityData(originalData) {
				let allList = cityLocateData;
				let od = originalData || {};
				od.size = od.size || [];
				let resultList = [];

				// 散点图的尺寸，最大30px，最小10px
				// aa最大的值，点的大小为30px，aa最小的值，为10px，其他点的大小根据aa的值与最小值的比例得出
				let cityData = {
					size: [od.size[0] || 8, od.size[1] || 28]
				};
				let list = od.list;
				list.sort(function (a, b) {
					return b.value - a.value;
				});
				cityData.minVal = list[list.length - 1].value;
				cityData.maxVal = list[0].value;

				for (let i = 0, leng = allList.length; i < leng; i++) {
					let item = allList[i];
					for (let idx = 0, len = list.length; idx < len; idx++) {
						let city = list[idx];
						if (item.name === city.name) {
							resultList.push({
								name: item.name,
								value: [item.longitude, item.latitude, city.value],
								_value: city.value
							});
							break;
						}
					}
				}
				resultList.sort(function (a, b) {
					return b._value - a._value;
				});
				cityData.list = resultList;
				return cityData;
			},

			// 获取城市坐标
			getData() {
				let self = this;
				if (cityLocateData && cityLocateData.length > 0) {
					self.draw();
					return;
				}
				var xhr = new XMLHttpRequest()
				xhr.onreadyStateChange = function () {
					if (xhr.readystate === 4) {
						if (xhr.status === 304 || (xhr.status >= 200 && xhr.status < 300)) {
              const result = xhr.responseText
              console.log(reslut);
							if (result.code === "000000") {
								cityLocateData = result.data;
								self.draw();
							} else {
								console.error("数据获取失败");
							}
						} else {
							console.log('type: error, errCode:', xhr.status)
						}
					}
				}
				xhr.open('get', self.url, true)
				xhr.setRequestHeader('Content-Type', 'application/json')
				xhr.send(null)
			},

			// 城市地图中覆盖边框
			getMockData() {
				return [
					{name: '北京', value: 0},
					{name: '天津', value: 0},
					{name: '上海', value: 0},
					{name: '重庆', value: 0},
					{name: '河北', value: 0},
					{name: '河南', value: 0},
					{name: '云南', value: 0},
					{name: '辽宁', value: 0},
					{name: '广西', value: 0},
					{name: '甘肃', value: 0},
					{name: '山西', value: 0},
					{name: '内蒙古', value: 0},
					{name: '陕西', value: 0},
					{name: '吉林', value: 0},
					{name: '福建', value: 0},
					{name: '黑龙江', value: 0},
					{name: '湖南', value: 0},
					{name: '安徽', value: 0},
					{name: '青海', value: 0},
					{name: '西藏', value: 0},
					{name: '四川', value: 0},
					{name: '山东', value: 0},
					{name: '新疆', value: 0},
					{name: '江苏', value: 0},
					{name: '浙江', value: 0},
					{name: '江西', value: 0},
					{name: '湖北', value: 0},
					{name: '贵州', value: 0},
					{name: '广东', value: 0},
					{name: '宁夏', value: 0},
					{name: '海南', value: 0},
					{name: '台湾', value: 0},
					{name: '香港', value: 0},
					{name: '澳门', value: 0}
				]
			},
		},
		computed: {},
		components: {}
	}

	function getRandomStr(len) {
		let result = [];
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789-_";
		for (let i = 0; i < len; i++) {
			let index = Math.floor(Math.random() * str.length);
			result.push(str[index]);
		}
		return result.join("");
	}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  .chart-china {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
<style rel="stylesheet/scss" lang="scss" type="text/scss">
  .china-tooltip {
    pointer-events: none;
    position: relative;
    top: -20px;
    line-height: 1;
    padding: 6px 10px;
    border-radius: 2px;
    background-color: rgba(40, 48, 57, .9);
    &:after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 0;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid rgba(40, 48, 57, .9);
    }
  }
</style>
