import { Observable, ReplaySubject, BehaviorSubject } from 'rxjs';
import { map, first, take, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Covid19SourceData, DataSourceResponse, ProvincesData, TotalCases, CumulativeCases, CasesByProvince, IndividualCases, TotalCaseProvince } from './convid-19-source-data';

export const HttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class Covid19DataStoreService {
    private readonly DataSourceURL = 'https://covid19tracker.ca/dist/api/controller/cases.php';

    private readonly casePerPopulation$$ = new BehaviorSubject<ProvincesData>(null);
    private readonly lastUpdate$$ = new BehaviorSubject<string>('');
    private readonly totalCases$$ = new BehaviorSubject<TotalCases>(null);
    private readonly cumulativeCases$$ = new BehaviorSubject<CumulativeCases[]>([]);
    private readonly dailyCases$$ = new BehaviorSubject<CumulativeCases[]>([]);
    private readonly casesByProvince$$ = new BehaviorSubject<CasesByProvince[]>([]);
    private readonly deathsByProvince$$ = new BehaviorSubject<ProvincesData>(null);
    private readonly individualCases$$ = new BehaviorSubject<IndividualCases[]>([]);
    private readonly totalCaseProvince$$ = new BehaviorSubject<TotalCaseProvince[]>([]);

    casePerPopulation$: Observable<ProvincesData> = this.casePerPopulation$$.asObservable();
    lastUpdate$: Observable<string> = this.lastUpdate$$.asObservable();
    totalCases$: Observable<TotalCases> = this.totalCases$$.asObservable();
    cumulativeCases$: Observable<CumulativeCases[]> = this.cumulativeCases$$.asObservable();
    dailyCases$: Observable<CumulativeCases[]> = this.dailyCases$$.asObservable();
    casesByProvince$: Observable<CasesByProvince[]> = this.casesByProvince$$.asObservable();
    deathsByProvince$: Observable<ProvincesData> = this.deathsByProvince$$.asObservable();
    individualCases$: Observable<IndividualCases[]> = this.individualCases$$.asObservable();
    totalCaseProvince$: Observable<TotalCaseProvince[]> = this.totalCaseProvince$$.asObservable();

    constructor(
        private readonly http: HttpClient
    ) {
        this.loadCovid19SourceData().subscribe();
    }

    getCovid19SourceData(): Observable<Covid19SourceData> {
        const httpHeaders = new HttpHeaders()
            .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*')
            .set('Content-Type', 'application/json');

        return this.http.get(this.DataSourceURL, {headers: httpHeaders}).pipe(
            take(1),
            map((res: DataSourceResponse) => {
                const data = new Covid19SourceData(res);
                return data;
            })
        );
    }

    loadCovid19SourceData(): Observable<DataSourceResponse> {
        const httpHeaders = new HttpHeaders()
            .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*')
            .set('Content-Type', 'application/json');

        return this.http.get(this.DataSourceURL, {headers: httpHeaders}).pipe(
            take(1),
            tap((res: DataSourceResponse) => {
                this.casePerPopulation$$.next(this.formatProvinceCases(res.casePerPopulation));
                this.lastUpdate$$.next(res.lastUpdate);
                this.totalCases$$.next(this.formatTotalCases(res.totalCases));
                this.cumulativeCases$$.next(this.formatCumulativeCases(res.cumulativeCases));
                this.dailyCases$$.next(this.formatCumulativeCases(res.dailyCases));
                this.casesByProvince$$.next(this.formateCasesByProvince(res.casesByProvince));
                this.deathsByProvince$$.next(this.formatProvinceCases(res.deathsByProvince));
                this.individualCases$$.next(this.formatIndividualCases(res.individualCases));
                this.totalCaseProvince$$.next(this.formatTotalCaseProvince(res.totalCaseProvince));
            })
        );
    }

    formatProvinceCases(data: any): ProvincesData {
        const bcKey = 'British Columbia';
        const nsKey = 'Nova Scotia';
        const nbKey = 'New Brunswick';
        const nlKey = 'Newfoundland and Labrador';
        const peiKey = 'Prince Edward Island';
        const ntKey = 'NorthwestTerritories';

        return {
            Ontario: Number(data.Ontario || '0'),
            Quebec: Number(data.Quebec || '0'),
            BritishColumbia: Number(data[bcKey] || '0'),
            Alberta: Number(data.Alberta || '0'),
            Manitoba: Number(data.Manitoba || '0'),
            Saskatchewan: Number(data.Saskatchewan || '0'),
            NovaScotia: Number(data[nsKey] || '0'),
            NewBrunswick: Number(data[nbKey]),
            NewfoundlandAndLabrador: Number(data[nlKey] || '0'),
            PrinceEdwardIsland: Number(data[peiKey] || '0'),
            NorthwestTerritories: Number(data[ntKey] || '0'),
            Nunavut: Number(data.Nunavut || '0'),
            Yukon: Number(data.Yukon || '0'),
            Canada: Number(data.Canada || '0'),
        } as ProvincesData;
    }

    formatTotalCases(data: any): TotalCases {
        return {
            cases: Number(data.cases || '0'),
            death: Number(data.death || '0')
        } as TotalCases;
    }

    formatCumulativeCases(dataList: any[]): CumulativeCases[] {
        return dataList.map(d => ({
            totalGCase: Number(d.totalGCase || '0'),
            dte: new Date(d.dte)
        } as CumulativeCases));
    }

    formateCasesByProvince(dataList: any[]): CasesByProvince[] {
        return dataList.map(d => ({
            cases: Number(d.cases || '0'),
            province: d.province,
            source: d.source,
            deaths: Number(d.deaths || '0')
        } as CasesByProvince));
    }

    formatIndividualCases(dataList: any[]): IndividualCases[] {
        return dataList.map(d => ({
            id: d.id,
            province: d.province,
            city: d.city,
            age: d.age,
            travelHistory: d.travel_history,
            confirmedPresumptive: d.confirmed_presumptive,
            source: d.source,
            date: new Date(d.date)
        } as IndividualCases));
    }

    formatTotalCaseProvince(dataList: any[]): TotalCaseProvince[] {
        return dataList.map(d => ({
            province: d.province,
            cases: d.cases,
            deaths: d.deaths,
            source: d.source
        } as TotalCaseProvince));
    }
}
