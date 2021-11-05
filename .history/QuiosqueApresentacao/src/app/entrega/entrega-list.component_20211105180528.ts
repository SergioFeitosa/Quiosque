import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { EntregaService } from './entrega.service';
import { Entrega } from './entrega';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { Pedido } from '../pedido/pedido';
import { PedidoService } from '../pedido/pedido.service';
@Component({
  templateUrl: './entrega-list.component.html',
})

export class EntregaListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  filteredEntregas: Entrega[] = [];
  entregas: Entrega[] = [];

  pedido = {} as  Pedido;
  produto = {} as  Produto;
  entrega = {} as  Entrega;
  // tslint:disable-next-line:variable-name
  _entregas: Entrega[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private entregaService: EntregaService,
              private pedidoService: PedidoService,
              private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {

    this.entregaService.read().subscribe(entregas => {
      this.entregas = entregas;
      this.filteredEntregas = this.entregas.filter((entrega: Entrega) => entrega.telefone === environment.telefone);
    });
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredEntregas =
    this.entregas.filter((entrega: Entrega) => entrega.pedidotelefone.toString().indexOf(this._filterBy.toString()) > -1);
  }

  entregaCreate(pedidoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.pedidoService.readById(pedidoId).subscribe(pedido => {
      this.pedido = pedido;

    });

    this.entrega.pedido = this.pedido;
    this.entrega.entregaDate = new Date();

    this.entregaService.create(this.entrega).subscribe(() => {
        this.entregaService.showMessage('Entrega solicitada');
      }
    );
  }



}
