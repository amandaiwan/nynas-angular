import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdatableTable, WeatherData } from '../data';
//här importeras objektet för att kunna göra anrop

const WEATHER_URL: string = "https://api.openweathermap.org/data/2.5/forecast?q=nynashamn&appid=cad845a2da604f313d559dee7ddcc7f3";

@Injectable()
export class WeatherService {


  //importera inte http client
  constructor(private http: HttpClient) { }


  //table av typen updatableTable
  refresh(table: UpdatableTable) {
    //callback = subscribe, vi väntar på att något ska hänt, och om det kommer så vill vi skicka data till callback
    this.http.get(WEATHER_URL).subscribe( data => {
      var weatherResponse = this.parseWeather(data);
      table.updateWeather(weatherResponse);
    });
  }

  // denna måste returnera en array med weatherData för det är vad updateWeather vill ha
  parseWeather(data: any): Array<WeatherData> {
      var weatherData = new Array<WeatherData>();
      var weatherList = data.list;

      for(let index = 0; index < 7; index++) {
        var time = weatherList[index].dt_txt;
        time = new Date(time).getHours() + ":00";
        if(time.lenght < 5 ){
          time = 0 + time;
        }

        var wind = weatherList[index].wind.speed.toFixed(1);

        var temp = weatherList[index].main.temp;
        temp = Number(temp -273.15).toFixed(1);

        var desc = weatherList[index].weather[0].description;
        desc = desc[0].toUpperCase() + desc.substr(1);

        weatherData.push({
          clock: time,
          wind: wind,
          tempature: temp,
          description: desc
        });
      }
      return weatherData;
  }

}
