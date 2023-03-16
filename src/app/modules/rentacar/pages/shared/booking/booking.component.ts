import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { RentacarService } from '../../services/rentacar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocationService } from 'src/app/modules/shared/services/location.service';
import { IArea, IDistrict } from 'src/app/modules/shared/interfaces/location.interface';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  public districts: IDistrict[] = [];
  public areas:IArea[] = [];
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

  // INPUT FOR OUTSIDE CITY
  public ocName:string = '';
  public ocPhone:string = '';
  public ocMove_from:string = '';
  public ocMove_to:string = '';
  public ocDescription:string = '';
  public ocTrip_type:string = '';
  public ocCar_type:string = '';
  public ocPassengers:string = '';
  public ocTrip_date:string = '';


  constructor(
    // close dialog
    private dialogRef: DialogRef<BookingComponent>,
    // import services
    private RentCar: RentacarService,
    // SnackBar
    private SanckBar: MatSnackBar,
    // import location service
    private location: LocationService
  ) { }

  ngOnInit(): void {
    this.location.districts().subscribe({
      next: (data) => {
       this.districts = data
      }
    })
  }

  loadUpozila(){
    this.move_from = '';
    this.move_to = '';
    this.location.findArea(this.selectDistricts).subscribe({
      next: (data) => {
        this.areas = data;
      }
    })
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
        this.dialogRef.close();
      },
      
      error: (error)=> {
        this.SanckBar.open(error.error.error, 'Close');
        this.isProcessing = false;
      }

    });

  }

  saveOC(){
    this.isProcessing = true;

    const payload = {
      name: this.ocName,
      phone: this.ocPhone,
      move_from: this.ocMove_from,
      move_to: this.ocMove_to,
      description: this.ocDescription,
      extra_time: '',
      type: 'Outside City',
      passengers: this.ocPassengers,
      car_type: this.ocCar_type,
      trip_type: this.ocTrip_type,
      trip_date: this.ocTrip_date
    }

    this.RentCar.create(payload)
    .subscribe({
      next: (data) => {
        this.SanckBar.open('Booking request has placed!', 'close');
        this.dialogRef.close();
      },

      error: (Error) => {
        this.SanckBar.open(Error.error.error, 'Close');
        this.isProcessing = false;
      }
    })

  }

}
