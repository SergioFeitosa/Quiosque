import { environment } from 'src/environments/environment';
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
  entregas: Pedido[] = [];
  order: Pedido;
  // tslint:disable-next-line:variable-name
  _entregas: Pedido[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private entregaService: PedidoService,
              private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {

    this.entregaService.read().subscribe(entregas => {
      this.entregas = entregas;
      this.filteredPedidos = this.entregas.filter((entrega: Pedido) => entrega.telefone === environment.telefone);
    });
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredPedidos =
    this.entregas.filter((entrega: Pedido) => entrega.telefone.toString().indexOf(this._filterBy.toString()) > -1);
  }

  entregaCreate(entregaId: number): void {

    this.order.entregaId = entregaId;
    this.order.telefone = environment.telefone;
    this.order.local = environment.local;
    this.order.observacao = 'teste';
    this.order.isencao = true;
    this.order.releaseDate = 'teste';
    this.order.releaseTime = 'teste';

    this.entregaService.create(this.order).subscribe(() => {
        this.entregaService.showMessage('Pedido solicitado');
      }
    );
  }



}
