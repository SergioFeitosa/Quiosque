import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

// tslint:disable-next-line:semicolon
environment.buttonDisabled = true;

}
