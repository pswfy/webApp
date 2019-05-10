<template>
  <div class="hot-nav">
    <!--滚动区-->
    <div class="hot-nav-content">
      <div class="nav-content-inner" v-if="homeNav.length > 0">
        <a class="inner-item" v-for="item in homeNav">
          <img :src="$store.state.BASE_URL+item.iconUrl" alt="">
          <span>{{item.iconTitle}}</span>
        </a>
      </div>
    </div>
    <!--进度条-->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import  {mapState} from 'vuex';
  export default {
    data() {
      return {
        screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,//屏幕宽度
        scrollContentW: 720,//滚动区的宽度
        bgBarW: 100,//背景宽
        barXWidth: 0,//滚动位置
        startX: 0,//起点
        andFlag: 0,//结束点
        barMoveWidth: 0,//移动距离
      };
    },
    computed: {
      ...mapState(['homeNav']),//首页nav
      innerBarStyle() {
        return {
          width: `${this.barXWidth}px`,
          left: `${this.barMoveWidth}px`
        }
      }
    },
    mounted() {
      this.getBottomBarWidth();
      this.bindEvent();
    },
    methods: {
      getBottomBarWidth() {
        //背景宽: * (屏幕宽度 与 滚动区的宽度 的比例=>滚动位置（barXWidth）
        this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW);
      },
      /*移动端事件*/
      bindEvent() {
        this.$el.addEventListener('touchstart', this.handleTouchStart, false);
        this.$el.addEventListener('touchmove', this.handleTouchMove, false);
        this.$el.addEventListener('touchend', this.handleTouchEnd, false);
      },
      /*开始触摸*/
      handleTouchStart(event) {
        //获取第一个触摸点
        let touch = event.touches[0];
        //求取开始点
        this.startX = Number(touch.pageX);
      },
      /*开始移动*/
      handleTouchMove(event) {
        //获取第一个触摸点
        let touch = event.touches[0];
        //求取移动距离
        let moveWidth = Number(touch.pageX) - this.startX;
        //求取滚筒条走的距离
        this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.andFlag);
        //边界处理
        if (this.barMoveWidth <= 20) {
          this.barMoveWidth = 0;
        } else if (this.barMoveWidth >= this.bgBarW - this.barXWidth - 20) {
          this.barMoveWidth = this.bgBarW - this.barXWidth;
        }
      },
      /*结束触摸*/
      handleTouchEnd() {
        this.andFlag = this.barMoveWidth;
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot-nav
    position relative
    background #FFFFFF
    width 100%
    height 180px
    border-bottom 10px
    .hot-nav-content
      width 100%
      overflow-x scroll
      .nav-content-inner
        width 720px
        height 180px
        display flex
        flex-wrap wrap
        .inner-item {
          width 90px
          height 90px
          display flex
          flex-direction column
          justify-content center
          align-items center
          font-size 12px
          img {
            width 38%
            margin-bottom 5px
            color #666666
          }
        }
    //去除混动条
    .hot-nav-content::-webkit-scrollbar
      display none
    .hot-nav-bottom
      width 100px
      height 2px
      background #CCCCCC
      position absolute
      left 50%
      margin-left -50px
      bottom 4px
      .hot-nav-bottom-inner
        position absolute
        left 0
        height 100%
        background orange
        width 0
</style>
