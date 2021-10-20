import { NgModule } from '@angular/core';
import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

@NgModule({
  providers: [NavBarComponent],
})

export class CardapioPrincipalComponent {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = true;


  // tslint:disable-next-line:typedef
  updateButtonDisabled() {
    return this.buttonDisabled = environment.buttonDisabled;
  }
}
