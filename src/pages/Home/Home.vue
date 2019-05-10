<template>
  <div class="home">
    <ly-tab class="fix"
            v-model="selectedId"
            :items="items"
            :options="options"
            @change="handleChange">
    </ly-tab>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        selectedId: 0,//选中的ID下标,默认0
        items: [//数据
          {label: '热门'},
          {label: '服饰'},
          {label: '鞋包'},
          {label: '母婴'},
          {label: '百货'},
          {label: '食品'},
          {label: '内衣'},
          {label: '男装'},
          {label: '电器'}
        ],
        options: {//设置选中颜色
          activeColor: '#e9232c'
        },
        subRouterUrl: [//二级路由路径
          '/home/hot',
          '/home/dress',
          '/home/box',
          '/home/mboby',
          '/home/general',
          '/home/food',
          '/home/shirt',
          '/home/map',
          '/home/ele'
        ]
      };
    },
    mounted() {
      this.$store.dispatch('reqHomeSlider');//首页轮播图
      this.$store.dispatch('reqHomeNav');//首页nav
      this.$store.dispatch('reqHomeShop');//首页商品
    },

    methods: {
      handleChange(item, index) {
        this.$router.replace(this.subRouterUrl[index]);
      }
    }
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .home
    background #f5f5f5
    width: 100%
    height: 100%
    .fix
      position fixed
      z-index 998
      top 0
      left 0
</style>
