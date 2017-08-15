import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {IJugador} from "./models/IJugador";

@Injectable()
export class AppService {
  requestObserver: Observable<any>;

  baseUrl: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getEquipos(): Observable<any> {
    const requestUrl = `${this.baseUrl}/equipo`;
    return this.requestObserver = this.http.get(requestUrl).map(res => res.json());
  }

  getJugadores(id_equipo: number): Observable<any> {
    const requestUrl = `${this.baseUrl}/jugador?id_equipo=${id_equipo}`;
    return this.requestObserver = this.http.get(requestUrl).map(res => res.json());
  }

  postJugadores(jugador: IJugador): Observable<any> {
    const requestUrl = `${this.baseUrl}/jugador`;
    return this.requestObserver = this.http.post(requestUrl, jugador).map(res => res.json());
  }

  deleteJugadores(id: number): Observable<any> {
    const requestUrl = `${this.baseUrl}/jugador/${id}`;
    return this.requestObserver = this.http.delete(requestUrl).map(res => res.json());
  }

  updateJugadores(jugador: IJugador): Observable<any> {
    const requestUrl = `${this.baseUrl}/jugador/${jugador.id}`;
    return this.requestObserver = this.http.patch(requestUrl, jugador).map(res => res.json());
  }
}
