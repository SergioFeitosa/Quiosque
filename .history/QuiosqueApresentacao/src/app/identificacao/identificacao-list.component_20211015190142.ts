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
      id: number;
      categoria: string;
      name: string;
      imageUrl: string;
      price: number;
      code: string;
      tempoPreparacao: number;
    ]

    }
  }
}
