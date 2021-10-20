import { environment } from './../../environments/environment';
import { Component, NgModule } from '@angular/core';

@Component({
  templateUrl: './cardapio-principal.component.html',
})

@NgModule({
  providers: [UserService],
})

export class CardapioPrincipalComponent {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = true;


  // tslint:disable-next-line:typedef
  updateButtonDisabled() {
    return this.buttonDisabled = environment.buttonDisabled;
  }
}
