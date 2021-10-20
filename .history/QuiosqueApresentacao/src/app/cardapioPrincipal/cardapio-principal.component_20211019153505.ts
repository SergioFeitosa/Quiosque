import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types

  buttonDisabled: boolean = environment.buttonDisabled;
  // tslint:disable-next-line:member-ordering
  static ngOnInit: any;


  ngOnInit(): void {
    console.log('teste ' + this.buttonDisabled);
  }

}
