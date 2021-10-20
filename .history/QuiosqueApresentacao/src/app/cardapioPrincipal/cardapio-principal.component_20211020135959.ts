import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio-principal',
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean;

  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  element4: HTMLElement;
  element5: HTMLElement;
  element6: HTMLElement;
  element7: HTMLElement;
  element8: HTMLElement;

  constructor() {
    this.buttonDisabled = false;
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;
    console.log('passei23333 ' + this.buttonDisabled);

    this.element = document.getElementById('desabilitado') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;

    this.element.removeAttribute('disabled');
    this.element2.removeAttribute('disabled');
  }
}
