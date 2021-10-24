import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.css'],
})

export class PedidoCreateComponent implements OnInit {

pedido: Pedido = {
  pedidoId: 9825512569999,
  produtoId: 1,
  observacao: 'bem passado',
  isencao: false,
  releaseDate: '21/10/2021',
  releaseTime: '10:20'
}


constructor(private pedidoService: PedidoService,
            private router: Router ) { }

ngOnInit(): void {

}

createPedido(): void {
  this.pedidoService.create
}
}
