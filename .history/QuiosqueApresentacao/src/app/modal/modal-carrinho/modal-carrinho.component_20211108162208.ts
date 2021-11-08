import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-carrinho',
  templateUrl: './modal-carrinho.component.html',
  styleUrls: ['./modal-carrinho.component.scss']
})
export class ModalCarrinhoComponent implements OnInit {
 // tslint:disable-next-line:no-inferrable-types
 mostrar: boolean = false;

 // tslint:disable-next-line:typedef
 toggle() {
   this.mostrar = !this.mostrar;
 }

}
