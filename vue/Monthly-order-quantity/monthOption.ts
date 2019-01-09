import { number } from '@/core/ts/filter'
export let monthOptions: any = {
  color: ['#42a3ff'],
  legend: {
    data: ['开单量', '开单金额(元)'],
    bottom: 20
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: function(params: Array<any>) {
      var result = `${params[0].axisValue}日</br>`
      params.forEach(function(item) {
        let color = ''
        let value = ''

        if (item.seriesIndex == 0) {
          color = '#42a3ff'
          value = item.value
        } else if (item.seriesIndex == 1) {
          color = '#f79800'
          value = item.value
        } else {
          color = '#79bda0'
          value = number(item.value, 2, '.', ',')
        }
        result +=
          '<div style="overflow: hidden;"><div style="margin-right:5px;margin-top:5px;border-radius:10px;width:10px;height:10px;float:left;background-color:' +
          color +
          '"' +
          '></div> <div style="float:left;">' +
          item.seriesName +
          '&nbsp;' +
          '</div><div style="float:right;">' +
          value +
          '</div></div>'
      })
      return result
    }
  },
  grid: {
    left: '4%',
    right: '4%',
    bottom: '20%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        show: false
      }
    },
    {
      name: '开单商户数',
      type: 'value',
      show: false,
      axisLine: {
        show: false
      }
    },
    {
      name: '开单金额',
      type: 'value',
      axisLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '开单量',
      type: 'bar',
      barWidth: '30%',
      data: [],
      yAxisIndex: 0,
      itemStyle: {
        normal: {
          color: '#42a3ff'
        }
      }
    },
    {
      name: '开单商户数',
      type: 'bar',
      barWidth: '30%',
      data: [],
      itemStyle: {
        normal: {
          color: '#f79800'
        }
      },
      yAxisIndex: 0,
      smooth: true
    },
    {
      name: '开单金额(元)',
      type: 'line',
      data: [],
      yAxisIndex: 2,
      itemStyle: {
        normal: {
          color: '#79bda0'
        }
      },
      smooth: true
    }
  ]
}
