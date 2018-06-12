import { Component } from '@angular/core';

import { CarrinhoPage } from '../carrinho/carrinho';
import { PagamentoPage } from '../pagamento/pagamento';
import { HomePage } from '../home/home';
import { ProdutoPage} from '../produto/produto';
import { StatusPage } from '../status/status';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CarrinhoPage;
  tab3Root = PagamentoPage;
  tab4Root = ProdutoPage;
  tab5Root = StatusPage;

  constructor() {

  }
}
