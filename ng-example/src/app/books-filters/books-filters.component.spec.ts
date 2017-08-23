import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFiltersComponent } from './books-filters.component';

describe('BooksFiltersComponent', () => {
  let component: BooksFiltersComponent;
  let fixture: ComponentFixture<BooksFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
