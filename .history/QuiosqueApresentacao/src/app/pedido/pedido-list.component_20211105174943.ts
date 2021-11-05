import { environment } from 'src/environments/environment';
import { ProdutoService } from './../produto/produto.service';
import { Produto } from './../produto/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { Component, OnInit } from '@angular/core';
import { Entrega } from '../entrega/entrega';
import { EntregaService } from '../entrega/entrega.service';
@Component({
  templateUrl: './pedido-list.component.html',
})

export class PedidoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  displayStyle: string;

  filteredPedidos: Pedido[] = [];
  pedidos: Pedido[] = [];

  // tslint:disable-next-line:variable-name
  entrega = {} as Entrega;

  // tslint:disable-next-line:variable-name
  produto = {} as Produto;

  // tslint:disable-next-line:variable-name
  pedido = {} as Pedido;

  // tslint:disable-next-line:variable-name
  _pedidos: Pedido[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(
    private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private entregaService: EntregaService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.pedidoService.read().subscribe(pedidos => {
      this.pedidos = pedidos;
      this.filteredPedidos = this.pedidos.filter((pedido: Pedido) => pedido.telefone === environment.telefone)
                                         .filter((pedido: Pedido) => pedido.entrega !== true);

    });
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredPedidos =
      this.pedidos.filter((pedido: Pedido) => pedido.telefone.toString().indexOf(this._filterBy.toString()) > -1);
    }

  entregaCreate(pedidoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.pedidoService.readById(pedidoId).subscribe(pedido => {
      this.pedido = pedido;

      this.produto = this.pedido.produto;
      this.pedido.telefone = environment.telefone;
      this.pedido.local = environment.local;
      this.pedido.observacao = this.pedido.observacao;
      this.pedido.isencao = this.pedido.isencao;
      this.pedidoReleaseDate = this.pedido.releaseDate;
      this.pedidoEntrega = this.pedido.entrega;

      if (this.pedidoEntrega !== true) {

        this.pedido.entrega = true;
        this.atualizarPedido(pedido);

        this.produtoService.readById(this.produtoId).subscribe(produto => {
          this.produto = produto;

          this.produtoNome = this.produto.name;
          this.produtoPreco = this.produto.price;
          this.produtoImageUrl = this.produto.imageUrl;
          this.produtoTempoPreparacao = this.produto.preparationTime;
          this.produtoAvaliacao = this.produto.rating;
          this.produtoDescricao = this.produto.description;

          this.entrega.pedidoId = pedidoId;
          this.entrega.produtoImageUrl = this.produtoImageUrl;
          this.entrega.telefone = environment.telefone;
          this.entrega.local = environment.local;
          this.entrega.observacao = this.pedidoObservacao;
          this.entrega.isencao = this.pedidoIsencao;
          this.entrega.releaseDate = this.pedidoReleaseDate;
          this.entrega.entregaDate = null;

          this.entregaService.create(this.entrega).subscribe(() => {
            this.entregaService.showMessage('Entrega solicitada');
          }
          );
        });
      }
    });
  }

  // tslint:disable-next-line:typedef
  atualizarPedido(pedido: Pedido) {
    this.pedidoService.update(pedido).subscribe(() => {
      this.pedidoService.showMessage('Pedido Atualizado');
    });
  }

}
