import { ActivatedRoute, Router } from '@angular/router';
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
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.pedidoService.delete(id).subscribe(() => {
      this.pedidoService.showMessage('Pedido Deletado');
      this.router.navigate(['/pedidos']);
    });

  }

  deletePedido(id: number): void {
    this.pedidoService.delete(id).subscribe(() => {
      this.pedidoService.showMessage('Pedido Deletado');
      this.router.navigate(['/pedidos']);
    });
  }
}
