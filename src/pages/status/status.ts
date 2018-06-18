import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  produto: any
  quantidade: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = this.navParams.get('produto');
    this.quantidade = this.navParams.get('quantidade');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

}
