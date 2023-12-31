import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DeleteItemComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ToastrModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  exports: [MaterialModule,FormsModule, ToastrModule, NgxDropzoneModule,ReactiveFormsModule,NavbarComponent,SidebarComponent,MatDialogModule,MatPaginatorModule],
})
export class SharedModule {}
