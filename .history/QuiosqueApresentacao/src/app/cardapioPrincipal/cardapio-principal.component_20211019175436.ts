import { environment } from './../../environments/environment';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent{
  // tslint:disable-next-line:no-inferrable-types

  @Input() buttonDisabled: boolean = environment.buttonDisabled;

  ngOnChanges(): void {
    console.log('teste ' + this.buttonDisabled);
  }

}
