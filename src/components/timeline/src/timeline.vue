<template>
  <div class="art-timeline" :class="[type === 'changelog' && 'art-timeline-changelog']">
    <div class="art-timeline-item" :class="[type === 'changelog' ? 'art-timeline-item_' + log.status : 'art-timeline-item_' + status]">
      <div class="art-timeline-item-icon"><slot name="icon"></slot></div>
      <div class="art-timeline-item-cont" v-if="type === 'changelog'">
        <h3 class="art-timeline-item-cont-version" v-text="log.version"></h3>
        <p class="art-timeline-item-cont-date">
          <i class="iconfont" :class="getZodiac"></i><span v-text="log.date"></span>
        </p>
        <ul class="art-timeline-item-cont-change-list" v-if="log.changeList">
          <li class="art-timeline-item-cont-change-item" v-for="(item, index) in log.changeList" :key="index">
            <span v-text="item.type+ ':'"></span>
            <span v-text="item.desc"></span>
            <a :href="item.issueHref" v-if="item.issueNo" target="_blank" v-text="`#${item.issueNo}`"></a>
          </li>
        </ul>
      </div>
      <div class="art-timeline-item-cont" v-else>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'artTimeline',
    props: {
    	status: String,
	    type: String,
      log: {
    		type: Object,
        default: () => {
        	return {}
        }
      }
    },
    data () {
    	return {
    		date: this.log.date
      }
    },
    computed: {
    	getZodiac () {
    		if(!this.date) {
    			return "";
        }
        let zodiac = "";
    		const year = new Date(this.date).getFullYear();
		    if(year % 12 === 0) {
			    zodiac = "icon-houxiao"
		    }
		    if(year % 12 === 1) {
			    zodiac = "icon-jixiao"
		    }
    		if(year % 12 === 2) {
			    zodiac = "icon-gouxiao"
        }
		    if(year % 12 === 3) {
			    zodiac = "icon-zhuxiao"
		    }
		    if(year % 12 === 4) {
			    zodiac = "icon-shuxiao"
		    }
		    if(year % 12 === 5) {
			    zodiac = "icon-niuxiao"
		    }
		    if(year % 12 === 6) {
			    zodiac = "icon-huxiao"
		    }
		    if(year % 12 === 7) {
			    zodiac = "icon-tuxiao"
		    }
		    if(year % 12 === 8) {
			    zodiac = "icon-longxiao"
		    }
		    if(year % 12 === 9) {
			    zodiac = "icon-shexiao"
		    }
		    if(year % 12 === 10) {
			    zodiac = "icon-maxiao"
		    }
		    if(year % 12 === 11) {
			    zodiac = "icon-yangxiao"
		    }
		    return zodiac;
      }
    },
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_timeline.scss';
</style>
