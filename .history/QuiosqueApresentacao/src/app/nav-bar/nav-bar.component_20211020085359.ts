import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Component, Injectable } from '@angular/core';
import { CardapioPrincipalComponent } from '../cardapioprincipal/cardapio-principal.component';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = true;

  constructor() {
    console.log('constructor1' + environment.buttonDisabled);
    this.buttonDisabled = environment.buttonDisabled;
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
      this.buttonDisabled = false;
      
      console.log('passei');
    } else {
      this.buttonDisabled = true;
    }

  }


}

