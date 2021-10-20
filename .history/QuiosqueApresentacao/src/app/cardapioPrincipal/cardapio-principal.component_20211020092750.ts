import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  buttonDisabled: boolean;

  constructor() {
    this.buttonDisabled = environment.buttonDisabled;
    this.buttonDisabled = false;
    console.log('passei2');
  }
}
