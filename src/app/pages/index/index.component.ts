import { Component, OnInit } from '@angular/core';
import { Themes } from 'src/app/config/theme.config';
import { EChartInitOption } from 'src/app/components/ngx-echarts/interface';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    initOptions: EChartInitOption = {
        devicePixelRatio: 1,
        width: 1000,
        height: 1000,
    };
    option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
    constructor() { }

    ngOnInit() {
    }
    darkTheme(t: string) {
        Themes.changeTheme(t);
    }
}
