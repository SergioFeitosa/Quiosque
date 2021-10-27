import { PedidoService } from './../pedido/pedido.service';
import { NavBarService } from './nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta/conta.service';
import { Pedido } from '../pedido/pedido';
import { environment } from 'src/environments/environment';
import { Conta } from '../conta/conta';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  filteredPedidos: Pedido[] = [];
  pedidos: Pedido[] = [];
  pedido: Pedido;
  telefone: number;
  codigo: number;

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  contas: Conta[];

  conta: Conta;

  constructor(
    private navBarService: NavBarService,
    private pedidoService: PedidoService,
    private contaService: ContaService) { }

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
    this.pedidoService.read().subscribe(pedidos => {
      this.pedidos = pedidos;
      this.filteredPedidos = this.pedidos.filter((pedido: Pedido) => pedido.telefone === environment.telefone);

      for (const pedido of this.filteredPedidos) {

        this.conta.id = pedido.id;
        console.log('pedido ' + pedido.produtoId);
      }

    });



    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
  }


}

