import { NavBarService } from './nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta/conta.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  telefone: number;
  codigo: number;

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  constructor(private navBarService: NavBarService,
              private contaService: ContaService){}

  ngOnInit(): void {

  }


  enviarCodigo(): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    const codigoGerado = Math.random() * this.telefone;
    this.navBarService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());

  }

      // tslint:disable-next-line:typedef
      openPopup(): void {
        thiscontaService.
        this.displayStyle = 'block';
      }

      // tslint:disable-next-line:typedef
      closePopup() {
        this.displayStyle = 'none';
      }


}

