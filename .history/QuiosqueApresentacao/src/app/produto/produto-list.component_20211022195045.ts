import { ConfirmDialogService } from './../confirm-dialog/confirm-dialog.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Produto } from './produto';
import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './produto-list.component.html',
})

export class ProdutoListComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _categoryId: string;

  filteredProdutos: Produto[] = [];
  // tslint:disable-next-line:variable-name
  _produtos: Produto[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private produtoService: ProdutoService,
              private activatedRoute: ActivatedRoute,
              private confirmDialogService: ConfirmDialogService   ){

  }

  ngOnInit(): void {
    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this._produtos = this.produtoService.retrieveAll().
    filter((produto: Produto) => produto.category.toLocaleLowerCase() === this._categoryId.toLocaleLowerCase());
    this.filteredProdutos = this._produtos;
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredProdutos =
    this._produtos.filter((produto: Produto) => produto.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  // tslint:disable-next-line:typedef
  showDialog(): void {
    this.confirmDialogService.confirmThis('Are you sure to delete?', console.log('cliquei');
    }, function() {
      console.log('nao');
    })
  }

  

}
