<template>
    <div class="recommend-container">
      <ul class="recommend" v-if="homeRecommend.length > 0">
        <ShopList :key="index" :item="item" v-for="(item,index) in homeRecommend"/>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  import ShopList from '../../components/shopList/shopList';
  import  {mapState} from 'vuex';
  export default {
    components:{
      ShopList
    },
    data(){
      return{

      }
    },
    computed: {
      //商品推荐
      ...mapState(['homeRecommend'])
    },
    mounted() {
      this.$store.dispatch('reqRecommend');//商品推荐
    },
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-container
    background #f5f5f5
    width 100%
    height 100%
    margin 0
    padding 0
    .recommend
      display flex
      list-style none
      flex-direction row
      flex-wrap wrap
      background #f5f5f5
      margin-bottom 50px
      padding 0
      margin-top 0
      box-sizing border-box
</style>
