<template>
  <div class="art-badge" :class="[dot && 'art-badge_dot']" :style="customBg">
    <span v-if="dot" class="art-badge-dot"></span>
    <span v-else class="art-badge-count" v-text="showCount"></span>
  </div>
</template>

<script>
  export default {
    name: 'artBadge',
    props: {
      dot: {
      	type: Boolean,
        default: false
      },
      count: [Number,String],
      limit: {
      	type: [Number,String],
        default: 99
      },
      bgColor: String
    },
    methods: {
    },
    computed: {
    	showCount () {
    		return parseInt(this.count) >= parseInt(this.limit) ? this.limit + '+' : this.count
      },
	    customBg () {
    		return this.bgColor ? {"background": this.bgColor} : {}
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_badge.scss';
</style>
