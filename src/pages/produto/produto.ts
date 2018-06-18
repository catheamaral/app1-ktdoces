import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CarrinhoPage } from '../carrinho/carrinho';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  produto: any
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.produto = this.navParams.get('produto');
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ProdutoPage');
    
  }

 

  addCarrinho(){
    this.navCtrl.push(CarrinhoPage, {produto: this.produto})

    console.log("Adicionado no carrinho");
    let toast = this.toastCtrl.create({
      message: 'Adicionado no carrinho',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
