import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MachineData } from './types';

@Injectable({
  providedIn: 'root'
})
export class MachineDataApiService {

  baseUrl = 'http://codingcase.zeiss.services';


  constructor(
    private http: HttpClient
  ) {
  }

  getAllMachines(): Observable<any> {
     return this.http.get(this.baseUrl + '/api/v1/machines/')
      .pipe(
        map((response: any) => {
          return response.data
        })
      )
      // .subscribe(res => {
      //   this.setState( { modelOverview: res } );
      // });
  }

  getMachine(machineId: number) {
    return this.http.get(this.baseUrl + '/api/v1/machines/' + machineId)
    .pipe(
      map((response: any) => {
        return response.data
      })
    )
  }

}
