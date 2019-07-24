import React from 'react';
import echarts from 'Echarts';

export default class BarChart extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    setTimeout(() => {
      this.loadChart();
    }, 500)  
  }

  loadChart() {
    // console.log(this.chart)
    var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133];
    var yMax = 500;
    var dataShadow = [];

    for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }
    this.chartObj = echarts.init(this.chart)
    const option = {
      xAxis: {
        data: data,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [{
        type: 'inside'
      }],
      series: [{ // For shadow
          type: 'bar',
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0.05)'
            }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#83bff6'
                  },
                  {
                    offset: 0.5,
                    color: '#188df0'
                  },
                  {
                    offset: 1,
                    color: '#188df0'
                  }
                ]
              )
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#2378f7'
                  },
                  {
                    offset: 0.7,
                    color: '#2378f7'
                  },
                  {
                    offset: 1,
                    color: '#83bff6'
                  }
                ]
              )
            }
          },
          data: data
        }
      ]
    };
    this.chartObj.setOption(option)
  }

  render(){
    return(
      <div className="barchart_box">
        <div ref={ el => this.chart = el }></div>
      </div>
    )
  }
}
