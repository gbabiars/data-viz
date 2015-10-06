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
      attr('height', height + 50); // give enough for overflow, could calculate to be accurate

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


    let leftTriangleCoordinates = [
      { x: 0, y: 0 },
      { x: 50, y: 250 },
      { x: 0, y: 250 }
    ];

    let rightTriangleCoordinates = [
      { x: 200, y: 0 },
      { x: 150, y: 250 },
      { x: 200, y: 250 }
    ];

    const convertCoordinatesToPoints = coordinates => coordinates.map(c => `${c.x},${c.y}`).join(" ");

    container.append('polygon').
      attr('points', convertCoordinatesToPoints(leftTriangleCoordinates)).
      attr('fill', '#ffffff');

    container.append('polygon').
      attr('points', convertCoordinatesToPoints(rightTriangleCoordinates)).
      attr('fill', '#ffffff');
  }
});
