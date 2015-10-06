import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'polygon',
  attributeBindings: ['points', 'fill'],

  points: Ember.computed('data', function() {
    return this.get('data.coordinates').map(c => `${c.x},${c.y}`).join(" ");
  }),

  fill: Ember.computed.alias('data.color')
});
