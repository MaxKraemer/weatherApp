import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather-layout',
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.css']
})
export class WeatherLayoutComponent implements OnInit {

  constructor(public weatherService: WeatherService) { }

  public weatherData: any = [];

  ngOnInit(): void {
    this.getWeatherData();
  }

  private getWeatherData() {
    this.weatherService.getConfig().subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData, 'weatherData');     
    });
  }
  

}
