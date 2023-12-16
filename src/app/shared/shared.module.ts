import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ToastrModule,
    NgxDropzoneModule,
  ],
  exports: [
    MaterialModule,
    ToastrModule,
    NgxDropzoneModule
  ]
})
export class SharedModule { }
