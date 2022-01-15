import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosAdminComponent } from './eventos-admin.component';



@NgModule({
  declarations: [EventosAdminComponent],
  imports: [
    CommonModule
  ],
  exports: [EventosAdminComponent],
})
export class EventosAdminModule { }
