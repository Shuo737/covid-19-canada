import { Component } from '@angular/core';
import { Covid19DataStoreService } from './convid-19-data.store.service';
import { Observable } from 'rxjs';
import { Covid19SourceData } from './convid-19-source-data';
import { map, first, take } from 'rxjs/operators';

const debriefPhotoPath = 'assets/images/company_logo.jpg';

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

export class HomeComponent {
    readonly covid19SourceData: Observable<Covid19SourceData>;
    readonly provinceTableDisplayedColumns: string[] = ['province', 'cases', 'deaths', 'source'];

    constructor(private readonly storeService: Covid19DataStoreService) {
        console.log('init home component');
        this.covid19SourceData = this.storeService.getCovid19SourceData().pipe(take(1));
    }

    getCanadaSummary$(): Observable<CanadaSummary> {
        return;
    }

    getlastUpdate$(): Observable<string> {
        return this.covid19SourceData.pipe(
            map(d => d.lastUpdate)
        );
    }
}
