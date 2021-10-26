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
    name: '"coca cola"',
    code: "100100",
    price: 70,
    imageUrl: "/quiosque/assets/images/cocacola-lata350ml.jpg",
    preparationTime: "45 min",
    rating: 5,
    releaseDate: "November 2, 2019",
    description: "refrigerante de cola  "
};
  // tslint:disable-next-line:variable-name
  _pedidos: Pedido[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private pedidoService: PedidoService,
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

    this.entrega.pedidoId = pedidoId;
    this.entrega.telefone = environment.telefone;
    this.entrega.local = environment.local;
    this.entrega.observacao = 'teste';
    this.entrega.isencao = true;
    this.entrega.releaseDate = 'teste';
    this.entrega.releaseTime = 'teste';
    this.entrega.entregaTime = 'teste';

    this.entregaService.create(this.entrega).subscribe(() => {
        this.entregaService.showMessage('Entrega solicitado');
      }
    );
  }
}
