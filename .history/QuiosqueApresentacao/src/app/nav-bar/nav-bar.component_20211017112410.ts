import { Component } from '@angular/core';

@Component ({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent {

  filteredProdutos: Produto[] = [];
  // tslint:disable-next-line:variable-name
  _produtos: Produto[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private identificacaoService: IdentificacaoService){

  }


  // tslint:disable-next-line:typedef
  get filterCategory() {
    return this._filterBy;
  }

  set filterCategory(value: string) {
    this._filterBy = value;

    this.filteredProdutos =
    this._produtos.filter((produto: Produto) => produto.category.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
}
