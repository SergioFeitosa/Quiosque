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
})
export class NavBarComponent implements OnInit {

  navbarOpen = false;

  filteredPedidos: Pedido[] = [];
  pedidos: Pedido[] = [];
  pedido: Pedido;
  telefone: number;
  codigo: number;
  produto: Produto;

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  contas: Conta[] = [];
  conta: Conta;

  contaValorTotal: number;

  produtoId: number;
  produtoName: string;
  produtoImageUrl: string;
  produtoDescricao: string;
  produtoPreco: number;
  produtoTempoPreparacao: string;
  produtoAvaliacao: number;

  pedidoId: 0;
  pedidoTelefone: number;
  pedidoLocal: string;
  pedidoObservacao: string;
  pedidoIsencao: true;
  pedidoReleaseDate: string;
  pedidoReleaseTime: string;

  constructor(
    private navBarService: NavBarService,
    private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private contaService: ContaService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:new-parens
    this.conta = new Conta;
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

      this.contaValorTotal = 0;

      for (const pedido of this.filteredPedidos) {
        this.produtoService.readById(pedido.produto.id).subscribe(produto => {

          this.conta = new Conta();

          this.conta.ped
          this.conta.quantidade = 1;
          this.conta.valorProdutoUnitario =  this.produto.price;
          this.conta.valorProdutoTotal = this.conta.valorProdutoUnitario * this.conta.quantidade;
          this.contaValorTotal = this.contaValorTotal + this.conta.valorProdutoTotal;
          this.contas.push(this.conta);

        });
      }
    });
    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {

    this.contas = [];
    this.displayStyle = 'none';
  }

// tslint:disable-next-line:typedef
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

