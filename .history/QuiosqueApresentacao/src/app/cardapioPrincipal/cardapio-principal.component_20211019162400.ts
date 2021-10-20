import { environment } from './../../environments/environment';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnChanges  {
  // tslint:disable-next-line:no-inferrable-types

  @InpbuttonDisabled: boolean = environment.buttonDisabled;

  ngOnChanges(): void {
    console.log('teste ' + this.buttonDisabled);
  }

}
