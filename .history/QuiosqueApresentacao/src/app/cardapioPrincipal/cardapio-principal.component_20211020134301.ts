import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-principal',
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean;

  element: HTMLElement;
  element2: HTMLElement;

  constructor() {

    element: HTMLElement;
    element2: HTMLElement;

    this.buttonDisabled = false;
    this.element = document.getElementById('desabilitado') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;

    this.element.setAttribute('disabled', 'true');
    this.element2.setAttribute('disabled', 'true');
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = true;
    console.log('passei23333 ' + this.buttonDisabled);

    this.element = document.getElementById('desabilitado') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;

    this.element.setAttribute('disabled', 'false');
    this.element2.setAttribute('disabled', 'false');
  }
}