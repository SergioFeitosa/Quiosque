import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit {

  _categoryId: string;

  ngOnInit(): void {
    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
  }

}
