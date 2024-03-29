/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553225200852_9011';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    static: {
      prefix: '/public/',
      dir: path.join(appInfo.baseDir, 'public'),
    },
    vuessr: {
      layout: path.join(appInfo.baseDir, 'app/web/view/layout.html'),
      renderOptions: {
        basedir: path.join(appInfo.baseDir, 'app/view'),
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
