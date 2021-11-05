import { environment } from 'src/environments/environment';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './carrinho';
import { Component, OnInit } from '@angular/core';
import { Entrega } from '../entrega/entrega';
import { EntregaService } from '../entrega/entrega.service';
@Component({
  templateUrl: './carrinho-list.component.html',
})

export class CarrinhoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  displayStyle: string;

  filteredCarrinhos: Carrinho[] = [];
  carrinhos: Carrinho[] = [];
  // tslint:disable-next-line:variable-name
  entrega: Entrega = {
    id: 0,
    pedidoId: 0,
    produtoId: 0,
    produtoImageUrl: '',
    telefone: environment.telefone,
    local: 'teste',
    observacao: 'teste',
    isencao: true,
    releaseDate: new Date(),
    entregaDate: new Date(),
  };

  produtoId: number;
  produtoName: string;
  produtoImageUrl: string;
  produtoDescricao: string;
  produtoPreco: number;
  produtoTempoPreparacao: string;
  produtoAvaliacao: number;

  carrinhoId: 0;
  carrinhoTelefone: number;
  carrinhoLocal: string;
  carrinhoObservacao: string;
  carrinhoIsencao: boolean;
  carrinhoReleaseDate: Date;
  carrinhoEntrega: boolean;

  produto: Produto;


  // tslint:disable-next-line:variable-name
  carrinho: Carrinho = {
    id: 0,
    produtoId: 0,
    produtoImageUrl: '',
    produtoTempoPreparacao: '',
    telefone: environment.telefone,
    local: 'teste',
    observacao: 'teste',
    isencao: true,
    releaseDate: new Date(),
    entrega: false,
  };

  // tslint:disable-next-line:variable-name
  _carrinhos: Carrinho[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutoService,
    private entregaService: EntregaService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.carrinhoService.read().subscribe(carrinhos => {
      this.carrinhos = carrinhos;
      this.filteredCarrinhos = this.carrinhos.filter((carrinho: Carrinho) => carrinho.telefone === environment.telefone)
                                         .filter((carrinho: Carrinho) => carrinho.entrega !== true);

    });
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCarrinhos =
      this.carrinhos.filter((carrinho: Carrinho) => carrinho.telefone.toString().indexOf(this._filterBy.toString()) > -1);
    }

  entregaCreate(carrinhoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.carrinhoService.readById(carrinhoId).subscribe(carrinho => {
      this.carrinho = carrinho;

      this.produtoId = this.carrinho.produtoId;
      this.produtoImageUrl = this.carrinho.produtoImageUrl;
      this.produtoTempoPreparacao = this.carrinho.produtoTempoPreparacao;
      this.carrinhoTelefone = environment.telefone;
      this.carrinhoLocal = environment.local;
      this.carrinhoObservacao = this.carrinho.observacao;
      this.carrinhoIsencao = this.carrinho.isencao;
      this.carrinhoReleaseDate = this.carrinho.releaseDate;
      this.carrinhoEntrega = this.carrinho.entrega;

      if (this.carrinhoEntrega !== true) {

        this.carrinho.entrega = true;
        this.atualizarCarrinho(carrinho);

        this.produtoService.readById(this.produtoId).subscribe(produto => {
          this.produto = produto;

          this.produtoName = this.produto.name;
          this.produtoPreco = this.produto.price;
          this.produtoImageUrl = this.produto.imageUrl;
          this.produtoTempoPreparacao = this.produto.preparationTime;
          this.produtoAvaliacao = this.produto.rating;
          this.produtoDescricao = this.produto.description;

          this.entrega.carrinhoId = carrinhoId;
          this.entrega.produtoImageUrl = this.produtoImageUrl;
          this.entrega.telefone = environment.telefone;
          this.entrega.local = environment.local;
          this.entrega.observacao = this.carrinhoObservacao;
          this.entrega.isencao = this.carrinhoIsencao;
          this.entrega.releaseDate = this.carrinhoReleaseDate;
          this.entrega.entregaDate = null;

          this.entregaService.create(this.entrega).subscribe(() => {
            this.entregaService.showMessage('Entrega solicitado');
          }
          );
        });
      }
    });
  }

  // tslint:disable-next-line:typedef
  atualizarCarrinho(carrinho: Carrinho) {
    this.carrinhoService.update(carrinho).subscribe(() => {
      this.carrinhoService.showMessage('Carrinho Atualizado');
    });
  }

}
