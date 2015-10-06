import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { value: 48300, color: '#ff0000', text: '$48,300' },
      { value: 18000, color: '#00ff00', text: '$18,000' },
      { value: 26000, color: '#0000ff', text: '$26,000' },
      { value: 12700, color: '#ffff00', text: '$12,700' }
    ];
  }
});
