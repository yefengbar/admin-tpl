import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return params.new_id + "我是模拟返回的新闻内容是模拟返回的新闻内容，我是模拟返回的新闻内容，我是模拟返回的新闻内容，我是模拟返回的新闻内容，我是模拟返回的新闻内容，我是模拟返回的新闻内容，我是模拟返回的新闻内容";
  },
  setupController: function (controller, model) {
    controller.set('content', model);
  }
});
