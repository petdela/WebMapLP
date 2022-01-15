import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSendComponent } from './calendar-send.component';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [CalendarSendComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports : [CalendarSendComponent],
})
export class CalendarSendModule { }
