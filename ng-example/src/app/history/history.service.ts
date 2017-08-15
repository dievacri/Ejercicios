import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HistoryService {
  weatherObserver: Observable<any>;
  baseUrl: string = 'https://api.weatherbit.io/v1.0/forecast/3hourly?key=74954793a7b34830b8ad6e9d3c43cd56';

  constructor(private http: Http) { }

  getHistory(lat: string, lng: string): Observable<any> {
    let requestUrl = `${this.baseUrl}&lat=${lat}&lon=${lng}&lang=es`;
    return this.weatherObserver = this.http.get(requestUrl).map(res => res.json());
  }
}
