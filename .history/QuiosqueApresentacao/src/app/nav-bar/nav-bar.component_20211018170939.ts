import { IdentificacaoService } from './../identificacao/identificacao.service';
import { Component } from '@angular/core';
import { Produto } from '../identificacao/produto';

@Component ({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'

})
export class NavBarComponent {

  telefone: number;
  codigo: number;
  // tslint:disable-next-line:no-inferrable-types
  buttonHide: boolean = true;

  ngOnInit(): void {
    this._categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this._produtos = this.identificacaoService.retrieveAll().
    filter((produto: Produto) => produto.category.toLocaleLowerCase() === this._categoryId.toLocaleLowerCase());
    this.filteredProdutos = this._produtos;
  }



// tslint:disable-next-line:typedef
set updateButtonHide(telefone) {
  this.buttonHide = false;
}

}


