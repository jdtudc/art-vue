<template>
  <div class="art-page" v-if="total > pageSize">
    <div class="art-page-list">
      <div class="art-page-prev" :class="{'art-page-prev_disabled': curPage == 1}" @click="prev"></div>
      <div class="art-page-item" :class="{'art-page-item_active': curPage == 1}" @click="changePage(1)">1</div>
      <div class="art-page-prev-fast" v-if="curPage - 2 > 1" @click="prevFast"></div>
      <div class="art-page-item" v-if="curPage - 1 > 1" @click="changePage(curPage - 1)">{{curPage - 1}}</div>
      <div class="art-page-item art-page-item_active" v-if="curPage != 1 && curPage != totalPage" @click="changePage(curPage)">{{curPage}}</div>
      <div class="art-page-item" v-if="curPage + 1 < totalPage" @click="changePage(curPage + 1)">{{curPage + 1}}</div>
      <div class="art-page-item" v-if="curPage + 2 < totalPage" @click="changePage(curPage + 2)">{{curPage + 2}}</div>
      <div class="art-page-next-fast" v-if="curPage + 3 < totalPage" @click="nextFast"></div>
      <div class="art-page-item" :class="{'art-page-item_active': curPage == totalPage}" v-if="totalPage > 1" @click="changePage(totalPage)">{{totalPage}}</div>
      <div class="art-page-next" :class="{'art-page-next_disabled': curPage == totalPage}" @click="next"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'artPage',
    props: {
      total: {
        type: Number,
        require: true,
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
      }
    },
    data () {
      return {
        totalPage: 1,
        curPage: 1,
      }
    },
    created () {
      if(this.now) { this.curPage = this.now;}
      this.totalPage = Math.ceil(this.total/this.pageSize);
      if(this.now > this.totalPage && this.totalPage > 0) {
        this.curPage = this.totalPage;  // 页数溢出
      }
    },
    methods: {
      changePage (page) {
        if(this.curPage != page) {
          this.curPage = page;
          this.$emit('on-change', page)
        }
      },
      prev () {
        if(this.curPage <= 1) {
          return false;
        } else {
          this.changePage(this.curPage - 1);
        }
      },
      prevFast () {
        if(this.curPage - this.fastSize > 0) {
          this.changePage(this.curPage - this.fastSize)
        } else {
          this.changePage(1)
        }
      },
      next () {
        if(this.curPage >= this.totalPage) {
          return false;
        } else {
          this.changePage(this.curPage + 1);
        }
      },
      nextFast () {
        if(this.curPage + this.fastSize > this.totalPage) {
          this.changePage(this.totalPage)
        } else {
          this.changePage(this.curPage + this.fastSize)
        }
      }
    },
    watch: {
      pageSize (val, oldVal) {
        this.curPage = 1;
        this.totalPage = Math.ceil(this.total/val);
      },
      now(val) {
          val && (this.curPage = val);
      },
      total (val) {
				if(this.now) { this.curPage = this.now;}
				this.totalPage = Math.ceil(val/this.pageSize);
				if(this.now > this.totalPage && this.totalPage > 0) {
					this.curPage = this.totalPage;  // 页数溢出
				}
      },
    },
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_page.scss';
</style>
