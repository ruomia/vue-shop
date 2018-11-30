import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: 'index',

          component: () => import('./views/index/Index.vue')
        },
        {
          path: '/assort',
          name: 'assort',

          component: () => import('./views/index/Assort.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          meta: {
            title: '购物车',
          },
          component: () => import('./views/index/Cart.vue')
        },
        {
          path: '/self',
          name: 'self',
          meta: {
            title: '用户中心',
            isLogin: true,
          },
          component: () => import('./views/index/Self.vue'),
          children: [
            {
              path: 'integral',
              name: 'integral',
              meta: {
                isLogin: true,
              },
              component: () => import('./views/self/Integral.vue')
            },
            {
              path: 'mycollect',
              name: 'mycollect',
              meta: {
                isLogin: true,
              },
              component: () => import('./views/self/Mycollect.vue')
            },
            {
              path: 'address',
              name: 'address',
              meta: {
                name: '地址管理',
                isLogin: true,
              },
              component: () => import('./views/self/Address.vue')
            },
            {
              path: 'datum',
              name: 'datum',
              meta: {
                isLogin: true,
              },
              component: () => import('./views/self/Datum.vue')
            },
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('./views/Login.vue')
    },
    {
      path: '/regist',
      name: 'regist',

      component: () => import('./views/Regist.vue')
    },
    {
      path: '/search',
      name: 'search',

      component: () => import('./views/Search.vue')
    },
    {
      path: '/goods',
      name: 'goods',

      component: () => import('./views/Goods.vue')
    },
    {
      path: '/buy',
      name: 'buy',

      component: () => import('./views/Buy.vue')
    },

  ]
})
