import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiKey = '5c7349d8763342bdba8501da45bf360e';
  private apiUrl = 'https://api.ipgeolocation.io/ipgeo';

  locationData: any;

  constructor(private http: HttpClient) { }


   public getLocation(): Observable<any> {
    const configUrl = `${this.apiUrl}?apiKey=${this.apiKey}`;
    return this.http.get(configUrl);
  }
}


