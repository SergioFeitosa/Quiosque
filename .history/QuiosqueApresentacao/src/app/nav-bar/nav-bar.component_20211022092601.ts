import { NavBarService } from './nav-bar.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  telefone: number;
  codigo: number;

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

