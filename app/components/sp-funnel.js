/* global d3 */

import Ember from 'ember';
import _ from 'npm:lodash'

const borderSize = 5;
const minHeight = 1;

export default Ember.Component.extend({
  didInsertElement() {
    let data = [
      { value: 48300, color: '#ff0000' },
      { value: 18000, color: '#00ff00' },
      { value: 26000, color: '#0000ff' },
      { value: 12700, color: '#ffff00' }
    ];
    let total = data.reduce((prev, curr) => prev + curr.value, 0);

    let width = 200;
    let height = 200;

    let y = d3.scale.linear().domain([0, total]).range([0, height]);

    let container = d3.select(this.get('element')).
      append('svg').
      attr('width', width).
      attr('height', height);

    const calculateHeight = datum => Math.max(y(datum.value), minHeight);

    container.selectAll('rect').
      data(data).
      enter().
      append('rect').
      attr('y', (datum, index) => {
        return _.range(index).map(i => calculateHeight(data[i]) + borderSize).reduce((prev, curr) => prev + curr, 0);
      }).
      attr('width', width).
      attr('height', calculateHeight).
      attr('fill', datum => datum.color);
  }
});
