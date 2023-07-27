import { Component, OnInit } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { LocationService } from 'src/app/service/location.service';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather-layout',
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.css']
})
export class WeatherLayoutComponent implements OnInit {

  constructor(public weatherService: WeatherService, public locationService: LocationService) { }
 
  public weatherData: any = [];
  public data: any = [];
  public currentCity: string = '';
  public latitude: number | null = null;
  public longitude: number | null = null;
  public currentWeather: string = '';
  public locationData: any;


/**
 * @returns get the current location of the user
 */
  ngOnInit(): void {
      this.locationService.getLocation()
      .pipe(
        tap((data) => {
          this.locationData = data;
          this.weatherData = data.city;
        }),
        switchMap((data) => this.weatherService.getWeatherByCityName(data.city.toLowerCase()))
      ).subscribe((data) => {
        this.weatherData = data;
        this.data = this.weatherData;
      }); 
  }

  /**
   * @param cityName 
   * @returns get the weather data by city name
   */
  public getWeatherData(cityName: string): void {
    this.weatherService.getWeatherByCityName(cityName.toLowerCase()).subscribe((data) => {
      this.weatherData = data;
      this.data = this.weatherData;   
    });
  }

  /**
   * @param event
   * @returns get the value of the input field
   */
  public onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.getWeatherData(this.currentCity);
    }
  }

  /**
   * @returns change the icon depending on the weather
   */
  public setIcon(): any {
    if (!this.weatherData.weather) {
      return;
    }
    switch (this.weatherData.weather[0].main) {
      case 'Clouds':
        this.currentWeather = '';
        return 'assets/cloudy.png';
      case 'Rain':
        this.currentWeather = 'rain-filter';
        return 'assets/heavy-rain.png';
      case 'Clear':
        this.currentWeather = 'sun-filter';
        return 'assets/sun.png';
      case 'Snow':
        this.currentWeather = 'rain-filter';
        return 'assets/snow.png';
      case 'Drizzle':
        this.currentWeather = 'rain-filter';
        return 'assets/heavy-rain.png';
      default:
        this.currentWeather = '';
        return 'assets/sun.png';
    }
  }
}
