import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './carrinho';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido/pedido';
import { PedidoService } from '../pedido/pedido.service';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './carrinho-list.component.html',
})

export class CarrinhoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  filteredCarrinhos: Carrinho[] = [];
  carrinhos: Carrinho[] = [];
  // tslint:disable-next-line:variable-name
  pedido = {} as Pedido;

  produto = {} as Produto;

  carrinho = {} as Carrinho;
  // tslint:disable-next-line:variable-name
  _carrinho = {} as Carrinho;

  // tslint:disable-next-line:variable-name
  _carrinhos: Carrinho[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(
    private carrinhoService: CarrinhoService,
    private pedidoService: PedidoService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.carrinhoService.read().subscribe(carrinhos => {
      this.carrinhos = carrinhos;
      this.filteredCarrinhos = this.carrinhos
        .filter((carrinho: Carrinho) => carrinho.telefone === environment.telefone)
        .filter((carrinho: Carrinho) => carrinho.enviadoPedido !== true);

    });
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;
    console.log('filtro ' + this._filterBy);
    this.filteredCarrinhos =
      this.carrinhos
        .filter((carrinho: Carrinho) => carrinho.enviadoPedido !== true)
        .filter((carrinho: Carrinho) => carrinho.telefone === environment.telefone)
        .filter((carrinho: Carrinho) => carrinho.produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyleCarrinho = 'none';

  // tslint:disable-next-line:typedef
  openPopup(carrinhoId: number): void {
    // tslint:disable-next-line:no-unused-expression
    this.carrinhoService.readById(carrinhoId).subscribe(carrinho => {
      this._carrinho = carrinho;
    });

    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
  }


  pedidoCreate(carrinhoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.carrinhoService.readById(carrinhoId).subscribe(carrinho => {
      this.carrinho = carrinho;

      if (this.carrinho.enviadoPedido !== true) {

        this.carrinho.enviadoPedido = true;
        this.atualizarCarrinho(carrinho);


        this.pedido.produto = this.carrinho.produto;
        this.pedido.telefone = this.carrinho.telefone;
        this.pedido.local = this.carrinho.local;
        this.pedido.quantidade = this.carrinho.quantidade;
        this.pedido.observacao = this.carrinho.observacao;
        this.pedido.isencao = this.carrinho.isencao;
        this.pedido.releaseDate = this.carrinho.releaseDate;
        this.pedido.enviadoEntrega = false;

        this.pedidoService.create(this.pedido).subscribe(() => {
          this.pedidoService.showMessage('Pedido solicitado');
        });
      }
    });
  }


  // tslint:disable-next-line:typedef
  atualizarCarrinho(carrinho: Carrinho) {
    this.carrinhoService.update(carrinho).subscribe(() => {
      this.carrinhoService.showMessage('Carrinho Atualizado');
    });
  }
}
