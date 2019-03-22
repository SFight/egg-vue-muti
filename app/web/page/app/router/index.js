import Vue from 'vue';

import VueRouter from 'vue-router';

import HelloWorld from '@/components/HelloWorld';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: HelloWorld
      },
      {
        path: '/list',
        component: () => import('@/components/HelloWorld')
      }
    ]
  });
}
