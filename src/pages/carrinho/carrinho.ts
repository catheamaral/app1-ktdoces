import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PagamentoPage } from '../pagamento/pagamento';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html'
})

export class CarrinhoPage {

  produto: any
  quantidade: any

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
    this.produto = this.navParams.get('produto');
    this.quantidade = this.navParams.get('quantidade');
  }

  

  pagamentoPag(){
  	this.navCtrl.push(PagamentoPage, {produto: this.produto})
  	console.log("Página pagamento acessada");
  	let toast = this.toastCtrl.create({
      message: 'Página pagamento acessada',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
