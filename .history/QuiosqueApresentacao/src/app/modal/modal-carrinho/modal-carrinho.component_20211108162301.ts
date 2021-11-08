import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-carrinho',
  templateUrl: './modal-carrinho.component.html',
  styleUrls: ['./modal-carrinho.component.scss']
})
export class ModalCarrinhoComponent implements OnInit {
 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }
 // tslint:disable-next-line:no-inferrable-types
 // tslint:disable-next-line:member-ordering
 mostrar: boolean = false;

 // tslint:disable-next-line:typedef
 toggle() {
   this.mostrar = !this.mostrar;
 }

}
