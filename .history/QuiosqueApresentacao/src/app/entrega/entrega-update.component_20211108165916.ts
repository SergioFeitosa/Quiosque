import { Router, ActivatedRoute } from '@angular/router';
import { EntregaService } from './entrega.service';
import { Component, OnInit } from '@angular/core';
import { Entrega } from './entrega';

@Component({
  selector: 'app-entrega-update',
  templateUrl: './entrega-update.component.html',
})

export class EntregaUpdateComponent implements OnInit {


  entrega = {} as Entrega;


  constructor(
    private entregaService: EntregaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.entregaService.readById(id).subscribe(entrega => {
      this.entrega = entrega;

      entrega.entregaDate = new Date();

      this.entregaService.update(entrega).subscribe(() => {

        this.entregaService.showMessage('Entrega Atualizada');
        this.router.navigate(['/entrega']);
      });
    });
  }

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  // tslint:disable-next-line:typedef
  openPopup(carrinhoId: number): void {
    // tslint:disable-next-line:no-unused-expression
    this.carrinhoService.readById(entregaId).subscribe(entrega => {
      this.entrega = entrega;
      this.produto = this.carrinho.produto;
    });

    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
  }

  updateEntrega(entrega): void {
    this.entregaService.update(entrega).subscribe(() => {
      this.entregaService.showMessage('Entrega Atualizada');
      this.router.navigate(['/entregas']);
    });
  }
}
