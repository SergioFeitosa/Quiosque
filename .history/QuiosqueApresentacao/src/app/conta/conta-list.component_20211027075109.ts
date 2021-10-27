import { ActivatedRoute } from '@angular/router';
import { ContaService } from './conta.service';
import { Conta } from './conta';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './conta-list.component.html',
})

export class ContaListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  filteredContas: Conta[] = [];
  // tslint:disable-next-line:variable-name
  _contas: Conta[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private contaService: ContaService,
              private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {
    this._contas = this.contaService.retrieveAll();
    this.filteredContas = this._contas;
    environment.telefone = 0;
    environment.codigo = 0;
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredContas =
    this._contas.filter((conta: Conta) => conta.contaId.toString().indexOf(this._filterBy.toString()) > -1);
  }

}
