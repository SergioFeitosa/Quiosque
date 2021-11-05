import { Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from './carrinho';

@Component({
  selector: 'app-carrinho-create',
  templateUrl: './carrinho-create.component.html',
})

export class CarrinhoCreateComponent implements OnInit {

  carrinho: Carrinho
    id: 9825512569999,
    produtoId: 1,
    produtoNome: '',
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: 1,
    local: '1',
    observacao: 'bem passado',
    isencao: false,
    releaseDate: new Date(),
    pedido: false
  };


  constructor(private carrinhoService: CarrinhoService,
              private router: Router) { }

  ngOnInit(): void {

  }

  createCarrinho(): void {
    this.carrinhoService.create(this.carrinho).subscribe(() => {
      this.carrinhoService.showMessage('Produto Criaado');
      this.router.navigate(['/carrinho']);
    });
  }
}
