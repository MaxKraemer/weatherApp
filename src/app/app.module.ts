import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherLayoutComponent } from './components/weather-layout/weather-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
