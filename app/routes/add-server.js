import Ember from 'ember';
import layer from 'layer';

export default Ember.Route.extend({
  model: function () {
    var qwe = 0;
    for (var i = 0; i < 999000000; i++) {
      qwe = i * i;
    }
    return qwe;
  },
  actions: {
    loading(transition, originRoute) {
      //displayLoadingSpinner();
      layer.msg('将要进入add-server路由...');
      return true;
    }
  },
  activate: function () {
    layer.msg('im add-server,s activate...')
  }
});
