import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  channel: any;

  constructor(private http: HttpClient) {
    // this.pusher = new Pusher(environment.pusher.key, {
    //   cluster: environment.pusher.cluster,
    //   encrypted: true
    // });
    // this.channel = this.pusher.subscribe('my-channel');

    // this.channel.bind('my-event',function(data){
    //   console.log('my-event binded with pusher ');
    //   console.log(data);
    // });

   }


  //  like( num_likes ) {
  //   this.http.post('http://localhost:3120/update', {'likes': num_likes})
  //   .subscribe(data => {
  //     console.log('hello');
  //   });
  // }



}
