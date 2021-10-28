import { Router } from '@angular/router';
import { EntregaService } from './entrega.service';
import { Component, OnInit } from '@angular/core';
import { Entrega } from './entrega';

@Component({
  selector: 'app-entrega-update',
  templateUrl: './entrega-update.component.html',
})

export class EntregaUpdateComponent implements OnInit {

  entrega: Entrega;


  constructor(private entregaService: EntregaService,
              private router: Router,) { }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.pedidoService.delete(id).subscribe(() => {
      this.pedidoService.showMessage('Pedido Deletado');
      this.router.navigate(['/pedido']);
    });


  }

  updateEntrega(entrega): void {
    this.entregaService.update(entrega).subscribe(() => {
      this.entregaService.showMessage('Produto Atualizado');
      this.router.navigate(['/entregas']);
    });
  }
}
