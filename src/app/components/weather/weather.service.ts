import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from '../weather/current-weather';
// import { map } from 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  current: CurrentWeather = new CurrentWeather('', '', '');

  constructor(private httpClient: HttpClient) { }

  weatherNow() {
    return this.current;
  }

  localWeather(lat: string, lon: string) {
    // return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=
    // 886705b4c1182eb1c69f28eb8c520e20&units=metric`);

    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=Bialystok&appid=886705b4c1182eb1c69f28eb8c520e20&units=metric`);

    // return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=886705b4c1182eb1c69f28eb8c520e20&units=metric`);
  }
}