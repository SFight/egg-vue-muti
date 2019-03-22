/**
 * 前端页面入口
 */

'use strict';

import App from 'framework/app.js';
import index from './App.vue';
import createStore from './store';
import createRouter from './router';

const options = { base: '/' };

export default new App({
  index,
  options,
  createStore,
  createRouter,
}).bootstrap();
