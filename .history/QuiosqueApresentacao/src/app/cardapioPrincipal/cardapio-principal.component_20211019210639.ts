import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = true;


  // tslint:disable-next-line:typedef
  updateButtonDisabled() {
    return this.buttonDisabled = environment.buttonDisabled;
    console.log('passei ccccccc');

  }

  validarTelefone(): void {

    if (this.telefone > 0) {
      this.buttonHide = false;
    } else {
      this.buttonHide = true;
    }

  }

  validarCodigo(): void {

    if (this.codigo > 0) {
      // tslint:disable-next-line:semicolon
      environment.buttonDisabled = false;
    } else {
      environment.buttonDisabled = true;
    }

  }

}