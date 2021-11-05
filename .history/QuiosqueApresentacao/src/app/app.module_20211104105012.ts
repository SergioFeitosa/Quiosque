import { CarrinhoListComponent } from './carrinho/carrinho-list.component';
import { CarrinhoUpdateComponent } from './carrinho/carrinho-update.component';
import { CarrinhoReadComponent } from './carrinho/carrinho-read.component';
import { CarrinhoCreateComponent } from './carrinho/carrinho-create.component';
import { CarrinhoDeleteComponent } from './carrinho/carrinho-delete.component';
import { PedidoDeleteComponent } from './pedido/pedido-delete.component';
import { ContaListComponent } from './conta/conta-list.component';
import { ProdutoCreateComponent } from './produto/produto-create.component';
import { PedidoUpdateComponent } from './pedido/pedido-update.component';
import { ProdutoReadComponent } from './produto/produto-read.component';
import { PedidoReadComponent } from './pedido/pedido-read.component';
import { PedidoCreateComponent } from './pedido/pedido-create.component';
import { ModalModule } from './modal/modal.module';
import { FechamentoListComponent } from './fechamento/fechamento-list.component';
import { EntregaListComponent } from './entrega/entrega-list.component';
import { EntregaUpdateComponent } from './entrega/entrega-update.component';
import { PedidoListComponent } from './pedido/pedido-list.component';
import { CardapioPrincipalComponent } from './cardapioprincipal/cardapio-principal.component';
import { Error404Component } from './Error404/error-404.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';

import { StarComponent } from './star/star.component';
import { ProdutoListComponent } from './produto/produto-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    ProdutoReadComponent,
    ProdutoCreateComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CardapioPrincipalComponent,
    PedidoListComponent,
    PedidoCreateComponent,
    PedidoReadComponent,
    PedidoUpdateComponent,
    PedidoDeleteComponent,
    EntregaListComponent,
    EntregaUpdateComponent,
    FechamentoListComponent,
    ContaListComponent,
    CarrinhoListComponent,
    CarrinhoCreateComponent,
    CarrinhoReadComponent,
    CarrinhoUpdateComponent,
    CarrinhoDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'cardapioPrincipal', pathMatch: 'full'
      },
      {
        path: 'cardapioPrincipal', component: CardapioPrincipalComponent
      },
      {
        path: 'produto/:categoryId', component: ProdutoListComponent
      },
      {
        path: 'carrinho', component: PedidoListComponent
      },
      {
        path: 'carrinho/:id', component: PedidoListComponent
      },
      {
        path: 'carrinho/telefone/:telefone', component: PedidoListComponent
      },
      {
        path: 'carrinho/update/:id', component: PedidoUpdateComponent
      },
      {
        path: 'pedido/delete/:id', component: PedidoDeleteComponent
      },
      {
        path: 'pedido', component: PedidoListComponent
      },
      {
        path: 'pedido/:id', component: PedidoListComponent
      },
      {
        path: 'pedido/telefone/:telefone', component: PedidoListComponent
      },
      {
        path: 'pedido/update/:id', component: PedidoUpdateComponent
      },
      {
        path: 'pedido/delete/:id', component: PedidoDeleteComponent
      },
      {
        path: 'entrega', component: EntregaListComponent
      },
      {
        path: 'entrega/update/:id', component: EntregaUpdateComponent
      },
      {
        path: 'conta', component: ContaListComponent
      },
      {
        path: 'fechamento', component: FechamentoListComponent
      },
      {
        path: '**', component: Error404Component
      }

    ]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
