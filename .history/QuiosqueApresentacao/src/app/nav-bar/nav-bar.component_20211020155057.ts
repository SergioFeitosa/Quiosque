import { Component, Injectable, OnInit } from '@angular/core';
import { CardapioPrincipalComponent } from '../cardapioprincipal/cardapio-principal.component';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  providers: [CardapioPrincipalComponent ],
})
export class NavBarComponent implements OnInit{

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  constructor( private cardapioPrincipalComponent: CardapioPrincipalComponent
    ) {
  }

  ngOnInit(): void {

    if (this.telefone > 0 && this.codigo > 0) {
      console.log('');
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
    }

  }


}

