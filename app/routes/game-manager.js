import Ember from 'ember';

export default Ember.Route.extend({
  afterModel:function (posts, transition) {
    setTimeout(function () {
      Ember.$('.dataTables').dataTable();
    },100);

  }
});
