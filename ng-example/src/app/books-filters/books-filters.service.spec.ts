import { TestBed, inject } from '@angular/core/testing';

import { BooksFiltersService } from './books-filters.service';

describe('BooksFiltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksFiltersService]
    });
  });

  it('should be created', inject([BooksFiltersService], (service: BooksFiltersService) => {
    expect(service).toBeTruthy();
  }));
});
