import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://api.open-meteo.com/v1/forecast?latitude=51.2217&longitude=6.7762&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,rain,windspeed_10m&daily=temperature_2m_max,sunrise,sunset,rain_sum,showers_sum,snowfall_sum&current_weather=true&timezone=Europe%2FBerlin';
public getConfig() {
  return this.http.get(this.configUrl);
}

}
