import { Component, Input, OnInit, SimpleChanges, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Conta } from '../conta/conta';
import { Pedido } from '../pedido/pedido';
import { Produto } from '../produto/produto';
import { PedidoService } from './../pedido/pedido.service';

@Component({
  selector: 'app-caminho-menu',
  templateUrl: './caminho-menu.component.html',
  styleUrls: ['./caminho-menu.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CaminhoMenuComponent implements OnInit {

  fundoColoridoCardapio = environment.fundoColoridoCardapio;
  fundoColoridoPedido = environment.fundoColoridoPedido;
  fundoColoridoCozinha = environment.fundoColoridoCozinha;
  fundoColoridoEntrega = environment.fundoColoridoEntrega;
  fundoColoridoConta = environment.fundoColoridoConta;

  filteredPedidos: Pedido[] = [];
  pedidos: Pedido[] = [];
  pedido: Pedido;
  telefone: number;
  codigo: number;
  produto: Produto;

  contaValorTotal: number;


  constructor(
    private pedidoService: PedidoService,

  ) { }

  ngOnInit(): void {

    this.fundoColoridoCardapio = environment.fundoColoridoCardapio;
    this.fundoColoridoPedido = environment.fundoColoridoPedido;
    this.fundoColoridoCozinha = environment.fundoColoridoCozinha;
    this.fundoColoridoEntrega = environment.fundoColoridoEntrega;
    this.fundoColoridoConta = environment.fundoColoridoConta;
  }

}
