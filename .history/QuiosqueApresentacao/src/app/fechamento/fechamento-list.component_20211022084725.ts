import { ActivatedRoute } from '@angular/router';
import { FechamentoService } from './fechamento.service';
import { Fechamento } from './fechamento';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './pedido-list.component.html',
})

export class FechamentoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  filteredFechamentos: Fechamento[] = [];
  // tslint:disable-next-line:variable-name
  _pedidos: Fechamento[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private pedidoService: FechamentoService,
              private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {
    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this._pedidos = this.pedidoService.retrieveAll();
    this.filteredFechamentos = this._pedidos;
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredFechamentos =
    this._pedidos.filter((pedido: Fechamento) => pedido.pedidoId.toString().indexOf(this._filterBy.toString()) > -1);
  }

}
