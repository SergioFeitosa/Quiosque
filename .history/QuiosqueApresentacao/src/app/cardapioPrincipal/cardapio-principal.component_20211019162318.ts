import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements Onc  {
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled: boolean = environment.buttonDisabled;

  ngOnInit(): void {
    console.log('teste ' + this.buttonDisabled);
  }

}