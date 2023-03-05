import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalsComponent } from './pages/rentals/rentals.component';

const routes: Routes = [
  {path: 'rentals', component: RentalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalsRoutingModule { }
