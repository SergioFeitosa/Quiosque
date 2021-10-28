import { Router } from '@angular/router';
import { EntregaService } from './entrega.service';
import { Component, OnInit } from '@angular/core';
import { Entrega } from './entrega';

@Component({
  selector: 'app-entrega-update',
  templateUrl: './entrega-update.component.html',
})

export class EntregaUpdateComponent implements OnInit {

  entrega: Entrega = {
    id: 9825512569999,
    id?: number;
    pedidoId: number;
    telefone: number;
    local: string;
    produtoId: number;
    produtoImageUrl: string;
    observacao: string;
    isencao: boolean;
    releaseDate: Date;
    entregaDate: Date;
  };


  constructor(private entregaService: EntregaService,
              private router: Router) { }

  ngOnInit(): void {

  }

  updateEntrega(entrega): void {
    this.entregaService.update(entrega).subscribe(() => {
      this.entregaService.showMessage('Produto Atualizado');
      this.router.navigate(['/entregas']);
    });
  }
}
