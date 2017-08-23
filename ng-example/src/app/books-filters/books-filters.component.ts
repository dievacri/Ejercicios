import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BooksFiltersService} from "./books-filters.service";

@Component({
  selector: 'books-filters',
  templateUrl: './books-filters.component.html',
  styleUrls: ['./books-filters.component.css'],
  providers: [BooksFiltersService]
})
export class BooksFiltersComponent implements OnInit {
  booksFilter: MyApp.Models.IBookFilter = {
    sortOptions: []
  };

  filters: MyApp.Models.IBookFilterParam = {
    sortBy: '',
    searchText: '',
    pageNumber: undefined,
    pageSize: undefined
  };

  @Output() onUpdateFilter = new EventEmitter();

  constructor(private booksFiltersService: BooksFiltersService) { }

  ngOnInit() {
    this.booksFiltersService.getSortOptions().subscribe((res) =>{
      this.booksFilter.sortOptions = res;
    });
    this.onSelectSortBy('year_published');
  }

  onSelectSortBy(sortById:string = 'year') {
    this.filters.sortBy = sortById;
    console.log(this.filters);
    this.updateList();
  }

  updateList() {
    this.onUpdateFilter.emit(this.filters);
  }

}
