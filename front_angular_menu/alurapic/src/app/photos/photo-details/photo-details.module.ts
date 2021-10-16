import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import {  RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/phto-owner-only.directive';

@NgModule({
  declarations: [
                PhotoDetailsComponent,
                PhotoCommentsComponent,
                PhotoOwnerOnlyDirective
  ],
  exports: [
                PhotoDetailsComponent,
                PhotoCommentsComponent
  ],
  imports: [
      CommonModule,
      PhotoModule,
      RouterModule,
      ReactiveFormsModule,
      VMessageModule,
      ShowIfLoggedModule
  ]
})

export class PhotoDetailsModule {}
