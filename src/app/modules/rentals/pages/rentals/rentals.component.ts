import { Component } from '@angular/core';
import { InArea, InDistrict, InLocation } from '../../interface/location.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent {

  public districts:InDistrict[] = [];
  public areas:InArea[] = [];
  public locations:InLocation[] = [];

  public inDistrictId:string = '';
  public inAreaId: string = '';


  constructor(private location: LocationService) { }

  ngOnInit(): void {
    this.loadDistricts();
  }

  loadDistricts(){
    this.location.districts()
    .subscribe({
      next: (data)=> {
        this.districts = data;
      }
    })
  }

  loadArea(){
    this.location.findArea(this.inDistrictId)
    .subscribe({
      next: (data)=> {
        this.areas = data;
      }
    })
  }

  loadLocation(){
    this.location.location(this.inAreaId)
    .subscribe({
      next: (data) => {
        this.locations = data;
      }
    })
  }

}
