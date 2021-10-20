import { environment } from './../../environments/environment';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit, OnChanges{
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled = environment.buttonDisabled;

}
