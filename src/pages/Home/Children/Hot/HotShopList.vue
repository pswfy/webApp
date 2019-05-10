<template>
  <div class="shop-container">
    <ul class="shop-list" v-if="homeShop.length > 0">
      <li class="shop-list-item" :key="index" v-for="(item,index) in homeShop">
        <img v-lazy="$store.state.BASE_URL+item.images_url" alt="图片" width="100%">
        <h4 class="list-item-title">{{item.goods_name}}</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥{{item.normal_price/100}}</span>
          <span class="item-count">{{item.sales_tip}}</span>
          <span class="item-user" v-if="item.bubble.length > 0">
              <img :src="$store.state.BASE_URL+i.avatar" :key="index" alt="" v-for="(i,index) in item.bubble">
            </span>
          <span class="item-buy">
              <button>去拼单</button>
            </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState(['homeShop']),//首页商品
    },
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .shop-container
    width: 100%
    margin-bottom 50px
    background #f5f5f5
    .shop-list
      width 100%
      margin 0
      padding 0
      background #f5f5f5
      list-style none
      .shop-list-item
        width 100%
        margin-bottom 10px
        background #f5f5f5
        display flex
        flex-direction column
        .list-item-title
          line-height 22px
          width 94%
          font-size: 14px
          color #333
          margin 0 auto
          height 44px
          overflow visible
        .list-item-bottom
          margin 10px 0
          display flex
          flex-direction row
          justify-content space-around
          align-items center
          .item-price
            font-size 16px
            text-align center
            font-weight bold
            color red
            flex 1
          .item-count
            flex 2
            font-size 12px
            color #CCCCCC
          .item-user
            display flex
            justify-content center
            align-items center
            flex 1
            img
              width 30px
              border-radius 50%
            img:nth-child(2)
              margin-left -5px
          .item-buy
            flex 2
            button
              width 80%
              border: none
              height 34px
              font-size: 14px
              color #FFFFFF
              display flex
              justify-content center
              align-items center
              margin-left 10px
              background red
              border-radius 3px

</style>
