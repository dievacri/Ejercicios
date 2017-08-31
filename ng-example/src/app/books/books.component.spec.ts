/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BooksComponent } from './books.component';
import { HttpModule } from "@angular/http";
import { EmitterService, EmitterServiceMock } from "../shared/emitter.service";

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let EmitterMock = new EmitterServiceMock();

  beforeEach(async(() => {
    spyOn(EmitterMock,"get").and.returnValue({});

    TestBed.configureTestingModule({
      declarations: [ BooksComponent ],
      imports: [HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        { provide: EmitterService, useValue: EmitterMock}
        // EmitterService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
