import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { core_server } from 'src/app/app.config';
import { InArea, InDistrict, InLocation } from '../interface/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private core_server = core_server;

  constructor(private http: HttpClient) { }

  districts():Observable<InDistrict[]>{
    return this.http.get<InDistrict[]>(`${this.core_server}/district/districts`)
    .pipe(catchError(this.errorHandeller));
  }

  findArea(districtId:string):Observable<InArea[]>{
    return this.http.get<InArea[]>(`${this.core_server}/area/areas/${districtId}`)
    .pipe(catchError(this.errorHandeller));
  }

  location(areaId:string):Observable<InLocation[]>{
    return this.http.get<InLocation[]>(`${this.core_server}/location/locations/${areaId}`)
    .pipe(catchError(this.errorHandeller));
  }

  errorHandeller(error: HttpErrorResponse){
    return throwError(() => error)
  }

}
