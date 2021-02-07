import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL: string = environment.apiBase;
  requestHeaders = new HttpHeaders();

  constructor(
    public http: HttpClient,
  ) { }


// Login
  public loginPost(path?: any, param?: any): Observable<any> {
    return this.http.post(this.BASE_URL + path , param)
        .map((res: HttpResponse<object>) => res);
  }


  public post(path?: any, param?: any): Observable<any> {
    this.updateHeader();
    return this.http.post(this.BASE_URL + path , param, {headers: this.requestHeaders})
      .map((res: HttpResponse<object>) => res)
      .catch((err: any) => Observable.of(true));
  }

  updateHeader() {
    const token = window.localStorage.getItem('token') && JSON.parse(window.localStorage.getItem('token'));
    this.requestHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + token);
  }

}
