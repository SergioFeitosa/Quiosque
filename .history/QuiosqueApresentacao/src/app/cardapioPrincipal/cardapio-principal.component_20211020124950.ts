import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-principal',
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = true;

  element: HTMLElement;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;
    console.log('passei23333 ' + this.buttonDisabled);
    this.element = document.getElementById('desabilitado') as HTMLElement;

    this.element.setAttribute('disabled' = false);
  }
}
