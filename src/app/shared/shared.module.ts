import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ToastrModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
  ],
  exports: [MaterialModule, ToastrModule, NgxDropzoneModule,ReactiveFormsModule,],
})
export class SharedModule {}
