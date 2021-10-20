import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardapioPrincipalComponent } from '../cardapioprincipal/cardapio-principal.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  // tslint:disable-next-line:typedef-whitespace
  constructor(public router: Router)
{

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
      this.router.navigate(['/cardapioPrincipal']);
      console.log('passeixx ' + environment.buttonDisabled);
    } else {
      environment.buttonDisabled = true;
      console.log('passei');
    }

  }

}


function ngOnInit(): any {
  throw new Error('Function not implemented.');
}

