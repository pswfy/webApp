import ajax from './ajax';
const BASE_URL = 'http://localhost:3000';

/*首页轮播图请求方法*/
export const apiHomeSlider = () => ajax(BASE_URL+'/slider');

/*首页菜单*/
export const apiHomeNav = () => ajax(BASE_URL+'/nav');

//首页商品
export const apiHomeShop = () => ajax(BASE_URL+'/shopList');

//推荐商品
export const apiRecommend = () => ajax(BASE_URL+'/Recommend');

//搜索nav
export const apiSearchNav = () => ajax(BASE_URL+'/seNav');



