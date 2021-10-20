import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'CardapioPrincipalComponent'.
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  buttonDisabled: boolean;

  constructor() {
    this.buttonDisabled = environment.buttonDisabled;
    console.log('passei2' + environment.buttonDisabled);
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;
    console.log('passei23333 ' + environment.buttonDisabled);
  }
}
