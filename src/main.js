import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入轮播图
import { Swipe, SwipeItem, Loadmore, InfiniteScroll, NumberSpinner } from 'we-vue'

import 'we-vue/lib/style.css'

Vue.use(VueAxios, axios)
Vue.use(Swipe).use(SwipeItem)
Vue.use(NumberSpinner)
Vue.use(Loadmore)
Vue.use(InfiniteScroll)

// 先设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

// 为 axios 添加一个拦截器
Vue.axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('ACCESS_TOKEN')
  if(token)
  {
    config.headers['Authorization'] = "Bearer "+token
  }
  return config;
}, function (error) {

  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  if(to.meta.isLogin)
  {
    let token = localStorage.getItem('ACCESS_TOKEN')
    if(token)
      next()
    else
      // 重定向到登录页面
      next('/login')
  }
  else
  {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
