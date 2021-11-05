import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
})

export class PedidoCreateComponent implements OnInit {

  pedido: Pedido = {
    id: 9825512569999,
    produtoId: 1,
    produtoImageUrl: '',
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: 1,
    local: '1',
    observacao: 'bem passado',
    isencao: false,
    releaseDate: new Date(),
    entrega: false
  };


  constructor(private pedidoService: PedidoService,
              private router: Router) { }

  ngOnInit(): void {

  }

  createPedido(): void {
    this.pedidoService.create(this.pedido).subscribe(() => {
      this.pedidoService.showMessage('Produto Criaado');
      this.router.navigate(['/pedidos']);
    });
  }
}
