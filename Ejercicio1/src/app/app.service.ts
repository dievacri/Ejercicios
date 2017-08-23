import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {IJugador} from './models/IJugador';
import { Subject } from 'rxjs/Subject';
import {IEquipo} from "./models/IEquipo";

@Injectable()
export class AppService {
  requestObserver: Observable<any>;
  private subject = new Subject<any>();
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getEquipos(): Observable<IEquipo[]> {
    const requestUrl = `${this.baseUrl}/equipo`;
    this.requestObserver = this.http.get(requestUrl).map(res => res.json() as IEquipo[]);
    this.requestObserver.subscribe((res) => {
      this.subject.next(res);
    });

    return this.subject.asObservable();
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

  avisa(equipos: IEquipo[]) {
    this.subject.next(equipos);
  }
}
