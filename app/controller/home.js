'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await this.ctx.render('app.js', { url: this.ctx.url });
  }

  async client() {
    const { ctx } = this;
    console.log('=======', this.ctx.url);
    await this.ctx.renderClient('app.js', { url: this.ctx.url });
  }

  async articleList() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };

    this.ctx.body = Array(20).fill(item);
  }
}

module.exports = HomeController;
