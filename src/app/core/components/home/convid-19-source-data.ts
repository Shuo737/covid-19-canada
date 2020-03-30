export interface DataSourceResponse {
    casePerPopulation: any;
    lastUpdate: any;
    totalCases: any;
    cumulativeCases: any[];
    dailyCases: any[];
    dailyCaseDeath: any[];
    casesByProvince: any[];
    deathsByProvince: any;
    individualCases: any[];
    totalCaseProvince: any[];
}

export interface ProvincesData {
    Ontario?: number;
    Quebec?: number;
    BritishColumbia?: number;
    Alberta?: number;
    Manitoba?: number;
    Saskatchewan?: number;
    NovaScotia?: number;
    NewBrunswick?: number;
    NewfoundlandAndLabrador?: number;
    PrinceEdwardIsland?: number;
    NorthwestTerritories?: number;
    Nunavut?: number;
    Yukon?: number;
    Canada?: number;
}

export interface TotalCases {
    cases: number;
    death: number;
}

export interface CumulativeCases {
    totalGCase: number;
    dte: Date;
}

export interface DailyCaseDeath {
    province: string;
    cases: number;
    deaths: number;
}

export interface CasesByProvince {
    cases: number;
    province: string;
    source: string;
    deaths: number;
}

export interface IndividualCases {
    id: string;
    province: string;
    city: string;
    age: string;
    travelHistory: string;
    confirmedPresumptive: string;
    source: string;
    date: Date;
}

export interface TotalCaseProvince {
    province: string;
    cases: number;
    deaths: number;
    source: string;
}

export class Covid19SourceData {
    public casePerPopulation: ProvincesData;
    public lastUpdate: string;
    public totalCases: TotalCases;
    public cumulativeCases: CumulativeCases[];
    public dailyCases: CumulativeCases[];
    public dailyCaseDeath: DailyCaseDeath[];
    public casesByProvince: CasesByProvince[];
    public deathsByProvince: ProvincesData;
    public individualCases: IndividualCases[];
    public totalCaseProvince: TotalCaseProvince[];

    constructor(data: DataSourceResponse) {
        this.casePerPopulation = this.formatProvinceCases(data.casePerPopulation);
        this.lastUpdate = data.lastUpdate;
        this.totalCases = this.formatTotalCases(data.totalCases);
        this.cumulativeCases = this.formatCumulativeCases(data.cumulativeCases);
        this.dailyCases = this.formatCumulativeCases(data.dailyCases);
        this.casesByProvince = this.formateCasesByProvince(data.casesByProvince);
        this.deathsByProvince = this.formatProvinceCases(data.deathsByProvince);
        this.individualCases = this.formatIndividualCases(data.individualCases);
        this.totalCaseProvince = this.formatTotalCaseProvince(data.totalCaseProvince);
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
