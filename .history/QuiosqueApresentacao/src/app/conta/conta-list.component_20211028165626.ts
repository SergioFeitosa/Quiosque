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
  conta: Conta = {
    id: 0,
    pedidoId: 0,
    produtoId: 0,
    telefone: 0,
    local: '',
    nome: '',
    descricao: '',
    imageUrl: '',
    quantidade: 0,
    valorProdutoUnitario: 0,
    valorProdutoTotal: 0,
    valorTotal: 0,
    isencao: false,
    releaseDate: new Date,
    releaseTime: ''
  };

  produtoId: number;
  produtoName: string;
  produtoImageUrl: string;
  produtoDescricao: string;
  produtoPreco: number;
  produtoTempoPreparacao: string;
  produtoAvaliacao: number;

  pedidoId: 0;
  pedidoTelefone: number;
  pedidoLocal: string;
  pedidoObservacao: string;
  pedidoIsencao: true;
  pedidoReleaseDate: Date;
  pedidoReleaseTime: string;

  produto: Produto;


  // tslint:disable-next-line:variable-name
  pedido: Pedido = {
    id: 0,
    produtoId: 0,
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: environment.telefone,
    local: 'teste',
    observacao: 'teste',
    isencao: false,
    releaseDate: Date,
    releaseTime: 'teste',
    entrega: false,
  };

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

      this.produtoId = this.pedido.produtoId;
      this.produtoImageUrl = this.pedido.produtoImageUrl;
      this.produtoTempoPreparacao = this.pedido.produtoTempoPreparacao;
      this.pedidoTelefone = environment.telefone;
      this.pedidoLocal = environment.local;
      this.pedidoObservacao = this.pedido.observacao;
      this.pedido.isencao = this.pedido.isencao;
      this.pedido.releaseDate = this.pedido.releaseDate;
      this.pedido.releaseTime = this.pedido.releaseTime;


      this.produtoService.readById(this.produtoId).subscribe(produto => {
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
        this.conta.releaseTime = this.pedidoReleaseTime;

        this.contaService.create(this.conta).subscribe(() => {
          this.contaService.showMessage('Conta solicitada');
        }
        );
      });
    });
  }
}
