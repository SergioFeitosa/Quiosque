import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  ngOnInit(): void {

    if (this.telefone > 0 && this.codigo > 0) {
      console.log('carregando vazio');
    }
  }

}

