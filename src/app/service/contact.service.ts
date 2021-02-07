import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private rest: ApiService,
    private http: HttpClient
  ) { }


  /**
   * User Complaint Contact Us | POST API
   */

  userComplaint(f) {
    return this.http.post(`${environment.apiBase}/contactus`, f).do((result) => {
    });
  }


}
