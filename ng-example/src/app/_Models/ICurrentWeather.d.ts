declare module MyApp.Models {
  export interface ICurrentWeather {
    cityName: string;
    temp: number;
    weather: object;
    date: string;
    lat: string;
    lng: string;
  }
}
