import { ContaListComponent } from './conta/conta-list.component';
import { ProdutoCreateComponent } from './produto/produto-create.component';
import { ProdutoCreateComponent } from './produto/produto-create.component';
import { ProdutoReadComponent } from './produto/produto-read.component';
import { PedidoReadComponent } from './pedido/pedido-read.component';
import { PedidoCreateComponent } from './pedido/pedido-create.component';
import { ModalModule } from './modal/modal.module';
import { FechamentoListComponent } from './fechamento/fechamento-list.component';
import { EntregaListComponent } from './entrega/entrega-list.component';
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
    EntregaListComponent,
    FechamentoListComponent,
    ContaListComponent,
    PedidoUpdateComponent
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
        path: 'pedido', component: PedidoListComponent
      },
      {
        path: 'pedido/:id', component: PedidoListComponent
      },
      {
        path: 'pedido/telefone/:telefone', component: PedidoListComponent
      },
      {
        path: 'entrega', component: EntregaListComponent
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
