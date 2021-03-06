import { StarComponent } from './../star/star.component';
import { CarrinhoDeleteComponent } from './carrinho-delete.component';
import { CarrinhoUpdateComponent } from './carrinho-update.component';
import { CarrinhoReadComponent } from './carrinho-read.component';
import { CarrinhoCreateComponent } from './carrinho-create.component';
import { CarrinhoListComponent } from './carrinho-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoModule } from '../produto/produto.module';



@NgModule({
  declarations: [
    CarrinhoListComponent,
    CarrinhoCreateComponent,
    CarrinhoReadComponent,
    CarrinhoUpdateComponent,
    CarrinhoDeleteComponent,

  ],
  imports: [
    CommonModule,

  ]
})

export class CarrinhoModule {

 }
