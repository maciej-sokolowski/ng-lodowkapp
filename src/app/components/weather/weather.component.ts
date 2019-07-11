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
  location;
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      console.log(this.location);

      const lat = this.location.latitude;
      const long = this.location.longitude;
      this.ws.localWeather(lat, long).subscribe(
        (data) => {
          console.log(data);
        }
      )
    })
  }
}


