import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { StatusPage } from '../status/status';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {

  produto: any
  quantidade: any
  rua:any
  n:any
  bairro:any
  comp:any

  constructor(public http:HttpClient, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
    this.produto = this.navParams.get('produto'),
    this.quantidade = this.navParams.get('quantidade'),
    this.rua = this.navParams.get('rua'),
    this.n = this.navParams.get('n'),
    this.bairro = this.navParams.get('bairro'),
    this.comp = this.navParams.get('comp');
  }

  statusPag(){
    this.http.post('http://127.0.0.1:8000/api/pedido', this.produto, this.quantidade, this.rua, this.n, this.bairro, this.comp)
      .toPromise()
        .then((response) => {
          console.log(response)
        },
      (err) => {
        console.log(err)
      });
  	this.navCtrl.push(StatusPage, {produto: this.produto, quantidade: this.quantidade})

  	console.log("Página status acessada");
  	let toast = this.toastCtrl.create({
      message: 'Página status acessada',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    
  }

}
