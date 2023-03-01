import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IcreateRentAcar } from '../../interfaces/rentacar.interfaces';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { server } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class RentacarService {
  
  private server = server;

  constructor( private http: HttpClient ) { }

  create(rentcar:IcreateRentAcar):Observable<any>{
    return this.http.post<any>(`${this.server}/rentacar/create`,rentcar)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    )
  }

  errorHandeller(error: HttpErrorResponse){
    return throwError( () => error );
  }
  
}
