import { Component, Input, OnInit } from '@angular/core';
import { CumulativeCases } from './convid-19-source-data';

@Component({
    selector: 'app-area-chart',
    templateUrl: './new-area-chart.component.html',
    styleUrls: ['./home.component.scss']
})
export class AreaChartComponent implements OnInit {
    @Input() newCases: CumulativeCases[];
    @Input() cumulativeCases: CumulativeCases[];
    multi: any[];
    view: any[] = [1000, 800];

    // options
    legend = true;
    showLabels = true;
    animations = false;
    xAxis = true;
    yAxis = true;
    showYAxisLabel = false;
    showXAxisLabel = false;
    xAxisLabel = 'Date';
    yAxisLabel = 'Population';
    timeline = true;

    constructor() {}

    ngOnInit(): void {
        console.log(this.newCases);
        console.log(this.cumulativeCases);
        const data = this.formatChartData();
    }

    formatChartData(): any[] {
        if (!this.newCases || !this.cumulativeCases) {
            return [];
        }

        return [{
            name: 'New Cases',
            series: this.newCases.map(c => ({name: this.formateDateString(c.dte), value: c.totalGCase}))
        }, {
            name: 'Cumulative Cases',
            series: this.cumulativeCases.map(c => ({name: this.formateDateString(c.dte), value: c.totalGCase}))
        }];
    }

    formateDateString(date: Date): string {
        return `${date.getMonth()}/${date.getDate()}`;
    }
}
