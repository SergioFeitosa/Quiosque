import { environment } from 'src/environments/environment';
import { ProdutoService } from './../produto/produto.service';
import { Produto } from './../produto/produto';
import { ActivatedRoute } from '@angular/router';
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

  filteredPedidos: Pedido[] = [];
  pedidos: Pedido[] = [];
  // tslint:disable-next-line:variable-name
  entrega: Entrega = {
    produtoId: 0,
    telefone: environment.telefone,
    local: 'teste',
    observacao: 'teste',
    isencao: true,
    releaseDate: 'teste',
    releaseTime: 'teste',
    entregaTime: 'teste',
    pedidoId: 0,
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
  pedidoReleaseDate: string;
  pedidoReleaseTime: string;

  produto: Produto;


  // tslint:disable-next-line:variable-name
  pedido: Pedido = {
    produtoId: 0,
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: environment.telefone,
    local: 'teste',
    observacao: 'teste',
    isencao: true,
    releaseDate: 'teste',
    releaseTime: 'teste',
    pedidoId: 0
  };

  // tslint:disable-next-line:variable-name
  _pedidos: Pedido[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private pedidoService: PedidoService,
              private produtoService: ProdutoService,
              private entregaService: EntregaService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.pedidoService.read().subscribe(pedidos => {
      this.pedidos = pedidos;
      this.filteredPedidos = this.pedidos.filter((pedido: Pedido) => pedido.telefone === environment.telefone);
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

        console.log('create c1 ' + this.produtoImageUrl);


        this.entrega.pedidoId = pedidoId;
        this.entrega.telefone = environment.telefone;
        this.entrega.local = environment.local;
        this.entrega.observacao = this.pedidoObservacao;
        this.entrega.isencao = this.pedidoIsencao;
        this.entrega.releaseDate = this.pedidoReleaseDate;
        this.entrega.releaseTime = this.pedidoReleaseTime;
        this.entrega.entregaTime = 'teste';


        this.entregaService.create(this.entrega).subscribe(() => {
          this.entregaService.showMessage('Entrega solicitado');
        }
        );
        });






    }
}
