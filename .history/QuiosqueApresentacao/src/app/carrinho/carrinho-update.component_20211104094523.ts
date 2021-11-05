import { Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from './carrinho';

@Component({
  selector: 'app-carrinho-update',
  templateUrl: './carrinho-update.component.html',
})

export class CarrinhoUpdateComponent implements OnInit {

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
    entrega: false
  };


  constructor(private carrinhoService: CarrinhoService,
              private router: Router) { }

  ngOnInit(): void {

  }

  updateCarrinho(carrinho): void {
    this.carrinhoService.update(carrinho).subscribe(() => {
      this.carrinhoService.showMessage('Produto Atualizado');
      this.router.navigate(['/carrinhos']);
    });
  }
}
