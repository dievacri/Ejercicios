import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BooksService} from "./books.service";

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

  @Input() set sortBy(value: string) {
    this.filters.sortBy = value;
  }

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.updateList();
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

}
