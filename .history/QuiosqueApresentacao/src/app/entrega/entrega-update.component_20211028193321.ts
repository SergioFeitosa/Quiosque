import { Router, ActivatedRoute } from '@angular/router';
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
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.entregaService.update(id).subscribe(() => {
      this.entregaService.showMessage('Entrega  Deletado');
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
