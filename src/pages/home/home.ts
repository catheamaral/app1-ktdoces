import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos: any

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.produtos = [
      {
        imagem: 'http://www.doceeamor.com.br/images/tortas-doce.png',
        produto: 'Bolo de chocolate'
      },
      {
        imagem: 'http://www.caraveli.com.br/imagens/base-para-torta.png',
        produto: 'Empadinha de morango'
      },
      {
        imagem: 'http://guiadossolteiros.com/wp-content/uploads/2011/12/Pudim-2.jpg',
        produto: 'Pudim'
      }
    ]
  }

  

  detalhaDoce(id){
  	this.navCtrl.push(ProdutoPage, {produto: this.produtos[id]})
  	console.log("Detalhes do produto aberto");
	   let toast = this.toastCtrl.create({
      message: 'Detalhes do produto aberto',
      duration: 2000,
      position: 'bottom'

    });
    toast.present();
  }

}
