import { environment } from './../../environments/environment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent {

  @Output() buttonDisabled: boolean ;

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  validarTelefone(): void {

    if (this.telefone > 0) {
      this.buttonHide = false;
    } else {
      this.buttonHide = true;
    }

  }

  validarCodigo(): void {

    this.alterarCodigo.emit(true);

    if (this.codigo > 0) {
      environment.buttonDisabled = false;
    } else {
      environment.buttonDisabled = true;
    }

  }

}


