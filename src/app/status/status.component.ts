import { Component, OnInit } from '@angular/core';
import { WeatherData, UpdatableTable } from '../shared/data';
import { WeatherService } from '../shared/remote/weather.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, UpdatableTable {

  //en lista med väderdata
  weatherData: Array<WeatherData>;

//importerar vår weatherservice
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    //här är vår updatableTable
    this.weatherService.refresh(this);

  }

  updateWeather(data: Array<WeatherData>) {
    this.weatherData = data;

  }

  updateTrain(data: Array<any>){


  }

}
