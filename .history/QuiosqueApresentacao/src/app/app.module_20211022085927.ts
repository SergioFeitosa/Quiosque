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
@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CardapioPrincipalComponent,
    PedidoListComponent,
    EntregaListComponent,
    FechamentoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
        path: 'entrega', component: EntregaListComponent
      },
      {
        path: 'fechamento', component: FechamentoListComponent
      },
      {
        path: '**', component: Error404Component
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
