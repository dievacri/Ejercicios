import { Component, OnInit } from '@angular/core';
import { WeatherService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentWeather: MyApp.Models.ICurrentWeather; // TODO: Create model for Weather
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe((res) => {
      console.log(res);
      this.currentWeather = res;
    });
  }

  getImageWeather(icon: string) {
    let url = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
    return url;
  }

}
