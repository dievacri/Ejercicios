import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import IBooks = MyApp.Models.IBooks;
import {BooksService} from "../books/books.service";


@Component({
  selector: 'register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {

  book: FormGroup;
  isNew = false;
  showForm = false;
  @Output() updateList = new EventEmitter();
  
  constructor(private booksService: BooksService,private fb: FormBuilder) { }

  ngOnInit() {
    this.book = this.getForm();
  }
  getForm(): any {
    return this.fb.group({
      id: [''],
      title: ['', Validators.required],
      author: ['', Validators.required],
      year_published: ['', Validators.required],
      rating: ['', Validators.required],
      price: ['', Validators.required],
      imgUrl: ['', Validators.required]
    });
  }

  clearForm() {
    this.book = this.getForm();
    this.showForm = false;
    this.isNew = false;
  }

  onSubmit ({value, valid}: {value: any, valid: boolean}) {

    if (valid) {
      if (this.isNew) {
        this.booksService.post(value).subscribe((res) => {
          this.clearForm();
          this.updateList.emit(true);
        });
      } else {
        this.booksService.put(value).subscribe((res) => {
          this.clearForm();
          this.updateList.emit(true);
        });
      }
    }
  }
}
