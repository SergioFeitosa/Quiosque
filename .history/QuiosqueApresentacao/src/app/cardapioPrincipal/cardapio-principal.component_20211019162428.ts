import { environment } from './../../environments/environment';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnChanges  {
  // tslint:disable-next-line:no-inferrable-types

  @Input() buttonDisabled: boolean = true;

  ngOnChanges(): void {
    console.log('teste ' + this.buttonDisabled);
  }

}
