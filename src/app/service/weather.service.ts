import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'afd847f1772576de66af23ed2dee88f3';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  /**
   * @param cityName 
   * @returns get the weather data from the api
   */
  public getWeatherByCityName(cityName: string): Observable<any> {
    const configUrl = `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return this.http.get(configUrl);
  }
}

