import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {
  // tslint:disable-next-line:use-lifecycle-interface
  static ngOnInit() {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled: boolean = environment.buttonDisabled;


}
