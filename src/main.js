// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './style/reset.js'
import './style/index.less'
import router from './router/index.js'
import { Swipe, SwipeItem,MessageBox } from 'mint-ui';
import store from './store/index.js';
import Axios from 'axios';
import api from '@/api/api.js';
Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.$http=Axios,
Vue.prototype.$msg=MessageBox
//路由拦截器（导航守卫）,控制tabBar显示隐藏
router.beforeEach((to,from,next)=>{
  let path=to.path
  if(path==='/'||path==='/category'||path==='/cart'||path==='/mine'){
    store.state.tabBarShow=true
  }else{
    store.state.tabBarShow=false
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
