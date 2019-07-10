import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { Weather } from '../weather/current-weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  myWeather: Weather;

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
  }

}
