<template>
  <div class="art-pagination clearfix">
    <art-page-size :total="total" :transAni="transAni" :data="data" @on-choose="handleChoose"></art-page-size>
    <art-page :total="total" :pageSize="pageSize" :now="now" :fastSize="fastSize" @on-change="handleChange"></art-page>
  </div>
</template>
<script>
  import ArtPageSize from './page-size.vue'
  import ArtPage from './page.vue'
  export default {
    name: 'artPagination',
    props: {
      total: {
        type: Number,
        require: true,
      },
      // page-size dropdata
	    data: {
		    type: Array,
        require: true
	    },

      now: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      fastSize: {
        type: Number,
        default: 5,
      },
	    transAni: {
		    type: String,
		    default: 'fade-in-move-in-up'
	    },
    },
    methods: {
    	handleChoose (tab) {
    		this.$emit("on-choose",tab)
      },
	    handleChange (page) {
		    this.$emit("on-change",page)
	    },
    },
	components: {
	  ArtPageSize,
	  ArtPage,
	},
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_pagination.scss';
</style>
