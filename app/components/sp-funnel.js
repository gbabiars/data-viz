/* global d3 */

import Ember from 'ember';
import _ from 'npm:lodash'

const sum = (prev, curr) => prev + curr;

export default Ember.Component.extend({
  didInsertElement() {
    let data = [10000, 500, 1, 2000];
    let total = data.reduce(sum, 0);

    let width = 200;
    let height = 200;

    let y = d3.scale.linear().domain([0, total]).range([0, height]);

    let container = d3.select(this.get('element')).
      append('svg').
      attr('width', width).
      attr('height', height);

    const calculateHeight = datum => Math.max(y(datum), 1);

    container.selectAll('rect').
      data(data).
      enter().
      append('rect').
      attr('y', (datum, index) => {
        return _.range(index).map(i => calculateHeight(data[i]) + 1).reduce(sum, 0);
      }).
      attr('width', width).
      attr('height', calculateHeight);
  }
});
