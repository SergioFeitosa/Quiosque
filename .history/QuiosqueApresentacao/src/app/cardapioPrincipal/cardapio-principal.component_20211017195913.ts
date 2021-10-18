import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class IdentificacaoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  constructor(private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {
    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
  }

}
