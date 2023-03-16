import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { UnitsComponent } from './pages/units/units.component';


@NgModule({
  declarations: [
    UnitsComponent
  ],

  imports: [
    CommonModule,
    PropertyRoutingModule
  ],

  exports: [
    UnitsComponent
  ]

})
export class PropertyModule { }
