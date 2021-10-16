import { IdentificacaoService } from './identificacao.service';
import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-identificacao-list',
  templateUrl: './identificacao-list.component.html',
})

export class IdentificacaoListComponent implements OnInit {

  _filterBy: string;
  produtos: Produto[] = [];

  constructor(private identificacaoService: IdentificacaoService){

  }

  ngOnInit(): void {
    this.produtos = this.identificacaoService.retrieveAll();
  }

  set filter(value: string) {

  }
}
