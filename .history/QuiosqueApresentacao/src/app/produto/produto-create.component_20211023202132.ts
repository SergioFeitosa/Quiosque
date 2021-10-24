import { Router } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
})

export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    id: 30,
    categoryId: 1,
    name: 'Arroz com feijão',
    imageUrl: 'string;',
    price: 1,
    code: '123',
    preparationTime: '45 min'
    rating: 5,
    releaseDate: '25;10;1962',
    description: 'arroz com feijao nordestino';

    produtoId: 9825512569999,
    produtoId: 1,
    observacao: 'bem passado',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  };


  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {

  }

  createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto Criaado');
      this.router.navigate(['/produtos']);
    });
  }
}
