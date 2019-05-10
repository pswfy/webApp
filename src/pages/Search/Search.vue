<template>
  <div class="search-container">
    <!--搜索-->
    <SearchNav v-on:onPanel="onPanel"/>
    <!--联动列表-->
    <div class="shop">
      <!--左边-->
      <div class="menu-wrapper">
        <ul style="padding: 0;margin: 0;" v-if="homeSearchNav.length > 0">
          <li class="menu-item"
              :key="index"
              :class="{'current'
              :index===currentIndex}"
              @click="onLeftItem(index)"
              ref="menuList"
              v-for="(item,index) in homeSearchNav">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <div class="shop-wrapper">
        <ul style="margin: 0;padding: 0;" v-if="homeSearchNav.length > 0" ref="shopsParent">
          <li class="shop-li" :key="index" v-for="(item,index) in homeSearchNav">
            <div class="shop-title">
              <h4>{{item.name}}</h4>
              <a href="javascript:void(0)">查看更多</a>
            </div>
            <ul class="shop-body" v-if="item.items">
              <li class="show-body-item" :key="index" v-for="(i,index) in item.items">
                <img :src="$store.state.BASE_URL+i.icon" alt="">
                <span>{{i.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!--搜索面板-->
    <SearchPanel v-if="isShow" v-on:onPanelShow="onPanelShow" />
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchNav from './childer/SearchNav';
  import SearchPanel from './childer/SearchPanel';
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';

  export default {
    components: {
      SearchNav,
      SearchPanel
    },
    data() {
      return {
        scrollY: 0,
        rightLiTops: [],
        isShow:false
      }
    },
    mounted() {
      this.$store.dispatch('reqSearchNav');//搜索
    },
    computed: {
      ...mapState(['homeSearchNav']),//搜索
      currentIndex() {
        const {scrollY, rightLiTops} = this;
        return rightLiTops.findIndex((LiTops, index) => {
          this._leftScroll(index);
          return scrollY >= LiTops && scrollY < rightLiTops[index + 1]
        });
      }
    },
    watch: {
      homeSearchNav() {
        this.$nextTick(() => {
          this._initBScroll();
          this._initRightLiTops();
        });
      }
    },
    methods: {
      _initBScroll() {
        /*左边*/
        this.leftScroll = new BScroll('.menu-wrapper', {});
        /*左边*/
        this.rightScroll = new BScroll('.shop-wrapper', {
          probeType: 3
        });
        //记录滚动距离
        this.rightScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y);
        });
      },
      _initRightLiTops() {
        const tempArr = [];
        let top = 0;
        tempArr.push(top);
        let allLis = this.$refs.shopsParent.getElementsByClassName('shop-li');
        Array.prototype.slice.call(allLis).forEach(li => {
          top += li.clientHeight;
          tempArr.push(top);
        });
        this.rightLiTops = tempArr;
      },
      //左边点击联动
      onLeftItem(index){
        this.scrollY = this.rightLiTops[index];
        this.rightScroll.scrollTo(0,-this.scrollY,300);
      },
      //右边点击联动menuList
      _leftScroll(index){
        let menuLeft = this.$refs.menuList;
        let el = menuLeft[index];
        this.leftScroll.scrollToElement(el,300,0,-100);
      },
      onPanel(flag){
        this.isShow = flag;
      },
      onPanelShow(flag){
        this.isShow = flag;
      }
    },
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .search-container
    background #f5f5f5
    width: 100%
    height: 100%
    overflow hidden
    .shop
      display flex
      position absolute
      top 60px
      bottom 50px
      width 100%
      .menu-wrapper
        background #e0e0e0
        width 80px
        flex 0 0 80px
        margin: 0
        padding: 0
        .menu-item
          width 100%
          height 60px
          background #fafafa
          list-style none
          display flex
          justify-content center
          align-items center
          font-weight lighter
          color #666666
          position relative
          font-size 16px
        .current
          color #e02e24
        .current::before
          content ''
          background #e02e24
          width 4px
          height 30px
          position absolute
          left 0

      .shop-wrapper
        flex 1
        margin 0
        padding 0
        background #fff
        overflow hidden
        .shop-li
          margin: 0
          padding: 0
          .shop-title
            display flex
            align-items center
            justify-content space-between
            box-sizing border-box
            padding 0 10px
            width 100%
            height 44px
            color #999999
            h4
              font-size 14px
            a
              color #999999
              font-size 14px
          .shop-body
            margin 0
            padding 0
            display flex
            flex-wrap wrap
            .show-body-item
              display flex
              flex-direction column
              width 33.33333333333%
              height 90px
              justify-content center
              align-items center
              color #333333
              font-size 14px
              font-weight lighter
              img
                width 60%
                height 60%
                box-sizing border-box
                margin-bottom 5px
</style>
