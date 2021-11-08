import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { environment } from 'src/environments/environment';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Carrinho } from '../carrinho/carrinho';
@Component({
  templateUrl: './produto-list.component.html',
})

export class ProdutoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  // tslint:disable-next-line:variable-name
  produto = {} as Produto;

  // tslint:disable-next-line:variable-name
  carrinho = {} as Carrinho;

  produtos: Produto[] = [];

  filteredProdutos: Produto[] = [];
  // tslint:disable-next-line:variable-name
  _produtos: Produto[] = [];
  // tslint:disable-next-line:variable-name

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private produtoService: ProdutoService,
              private carrinhoService: CarrinhoService,
              private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');

    this.produtoService.read().subscribe(products => {
      this.produtos = products.filter((produto: Produto) =>
        produto.category.toLocaleLowerCase() === this._categoryId.toLocaleLowerCase());
      this.filteredProdutos = this.produtos;
    });

  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredProdutos =
      this.produtos.filter((produto: Produto) => produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  // tslint:disable-next-line:typedef
  openPopup(produtoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.produtoService.readById(produtoId).subscribe(product => {
      this.produto = product;

    });

    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
  }


  carrinhoCreate(produtoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.produtoService.readById(produtoId).subscribe(product => {
      this.produto = product;
      this.carrinho.produto = this.produto;
      this.carrinho.telefone = environment.telefone;
      this.carrinho.local = environment.local;
      this.carrinho.quantidade = 1;
      this.carrinho.observacao = '';
      this.carrinho.isencao = false;
      this.carrinho.releaseDate = new Date();

      this.carrinhoService.create(this.carrinho).subscribe(() => {
        this.carrinhoService.showMessage('Produto colocado no carrinho');
      });
    });

  }
}
