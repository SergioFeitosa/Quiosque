import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  buttonDisabled: boolean;

  constructor() {
    console.log('constructoreenvironment.buttonDisabled);
    this.buttonDisabled = environment.buttonDisabled;
  }

}
