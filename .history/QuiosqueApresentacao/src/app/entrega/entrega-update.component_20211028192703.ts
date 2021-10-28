import { Router } from '@angular/router';
import { EntregaService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { Entrega } from './pedido';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
})

export class EntregaUpdateComponent implements OnInit {

  pedido: Entrega = {
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


  constructor(private entregaService: EntregaService,
              private router: Router) { }

  ngOnInit(): void {

  }

  updateEntrega(pedido): void {
    this.pedidoService.update(pedido).subscribe(() => {
      this.pedidoService.showMessage('Produto Atualizado');
      this.router.navigate(['/pedidos']);
    });
  }
}
