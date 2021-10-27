import { ProdutoService } from './../produto/produto.service';
import { Produto } from './../produto/produto';
import { environment } from 'src/environments/environment';
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
    entregaId: 0
  };
  // tslint:disable-next-line:variable-name
  produto: Produto = {
    id: 22,
    category: '',
    name: '',
    code: '',
    price: 0,
    imageUrl: '',
    preparationTime: '',
    rating: 5,
    releaseDate: '',
    description: ''
};

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
              private activatedRoute: ActivatedRoute ){

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

      console


      this.pedido.produtoId = produtoId;
      this.pedido.produtoImageUrl = this.produtoImageUrl;
      this.pedido.produtoTempoPreparacao = this.produtoTempoPreparacao;
    });






    this.entregaService.create(this.entrega).subscribe(() => {
        this.entregaService.showMessage('Entrega solicitado');
      }
    );
  }
}
