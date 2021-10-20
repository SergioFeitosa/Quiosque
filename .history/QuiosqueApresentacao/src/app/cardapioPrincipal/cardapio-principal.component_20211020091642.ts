import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  buttonDisabled: boolean = environment.buttonDisabled;

  constructor() {
    this.buttonDisabled = environment.buttonDisabled;
    console.log('constructor2' + environment.buttonDisabled);
  }

}
