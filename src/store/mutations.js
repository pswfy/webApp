import {
  HOME_SLIDE,
  HOME_NAV,
  HOME_SHOP,
  HOME_RECOMMEND,
  HOME_SEARCH
} from './mutation-type';
export default {
  [HOME_SLIDE] (state,{homeSlider}){
    state.homeSlider = homeSlider;
  },
  [HOME_NAV] (state,{homeNav}){
    state.homeNav = homeNav;
  },
  [HOME_SHOP] (state,{homeShop}){
    state.homeShop = homeShop;
  },
  [HOME_RECOMMEND] (state,{homeRecommend}){
    state.homeRecommend = homeRecommend;
  },
  [HOME_SEARCH] (state,{homeSearchNav}){
    state.homeSearchNav = homeSearchNav;
  },

}
