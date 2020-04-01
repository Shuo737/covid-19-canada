import { Component, Input, OnInit } from '@angular/core';
import { CumulativeCases } from './convid-19-source-data';

@Component({
    selector: 'app-area-chart',
    templateUrl: './new-area-chart.component.html',
    styleUrls: ['./home.component.scss']
})
export class AreaChartComponent implements OnInit {
    @Input() newCases: CumulativeCases[];
    multi: any[];
    view: any[] = [1000, 800];

    // options
    legend = true;
    showLabels = true;
    animations = true;
    xAxis = true;
    yAxis = true;
    showYAxisLabel = true;
    showXAxisLabel = true;
    xAxisLabel = 'Year';
    yAxisLabel = 'Population';
    timeline = true;

    constructor() {}

    ngOnInit(): void {
        const data = this.formatChartData();
        Object.assign(this, { data });
    }

    formatChartData(): any[] {
        if (!this.newCases) {
            return [];
        }

        let cumulativeCount = 0;
        const cumulativeCases: CumulativeCases[] = [];

        this.newCases.forEach(c => {
            cumulativeCount = cumulativeCount + c.totalGCase;
            cumulativeCases.push({
                totalGCase: cumulativeCount,
                dte: c.dte
            });
        });

        return [{
            name: 'New Cases',
            series: this.newCases.map(c => ({name: this.formateDateString(c.dte), value: c.totalGCase}))
        }, {
            name: 'Cumulative Cases',
            series: cumulativeCases.map(c => ({name: this.formateDateString(c.dte), value: c.totalGCase}))
        }];
    }

    formateDateString(date: Date): string {
        return `${date.getMonth()}/${date.getDate()}`;
    }
}
