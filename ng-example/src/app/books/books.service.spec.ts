import {TestBed, inject} from '@angular/core/testing';

import {BooksService} from './books.service';
import {BaseRequestOptions, Http, HttpModule, RequestMethod, ResponseOptions} from "@angular/http";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {EmitterService} from "../shared/emitter.service";
import {MockBackend, MockConnection} from "@angular/http/testing";

fdescribe('BooksService', () => {
  let EmitterMock = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksService],
      imports: [HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: EmitterService, useValue: EmitterMock}
      ],
    });
  });

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));

  it('Getlist should return data', (done) => {
    let mockBackend: MockBackend = TestBed.get(MockBackend);
    let mockResponse: MyApp.Models.IBooks[]=[{
      id:1,
      title: "demo",
      autor: null,
      year_published: null,
      rating: null,
      price: null,
      imgUrl: null
    }];

    let mockFilter: MyApp.Models.IBookFilterParam={
      sortBy: "year_published",
      pageSize:"",
      pageNumber: 1,
      searchText: ""
    };

    mockBackend.connections.subscribe((connection: MockConnection) => {
      const req = connection.request;
      const expectedUrl = 'http://localhost:3000/books/?_sort=year_published&_order=ASC';
      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url).toBe(expectedUrl);

      connection.mockRespond(new Response(new ResponseOptions({
        body: mockResponse
      })));

    });

    let http = new Http(mockBackend, TestBed.get(BaseRequestOptions));
    let service = new BooksService(http);

    let observable = service.getList(mockFilter);

    observable.subscribe((result) => {
      expect(result).toBe(mockResponse);
      done();
    });
  });
});
