import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private http: HttpClient
  ) { }



  /**
   * Get All Agents | Get API
   */

  public getAllUsers() {
    return this.http.get(`${environment.apiBase}/getUsers`).do((result => {
    }));
  }


  /**
   * Get Agent By ID | Get API
   */

  public getAgentById(userId) {
    return this.http.get(`${environment.apiBase}/getUser/` + userId).do((result => {
    }));
  }


  /**
   * Buyers Lead Generation | Get API
   */

  public buyerLeads(f) {
    return this.http.post(`${environment.apiBase}/contactUser`, f).do((result => {
    }));
  }




  /**
   * Search Agents | Get API
   */

  public SearchAgents(LocationName: string, agentName: string) {
    return this.http.get(`${environment.apiBase}/searchAgents?LocationName=` + LocationName + '&agentName=' + agentName).do((result => {
    }));
  }



  /**
   * Post Reviews Agents | POST API
   */

  public postReviews(f) {
    return this.http.post(`${environment.apiBase}/postreview`, f).do((result => {
    }));
  }



  /**
   * Get Reviews Agents | GET API
   */

  public getReviews(userId) {
    return this.http.get(`${environment.apiBase}/getreview/` + userId).do((result => {
    }));
  }


  /**
   * Get Active Leads | GET API
   */

  public getActLeads(userId) {
    return this.http.get(`${environment.apiBase}/activeLeads/` + userId).do((result => {
    }));
  }


  /**
   * Get Leads Status | GET API
   */

  public getExpiredLeads(userId, status) {
    return this.http.get(`${environment.apiBase}/get/user/leads/` + userId + '/' + status).do((result => {
    }));
  }


  /**
   * Post Leads Status | GET API
   */

  public leadStatusAction(f) {
    return this.http.post(`${environment.apiBase}/update/lead`, f).do((result => {
    }));
  }



}
