import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedido-read',
  templateUrl: './pedido-read.component.html',
})

export class PedidoReadComponent implements OnInit {

  pedido: Pedido = {
    pedidoId: 9825512569999,
    produtoId: 1,
    observacao: 'bem passado',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  };

  pedidos: Pedido[];

  constructor(private pedidoService: PedidoService,
              private router: Router) { }

  ngOnInit(): void {

    this.pedidoService
  }

  createPedido(): void {
    this.pedidoService.create(this.pedido).subscribe(() => {
      this.pedidoService.showMessage('Produto Criaado');
      this.router.navigate(['/pedidos']);
    });
  }
}
