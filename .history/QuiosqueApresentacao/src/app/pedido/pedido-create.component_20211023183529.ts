import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.css'],
})

export class PedidoCreateComponent implements OnInit {

constructor(private pedidoService: PedidoService,
            private router: Router ) { }

ngOnInit(): void {

}

createPedido(): void {
  
}
}
