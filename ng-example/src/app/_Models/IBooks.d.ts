declare module MyApp.Models {
  export interface IBooks {
    id:number;
    title: string;
    author: string;
    year_published: string;
    rating: string;
    price: string;
    imgUrl: string;
  }

  export interface IOptionElement {
    id: number;
    text: string;
    value: string;
  }

  /* Load Filters */
  export interface IBookFilter {
    sortOptions: IOptionElement[];
  }

  // Interface por filter parameters send to API
  export interface IBookFilterParam {
    sortBy: string;
    pageSize: string;
    pageNumber: string;
    searchText: string;
  }
}
