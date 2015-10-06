import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { value: 48300, color: '#ff0000' },
      { value: 18000, color: '#00ff00' },
      { value: 26000, color: '#0000ff' },
      { value: 12700, color: '#ffff00' }
    ];
  }
});
