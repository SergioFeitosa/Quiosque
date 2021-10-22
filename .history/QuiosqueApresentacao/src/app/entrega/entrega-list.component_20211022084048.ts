import { ActivatedRoute } from '@angular/router';
import { PedidoService } from './entrega.service';
import { Pedido } from './entrega';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './entrega-list.component.html',
})

export class PedidoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  filteredPedidos: Pedido[] = [];
  // tslint:disable-next-line:variable-name
  _entregas: Pedido[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private entregaService: PedidoService,
              private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {
    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this._entregas = this.entregaService.retrieveAll();
    this.filteredPedidos = this._entregas;
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredPedidos =
    this._entregas.filter((entrega: Pedido) => entrega.entregaId.toString().indexOf(this._filterBy.toString()) > -1);
  }

}
