import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {BooksService} from "./books.service";
import {EmitterService} from "../shared/emitter.service";
import {EmitterConstanst} from "../shared/constants";
import IBooks = MyApp.Models.IBooks;

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit, OnChanges {
  books: MyApp.Models.IBooks[] = [];
  filters: MyApp.Models.IBookFilterParam = {
    sortBy: '',
    searchText: '',
    pageNumber: undefined,
    pageSize: undefined
  };
  searchObservable: any;
  @Input() set sortBy(value: string) {
    this.filters.sortBy = value;
  }

  @ViewChild('register') register;
  constructor(private booksService: BooksService, private emitterService: EmitterService) { }

  ngOnInit() {
    this.updateList();
    this.searchObservable = this.emitterService.get(EmitterConstanst.SEARCHTEXT_CHANGE).subscribe(searchText => {
      if (this.filters.searchText === searchText ) return false;

      this.filters.searchText = searchText;
      this.updateList();
    });

  }

  ngOnChanges(): void{
    this.updateList();
  }

  updateList() {
    this.booksService.getList(this.filters).subscribe((res) => {
      this.books = res;
      console.log(res);
    });
  }



  delete(book: IBooks) {
    this.booksService.delete(book).subscribe((res) => {
      this.updateList();
    });
  }

  renderForm(book: IBooks) {
    this.register.book.patchValue({
      id: book.id,
      title: book.title,
      author: book.author,
      year_published: book.year_published,
      rating: book.rating,
      price: book.price,
      imgUrl: book.imgUrl
    });

    this.register.showForm = true;
    this.register.isNew = false;
  }

}
