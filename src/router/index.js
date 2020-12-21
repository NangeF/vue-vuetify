import Vue from 'vue';
import Router from 'vue-router';
import axiox from 'axios';
// import routes from './router.js';
import login from '@/components/login.vue';
import NavBar from '@/components/NavBar.vue';
import home from '@/views/home.vue';
import tablelool from '@/views/tablelool.vue';
import slotch from '@/views/slotch.vue';
import slotpage from '@/components/slotpage.vue';
import language from '@/views/language.vue';
import wel from '@/views/wel.vue';
import sel from '@/views/sel.vue';
import repo from '@/views/repo.vue';
// import { resolve } from 'core-js/fn/promise';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login',
    // },
    {
      name: 'login',
      // component: resolve => require(['@/components/login.vue'], resolve),
      component: login,
      path: '/login',
    },
    {
      name: 'NavBar',
      component: NavBar,
      path: '/',
      redirect: '/home',
      children: [
        {
          name: 'home',
          component: home,
          path: '/home',
        },
        {
          name: 'tablelool',
          component: tablelool,
          path: '/tablelool',
        },
        {
          name: 'slotch',
          component: slotch,
          path: '/slotch',
        },
        {
          name: 'language',
          component: language,
          path: '/language',
        },
        {
          name: 'wel',
          component: wel,
          path: '/wel',
        },
        {
          name: 'sel',
          component: sel,
          path: '/sel',
        },
        {
          name: 'repo',
          component: repo,
          path: '/repo',
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   // 访问登录页，放行
//   if (to.path === '/login') return next();
//   // // 获取token
//   const tokenStr = window.sessionStorage.getItem('token');
//   // // 没有token, 强制跳转到登录页
//   if (!tokenStr) return next('/login');
//   next();
// });

export default router;
