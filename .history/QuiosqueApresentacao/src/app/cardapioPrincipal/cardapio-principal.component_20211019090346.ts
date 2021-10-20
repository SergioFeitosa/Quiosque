import { environment } from './../../environments/environment';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit, OnChanges{
  // tslint:disable-next-line:no-inferrable-types

  @Input() buttonDisabled: boolean ;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.buttonDisabled = environment.buttonDisabled;

  }

  ngOnInit(): void {
    console.log('init' + environment.buttonDisabled);
    this.buttonDisabled = environment.buttonDisabled;
  }
}
