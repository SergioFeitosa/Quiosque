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

  validarTelefone(): void {

    if ( this.telefone > 0) {
      this.buttonHide = false;
    } else {
      this.buttonHide = true;
    }

  }

  validarCodigo(): void {

    if (this.codigo > 0) {
      console.log('recebe ' + environment.buttonDisabled);
      environment.buttonDisabled = false;
      console.log('recebe ' + environment.buttonDisabled);
      } else {
        console.log('recebe ' + environment.buttonDisabled);
        environment.buttonDisabled = false;
        console.log('recebe ' + environment.buttonDisabled);
      }

  }

}


