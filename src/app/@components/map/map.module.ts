import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MapComponent
  ],
})
export class MapModule { }
