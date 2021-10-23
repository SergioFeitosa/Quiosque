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
  buttonHide: boolean = false;

}

const updateUser(user){
  this.myservice.getUpdate(user.id)
  .subscribe(newitem => {
    this.updateArray(newitem);
  });
}