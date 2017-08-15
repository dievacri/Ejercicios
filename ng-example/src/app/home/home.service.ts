import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {CurrentWeather} from '../_Models/CurrentWeather';
import ICurrentWeather = MyApp.Models.ICurrentWeather;

@Injectable()
export class WeatherService {
    weatherObserver: Observable<ICurrentWeather>;
    baseUrl: string = 'https://api.weatherbit.io/v1.0/current/postal?key=74954793a7b34830b8ad6e9d3c43cd56';

    constructor(private http: Http) { }

    getWeather(): Observable<ICurrentWeather> {
        let requestUrl = `${this.baseUrl}&postal_code=10001&country=US&lang=es`;
        return this.weatherObserver = this.http.get(requestUrl).map(res => new CurrentWeather(res.json().data[0]));
    }
}
