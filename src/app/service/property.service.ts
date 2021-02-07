import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private http: HttpClient
  ) {}


  // async generateLeads(f) {
  //   try {
  //     const response =  await this.http.post(`${environment.apiBase}/contact`, f).toPromise();
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }



  /**
   * Post Property | POST API
   */

  public addProperty(f) {
    return this.http.post(`${environment.apiBase}/property/ad?`, f).do((result => {
    }));
  }


  /**
   * Get All Property | GET API
   */

  public getAllProperty() {
    return this.http.get(`${environment.apiBase}/getProperty/all`).do((result => {
    }));
  }


  /**
   * Get Property By ID | GET API
   */

  public getPropertyById(propertyId) {
    return this.http.get(`${environment.apiBase}/getProperty/` + propertyId).do((result => {
    }));
  }


  /**
   * Search Property | POST API
   */

  public searchProperty(searchResults) {
    return this.http.post(`${environment.apiBase}/property/search`, searchResults).do((result => {
    }));
  }

  /**
   * Search Property Next Result Set | POST API
   */

  public searchPropertyNext(bound) {
    return this.http.post(`${environment.apiBase}/property/search-next`, bound).do((result => {
    }));
  }


  /**
   * Search Property Markers | POST API
   */

  public searchMarkers(searchMarkers) {
    return this.http.post(`${environment.apiBase}/property/search/marker`, searchMarkers).do((result => {
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
   * User Point System | POST API
   */

  public userPointStory(userId) {
    return this.http.get(`${environment.apiBase}/addUserPoint/` + userId).do((result => {
    }));
  }


  /**
   * Get IP Address | Get API
   */

  public getIPAddress() {
    return this.http.get(`http://ip-api.com/json`).do((result => {
    }));
  }

}
