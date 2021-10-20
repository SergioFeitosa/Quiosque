import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled = environment.buttonDisabled;

  validarTelefone(): void {

    if (this.telefone === null) {
      // OK
      this.buttonHide = true;
    } else {
      this.buttonHide = false;
    }

  }

// tslint:disable-next-line:typedef
set updateButtonHide(telefone) {

  if (telefone === undefined) {
    // OK
    this.buttonHide = false;
  }

}
// tslint:disable-next-line:typedef
set updateButtonDisabled(codigo) {

  if (codigo !== undefined) {
    // OK
    console.log(this.buttonDisabled = false);
    this.buttonDisabled = false;
  }

}

}


