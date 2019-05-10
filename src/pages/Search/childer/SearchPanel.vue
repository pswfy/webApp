<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search">
        <i class="icon iconfont icon-sousuo1"></i>
        <input type="search" placeholder="请输入搜索内容" ref="mySearch">
        <button @click="onPanleShow">取消</button>
      </div>
      <div class="search-content">
        <div class="title">
          <img src="./images/2.png" alt="">
          <span>热门搜索</span>
        </div>
        <ul class="search-ul" style="margin: 0;padding: 0;">
          <li>上海是是</li>
          <li>贵阳男孩</li>
          <li>上海搜索</li>
          <li>上海搜索</li>
          <li>上海搜索</li>
          <li>上海搜索</li>
          <li>上海搜索</li>
          <li>上海搜索</li>
          <li>上海搜索</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{

      }
    },
    mounted(){
      this.$refs.mySearch.focus();
    },
    methods:{
      onPanleShow(){
        this.$emit('onPanelShow',false);
      }
    }
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .search-panel
    width 100%
    height 100%
    background #FFFFFF
    position fixed
    left 0
    top 0
    z-index 1000
    .search-nav
      width 100%
      height 100%
      .search
        position relative
        width 100%
        height 60px
        border-bottom: 1px solid #dddddd
        box-sizing border-box
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        i
          position relative
          z-index 1002
          left 20px
          font-size 20px
          color #444
        input
          position relative
          box-sizing border-box
          z-index 1001
          left -10px
          width 78%
          height: 36px
          border-radius 4px
          border none
          padding 0 26px
          background #dddddd
          color #999999
        button
          position relative
          height 36px
          width 50px
          color #999999
          font-size 14px
          right 10px
          background transparent
          border none

      .search-content
        box-sizing border-box
        padding 15px
        .title
          display flex
          flex-direction row
          align-items center
          color #aaaaaa
          margin-bottom 10px
        .search-ul
          display flex
          flex-direction row
          flex-wrap wrap
          li
            background #ededed
            color #aaaaaa
            box-sizing border-box
            margin 5px
            border-radius 2px
            font-weight lighter
            font-size 12px
            padding 5px
</style>
