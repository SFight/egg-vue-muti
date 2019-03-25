import Vue from 'vue';
import '../filter';
// import '../directive';
import '../component';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

export default function (options) {
  Vue.prototype.$http = require('axios');
  if (options.store) {
    // eslint-disable-next-line no-undef
    options.store.replaceState(Object.assign({}, window.__INITIAL_STATE__, options.store.state));
    // eslint-disable-next-line no-undef
  } else if (window.__INITIAL_STATE__) {
    // eslint-disable-next-line no-undef
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
}
