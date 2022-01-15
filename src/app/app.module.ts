import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarSendModule } from './@components/calendar-send/calendar-send.module';
import { EventosAdminModule } from './@components/eventos-admin/eventos-admin.module';
import { MapComponent } from './@components/map/map.component';
import { NavbarComponent } from './@components/navbar/navbar.component';
import { EventosUpdateModule } from './@components/eventos-update/eventos-update.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarSendModule,
    EventosAdminModule,
    EventosUpdateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
