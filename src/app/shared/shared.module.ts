import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ToastrModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
  ],
  exports: [MaterialModule, ToastrModule, NgxDropzoneModule,ReactiveFormsModule,NavbarComponent,SidebarComponent],
})
export class SharedModule {}
