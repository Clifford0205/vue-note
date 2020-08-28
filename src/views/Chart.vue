<template>
  <div class="chart-area">
    <v-chart :options="polar" />
  </div>
</template>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.chart-area {
  width: 600px;
  height: 400px;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>

<script>
/* eslint-disable no-console */
import qs from 'qs';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/dataset';
import 'echarts/map/js/world';
import 'zrender/lib/svg/svg';

export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true });
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push('类目' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    return {
      initOptions: {
        renderer: options.renderer || 'canvas'
      },
      polar: {
        title: {
          text: '柱状图动画延迟'
        },
        legend: {
          data: ['bar', 'bar2']
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack', 'tiled'],
              title: {
                stack: '切換為堆疊圖',
                tiled: '切換為平鋪圖'
              }
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: false
          }
        },
        yAxis: {},
        series: [
          {
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function(idx) {
              return idx * 10;
            }
          },
          {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function(idx) {
              return idx * 10 + 100;
            }
          }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function(idx) {
          return idx * 5;
        }
      }
    };
  }
};
</script>
