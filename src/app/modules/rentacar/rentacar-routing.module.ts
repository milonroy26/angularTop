import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentacarComponent } from './pages/rentacar/rentacar.component';

const routes: Routes = [
  {path: 'rent', component: RentacarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentacarRoutingModule { }
