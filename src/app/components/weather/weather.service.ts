import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from '../weather/current-weather';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  current: CurrentWeather = new CurrentWeather('25', 'http://openweathermap.org/img/wn/10d@2x.png', 'sunny');

  constructor(private httpClient: HttpClient) { }

  weatherNow() {
    return this.current;
  }

  localWeather(lat: string, lon: string) {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=
    de95355dadf51402b42727c557936c16&units=imperial`);
  }
}
