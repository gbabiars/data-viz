import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'text',

  attributeBindings: ['x', 'y', 'font-size'],

  'font-size': '15px',

  text: Ember.computed.alias('data.text'),

  x: Ember.computed('data', function() {
    let coordinates = this.get('data.coordinates');
    let xLeft = coordinates[2].x;
    let xRight = coordinates[3].x;

    return xRight - (xRight - xLeft) / 2 + 10;
  }),

  y: Ember.computed('data', function() {
    let coordinates = this.get('data.coordinates');
    let yBottom = coordinates[2].y;
    let yTop = coordinates[3].y;

    return yTop - (yTop - yBottom) / 2 + 4.5; // top + half of height + 1/4 of line height
  })
});
