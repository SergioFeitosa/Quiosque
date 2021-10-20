import { environment } from './../../environments/environment';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {
  // tslint:disable-next-line:no-inferrable-types

  @Input() buttonDisabled: boolean ;

}
