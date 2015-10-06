/* global d3 */

import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let data = [10000, 500, 1, 2000];
    let total = data.reduce((prev, curr) => prev + curr);
    let count = data.length;

    let barWidth = 40;
    let width = (barWidth + 10) * count;
    let height = 200;

    let x = d3.scale.linear().domain([0, data.length]).range([0, width]);
    let y = d3.scale.linear().domain([0, d3.max(data, datum => datum)]).
      rangeRound([0, height]);

    let container = d3.select(this.get('element')).
      append('svg').
      attr('width', width).
      attr('height', height);

    container.selectAll('rect').
      data(data).
      enter().
      append('rect').
      attr('x', (datum, index) => x(index)).
      attr('y', datum => height - Math.max(y(datum), 1)).
      attr('height', datum => Math.max(y(datum), 1)).
      attr('width', barWidth).
      attr('fill', '#000000');
  }
});
