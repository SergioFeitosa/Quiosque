import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = false;

  // tslint:disable-next-line:typedef
  receberEvento(validarCodigo){
    console.log('')
    this.buttonDisabled = !this.buttonDisabled;
  }
}

