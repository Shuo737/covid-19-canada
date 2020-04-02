import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Covid19DataStoreService } from './convid-19-data.store.service';
import { Observable, BehaviorSubject } from 'rxjs';
import {
    Covid19SourceData,
    IndividualCases, ProvincesData,
    TotalCases, CumulativeCases, CasesByProvince,
    TotalCaseProvince
} from './convid-19-source-data';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

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
    private readonly showIndividualTable$$ = new BehaviorSubject<boolean>(false);
    readonly showIndividualTable$: Observable<boolean> = this.showIndividualTable$$.asObservable();

    casePerPopulation$: Observable<ProvincesData>;
    lastUpdate$: Observable<string>;
    totalCases$: Observable<TotalCases>;
    newCases$: Observable<CumulativeCases[]>;
    cumulativeCases$: Observable<CumulativeCases[]>;
    dailyCases$: Observable<CumulativeCases[]>;
    casesByProvince$: Observable<CasesByProvince[]>;
    deathsByProvince$: Observable<ProvincesData>;
    individualCases$: Observable<IndividualCases[]>;
    totalCaseProvince$: Observable<TotalCaseProvince[]>;

    constructor(private readonly storeService: Covid19DataStoreService) {
        this.casePerPopulation$ = this.storeService.casePerPopulation$;
        this.lastUpdate$ = this.storeService.lastUpdate$;
        this.totalCases$ = this.storeService.totalCases$;
        this.newCases$ = this.storeService.newCases$;
        this.cumulativeCases$ = this.storeService.cumulativeCases$;
        this.dailyCases$ = this.storeService.dailyCases$;
        this.casesByProvince$ = this.storeService.casesByProvince$;
        this.deathsByProvince$ = this.storeService.deathsByProvince$;
        this.totalCaseProvince$ = this.storeService.totalCaseProvince$;
        this.individualCases$ = this.storeService.individualCases$;
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {}

    showIndividualTable(): void {
        const show = this.showIndividualTable$$.getValue();
        this.showIndividualTable$$.next(!show);
    }
}
