import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = true;

  // tslint:disable-next-line:align
  this.buttonDisabled = environment.buttonDisabled;


  Update() {
    return this._filterBy;
  }
}
