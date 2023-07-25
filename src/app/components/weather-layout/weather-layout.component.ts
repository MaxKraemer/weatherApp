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
  public data: any = [];
  public currentCity: string = '';


  ngOnInit(): void {
    this.getWeatherData('london');
  }

public getWeatherData(cityName: string): void {
  this.weatherService.getWeatherByCityName(cityName.toLowerCase()).subscribe((data) => {
    this.weatherData = data;
    this.data = this.weatherData;
    console.log(this.data, 'data');
  });
}

public onKeyPress(event: KeyboardEvent): void {
  if (event.key === 'Enter') {
    event.preventDefault();
    this.getWeatherData(this.currentCity);
  }
}

public setIcon(): any {
  if(this.weatherData.weather[0].main === 'Clouds') {
    return 'assets/cloudy.png';
  } else if (this.weatherData.weather[0].main === 'Rain') {
    return 'assets/heavy-rain.png';
} else if (this.weatherData.weather[0].main === 'Clear') {
  return 'assets/sun.png';
} else if (this.weatherData.weather[0].main === 'Snow') {
  return 'assets/snow.png';
}

}
}
