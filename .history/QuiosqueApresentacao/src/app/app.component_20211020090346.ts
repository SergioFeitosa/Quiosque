import { Component } from '@angular/core';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    environment.buttonDisabled = true;
    console.log('cons')
  }

}
