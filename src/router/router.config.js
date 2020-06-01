// const path = require('path');

import Home from '../views/Home/'

export const navMenuRouters = {
    '首页': {
        path: '/home',
        name: 'Home',
        index: '1',
        component: Home
    },
    '旅游资讯': {
        path: '/infomation',
        // path: '/about',
        // name: '旅游资讯',
        name: 'Infomation',
        index: '2',
        query: {show: 1},
        component: () => import( /* webpackChunkName: "infomation" */ '../views/Information/')
    },
    '旅游景点': {
        path: '/resort',
        name: 'Resort',
        index: '3',
        component: () => import( /* webpackChunkName: "resort" */ '../views/Resort/')
    },
    '个性推荐': {
        path: '/recommend',
        name: 'Recommend',
        index: '4',
        query: {isRecommend: true},
        // component: () => import( /* webpackChunkName: "recommend" */ '../views/Recommend/')
        component: () => import( /* webpackChunkName: "resort" */ '../views/Resort/')
    },
    // '在线客服': {
    //     path: '/online',
    //     name: 'Online',
    //     index: '5',
    //     component: () => import( /* webpackChunkName: "online" */ '../views/Online/')

    // },
    '留言板': {
        path: '/comment',
        name: 'Comment',
        index: '5',
        component: () => import( /* webpackChunkName: "comment" */ '../views/Comment/')

    // },
    // '管理登录': {
    //     path: '/administrator',
    //     name: 'Administrator',
    //     index: '6',
    //     component: () => import( /* webpackChunkName: "administrator" */ '../views/Administrator/')
    }
};
export const navMenu = Object.keys(navMenuRouters);

export const routerList = Object.values(navMenuRouters);