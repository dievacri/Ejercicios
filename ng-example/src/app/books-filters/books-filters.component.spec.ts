import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFiltersComponent } from './books-filters.component';
import {FormsModule} from "@angular/forms";
import {Http} from "@angular/http";
import {BooksFiltersService} from "./books-filters.service";

fdescribe('BooksFiltersComponent', () => {
  let component: BooksFiltersComponent;
  let fixture: ComponentFixture<BooksFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ BooksFiltersComponent ],
      providers: [
        BooksFiltersService
      ]
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
