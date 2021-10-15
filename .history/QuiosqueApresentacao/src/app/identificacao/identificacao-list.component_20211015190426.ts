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
        categoria: 'refeicao',
        name: 'Peixe Cioba',
        imageUrl: '',
        price: 70.00,
        code: '100100',
        tempoPreparacao: '45 min'
      }
    ]

    }
  }
}
