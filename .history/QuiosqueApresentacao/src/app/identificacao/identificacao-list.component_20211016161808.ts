import { IdentificacaoService } from './identificacao.service';
import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-identificacao-list',
  templateUrl: './identificacao-list.component.html',
})

export class IdentificacaoListComponent implements OnInit {

  produtos: Produto[] = [];

  _filterBy: string;

  constructor(private identificacaoService: IdentificacaoService){

  }

  ngOnInit(): void {
    this.produtos = this.identificacaoService.retrieveAll();
  }

  get filter() {
    return this._filterBy;
  }
  set filter(value: string) {
    this._filterBy = value;
  }

}
