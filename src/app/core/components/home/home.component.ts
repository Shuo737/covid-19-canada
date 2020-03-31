import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Covid19DataStoreService } from './convid-19-data.store.service';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Covid19SourceData, IndividualCases, DataSourceResponse } from './convid-19-source-data';
import { map, take, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface CanadaSummary {
    totalCases: number;
    confirmedCases: number;
    deaths: number;
}


@Component({
    selector: 'app-content-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    readonly provinceTableDisplayedColumns: string[] = ['province', 'cases', 'deaths', 'source'];

    covid19SourceData$: Observable<Covid19SourceData>;
    individualTableDataSource$: Observable<MatTableDataSource<IndividualCases>>;
    individualTableDataSource: MatTableDataSource<IndividualCases>;

    constructor(private readonly storeService: Covid19DataStoreService) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.covid19SourceData$ = this.storeService.getCovid19SourceData();
    }

    getlastUpdate$(): Observable<string> {
        return this.covid19SourceData$.pipe(
            map(d => d.lastUpdate)
        );
    }
}
