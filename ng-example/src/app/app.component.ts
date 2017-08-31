import { Component } from '@angular/core';
import {EmitterService} from "./shared/emitter.service";
import {EmitterConstanst} from "./shared/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Course';
  url = 'https://github.com/jcyovera/ng2Curso2017';
  searchText: string;
  constructor(private emitterService: EmitterService) {}

  onSearch(event) {
    if(event.which === 13 || this.searchText === '')
      this.emitterService.get(EmitterConstanst.SEARCHTEXT_CHANGE).emit(this.searchText);
  }
}
