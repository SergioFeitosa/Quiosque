import { Produto } from '../produto/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './carrinho';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido/pedido';
import { PedidoService } from '../pedido/pedido.service';
import { environment } from 'src/environments/environment';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  templateUrl: './carrinho-list.component.html',
})

export class CarrinhoListComponent implements OnInit {

  private updateSubscription: Subscription;

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  filteredCarrinhos: Carrinho[] = [];
  carrinhos: Carrinho[] = [];
  // tslint:disable-next-line:variable-name
  pedido = {} as Pedido;

  produto = {} as Produto;

  carrinho = {} as Carrinho;
  // tslint:disable-next-line:variable-name
  _carrinho = {} as Carrinho;

  // tslint:disable-next-line:variable-name
  _carrinhos: Carrinho[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;


  constructor(
    private carrinhoService: CarrinhoService,
    private pedidoService: PedidoService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.updateStats()
    };

    if (+environment.telefone === 99999999999 || +environment.telefone === 99999999997) {
      this.carrinhoService.read().subscribe(carrinhos => {
        this.carrinhos = carrinhos;
        this.filteredCarrinhos = this.carrinhos
          .filter((carrinho: Carrinho) => carrinho.enviadoPedido !== true);

      });
    } else {

      this.carrinhoService.read().subscribe(carrinhos => {
        this.carrinhos = carrinhos;
        this.filteredCarrinhos = this.carrinhos
          .filter((carrinho: Carrinho) => carrinho.telefone === environment.telefone)
          .filter((carrinho: Carrinho) => carrinho.enviadoPedido !== true);

      });
    }
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    if (+environment.telefone === 99999999999 || +environment.telefone === 99999999997) {

      this.filteredCarrinhos =
        this.carrinhos
          .filter((carrinho: Carrinho) => carrinho.enviadoPedido !== true)
          .filter((carrinho: Carrinho) => carrinho.produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

    } else {

      this.filteredCarrinhos =
        this.carrinhos
          .filter((carrinho: Carrinho) => carrinho.enviadoPedido !== true)
          .filter((carrinho: Carrinho) => carrinho.telefone === environment.telefone)
          .filter((carrinho: Carrinho) => carrinho.produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

    }
  }
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  // tslint:disable-next-line:typedef
  openPopup(carrinhoId: number): void {
    // tslint:disable-next-line:no-unused-expression
    this.carrinhoService.readById(carrinhoId).subscribe(carrinho => {
      this.carrinho = carrinho;
      this.produto = this.carrinho.produto;
    });

    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
    // tslint:disable-next-line:prefer-const
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

  }


  pedidoCreate(carrinhoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.carrinhoService.readById(carrinhoId).subscribe(carrinho => {
      this.carrinho = carrinho;

      if (this.carrinho.enviadoPedido !== true) {

        this.carrinho.enviadoPedido = true;
        this.atualizarCarrinho(carrinho);


        this.pedido.produto = this.carrinho.produto;
        this.pedido.telefone = this.carrinho.telefone;
        this.pedido.local = this.carrinho.local;
        this.pedido.quantidade = this.carrinho.quantidade;
        this.pedido.observacao = this.carrinho.observacao;
        this.pedido.isencao = this.carrinho.isencao;
        this.pedido.releaseDate = this.carrinho.releaseDate;
        this.pedido.enviadoEntrega = false;

        this.pedidoService.create(this.pedido).subscribe(() => {
          this.pedidoService.showMessage('Pedido solicitado');
        });
      }
    });
  }


  // tslint:disable-next-line:typedef
  atualizarCarrinho(carrinho: Carrinho) {
    this.carrinhoService.update(carrinho).subscribe(() => {
      this.carrinhoService.showMessage('Carrinho Atualizado');
      this.router.navigate(['/carrinho']);
    });
  }
}

