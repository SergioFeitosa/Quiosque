import { IdentificacaoService } from './../identificacao/identificacao.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../identificacao/produto';

@Component ({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = true;
  buttonDisabled: boolean = true;

// tslint:disable-next-line:typedef
set updateButtonDisabled(telefone) {

  if (telefone !== undefined) {
    // OK
    console.log(this.buttonDisabled = false);
  }

  this.buttonDisabled = false;
}

}


