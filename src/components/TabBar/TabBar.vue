<template>
    <div class="bottom-tab">
      <span :class="{on:$route.path.includes('/home')}" class="tab-item" @click="switchTo('/home')">
        <i class="icon iconfont icon-shouye1"></i>
        <span>首页</span>
      </span>
      <span :class="{on:$route.path.includes('/recommend')}" class="tab-item" @click="switchTo('/recommend')">
        <i class="icon iconfont icon-tuijian1"></i>
        <span>推荐</span>
      </span>
      <span :class="{on:$route.path.includes('/search')}" class="tab-item" @click="switchTo('/search')">
        <i class="icon iconfont icon-sousuo"></i>
        <span>搜索</span>
      </span>
      <span :class="{on:$route.path.includes('/chat')}" class="tab-item" @click="switchTo('/chat')">
        <i class="icon iconfont icon-xinxi1"></i>
        <span>聊天</span>
      </span>
      <span :class="{on:$route.path.includes('/me')}" class="tab-item" @click="switchTo('/me')">
        <i class="icon iconfont icon-iconfontgerenzhongxin"></i>
        <span>个人中心</span>
      </span>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {};
    },
    methods: {
      switchTo (path) {
        this.$router.replace(path);
      }
    }
  };
 /*
 1.上下级:push()
 2.平级:replace()
 3.$route.path:可以得到路由路径
  */
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .bottom-tab
    display flex
    flex-direction row
    position fixed
    z-index 999
    left 0
    bottom 0
    width 100%
    height 50px
    background-color #fff
    .tab-item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content center
      font-size 12px
      color #666666
      i
        font-size 24px
    .on
      color #e9232c

</style>
