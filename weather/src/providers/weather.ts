import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class Weather 
{
 private appId='1071bffa38424153fedcd8a37f3bdef3';
 private baseUrl='http://api.openweathermap.org/data/2.5/';

  constructor(public http: Http) {
    console.log('Hello Weather Provider');
  }

  city(city : string, country: string )
  {
  	let url= this.baseUrl + 'weather';
  	url += '?appId=' + this.appId;
  	url += '&q=' + city;
  	url += ',' + country;
 	 return this.http.get(url);
  }

  forecast(cityId: string, nod: number){
  let url= this.baseUrl + 'forecast/daily';
  url += '?appId=' + this.appId;
  	url += '&q=' + cityId;
  	url += '&cnt=' + nod;
 	return this.http.get(url);
  }

}
