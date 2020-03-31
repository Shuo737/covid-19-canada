import { Component, Input, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { IndividualCases } from '../home/convid-19-source-data';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-individual-table',
    templateUrl: './individual-table.component.html',
    styleUrls: ['./../home/home.component.scss'],
})

@Injectable()
export class IndividualTableComponent implements OnInit, AfterViewInit {
    @Input() tableData: IndividualCases[];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    individualTableDataSource: MatTableDataSource<IndividualCases>;
    readonly individualTableDisplayColumns: string[] = [
        'number', 'province', 'city', 'age', 'travelHistory', 'confirmedPresumptive', 'date'
    ];

    constructor() {}

    ngOnInit(): void {
        this.individualTableDataSource = new MatTableDataSource<IndividualCases>(this.tableData)
    }

    ngAfterViewInit(): void {
        if (this.individualTableDataSource) {
            this.individualTableDataSource.paginator = this.paginator;
        }
    }

    formatDateString(date: Date): string {
        return date.toDateString();
    }
}
