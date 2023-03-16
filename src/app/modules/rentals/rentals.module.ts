import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalsRoutingModule } from './rentals-routing.module';
import { RentalsComponent } from './pages/rentals/rentals.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PropertyModule } from '../property/property.module';


@NgModule({
  declarations: [
    RentalsComponent
  ],
  imports: [
    CommonModule,
    RentalsRoutingModule,
    SharedModule,
    FormsModule,
    PropertyModule
  ]
})
export class RentalsModule { }
