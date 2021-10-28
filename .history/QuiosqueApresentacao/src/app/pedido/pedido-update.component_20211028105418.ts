import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
})

export class PedidoUpdateComponent implements OnInit {

  pedido: Pedido = {
    id: 9825512569999,
    produtoId: 1,
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: 1,
    local: '1',
    observacao: 'bem passado',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  };


  constructor(private pedidoService: PedidoService,
              private router: Router) { }

  ngOnInit(): void {

  }

  updatePedido(): void {
    this.pedidoService.update(this.pedido).subscribe(() => {
      this.pedidoService.showMessage('Produto Criaado');
      this.router.navigate(['/pedidos']);
    });
  }
}
