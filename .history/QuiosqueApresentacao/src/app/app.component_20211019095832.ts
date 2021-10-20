import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonDisabled: boolean;

  // tslint:disable-next-line:typedef
  receberEvento(validarCodigo){
    this.buttonDisabled = !this.buttonDisabled;
  }
}

