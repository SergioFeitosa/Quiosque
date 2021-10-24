import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './pedido-list.component.html',
})

export class PedidoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  filteredPedidos: Pedido[] = [];
  pedidos: Pedido[] = [];
  // tslint:disable-next-line:variable-name
  _pedidos: Pedido[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private pedidoService: PedidoService,
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

}
