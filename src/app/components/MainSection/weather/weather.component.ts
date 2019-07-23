import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { CurrentWeather } from '../weather/current-weather';
import 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  myWeather: CurrentWeather;
  location: any;
  temperature: string;
  description: string;
  icon: string;
  obs: any;
  dataFromApi: boolean;

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.getCurentWeather();
    this.updateWeather();
  }


  getCurentWeather() {
    this.myWeather = this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;

      const lat = this.location.latitude;
      const lon = this.location.longitude;


      this.ws.localWeather(lat, lon).subscribe(
        (data: any) => {
          this.myWeather = new CurrentWeather(data.main.temp, data.weather[0].icon, data.weather[0].description);
          this.temperature = data.main.temp.toFixed(1);
          this.description = data.weather[0].description;
          this.icon = data.weather[0].icon.split("").reverse().join("");
          this.dataFromApi = true;
        }
      )
    })
  }

  updateWeather() {
    setInterval(() => {
      this.getCurentWeather();
    }, 60000);
  }
}