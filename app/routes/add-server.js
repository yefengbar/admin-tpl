import Ember from 'ember';
import layer from 'layer';
export default Ember.Route.extend({
  beforeModel(transition) {
    layer.msg('loading......')
  },
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
      this.router.one('didTransition', function () {
        // hideLoadingSpinner();
      });
      // Return true to bubble this event to `FooRoute`
      // or `ApplicationRoute`.
      return true;
    }
  }
}
})
