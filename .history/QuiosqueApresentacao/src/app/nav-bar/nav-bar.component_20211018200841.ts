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

    if ( this.telefone > 0) {
      this.buttonHide = false;
    } else {
      this.buttonHide = true;
    }

  }

  validarCodigo(): void {

    console.log('1codigo = ' + this.codigo );
    console.log('this.buttonDisabled = ' + this.buttonDisabled );
    console.log('environment.buttonDisabled = ' + environment.buttonDisabled );
    if (this.codigo > 0) {
      this.buttonDisabled = false;
      environment.buttonDisabled = false;
      console.log('2codigo = ' + this.codigo );
      console.log('this.buttonDisabled = ' + this.buttonDisabled );
      console.log('environment.buttonDisabled = ' + environment.buttonDisabled );
      } else {
      this.buttonDisabled = true;
      environment.buttonDisabled = thru;
      console.log('3codigo = ' + this.codigo );
      console.log('this.buttonDisabled = ' + this.buttonDisabled );
      console.log('environment.buttonDisabled = ' + environment.buttonDisabled );
      }

  }

}


