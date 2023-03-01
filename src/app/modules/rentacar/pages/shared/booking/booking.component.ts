import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { RentacarService } from '../../services/rentacar.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  public isProcessing: boolean = false;


  // Inside City
  public selectDistricts:string = '';
  public name:string = '';
  public phone:string = '';
  public move_from:string = '';
  public move_to:string = '';
  public description:string = '';
  public Trip_type:string = '';
  public car_type:string = '';
  public passengers:string = '';
  public trip_date:string = '';
  public extra_time:string = '';

  constructor(
    // close dialog
    private dialogRef: DialogRef<BookingComponent>,
    // import services
    private RentCar: RentacarService,
    // SnackBar
    private SanckBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
  }

  close(){
    this.dialogRef.close();
  }

  saveWc(){
    this.isProcessing = true;
    const payload = {
      name: this.name,
      phone: this.phone,
      move_from: this.move_from,
      move_to: this.move_to,
      description: this.description,
      extra_time: this.extra_time,
      type: 'Inside City',
      passengers: this.passengers,
      car_type: this.car_type,
      trip_type: this.Trip_type,
      trip_date: this.trip_date
    }

    this.RentCar.create(payload).subscribe({

      next: (data) => {
        this.SanckBar.open('Bookig request submitted', 'Close');
      },

      error: (error)=> {
        this.SanckBar.open(error.error.error, 'Close');
        this.isProcessing = false;
      }

    });

  }

}
