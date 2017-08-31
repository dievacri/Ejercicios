import { TestBed, inject } from '@angular/core/testing';

import { BooksFiltersService } from './books-filters.service';
import {FormsModule, NgModel} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('BooksFiltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksFiltersService],
      imports: [FormsModule, HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should be created', inject([BooksFiltersService], (service: BooksFiltersService) => {
    expect(service).toBeTruthy();
  }));
});
