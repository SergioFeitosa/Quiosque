import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './produto-list.component.html',
})

export class ProdutoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  produtoId: number;
  produtoName: string;
  // tslint:disable-next-line:variable-name
  _produto: Produto;

  filteredProdutos: Produto[] = [];
  // tslint:disable-next-line:variable-name
  _produtos: Produto[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private produtoService: ProdutoService,
              private activatedRoute: ActivatedRoute
             ){

  }

  ngOnInit(): void {
    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this._produtos = this.produtoService.retrieveAll().
    filter((produto: Produto) => produto.category.toLocaleLowerCase() === this._categoryId.toLocaleLowerCase());
    this.filteredProdutos = this._produtos;
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

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  // tslint:disable-next-line:typedef
  openPopup(produtoId: number): void {

    this._produtos = this.produtoService.retrieveAll().
    filter((produto: Produto) => produto.id === produtoId);

    this._produto = this._produtos.slice(1);


    console.log('produto' + this.produtoName);

    this.displayStyle = 'block';
    this.produtoId = produtoId;
    console.log('passei pelo open ' + this.produtoId);
    console.log('passei pelo open ' + this.produtoName);
  }
  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
    console.log('passei pelo close');
  }}
