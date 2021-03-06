import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Add } from '../pages/add/add';
import { HomePage } from '../pages/home/home';
import { Forecast } from '../pages/forecast/forecast';
import { Weather }  from '../providers/weather';
@Component({
  templateUrl: 'app.html'
})
@App({
  template: '<ion-nav [root]="rootPage></ion-nav>',
  providers: [Weather],
  config: {}
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

