import { Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from './carrinho';

@Component({
  selector: 'app-carrinho-read',
  templateUrl: './carrinho-read.component.html',
})

export class CarrinhoReadComponent implements OnInit {

  carrinho: Carrinho = {
    id: 9825512569999,
    produtoId: 1,
    produtoImageUrl: '',
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: 1,
    local: '1',
    observacao: 'bem passado',
    isencao: false,
    releaseDate:  new Date(),
    pedido: false
  };

  carrinhos: Carrinho[];

  constructor(private carrinhoService: CarrinhoService,
              private router: Router) { }

  ngOnInit(): void {

    this.carrinhoService.read().subscribe(carrinhos => {
      this.carrinhos = carrinhos;
    });
  }

  createCarrinho(): void {
    this.carrinhoService.create(this.carrinho).subscribe(() => {
      this.carrinhoService.showMessage('Produto Criaado');
      this.router.navigate(['/carrinhos']);
    });
  }
}
