<template>
  <div class="search-nav">
    <a href="javascript:void(0)" class="search-nav-icon" @click.prevent="isShowSearchPanel">
      <i class="icon iconfont icon-sousuo1"></i>
      <span>请输入搜索内容</span>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{

    },
    data(){
      return{}
    },
    methods:{
      isShowSearchPanel(){
        this.$emit('onPanel',true);
      }
    }
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .search-nav
    position fixed
    top 0
    left 0
    z-index 998
    width 100%
    height 60px
    background #FFFFFF
    border-bottom: 1px solid #CCCCCC
    display flex
    justify-content center
    align-items center
    .search-nav-icon
      width 90%
      height 70%
      background #e8e8e8
      border-radius 8px
      display flex
      justify-content center
      align-items center
      text-decoration none
      i
        color #aaaaaa
        margin-left 5px
        font-size 20px
      span
        margin-left 5px
        font-size 16px
        color #aaaaaa
</style>
