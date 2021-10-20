import { Component, Injectable, Output, EventEmitter } from '@angular/core';
import { CardapioPrincipalComponent } from '../cardapioprincipal/cardapio-principal.component';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  providers: [CardapioPrincipalComponent ],
})
export class NavBarComponent {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  element: HTMLElement;

  constructor( private cardapioPrincipalComponent: CardapioPrincipalComponent
    ) {
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
      this.cardapioPrincipalComponent.updateClassDisabled();
      this.element = document.getElementById('ButtonX') as HTMLElement;
      this.element.style.disabled = 'false";
    }

  }


}

