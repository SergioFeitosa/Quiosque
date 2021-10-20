import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-principal',
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = true;

  element: HTMLElement;
  element2: HTMLElement;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;
    console.log('passei23333 ' + this.buttonDisabled);

    this.element = document.getElementById('desabilitado') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;

    this.element.setAttribute('disabled', 'truw');
    this.element2.setAttribute('disabled', 'false');
  }
}
