import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let data = this.get('data');

    this.$().highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Opportunities'
      },
      tooltip: {
        pointFormat: '{point.text}'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>',
            style: {
              color: '{point.color}'
            }
          }
        }
      },
      series: [{
        colorByPoint: true,
        data: data.map(d => {
          return {
            name: d.text,
            y: d.value,
            color: d.color
          }
        })
      }]
    });
  }
});
