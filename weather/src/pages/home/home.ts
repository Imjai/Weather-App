import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
import { Add } from '../add/add';
import { Weather} from '../../providers/weather';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Temperature } from '../../pipes/temperature';
import { Forecast } from '../forecast/forecast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 // pipes:[Temperature],
  providers:[Weather],
  
})

export class HomePage {
 
   public weatherList=[];

  constructor(public navCtrl: NavController ,public modalCtrl:ModalController, public weather : Weather) {

  }

  addWeather(){
  let addWeatherModal =this.modalCtrl.create(Add);
  addWeatherModal.onDidDismiss((data) =>{
       if(data){
           this.getWeather(data.city, data.country);
              
       }
 });
  addWeatherModal.present();
  }

  getWeather(city:string, country:string) 
  {
    this.weather.city(city, country)
    .map(data => data.json())
    .subscribe(data => {
     this.weatherList.push(data);
  },

  err => console.log(err),
  () =>console.log('angular.version'))

  }


 viewForcast(cityWeather)
{
	console.log('view forcast');
	this.navCtrl.push(Forecast, { cityWeather: cityWeather});
} 















}
