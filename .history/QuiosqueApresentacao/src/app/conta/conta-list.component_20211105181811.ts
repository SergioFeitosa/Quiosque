import { ActivatedRoute } from '@angular/router';
import { ContaService } from './conta.service';
import { Conta } from './conta';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../pedido/pedido';
import { Produto } from '../produto/produto';
import { PedidoService } from '../pedido/pedido.service';
import { ProdutoService } from '../produto/produto.service';

@Component({
  templateUrl: './conta-list.component.html',
})

export class ContaListComponent implements OnInit {


  filteredContas: Pedido[] = [];
  pedidos: Pedido[] = [];
  // tslint:disable-next-line:variable-name
  conta = {} as Conta;

  // tslint:disable-next-line:variable-name
  pedido = {} as Pedido;

  // tslint:disable-next-line:variable-name
  _pedidos: Pedido[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private pedidoService: PedidoService,
              private produtoService: ProdutoService,
              private contaService: ContaService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.pedidoService.read().subscribe(pedidos => {
      this.pedidos = pedidos;
      this.filteredContas = this.pedidos.filter((pedido: Pedido) => pedido.telefone === environment.telefone);
    });
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredContas =
      this.pedidos.filter((pedido: Pedido) => pedido.telefone.toString().indexOf(this._filterBy.toString()) > -1);
  }

  contaCreate(pedidoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.pedidoService.readById(pedidoId).subscribe(pedido => {
      this.pedido = pedido;

      this.produtoService.readById(this.pedidoprodutoId).subscribe(produto => {
        this.produto = produto;

        this.produtoName = this.produto.name;
        this.produtoPreco = this.produto.price;
        this.produtoImageUrl = this.produto.imageUrl;
        this.produtoTempoPreparacao = this.produto.preparationTime;
        this.produtoAvaliacao = this.produto.rating;
        this.produtoDescricao = this.produto.description;

        this.conta.pedidoId = pedidoId;
        this.conta.produtoId = this.produtoId;
        this.conta.telefone = environment.telefone;
        this.conta.local = environment.local;
        this.conta.quantidade = 1;
        this.conta.valorProdutoUnitario = 1;
        this.conta.valorProdutoTotal = 1;
        this.conta.valorTotal = 1;
        this.conta.isencao = this.pedidoIsencao;
        this.conta.releaseDate = this.pedidoReleaseDate;

        this.contaService.create(this.conta).subscribe(() => {
          this.contaService.showMessage('Conta solicitada');
        }
        );
      });
    });
  }
}
