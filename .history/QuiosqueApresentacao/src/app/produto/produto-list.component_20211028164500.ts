import { PedidoService } from './../pedido/pedido.service';
import { Pedido } from './../pedido/pedido';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { environment } from 'src/environments/environment';
@Component({
  templateUrl: './produto-list.component.html',
})

export class ProdutoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  produtoId: number;
  produtoName: string;
  produtoImageUrl: string;
  produtoDescricao: string;
  produtoPreco: number;
  produtoTempoPreparacao: string;
  produtoAvaliacao: number;

  // tslint:disable-next-line:variable-name
  produto: Produto;

  // tslint:disable-next-line:variable-name
  order: Pedido = {
    id: 0,
    produtoId: 0,
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: environment.telefone,
    local: 'teste',
    observacao: 'teste',
    isencao: true,
    releaseDate: 'teste',
    releaseTime: 'teste',
    entrega: false,
  };

  produtos: Produto[] = [];

  filteredProdutos: Produto[] = [];
  // tslint:disable-next-line:variable-name
  _produtos: Produto[] = [];
  // tslint:disable-next-line:variable-name

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private produtoService: ProdutoService,
              private pedidoService: PedidoService,
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

      this.produtoName = this.produto.name;
      this.produtoPreco = this.produto.price;
      this.produtoImageUrl = this.produto.imageUrl;
      this.produtoTempoPreparacao = this.produto.preparationTime;
      this.produtoAvaliacao = this.produto.rating;
      this.produtoDescricao = this.produto.description;

    });

    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
  }


  pedidoCreate(produtoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.produtoService.readById(produtoId).subscribe(product => {
      this.produto = product;

      this.produtoName = this.produto.name;
      this.produtoPreco = this.produto.price;
      this.produtoImageUrl = this.produto.imageUrl;
      this.produtoTempoPreparacao = this.produto.preparationTime;
      this.produtoAvaliacao = this.produto.rating;
      this.produtoDescricao = this.produto.description;

      console.log('create c1 ' + this.produtoImageUrl);


      this.order.produtoId = produtoId;
      this.order.produtoImageUrl = this.produtoImageUrl;
      this.order.produtoTempoPreparacao = this.produtoTempoPreparacao;
      this.order.telefone = environment.telefone;
      this.order.local = environment.local;
      this.order.observacao = 'teste';
      this.order.isencao = true;
      this.order.releaseDate = new Date(); ;
      this.order.releaseTime = 'teste';

      console.log('create c2 ' + this.order.produtoImageUrl);

      this.pedidoService.create(this.order).subscribe(() => {
        this.pedidoService.showMessage('Pedido solicitado');
      }
      );
    });

  }
}
