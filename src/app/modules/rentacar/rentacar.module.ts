import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentacarRoutingModule } from './rentacar-routing.module';
import { RentacarComponent } from './pages/rentacar/rentacar.component';
import { BookingComponent } from './pages/shared/booking/booking.component';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';





@NgModule({
  declarations: [
    RentacarComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    RentacarRoutingModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule
  ]
})
export class RentacarModule { }
