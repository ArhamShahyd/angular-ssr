import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }


  
  /**
   * Get All Agents | Get API
   */

  // public getAllUsers() {
  //   return this.http.get(`${environment.apiBase}/getUsers`).do((result => {
  //   }));
  // }
}
