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

    this.element1 = document.getElementById('desabilitado1') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;
    this.element3 = document.getElementById('desabilitado3') as HTMLElement;
    this.element4 = document.getElementById('desabilitado4') as HTMLElement;
    this.element5 = document.getElementById('desabilitado52') as HTMLElement;
    this.element6 = document.getElementById('desabilitado62') as HTMLElement;
    this.element7 = document.getElementById('desabilitado72') as HTMLElement;
    this.element8 = document.getElementById('desabilitado82') as HTMLElement;

    this.element1.removeAttribute('disabled');
    this.element2.removeAttribute('disabled');
    this.element3.removeAttribute('disabled');
    this.element4.removeAttribute('disabled');
    this.element5.removeAttribute('disabled');
    this.element6.removeAttribute('disabled');
    this.element7.removeAttribute('disabled');
    this.element8.removeAttribute('disabled');
  }
}
