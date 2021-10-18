import { IdentificacaoService } from './identificacao.service';
import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './identificacao-list.component.html',
})

export class IdentificacaoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: number;

  filteredProdutos: Produto[] = [];
  // tslint:disable-next-line:variable-name
  _produtos: Produto[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private identificacaoService: IdentificacaoService){

  }

  ngOnInit(): void {
    this._categoryId
    this._produtos = this.identificacaoService.retrieveAll();
    this.filteredProdutos = this._produtos;
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredProdutos =
    this._produtos.filter((produto: Produto) => produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1).
                   filter((produto: Produto) => produto.category.toLocaleLowerCase() === 'refeicao');
  }

}
