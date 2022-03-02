<template>
  <div id="chart3"></div>
</template>

<script>
import ApexCharts from 'apexcharts'
export default {
  mounted () {
    this.$nextTick(() => {
      this.renderChart()
    })
  },
  methods: {
    renderChart () {
      var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8']
      var options = {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              console.log(chart, w, e)
            }
          }
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        series: [{
          data: [21, 22, 10, 28, 16, 21, 13, 30, 21, 22, 10, 28, 16, 21, 13, 30, 21, 22, 10, 28, 16, 21, 13, 30]
        }],
        xaxis: {
          categories: ['7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点'],
          labels: {
            style: {
              colors: colors,
              fontSize: '14px'
            }
          }
        }
      }

      var chart = new ApexCharts(
        document.querySelector('#chart3'),
        options
      )

      chart.render()
    }
  }
}
</script>

<style>

</style>
