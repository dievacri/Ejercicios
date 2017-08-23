import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";
import IBooks= MyApp.Models.IBooks;
import IBookFilterParam = MyApp.Models.IBookFilterParam;

@Injectable()
export class BooksService {
  booksObserver: Observable<IBooks[]>;
  baseUrl = 'http://localhost:3000';
  constructor(private http: Http) { }

  getList(filters: IBookFilterParam): Observable<IBooks[]> {
    let requestUrl= `${this.baseUrl}/books/`;
    let params = new URLSearchParams();
    params.set('_sort', String(filters.sortBy));
    params.set('_order', 'ASC');
    return this.booksObserver = this.http.get(requestUrl,{search: params}).map(res => res.json() as IBooks[]);
  }

}
