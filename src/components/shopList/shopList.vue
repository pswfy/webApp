<template>
    <div class="recommend-item">
      <img v-if="item.images_url" v-lazy="$store.state.BASE_URL+item.images_url" alt="" width="100%">
      <h4 class="item-title">{{item.short_name}}</h4>
      <div class="item-bottom">
        <span class="item-price">￥{{item.market_price/100}}</span>
        <span class="item-sales">{{item.sales_tip}}</span>
        <button class="btn">找相关</button>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      item: Object
    }
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-item:nth-child(2n-1)
    margin-right 1%
    width 49.5%
  .recommend-item
    box-sizing border-box
    list-style none
    background #FFFFFF
    width 49.5%
    padding-bottom 15px
    margin-bottom 15px
    .item-title
      box-sizing border-box
      line-height 20px
      font-size 13px
      font-weight lighter
      height 20px
      overflow hidden
      margin 5px 0
      padding 0 5px
    .item-bottom
      box-sizing border-box
      display flex
      flex-direction row
      align-items center
      padding 0 6px
      .item-price
        flex 2
        color red
        font-size 12px
        font-weight bold
      .item-sales
        flex 4
        font-size 10px
        color #999
      .btn
        box-sizing border-box
        flex 2
        border 1px solid orange
        height 24px
        border-radius 5px
        background transparent
        color red
        font-size 10px
        text-align center
        line-height 24px
</style>
