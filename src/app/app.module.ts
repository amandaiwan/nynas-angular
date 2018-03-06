import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';
import { WeatherService } from './shared/remote/weather.service';

//måste lägga til en modul, för att hämta sta från webben
//utökat modulen med httpClient, vi är en klient som anropar en server
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
