import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit{
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled = false;


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    this.buttonDisabled = environment.buttonDisabled;

  }

  ngOnInit(): void {
    this.buttonDisabled = environment.buttonDisabled;
  }
}
