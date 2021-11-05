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

  displayStyle: string;

  filteredCarrinhos: Carrinho[] = [];
  carrinhos: Carrinho[] = [];
  // tslint:disable-next-line:variable-name
  pedido = {} as Pedido;

  produto = {} as Produto;

  carrinho = {} as Carrinho;

  // tslint:disable-next-line:variable-name
  _carrinhos: Carrinho[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutoService,
    private pedidoService: PedidoService,
    private router: Router) {

  }

  ngOnInit(): void {

    console.log('passei pelo init ');
    this.carrinhoService.read().subscribe(carrinhos => {
      this.carrinhos = carrinhos;
      this.filteredCarrinhos = this.carrinhos.filter((carrinho: Carrinho) => carrinho.telefone === environment.telefone);
      });
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCarrinhos =
      this.carrinhos.filter((carrinho: Carrinho) => carrinho.telefone.toString().indexOf(this._filterBy.toString()) > -1);
  }

  pedidoCreate(carrinhoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.carrinhoService.readById(carrinhoId).subscribe(carrinho => {
      this.carrinho = carrinho;

      this.pedido.produto = this.carrinho.produto;
      this.pedido.telefone = this.carrinho.telefone;
      this.pedido.local = this.carrinho.local;
      this.pedido.observacao = this.carrinho.observacao;
      this.pedido.isencao = this.carrinho.isencao;
      this.pedido.releaseDate = this.carrinho.releaseDate;
      this.pedido.entrega = false;

      this.pedidoService.create(this.pedido).subscribe(() => {
        this.pedidoService.showMessage('Pedido solicitado');
        console.log('chamei o carrinho ');
      });
    });
  }

  // tslint:disable-next-line:typedef
  atualizarCarrinho(carrinho: Carrinho) {
    this.carrinhoService.update(carrinho).subscribe(() => {
      this.carrinhoService.showMessage('Carrinho Atualizado');
    });
  }

}
