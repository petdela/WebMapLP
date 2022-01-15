import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosUpdateComponent } from './eventos-update.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [EventosUpdateComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class EventosUpdateModule { }
