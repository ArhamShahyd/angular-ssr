import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient
  ) { }


/**
 * Post Messages | POST API
 */

  public postMessages(f) {
    return this.http.post(`${environment.apiBase}/create/message`, f).do((result => {
    }));
  }




/**
 * Get All Messages | GET API
 */

  public getAllMessages(userId) {
    return this.http.get(`${environment.apiBase}/get/allMessages/` + userId).do((result => {
    }));
  }



  /**
   * Get Specific Message | GET API
   */

  public getSpecificMessage(propertyId, userId) {
    return this.http.get(`${environment.apiBase}/get/chat/` + propertyId + '/' + userId).do((result => {
    }));
  }



  /**
   * Get Specific Message | GET API
   */

  public getViewMessage(userId) {
    return this.http.get(`${environment.apiBase}/searchForContactedUser/` + userId).do((result => {
    }));
  }







}
