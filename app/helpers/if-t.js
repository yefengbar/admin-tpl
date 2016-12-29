import Ember from 'ember';

export function ifT(params/*, hash*/) {
  let str = params[0].slice(0, 1);
  // console.log(str);
  if (str > 0) {
    return params[1];
  } else {
    return params[2];
  }
}
export default Ember.Helper.helper(ifT);
