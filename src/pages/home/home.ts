import { Component } from '@angular/core';
import {WeatherProvider} from '../../providers/weather/weather';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {state} from '@angular/core/src/animation/dsl';
// import {storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location: { city: string; state: string; };
  weather:any;
  city: string;
  loc;

 
  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, public navParams: NavParams) {
    this.city = this.navParams.get('city');
    this.weatherProvider.getWeather(this.city).subscribe((data) => {
      this.weather = data.main;

      this.loc = data.name;
      console.log(data)
      
    });

   
  }

  data(){
    this.city = this.navParams.get('city');
    console.log("KHJHKJ"+this.weather);
  }
  

    // ionViewCanEnter(){
    //   this.location = {
    //     city: 'Miami',
    //     state: 'FL'
    //   }
    
    

    // this.weatherProvider.getWeather(this.location.city).subscribe(weather => {
    //   console.log(weather);
    // });

    // }

}
