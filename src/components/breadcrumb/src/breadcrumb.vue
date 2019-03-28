<template>
  <div class="art-breadcrumb">
    <div class="art-breadcrumb-item" v-for="breadcrumb in data">
      <span class="art-breadcrumb-item-link" :class="{'art-breadcrumb-item-link_active': breadcrumb.active, 'art-breadcrumb-item-link_disabled': breadcrumb.disabled}" href="javascript:;" @click="handleClick(breadcrumb)">
        {{breadcrumb.value}}
      </span>
      <span class="art-breadcrumb-item-separator">&gt;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'artBreadcrumb',
    props: {
      data: {
        type: Array,
        default: () => { return [];}
      },
      SPA: {
        type: Boolean,
        default: true
      },
      history: {
        type: Boolean,
        default: true
      },
      customClick: {
      	type: Boolean,
        default: false
      },
    },
    methods: {
      handleClick(breadcrumb, event){
        if(breadcrumb.active) { // 点击的是当前项
          this.$emit("on-click", breadcrumb, event);
        } else {
          if(this.customClick) {  // 自定义点击事件
            this.$emit("on-click", breadcrumb, event);
          } else if(!breadcrumb.path) { // 未配置路径
            console.warn("当前选中项未配置路径，将对外推送on-click事件");
            this.$emit("on-click", breadcrumb, event)
          } else {
            if(this.SPA) {  // 单页开发模式
              if(this.$router) {  // 使用了vue-router
                this.history ? this.$router.push({path: breadcrumb.path}) : this.$router.replace({path: breadcrumb.path})
              } else {
                window.location.href = breadcrumb.path;
              }
            } else {  // 正常开发
              window.location.href = breadcrumb.path;
            }
          }
        }
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_breadcrumb.scss';
</style>
