import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import IOptionElement = MyApp.Models.IOptionElement;

@Injectable()
export class BooksFiltersService {
  booksFiltersObserver: Observable<IOptionElement[]>;
  baseUrl = 'http://localhost:3000';
  constructor(private http: Http) { }

  getSortOptions(): Observable<IOptionElement[]> {
    let requestUrl= `${this.baseUrl}/sortOptions/`;
    return this.booksFiltersObserver = this.http.get(requestUrl).map(res => res.json() as IOptionElement[]);
  }

}
