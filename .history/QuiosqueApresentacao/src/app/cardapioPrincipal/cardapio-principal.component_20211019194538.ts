import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent{

// tslint:disable-next-line:no-inferrable-types
buttonDisabled: boolean = true;

this.buttonDisabled = environment.buttonDisabled;

}

get filter() {
  return this._filterBy;
}
