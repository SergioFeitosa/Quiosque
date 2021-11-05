import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from './carrinho';

@Component({
  selector: 'app-carrinho-delete',
  templateUrl: './carrinho-delete.component.html',
})

export class CarrinhoDeleteComponent implements OnInit {

  carrinho: Carrinho = {
    id: 9825512569999,
    produtoId: 1,
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: 1,
    local: '1',
    observacao: 'bem passado',
    isencao: false,
    releaseDate:  new Date(),
    pedido: false
  };


  constructor(private carrinhoService: CarrinhoService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.carrinhoService.delete(id).subscribe(() => {
      this.carrinhoService.showMessage('Carrinho Deletado');
      this.router.navigate(['/carrinho']);
    });

  }

  deleteCarrinho(id: number): void {
    this.carrinhoService.delete(id).subscribe(() => {
      this.carrinhoService.showMessage('Carrinho Deletado');
      this.router.navigate(['/carrinho']);
    });
  }
}
