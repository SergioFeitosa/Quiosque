import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonDisabled: boolean;

  receberEvento(validarCodigo){
    this.buttonDisabled = !this.buttonDisabled;
  }
}
