import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
})

export class PedidoDeleteComponent implements OnInit {

  pedido: Pedido = {
    id: 9825512569999,
    produtoId: 1,
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: 1,
    local: '1',
    observacao: 'bem passado',
    isencao: false,
    releaseDate:  new Date(),
    entrega: false
  };


  constructor(private pedidoService: PedidoService,
              private router: Router) { }

  ngOnInit(): void {

  }

  updatePedido(pedido): void {
    this.pedidoService.update(pedido).subscribe(() => {
      this.pedidoService.showMessage('Produto Atualizado');
      this.router.navigate(['/pedidos']);
    });
  }
}
