import { CardapioPrincipalComponent } from '../cardapioprincipal/cardapio-principal.component';
import { NavBarService } from './nav-bar.service';
import { Component, Injectable, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  constructor(private navBarService: NavBarService){}

  ngOnInit(): void {

  }


  enviarCodigo(): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    const codigoGerado = Math.random() * this.telefone;
    this.navBarService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());

  }


}

