import { IdentificacaoService } from './../identificacao/identificacao.service';
import { Component } from '@angular/core';
import { Produto } from '../identificacao/produto';

@Component ({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = false;

    // tslint:disable-next-line:typedef
    get filter() {
      return this.telefone;
    }

    set filter(value: string) {
      this._filterBy = value;

      this.filteredProdutos =
      this._produtos.filter((produto: Produto) => produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }


}
