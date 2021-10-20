import { environment } from './../../environments/environment';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit, OnChanges{
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled = environment.buttonDisabled;


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    console.log('environment.buttonDisabled);
    this.buttonDisabled = environment.buttonDisabled;

  }

  ngOnInit(): void {
    console.log('init' + environment.buttonDisabled);
    this.buttonDisabled = environment.buttonDisabled;
  }
}
