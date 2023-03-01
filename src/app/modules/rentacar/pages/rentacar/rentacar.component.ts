import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingComponent } from '../shared/booking/booking.component';

@Component({
  selector: 'app-rentacar',
  templateUrl: './rentacar.component.html',
  styleUrls: ['./rentacar.component.scss']
})
export class RentacarComponent {

  constructor(
    private Dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.Dialog.open(BookingComponent, {
      disableClose:true,
    });
  }

}
