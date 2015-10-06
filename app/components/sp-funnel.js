/* global d3 */

import Ember from 'ember';

const borderSize = 5;
const minHeight = 1;

export default Ember.Component.extend({
  didInsertElement() {
    let data = this.get('data');
    let total = data.reduce((prev, curr) => prev + curr.value, 0);

    let width = this.get('width');
    let height = this.get('height');

    let y = d3.scale.linear().domain([0, total]).range([0, height]);

    let container = d3.select(this.get('element')).
      append('svg').
      attr('width', width).
      attr('height', height + 50); // give enough for overflow, could calculate to be accurate

    const calculateHeight = datum => Math.max(y(datum.value), minHeight);

    const getPoints = (datum, index) => {
      let yTop = data.slice(0, index).map(calculateHeight).reduce((prev, curr) => prev + curr, 0) + index * borderSize;
      let yBottom = yTop + calculateHeight(datum);

      let xStart = yTop / 5;
      let xEnd = yBottom / 5;

      return [
        { x: xStart, y: yTop },
        { x: xEnd, y: yBottom },
        { x: width - xEnd, y: yBottom },
        { x: width - xStart, y: yTop }
      ].map(c => `${c.x},${c.y}`).join(" ");
    };

    container.selectAll('polygon').
      data(data).
      enter().
      append('polygon').
      attr('points', getPoints).
      attr('fill', datum => datum.color);
  }
});
