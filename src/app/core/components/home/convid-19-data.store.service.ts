import { Observable } from 'rxjs';
import { map, first, take } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Covid19SourceData, DataSourceResponse } from './convid-19-source-data';

export const HttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class Covid19DataStoreService {
    private readonly DataSourceURL = 'https://covid19tracker.ca/dist/api/controller/cases.php';

    constructor(
        private readonly http: HttpClient
    ) {}

    getCovid19SourceData(): Observable<Covid19SourceData> {
        const httpHeaders = new HttpHeaders()
            .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
            .set('Access-Control-Allow-Origin', '*')
            .set('Content-Type', 'application/json');

        return this.http.get(this.DataSourceURL, {headers: httpHeaders}).pipe(
            take(1),
            map((res: DataSourceResponse) => {
                const data = new Covid19SourceData(res);
                console.log(data);
                return data;
            })
        );
    }
}
