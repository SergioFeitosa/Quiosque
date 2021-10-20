import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit{
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled = environment.buttonDisabled;


  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.buttonDisabled = environment.buttonDisabled;
  }
}
