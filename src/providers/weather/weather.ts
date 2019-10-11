import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {


  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');

  }
  getWeather(city:string){
   
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+",za&units=metric&APPID=b26c94cb86d470cbf0a3e04e771db12b").map(re => re.json());
  }

}
