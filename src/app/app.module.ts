import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProdutoPage} from '../pages/produto/produto';
import { StatusPage } from '../pages/status/status';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CarrinhoPage,
    PagamentoPage,
    HomePage,
    TabsPage,
    ProdutoPage,
    StatusPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarrinhoPage,
    PagamentoPage,
    HomePage,
    TabsPage,
    ProdutoPage,
    StatusPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
