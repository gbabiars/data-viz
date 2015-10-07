/* global d3 */

import Ember from 'ember';

const borderSize = 5;
const minHeight = 1;

export default Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: ['height', 'width'],

  height: 200,
  width: 300,

  blocks: Ember.computed('data', function() {
    let data = this.get('data');
    let width = this.get('width') - 100;
    let height = this.get('height') - (data.length * borderSize);

    let total = data.reduce((prev, curr) => prev + curr.value, 0);

    let y = d3.scale.linear().domain([0, total]).range([0, height]);

    const calculateHeight = datum => Math.max(y(datum.value), minHeight);

    return data.map((datum, index) => {
      let yTop = data.slice(0, index).map(calculateHeight).reduce((prev, curr) => prev + curr, 0) + index * borderSize;
      let yBottom = yTop + calculateHeight(datum);

      let xStart = yTop / 5;
      let xEnd = yBottom / 5;

      let coordinates = [
        { x: xStart, y: yTop },
        { x: xEnd, y: yBottom },
        { x: width - xEnd, y: yBottom },
        { x: width - xStart, y: yTop }
      ];

      return {
        value: datum.value,
        color: datum.color,
        text: datum.text,
        coordinates: coordinates
      };
    });
  })
});
