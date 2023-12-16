import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ToastrModule,
    NgxDropzoneModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MaterialModule,
    ToastrModule,
    NgxDropzoneModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule {}
