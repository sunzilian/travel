import Vue from 'vue'
import VueRouter from 'vue-router'

import {routerList} from './router.config';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Home
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/administrator',
    name: 'Administrator',
    index: '6',
    component: () => import( /* webpackChunkName: "administrator" */ '../views/Administrator/')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "register" */ '../views/Register/')
  },
  {
    path: '/mycenter',
    name: 'mycenter',
    redirect: {
      name: 'mycollection'
    },
    component: () => import(/* webpackChunkName: "mycenter" */ '../views/MyCenter'),
    children: [
      {
        name: 'mycollection',
        path: 'mycollection',
          component: () => import( /* webpackChunkName: "myCollection" */ '../views/MyCenter/myCollection.vue')
      },
      {
        name: 'mycommet',
        path: 'mycomment',
        component: () => import( /* webpackChunkName: "myCommet" */ '../views/MyCenter/myCommet.vue')
      },
      {
        name: 'myinfo',
        path: 'myinfo',
        // component: () => import( /* webpackChunkName: "myInfo" */ '../views/MyCenter/myInfo.vue')
        component: () => import( /* webpackChunkName: "myInfo" */ '../views/Register/index.vue')
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import( /* webpackChunkName: "detail" */ '../components/Detail')
    // component: () => import( /* webpackChunkName: "register" */ '../views/Register/')
  },
  ...routerList
]

const router = new VueRouter({
  routes
})

export default router
