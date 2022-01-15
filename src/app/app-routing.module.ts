import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarSendComponent } from './@components/calendar-send/calendar-send.component';
import { EventosAdminComponent } from './@components/eventos-admin/eventos-admin.component';
import { EventosUpdateComponent } from './@components/eventos-update/eventos-update.component';
import { MapComponent } from './@components/map/map.component';

const routes: Routes = [
  {path: '', component:MapComponent},
  {path: 'eventos/save', component: EventosAdminComponent},
  {path: 'eventos/update/:id', component: EventosUpdateComponent},
  {path: 'calendar/:id', component: CalendarSendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
