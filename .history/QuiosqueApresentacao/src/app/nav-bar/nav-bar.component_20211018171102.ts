import { IdentificacaoService } from './../identificacao/identificacao.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../identificacao/produto';

@Component ({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent implements OnInit {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  ngOnInit(): void {
    this.buttonHide = true;
  }



// tslint:disable-next-line:typedef
set updateButtonHide(telefone) {
  this.buttonHide = false;
}

}


