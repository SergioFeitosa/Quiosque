import { PedidoService } from './../pedido/pedido.service';
import { NavBarService } from './nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta/conta.service';
import { Pedido } from '../pedido/pedido';
import { environment } from 'src/environments/environment';
import { Conta } from '../conta/conta';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})
export class NavBarComponent implements OnInit {

  navbarOpen = false;

  telefone: number;
  codigo: number;

  constructor(
    private navBarService: NavBarService,
    ) { }

  ngOnInit(): void {
  }


  enviarCodigo(): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    const codigoGerado = Math.random() * this.telefone;
    this.navBarService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());

  }

// tslint:disable-next-line:typedef
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

