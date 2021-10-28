import { Router, ActivatedRoute } from '@angular/router';
import { EntregaService } from './entrega.service';
import { Component, OnInit } from '@angular/core';
import { Entrega } from './entrega';

@Component({
  selector: 'app-entrega-update',
  templateUrl: './entrega-update.component.html',
})

export class EntregaUpdateComponent implements OnInit {


  entrega: Entrega = {
    id: 0,
    pedidoId: 0,
    produtoId: 0,
    produtoImageUrl: '',
    telefone: 0,
    local: 'teste',
    observacao: 'teste',
    isencao: true,
    releaseDate: new Date(),
    entregaDate: new Date(),
  };


  constructor(
    private entregaService: EntregaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.entregaService.readById(id).subscribe(entrega => {
      this.entrega = entrega;

      this.entregaService.update(entrega).subscribe(() => {

        entrega,
        this.entregaService.showMessage('Entrega alterada');
        this.router.navigate(['/entrega']);
      });
    });
  }
}
updateEntrega(entrega): void {
  this.entregaService.update(entrega).subscribe(() => {
    this.entregaService.showMessage('Produto Atualizado');
    this.router.navigate(['/entregas']);
  });
}
  }
