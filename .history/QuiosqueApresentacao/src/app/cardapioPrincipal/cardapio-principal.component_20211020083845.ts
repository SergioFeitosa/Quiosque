import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  constructor() {
    console.log(environment.apiUrl);
  }
// tslint:disable-next-line:no-inferrable-types
environment.buttonDisabled = true;

}
