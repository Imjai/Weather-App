import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Add page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class Add {

    public data={
       country: 'india'
    };



  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController) {
  }

 dismiss(formData){
    this.viewCtrl.dismiss(formData);
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Add');
  }

}
