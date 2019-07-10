import { Injectable } from '@angular/core';
import { CurrentWeather } from '../weather/current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  current: CurrentWeather = new CurrentWeather('25', 'img', 'sunny')

  constructor() { }

  weatherNow() {
    return this.current;
  }
}
