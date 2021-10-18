import { Produto } from './../identificacao/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit {

  filteredProdutos: Produto[] = [];
  // tslint:disable-next-line:variable-name
  _produtos: Produto[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private identificacaoService: IdentificacaoService){

  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredProdutos =
    this._produtos.filter((produto: Produto) => produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }


}
