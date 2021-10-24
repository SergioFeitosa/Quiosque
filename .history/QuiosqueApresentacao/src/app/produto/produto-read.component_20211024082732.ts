import { Router } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html'
})

export class ProdutoReadComponent implements OnInit {

  produto: Produto = {

    id: 1,
    category: 'pratododia',
    name: 'Peixe cioba',
    code: 'XLF-1212',
    price: 12.99,
    imageUrl: 'assets/images/cioba-frito.jpg',
    preparationTime: '45 min',
    rating: 1,
    releaseDate: 'November 2, 2019',
    description: 'Peixe abundante no litoral nordestino. O prato atende até 3 pessoas. Acompanhamento: arroz e fritas'

  };

  produtos: Produto[];

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {

  }

  Leitura(): void {
    this.produtoService.read().subscribe(produtos => {
    this.produtos = produtos;
    console.log('produtos ');
  }

createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto Criaado');
      this.router.navigate(['/produtos']);
    });
  }
}
