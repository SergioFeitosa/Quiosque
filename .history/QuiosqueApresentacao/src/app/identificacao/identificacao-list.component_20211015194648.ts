import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-identificacao-list',
  templateUrl: './identificacao-list.component.html',
})

export class IdentificacaoListComponent implements OnInit {

  produtos: Produto[] = [];

  ngOnInit(): void {
    this.produtos = [
      { id: 1,
        category: 'refeicao',
        name: 'Peixe Cioba',
        imageUrl: '',
        price: 70.00,
        code: '100100',
        preparacao: '45 min'
      },
      { id: 2,
        categoria: 'bebida',
        name: 'Coca Cola',
        imageUrl: '',
        price: 5.00,
        code: '200200',
        tempoPreparacao: '1 min'
      }
    ];
  }
}
