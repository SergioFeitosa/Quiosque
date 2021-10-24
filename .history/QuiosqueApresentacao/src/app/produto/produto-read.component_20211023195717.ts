import { Router } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
})

export class ProdutoReadComponent implements OnInit {

  produto: Produto = {
    produtoId: 9825512569999,
    produtoId: 1,
    observacao: 'bem passado',
    isencao: false,
    releaseDate: '21/10/2021',
    releaseTime: '10:20'
  };

  produtos: Produto[];

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {

    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto Criaado');
      this.router.navigate(['/produtos']);
    });
  }
}
