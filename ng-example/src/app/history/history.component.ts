import { Component, OnInit, Input } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input() lat: string;
  @Input() lng: string;
  history: any;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    console.log(this.lat, this.lng);
    this.historyService.getHistory(this.lat, this.lng).subscribe((res) => {
      this.history = res.data;
    });
  }

  getImageWeather(icon: string) {
    let url = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
    return url;
  }
}
