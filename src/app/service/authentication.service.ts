import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utils } from 'utils';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public userResponse: any;

  constructor(
    private rest: ApiService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }


  /**
   * Login | Post API
   */

  login(f) {
     return this.http.post(`${environment.apiBase}/login`, f).do((result) => {
    });
  }



  /**
   * Logout
   */

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_Id');
    localStorage.removeItem('user_type');
    localStorage.removeItem('registerUser');
    localStorage.removeItem('propertyUserType');
  }



  /**
   * Create User | POST API
   */

  async userCreate(f: any) {
    try {
      Utils.blockPage();
      this.userResponse =  await this.http.post(`${environment.apiBase}/createUser`, f).toPromise();
      if (this.userResponse.Success === true) {
        Utils.unblockPage();
        this.toastr.success('User Registered Successfully');
        this.router.navigate(['/']);
      } else if (this.userResponse.Success === false) {
        Utils.unblockPage();
        this.toastr.success('Try Again Later');
        this.router.navigate(['/']);
      } else {
        Utils.unblockPage();
        this.toastr.success('Invalid Request');
        this.router.navigate(['/']);
      }

      return this.userResponse;
    } catch (error) {
      console.log(error);
    }
  }


  /**
   * Request Password | POST API
   */

  requestPassword(f: any) {
    return this.http.post(`${environment.apiBase}/requestPassword`, f).do((result) => {
    });
  }


  /**
   * Reset Password | POST API
   */

  resetPassword(f: any) {
    return this.http.post(`${environment.apiBase}/resetPassword`, f).do((result) => {
    });
  }


  /**
   * Get User By ID | Get API
   */

  public getUserById(userId) {
    return this.http.get(`${environment.apiBase}/getUser/` + userId).do((result => {
    }));
  }


  /* Dashboard APIs Integrations */


  /**
   * Get User Property | Get API
   */

  public getUserProperty(userId) {
    return this.http.get(`${environment.apiBase}/get/user/property/` + userId).do((result => {
    }));
  }


  /**
   * delete User Property | Delete API
   */

  public deleteProperty(propertyId) {
    return this.http.get(`${environment.apiBase}/delete/property/` + propertyId).do((result => {
    }));
  }


  /**
   * Get Leads Status | Get API
   */

  public getLeadsStatus(user_id, status) {
    return this.http.get(`${environment.apiBase}/get/user/leads` + user_id + '/' + status).do((result => {
    }));
  }


  /**
   * Get Leads Status | Get API
   */

  public updateRecord(f) {
    const xmlFile = f;
    return this.http.post(`${environment.apiBase}/xml/feed`, xmlFile).do((result => {
    }));
  }


}
