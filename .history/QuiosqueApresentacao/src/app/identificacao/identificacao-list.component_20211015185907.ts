import { Produto } from './produto';
import { Component } from '@angular/core';
@Component({
  selector: 'app-identificacao-list',
  templateUrl: './identificacao-list.component.html',
})

export class IdentificacaoListComponent implements OnInit {

  produtos: Produto[] = [];
}
