'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/list', controller.home.client);
  router.get('/api/article/list', controller.home.articleList);
  router.get('/*', controller.home.index);
};
