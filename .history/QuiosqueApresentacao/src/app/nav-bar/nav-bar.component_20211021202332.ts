import { CardapioPrincipalComponent } from '../cardapioprincipal/cardapio-principal.component';
import { NavBarService } from './nav-bar.service';
import { Component, Injectable, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  providers: [CardapioPrincipalComponent],
})
export class NavBarComponent implements OnInit {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  constructor(private navBarService: NavBarService){}

  ngOnInit(): void {

    if (this.telefone > 0 && this.codigo > 0) {
      console.log('carregando vazio');
    }
  }


  enviarCodigo(): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    const codigoGerado = Math.random() * this.telefone;
    this.navBarService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());

  }


}

