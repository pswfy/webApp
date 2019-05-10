<template>
    <div class="hot">
      <!--轮播图-->
     <div class="swiper-container" v-if="homeSlider.length > 0">
       <div class="swiper-wrapper">
         <div class="swiper-slide" :key="index" v-for="(item,index) in homeSlider"><img :src="$store.state.BASE_URL+item.imgurl" alt="" width="100%"></div>
       </div>
       <div class="swiper-pagination"></div>
     </div>
      <!--中间套航-->
      <HotNav/>
      <!--广告位置-->
      <div class="hot-add">
        <img src="./icon/11.gif" alt="" width="100%">
      </div>
      <!--商品列表-->
      <HotShopList/>
    </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import HotNav from './HotNav';
  import HotShopList from './HotShopList';
  import  {mapState} from 'vuex';

  export default {
    components: {
      HotNav,
      HotShopList
    },
    computed: {
      //首页轮播图
      ...mapState(['homeSlider'])
    },
    mounted(){},
    watch:{
      homeSlider(){
        this.$nextTick(() => {
          //Swiper
          new Swiper('.swiper-container',{
            autoplay:true,
            loop: true,
            pagination:{
              el:'.swiper-pagination'
            }
          })
        })
      }
    }
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot
    width: 100%
    height: 100%
    margin-top: 50px
    background #f5f5f5
    .hot-add{
      background #FFFFFF
      margin 8px 0

    }
</style>
