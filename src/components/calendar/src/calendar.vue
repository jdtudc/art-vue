<template>
  <div class="art-calendar"
       :class="{'art-calendar_range': type == 'range', 'art-calendar_one': selectRange.length == 1}"
       v-clickoutside="close">
    <div class="art-cal-header">
      <!-- 文本框或标签 -->
      <div class="art-cal-result" :class="{'art-cal-result_open': open}" v-if="type == 'range'"
           @click="toggleCom">
        <p>{{selectRangeValue || placeholder}}</p>
      </div>
      <art-input size="middle" :value="selectValue" :placeholder="placeholder" v-else
                 @click.native="toggleCom" icon="//storage.360buyimg.com/static-res/tech/jrv/1.0.0/calendar/icon_cal.png"
                 iconPos="right" :status="status" :errorPos="errorPos" :errorText="errorText"
                 :errorStyle="errorStyle" readonly></art-input>
    </div>
    <transition name="fade-scale">
      <div class="art-cal-cont" v-show="open" :class="[!leftNav && 'no-left-nav', pos ==='right' && 'art-right']">
        <div v-if="leftNav" class="art-cal-quick-nav">
          <ul>
            <li v-for="item in navList" @click="clickNav(item)">{{item.text}}</li>
          </ul>
        </div>
        <div class="art-cal-main-cont" :class="!leftNav && 'no-left-nav'">
          <div class="art-cal-main-box">
            <div class="art-cal-title-box">
              <a href="javascript:;" class="art-cal-prev-year" @click="prevYear"></a>
              <a href="javascript:;" class="art-cal-prev-month" @click="prevMonth"></a>
              <span v-for="obj in data">{{obj.title}}</span>
              <a href="javascript:;" class="art-cal-next-month" @click="nextMonth"></a>
              <a href="javascript:;" class="art-cal-next-year" @click="nextYear"></a>
            </div>
            <div class="art-cal-cont-box clearfix">
              <div class="art-cal-single-box" v-for="(obj, index) in data">
                <div class="art-cal-week">
                  <ul class="clearfix">
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                  </ul>
                </div>
                <div class="art-cal-days">
                  <ul class="clearfix">
                    <li v-for="(day, idx) in obj.daysArr"
                        :class="{'dis': disabledDate && disabledDate(day), 'dark': day.month != obj.month, 'cur': day.year == cur.year && day.month == cur.month && day.day == cur.day, 'active': type == 'range' ? (day.month == obj.month && (day.ts == selectRange[0] || day.ts == selectRange[1])) : (day.month == obj.month && day.ts == select), 'sel': entered ? (day.month == obj.month && type == 'range' && day.ts > enterRange[0] && day.ts < enterRange[1]) : (day.month == obj.month && type == 'range' && selectRange[1] &&  day.ts > selectRange[0] && day.ts < selectRange[1])}"
                        @click="!(disabledDate && disabledDate(day)) && clickDay(day)"
                        @mouseenter="mouseEnter(day)" @mouseleave="mouseLeave(day)">
                      {{day.day}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import ArtInput from '../../input/index'
  import clickoutside from '../../../directives/clickoutside'

  export default {
    name: 'artCalendar',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      leftNav: {  // 左侧快捷菜单
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'default'
      },
      pos: {
        type: String,
        default: 'left'
      },     // range 为范围类型
      date: [String, Number], // 设置默认展示的时间，Date类型能转换都可以
      dateRange: Array, // 设置默认展示的时间范围，Date类型能转换都可以
      disabledDate: Function, // 不可选日期
      format: { // 显示格式
        type: String,
        default: 'yyyy/MM/dd'
      },
      placeholder: {  // 默认显示文案
        type: String,
        default: "请选择日期"
      },

      // 文本框相关设置
      errorPos: String,  // 错误文案的位置  "默认下边", "right"- 右边，不占位，默认最大宽度200px
      errorText: String,
      errorStyle: String, // error 文案样式，主要用来自定义宽度
      status: String,
    },
    data() {
      return {
        open: this.show ? true : false,  // 默认不显示
        // 当前选中的日期
        select: null,
        // 当前选中的日期范围
        selectRange: [],
        selectRangeValue: '',
        // 鼠标划上的日期范围
        entered: false,
        enterRange: [],
        // 左侧导航默认内容，暂不支持传入
        navList: null,
        // 一天的时间戳
        oneDayTs: 24 * 60 * 60 * 1000,
        data: [], // 渲染使用的数据
        cur: {},  // 当前时间数据
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        let now = +new Date()  // 当前时间
        this.cur = {
          year: this.formatTime(now, 'yyyy'),
          month: this.formatTime(now, 'MM'),
          day: this.formatTime(now, 'dd'),
          ts: now
        }
        if (this.leftNav) {
          this._loadNavDate(now)
        }

        if (this.type == 'range') {  // 范围
          this.setDate(this.dateRange);
          /*if (this.dateRange) {  // 已选中
                  if (this.dateRange.length == 2) {
                      this.selectRange[0] = +new Date(this.formatTime(this.dateRange[0], "yyyy/MM/dd"));
                      this.selectRange[1] = +new Date(this.formatTime(this.dateRange[1], "yyyy/MM/dd"));
                      this.selectRangeValue = this.formatTime(this.selectRange[0], this.format) + '-' + this.formatTime(this.selectRange[1], this.format)
                      this._updatesDays(this.selectRange[0])
                  } else {
                      console.error('请传入正确长度的数组，dateRange数组长度必须为2。例如： [\'2017/10/01\',\'2017/10/08\']')
                  }
              } else {  // 使用当前时间创建
                  this._updatesDays(now)
              }*/
        } else {
          this.setDate(this.date);
          /*if (this.date) { // 已选中
                  this.select = +new Date(this.date)
                  this._updatesDays(this.select)
              } else {  // 使用当前时间创建
                  this._updatesDays(now)
              }*/
        }
      },
      setDate(selectDate) {
        let now = +new Date()  // 当前时间
        if (this.type == 'range') {  // 范围
          if (selectDate) {  // 已选中
            if (selectDate.length == 2) {
              this.selectRange[0] = +new Date(selectDate[0])
              this.selectRange[1] = +new Date(selectDate[1])
              this.selectRangeValue = this.formatTime(this.selectRange[0], this.format) + '-' + this.formatTime(this.selectRange[1], this.format)
              this._updatesDays(this.selectRange[0])
            } else {
              console.error('请传入正确长度的数组，dateRange数组长度必须为2。例如： [\'2017/10/01\',\'2017/10/08\']')
            }
          } else {  // 使用当前时间创建
            this.selectRange = []
            this.selectRangeValue = null
            this._updatesDays(now)
          }
        } else {
          if (selectDate) { // 已选中
            this.select = +new Date(selectDate)
            this._updatesDays(this.select)
          } else {  // 使用当前时间创建
            this.select = null
            this._updatesDays(now)
          }
        }
      },
      toggleCom() {
        this.open = !this.open
      },
      showCom() {
        this.open = true
      },
      hideCom() {
        this.open = false
      },
      prevYear() {
        let year = this.data[0].year
        let month = this.data[0].month
        year = Number(year) - 1 + ''
        let ts = +new Date(year + '/' + month + '/01')
        this._updatesDays(ts)
      },
      prevMonth() {
        let year = this.data[0].year
        let month = this.data[0].month
        if (month == '01') {
          year = Number(year) - 1 + ''
          month = '12'
        } else {
          month = Number(month) - 1
          month = (month < 10 ? '0' : '') + month
        }
        let ts = +new Date(year + '/' + month + '/01')
        this._updatesDays(ts)
      },
      nextMonth() {
        let year = this.data[0].year
        let month = this.data[0].month
        if (month == '12') {
          year = Number(year) + 1 + ''
          month = '01'
        } else {
          month = Number(month) + 1
          month = (month < 10 ? '0' : '') + month
        }
        let ts = +new Date(year + '/' + month + '/01')
        this._updatesDays(ts)
      },
      nextYear() {
        let year = this.data[0].year
        let month = this.data[0].month
        year = Number(year) + 1 + ''
        let ts = +new Date(year + '/' + month + '/01')
        this._updatesDays(ts)
      },
      /**
       * @param {Object} nav 当前选中nav对象
       * */
      clickNav(nav) {
        if (this.type == 'range' && nav.value.length == 2) {
          if (nav.value.length == 2) {
            let start = this.formatTime(nav.value[0], 'yyyy/MM/dd')
            let end = this.formatTime(nav.value[1], 'yyyy/MM/dd')
            this.selectRange[0] = +new Date(start)
            this.selectRange[1] = +new Date(end)
            this.selectRangeValue = this.formatTime(this.selectRange[0], this.format) + '-' + this.formatTime(this.selectRange[1], this.format)
            this._updatesDays(this.selectRange[0])

            this.$emit("quick-select", [{
              year: this.formatTime(this.selectRange[0], 'yyyy'),
              month: this.formatTime(this.selectRange[0], 'MM'),
              day: this.formatTime(this.selectRange[0], 'dd'),
              ts: this.selectRange[0]
            }, {
              year: this.formatTime(this.selectRange[1], 'yyyy'),
              month: this.formatTime(this.selectRange[1], 'MM'),
              day: this.formatTime(this.selectRange[1], 'dd'),
              ts: this.selectRange[1]
            }])
          } else {
            console.error('nav配置有误，参数应为两个，对应起始和结束时间')
          }
        } else {
          let ts = this.formatTime(nav.value, 'yyyy/MM/dd')
          this.select = +new Date(ts)
          this._updatesDays(this.select)
          this.$emit("quick-select", {
            year: this.formatTime(this.select, 'yyyy'),
            month: this.formatTime(this.select, 'MM'),
            day: this.formatTime(this.select, 'dd'),
            ts: this.select
          })
        }
        this.hideCom()
      },
      /**
       * @param {Object} day 点击的day对象
       * */
      clickDay(day) {
        if (this.type == 'range') {
          this.entered = false
          if (this.selectRange.length == 0) {
            let start = this.formatTime(day.ts, 'yyyy/MM/dd')
            this.selectRange[0] = +new Date(start)
          } else if (this.selectRange.length == 1) {
            let end = this.formatTime(day.ts, 'yyyy/MM/dd')
            let endTs = +new Date(end)

            this.selectRange[1] = endTs
            this.selectRange = this.selectRange.sort((a, b) => {
              return a - b
            })
            this.selectRangeValue = this.formatTime(this.selectRange[0], this.format) + '-' + this.formatTime(this.selectRange[1], this.format)
            this.hideCom()

            this.$emit('select', [
              {
                year: this.formatTime(this.selectRange[0], 'yyyy'),
                month: this.formatTime(this.selectRange[0], 'MM'),
                day: this.formatTime(this.selectRange[0], 'dd'),
                ts: this.selectRange[0]
              },
              {
                year: this.formatTime(this.selectRange[1], 'yyyy'),
                month: this.formatTime(this.selectRange[1], 'MM'),
                day: this.formatTime(this.selectRange[1], 'dd'),
                ts: this.selectRange[1]
              },
            ])


            /*
						if (endTs > this.selectRange[0]) {
							this.selectRange[1] = endTs
							this.selectRangeValue = this.formatTime(this.selectRange[0], this.format) + '-' + this.formatTime(this.selectRange[1], this.format)

							this.hideCom()

							this.$emit('select', [
								{
									year: this.formatTime(this.selectRange[0], 'yyyy'),
									month: this.formatTime(this.selectRange[0], 'MM'),
									day: this.formatTime(this.selectRange[0], 'dd'),
									ts: this.selectRange[0]
								},
								{
									year: this.formatTime(this.selectRange[1], 'yyyy'),
									month: this.formatTime(this.selectRange[1], 'MM'),
									day: this.formatTime(this.selectRange[1], 'dd'),
									ts: this.selectRange[1]
								},
							])
						} else if (endTs < this.selectRange[0]) {
							this.selectRange[0] = endTs
						}
						*/
          } else if (this.selectRange.length == 2) {
            this._clearRange()
            let start = this.formatTime(day.ts, 'yyyy/MM/dd')
            this.selectRange[0] = +new Date(start)

          }
        } else {
          let ts = this.formatTime(day.ts, 'yyyy/MM/dd')
          this.select = +new Date(ts)
          this.hideCom()

          this.$emit('select', day)
        }
      },
      /**
       * @param {Object} day 点击的day对象
       * */
      mouseEnter(day) {
        if (this.selectRange.length == 1) {
          if (day.ts > this.selectRange[0]) {
            this.enterRange[0] = this.selectRange[0]
            this.enterRange[1] = day.ts
          } else {
            this.enterRange[0] = day.ts
            this.enterRange[1] = this.selectRange[0]
          }
          this.entered = true
        }
      },
      mouseLeave() {
        if (this.entered) {
          this.enterRange.splice(1, 1)
          this.entered = false
        }
      },
      _clearRange() {
        this.selectRange = []
      },
      /**
       * @param {timestamp} ts 当前时间戳
       * */
      _loadNavDate(ts) {
        this.navList = (this.type == 'range') ? [
          {'text': '最近一周', 'value': [ts - 7 * this.oneDayTs, ts]},
          {'text': '最近一个月', 'value': [ts - 30 * this.oneDayTs, ts]},
          {'text': '最近三个月', 'value': [ts - 90 * this.oneDayTs, ts]},
        ] : [
          {'text': '今天', 'value': ts},
          {'text': '昨天', 'value': ts - this.oneDayTs},
          {'text': '一周前', 'value': ts - 7 * this.oneDayTs},
        ]
      },
      /**
       * @param {timestamp} ts 当前时间戳
       * */
      _updatesDays(ts) {
        this.data = []
        let year = this.formatTime(ts, 'yyyy')
        let month = this.formatTime(ts, 'MM')
        let sTitle = this.formatTime(year + '/' + month + '/01', 'yyyy年MM月')

        this.data.push({title: sTitle, year: year, month: month, daysArr: []})

        let startDay = new Date(year + '/' + month + '/01').getDay()   // 这个月第一天星期几 0表示星期天
        let startTime = +new Date(year + '/' + month + '/01')
        if (startDay != 0) {
          startTime -= startDay * this.oneDayTs
        }

        let weeks = this.getWeeks(ts);

        for (let i = 0; i < 7 * weeks; i++) {
          this.data[0].daysArr.push({
            'year': this.formatTime(startTime + i * this.oneDayTs, 'yyyy'),
            'month': this.formatTime(startTime + i * this.oneDayTs, 'MM'),
            'day': this.formatTime(startTime + i * this.oneDayTs, 'dd'),
            'ts': startTime + i * this.oneDayTs
          })
        }

        if (this.type == 'range') {  // 范围
          let nextYear = ''
          let nextMonth = ''

          if (month == '12') {
            nextYear = Number(year) + 1 + ''
            nextMonth = '01'
          } else {
            nextYear = year
            nextMonth = Number(month) + 1
            nextMonth = (nextMonth < 10 ? '0' : '') + nextMonth
          }
          let eTitle = this.formatTime(nextYear + '/' + nextMonth + '/01', 'yyyy年MM月')

          this.data.push({title: eTitle, year: nextYear, month: nextMonth, daysArr: []})

          let nextDay = new Date(nextYear + '/' + nextMonth + '/01').getDay()   // 下个月第一天星期几 0表示星期天
          let nextTime = +new Date(nextYear + '/' + nextMonth + '/01')
          if (nextDay != 0) {
            nextTime -= nextDay * this.oneDayTs
          }

          weeks = this.getWeeks(new Date(nextYear, parseInt(nextMonth) - 1, 1).getTime());

          for (let i = 0; i < 7 * weeks; i++) {
            this.data[1].daysArr.push({
              'year': this.formatTime(nextTime + i * this.oneDayTs, 'yyyy'),
              'month': this.formatTime(nextTime + i * this.oneDayTs, 'MM'),
              'day': this.formatTime(nextTime + i * this.oneDayTs, 'dd'),
              'ts': nextTime + i * this.oneDayTs
            })
          }
        }
      },

      // 获取一个月前后占用几周
      getWeeks(ts) {
        let date = new Date(ts);
        date.setDate(1);
        let firstDayWeek = date.getDay();// 第一天周几

        date.setMonth(date.getMonth() + 1);
        date.setDate(0);// 最后一天
        let days = date.getDate();  // 当月天数
        let count = (days + firstDayWeek - 1) / 7;
        return parseInt(count) + 1;  // 当月周数
      },
      /**
       * @Function 格式化时间
       * @param {Date} date  '2017/10/01 | 2017-10-01 | 1506787200000'
       * @param {String} format 'yyyy-MM-dd HH:mm:ss'
       * @
       */
      formatTime: function (date, format) {
        let t = new Date(date)
        let tf = function (i) {
          return (i < 10 ? '0' : '') + i
        }
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
          switch (a) {
            case 'yyyy':
              return tf(t.getFullYear())
              break
            case 'MM':
              return tf(t.getMonth() + 1)
              break
            case 'mm':
              return tf(t.getMinutes())
              break
            case 'dd':
              return tf(t.getDate())
              break
            case 'HH':
              return tf(t.getHours())
              break
            case 'ss':
              return tf(t.getSeconds())
              break
          }
        })
      },

      close() {
        this.open = false;
      },
    },
    computed: {
      selectValue() {
        return this.select ? this.formatTime(this.select, this.format) : ''
      }
    },
    watch: {
      date() {
        this.init()
      },
      dateRange: {
        handler: function () {
          this.init()
        },
        deep: true
      },
    },
    filters: {},
    components: {
      ArtInput
    },
    directives: {
      clickoutside
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_calendar.scss';
</style>
