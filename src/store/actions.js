import {
  apiHomeSlider,
  apiHomeNav,
  apiHomeShop,
  apiRecommend,
  apiSearchNav
} from '../api/index';
import {
  HOME_SLIDE,
  HOME_NAV,
  HOME_SHOP,
  HOME_RECOMMEND,
  HOME_SEARCH
} from './mutation-type';

export default {
  //获取首页轮播图
  async reqHomeSlider ({commit}) {
    const result =await apiHomeSlider();
    commit(HOME_SLIDE, {homeSlider:result.message.data});
  },
  //首页菜单
  async reqHomeNav ({commit}) {
    const result =await apiHomeNav();
    commit(HOME_NAV, {homeNav:result.message.data});
  },
  /*首页商品*/
  async reqHomeShop ({commit}) {
    const result =await apiHomeShop();
    commit(HOME_SHOP, {homeShop:result.message.data});
  },
  /*推荐商品列表*/
  async reqRecommend ({commit}) {
    const result =await apiRecommend();
    commit(HOME_RECOMMEND, {homeRecommend:result.message.data});
  },
  /*搜索页面nav*/
  async reqSearchNav ({commit}) {
    const result =await apiSearchNav();
    commit(HOME_SEARCH, {homeSearchNav:result.message.data});
  },
}
