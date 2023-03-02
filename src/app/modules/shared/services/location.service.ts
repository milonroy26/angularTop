import { Injectable } from '@angular/core';
import { IArea, IDistrict, ILocation } from '../interfaces/location.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { core_server } from 'src/app/app.config';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private core_server = core_server;

  constructor(private http: HttpClient) { }

  districts(): Observable<IDistrict[]> {
    return this.http.get<IDistrict[]>(`${this.core_server}/district/districts`)
    .pipe(catchError(this.errorHandeller));
  }

  findArea(districtId:string):Observable<IArea[]> {
    return this.http.get<IArea[]>(`${this.core_server}/area/areas/${districtId}`)
    .pipe(catchError(this.errorHandeller));
  }

  findLocation(areaId: string): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`${this.core_server}/location/locations/${areaId}`)
    .pipe(catchError(this.errorHandeller));
  }

  errorHandeller(error: HttpErrorResponse) {
    return throwError(() => error);
  }

}
