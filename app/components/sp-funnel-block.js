import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'polygon',
  attributeBindings: ['points', 'fill'],

  points: Ember.computed('coordinates', function() {
    return this.get('coordinates').map(c => `${c.x},${c.y}`).join(" ");
  }),

  fill: Ember.computed.alias('color'),

  click() {
    let text = this.get('text');
    this.sendAction('on-click', text);
  }
});
