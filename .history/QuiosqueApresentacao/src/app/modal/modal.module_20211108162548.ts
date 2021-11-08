import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalCarrinhoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalComponent,
  ]
})
export class ModalModule {

}
