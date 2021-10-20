import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit{
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled = environment.buttonDisabled;


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    this.buttonDisabled = tru;

  }

  ngOnInit(): void {
    this.buttonDisabled = false;
  }
}
