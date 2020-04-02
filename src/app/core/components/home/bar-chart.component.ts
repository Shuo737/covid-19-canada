import { Component, Input, OnInit } from '@angular/core';
import { TotalCaseProvince } from './convid-19-source-data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./home.component.scss']
})
export class BarChartComponent implements OnInit {
    @Input() multiBarData: TotalCaseProvince[];
    view: any[] = [1200, 800];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Province';
    showYAxisLabel = true;
    yAxisLabel = 'Population';
    animations = false;
    legendTitle = 'Total Cases & Deaths';

    constructor() {}

    ngOnInit(): void {
        const multi = this.formatChartData();
        Object.assign(this, { multi });
    }

    formatChartData(): any[] {
        return this.multiBarData.map(c => ({
            name: c.province || '',
            series: [
                { name: 'Total Cases', value: c.cases || 0 },
                { name: 'Deaths', value: c.deaths || 0 }
            ]
        }));
    }
}
