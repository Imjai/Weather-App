import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Forecast } from './forecast';

@NgModule({
  declarations: [
    Forecast,
  ],
  imports: [
    IonicPageModule.forChild(Forecast),
  ],
  exports: [
    Forecast
  ]
})
export class ForecastModule {}
