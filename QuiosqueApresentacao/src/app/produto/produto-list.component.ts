import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Carrinho } from '../carrinho/carrinho';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';
@Component({
  templateUrl: './produto-list.component.html',
})

export class ProdutoListComponent implements OnInit {

  buttonDisabled: boolean;
  telefone: number;
  codigo: number;
  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  element4: HTMLElement;
  element5: HTMLElement;
  element6: HTMLElement;
  element7: HTMLElement;
  element8: HTMLElement;


  login: boolean;

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  modulo: string;

  // tslint:disable-next-line:variable-name
  produto = {} as Produto;

  // tslint:disable-next-line:variable-name
  carrinho = {} as Carrinho;

  produtos: Produto[] = [];

  filteredProdutos: Produto[] = [];
  // tslint:disable-next-line:variable-name
  _produtos: Produto[] = [];
  // tslint:disable-next-line:variable-name

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    // this.modulo = 'Cardápio';

    this.carrinho.quantidade = 1;

    //this.telefone = environment.telefone;
    this.login = environment.login;

    environment.fundoColoridoCardapio = true;
    environment.fundoColoridoPedido = false;
    environment.fundoColoridoCozinha = false;
    environment.fundoColoridoEntrega = false;
    environment.fundoColoridoConta = false;

    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');

    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos.filter((produto: Produto) =>
        produto.categoria.toLocaleLowerCase() === this._categoryId.toLocaleLowerCase());
      this.filteredProdutos = this.produtos;
    });

  }


  // tslint:disable-next-line:typedef
  minus() {
    if (this.carrinho.quantidade !== 1) {
      this.carrinho.quantidade--;
    }
  }

  // tslint:disable-next-line:typedef
  plus() {
    if (this.carrinho.quantidade !== 10) {
      this.carrinho.quantidade++;
    }
  }



  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredProdutos =
      this.produtos.filter((produto: Produto) =>
        produto.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  // tslint:disable-next-line:typedef
  openPopup(produtoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.produtoService.readById(produtoId).subscribe(product => {
      this.produto = product;

    });

    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
  }

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle2 = 'none';

  // tslint:disable-next-line:typedef
  openPopup2(): void {

    this.displayStyle2 = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup2() {
    this.displayStyle2 = 'none';
  }

  carrinhoCreate(produtoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.produtoService.readById(produtoId).subscribe(product => {
      this.produto = product;

      this.carrinho.enviado = false;
      this.carrinho.isencao = false;
      this.carrinho.local = environment.local;
      this.carrinho.dataCriacao = new Date();
      this.carrinho.telefone = environment.telefone;

      this.carrinho.produto = this.produto;

      this.carrinhoService.create(this.carrinho).subscribe(() => {
        this.carrinhoService.showMessage('Produto adicionado no pedido');
      });
    });

    this.closePopup();
  }

  validarTelefone(): void {

    if (this.telefone > 0) {
      environment.telefone = this.telefone;
      this.enviarCodigo();
    }
  }

  validarCodigo(): void {

    if (environment.codigo > 0) {
      environment.codigo = this.codigo;
      // tslint:disable-next-line:semicolon
      // this.updateClassDisabled();
      this.closePopup2();
      environment.login = true;
      this.login = environment.login;
      window.alert("Logged in");
    }
  }

  enviarCodigo(): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    const codigoGerado = Math.random() * this.telefone;
    this.loginService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());
  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;
    this.element1 = document.getElementById('desabilitado1') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;
    this.element3 = document.getElementById('desabilitado3') as HTMLElement;
    this.element4 = document.getElementById('desabilitado4') as HTMLElement;
    this.element5 = document.getElementById('desabilitado5') as HTMLElement;
    this.element6 = document.getElementById('desabilitado6') as HTMLElement;
    this.element7 = document.getElementById('desabilitado7') as HTMLElement;
    this.element8 = document.getElementById('desabilitado8') as HTMLElement;

    this.element1.removeAttribute('disabled');
    this.element2.removeAttribute('disabled');
    this.element3.removeAttribute('disabled');
    this.element4.removeAttribute('disabled');
    this.element5.removeAttribute('disabled');
    this.element6.removeAttribute('disabled');
    this.element7.removeAttribute('disabled');
    this.element8.removeAttribute('disabled');
  }


}
