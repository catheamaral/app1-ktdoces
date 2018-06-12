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

  constructor(public http:HttpClient, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
    this.produto = this.navParams.get('produto');
  }

  statusPag(){
    this.http.post('http://127.0.0.1:8000/api/pedido', this.produto)
      .toPromise()
        .then((response) => {
          console.log(response)
        },
      (err) => {
        console.log(err)
      });
  	this.navCtrl.push(StatusPage, {produto: this.produto})
  	console.log("Página status acessada");
  	let toast = this.toastCtrl.create({
      message: 'Página status acessada',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    
  }

}
