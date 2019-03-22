'use strict';
module.exports = {
  egg: true,
  framework: 'vue', // 使用 easywebpack-vue 构建解决方案
  entry: {
    app: 'app/web/page/app/main.js', // 入口文件
  },
  alias: {
    '~': __dirname,
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
  },
  dll: ['vue', 'axios'], // webpack dll 构建
  loaders: {},
  plugins: {},
  done() { // 编译完成回调

  },
};
