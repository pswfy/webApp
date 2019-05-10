import Vue from 'vue';
import router from './router/index';
import LyTab from 'ly-tab';
import store from './store/index';
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload';
import  loading from  './common/img/fangkexing.jpg'
const App = () => import('./App');

/*声明使用ly-tab*/
Vue.use(LyTab);
FastClick.attach(document.body);
/*图片懒加载*/
Vue.use(VueLazyload,{
  loading
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h (App)
});


/*
*0.render:绘制渲染
*1.ly-tab:横向滚动
*2.store:vuex
*3.router:路由(router-link/router-view/keep-alive/$router/$route)
*4.router-link：a标签
*5.router-view：
*6.keep-alive：
*7.$router：
*8.$route：
* */
