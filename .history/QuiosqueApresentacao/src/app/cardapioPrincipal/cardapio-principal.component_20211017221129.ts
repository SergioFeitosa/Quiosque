import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

// tslint:disable-next-line:typedef
get filter() {
  return this._filterBy;
}

set filter(value: string) {
  this._filterBy = value;

  this.filteredProdutos =
  this._produtos.filter((produto: Produto) => produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1).
                 filter((produto: Produto) => produto.category.toLocaleLowerCase() === this._categoryId.toLocaleLowerCase());
}
}
