import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachineDataApiService {

  baseUrl = 'http://codingcase.zeiss.services';

  constructor(
    private http: HttpClient
  ) {}

  getAllMachines(): Observable<any> {
     return this.http.get(this.baseUrl + '/api/v1/machines/')
      .pipe(
        map((response: any) => {
          return response.data
        }),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      )
  }

  getMachine(machineId: number) {
    return this.http.get(this.baseUrl + '/api/v1/machines/' + machineId)
    .pipe(
      map((response: any) => {
        return response.data
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
