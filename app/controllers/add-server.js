import Ember from 'ember';

export default Ember.Controller.extend({
  sername: '',
  actions: {
    send: function (params) {
      console.log('this is submit:' + this.sername);
      return false;
    }
  }
});
