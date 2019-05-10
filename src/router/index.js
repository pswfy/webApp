/* 引入两个关键模块 */
import Vue from 'vue';
import VueRouter from 'vue-router';
/* 一级路由 */
const Home = () => import('../pages/Home/Home');
const Recommend = () => import('../pages/Recommend/Recommend');
const Search = () => import('../pages/Search/Search');
const Chat = () => import('../pages/Chat/Chat');
const Me = () => import('../pages/Me/Me');
/* Home下的子路由 */
const Box = () => import('../pages/Home/Children/Box');
const Dress = () => import('../pages/Home/Children/Dress');
const Ele = () => import('../pages/Home/Children/Ele');
const Food = () => import('../pages/Home/Children/Food');
const General = () => import('../pages/Home/Children/General');
const Hot = () => import('../pages/Home/Children/Hot/Hot');
const Map = () => import('../pages/Home/Children/Map');
const Mboby = () => import('../pages/Home/Children/Mboby');
const Shirt = () => import('../pages/Home/Children/Shirt');

/* 声明使用 */
Vue.use(VueRouter);

/* 输出路由对象 */
export default new VueRouter ({
  mode: "history",
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {path: 'hot',component: Hot},
        {path: 'box',component: Box},
        {path: 'dress',component:Dress},
        {path: 'ele',component: Ele},
        {path: 'food',component: Food},
        {path: 'general',component: General},
        {path: 'map',component: Map},
        {path: 'mboby',component: Mboby},
        {path: 'shirt',component: Shirt},
        {path: '/home',redirect: '/home/hot'},//默认路由
      ]
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/me',
      component: Me
    },
    /* 默认路由=>重定向 */
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
