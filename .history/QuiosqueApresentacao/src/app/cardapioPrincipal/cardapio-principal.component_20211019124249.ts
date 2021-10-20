import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements {
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled: boolean = environment.buttonDisabled;


}
