import { Injectable } from '@angular/core';
import { IDistrict } from '../interfaces/location.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { core_server } from 'src/app/app.config';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private core_server = core_server;

  constructor(private http: HttpClient) { }

  errorHandeller(error: HttpErrorResponse) {
    return 
  }

}
